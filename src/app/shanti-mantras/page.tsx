import type { Metadata } from "next";
import Link from "next/link";
import { shantiMantras, textsForMantra } from "@/data/shanti";
import { upanishads } from "@/data/content";

export const metadata: Metadata = { title: "Shanti Mantras", description: "Five peace invocations shared across the ten principal Upanishads." };

export default function MantrasPage() {
  return <main id="main-content">
    <header className="page-hero centered"><p className="eyebrow">Before inquiry, an invocation</p><h1>Five openings.<br /><em>Ten teachings.</em></h1><p>Each principal Upanishad belongs to a Vedic recitational tradition. Their peace invocations prepare speaker, listener, body, mind, and world for study.</p></header>
    <section className="mantra-intro-band"><div><strong>Śānti</strong><span>शान्ति</span></div><p>The closing word is voiced three times—traditionally understood as peace amid disturbances arising from oneself, the surrounding world, and forces beyond one’s control.</p></section>
    <section className="mantra-collection content-width">{shantiMantras.map((mantra, index) => {
      const texts = textsForMantra(mantra.id).map((slug) => upanishads.find((u) => u.slug === slug)!).filter(Boolean);
      return <article id={mantra.id} key={mantra.id} className="mantra-full-card"><div className="mantra-index">0{index + 1}</div><div><p className="eyebrow">{mantra.veda}</p><h2>{mantra.title}</h2><p className="mantra-opening">{mantra.opening}</p><p className="mantra-devanagari">{mantra.devanagari}</p><details><summary>Read transliteration and meaning</summary><p className="mantra-transliteration">{mantra.transliteration}</p><p>{mantra.meaning}</p>{mantra.note && <p className="tradition-note">Tradition note: {mantra.note}</p>}</details><div className="shared-mantra"><span>Recited with</span>{texts.map((u) => <Link href={`/upanishads/${u.slug}`} key={u.slug}>{u.name}</Link>)}</div></div></article>;
    })}</section>
    <aside className="editorial-note content-width"><span>Editorial note</span><p>Recitational customs vary among lineages and editions. These groupings follow commonly taught Veda-based associations; transliterations and working meanings should receive expert review before scholarly publication.</p></aside>
  </main>;
}
