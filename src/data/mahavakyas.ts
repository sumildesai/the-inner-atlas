import { upanishads, type Recension, type VedaId } from "@/data/content";

export type Mahavakya = {
  veda: VedaId;
  recension?: Recension;
  devanagari: string;
  transliteration: string;
  meaning: string;
  explanation: string;
  sourceSlug: string;
  sourceName: string;
  locator: string;
};

export const mahavakyas: Mahavakya[] = [
  {
    veda: "rig",
    devanagari: "प्रज्ञानं ब्रह्म",
    transliteration: "Prajñānam brahma",
    meaning: "Consciousness is Brahman.",
    explanation: "Consciousness means awareness, the capacity to know or experience. In an Advaita reading, this saying identifies awareness itself—not an individual thought or feeling—with Brahman, the reality on which everything depends.",
    sourceSlug: "aitareya",
    sourceName: "Aitareya Upanishad",
    locator: "3.1.3",
  },
  {
    veda: "sama",
    devanagari: "तत्त्वमसि",
    transliteration: "Tat tvam asi",
    meaning: "You are That.",
    explanation: "“That” refers to the reality from which all things arise, often called Brahman. In this teaching to his son, a father uses examples such as salt dissolved in water: unseen, yet present throughout. Advaita reads the saying as identifying the deepest self with that reality.",
    sourceSlug: "chandogya",
    sourceName: "Chandogya Upanishad",
    locator: "6.8.7",
  },
  {
    veda: "yajur",
    recension: "shukla",
    devanagari: "अहं ब्रह्मास्मि",
    transliteration: "Aham brahmāsmi",
    meaning: "I am Brahman.",
    explanation: "In an Advaita reading, “I” means the deepest self, not a person’s name, status, or personality. Brahman is the reality on which everything depends; the saying is not a claim that one individual is more important or powerful than others.",
    sourceSlug: "brihadaranyaka",
    sourceName: "Brihadaranyaka Upanishad",
    locator: "1.4.10",
  },
  {
    veda: "atharva",
    devanagari: "अयमात्मा ब्रह्म",
    transliteration: "Ayam ātmā brahma",
    meaning: "This Self is Brahman.",
    explanation: "Ātman means self; Brahman names the reality on which everything depends. Advaita reads this saying as identifying the two, rather than treating the self as an isolated individual. The text explores the self through waking, dreaming, and deep sleep.",
    sourceSlug: "mandukya",
    sourceName: "Mandukya Upanishad",
    locator: "2",
  },
];

export const mahavakyaForVeda = (veda: VedaId) =>
  mahavakyas.find((item) => item.veda === veda);

export const mahavakyaDataIssues = () => {
  const duplicateVedas = mahavakyas
    .filter((item, index) => mahavakyas.findIndex((candidate) => candidate.veda === item.veda) !== index)
    .map((item) => item.veda);
  const invalidSources = mahavakyas
    .filter((item) => {
      const source = upanishads.find((candidate) => candidate.slug === item.sourceSlug);
      return !source || source.veda !== item.veda || source.recension !== item.recension;
    })
    .map((item) => item.sourceSlug);

  return { duplicateVedas, invalidSources, countIsValid: mahavakyas.length === 4 };
};

if (process.env.NODE_ENV !== "production") {
  const issues = mahavakyaDataIssues();
  if (!issues.countIsValid || issues.duplicateVedas.length || issues.invalidSources.length) {
    console.warn("Invalid mahāvākya data", issues);
  }
}
