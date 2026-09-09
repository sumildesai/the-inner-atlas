import type { Metadata } from "next";
import Link from "next/link";
import { shantiMantras, textsForMantra } from "@/data/shanti";
import { upanishads } from "@/data/content";

export const metadata: Metadata = { title: "Shanti Mantras", description: "Five peace invocations shared across the ten principal Upanishads." };

export default function MantrasPage() {
  return <main id="main-content">
    <header className="page-hero centered"><p className="eyebrow">Before inquiry, an invocation</p><h1>Five openings.<br /><em>Ten teachings.</em></h1><p>An invocation is an opening prayer or request for support. These śānti mantras—sacred verses asking for peace—belong to traditions of reciting the Vedas, collections of sacred songs, ceremonies, and teachings. Teachers and students pass them on by speaking or chanting them aloud, asking for health, attention, and cooperation in study.</p></header>
    <section className="mantra-intro-band"><div><strong>Śānti</strong><span>शान्ति</span></div><p>Śānti means peace. A common traditional explanation of saying it three times is a wish for peace amid troubles within us, from other beings, and from forces beyond our control—for example, worry, conflict, or a storm.</p></section>
    <section className="mantra-collection content-width">{shantiMantras.map((mantra, index) => {
      const texts = textsForMantra(mantra.id).map((slug) => upanishads.find((u) => u.slug === slug)!).filter(Boolean);
      return <article id={mantra.id} key={mantra.id} className="mantra-full-card"><div className="mantra-index">0{index + 1}</div><div><p className="eyebrow">{mantra.veda}</p><h2>{mantra.title}</h2><p className="mantra-opening">{mantra.opening}</p><p className="mantra-devanagari">{mantra.devanagari}</p><details><summary>Read in Roman letters, with meaning and explanation</summary><p>Transliteration writes the Sanskrit sounds in Roman letters; it is not an English translation.</p><p className="mantra-transliteration">{mantra.transliteration}</p><p>{mantra.meaning}</p>{mantra.note && <p className="tradition-note">Reading note: {mantra.note}</p>}</details><div className="shared-mantra"><span>Recited with</span>{texts.map((u) => <Link href={`/upanishads/${u.slug}`} key={u.slug}>{u.name}</Link>)}</div></div></article>;
    })}</section>
    <aside className="editorial-note content-width"><span>Editorial note</span><p>Ways of chanting and choosing opening prayers vary between teaching traditions and editions. These groupings follow common associations with the Vedas, not a rule used everywhere. Meanings and reading notes are starting points, not the only interpretations; Sanskrit spellings in Roman letters and working meanings should receive expert review before scholarly publication.</p></aside>
  </main>;
}
