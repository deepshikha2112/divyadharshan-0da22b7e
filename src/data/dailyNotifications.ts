// Daily notification content organized by time of day

export interface NotificationContent {
  id: string;
  title: string;
  titleHi: string;
  message: string;
  messageHi: string;
  readMoreRoute?: string;
}

export const morningNotifications: NotificationContent[] = [
  {
    id: "morning-1",
    title: "🙏 Morning Sankalp",
    titleHi: "🙏 प्रातः संकल्प",
    message: "Begin your day with divine intention. Set your sankalp with a pure heart and watch the universe align.",
    messageHi: "अपने दिन की शुरुआत दिव्य संकल्प से करें। शुद्ध हृदय से संकल्प लें।",
    readMoreRoute: "/mantras"
  },
  {
    id: "morning-2",
    title: "☀️ Rise with Gratitude",
    titleHi: "☀️ कृतज्ञता के साथ जागें",
    message: "Every sunrise is a gift. Thank the divine for this beautiful day of possibilities.",
    messageHi: "हर सूर्योदय एक उपहार है। इस सुंदर दिन के लिए परमात्मा को धन्यवाद दें।",
    readMoreRoute: "/prayer-journal"
  },
  {
    id: "morning-3",
    title: "🕉️ Sacred Morning",
    titleHi: "🕉️ पवित्र प्रभात",
    message: "The morning hours are most auspicious. A few moments of prayer can transform your entire day.",
    messageHi: "प्रातःकाल सबसे शुभ होता है। कुछ क्षण की प्रार्थना आपका पूरा दिन बदल सकती है।",
    readMoreRoute: "/aarti"
  },
  {
    id: "morning-4",
    title: "🌅 New Beginnings",
    titleHi: "🌅 नई शुरुआत",
    message: "Yesterday has passed. Today brings fresh energy and new opportunities for spiritual growth.",
    messageHi: "कल बीत गया। आज आध्यात्मिक विकास के नए अवसर लेकर आता है।",
  },
  {
    id: "morning-5",
    title: "✨ Divine Protection",
    titleHi: "✨ दिव्य सुरक्षा",
    message: "Chant your ishta devata's name and step into the day with divine protection around you.",
    messageHi: "अपने इष्ट देवता का नाम जपें और दिव्य सुरक्षा के साथ दिन की शुरुआत करें।",
    readMoreRoute: "/home"
  },
  {
    id: "morning-6",
    title: "🌸 Blessed Morning",
    titleHi: "🌸 आशीर्वादित प्रभात",
    message: "May your thoughts be pure, your words be kind, and your actions be dharmic today.",
    messageHi: "आज आपके विचार शुद्ध हों, वाणी मधुर हो, और कर्म धर्मानुकूल हों।",
  },
  {
    id: "morning-7",
    title: "🪷 Awaken Your Soul",
    titleHi: "🪷 आत्मा को जगाएं",
    message: "Before the world awakens you, awaken yourself with inner stillness and devotion.",
    messageHi: "दुनिया आपको जगाए उससे पहले, भक्ति और शांति से स्वयं जागें।",
    readMoreRoute: "/meditation"
  }
];

export const afternoonNotifications: NotificationContent[] = [
  {
    id: "afternoon-1",
    title: "🧘 Midday Mindfulness",
    titleHi: "🧘 दोपहर की सजगता",
    message: "Pause for a moment. Take 3 deep breaths and reconnect with your inner peace.",
    messageHi: "एक पल रुकें। 3 गहरी सांसें लें और अपनी आंतरिक शांति से जुड़ें।",
    readMoreRoute: "/meditation"
  },
  {
    id: "afternoon-2",
    title: "💡 Spiritual Wisdom",
    titleHi: "💡 आध्यात्मिक ज्ञान",
    message: "\"The mind is everything. What you think, you become.\" — Keep your thoughts elevated.",
    messageHi: "\"मन ही सब कुछ है। जैसा सोचोगे, वैसे बनोगे।\" — विचार उच्च रखें।",
  },
  {
    id: "afternoon-3",
    title: "⚡ Stay Disciplined",
    titleHi: "⚡ अनुशासित रहें",
    message: "Discipline is the bridge between goals and accomplishment. Stay focused on your sadhana.",
    messageHi: "अनुशासन लक्ष्य और सफलता के बीच का पुल है। अपनी साधना पर ध्यान दें।",
    readMoreRoute: "/sadhna"
  },
  {
    id: "afternoon-4",
    title: "🌿 Balance Your Energy",
    titleHi: "🌿 ऊर्जा संतुलित करें",
    message: "If feeling overwhelmed, remember: even the mightiest river flows gently. Be like water.",
    messageHi: "यदि थकान महसूस हो, याद रखें: विशाल नदी भी धीरे बहती है। पानी जैसे बनें।",
  },
  {
    id: "afternoon-5",
    title: "📿 Remember Your Purpose",
    titleHi: "📿 अपने उद्देश्य को याद करें",
    message: "In the midst of daily tasks, don't forget why you're here. Your soul has a purpose.",
    messageHi: "दैनिक कार्यों के बीच, न भूलें कि आप यहाँ क्यों हैं। आपकी आत्मा का एक उद्देश्य है।",
  },
  {
    id: "afternoon-6",
    title: "🕊️ Let Go of Stress",
    titleHi: "🕊️ तनाव छोड़ दें",
    message: "Surrender your worries to the divine. What's meant for you will never pass you by.",
    messageHi: "अपनी चिंताएं परमात्मा को सौंप दें। जो आपके लिए है, वो आपको मिलेगा।",
  },
  {
    id: "afternoon-7",
    title: "🔥 Inner Strength",
    titleHi: "🔥 आंतरिक शक्ति",
    message: "You carry the strength of your ancestors. Trust yourself. You are capable of great things.",
    messageHi: "आप अपने पूर्वजों की शक्ति को धारण करते हैं। खुद पर विश्वास रखें।",
  }
];

export const nightNotifications: NotificationContent[] = [
  {
    id: "night-1",
    title: "🌙 Evening Reflection",
    titleHi: "🌙 संध्या चिंतन",
    message: "As the day ends, reflect on your blessings. What are you grateful for today?",
    messageHi: "दिन समाप्त होते हुए, अपने आशीर्वादों पर चिंतन करें। आज किसके लिए आभारी हैं?",
    readMoreRoute: "/prayer-journal"
  },
  {
    id: "night-2",
    title: "🕯️ Peaceful Night",
    titleHi: "🕯️ शांत रात्रि",
    message: "Release today's worries. Tomorrow brings new grace. Rest in divine peace tonight.",
    messageHi: "आज की चिंताओं को जाने दें। कल नई कृपा लाएगा। दिव्य शांति में विश्राम करें।",
  },
  {
    id: "night-3",
    title: "⭐ Count Your Blessings",
    titleHi: "⭐ आशीर्वाद गिनें",
    message: "Before sleep, think of 3 good things that happened today. Gratitude attracts abundance.",
    messageHi: "सोने से पहले, आज की 3 अच्छी बातें सोचें। कृतज्ञता प्रचुरता को आकर्षित करती है।",
    readMoreRoute: "/prayer-journal"
  },
  {
    id: "night-4",
    title: "🌌 Surrender to Sleep",
    titleHi: "🌌 नींद को समर्पण",
    message: "Let go of all that you could not control today. You did your best. That is enough.",
    messageHi: "आज जो नियंत्रित न हो सका, उसे छोड़ दें। आपने अपना सर्वश्रेष्ठ दिया। यह पर्याप्त है।",
  },
  {
    id: "night-5",
    title: "🙏 Night Prayer",
    titleHi: "🙏 रात्रि प्रार्थना",
    message: "Close your eyes with a prayer. Thank the divine for today, and trust for tomorrow.",
    messageHi: "प्रार्थना के साथ आंखें बंद करें। आज के लिए धन्यवाद दें, कल पर विश्वास रखें।",
    readMoreRoute: "/aarti"
  },
  {
    id: "night-6",
    title: "💫 Dream Peacefully",
    titleHi: "💫 शांति से सपने देखें",
    message: "May your dreams be filled with light and your sleep restore your spirit completely.",
    messageHi: "आपके सपने प्रकाश से भरे हों और नींद आपकी आत्मा को पूर्णतः तरोताज़ा करे।",
  },
  {
    id: "night-7",
    title: "🌸 Self-Compassion",
    titleHi: "🌸 आत्म-करुणा",
    message: "Be gentle with yourself. You are a divine soul having a human experience. Rest well.",
    messageHi: "अपने प्रति कोमल रहें। आप एक दिव्य आत्मा हैं। अच्छी नींद लें।",
  }
];

export type NotificationTimeSlot = 'morning' | 'afternoon' | 'night';

export const getNotificationsForSlot = (slot: NotificationTimeSlot): NotificationContent[] => {
  switch (slot) {
    case 'morning':
      return morningNotifications;
    case 'afternoon':
      return afternoonNotifications;
    case 'night':
      return nightNotifications;
  }
};
