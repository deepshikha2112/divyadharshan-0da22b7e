import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

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
    const { 
      name, 
      dateOfBirth, 
      timeOfBirth, 
      placeOfBirth, 
      gender,
      problemCategory,
      problem, 
      rashi,
      language = "hindi" 
    } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const rashiInfo = rashiNames[rashi] || { hindi: rashi, english: rashi };
    const categoryInfo = problemCategories[problemCategory] || { hindi: problemCategory, english: problemCategory };
    
    const isHindi = language === "hindi";

    const systemPrompt = isHindi ? `आप AstroTalk जैसे professional ज्योतिषी हैं। संक्षिप्त, स्पष्ट उत्तर दें।

जातक की जानकारी:
- नाम: ${name}
- जन्म: ${dateOfBirth}, ${timeOfBirth || "समय अज्ञात"}, ${placeOfBirth}
- राशि: ${rashiInfo.hindi}
- समस्या: ${categoryInfo.hindi}

⚠️ महत्वपूर्ण नियम:
- कुल 120-180 शब्दों में उत्तर दें
- लंबे paragraphs न लिखें
- ज्योतिष theory न समझाएं
- Bullet points और short lines में लिखें

📜 RESPONSE FORMAT (इसी क्रम में):

🔹 **वर्तमान स्थिति** (2-3 lines max)
- अभी क्या चल रहा है
- ऐसा क्यों हो रहा है

🔹 **आपके प्रश्न का उत्तर** (bullet points, max 5)
• [पहला point]
• [दूसरा point]
• [तीसरा point]

🔹 **समय अनुमान** (एक line प्रति period)
• अगले 3 महीने: ...
• अगले 6 महीने: ...
• अगला 1 साल: ...

🔹 **क्या करें** (केवल 2 points)
✅ [एक practical action]
✅ [एक mindset change]

🔹 **उपाय** (केवल 1)
🙏 [एक मंत्र या आदत]

🔹 **समापन** (1 line)
💫 [positive closing]

❌ AVOID: लंबी व्याख्या, कहानी, डर, गारंटी, दोहराव`
    : `You are an AstroTalk-style professional astrologer. Give brief, structured answers.

User Details:
- Name: ${name}
- Birth: ${dateOfBirth}, ${timeOfBirth || "Time unknown"}, ${placeOfBirth}
- Moon Sign: ${rashiInfo.english}
- Problem: ${categoryInfo.english}

⚠️ CRITICAL RULES:
- Total response: 120-180 words ONLY
- NO long paragraphs
- NO astrology theory explanations
- Use bullet points and short lines

📜 RESPONSE FORMAT (Follow exactly):

🔹 **Current Phase** (2-3 lines max)
- What phase you're going through
- Why things feel this way

🔹 **Answer to Your Question** (bullet points, max 5)
• [First point]
• [Second point]
• [Third point]

🔹 **Time Prediction** (one line each)
• Next 3 months: ...
• Next 6 months: ...
• Next 1 year: ...

🔹 **What to Do** (ONLY 2 points)
✅ [One practical action]
✅ [One mindset change]

🔹 **Remedy** (ONLY 1)
🙏 [One mantra OR one habit]

🔹 **Closing** (1 line)
💫 [Positive closing]

❌ AVOID: Long explanations, storytelling, fear, guarantees, repetition`;

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
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
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
    console.error("Divine guidance error:", error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : "Unknown error" 
    }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

function getMonthRange(startOffset: number, endOffset: number): string {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const hindiMonths = ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];
  
  const now = new Date();
  const startDate = new Date(now.getFullYear(), now.getMonth() + startOffset, 1);
  const endDate = new Date(now.getFullYear(), now.getMonth() + endOffset, 1);
  
  return `${months[startDate.getMonth()]} ${startDate.getFullYear()} - ${months[endDate.getMonth()]} ${endDate.getFullYear()}`;
}
