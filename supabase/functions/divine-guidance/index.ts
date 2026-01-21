import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Valid rashi/zodiac signs
const VALID_RASHIS = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
] as const;

// Valid problem categories
const VALID_CATEGORIES = [
  "career", "love", "marriage", "finance", "health", "education", "family"
] as const;

// Valid genders
const VALID_GENDERS = ["male", "female", "other"] as const;

// Valid languages
const VALID_LANGUAGES = ["hindi", "english"] as const;

// Input validation schema
const guidanceSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long (max 100 chars)").trim(),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (use YYYY-MM-DD)"),
  timeOfBirth: z.string().transform(val => val === "" ? null : val).pipe(z.string().regex(/^\d{2}:\d{2}$/, "Invalid time format (use HH:MM)").nullable()).optional(),
  placeOfBirth: z.string().min(1, "Place is required").max(200, "Place too long (max 200 chars)").trim(),
  gender: z.enum(VALID_GENDERS).optional().or(z.literal("").transform(() => undefined)),
  problemCategory: z.enum(VALID_CATEGORIES),
  problem: z.string().min(10, "Problem too short (min 10 chars)").max(500, "Problem too long (max 500 chars)").trim(),
  rashi: z.enum(VALID_RASHIS),
  language: z.enum(VALID_LANGUAGES).default("hindi")
});

const rashiNames: Record<string, { hindi: string; english: string }> = {
  "Aries": { hindi: "मेष", english: "Aries" },
  "Taurus": { hindi: "वृषभ", english: "Taurus" },
  "Gemini": { hindi: "मिथुन", english: "Gemini" },
  "Cancer": { hindi: "कर्क", english: "Cancer" },
  "Leo": { hindi: "सिंह", english: "Leo" },
  "Virgo": { hindi: "कन्या", english: "Virgo" },
  "Libra": { hindi: "तुला", english: "Libra" },
  "Scorpio": { hindi: "वृश्चिक", english: "Scorpio" },
  "Sagittarius": { hindi: "धनु", english: "Sagittarius" },
  "Capricorn": { hindi: "मकर", english: "Capricorn" },
  "Aquarius": { hindi: "कुंभ", english: "Aquarius" },
  "Pisces": { hindi: "मीन", english: "Pisces" }
};

const problemCategories: Record<string, { hindi: string; english: string }> = {
  "career": { hindi: "करियर/नौकरी", english: "Career/Job" },
  "love": { hindi: "प्रेम/रिश्ते", english: "Love/Relationships" },
  "marriage": { hindi: "विवाह", english: "Marriage" },
  "finance": { hindi: "आर्थिक/धन", english: "Finance/Money" },
  "health": { hindi: "स्वास्थ्य", english: "Health" },
  "education": { hindi: "शिक्षा", english: "Education" },
  "family": { hindi: "परिवार", english: "Family" }
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse and validate input
    const rawInput = await req.json();
    const parseResult = guidanceSchema.safeParse(rawInput);
    
    if (!parseResult.success) {
      const errorMessage = parseResult.error.issues.map(i => i.message).join(", ");
      return new Response(
        JSON.stringify({ error: `Invalid input: ${errorMessage}` }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { 
      name, 
      dateOfBirth, 
      timeOfBirth, 
      placeOfBirth, 
      gender,
      problemCategory,
      problem, 
      rashi,
      language
    } = parseResult.data;
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("[divine-guidance] API key not configured");
      return new Response(
        JSON.stringify({ error: "Service temporarily unavailable" }),
        { status: 503, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const rashiInfo = rashiNames[rashi] || { hindi: rashi, english: rashi };
    const categoryInfo = problemCategories[problemCategory] || { hindi: problemCategory, english: problemCategory };
    
    const isHindi = language === "hindi";

    const systemPrompt = isHindi ? `आप एक अनुभवी वैदिक ज्योतिषी हैं - 15+ साल का अनुभव।
आप स्पष्ट, व्यावहारिक और तार्किक बोलते हैं।
आप chatbot, therapist, या motivational coach नहीं हैं।

जातक की जानकारी:
- नाम: ${name}
- जन्म: ${dateOfBirth}, ${timeOfBirth || "समय अज्ञात"}, ${placeOfBirth}
- राशि: ${rashiInfo.hindi}
- समस्या क्षेत्र: ${categoryInfo.hindi}

❗ कठोर नियम (अनिवार्य):

✅ सटीक प्रश्न पर रहें - विषय न बदलें
✅ असंबंधित जीवन सलाह न दें
✅ कोई अस्पष्ट या आध्यात्मिक भराव नहीं

❌ वर्जित वाक्यांश:
- "ऊर्जा बदल रही है"
- "ब्रह्मांड परीक्षा ले रहा है"
- "प्रक्रिया पर भरोसा रखें"
- "दिव्य समय"
- "धैर्य और सकारात्मक रहें"

✅ स्पष्ट निष्कर्ष अनिवार्य - हर उत्तर में निष्कर्ष होना चाहिए
✅ केवल सरल ज्योतिष तर्क:
   - ग्रह
   - भाव
   - दशा/गोचर
   - अधिकतम 2 कारण

📐 उत्तर प्रारूप (बदलें नहीं):

**सीधा जवाब:** (हां / नहीं / स्पष्ट परिणाम)

**कारण:** (1-2 तार्किक ज्योतिष बिंदु)

**समय सीमा:** (विशिष्ट अवधि या स्पष्ट शर्त)

**अंतिम निर्णय:** (एक पंक्ति निष्कर्ष)

🧠 व्यवहार नियंत्रण:
- यदि डेटा अपर्याप्त → कहें: "वर्तमान ग्रह संकेतों के आधार पर, परिणाम संभावित नहीं है।"
- यदि उत्तर नकारात्मक → स्पष्ट रूप से कहें, नरम नहीं
- अधिक व्याख्या न करें
- शब्द सीमा: अधिकतम 60 शब्द`
    : `You are an experienced Vedic astrologer with 15+ years of practice.
You speak clearly, practically, and logically.
You do NOT speak like a chatbot, therapist, or motivational coach.

User Details:
- Name: ${name}
- Birth: ${dateOfBirth}, ${timeOfBirth || "Time unknown"}, ${placeOfBirth}
- Moon Sign: ${rashiInfo.english}
- Problem Area: ${categoryInfo.english}

❗ STRICT RULES (MANDATORY)

✅ Stay on the exact question - Do NOT change the topic
✅ Do NOT add unrelated life advice
✅ No vague or spiritual filler

❌ Forbidden phrases:
- "Energy is shifting"
- "Universe is testing you"
- "Trust the process"
- "Divine timing"
- "Be patient and positive"

✅ Clear conclusion required - Every answer MUST have a conclusion
✅ Use simple astrology logic only:
   - Planet
   - House
   - Dasha / transit
   - Maximum 2 reasons

📐 RESPONSE FORMAT (DO NOT CHANGE):

**Direct Answer:** (YES / NO / CLEAR OUTCOME)

**Reason:** (1–2 logical astrology points)

**Time Frame:** (specific period or clear condition)

**Final Verdict:** (one-line conclusion)

🧠 BEHAVIOR CONTROLS:
- If data is insufficient → say: "Based on current planetary indicators, the outcome is unlikely."
- If answer is negative → say it clearly, not softly.
- Do NOT over-explain.
- Word limit: 60 words max`;

    const userMessage = isHindi 
      ? `प्रश्न: ${problem}`
      : `Question: ${problem}`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage }
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        const errorMsg = isHindi 
          ? "अभी बहुत अनुरोध आ रहे हैं। कृपया कुछ क्षण प्रतीक्षा करें।"
          : "Too many requests. Please wait a moment and try again.";
        return new Response(JSON.stringify({ error: errorMsg }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        const errorMsg = isHindi 
          ? "सेवा अस्थायी रूप से अनुपलब्ध है।"
          : "Service temporarily unavailable.";
        return new Response(JSON.stringify({ error: errorMsg }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      console.error("[divine-guidance] AI gateway error:", response.status);
      const errorMsg = isHindi 
        ? "मार्गदर्शन प्राप्त करने में त्रुटि हुई।"
        : "Error getting guidance.";
      return new Response(JSON.stringify({ error: errorMsg }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("[divine-guidance] Internal error:", error);
    return new Response(JSON.stringify({ 
      error: "Service error. Please try again later."
    }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
