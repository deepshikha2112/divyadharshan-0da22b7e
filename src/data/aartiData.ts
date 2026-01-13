export interface Aarti {
  id: string;
  name: string;
  nameHindi: string;
  deity: string;
  deityId: string;
  timing: "morning" | "evening" | "both";
  lyrics: string;
  lyricsHindi: string;
  audioUrl?: string;
  duration?: string;
  significance: string;
}

export const aartis: Aarti[] = [
  {
    id: "ganesh-aarti",
    name: "Jai Ganesh Deva",
    nameHindi: "जय गणेश देवा",
    deity: "Lord Ganesha",
    deityId: "ganesha",
    timing: "both",
    significance: "This aarti invokes Lord Ganesha at the beginning of any worship. It removes obstacles and brings auspiciousness.",
    lyricsHindi: `जय गणेश जय गणेश जय गणेश देवा।
माता जाकी पार्वती, पिता महादेवा॥

एक दन्त दयावन्त, चार भुजा धारी।
माथे सिन्दूर सोहे, मूसे की सवारी॥
जय गणेश जय गणेश जय गणेश देवा।

पान चढ़े फूल चढ़े, और चढ़े मेवा।
लड्डुअन का भोग लगे, संत करें सेवा॥
जय गणेश जय गणेश जय गणेश देवा।

अन्धों को आँख देत, कोढ़िन को काया।
बाँझन को पुत्र देत, निर्धन को माया॥
जय गणेश जय गणेश जय गणेश देवा।

सुर श्याम शरण आए, सफल कीजे सेवा।
माता जाकी पार्वती, पिता महादेवा॥
जय गणेश जय गणेश जय गणेश देवा।`,
    lyrics: `Jai Ganesh Jai Ganesh Jai Ganesh Deva
Mata Jaki Parvati, Pita Mahadeva

Ek Dant Dayavant, Char Bhuja Dhari
Mathe Sindoor Sohe, Muse Ki Sawari
Jai Ganesh Jai Ganesh Jai Ganesh Deva

Paan Chadhe Phool Chadhe, Aur Chadhe Meva
Ladduan Ka Bhog Lage, Sant Karein Seva
Jai Ganesh Jai Ganesh Jai Ganesh Deva

Andhon Ko Aankh Det, Kodhin Ko Kaya
Banjhan Ko Putra Det, Nirdhan Ko Maya
Jai Ganesh Jai Ganesh Jai Ganesh Deva`,
  },
  {
    id: "shiva-aarti",
    name: "Om Jai Shiv Omkara",
    nameHindi: "ॐ जय शिव ओंकारा",
    deity: "Lord Shiva",
    deityId: "shiva",
    timing: "both",
    significance: "The most popular aarti of Lord Shiva, praising his divine form and requesting his blessings for liberation.",
    lyricsHindi: `ॐ जय शिव ओंकारा, स्वामी जय शिव ओंकारा।
ब्रह्मा, विष्णु, सदाशिव, अर्द्धांगी धारा॥
ॐ जय शिव ओंकारा।

एकानन चतुरानन पंचानन राजे।
हंसासन गरुड़ासन वृषवाहन साजे॥
ॐ जय शिव ओंकारा।

दो भुज चार चतुर्भुज दस भुज अति सोहे।
त्रिगुण रूप निरखता त्रिभुवन जन मोहे॥
ॐ जय शिव ओंकारा।

अक्षमाला वनमाला मुण्डमाला धारी।
चंदन मृगमद सोहे, भाले शशिधारी॥
ॐ जय शिव ओंकारा।

श्वेताम्बर पीताम्बर बाघम्बर अंगे।
सनकादिक गरुणादिक भूतादिक संगे॥
ॐ जय शिव ओंकारा।`,
    lyrics: `Om Jai Shiv Omkara, Swami Jai Shiv Omkara
Brahma, Vishnu, Sadashiv, Ardhangi Dhara
Om Jai Shiv Omkara

Ekanana Chaturanana Panchanana Raje
Hansasana Garudasana Vrishavahana Saje
Om Jai Shiv Omkara

Do Bhuja Char Chaturbhuja Das Bhuja Ati Sohe
Triguna Roopa Nirakhata Tribhuvana Jana Mohe
Om Jai Shiv Omkara`,
  },
  {
    id: "lakshmi-aarti",
    name: "Om Jai Lakshmi Mata",
    nameHindi: "ॐ जय लक्ष्मी माता",
    deity: "Goddess Lakshmi",
    deityId: "lakshmi",
    timing: "evening",
    significance: "Sung during evening worship, especially on Fridays and Diwali, to invoke prosperity and abundance.",
    lyricsHindi: `ॐ जय लक्ष्मी माता, मैया जय लक्ष्मी माता।
तुमको निशदिन सेवत, हर विष्णु विधाता॥
ॐ जय लक्ष्मी माता।

उमा, रमा, ब्रह्माणी, तुम ही जग माता।
सूर्य-चंद्रमा ध्यावत, नारद ऋषि गाता॥
ॐ जय लक्ष्मी माता।

दुर्गा रूप निरंजनी, सुख संपत्ति दाता।
जो कोई तुमको ध्यावे, ऋद्धि-सिद्धि धन पाता॥
ॐ जय लक्ष्मी माता।

तुम पाताल-निवासिनी, तुम ही शुभ दाता।
कर्म-प्रभाव-प्रकाशिनी, भवनिधि की त्राता॥
ॐ जय लक्ष्मी माता।

जिस घर में तुम रहती, सब सद्गुण आता।
सब सम्भव हो जाता, मन नहीं घबराता॥
ॐ जय लक्ष्मी माता।`,
    lyrics: `Om Jai Lakshmi Mata, Maiya Jai Lakshmi Mata
Tumko Nishdin Sevat, Har Vishnu Vidhata
Om Jai Lakshmi Mata

Uma, Rama, Brahmani, Tum Hi Jag Mata
Surya-Chandrama Dhyavat, Narad Rishi Gata
Om Jai Lakshmi Mata

Durga Roop Niranjani, Sukh Sampatti Data
Jo Koi Tumko Dhyave, Riddhi-Siddhi Dhan Pata
Om Jai Lakshmi Mata`,
  },
  {
    id: "hanuman-aarti",
    name: "Aarti Keeje Hanuman Lala Ki",
    nameHindi: "आरती कीजै हनुमान लला की",
    deity: "Lord Hanuman",
    deityId: "hanuman",
    timing: "both",
    significance: "Sung to honor Lord Hanuman's devotion to Lord Rama. Brings courage, strength, and protection.",
    lyricsHindi: `आरती कीजै हनुमान लला की।
दुष्ट दलन रघुनाथ कला की॥

जाके बल से गिरिवर कांपे।
रोग दोष जाके निकट न झांके॥
आरती कीजै हनुमान लला की।

अंजनि पुत्र महा बलदाई।
संतन के प्रभु सदा सहाई॥
आरती कीजै हनुमान लला की।

दे बीड़ा रघुनाथ पठाए।
लंका जारि सिया सुधि लाए॥
आरती कीजै हनुमान लला की।

लंका सो कोट समुद्र सी खाई।
जात पवनसुत बार न लाई॥
आरती कीजै हनुमान लला की।`,
    lyrics: `Aarti Keejai Hanuman Lala Ki
Dusht Dalan Raghunath Kala Ki

Jake Bal Se Girivar Kampe
Rog Dosh Jake Nikat Na Jhanke
Aarti Keejai Hanuman Lala Ki

Anjani Putra Maha Baldai
Santan Ke Prabhu Sada Sahai
Aarti Keejai Hanuman Lala Ki`,
  },
  {
    id: "durga-aarti",
    name: "Jai Ambe Gauri",
    nameHindi: "जय अम्बे गौरी",
    deity: "Goddess Durga",
    deityId: "durga",
    timing: "evening",
    significance: "The principal aarti of Goddess Durga, sung during Navratri and Durga Puja for protection and victory.",
    lyricsHindi: `जय अम्बे गौरी, मैया जय श्यामा गौरी।
तुमको निशदिन ध्यावत, हरि ब्रह्मा शिवरी॥
ॐ जय अम्बे गौरी।

मांग सिन्दूर विराजत, टीको मृगमद को।
उज्ज्वल से दोउ नैना, चंद्रवदन नीको॥
ॐ जय अम्बे गौरी।

कनक समान कलेवर, रक्ताम्बर राजे।
रक्तपुष्प गल माला, कंठन पर साजे॥
ॐ जय अम्बे गौरी।

केहरि वाहन राजत, खड्ग खप्परधारी।
सुर-नर-मुनि-जन सेवत, तिनके दुखहारी॥
ॐ जय अम्बे गौरी।

कानन कुण्डल शोभित, नासाग्रे मोती।
कोटिक चंद्र दिवाकर, सम राजत ज्योती॥
ॐ जय अम्बे गौरी।`,
    lyrics: `Jai Ambe Gauri, Maiya Jai Shyama Gauri
Tumko Nishdin Dhyavat, Hari Brahma Shivari
Om Jai Ambe Gauri

Maang Sindoor Virajat, Teeko Mrigmad Ko
Ujjwal Se Dou Naina, Chandravadan Neeko
Om Jai Ambe Gauri

Kanak Saman Kalevar, Raktambar Raje
Raktpushp Gal Mala, Kanthan Par Saje
Om Jai Ambe Gauri`,
  },
  {
    id: "vishnu-aarti",
    name: "Om Jai Jagdish Hare",
    nameHindi: "ॐ जय जगदीश हरे",
    deity: "Lord Vishnu",
    deityId: "vishnu",
    timing: "evening",
    significance: "The universal aarti sung in most Hindu households during evening prayers, praising Lord Vishnu as the protector.",
    lyricsHindi: `ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे।
भक्त जनों के संकट, दास जनों के संकट,
क्षण में दूर करे॥ ॐ जय जगदीश हरे।

जो ध्यावे फल पावे, दुख बिनसे मन का।
स्वामी दुख बिनसे मन का।
सुख संपत्ति घर आवे, सुख संपत्ति घर आवे,
कष्ट मिटे तन का॥ ॐ जय जगदीश हरे।

मात पिता तुम मेरे, शरण गहूं किसकी।
स्वामी शरण गहूं किसकी।
तुम बिन और न दूजा, तुम बिन और न दूजा,
आस करूं जिसकी॥ ॐ जय जगदीश हरे।

तुम पूरण परमात्मा, तुम अंतर्यामी।
स्वामी तुम अंतर्यामी।
पारब्रह्म परमेश्वर, पारब्रह्म परमेश्वर,
तुम सबके स्वामी॥ ॐ जय जगदीश हरे।`,
    lyrics: `Om Jai Jagdish Hare, Swami Jai Jagdish Hare
Bhakt Janon Ke Sankat, Daas Janon Ke Sankat,
Kshan Mein Door Kare, Om Jai Jagdish Hare

Jo Dhyave Phal Pave, Dukh Binase Man Ka
Swami Dukh Binase Man Ka
Sukh Sampatti Ghar Aave, Sukh Sampatti Ghar Aave,
Kasht Mite Tan Ka, Om Jai Jagdish Hare

Maat Pita Tum Mere, Sharan Gahun Kiski
Swami Sharan Gahun Kiski
Tum Bin Aur Na Dooja, Tum Bin Aur Na Dooja,
Aas Karun Jiski, Om Jai Jagdish Hare`,
  },
  {
    id: "krishna-aarti",
    name: "Aarti Kunj Bihari Ki",
    nameHindi: "आरती कुंजबिहारी की",
    deity: "Lord Krishna",
    deityId: "krishna",
    timing: "both",
    significance: "Beautiful aarti of Lord Krishna describing his divine form and playful nature in Vrindavan.",
    lyricsHindi: `आरती कुंजबिहारी की।
श्री गिरिधर कृष्णमुरारी की॥

गले में बैजंती माला, बजावै मुरली मधुर बाला।
श्रवण में कुण्डल झलकाला, नंद के आनंद नंदलाला॥
आरती कुंजबिहारी की।

गगन सम अंग कांति काली, राधिका चमक रही आली।
लतन में ठाढ़े बनमाली, भ्रमर सी अलक, कस्तूरी तिलक॥
आरती कुंजबिहारी की।

कनकमय मोर मुकुट बिलसै, देवता दर्शन को तरसैं।
गगन सों सुमन रासि बरसै, बजे मुरचंग, मधुर मिरदंग॥
आरती कुंजबिहारी की।`,
    lyrics: `Aarti Kunj Bihari Ki
Shri Giridhar Krishna Murari Ki

Gale Mein Baijanti Mala, Bajave Murali Madhur Bala
Shravan Mein Kundal Jhalkala, Nand Ke Anand Nandlala
Aarti Kunj Bihari Ki

Gagan Sam Ang Kanti Kali, Radhika Chamak Rahi Aali
Latan Mein Thadhe Banmali, Bhramar Si Alak, Kasturi Tilak
Aarti Kunj Bihari Ki`,
  },
  {
    id: "saibaba-aarti",
    name: "Aarti Sai Baba",
    nameHindi: "आरती साईं बाबा",
    deity: "Sai Baba",
    deityId: "saibaba",
    timing: "morning",
    significance: "The kakad aarti (morning) of Shirdi Sai Baba, sung at dawn to awaken the divine.",
    lyricsHindi: `आरती साईं बाबा, सौख्यदातार जीवा।
चरणारजतली द्यावा, दासांविसावा भक्तां विसावा॥
आरती साईं बाबा।

जाळुनियां आनंग, स्वस्वरूपी राहे दंग।
मुमुक्षु जनांदावी, निजडोळा श्रीरंग॥
आरती साईं बाबा।

जयमनी जैसाभाव, तयतैसा अनुभव।
दाविसी दयाघना, ऐसी तुझी ही माव॥
आरती साईं बाबा।

तुमचे नाम ध्याता, हरे संसृती व्यथा।
अगाध तव करणी, मार्ग दाविसी अनाथा॥
आरती साईं बाबा।

कलियुगी अवतार, सगुण परब्रह्म साचार।
अवतीर्ण झालासे, स्वामी दत्त दिगंबर॥
आरती साईं बाबा।`,
    lyrics: `Aarti Sai Baba, Saukhyadatar Jiva
Charanrajatali Dyava, Dasanvisava Bhaktan Visava
Aarti Sai Baba

Jaluniya Anang, Svasvarupi Rahe Dang
Mumukshu Janandavi, Nijdola Shrirang
Aarti Sai Baba

Jaymani Jaisabhav, Tayataisa Anubhav
Davisi Dayaghana, Aisi Tujhi Hi Mav
Aarti Sai Baba`,
  },
  {
    id: "rama-aarti",
    name: "Aarti Shri Ramayan Ji Ki",
    nameHindi: "आरती श्री रामायण जी की",
    deity: "Lord Rama",
    deityId: "rama",
    timing: "both",
    significance: "Aarti sung after reading Ramcharitmanas, honoring the holy scripture and Lord Rama.",
    lyricsHindi: `आरती श्री रामायण जी की।
कीर्ति कलित ललित सिय पी की॥

गावत ब्रह्मादिक मुनि नारद।
बालमीक बिग्यान बिसारद।
सुक सनकादि सेष अरु सारद।
बरनि पवनसुत कीर्ति नीकी॥
आरती श्री रामायण जी की।

गावत बेद पुरान अष्टदस।
छओ सास्त्र सब ग्रंथन को रस।
मुनि जन धन संतन को सरबस।
सार अंस संमत सब ही की॥
आरती श्री रामायण जी की।`,
    lyrics: `Aarti Shri Ramayan Ji Ki
Kirti Kalit Lalit Siya Pi Ki

Gavat Brahmadik Muni Narad
Balmiki Bigyan Bisarad
Suk Sanakadi Sesh Aru Sarad
Barani Pavansut Kirti Neeki
Aarti Shri Ramayan Ji Ki`,
  },
];

export const getAartisByDeity = (deityId: string): Aarti[] => {
  return aartis.filter(a => a.deityId === deityId);
};

export const getAartisByTiming = (timing: "morning" | "evening" | "both"): Aarti[] => {
  return aartis.filter(a => a.timing === timing || a.timing === "both");
};

export const getAartiById = (id: string): Aarti | undefined => {
  return aartis.find(a => a.id === id);
};