import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { encode as base64Encode } from "https://deno.land/std@0.168.0/encoding/base64.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.89.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Mood-specific prompts for continuous meditation soundscapes
const MOOD_PROMPTS: Record<string, string> = {
  peaceful: "Soft flowing Indian bansuri flute with distant temple bells, slow river water ambience, gentle wind through trees, very low heartbeat-like bass drone, meditative tanpura in background. Continuous flowing peaceful soundscape for deep relaxation. No silence, no sudden changes. 50 BPM tempo. Ultra calm.",
  
  stressed: "Deep slow tanpura drone meditation music, long sustained ambient pads, faint ocean waves in distance, no high frequencies, grounding earth tones, slow rhythmic pulse like gentle breathing. Continuous calming soundscape for nervous system reset. No breaks, seamless loop. 45 BPM.",
  
  sad: "Heart-frequency warm ambient pad, gentle choir-like humming tones, soft echo reverb, comforting warm frequencies, emotional healing soundscape with slow violin-like synth. Continuous flowing sound for emotional release and comfort. No silence. 40 BPM.",
  
  angry: "Slow rhythmic soft tribal drum pulse, very subtle earthy drone, distant crackling fire ambience, grounding low frequencies, gradual tension release soundscape. Continuous calming meditation for anger release. No sudden sounds. 55 BPM.",
  
  anxious: "Alpha wave binaural beats 10Hz, soft singing bowls, gentle tibetan bells, calming ambient pads, slow breathing rhythm undertone. Continuous grounding soundscape for anxiety relief. Seamless loop, no breaks. 45 BPM.",
  
  happy: "Bright uplifting ambient with soft flute melodies, gentle wind chimes, joyful temple bells, celebrating morning energy. Continuous positive meditation soundscape. Flowing seamless audio. 60 BPM.",
  
  devotional: "Sacred Om chanting drone, soft harmonium pad with long reverb, temple atmosphere with distant bells, divine presence meditation soundscape. Bhakti spiritual continuous ambient. No silence. 50 BPM.",
  
  sleep: "Very soft humming drone, slow breathing-paced ambient pad, distant crickets and gentle night wind, extremely low volume flowing sound. Continuous sleep meditation soundscape. Fade-safe for looping. 40 BPM.",
  
  focus: "Singing bowls resonance, steady alpha wave tones, centered attention meditation soundscape, clear bell tones with long decay. Continuous focus ambient. No distracting elements. 50 BPM.",
  
  energy: "Light uplifting percussion with soft beats, bright major key ambient pad, energizing morning meditation soundscape. Continuous motivational audio flow. 65 BPM.",
  
  divine: "Sacred frequencies 528Hz healing tones, Om resonance drone, celestial choir pads, divine cosmic ambient meditation. Continuous spiritual soundscape. Seamless ethereal loop. 45 BPM.",
  
  powerful: "Deep powerful drone, epic ambient pad, majestic meditation soundscape with subtle percussion undertone. Continuous empowering audio flow. 55 BPM.",
  
  emotional: "Heart-centered warm frequencies, gentle emotional release ambient, soft strings-like synthesizer, comforting meditation soundscape. Continuous healing audio. 45 BPM."
};

const VALID_MOODS = Object.keys(MOOD_PROMPTS);

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Validate authentication
    const authHeader = req.headers.get('Authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } }
    });

    const token = authHeader.replace('Bearer ', '');
    const { data: claimsData, error: claimsError } = await supabase.auth.getUser(token);
    
    if (claimsError || !claimsData?.user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { mood, duration = 30 } = await req.json();
    
    // Validate mood parameter
    if (!mood || !VALID_MOODS.includes(mood)) {
      return new Response(
        JSON.stringify({ error: "Invalid mood parameter" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate duration
    const safeDuration = Math.min(Math.max(Number(duration) || 30, 10), 120);

    // Try ELEVENLABS_API_KEY first, then fallback to ELEVENLABS_API_KEY_1
    const ELEVENLABS_API_KEY = Deno.env.get("ELEVENLABS_API_KEY") || Deno.env.get("ELEVENLABS_API_KEY_1");

    if (!ELEVENLABS_API_KEY) {
      console.error("[meditation-music] API key not configured");
      return new Response(
        JSON.stringify({ error: "Service temporarily unavailable" }),
        { status: 503, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const prompt = MOOD_PROMPTS[mood];

    const response = await fetch(
      "https://api.elevenlabs.io/v1/music",
      {
        method: "POST",
        headers: {
          "xi-api-key": ELEVENLABS_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
          duration_seconds: safeDuration,
        }),
      }
    );

    if (!response.ok) {
      console.error("[meditation-music] API error:", response.status);
      return new Response(
        JSON.stringify({ error: "Audio generation failed" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const audioBuffer = await response.arrayBuffer();
    
    // Return as base64 for caching on client
    const base64Audio = base64Encode(audioBuffer);

    return new Response(
      JSON.stringify({ 
        audioContent: base64Audio,
        mood,
        duration: safeDuration 
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("[meditation-music] Internal error:", error);
    return new Response(
      JSON.stringify({ error: "Service error. Please try again later." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
