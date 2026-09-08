import Link from "next/link";
import Constellation from "@/components/Constellation";
import ShantiMantra from "@/components/ShantiMantra";
import UpanishadCard from "@/components/UpanishadCard";
import { concepts, upanishads } from "@/data/content";

export default function Home() {
  return <main id="main-content">
    <section className="home-hero">
      <div className="hero-kicker"><span>Ten ancient teachings</span><span>One living inquiry</span></div>
      <h1>An atlas of the<br /><em>world within.</em></h1>
      <p>The Upanishads ask questions that remain startlingly close: Who am I beneath my roles? What is real? What, if anything, does death change?</p>
      <div className="hero-actions"><Link className="primary-button" href="/explore">Begin exploring <span>↗</span></Link><a className="text-button" href="#constellation">See the constellation ↓</a></div>
      <div className="hero-mandala" aria-hidden="true"><span>ॐ</span></div>
    </section>
    <section id="constellation" className="constellation-section"><div className="section-heading content-width"><div><p className="eyebrow">The field of inquiry</p><h2>Everything<br /><em>is connected.</em></h2></div><p>Ten texts circle recurring questions of self, reality, knowledge, and freedom. Touch an idea to see where it travels.</p></div><Constellation /></section>
    <section className="invocation-feature content-width"><div className="section-heading"><div><p className="eyebrow">Before a teaching begins</p><h2>Study opens<br /><em>with peace.</em></h2></div><p>The ten Upanishads share five traditional śānti mantras. Each invocation prepares a different dimension of the encounter.</p></div><ShantiMantra slug="isha" compact /></section>
    <section className="featured-teachings content-width"><div className="section-heading"><div><p className="eyebrow">Enter through a question</p><h2>Three places<br /><em>to begin.</em></h2></div><Link className="text-button" href="/explore">See all ten →</Link></div><div className="card-grid">{[upanishads[2], upanishads[5], upanishads[8]].map((u) => <UpanishadCard key={u.slug} item={u} index={upanishads.indexOf(u)} />)}</div></section>
    <section className="idea-river"><div className="content-width"><p className="eyebrow">Or follow an idea</p><div>{concepts.map((c) => <Link href={`/concepts/${c.slug}`} key={c.slug}><span style={{ background: c.color }} />{c.name}<small>{c.sanskrit}</small></Link>)}</div></div></section>
    <section className="closing-invitation"><p className="eyebrow">No prior knowledge needed</p><h2>Bring only<br /><em>your attention.</em></h2><div><Link className="primary-button" href="/explore">Enter the atlas</Link><Link className="text-button" href="/about">About this project →</Link></div></section>
  </main>;
}
