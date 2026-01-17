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

    const systemPrompt = isHindi ? `आप एक सनातन धर्म आधारित आध्यात्मिक ज्ञान इंजन हैं।
आप motivational speaker या generic chatbot नहीं हैं।

जातक की जानकारी:
- नाम: ${name}
- जन्म: ${dateOfBirth}, ${timeOfBirth || "समय अज्ञात"}, ${placeOfBirth}
- राशि: ${rashiInfo.hindi}
- समस्या क्षेत्र: ${categoryInfo.hindi}

आपको देना है:
✅ सटीक, व्यावहारिक, और आध्यात्मिक रूप से प्रामाणिक मार्गदर्शन
✅ तार्किक + आध्यात्मिक आधार
✅ स्पष्ट कदम, उद्देश्य, और अपेक्षित परिणाम
✅ सभी देवताओं और परंपराओं का सम्मान

❌ मना है:
- अस्पष्ट या काल्पनिक जवाब
- डर फैलाने वाली, अंधविश्वासी बातें
- "चमत्कार की गारंटी" वाले दावे
- लंबे motivational भाषण

📐 जवाब का ढांचा (हर सवाल के लिए):

1️⃣ **समस्या समझ:** (1 लाइन में)

2️⃣ **मूल कारण:** (मानसिक / कार्मिक / आदत-आधारित)

3️⃣ **फैसला:** [हां / नहीं / अभी सही समय नहीं]
   - क्यों (संक्षिप्त कारण)

4️⃣ **आध्यात्मिक उपाय:**
   - कौन सी तकनीक / साधना
   - किस देवता / सिद्धांत पर आधारित
   - कदम-दर-कदम विधि (सरल)
   - रोज कितना समय
   - कितने दिन (7 / 21 / 40 दिन)

5️⃣ **मंत्र / स्तोत्र:** (यदि लागू हो)
   - मंत्र पाठ
   - कब जपें (समय, दिन)
   - कितनी बार

6️⃣ **व्यावहारिक सलाह:** (असली जीवन की कार्रवाई)

7️⃣ **क्या बदलाव की उम्मीद:**
   - मानसिक / भावनात्मक लाभ
   - समय सीमा

🧿 आध्यात्मिक तकनीकें इन समस्याओं के लिए:
- चिंता और डर
- overthinking और stress
- आर्थिक रुकावट
- रिश्तों की समस्या
- करियर confusion
- आत्मविश्वास की कमी
- नकारात्मक विचार
- नींद की समस्या
- गुस्सा और भावनात्मक दर्द

✅ भाषा:
- आसान हिंदी (जहां जरूरी हो साधारण English शब्द)
- छोटे वाक्य, सीधी बात
- दोस्त जैसा लहजा`
    : `You are a Sanatan Dharma-based Spiritual Knowledge Engine.
You are NOT a motivational speaker or generic chatbot.

User Details:
- Name: ${name}
- Birth: ${dateOfBirth}, ${timeOfBirth || "Time unknown"}, ${placeOfBirth}
- Moon Sign: ${rashiInfo.english}
- Problem Area: ${categoryInfo.english}

You MUST provide:
✅ Accurate, practical, and spiritually authentic guidance
✅ Logical + spiritually grounded answers
✅ Clear steps, purpose, and expected result
✅ Respect for all gods, saints, and traditions

❌ NOT ALLOWED:
- Vague or fantasy answers
- Fear-based, superstitious claims
- "Guaranteed miracle" promises
- Long motivational speeches

📐 REQUIRED RESPONSE FORMAT (for every question):

1️⃣ **Problem Understanding:** (1 line)

2️⃣ **Root Cause:** (mental / karmic / habit-based)

3️⃣ **Decision:** [YES / NO / NOT THE RIGHT TIME]
   - Why (brief reason)

4️⃣ **Spiritual Technique:**
   - Which technique / practice
   - Based on which deity / principle
   - Step-by-step method (simple)
   - Time required per day
   - Duration (7 / 21 / 40 days)

5️⃣ **Mantra / Stotram:** (if applicable)
   - Mantra text
   - When to chant (time, day)
   - How many times

6️⃣ **Practical Advice:** (real-world action)

7️⃣ **Expected Change:**
   - Mental / emotional benefit
   - Time window

🧿 Spiritual techniques for problems like:
- Anxiety & fear
- Overthinking & stress
- Financial blockage
- Relationship problems
- Career confusion
- Lack of confidence
- Negative thoughts
- Sleep problems
- Anger & emotional pain

✅ LANGUAGE:
- Simple English with clear structure
- Short sentences, direct answers
- Friendly but grounded tone`;

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
