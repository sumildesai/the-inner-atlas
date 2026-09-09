import { upanishads, type Recension, type VedaId } from "@/data/content";

export type ShantiMantra = {
  id: string;
  title: string;
  opening: string;
  devanagari: string;
  transliteration: string;
  meaning: string;
  veda: string;
  note?: string;
};

export const shantiMantras: ShantiMantra[] = [
  {
    id: "purnamadah", title: "The invocation of wholeness", opening: "Pūrṇam adaḥ pūrṇam idam", veda: "Śukla Yajur Veda",
    devanagari: "ॐ पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते । पूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते ॥ ॐ शान्तिः शान्तिः शान्तिः ॥",
    transliteration: "Oṃ pūrṇam adaḥ pūrṇam idaṃ, pūrṇāt pūrṇam udacyate; pūrṇasya pūrṇam ādāya, pūrṇam evāvaśiṣyate. Oṃ śāntiḥ śāntiḥ śāntiḥ.",
    meaning: "That is whole; this is whole. From wholeness, wholeness arises. When wholeness is taken from wholeness, wholeness alone remains. Peace, peace, peace.",
    note: "Pūrṇa means whole or complete. One common reading takes this as a description of Brahman, the reality on which everything depends, not a rule of arithmetic. Sharing knowledge without using it up offers a partial analogy for completeness that is not diminished by giving."
  },
  {
    id: "apyayantu", title: "The invocation of flourishing", opening: "Āpyāyantu mamāṅgāni", veda: "Sāma Veda",
    devanagari: "ॐ आप्यायन्तु ममाङ्गानि वाक्प्राणश्चक्षुः श्रोत्रमथो बलमिन्द्रियाणि च सर्वाणि । सर्वं ब्रह्मौपनिषदं मा अहं ब्रह्म निराकुर्यां मा मा ब्रह्म निराकरोत् । अनिराकरणमस्त्वनिराकरणं मेऽस्तु । तदात्मनि निरते य उपनिषत्सु धर्मास्ते मयि सन्तु ते मयि सन्तु ॥ ॐ शान्तिः शान्तिः शान्तिः ॥",
    transliteration: "Oṃ āpyāyantu mamāṅgāni—vāk prāṇaś cakṣuḥ śrotram atho balam indriyāṇi ca sarvāṇi. Sarvaṃ brahmaupaniṣadam. Māhaṃ brahma nirākuryāṃ, mā mā brahma nirākarot. Anirākaraṇam astv anirākaraṇaṃ me ’stu. Tad ātmani nirate ya upaniṣatsu dharmās te mayi santu, te mayi santu. Oṃ śāntiḥ śāntiḥ śāntiḥ.",
    meaning: "May my limbs, speech, breath, sight, hearing, strength, and all my senses flourish. All is the Brahman of the Upanishads. May I never reject Brahman, nor Brahman reject me. May the qualities taught in the Upanishads dwell in me. Peace, peace, peace.",
    note: "Brahman names the reality on which everything depends. This prayer joins the wish for a healthy body and attentive senses with a willingness to learn and live by the teaching, not just repeat its words."
  },
  {
    id: "sahanavavatu", title: "The invocation of learning together", opening: "Saha nāv avatu", veda: "Kṛṣṇa Yajur Veda",
    devanagari: "ॐ सह नाववतु । सह नौ भुनक्तु । सह वीर्यं करवावहै । तेजस्वि नावधीतमस्तु मा विद्विषावहै ॥ ॐ शान्तिः शान्तिः शान्तिः ॥",
    transliteration: "Oṃ saha nāv avatu; saha nau bhunaktu; saha vīryaṃ karavāvahai; tejasvi nāv adhītam astu; mā vidviṣāvahai. Oṃ śāntiḥ śāntiḥ śāntiḥ.",
    meaning: "May we both be protected; may we both be nourished. May we work together with great energy. May our study be luminous and fruitful; may we not oppose one another. Peace, peace, peace.",
    note: "“We both” refers to teacher and student; “luminous and fruitful” asks for study that brings clear understanding and benefits both. The Taittiriya is also taught with ‘Śaṃ no mitraḥ’, another opening prayer preserved through recitation—speaking or chanting the text aloud."
  },
  {
    id: "vangme", title: "The invocation of speech and mind", opening: "Vāṅ me manasi pratiṣṭhitā", veda: "Ṛg Veda",
    devanagari: "ॐ वाङ् मे मनसि प्रतिष्ठिता मनो मे वाचि प्रतिष्ठितम् । आविरावीर्म एधि । वेदस्य म आणीस्थः । श्रुतं मे मा प्रहासीः । अनेनाधीतेनाहोरात्रान् सन्दधामि । ऋतं वदिष्यामि । सत्यं वदिष्यामि । तन्मामवतु । तद्वक्तारमवतु । अवतु माम् । अवतु वक्तारम् ॥ ॐ शान्तिः शान्तिः शान्तिः ॥",
    transliteration: "Oṃ vāṅ me manasi pratiṣṭhitā, mano me vāci pratiṣṭhitam. Āvir āvīr ma edhi. Vedasya ma āṇīsthaḥ. Śrutaṃ me mā prahāsīḥ. Anenādhītenāhorātrān saṃdadhāmi. Ṛtaṃ vadiṣyāmi; satyaṃ vadiṣyāmi. Tan mām avatu; tad vaktāram avatu. Avatu mām; avatu vaktāram. Oṃ śāntiḥ śāntiḥ śāntiḥ.",
    meaning: "May my speech be established in my mind, and my mind in my speech. May what I have heard not leave me. I will speak what is fitting; I will speak what is true. May that protect me and the teacher. Peace, peace, peace.",
    note: "Bringing speech and mind together can mean saying what you genuinely understand and mean, rather than repeating words without thought. Remembering what is heard matters in a tradition that passes teachings from teacher to student aloud."
  },
  {
    id: "bhadram", title: "The invocation of auspicious perception", opening: "Bhadraṃ karṇebhiḥ śṛṇuyāma", veda: "Atharva Veda",
    devanagari: "ॐ भद्रं कर्णेभिः शृणुयाम देवाः । भद्रं पश्येमाक्षभिर्यजत्राः । स्थिरैरङ्गैस्तुष्टुवांसस्तनूभिर्व्यशेम देवहितं यदायुः ॥ स्वस्ति न इन्द्रो वृद्धश्रवाः । स्वस्ति नः पूषा विश्ववेदाः । स्वस्ति नस्तार्क्ष्यो अरिष्टनेमिः । स्वस्ति नो बृहस्पतिर्दधातु ॥ ॐ शान्तिः शान्तिः शान्तिः ॥",
    transliteration: "Oṃ bhadraṃ karṇebhiḥ śṛṇuyāma devāḥ; bhadraṃ paśyemākṣabhir yajatrāḥ. Sthirair aṅgais tuṣṭuvāṃsas tanūbhir vyaśema devahitaṃ yad āyuḥ. Svasti na indro vṛddhaśravāḥ; svasti naḥ pūṣā viśvavedāḥ; svasti nas tārkṣyo ariṣṭanemiḥ; svasti no bṛhaspatir dadhātu. Oṃ śāntiḥ śāntiḥ śāntiḥ.",
    meaning: "May we hear what is auspicious; may we see what is auspicious. With steady limbs and bodies, may we live the span allotted to us in praise. May well-being come to us from every side. Peace, peace, peace.",
    note: "Auspicious means favorable or conducive to well-being: here, a wish to hear and see what supports a good life. The verse asks deities—divine beings—for protection and well-being during the lifetime given to the speaker."
  }
];

export const mantraAssignments: Record<string, string> = {
  isha: "purnamadah", brihadaranyaka: "purnamadah",
  kena: "apyayantu", chandogya: "apyayantu",
  katha: "sahanavavatu", taittiriya: "sahanavavatu",
  aitareya: "vangme",
  prashna: "bhadram", mundaka: "bhadram", mandukya: "bhadram",
};

export const mantraForUpanishad = (slug: string) => shantiMantras.find((mantra) => mantra.id === mantraAssignments[slug]);
export const textsForMantra = (id: string) => Object.entries(mantraAssignments).filter(([, mantraId]) => mantraId === id).map(([slug]) => slug);

export const shantiRefrain = {
  devanagari: "ॐ शान्तिः शान्तिः शान्तिः",
  transliteration: "Oṃ śāntiḥ śāntiḥ śāntiḥ",
  meaning: "Śānti means peace. A common traditional explanation of the three repetitions is a wish for peace amid troubles within us, from other beings, and from forces beyond our control—for example, worry, conflict, or a storm.",
};

export const mantraForBranch = (veda: VedaId, recension?: Recension) => {
  const slug = upanishads.find((item) => item.veda === veda && item.recension === recension)?.slug;
  return slug ? mantraForUpanishad(slug) : undefined;
};

const vedaLabels: Record<string, string> = {
  rig: "Ṛg Veda", sama: "Sāma Veda", atharva: "Atharva Veda",
  "yajur:shukla": "Śukla Yajur Veda", "yajur:krishna": "Kṛṣṇa Yajur Veda",
};

export const vedaMismatches = () => upanishads.filter((item) => {
  const expected = vedaLabels[item.recension ? `${item.veda}:${item.recension}` : item.veda];
  return mantraForUpanishad(item.slug)?.veda !== expected;
});

if (process.env.NODE_ENV !== "production") {
  const bad = vedaMismatches();
  if (bad.length) console.warn(`Veda/mantra mismatch: ${bad.map((item) => item.slug).join(", ")}`);
}
