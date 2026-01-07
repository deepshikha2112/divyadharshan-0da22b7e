import { useState, useRef, useCallback } from 'react';

interface TTSOptions {
  voiceId?: string;
  onProgress?: (currentParagraph: number, totalParagraphs: number) => void;
}

export const useElevenLabsTTS = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [totalParagraphs, setTotalParagraphs] = useState(0);
  const [error, setError] = useState<string | null>(null);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const paragraphsRef = useRef<string[]>([]);
  const currentIndexRef = useRef(0);
  const optionsRef = useRef<TTSOptions>({});
  const isStoppedRef = useRef(false);
  const isPlayingRef = useRef(false);

  const generateAndPlayParagraph = useCallback(async (index: number) => {
    if (isStoppedRef.current || index >= paragraphsRef.current.length) {
      setIsPlaying(false);
      setIsLoading(false);
      isPlayingRef.current = false;
      return;
    }

    const paragraph = paragraphsRef.current[index];
    if (!paragraph.trim()) {
      // Skip empty paragraphs
      currentIndexRef.current = index + 1;
      setCurrentParagraph(index + 1);
      await generateAndPlayParagraph(index + 1);
      return;
    }

    setIsLoading(true);
    setCurrentParagraph(index);
    currentIndexRef.current = index;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/elevenlabs-tts`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            text: paragraph,
            voiceId: optionsRef.current.voiceId,
          }),
        }
      );

      // Check if stopped during fetch
      if (isStoppedRef.current) {
        setIsLoading(false);
        return;
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `TTS request failed: ${response.status}`);
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      
      // Check if stopped during blob processing
      if (isStoppedRef.current) {
        URL.revokeObjectURL(audioUrl);
        setIsLoading(false);
        return;
      }

      // Clean up previous audio safely
      if (audioRef.current) {
        const oldAudio = audioRef.current;
        const oldSrc = oldAudio.src;
        oldAudio.onended = null;
        oldAudio.onerror = null;
        oldAudio.pause();
        audioRef.current = null;
        // Delay URL cleanup to prevent race conditions
        setTimeout(() => URL.revokeObjectURL(oldSrc), 100);
      }

      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      
      audio.onended = () => {
        URL.revokeObjectURL(audioUrl);
        if (!isStoppedRef.current) {
          generateAndPlayParagraph(index + 1);
        }
      };

      audio.onerror = (e) => {
        console.error('Audio playback error:', e);
        setError('Audio playback failed');
        setIsPlaying(false);
        setIsLoading(false);
        isPlayingRef.current = false;
      };

      setIsLoading(false);
      setIsPlaying(true);
      isPlayingRef.current = true;
      
      // Handle play with proper error catching for AbortError
      try {
        await audio.play();
      } catch (playError) {
        // Ignore AbortError as it's expected when stopping
        if (playError instanceof Error && playError.name === 'AbortError') {
          console.log('Playback aborted (expected when stopping)');
          return;
        }
        throw playError;
      }
      
      optionsRef.current.onProgress?.(index, paragraphsRef.current.length);
    } catch (err) {
      // Only log non-abort errors
      if (!(err instanceof Error && err.name === 'AbortError')) {
        console.error('TTS error:', err);
        setError(err instanceof Error ? err.message : 'TTS generation failed');
      }
      setIsLoading(false);
      setIsPlaying(false);
      isPlayingRef.current = false;
    }
  }, []);

  const startNarration = useCallback(async (text: string, options?: TTSOptions) => {
    // Stop any existing narration first
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.onended = null;
      audioRef.current.onerror = null;
      URL.revokeObjectURL(audioRef.current.src);
      audioRef.current = null;
    }
    
    // Reset state
    isStoppedRef.current = false;
    setError(null);
    setIsPaused(false);
    
    // Split text into paragraphs
    const paragraphs = text.split('\n\n').filter(p => p.trim().length > 0);
    paragraphsRef.current = paragraphs;
    optionsRef.current = options || {};
    setTotalParagraphs(paragraphs.length);
    
    // Start from first paragraph
    await generateAndPlayParagraph(0);
  }, [generateAndPlayParagraph]);

  const pauseNarration = useCallback(() => {
    if (audioRef.current && isPlayingRef.current && !isPaused) {
      audioRef.current.pause();
      setIsPaused(true);
    }
  }, [isPaused]);

  const resumeNarration = useCallback(() => {
    if (audioRef.current && isPaused) {
      audioRef.current.play().catch(console.error);
      setIsPaused(false);
    }
  }, [isPaused]);

  const stopNarration = useCallback(() => {
    isStoppedRef.current = true;
    isPlayingRef.current = false;
    if (audioRef.current) {
      audioRef.current.onended = null;
      audioRef.current.onerror = null;
      audioRef.current.pause();
      URL.revokeObjectURL(audioRef.current.src);
      audioRef.current = null;
    }
    setIsPlaying(false);
    setIsPaused(false);
    setIsLoading(false);
    setCurrentParagraph(0);
    paragraphsRef.current = [];
    currentIndexRef.current = 0;
  }, []);

  return {
    isLoading,
    isPlaying,
    isPaused,
    currentParagraph,
    totalParagraphs,
    error,
    startNarration,
    pauseNarration,
    resumeNarration,
    stopNarration,
  };
};
