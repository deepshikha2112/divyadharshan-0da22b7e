export interface Vrat {
  id: string;
  name: string;
  nameHindi: string;
  deity: string;
  timing: string;
  timingHindi: string;
  description: string;
  significance: string;
  fastingRules: string[];
  foods: {
    allowed: string[];
    notAllowed: string[];
  };
  rituals: string[];
  katha: string;
  benefits: string[];
}

export const vrats: Vrat[] = [
  {
    id: "ekadashi",
    name: "Ekadashi Vrat",
    nameHindi: "एकादशी व्रत",
    deity: "Vishnu",
    timing: "11th day of each lunar fortnight",
    timingHindi: "प्रत्येक पक्ष की एकादशी",
    description: "One of the most sacred fasts dedicated to Lord Vishnu, observed twice a month.",
    significance: "Ekadashi is believed to be the most sacred day for spiritual advancement. It helps in controlling the senses and purifying the mind.",
    fastingRules: [
      "Begin fast from sunrise on Ekadashi until sunrise next day",
      "Some observe Nirjala (without water) fasting",
      "Partial fast allows fruits and milk",
      "Avoid grains, rice, and lentils completely",
      "Break fast only during specific Parana time next day"
    ],
    foods: {
      allowed: ["Fruits", "Milk", "Sabudana", "Dry fruits", "Potatoes", "Sweet potato", "Rock salt"],
      notAllowed: ["Rice", "Wheat", "Lentils", "Regular salt", "Onion", "Garlic", "Non-veg"]
    },
    rituals: [
      "Wake up before sunrise and take bath",
      "Worship Lord Vishnu with Tulsi leaves",
      "Recite Vishnu Sahasranama or Vishnu mantras",
      "Stay awake at night (Jagran) if possible",
      "Donate to the needy"
    ],
    katha: "The significance of Ekadashi was explained by Lord Krishna to Arjuna in the Padma Purana. Once, a demon named Murdanav was terrorizing the Devas. Lord Vishnu fought with him, and during battle, a divine energy emerged from Vishnu's body on the Ekadashi day, which killed the demon. This energy became known as Goddess Ekadashi. Since then, this day is considered most auspicious for worship.",
    benefits: [
      "Removes past sins",
      "Brings spiritual merit (Punya)",
      "Improves health and digestion",
      "Helps in controlling desires",
      "Brings blessings of Lord Vishnu"
    ]
  },
  {
    id: "pradosh",
    name: "Pradosh Vrat",
    nameHindi: "प्रदोष व्रत",
    deity: "Shiva",
    timing: "13th day of each lunar fortnight",
    timingHindi: "प्रत्येक पक्ष की त्रयोदशी",
    description: "Sacred fast dedicated to Lord Shiva and Goddess Parvati, observed on Trayodashi.",
    significance: "Pradosh Kaal (twilight time) is the most auspicious time to worship Lord Shiva. It's believed that Shiva grants wishes during this time.",
    fastingRules: [
      "Fast during the day until Pradosh Kaal (evening twilight)",
      "Worship Lord Shiva during twilight (1.5 hours before and after sunset)",
      "Can have fruits and milk during the day",
      "Break fast after evening Shiva puja"
    ],
    foods: {
      allowed: ["Fruits", "Milk", "Bel leaves (for offering)", "Dry fruits", "Light sattvic food after puja"],
      notAllowed: ["Non-veg", "Onion", "Garlic", "Alcohol", "Heavy foods"]
    },
    rituals: [
      "Take bath before sunset",
      "Visit Shiva temple or worship at home",
      "Offer Bel leaves, milk, and water to Shiva Linga",
      "Recite Shiva Chalisa or Maha Mrityunjaya Mantra",
      "Perform Shiva Aarti"
    ],
    katha: "The Pradosh Vrat Katha narrates how even the great sage Chyavana observed this vrat with devotion. It is said that one who observes Pradosh Vrat with pure heart and devotion attains the grace of Lord Shiva and is freed from all sufferings.",
    benefits: [
      "Removes obstacles and negativity",
      "Fulfills desires",
      "Brings peace and prosperity",
      "Cures diseases when done with faith",
      "Strengthens family bonds"
    ]
  },
  {
    id: "monday-vrat",
    name: "Somvar Vrat",
    nameHindi: "सोमवार व्रत",
    deity: "Shiva",
    timing: "Every Monday",
    timingHindi: "प्रत्येक सोमवार",
    description: "Weekly fast dedicated to Lord Shiva, especially auspicious during Shravan month.",
    significance: "Monday is Lord Shiva's day. The Somvar Vrat is believed to bring blessings of Lord Shiva and is especially recommended for unmarried women seeking good husbands.",
    fastingRules: [
      "Observe fast from sunrise to sunset",
      "Have only one meal after evening puja",
      "During Shravan, observe 16 consecutive Monday fasts (Solah Somvar)",
      "Avoid non-vegetarian food and alcohol"
    ],
    foods: {
      allowed: ["Fruits", "Milk", "One vegetarian meal after sunset", "Saboodana Khichdi"],
      notAllowed: ["Non-veg", "Onion", "Garlic", "Multiple meals"]
    },
    rituals: [
      "Wake up early and take bath",
      "Wear white or light-colored clothes",
      "Visit Shiva temple",
      "Offer water, milk, and Bel leaves to Shiva Linga",
      "Recite Om Namah Shivaya"
    ],
    katha: "A poor Brahmin and his wife observed Somvar Vrat with great devotion. Lord Shiva, pleased with their dedication, blessed them with prosperity and a son who became a great king. This story teaches the power of faith and consistent devotion.",
    benefits: [
      "Brings blessings for marriage (for unmarried)",
      "Strengthens marital bond",
      "Removes fears and anxieties",
      "Brings material and spiritual prosperity",
      "Cleanses past karmas"
    ]
  },
  {
    id: "tuesday-vrat",
    name: "Mangalvar Vrat",
    nameHindi: "मंगलवार व्रत",
    deity: "Hanuman",
    timing: "Every Tuesday",
    timingHindi: "प्रत्येक मंगलवार",
    description: "Fast dedicated to Lord Hanuman for strength, courage, and protection.",
    significance: "Tuesday is dedicated to Lord Hanuman and Mangal (Mars). This vrat removes the malefic effects of Mars and brings courage and strength.",
    fastingRules: [
      "Observe fast from sunrise to sunset",
      "Wear red or orange clothes",
      "Apply sindoor (vermillion) to Hanuman",
      "Read Hanuman Chalisa"
    ],
    foods: {
      allowed: ["Fruits", "Milk", "One meal after sunset", "Jaggery"],
      notAllowed: ["Non-veg", "Wheat products", "Salt (for strict observers)"]
    },
    rituals: [
      "Visit Hanuman temple early morning",
      "Offer sindoor and oil to Hanuman",
      "Recite Hanuman Chalisa 11 times",
      "Offer jaggery and gram",
      "Circumambulate the temple"
    ],
    katha: "A woman was suffering greatly due to Mars affliction in her horoscope. She was advised to observe Mangalvar Vrat with devotion to Lord Hanuman. After observing the vrat for 21 Tuesdays, all her troubles vanished and she was blessed with happiness.",
    benefits: [
      "Removes Mars (Mangal) dosha",
      "Brings courage and strength",
      "Protects from enemies and evil",
      "Helps in legal matters",
      "Blesses with good health"
    ]
  },
  {
    id: "thursday-vrat",
    name: "Guruvar Vrat",
    nameHindi: "गुरुवार व्रत",
    deity: "Vishnu / Brihaspati",
    timing: "Every Thursday",
    timingHindi: "प्रत्येक गुरुवार",
    description: "Fast dedicated to Lord Vishnu and Guru Brihaspati for wisdom and prosperity.",
    significance: "Thursday is ruled by Jupiter (Guru/Brihaspati), the planet of wisdom, knowledge, and prosperity. This vrat is especially beneficial for students and those seeking career growth.",
    fastingRules: [
      "Observe fast from sunrise to sunset",
      "Wear yellow clothes",
      "Use turmeric in worship",
      "Eat yellow-colored foods"
    ],
    foods: {
      allowed: ["Chana dal", "Bananas", "Yellow fruits", "Gram flour items", "Kesar kheer"],
      notAllowed: ["Non-veg", "Sour foods", "Washing hair on this day (traditional belief)"]
    },
    rituals: [
      "Wake up early and wear yellow",
      "Worship Lord Vishnu or Brihaspati",
      "Offer yellow flowers and fruits",
      "Recite Vishnu Sahasranama",
      "Give charity of yellow items"
    ],
    katha: "A poor woodcutter was advised by a sage to observe Guruvar Vrat. He followed the vrat with devotion for 7 Thursdays. Soon, he found treasure and became wealthy. He continued the vrat throughout his life and was blessed with wisdom and prosperity.",
    benefits: [
      "Increases knowledge and wisdom",
      "Removes obstacles in education",
      "Brings career success",
      "Improves financial condition",
      "Blesses with children"
    ]
  },
  {
    id: "friday-vrat",
    name: "Shukravar Vrat",
    nameHindi: "शुक्रवार व्रत",
    deity: "Santoshi Maa / Lakshmi",
    timing: "Every Friday",
    timingHindi: "प्रत्येक शुक्रवार",
    description: "Fast dedicated to Santoshi Maa and Goddess Lakshmi for peace and prosperity.",
    significance: "Friday is dedicated to the Divine Feminine, especially Santoshi Maa and Lakshmi. This vrat brings peace in family life and material prosperity.",
    fastingRules: [
      "Observe 16 consecutive Fridays (Solah Shukravar)",
      "Have only one meal - preferably gur chana",
      "Avoid sour foods completely",
      "Keep peaceful environment at home"
    ],
    foods: {
      allowed: ["Gur (jaggery)", "Chana (gram)", "White foods", "Milk sweets"],
      notAllowed: ["Sour foods (lemon, tamarind)", "Pickles", "Non-veg", "Bitter foods"]
    },
    rituals: [
      "Worship Santoshi Maa in the evening",
      "Offer white flowers and gur-chana",
      "Light a ghee lamp",
      "Recite Santoshi Maa Vrat Katha",
      "Distribute prasad to unmarried girls"
    ],
    katha: "A devoted woman named Satyavati observed Shukravar Vrat with great faith. Despite facing many hardships from her in-laws, she continued her devotion. Santoshi Maa, pleased with her dedication, transformed her life, bringing harmony and prosperity to her household.",
    benefits: [
      "Brings harmony in married life",
      "Removes family disputes",
      "Blesses with prosperity",
      "Fulfills desires peacefully",
      "Removes planetary afflictions of Venus"
    ]
  },
  {
    id: "saturday-vrat",
    name: "Shanivar Vrat",
    nameHindi: "शनिवार व्रत",
    deity: "Shani Dev / Hanuman",
    timing: "Every Saturday",
    timingHindi: "प्रत्येक शनिवार",
    description: "Fast to appease Shani Dev and reduce Saturn's malefic effects.",
    significance: "Saturday is ruled by Saturn (Shani), known for bringing challenges but also great rewards for patience. This vrat is essential during Shani Sade Sati or Shani Dhaiya.",
    fastingRules: [
      "Observe fast from sunrise to sunset",
      "Wear black or dark blue clothes",
      "Avoid salt for strict observers",
      "Light mustard oil lamp"
    ],
    foods: {
      allowed: ["Khichdi made with urad dal", "Black sesame", "Mustard oil foods", "Fruits"],
      notAllowed: ["Non-veg", "Alcohol", "Salt (for strict observers)", "Meat and eggs"]
    },
    rituals: [
      "Visit Shani temple or Hanuman temple",
      "Offer mustard oil to Shani or Hanuman",
      "Light lamp with mustard oil",
      "Recite Shani Chalisa or Hanuman Chalisa",
      "Donate black items to the poor"
    ],
    katha: "A king was going through Shani Sade Sati and faced numerous troubles. He was advised to observe Shanivar Vrat with devotion. After observing it sincerely, Shani Dev was pleased and blessed him with the return of his lost kingdom and happiness.",
    benefits: [
      "Reduces Saturn's malefic effects",
      "Helps during Sade Sati period",
      "Removes obstacles and delays",
      "Brings justice in legal matters",
      "Develops patience and discipline"
    ]
  },
  {
    id: "navratri",
    name: "Navratri Vrat",
    nameHindi: "नवरात्रि व्रत",
    deity: "Durga / Nine forms of Devi",
    timing: "9 days in Chaitra & Ashwin months",
    timingHindi: "चैत्र और आश्विन मास",
    description: "Nine-day fast honoring the nine forms of Goddess Durga.",
    significance: "Navratri celebrates the victory of Goddess Durga over Mahishasura. Each day honors a different form of the Goddess, bringing specific blessings.",
    fastingRules: [
      "Fast for all 9 days or specific days",
      "Avoid non-veg, onion, garlic completely",
      "Eat sattvic food once a day",
      "Maintain celibacy during the period"
    ],
    foods: {
      allowed: ["Kuttu flour", "Sabudana", "Fruits", "Milk", "Sama rice", "Rock salt"],
      notAllowed: ["Regular grains", "Non-veg", "Onion", "Garlic", "Regular salt"]
    },
    rituals: [
      "Set up Kalash with coconut",
      "Worship each form of Durga daily",
      "Recite Durga Saptashati",
      "Perform Kanya Puja on Ashtami/Navami",
      "Conclude with Visarjan"
    ],
    katha: "When demon Mahishasura terrorized the three worlds, the gods combined their powers to create Goddess Durga. She fought the demon for nine nights and finally vanquished him on Dashami (Vijayadashami). These nine nights symbolize the battle between good and evil.",
    benefits: [
      "Invokes protection of Divine Mother",
      "Removes negative energies",
      "Brings spiritual advancement",
      "Fulfills desires",
      "Blesses family with prosperity"
    ]
  }
];

export const getVratById = (id: string): Vrat | undefined => {
  return vrats.find(v => v.id === id);
};