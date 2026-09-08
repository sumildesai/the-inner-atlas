export type Passage = {
  text: string;
  locator: string;
  status: "placeholder";
};

export type Upanishad = {
  slug: string;
  name: string;
  devanagari: string;
  meaning: string;
  question: string;
  summary: string;
  whyItMatters: string;
  themes: string[];
  conceptIds: string[];
  passage: Passage;
  color: string;
};

export type Concept = {
  slug: string;
  name: string;
  sanskrit: string;
  summary: string;
  color: string;
};

export const concepts: Concept[] = [
  { slug: "atman", name: "Self", sanskrit: "Ātman", summary: "The innermost self: not merely personality, but the ground of lived awareness.", color: "#d98b5f" },
  { slug: "brahman", name: "Ultimate reality", sanskrit: "Brahman", summary: "The unbounded reality from which existence arises and in which it participates.", color: "#c6a15b" },
  { slug: "knowledge", name: "Transformative knowledge", sanskrit: "Vidyā", summary: "Knowledge that changes how the knower understands self, world, and freedom.", color: "#7d9b76" },
  { slug: "liberation", name: "Liberation", sanskrit: "Mokṣa", summary: "Freedom from constricted identity, ignorance, and the cycle of suffering.", color: "#7693a6" },
  { slug: "consciousness", name: "Consciousness", sanskrit: "Prajñā", summary: "Awareness explored through waking, dreaming, deep sleep, and what may lie beyond.", color: "#8d79a8" },
  { slug: "death", name: "Death & immortality", sanskrit: "Mṛtyu / Amṛta", summary: "Inquiry into what changes, what endures, and how mortality can become a teacher.", color: "#a06f69" },
  { slug: "meditation", name: "Meditation", sanskrit: "Dhyāna", summary: "Practices of attention, inwardness, sound, and contemplation used to realize truth.", color: "#638f88" },
  { slug: "creation", name: "Origins", sanskrit: "Sṛṣṭi", summary: "Accounts of how cosmos, life, mind, language, and individuality come to be.", color: "#b07f4f" },
];

export const upanishads: Upanishad[] = [
  {
    slug: "isha", name: "Isha", devanagari: "ईश", meaning: "The indwelling lord",
    question: "How might one live fully without possessing the world?",
    summary: "A compact meditation on wholeness, action, renunciation, and seeing the sacred within everything.",
    whyItMatters: "Its opening vision joins spiritual insight to ordinary life rather than treating them as opposites.",
    themes: ["wholeness", "action", "renunciation"], conceptIds: ["atman", "brahman", "knowledge", "liberation"],
    passage: { text: "All this—whatever moves in this moving world—is enveloped by the sacred.", locator: "Opening verse · working paraphrase", status: "placeholder" }, color: "#c98656"
  },
  {
    slug: "kena", name: "Kena", devanagari: "केन", meaning: "By whom?",
    question: "What power makes the mind think and the senses perceive?",
    summary: "A poetic investigation of the source behind thought, speech, sight, hearing, and breath.",
    whyItMatters: "It turns attention from objects of knowledge toward the mysterious condition that makes knowing possible.",
    themes: ["perception", "humility", "mystery"], conceptIds: ["brahman", "knowledge", "consciousness"],
    passage: { text: "That which hearing cannot hear, but by which hearing is known—seek that.", locator: "Part 1 · working paraphrase", status: "placeholder" }, color: "#b59455"
  },
  {
    slug: "katha", name: "Katha", devanagari: "कठ", meaning: "The school of Katha",
    question: "What can death teach us about a life worth choosing?",
    summary: "Through the dialogue of young Nachiketa and Death, it explores desire, discernment, selfhood, and immortality.",
    whyItMatters: "Its vivid story makes difficult philosophical choices immediate, human, and memorable.",
    themes: ["death", "choice", "inner journey"], conceptIds: ["atman", "knowledge", "liberation", "death", "meditation"],
    passage: { text: "The good and the merely pleasant approach us; the wise learn to distinguish them.", locator: "Book 1 · working paraphrase", status: "placeholder" }, color: "#ad6861"
  },
  {
    slug: "prashna", name: "Prashna", devanagari: "प्रश्न", meaning: "Questions",
    question: "What becomes visible when inquiry is patient and disciplined?",
    summary: "Six students bring six questions about life, breath, consciousness, meditation, and the human person.",
    whyItMatters: "Its question-and-answer form models learning as preparation, dialogue, and sustained curiosity.",
    themes: ["inquiry", "breath", "discipline"], conceptIds: ["consciousness", "meditation", "creation", "knowledge"],
    passage: { text: "Come again after living with attention; then ask whatever questions move you.", locator: "Opening section · working paraphrase", status: "placeholder" }, color: "#6f9185"
  },
  {
    slug: "mundaka", name: "Mundaka", devanagari: "मुण्डक", meaning: "The shaven / liberated",
    question: "Is there a kind of knowledge through which everything becomes known?",
    summary: "It distinguishes information and ritual learning from the higher knowledge of imperishable reality.",
    whyItMatters: "Its two birds, shared tree, and archery images offer memorable maps of attention and identity.",
    themes: ["two kinds of knowledge", "witness", "practice"], conceptIds: ["brahman", "knowledge", "liberation", "meditation"],
    passage: { text: "Two birds, close companions, rest upon the same tree; one eats while the other watches.", locator: "Book 3 · working paraphrase", status: "placeholder" }, color: "#719075"
  },
  {
    slug: "mandukya", name: "Mandukya", devanagari: "माण्डूक्य", meaning: "The Manduka teaching",
    question: "What do waking, dreaming, and deep sleep reveal about awareness?",
    summary: "The shortest principal Upanishad maps consciousness through four quarters and the sound Om.",
    whyItMatters: "In only twelve statements, it offers an influential framework for studying experience itself.",
    themes: ["states of awareness", "Om", "silence"], conceptIds: ["atman", "brahman", "consciousness", "meditation"],
    passage: { text: "The sound Om is all this: what was, what is, what will be—and what is beyond time.", locator: "Verse 1 · working paraphrase", status: "placeholder" }, color: "#8375a0"
  },
  {
    slug: "taittiriya", name: "Taittiriya", devanagari: "तैत्तिरीय", meaning: "The Tittiri school",
    question: "What layers of experience conceal and reveal the deepest self?",
    summary: "A rich teaching on education, ethics, five sheaths of personhood, creation, and the fullness of bliss.",
    whyItMatters: "Its nested model connects body, breath, mind, understanding, and joy without simply rejecting any layer.",
    themes: ["five sheaths", "bliss", "education"], conceptIds: ["atman", "brahman", "creation", "knowledge"],
    passage: { text: "From joy beings arise, by joy they live, and into joy they return.", locator: "Bhrigu section · working paraphrase", status: "placeholder" }, color: "#b27c4c"
  },
  {
    slug: "aitareya", name: "Aitareya", devanagari: "ऐतरेय", meaning: "The teaching of Aitareya",
    question: "How do world, body, senses, and awareness belong together?",
    summary: "A creation account that moves from cosmic emergence toward the startling claim that consciousness is fundamental.",
    whyItMatters: "It links cosmology to first-person awareness and asks what truly gives a human being identity.",
    themes: ["creation", "birth", "awareness"], conceptIds: ["atman", "consciousness", "creation"],
    passage: { text: "Consciousness is the ground: by consciousness the world is guided and upheld.", locator: "Book 3 · working paraphrase", status: "placeholder" }, color: "#9d7958"
  },
  {
    slug: "chandogya", name: "Chandogya", devanagari: "छान्दोग्य", meaning: "The Chandoga teaching",
    question: "What subtle reality connects the vast world and the person within it?",
    summary: "An expansive collection of teachings, stories, contemplations, and analogies centered on underlying unity.",
    whyItMatters: "Salt in water, rivers meeting the sea, and the seed of a fig make invisible truths tangible.",
    themes: ["unity", "teaching stories", "subtle essence"], conceptIds: ["atman", "brahman", "knowledge", "meditation", "creation"],
    passage: { text: "That subtle essence is the self of all this. That is the real; that is the self; you are that.", locator: "Chapter 6 · working paraphrase", status: "placeholder" }, color: "#6e8e9c"
  },
  {
    slug: "brihadaranyaka", name: "Brihadaranyaka", devanagari: "बृहदारण्यक", meaning: "The great forest teaching",
    question: "What remains when every limited description of the self is released?",
    summary: "The oldest and largest principal Upanishad ranges across debate, creation, selfhood, desire, ethics, and freedom.",
    whyItMatters: "Its many voices preserve philosophy as living argument, radical questioning, and contemplative experiment.",
    themes: ["self-inquiry", "not this, not this", "dialogue"], conceptIds: ["atman", "brahman", "knowledge", "liberation", "death", "creation"],
    passage: { text: "Not this, not this: the self cannot be confined by any object or description.", locator: "Book 4 · working paraphrase", status: "placeholder" }, color: "#8f675d"
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
