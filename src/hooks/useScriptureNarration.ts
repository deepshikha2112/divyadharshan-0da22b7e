import { useState, useRef, useCallback, useEffect } from 'react';

interface NarrationOptions {
  rate?: number;
  pitch?: number;
  volume?: number;
  voice?: SpeechSynthesisVoice | null;
}

export const useScriptureNarration = () => {
  const [isNarrating, setIsNarrating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const paragraphsRef = useRef<string[]>([]);
  const optionsRef = useRef<NarrationOptions>({
    rate: 0.85,
    pitch: 1.0,
    volume: 1.0,
  });

  // Load available voices
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      if (availableVoices.length > 0) {
        setVoices(availableVoices);
        
        // Try to find a calm, spiritual-sounding voice
        const preferredVoices = availableVoices.filter(
          (v) =>
            v.lang.startsWith('en') &&
            (v.name.toLowerCase().includes('samantha') ||
              v.name.toLowerCase().includes('karen') ||
              v.name.toLowerCase().includes('moira') ||
              v.name.toLowerCase().includes('fiona') ||
              v.name.toLowerCase().includes('alex') ||
              v.name.toLowerCase().includes('daniel') ||
              v.name.toLowerCase().includes('google'))
        );
        
        const voice = preferredVoices[0] || availableVoices.find((v) => v.lang.startsWith('en')) || availableVoices[0];
        setSelectedVoice(voice);
      }
    };

    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const speakParagraph = useCallback(
    (index: number) => {
      if (index >= paragraphsRef.current.length) {
        setIsNarrating(false);
        setIsPaused(false);
        setCurrentParagraph(0);
        return;
      }

      const text = paragraphsRef.current[index].trim();
      if (!text) {
        speakParagraph(index + 1);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = optionsRef.current.rate || 0.85;
      utterance.pitch = optionsRef.current.pitch || 1.0;
      utterance.volume = optionsRef.current.volume || 1.0;
      
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.onend = () => {
        // Small pause between paragraphs for natural reading
        setTimeout(() => {
          setCurrentParagraph(index + 1);
          speakParagraph(index + 1);
        }, 800);
      };

      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event);
        setIsNarrating(false);
        setIsPaused(false);
      };

      utteranceRef.current = utterance;
      setCurrentParagraph(index);
      speechSynthesis.speak(utterance);
    },
    [selectedVoice]
  );

  const startNarration = useCallback(
    (text: string, options?: NarrationOptions) => {
      // Cancel any existing speech
      speechSynthesis.cancel();

      if (options) {
        optionsRef.current = { ...optionsRef.current, ...options };
      }

      // Split text into paragraphs
      paragraphsRef.current = text.split('\n\n').filter((p) => p.trim());

      setIsNarrating(true);
      setIsPaused(false);
      setCurrentParagraph(0);

      speakParagraph(0);
    },
    [speakParagraph]
  );

  const pauseNarration = useCallback(() => {
    if (isNarrating && !isPaused) {
      speechSynthesis.pause();
      setIsPaused(true);
    }
  }, [isNarrating, isPaused]);

  const resumeNarration = useCallback(() => {
    if (isNarrating && isPaused) {
      speechSynthesis.resume();
      setIsPaused(false);
    }
  }, [isNarrating, isPaused]);

  const stopNarration = useCallback(() => {
    speechSynthesis.cancel();
    setIsNarrating(false);
    setIsPaused(false);
    setCurrentParagraph(0);
  }, []);

  const setRate = useCallback((rate: number) => {
    optionsRef.current.rate = rate;
  }, []);

  const setVolume = useCallback((volume: number) => {
    optionsRef.current.volume = volume;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      speechSynthesis.cancel();
    };
  }, []);

  return {
    isNarrating,
    isPaused,
    currentParagraph,
    totalParagraphs: paragraphsRef.current.length,
    voices,
    selectedVoice,
    setSelectedVoice,
    startNarration,
    pauseNarration,
    resumeNarration,
    stopNarration,
    setRate,
    setVolume,
  };
};
