export type Passage = {
  text: string;
  locator: string;
  status: "placeholder";
};

export type VedaId = "rig" | "sama" | "yajur" | "atharva";
export type Recension = "shukla" | "krishna";
export type UpanishadEmblemId = "katha-buffalo";

export type UpanishadEmblem = {
  id: UpanishadEmblemId;
  label: string;
};

export type Upanishad = {
  slug: string;
  name: string;
  devanagari: string;
  meaning: string;
  question: string;
  summary: string;
  whyItMatters: string;
  readingGuide?: {
    approach: string;
    background: string;
  };
  themes: string[];
  conceptIds: string[];
  passage: Passage;
  color: string;
  emblem?: UpanishadEmblem;
  veda: VedaId;
  recension?: Recension;
};

export type VedaBranch = {
  recension?: Recension;
  label: string;
  devanagari: string;
};

export type Veda = {
  id: VedaId;
  name: string;
  devanagari: string;
  transliteration: string;
  blurb: string;
  color: string;
  branches: VedaBranch[];
};

export type Concept = {
  slug: string;
  name: string;
  sanskrit: string;
  summary: string;
  color: string;
};

export const concepts: Concept[] = [
  { slug: "atman", name: "Self", sanskrit: "Ātman", summary: "Often translated as “self”: who or what you most deeply are, rather than just your name, body, or personality. When your feelings and roles change, what, if anything, remains the same? The texts approach this question in different ways.", color: "#d98b5f" },
  { slug: "brahman", name: "Ultimate reality", sanskrit: "Brahman", summary: "A name for the reality on which everything depends. One teaching uses clay and pots: pots have different shapes and names, yet all are clay. This helps introduce a shared basis beneath differences, not a claim that Brahman is a physical material; traditions explain the relationship differently.", color: "#c6a15b" },
  { slug: "knowledge", name: "Transformative knowledge", sanskrit: "Vidyā", summary: "Vidyā means knowledge. Here the focus is understanding that changes how you live, not just facts you can repeat—for example, questioning whether a job title or social role fully describes who you are.", color: "#7d9b76" },
  { slug: "liberation", name: "Liberation", sanskrit: "Mokṣa", summary: "Release or freedom: in many Indian traditions, freedom from repeated birth and death, not merely relief from a difficult day. These teachings connect it with overcoming misunderstanding about the self; traditions differ on what that freedom involves and how it is reached.", color: "#7693a6" },
  { slug: "consciousness", name: "Consciousness", sanskrit: "Prajñā", summary: "Prajñā can mean awareness or understanding. Here it opens questions about experiencing anything at all—hearing a sound, having a thought, or dreaming—and about what waking, dreaming, and deep sleep reveal about the self.", color: "#8d79a8" },
  { slug: "death", name: "Death & immortality", sanskrit: "Mṛtyu / Amṛta", summary: "Mṛtyu means death; amṛta means deathless or immortal. These teachings ask whether anything about the self survives bodily death, and how knowing that life ends might change the choices we make today.", color: "#a06f69" },
  { slug: "meditation", name: "Meditation", sanskrit: "Dhyāna", summary: "Sustained attention or reflection—for example, returning attention to a sacred sound or carefully considering a teaching about the self. These practices support understanding, rather than simply collecting information or trying to stop all thoughts.", color: "#638f88" },
  { slug: "creation", name: "Origins", sanskrit: "Sṛṣṭi", summary: "Creation: accounts of how the universe, living beings, thought, and speech come to be. The texts offer different accounts, often to ask how the world and the self are connected.", color: "#b07f4f" },
];

export const upanishads: Upanishad[] = [
  {
    slug: "isha", name: "Isha", devanagari: "ईश", meaning: "The indwelling lord",
    question: "How might one live fully without possessing the world?",
    summary: "A short reflection on action, wholeness—seeing life as connected rather than divided—and renunciation, or letting go. One way to approach it is to ask how we can care for things without treating them as possessions.",
    whyItMatters: "Its opening vision asks us to see the sacred in ordinary life, not only in special places or ceremonies.",
    themes: ["wholeness", "action", "renunciation"], conceptIds: ["atman", "brahman", "knowledge", "liberation"],
    passage: { text: "All this—whatever moves in this moving world—is enveloped by the sacred.", locator: "Opening verse · working paraphrase", status: "placeholder" }, color: "#c98656", veda: "yajur", recension: "shukla"
  },
  {
    slug: "kena", name: "Kena", devanagari: "केन", meaning: "By whom?",
    question: "What power makes the mind think and the senses perceive?",
    summary: "A poetic investigation of the source behind thought, speech, sight, hearing, and breath.",
    whyItMatters: "Instead of asking only what you hear or see, it asks what makes hearing or seeing possible at all.",
    themes: ["perception", "humility", "mystery"], conceptIds: ["brahman", "knowledge", "consciousness"],
    passage: { text: "That which hearing cannot hear, but by which hearing is known—seek that.", locator: "Part 1 · working paraphrase", status: "placeholder" }, color: "#b59455", veda: "sama"
  },
  {
    slug: "katha", name: "Katha", devanagari: "कठ", meaning: "The school of Katha",
    question: "What can death teach us about a life worth choosing?",
    summary: "Young Nachiketa questions Yama, the god of death, about what survives when a person dies. Their conversation explores discernment—telling what is genuinely good from what is merely pleasant—and asks what the self really is.",
    whyItMatters: "Its vivid story makes difficult philosophical choices immediate, human, and memorable.",
    readingGuide: {
      approach: "Story-led · recommended first",
      background: "No prior knowledge needed. Follow Nachiketa’s conversation with Death, letting the characters and their choices introduce the ideas."
    },
    themes: ["death", "choice", "inner journey"], conceptIds: ["atman", "knowledge", "liberation", "death", "meditation"],
    passage: { text: "The good and the merely pleasant approach us; the wise learn to distinguish them.", locator: "Book 1 · working paraphrase", status: "placeholder" }, color: "#ad6861", emblem: { id: "katha-buffalo", label: "Yama’s buffalo" }, veda: "yajur", recension: "krishna"
  },
  {
    slug: "prashna", name: "Prashna", devanagari: "प्रश्न", meaning: "Questions",
    question: "What becomes visible when inquiry is patient and disciplined?",
    summary: "Six students ask about where life comes from, what keeps a body alive, what happens during sleep, and how focused attention can deepen understanding. Prāṇa, often translated as breath or life-force, names the life-sustaining power explored here.",
    whyItMatters: "Its question-and-answer form models learning as preparation, dialogue, and sustained curiosity.",
    themes: ["inquiry", "breath", "discipline"], conceptIds: ["consciousness", "meditation", "creation", "knowledge"],
    passage: { text: "Come again after living with attention; then ask whatever questions move you.", locator: "Opening section · working paraphrase", status: "placeholder" }, color: "#6f9185", veda: "atharva"
  },
  {
    slug: "mundaka", name: "Mundaka", devanagari: "मुण्डक", meaning: "The shaven / liberated",
    question: "Is there a kind of knowledge through which everything becomes known?",
    summary: "It distinguishes learning texts and rituals—ceremonies performed in a prescribed way—from knowing Brahman, the reality on which everything depends. It calls this reality imperishable: unlike a body or a tree, it does not wear out or die.",
    whyItMatters: "Its image of two birds on one tree, one eating and one watching, is often read as a contrast between taking part in life and witnessing experience without being caught up in it.",
    themes: ["two kinds of knowledge", "witness", "practice"], conceptIds: ["brahman", "knowledge", "liberation", "meditation"],
    passage: { text: "Two birds, close companions, rest upon the same tree; one eats while the other watches.", locator: "Book 3 · working paraphrase", status: "placeholder" }, color: "#719075", veda: "atharva"
  },
  {
    slug: "mandukya", name: "Mandukya", devanagari: "माण्डूक्य", meaning: "The Manduka teaching",
    question: "What do waking, dreaming, and deep sleep reveal about awareness?",
    summary: "In twelve statements, it explores the self through waking, dreaming, deep sleep, and a “fourth” (turīya) that it describes as beyond those three. It connects these four aspects, or “quarters,” with Om (Oṃ), a sacred sound used in recitation and meditation.",
    whyItMatters: "It starts with familiar experiences—being awake, dreaming, and sleeping without dreams—to ask what the self is. The “fourth” is not simply another kind of sleep.",
    readingGuide: {
      approach: "Short but abstract · read slowly",
      background: "Choose this for slow reflection rather than a story. The concept guides introduce Ātman (the self) and Brahman (the reality on which everything depends)."
    },
    themes: ["states of awareness", "Om", "silence"], conceptIds: ["atman", "brahman", "consciousness", "meditation"],
    passage: { text: "The sound Om is all this: what was, what is, what will be—and what is beyond time.", locator: "Verse 1 · working paraphrase", status: "placeholder" }, color: "#8375a0", veda: "atharva"
  },
  {
    slug: "taittiriya", name: "Taittiriya", devanagari: "तैत्तिरीय", meaning: "The Tittiri school",
    question: "What layers of experience conceal and reveal the deepest self?",
    summary: "A teaching on learning, how to live, and the self, moving through body nourished by food, life-sustaining breath, mind, understanding, and bliss (deep joy). Later interpreters often call these the five sheaths (kośas): coverings or layers considered in the search for the self.",
    whyItMatters: "Think of coverings nested inside one another. This is an image for examining experience, not five physical layers in the body.",
    themes: ["five sheaths", "bliss", "education"], conceptIds: ["atman", "brahman", "creation", "knowledge"],
    passage: { text: "From joy beings arise, by joy they live, and into joy they return.", locator: "Bhrigu section · working paraphrase", status: "placeholder" }, color: "#b27c4c", veda: "yajur", recension: "krishna"
  },
  {
    slug: "aitareya", name: "Aitareya", devanagari: "ऐतरेय", meaning: "The teaching of Aitareya",
    question: "How do world, body, senses, and awareness belong together?",
    summary: "A story of how the world, the body, and the senses come to be. It gives awareness—the capacity to perceive and know—a central place in its account of life.",
    whyItMatters: "It connects questions about the origin of the universe with the everyday fact that we see, hear, and think, asking what makes us who we are.",
    themes: ["creation", "birth", "awareness"], conceptIds: ["atman", "consciousness", "creation"],
    passage: { text: "Consciousness is the ground: by consciousness the world is guided and upheld.", locator: "Book 3 · working paraphrase", status: "placeholder" }, color: "#9d7958", veda: "rig"
  },
  {
    slug: "chandogya", name: "Chandogya", devanagari: "छान्दोग्य", meaning: "The Chandoga teaching",
    question: "What subtle reality connects the vast world and the person within it?",
    summary: "A large collection of stories and reflections asking how things that appear separate might share a common basis. Its teachers use ordinary objects to explore the connection between the self and the wider world.",
    whyItMatters: "Salt dissolved in water cannot be seen, but can still be tasted. Such examples help its teachers discuss what may be present even when it is not visible.",
    readingGuide: {
      approach: "Teaching stories and everyday analogies",
      background: "Choose this if concrete images help you learn. The larger, varied collection rewards reading one teaching at a time; its everyday analogies offer an entry point without prior knowledge."
    },
    themes: ["unity", "teaching stories", "subtle essence"], conceptIds: ["atman", "brahman", "knowledge", "meditation", "creation"],
    passage: { text: "That subtle essence is the self of all this. That is the real; that is the self; you are that.", locator: "Chapter 6 · working paraphrase", status: "placeholder" }, color: "#6e8e9c", veda: "sama"
  },
  {
    slug: "brihadaranyaka", name: "Brihadaranyaka", devanagari: "बृहदारण्यक", meaning: "The great forest teaching",
    question: "What remains when every limited description of the self is released?",
    summary: "One of the oldest and largest principal Upanishads, it brings together debates about creation, the self, desire, how to live, and freedom from repeated birth and death.",
    whyItMatters: "Different speakers question and challenge one another. Its phrase “not this, not this” (neti neti) asks readers not to mistake any single object or description for the whole truth about the self.",
    themes: ["self-inquiry", "not this, not this", "dialogue"], conceptIds: ["atman", "brahman", "knowledge", "liberation", "death", "creation"],
    passage: { text: "Not this, not this: the self cannot be confined by any object or description.", locator: "Book 4 · working paraphrase", status: "placeholder" }, color: "#8f675d", veda: "yajur", recension: "shukla"
  }
];

export const upanishadBySlug = (slug: string) => upanishads.find((item) => item.slug === slug);
export const conceptBySlug = (slug: string) => concepts.find((item) => item.slug === slug);
export const relatedUpanishads = (item: Upanishad) => upanishads
  .filter((candidate) => candidate.slug !== item.slug)
  .map((candidate) => ({ item: candidate, score: candidate.conceptIds.filter((id) => item.conceptIds.includes(id)).length }))
  .filter(({ score }) => score > 0)
  .sort((a, b) => b.score - a.score)
  .slice(0, 3)
  .map(({ item: candidate }) => candidate);

export const vedas: Veda[] = [
  {
    id: "rig", name: "Rig Veda", devanagari: "ऋग्वेद", transliteration: "Ṛg Veda", color: "#9d7958",
    blurb: "The oldest of these collections: hymns, or songs of praise, addressed to deities such as Agni, associated with fire.",
    branches: [{ label: "Aitareya branch", devanagari: "ऐतरेय" }]
  },
  {
    id: "sama", name: "Sama Veda", devanagari: "सामवेद", transliteration: "Sāma Veda", color: "#6e8e9c",
    blurb: "A collection for singing or chanting in ceremonies, drawing many of its verses from the Rig Veda.",
    branches: [{ label: "Chandogya branch", devanagari: "छान्दोग्य" }]
  },
  {
    id: "yajur", name: "Yajur Veda", devanagari: "यजुर्वेद", transliteration: "Yajur Veda", color: "#c98656",
    blurb: "Ritual words and instructions, preserved in versions called recensions. Its two main traditions are Śukla (“white”) and Kṛṣṇa (“dark”).",
    branches: [
      { recension: "shukla", label: "Śukla · the white", devanagari: "शुक्ल" },
      { recension: "krishna", label: "Kṛṣṇa · the dark", devanagari: "कृष्ण" }
    ]
  },
  {
    id: "atharva", name: "Atharva Veda", devanagari: "अथर्ववेद", transliteration: "Atharva Veda", color: "#8375a0",
    blurb: "Prayers and verses for concerns such as health, protection, and household life, alongside questions about the world and its origins.",
    branches: [{ label: "Atharvan branch", devanagari: "अथर्वन्" }]
  }
];

export const vedaById = (id: VedaId) => vedas.find((veda) => veda.id === id);

export const upanishadsForBranch = (id: VedaId, recension?: Recension) =>
  upanishads.filter((item) => item.veda === id && item.recension === recension);
