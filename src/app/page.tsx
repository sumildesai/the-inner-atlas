import Link from "next/link";
import ShantiMantra from "@/components/ShantiMantra";
import UpanishadCard from "@/components/UpanishadCard";
import VedaDivision from "@/components/VedaDivision";
import { upanishads } from "@/data/content";

export default function Home() {
  return <main id="main-content">
    <section className="home-hero">
      <div className="hero-kicker"><span>Ten ancient teachings</span><span>One living inquiry</span></div>
      <h1>An atlas of the<br /><em>world within.</em></h1>
      <p>The Upanishads ask questions that remain startlingly close: Who am I beneath my roles? What is real? What, if anything, does death change?</p>
      <div className="hero-actions"><a className="primary-button" href="#start-here">Start here <span>↓</span></a><Link className="text-button" href="/explore">Explore all ten →</Link></div>
      <div className="hero-mandala" aria-hidden="true"><span>ॐ</span></div>
    </section>
    <section id="start-here" className="beginner-introduction content-width">
      <div className="section-heading"><div><p className="eyebrow">A first orientation</p><h2>Begin with<br /><em>the questions.</em></h2></div><p>The Upanishads are ancient Indian texts that explore self, consciousness, life, and freedom. They appear at the philosophical end of the Vedas, four much older collections of hymns, chants, rituals, and teachings.</p></div>
      <div className="beginner-path">
        <div><p className="eyebrow">Why these ten?</p><p>They are ten principal Upanishads, selected here as a welcoming path into a much larger tradition. Many other Upanishads exist, each with its own voice and history.</p></div>
        <div><p className="eyebrow">What you can learn here</p><p>Follow approachable questions, meet each teaching in plain language, and trace recurring ideas about awareness, identity, death, and the world.</p></div>
        <div className="beginner-actions"><Link className="primary-button" href="/explore">Meet the ten teachings <span>↗</span></Link><Link className="text-button" href="/upanishads/katha">Start with a story →</Link></div>
      </div>
    </section>
    <section id="vedas" className="veda-section"><div className="section-heading content-width"><div><p className="eyebrow">Four collections, ten teachings</p><h2>Rooted in<br /><em>four Vedas.</em></h2></div><p>Each Upanishad closes a Veda — the philosophical end of a body of hymn, chant, rite, and remedy. Every branch begins its study with an invocation, and every invocation ends the same way.</p></div><div className="content-width"><VedaDivision /></div></section>
    <section className="invocation-feature content-width"><div className="section-heading"><div><p className="eyebrow">Before a teaching begins</p><h2>Study opens<br /><em>with peace.</em></h2></div><p>The ten Upanishads share five traditional śānti mantras. Each invocation prepares a different dimension of the encounter.</p></div><ShantiMantra slug="isha" compact /></section>
    <section className="featured-teachings content-width"><div className="section-heading"><div><p className="eyebrow">Enter through a question</p><h2>Three places<br /><em>to begin.</em></h2></div><Link className="text-button" href="/explore">See all ten →</Link></div><div className="card-grid">{[upanishads[2], upanishads[5], upanishads[8]].map((u) => <UpanishadCard key={u.slug} item={u} index={upanishads.indexOf(u)} />)}</div></section>
    <section className="closing-invitation"><p className="eyebrow">No prior knowledge needed</p><h2>Bring only<br /><em>your attention.</em></h2><div><Link className="primary-button" href="/explore">Enter the atlas</Link><Link className="text-button" href="/about">About this project →</Link></div></section>
  </main>;
}
