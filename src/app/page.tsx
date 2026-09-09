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
      <div className="section-heading"><div><p className="eyebrow">A first orientation</p><h2>Begin with<br /><em>the questions.</em></h2></div><p>The Upanishads are ancient Indian texts that ask who we are, how we experience the world, and what freedom might mean. They belong to the Vedas, four older collections of sacred songs, ceremonies, and teachings.</p></div>
      <div className="beginner-path">
        <div><p className="eyebrow">Why these ten?</p><p>They are ten principal Upanishads, selected here as a welcoming path into a much larger tradition. Many other Upanishads exist, each with its own voice and history.</p></div>
        <div><p className="eyebrow">Recommended first reading</p><p>Completely new? Start with Katha. A young person’s conversation with Death gives you a story to follow while questions about choice and the self unfold. No prior knowledge is needed.</p></div>
        <div className="beginner-actions"><Link className="primary-button" href="/upanishads/katha">Start with Katha <span>↗</span></Link><Link className="text-button" href="/explore">Browse all ten instead →</Link></div>
      </div>
    </section>
    <section id="vedas" className="veda-section"><div className="section-heading content-width"><div><p className="eyebrow">Four collections, ten teachings</p><h2>Rooted in<br /><em>four Vedas.</em></h2></div><p>Each Upanishad shown here belongs to a Vedic tradition. Branches are schools that passed down texts through teaching and recitation—speaking or chanting them aloud. Study commonly opens with an invocation, a verse asking for peace or support; the five shown here share a closing wish for peace.</p></div><div className="content-width"><VedaDivision /></div></section>
    <section className="invocation-feature content-width"><div className="section-heading"><div><p className="eyebrow">Before a teaching begins</p><h2>Study opens<br /><em>with peace.</em></h2></div><p>Śānti means peace; a mantra is a sacred phrase or verse recited aloud or silently. These five śānti mantras ask for conditions that help learning, such as health, attention, and cooperation between teacher and student. Customs vary between teaching traditions.</p></div><ShantiMantra slug="isha" compact /></section>
    <section className="featured-teachings content-width"><div className="section-heading"><div><p className="eyebrow">Enter through a question</p><h2>Three places<br /><em>to begin.</em></h2></div><Link className="text-button" href="/explore">See all ten →</Link></div><div className="card-grid">{[upanishads[2], upanishads[5], upanishads[8]].map((u) => <UpanishadCard key={u.slug} item={u} index={upanishads.indexOf(u)} guided />)}</div></section>
    <section className="closing-invitation"><p className="eyebrow">No prior knowledge needed</p><h2>Bring only<br /><em>your attention.</em></h2><div><Link className="primary-button" href="/explore">Enter the atlas</Link><Link className="text-button" href="/about">About this project →</Link></div></section>
  </main>;
}
