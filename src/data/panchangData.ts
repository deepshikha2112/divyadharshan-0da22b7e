export interface PanchangInfo {
  tithi: string;
  tithiHindi: string;
  nakshatra: string;
  nakshatraHindi: string;
  yoga: string;
  yogaHindi: string;
  karana: string;
  karanaHindi: string;
  paksha: string;
  pakshaHindi: string;
  rahuKaal: string;
  shubhMuhurat: string[];
  festivals: string[];
  vaar: string;
  vaarHindi: string;
  sunrise: string;
  sunset: string;
}

export interface Festival {
  id: string;
  name: string;
  nameHindi: string;
  date: string;
  description: string;
  significance: string;
  rituals: string[];
  relatedDeity: string;
}

// Tithi names
export const tithis = [
  { name: "Pratipada", hindi: "प्रतिपदा" },
  { name: "Dwitiya", hindi: "द्वितीया" },
  { name: "Tritiya", hindi: "तृतीया" },
  { name: "Chaturthi", hindi: "चतुर्थी" },
  { name: "Panchami", hindi: "पंचमी" },
  { name: "Shashthi", hindi: "षष्ठी" },
  { name: "Saptami", hindi: "सप्तमी" },
  { name: "Ashtami", hindi: "अष्टमी" },
  { name: "Navami", hindi: "नवमी" },
  { name: "Dashami", hindi: "दशमी" },
  { name: "Ekadashi", hindi: "एकादशी" },
  { name: "Dwadashi", hindi: "द्वादशी" },
  { name: "Trayodashi", hindi: "त्रयोदशी" },
  { name: "Chaturdashi", hindi: "चतुर्दशी" },
  { name: "Purnima", hindi: "पूर्णिमा" },
  { name: "Amavasya", hindi: "अमावस्या" },
];

// Nakshatra names
export const nakshatras = [
  { name: "Ashwini", hindi: "अश्विनी" },
  { name: "Bharani", hindi: "भरणी" },
  { name: "Krittika", hindi: "कृत्तिका" },
  { name: "Rohini", hindi: "रोहिणी" },
  { name: "Mrigashira", hindi: "मृगशिरा" },
  { name: "Ardra", hindi: "आर्द्रा" },
  { name: "Punarvasu", hindi: "पुनर्वसु" },
  { name: "Pushya", hindi: "पुष्य" },
  { name: "Ashlesha", hindi: "आश्लेषा" },
  { name: "Magha", hindi: "मघा" },
  { name: "Purva Phalguni", hindi: "पूर्व फाल्गुनी" },
  { name: "Uttara Phalguni", hindi: "उत्तर फाल्गुनी" },
  { name: "Hasta", hindi: "हस्त" },
  { name: "Chitra", hindi: "चित्रा" },
  { name: "Swati", hindi: "स्वाति" },
  { name: "Vishakha", hindi: "विशाखा" },
  { name: "Anuradha", hindi: "अनुराधा" },
  { name: "Jyeshtha", hindi: "ज्येष्ठा" },
  { name: "Mula", hindi: "मूल" },
  { name: "Purva Ashadha", hindi: "पूर्वाषाढ़ा" },
  { name: "Uttara Ashadha", hindi: "उत्तराषाढ़ा" },
  { name: "Shravana", hindi: "श्रवण" },
  { name: "Dhanishtha", hindi: "धनिष्ठा" },
  { name: "Shatabhisha", hindi: "शतभिषा" },
  { name: "Purva Bhadrapada", hindi: "पूर्व भाद्रपद" },
  { name: "Uttara Bhadrapada", hindi: "उत्तर भाद्रपद" },
  { name: "Revati", hindi: "रेवती" },
];

// Weekdays with deity associations
export const weekdays = [
  { name: "Sunday", hindi: "रविवार", deity: "Surya", color: "text-orange-600" },
  { name: "Monday", hindi: "सोमवार", deity: "Shiva", color: "text-slate-600" },
  { name: "Tuesday", hindi: "मंगलवार", deity: "Hanuman", color: "text-red-600" },
  { name: "Wednesday", hindi: "बुधवार", deity: "Ganesha", color: "text-green-600" },
  { name: "Thursday", hindi: "गुरुवार", deity: "Vishnu", color: "text-yellow-600" },
  { name: "Friday", hindi: "शुक्रवार", deity: "Lakshmi", color: "text-pink-600" },
  { name: "Saturday", hindi: "शनिवार", deity: "Shani", color: "text-purple-900" },
];

// Rahu Kaal timings by weekday
export const rahuKaalByDay: Record<string, string> = {
  Sunday: "4:30 PM - 6:00 PM",
  Monday: "7:30 AM - 9:00 AM",
  Tuesday: "3:00 PM - 4:30 PM",
  Wednesday: "12:00 PM - 1:30 PM",
  Thursday: "1:30 PM - 3:00 PM",
  Friday: "10:30 AM - 12:00 PM",
  Saturday: "9:00 AM - 10:30 AM",
};

// Major festivals
export const upcomingFestivals: Festival[] = [
  {
    id: "makar-sankranti",
    name: "Makar Sankranti",
    nameHindi: "मकर संक्रांति",
    date: "January 14",
    description: "Festival marking the transition of the Sun into Makara rashi (Capricorn)",
    significance: "Symbolizes the end of winter solstice and beginning of longer days",
    rituals: ["Flying kites", "Taking holy bath in rivers", "Donating sesame and jaggery"],
    relatedDeity: "Surya",
  },
  {
    id: "basant-panchami",
    name: "Basant Panchami",
    nameHindi: "बसंत पंचमी",
    date: "February",
    description: "Festival celebrating the goddess Saraswati and arrival of spring",
    significance: "Marks the preparation for spring and new beginnings",
    rituals: ["Worship of Saraswati", "Wearing yellow clothes", "Starting new learning"],
    relatedDeity: "Saraswati",
  },
  {
    id: "maha-shivaratri",
    name: "Maha Shivaratri",
    nameHindi: "महाशिवरात्रि",
    date: "February/March",
    description: "The great night of Lord Shiva",
    significance: "Night when Lord Shiva performed the cosmic dance of creation and destruction",
    rituals: ["Night-long vigil", "Fasting", "Offering bel leaves to Shiva Linga"],
    relatedDeity: "Shiva",
  },
  {
    id: "holi",
    name: "Holi",
    nameHindi: "होली",
    date: "March",
    description: "Festival of colors celebrating the victory of good over evil",
    significance: "Celebrates the burning of Holika and divine love of Radha-Krishna",
    rituals: ["Playing with colors", "Holika Dahan", "Sharing sweets"],
    relatedDeity: "Krishna",
  },
  {
    id: "ram-navami",
    name: "Ram Navami",
    nameHindi: "राम नवमी",
    date: "March/April",
    description: "Birthday of Lord Rama",
    significance: "Celebrates the birth of the seventh avatar of Vishnu",
    rituals: ["Reading Ramayana", "Fasting", "Visiting Ram temples"],
    relatedDeity: "Rama",
  },
  {
    id: "hanuman-jayanti",
    name: "Hanuman Jayanti",
    nameHindi: "हनुमान जयंती",
    date: "April",
    description: "Birthday of Lord Hanuman",
    significance: "Celebrates the birth of the devoted servant of Lord Rama",
    rituals: ["Reciting Hanuman Chalisa", "Offering sindoor", "Fasting"],
    relatedDeity: "Hanuman",
  },
  {
    id: "ganesh-chaturthi",
    name: "Ganesh Chaturthi",
    nameHindi: "गणेश चतुर्थी",
    date: "August/September",
    description: "Birthday of Lord Ganesha",
    significance: "Celebrates the birth of the remover of obstacles",
    rituals: ["Installing Ganesha idol", "Offering modak", "Visarjan ceremony"],
    relatedDeity: "Ganesha",
  },
  {
    id: "navratri",
    name: "Navratri",
    nameHindi: "नवरात्रि",
    date: "September/October",
    description: "Nine nights dedicated to Goddess Durga",
    significance: "Celebrates the victory of Durga over Mahishasura",
    rituals: ["Fasting", "Garba dance", "Worshipping nine forms of Durga"],
    relatedDeity: "Durga",
  },
  {
    id: "diwali",
    name: "Diwali",
    nameHindi: "दीपावली",
    date: "October/November",
    description: "Festival of lights",
    significance: "Celebrates the return of Lord Rama to Ayodhya and victory of light over darkness",
    rituals: ["Lighting diyas", "Lakshmi Puja", "Rangoli", "Exchanging gifts"],
    relatedDeity: "Lakshmi",
  },
];

// Generate panchang for a given date
export const generatePanchang = (date: Date): PanchangInfo => {
  const dayOfWeek = date.getDay();
  const dayOfMonth = date.getDate();
  
  // Calculate tithi (simplified - in real app, use accurate lunar calculations)
  const tithiIndex = (dayOfMonth + Math.floor(date.getMonth() / 2)) % 15;
  const tithi = tithis[tithiIndex];
  
  // Calculate nakshatra (simplified)
  const nakshatraIndex = (dayOfMonth + date.getMonth()) % 27;
  const nakshatra = nakshatras[nakshatraIndex];
  
  // Get weekday info
  const weekday = weekdays[dayOfWeek];
  
  // Determine paksha
  const paksha = dayOfMonth <= 15 
    ? { name: "Shukla Paksha", hindi: "शुक्ल पक्ष" }
    : { name: "Krishna Paksha", hindi: "कृष्ण पक्ष" };
  
  // Get Rahu Kaal
  const rahuKaal = rahuKaalByDay[weekday.name];
  
  // Calculate shubh muhurat based on day
  const shubhMuhurats = [
    dayOfWeek === 0 ? "6:00 AM - 7:30 AM" : "5:30 AM - 7:00 AM",
    "11:00 AM - 12:30 PM",
    dayOfWeek === 4 ? "4:00 PM - 5:30 PM" : "3:30 PM - 5:00 PM",
  ];
  
  // Check for festivals on this date
  const monthName = date.toLocaleString('default', { month: 'long' });
  const festivals = upcomingFestivals
    .filter(f => f.date.includes(monthName) || f.date.includes(String(dayOfMonth)))
    .map(f => f.nameHindi);
  
  return {
    tithi: tithi.name,
    tithiHindi: tithi.hindi,
    nakshatra: nakshatra.name,
    nakshatraHindi: nakshatra.hindi,
    yoga: "Shubha",
    yogaHindi: "शुभ",
    karana: "Bava",
    karanaHindi: "बव",
    paksha: paksha.name,
    pakshaHindi: paksha.hindi,
    rahuKaal,
    shubhMuhurat: shubhMuhurats,
    festivals: festivals.length > 0 ? festivals : ["सामान्य दिन"],
    vaar: weekday.name,
    vaarHindi: weekday.hindi,
    sunrise: "6:15 AM",
    sunset: "6:30 PM",
  };
};