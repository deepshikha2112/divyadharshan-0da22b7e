import { Chapter } from '@/components/ChapterAudioReader';
import { shivPuranChapters, ShivPuranChapter } from './shivPuranChapters';

export interface DeityChapters {
  deityId: string;
  chapters: Chapter[];
}

// Convert Shiv Puran chapters to the Chapter format
const convertShivPuranChapters = (): Chapter[] => {
  return shivPuranChapters.map((chapter: ShivPuranChapter) => ({
    id: chapter.id,
    title: chapter.titleHindi,
    subtitle: `${chapter.khandHindi} - अध्याय ${chapter.chapterNumber}`,
    mood: chapter.mood,
    instrument: chapter.instrument,
    content: chapter.content,
  }));
};

export const deityChaptersData: DeityChapters[] = [
  {
    deityId: "ganesha",
    chapters: [
      {
        id: "g1",
        title: "The Divine Birth",
        subtitle: "How Lord Ganesha came into existence",
        mood: "divine",
        instrument: "om",
        content: `In the sacred abode of Mount Kailash, Goddess Parvati, the divine consort of Lord Shiva, wished for a loyal guardian. While Lord Shiva was away in deep meditation, Parvati created a boy from the sacred turmeric paste of her body.

She breathed life into the figure and named him Ganesha. She instructed him to guard the entrance and allow no one to enter while she bathed.

Young Ganesha stood firm at his post, filled with devotion to his mother. He was innocent yet determined, knowing nothing of the world but his duty to protect.

This was the beginning of one of the most beloved deities in Hindu tradition - the remover of obstacles, the lord of beginnings, Sri Ganesha.`
      },
      {
        id: "g2",
        title: "The Test of Devotion",
        subtitle: "Ganesha's encounter with Lord Shiva",
        mood: "powerful",
        instrument: "tanpura",
        content: `Lord Shiva returned from his meditation to find a young boy blocking his path. Not knowing this was his own son, created by Parvati, Shiva asked to enter his own home.

Ganesha, following his mother's instructions, firmly refused. A fierce confrontation ensued between the mighty Lord Shiva and the steadfast young guardian.

Despite being just a child, Ganesha's determination was unwavering. He fought with all his might to fulfill his duty to his mother. The battle was intense, and the heavens themselves shook with its power.

In the heat of battle, Lord Shiva, in his divine fury, severed the boy's head. The moment this happened, Parvati emerged and was struck with unbearable grief.`
      },
      {
        id: "g3",
        title: "The Elephant Head",
        subtitle: "Transformation and blessing",
        mood: "emotional",
        instrument: "flute",
        content: `Seeing Parvati's immense sorrow, Lord Shiva realized what had transpired. Filled with remorse and love for his consort, he promised to restore their son's life.

Shiva sent his attendants to find the first creature facing north in deep sleep. They found a majestic elephant, and its head was brought to Kailash.

Lord Shiva placed the elephant head on Ganesha's body and breathed new life into him. The divine child awoke, now with the head of an elephant, radiating wisdom and grace.

Shiva blessed his son: "You shall be worshipped first before all other deities. You shall be the remover of obstacles and the lord of new beginnings." Thus, Lord Ganesha was reborn with divine blessings.`
      },
      {
        id: "g4",
        title: "The First Among Worshipped",
        subtitle: "Ganesha's eternal blessing",
        mood: "devotional",
        instrument: "bells",
        content: `From that day forward, Lord Ganesha became the first deity to be worshipped in any Hindu ceremony. His elephant head symbolizes wisdom, understanding, and a discriminating intellect.

His large ears remind devotees to listen more. His small eyes teach us to concentrate and focus. His trunk represents adaptability - the ability to both uproot trees and pick up delicate objects.

Lord Ganesha carries a modak (sweet) in his hand, representing the sweetness of spiritual knowledge. His mouse vehicle teaches us that even the smallest creature can carry the mightiest of gods.

To this day, millions begin their prayers, journeys, and new ventures by invoking Ganesha. "Om Gam Ganapataye Namaha" - the mantra that removes all obstacles from our path.`
      }
    ]
  },
  {
    deityId: "shiva",
    chapters: convertShivPuranChapters()
  },
  {
    deityId: "vishnu",
    chapters: [
      {
        id: "v1",
        title: "The Preserver of the Universe",
        subtitle: "Lord Vishnu's eternal role",
        mood: "divine",
        instrument: "om",
        content: `Lord Vishnu, the Preserver, maintains the cosmic order. He rests on the infinite serpent Ananta Shesha in the cosmic ocean of milk, dreaming the universe into existence. From his navel grows a lotus, upon which sits Brahma, the creator.

With four arms, Vishnu holds the conch (Shankha) representing the primordial sound Om, the discus (Sudarshana Chakra) symbolizing the mind and the cycle of time, the mace (Gada) representing strength and knowledge, and the lotus (Padma) signifying purity and liberation.

His consort is Lakshmi, the goddess of prosperity. His vehicle is Garuda, the divine eagle. Together, they watch over all creation with infinite compassion.

Whenever dharma (righteousness) declines and adharma (unrighteousness) rises, Vishnu descends to Earth in various forms called Avatars. His love for his devotees knows no bounds.`
      },
      {
        id: "v2",
        title: "The Avatars of Vishnu",
        subtitle: "Divine incarnations through the ages",
        mood: "powerful",
        instrument: "tanpura",
        content: `Lord Vishnu has descended to Earth in ten major incarnations, the Dashavatar. Each avatar came to restore balance when evil threatened to overwhelm the world.

As Matsya (the Fish), he saved the Vedas from the great flood. As Kurma (the Tortoise), he supported Mount Mandara during the churning of the ocean. As Varaha (the Boar), he lifted the Earth from cosmic waters.

As Narasimha (the Man-Lion), he protected his devotee Prahlada from the demon king. As Vamana (the Dwarf), he reclaimed the universe from King Bali. As Parashurama, he rid the world of corrupt warriors.

As Rama, he showed the world the path of dharma. As Krishna, he delivered the Bhagavad Gita. As Buddha, he taught compassion. The tenth avatar, Kalki, is yet to come, appearing at the end of Kali Yuga to begin a new cycle.`
      },
      {
        id: "v3",
        title: "The Cosmic Sleep",
        subtitle: "Vishnu in Yoga Nidra",
        mood: "peaceful",
        instrument: "flute",
        content: `Between cycles of creation, Lord Vishnu rests in Yoga Nidra - the yogic sleep of cosmic consciousness. Floating on the cosmic waters upon Shesha, the thousand-headed serpent, he enters a state of divine rest.

Yet even in this rest, Vishnu is aware. His consciousness pervades all existence. The entire universe exists within him, like waves in an infinite ocean. Lakshmi gently massages his feet as he dreams.

When the time for creation comes, from his deep contemplation, a golden lotus emerges from his navel. On this lotus sits Brahma, who then begins the work of creation according to Vishnu's divine will.

This imagery teaches us that behind all activity is profound stillness. The universe emerges from and dissolves back into this peaceful awareness. Vishnu's sleep is not unconsciousness but supreme consciousness - aware of all while attached to nothing.`
      }
    ]
  },
  {
    deityId: "krishna",
    chapters: [
      {
        id: "k1",
        title: "The Divine Child of Vrindavan",
        subtitle: "Krishna's miraculous birth",
        mood: "divine",
        instrument: "flute",
        content: `On a dark night in the month of Shravan, in the prison cell of the tyrant Kamsa, Lord Krishna was born to Devaki and Vasudeva. The moment of his birth, all chains fell away, prison doors opened, and divine light filled the cell.

Vasudeva, following divine instructions, carried the newborn across the flooding Yamuna river. The serpent Shesha sheltered them from the rain. He exchanged Krishna with the newborn daughter of Nanda and Yashoda in Gokul.

Thus began Krishna's childhood in Vrindavan - a time of pure joy and divine play. Yashoda became his loving foster mother, and the cowherd village became his playground.

The butter thief, the slayer of demons, the enchanter of all hearts - Krishna's childhood stories fill the hearts of devotees with overwhelming love and joy.`
      },
      {
        id: "k2",
        title: "The Flute Player",
        subtitle: "Krishna's divine music",
        mood: "peaceful",
        instrument: "flute",
        content: `When Krishna played his flute, the entire universe stood still in enchantment. The rivers stopped flowing, the wind held its breath, and even the birds paused in mid-flight to listen.

The Gopis of Vrindavan, upon hearing his flute, would leave everything behind. They would abandon their homes, their families, even their sense of self, drawn irresistibly to the divine melody.

The Raas Leela - Krishna's cosmic dance with the Gopis - represents the soul's longing for the Divine. Each Gopi felt Krishna was dancing with her alone, as the Lord multiplied himself to be with each devotee personally.

Krishna's flute represents the call of the Divine to the human soul. When we empty ourselves like the hollow bamboo, the Lord can play his divine music through us. The flute's melody is the sound of pure love calling us home.`
      },
      {
        id: "k3",
        title: "The Bhagavad Gita",
        subtitle: "The Song of God",
        mood: "powerful",
        instrument: "tanpura",
        content: `On the battlefield of Kurukshetra, the great warrior Arjuna stood paralyzed with doubt. Before him were his own kinsmen, teachers, and loved ones - all ready for a war that seemed impossible to fight.

In this moment of crisis, Lord Krishna revealed his cosmic form and delivered the supreme teaching known as the Bhagavad Gita - the Song of God.

"You have the right to work, but not to the fruits of your actions," Krishna taught. "Perform your duty without attachment. Find refuge in wisdom. Those who act with devotion, offering all actions to Me, are free from the bonds of karma."

The Gita teaches karma yoga (selfless action), bhakti yoga (devotion), jnana yoga (knowledge), and raja yoga (meditation). It is the essence of all spiritual wisdom, applicable to every human being regardless of their path or station in life.`
      },
      {
        id: "k4",
        title: "The Eternal Friend",
        subtitle: "Krishna's unconditional love",
        mood: "devotional",
        instrument: "bells",
        content: `Lord Krishna is the friend of all beings. To Arjuna, he was a trusted charioteer and guide. To Sudama, he was the beloved childhood friend who never forgot their bond. To Draupadi, he was the protector who answered her call in her darkest hour.

Krishna's love knows no boundaries. He ate the humble rice flakes offered by Sudama with the same joy as the grandest feast. He washed the feet of guests at Yudhishthira's Rajasuya sacrifice, though he himself was the Supreme Lord.

"Whoever offers Me a leaf, a flower, a fruit, or water with devotion - that offering of love from a pure heart I accept," Krishna promises in the Gita.

This is the essence of Krishna consciousness - that the Lord is accessible to all, at all times. He responds to the pure call of the heart, regardless of caste, creed, or status. He is the supreme friend who never abandons those who take refuge in him.`
      }
    ]
  },
  {
    deityId: "hanuman",
    chapters: [
      {
        id: "h1",
        title: "The Son of the Wind",
        subtitle: "Hanuman's divine birth and childhood",
        mood: "divine",
        instrument: "om",
        content: `Hanuman was born to Anjana and Kesari, blessed by the Wind God Vayu. As a child, he possessed extraordinary powers, and in his innocence, he once mistook the rising sun for a ripe fruit.

Leaping into the sky, young Hanuman flew towards the sun. Indra, the king of gods, struck him with his thunderbolt, causing him to fall. Vayu, angered by the attack on his son, withdrew all air from the universe.

To appease Vayu and save creation, the gods blessed Hanuman with numerous gifts - immortality, invincibility, and powers beyond measure. But they also placed a condition: Hanuman would forget his powers until reminded at the right time.

Thus grew the mighty Hanuman, humble and devoted, unaware of the cosmic strength that lay dormant within him, waiting to be awakened in service of Lord Rama.`
      },
      {
        id: "h2",
        title: "Finding Lord Rama",
        subtitle: "The meeting that changed everything",
        mood: "emotional",
        instrument: "flute",
        content: `When Rama and Lakshmana wandered through the forests searching for Sita, they came upon Rishyamuka Mountain where Sugriva and his ministers lived in exile.

Sugriva, fearing they might be sent by his enemy Vali, asked Hanuman to approach them in disguise. Hanuman took the form of a Brahmin scholar and approached the princes.

The moment Hanuman saw Rama, something stirred deep within his heart. Here was the purpose of his existence, the master he was born to serve. When Rama spoke, Hanuman was enchanted by the sweetness and wisdom of his words.

Revealing his true form, Hanuman bowed at Rama's feet and offered his eternal service. From that moment, he lived only for Rama - thinking of Rama, speaking of Rama, working only for Rama's mission. This complete surrender became the foundation of his legendary devotion.`
      },
      {
        id: "h3",
        title: "The Leap Across the Ocean",
        subtitle: "Hanuman's journey to Lanka",
        mood: "powerful",
        instrument: "tanpura",
        content: `When the monkey army reached the southern shore and faced the vast ocean, despair set in. Who could cross the mighty sea to reach Lanka and find Sita?

Jambavan, the wise bear, approached Hanuman. "Son of Vayu, you have forgotten your powers! You can leap across this ocean. Remember who you are!"

As Jambavan reminded Hanuman of his divine nature, the devotee began to grow. He expanded until he stood as tall as a mountain. With a mighty roar of "Jai Shri Ram!", he leaped into the sky.

The ocean creatures watched in awe as Hanuman soared through the clouds. Demons tried to stop him; magical beings tried to trap him. But nothing could halt the flight of pure devotion. Hanuman crossed the hundred yojanas of ocean and landed in Lanka, ready to find his mother Sita.`
      },
      {
        id: "h4",
        title: "The Burning of Lanka",
        subtitle: "Devotion turns into divine fire",
        mood: "powerful",
        instrument: "bells",
        content: `In Lanka, Hanuman found Sita in the Ashoka grove, gave her Rama's ring, and assured her that rescue was coming. But he allowed himself to be captured by Ravana's forces - he wanted to see the demon king face to face.

Before Ravana's court, Hanuman delivered Rama's message boldly. Enraged, Ravana ordered Hanuman's tail to be set on fire as punishment for a monkey's insolence.

But as they wrapped his tail with cloth soaked in oil, Hanuman began to grow. More cloth was needed, then more. His tail extended through the streets of Lanka. When they finally lit the fire, Hanuman shrank, slipped from his bonds, and leaped across the golden city.

Building by building, palace by palace, Hanuman burned Lanka with his flaming tail. Yet, by Sita's blessing, Ravana's inner quarters remained untouched. Having accomplished his mission, Hanuman extinguished his tail in the ocean and flew back to Rama with news that would launch the great war.`
      }
    ]
  },
  {
    deityId: "durga",
    chapters: [
      {
        id: "d1",
        title: "The Birth of the Goddess",
        subtitle: "When the Divine Feminine arose",
        mood: "powerful",
        instrument: "tanpura",
        content: `The demon Mahishasura had obtained a boon that no man or god could kill him. With this power, he conquered the three worlds, driving the gods from heaven. In desperation, the gods gathered and combined their divine energies.

From their collective power emerged a brilliant light. This light took the form of a magnificent goddess with ten arms - Durga, the invincible one. She was more beautiful than any being in creation and more powerful than all the gods combined.

Each god contributed their weapons and attributes. Shiva gave his trident, Vishnu his discus, Agni his flames, Vayu his bow, Indra his thunderbolt. Himavat gave her a lion as her mount.

Thus armed with the powers of the entire universe, Goddess Durga set forth to battle Mahishasura and restore balance to creation.`
      },
      {
        id: "d2",
        title: "The Battle with Mahishasura",
        subtitle: "The great cosmic war",
        mood: "powerful",
        instrument: "bells",
        content: `For nine days and nights, Durga battled the demon armies. She was a whirlwind of divine fury, destroying demons by the thousands. Her lion roared, shaking the foundations of the universe.

Mahishasura sent his mightiest generals, but each fell before the Goddess. He sent magical illusions, but Durga saw through them all. Finally, the buffalo demon himself entered the battlefield, changing forms constantly to confuse her.

He became a lion; Durga cut off his head. He became an elephant; she sliced his trunk. He transformed into a buffalo again, and as he emerged from the beast's body as a man, Durga seized him.

Standing upon his chest, she drove her trident through his heart. The universe rejoiced as evil was vanquished. The gods showered flowers from heaven, and creation was restored to balance.`
      },
      {
        id: "d3",
        title: "The Nine Forms",
        subtitle: "Navadurga - the nine nights of the Goddess",
        mood: "devotional",
        instrument: "om",
        content: `During Navratri, we worship the nine forms of Durga, each representing a different aspect of the Divine Mother.

Shailaputri, daughter of the mountains, represents purity and devotion. Brahmacharini embodies knowledge and penance. Chandraghanta, with her moon-shaped bell, symbolizes beauty and bravery.

Kushmanda created the universe with her divine smile. Skandamata is the mother of Kartikeya. Katyayani is the warrior aspect born in sage Katyayana's home. Kalaratri is the fierce destroyer of evil.

Mahagauri is the embodiment of purity and serenity. Finally, Siddhidatri grants all spiritual powers and fulfillment.

Together, these nine forms represent the complete journey of the soul - from devotion through struggle to ultimate enlightenment. By worshipping each form, devotees invoke these qualities within themselves.`
      }
    ]
  },
  {
    deityId: "lakshmi",
    chapters: [
      {
        id: "l1",
        title: "The Emergence from the Ocean",
        subtitle: "Lakshmi's divine origin",
        mood: "divine",
        instrument: "flute",
        content: `When gods and demons churned the cosmic ocean for the nectar of immortality, many treasures emerged from the depths. Among them was the most radiant of all - Goddess Lakshmi.

She emerged seated on a lotus, adorned with gold, radiating light that illuminated all three worlds. The heavenly elephants bathed her with sacred waters. Divine flowers rained from the sky.

Both gods and demons desired her as their consort, but Lakshmi chose Lord Vishnu. She garlanded him with a lotus garland, signifying her eternal devotion. From that moment, she became his constant companion.

Wherever Vishnu incarnates, Lakshmi accompanies him. She was Sita with Rama, Rukmini with Krishna. She is the divine energy that sustains and enriches all of creation.`
      },
      {
        id: "l2",
        title: "The Eight Forms of Wealth",
        subtitle: "Ashtalakshmi - blessings for all aspects of life",
        mood: "peaceful",
        instrument: "bells",
        content: `Lakshmi manifests in eight forms, blessing devotees with different aspects of prosperity and well-being.

Adi Lakshmi is the primordial form, the mother of all creation. Dhana Lakshmi bestows material wealth and gold. Dhanya Lakshmi blesses with abundance of food and grains. Gaja Lakshmi, flanked by elephants, grants royal power and grace.

Santana Lakshmi blesses families with children and the continuity of lineage. Veera Lakshmi gives courage and victory in life's battles. Vijaya Lakshmi ensures success in all endeavors.

Vidya Lakshmi grants knowledge and wisdom, the greatest of all treasures. Together, these eight forms remind us that true prosperity encompasses all aspects of life - material, spiritual, intellectual, and emotional.`
      }
    ]
  },
  {
    deityId: "saraswati",
    chapters: [
      {
        id: "sa1",
        title: "The Goddess of Knowledge",
        subtitle: "Saraswati's eternal radiance",
        mood: "peaceful",
        instrument: "flute",
        content: `Saraswati, dressed in pure white, sits upon a white lotus, embodying the pristine nature of true knowledge. She holds a veena, creating the music of learning. A book and rosary in her other hands represent spiritual and worldly wisdom.

She is the consort of Brahma, the creator. Without her wisdom, creation itself would be impossible. She is the flowing river of consciousness, the articulation of cosmic truth.

Her swan vehicle represents the ability to discern truth from falsehood, just as a swan can separate milk from water. Her white sari symbolizes purity - for true knowledge is untainted by ego or material desire.

Students, artists, musicians, and scholars worship Saraswati, seeking her blessings for clarity of mind, eloquence of speech, and excellence in their pursuits.`
      },
      {
        id: "sa2",
        title: "The Sacred River",
        subtitle: "Saraswati as the invisible stream",
        mood: "divine",
        instrument: "tanpura",
        content: `In ancient times, the Saraswati was one of the mightiest rivers of the Indian subcontinent. Along its banks, the Vedas were composed and great civilizations flourished.

Over millennia, the river gradually went underground, becoming invisible to human eyes. Yet its waters continue to flow, joining the Ganga and Yamuna at the sacred Triveni Sangam in Prayagraj.

This physical transformation mirrors a spiritual truth. Just as the Saraswati flows unseen beneath the earth, true knowledge flows silently through the universe, available to those who dive deep within themselves.

The goddess Saraswati represents this hidden stream of wisdom. Through meditation, study, and devotion, we can tap into this eternal flow and receive the blessings of divine knowledge.`
      }
    ]
  },
  {
    deityId: "rama",
    chapters: [
      {
        id: "rama-1",
        title: "The Divine Birth in Ayodhya",
        subtitle: "श्री राम जन्म - Rama Janma",
        mood: "divine",
        instrument: "tanpura",
        content: `King Dasharatha of Ayodhya performed the Putrakameshti Yagna (sacrifice for sons) under Sage Rishyashringa's guidance. From the sacred fire emerged a divine being carrying a bowl of kheer (sacred pudding). The three queens - Kaushalya, Kaikeyi, and Sumitra - consumed the prasad and were blessed with sons.

Rama was born to Kaushalya on the ninth day of Chaitra (Ram Navami). His three brothers - Bharata, Lakshmana, and Shatrughna - followed. The kingdom rejoiced at the prince who embodied divinity.

The gods showered flowers from heaven. Celestial music filled the skies. The moment of Rama's birth marked a new era - the Supreme Lord had descended to Earth to establish dharma and destroy the demon king Ravana.

Even as a child, Rama radiated divine grace. His dark complexion like rain clouds, lotus eyes, and gentle smile captivated all who beheld him. The prophecy was clear - this was no ordinary prince.`
      },
      {
        id: "rama-2",
        title: "Training with Sage Vishwamitra",
        subtitle: "गुरु शिक्षा - Divine Education",
        mood: "powerful",
        instrument: "mantra-rhythm",
        content: `When Sage Vishwamitra sought King Dasharatha's help against demons disrupting his sacrifices, he asked for young Rama. Though the king was reluctant to send his beloved son, Sage Vasishtha counseled him to comply.

Rama and Lakshmana accompanied Vishwamitra to his ashrama. Along the way, Rama slew the demoness Tataka with a single arrow, demonstrating his divine prowess. At the sage's ashrama, he protected the sacred yagna from Maricha and Subahu.

Vishwamitra, pleased with Rama's devotion and valor, taught him powerful astras (divine weapons) including the Brahmastra. He also gave Rama the mantras Bala and Atibala, which eliminated hunger and fatigue.

This journey transformed the young prince into a warrior sage. Under Vishwamitra's guidance, Rama learned that true power comes with responsibility - weapons are meant to protect dharma, not to destroy.`
      },
      {
        id: "rama-3",
        title: "The Marriage with Sita",
        subtitle: "सीता स्वयंवर - Sita Swayamvar",
        mood: "happy",
        instrument: "flute",
        content: `In Mithila, King Janaka had organized a swayamvar for his daughter Sita. The condition was extraordinary - whoever could string the divine bow of Lord Shiva would win Sita's hand. Kings and warriors from far and wide had tried and failed; none could even move the massive bow.

When Rama entered the assembly with Vishwamitra, Sita's heart was captivated. She silently prayed that this prince with lotus eyes would be her lord.

Rama approached the bow with calm confidence. With effortless grace, he lifted it as if it were a flower. As he strung it, the mighty bow broke in two with a thunderclap that shook the three worlds.

The wedding of Rama and Sita was celebrated with unparalleled splendor. Their union represents the eternal bond between the soul (Sita) and the Supreme (Rama). Together, they embody the ideal of divine love - faithful, pure, and eternal.`
      },
      {
        id: "rama-4",
        title: "The Exile to the Forest",
        subtitle: "वनवास - Vanvas",
        mood: "sad",
        instrument: "tanpura",
        content: `On the eve of Rama's coronation, Queen Kaikeyi, influenced by her maid Manthara, demanded two boons from King Dasharatha. She asked that Bharata be crowned king and Rama be exiled to the forest for fourteen years.

Bound by his promise, the devastated king had no choice. When Rama learned of this, he accepted the exile with complete equanimity. His words were serene: "Father's word is my dharma. I shall gladly go to the forest."

Sita insisted on accompanying her husband, declaring that a wife's place is beside her husband in joy or sorrow. Lakshmana too could not bear to be separated from his beloved brother.

Thus, the three departed for the Dandaka forest, trading royal garments for bark cloth. Ayodhya wept. King Dasharatha died of grief. Yet Rama walked forward, teaching the world that honor and dharma are greater than any throne.`
      },
      {
        id: "rama-5",
        title: "Sita's Abduction",
        subtitle: "सीता हरण - The Great Tragedy",
        mood: "sad",
        instrument: "tanpura",
        content: `In the forest of Panchavati, the demon princess Shurpanakha became enamored with Rama. When she attacked Sita in jealousy, Lakshmana cut off her nose and ears. She fled to her brother Ravana, the mighty king of Lanka.

Ravana devised a plan. He sent the demon Maricha as a golden deer to lure Rama away. When Rama pursued the deer, Sita heard a cry imitating Rama's voice and sent Lakshmana to help.

Left alone, Sita was approached by Ravana disguised as a sage. When she offered him hospitality, he revealed his true form and abducted her in his flying chariot.

The vulture king Jatayu fought bravely to save Sita but was mortally wounded. Dying, he told Rama what had happened. Rama performed Jatayu's last rites with his own hands, honoring the bird's supreme sacrifice.`
      },
      {
        id: "rama-6",
        title: "The Search and Alliance",
        subtitle: "सुग्रीव मैत्री - Friendship with Sugriva",
        mood: "devotional",
        instrument: "tanpura",
        content: `Wandering in search of Sita, Rama and Lakshmana reached Rishyamukha mountain where they met Hanuman. This meeting was destined - the greatest devotee met his beloved Lord.

Hanuman was minister to Sugriva, an exiled monkey king. Rama agreed to help Sugriva regain his kingdom from his brother Vali in exchange for help finding Sita.

Rama slew Vali from behind a tree - a controversial act that demonstrated his commitment to his word. Sugriva was reinstated as king and mobilized his entire army to search for Sita.

The search parties went in all directions. It was Hanuman who finally discovered that Sita had been taken across the ocean to Lanka. The stage was set for the greatest adventure in history - a monkey's leap across the sea.`
      },
      {
        id: "rama-7",
        title: "Hanuman's Leap to Lanka",
        subtitle: "हनुमान की उड़ान - The Great Leap",
        mood: "powerful",
        instrument: "mantra-rhythm",
        content: `Standing at the southern shore, Hanuman expanded his form to an enormous size. With a mighty roar of "Jai Shri Ram!", he leaped across the ocean to Lanka.

In Lanka, Hanuman found Sita in the Ashoka grove, surrounded by demonesses. He gave her Rama's ring as proof of his identity and assured her that rescue was coming. Sita gave Hanuman her chudamani (hair ornament) to carry back to Rama.

To test Ravana's strength, Hanuman allowed himself to be captured. Brought before the demon king, he delivered Rama's message with bold courage. When Ravana ordered his tail set on fire, Hanuman used the flames to burn Lanka.

Returning to Rama, Hanuman brought hope. His devotion had accomplished what seemed impossible. The news he carried ignited the fire of victory in Rama's army.`
      },
      {
        id: "rama-8",
        title: "The Bridge to Lanka",
        subtitle: "राम सेतु - The Divine Bridge",
        mood: "powerful",
        instrument: "mantra-rhythm",
        content: `To cross the ocean, the monkey army built a bridge under the supervision of Nala and Neela. The engineering marvel was made of stones that floated when inscribed with Rama's name.

Vibhishana, Ravana's righteous brother, defected to Rama's side, providing crucial intelligence about Lanka's defenses. Rama welcomed him as a brother and promised him the throne of Lanka.

The army crossed the bridge and laid siege to Lanka. Ravana sent his warriors one by one - Meghnad (Indrajit), Kumbhakarna, and others. Each battle was fierce, but Rama's forces prevailed.

Lakshmana was struck down by Indrajit's shakti weapon. Hanuman flew to the Himalayas and brought the entire Sanjeevani mountain to save him. Such was the devotion of Hanuman - when one herb was needed, he brought the whole mountain.`
      },
      {
        id: "rama-9",
        title: "The Great Battle",
        subtitle: "राम-रावण युद्ध - Rama vs Ravana",
        mood: "powerful",
        instrument: "mantra-rhythm",
        content: `The final battle between Rama and Ravana shook the three worlds. Ravana possessed ten heads and twenty arms. He was blessed with boons that made him nearly invincible.

The duel lasted for days. Every time Rama cut off Ravana's head, another grew in its place. Finally, Sage Agastya reminded Rama of the Aditya Hridayam - a hymn to the Sun God.

After reciting this divine prayer, Rama charged his bow with the Brahmastra. The arrow, blazing with the fire of all creation, struck Ravana's navel - where the nectar of immortality was stored.

Ravana fell. Even in death, he was mourned as a great scholar and devotee of Shiva who had been corrupted by pride. His soul merged with the divine light of Rama, for ultimately all souls return to their source.`
      },
      {
        id: "rama-10",
        title: "Return to Ayodhya",
        subtitle: "राम राज्य - The Ideal Kingdom",
        mood: "happy",
        instrument: "flute",
        content: `After reuniting with Sita and accepting Vibhishana's homage, Rama prepared to return home. The fourteen years of exile had ended. Bharata, who had refused to sit on the throne, ruling only as Rama's regent, awaited eagerly.

The Pushpaka Vimana (flying chariot) carried Rama, Sita, Lakshmana, Hanuman, and others back to Ayodhya. The citizens lit millions of lamps to welcome their king - the origin of Diwali, the festival of lights.

Rama's coronation was celebrated with unmatched joy. He established Rama Rajya - the ideal kingdom where dharma prevailed, where the weak were protected, and where prosperity blessed all.

Lord Rama's life teaches us that dharma must be upheld even at the greatest personal cost. His name itself is a mantra that liberates the soul. Ram Ram Ram - the sound that echoes through eternity.`
      }
    ]
  }
];

export const getChaptersByDeityId = (deityId: string): Chapter[] => {
  const data = deityChaptersData.find(d => d.deityId === deityId.toLowerCase());
  return data?.chapters || [];
};
