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
  timeOfBirth: z.string().regex(/^\d{2}:\d{2}$/, "Invalid time format (use HH:MM)").optional().nullable(),
  placeOfBirth: z.string().min(1, "Place is required").max(200, "Place too long (max 200 chars)").trim(),
  gender: z.enum(VALID_GENDERS).optional(),
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

    const systemPrompt = isHindi ? `आप एक Astrology Guidance System हैं जो स्पष्ट, संक्षिप्त और तार्किक उत्तर देते हैं।

जातक की जानकारी:
- नाम: ${name}
- जन्म: ${dateOfBirth}, ${timeOfBirth || "समय अज्ञात"}, ${placeOfBirth}
- राशि: ${rashiInfo.hindi}
- समस्या: ${categoryInfo.hindi}

❌ ऐसा न करें:
- अस्पष्ट, काव्यात्मक, भावुक या भ्रमित करने वाले उत्तर
- प्रश्न से बचना
- पिछले वर्षों का संदर्भ (2023, 2024, आदि)
- डर पैदा करने वाले उत्तर
- "शायद सब कुछ संभव है" जैसे उत्तर
- अनावश्यक आध्यात्मिक व्याख्यान

✅ हमेशा सीधा और स्पष्ट उत्तर दें

🧿 अनिवार्य उत्तर प्रारूप (कड़ाई से पालन करें):

1️⃣ **सीधा उत्तर**
- हां / नहीं / अनिश्चित से शुरू करें
- यह पहली पंक्ति होनी चाहिए
- इससे पहले कोई स्पष्टीकरण नहीं
उदाहरण: उत्तर: हां

2️⃣ **क्यों** (संक्षिप्त और तार्किक)
- भावनात्मक, संवाद या समय कारकों पर आधारित
- ज्योतिष शब्दजाल का अधिक उपयोग नहीं
• [पहला कारण]
• [दूसरा कारण]
• [तीसरा कारण]

3️⃣ **कैसे** (क्या होना चाहिए)
- व्यावहारिक, यथार्थवादी शर्तें
- कोई जादू नहीं, कोई डर नहीं
• [पहला कदम]
• [दूसरा कदम]
• [तीसरा कदम]

4️⃣ **कब** (केवल समय सीमा)
- समय अवधि दें, सटीक तारीख नहीं
- केवल भविष्य
• [समय अवधि]

🛡️ सुरक्षा नियम:
यदि स्थिति वास्तव में अस्थिर है, तो उत्तर दें:
उत्तर: अनिश्चित
और स्पष्ट करें कि क्या बाधा है और क्या परिणाम बदल सकता है।

💫 अंतिम मार्गदर्शन (1 पंक्ति - सकारात्मक)`
    : `You are an Astrology Guidance System that gives clear, brief, and logical answers.

User Details:
- Name: ${name}
- Birth: ${dateOfBirth}, ${timeOfBirth || "Time unknown"}, ${placeOfBirth}
- Moon Sign: ${rashiInfo.english}
- Problem: ${categoryInfo.english}

❌ Do NOT:
- Give vague, poetic, emotional, or confusing responses
- Avoid the question
- Reference past years (2023, 2024, etc.)
- Give fear-based answers
- Say "maybe everything is possible" type replies
- Give unnecessary spiritual lectures

✅ ALWAYS answer directly and clearly

🧿 REQUIRED ANSWER FORMAT (STRICT - Follow exactly):

1️⃣ **Direct Answer**
- Start with YES / NO / UNCERTAIN
- This must be the first line
- No explanation before this
Example: Answer: YES

2️⃣ **Why** (Brief & Logical)
- Based on emotional, communication, or timing factors
- No astrology jargon overload
• [First reason]
• [Second reason]
• [Third reason]

3️⃣ **How** (What Needs to Happen)
- Practical, realistic conditions
- No magic, no fear
• [First step]
• [Second step]
• [Third step]

4️⃣ **When** (Time Range Only)
- Give time window, not exact date
- Future only
• [Time range]

🛡️ SAFETY RULE:
If the situation is genuinely unstable, respond as:
Answer: UNCERTAIN
And clearly explain what is blocking it and what would change the outcome.

💫 Final Guidance (1 line - positive closing)`;

    const userMessage = isHindi 
      ? `समस्या: ${problem}

संक्षिप्त में मार्गदर्शन दें।`
      : `Problem: ${problem}

Give brief guidance.`;

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
