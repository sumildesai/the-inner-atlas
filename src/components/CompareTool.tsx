"use client";

import Link from "next/link";
import { useState } from "react";
import { concepts, upanishads } from "@/data/content";

export default function CompareTool() {
  const [selected, setSelected] = useState(["isha", "katha"]);
  const items = selected.map((slug) => upanishads.find((u) => u.slug === slug)!).filter(Boolean);
  const update = (index: number, slug: string) => setSelected((current) => current.map((value, i) => i === index ? slug : value));
  const add = () => selected.length < 3 && setSelected([...selected, upanishads.find((u) => !selected.includes(u.slug))!.slug]);
  return <div className="compare-tool">
    <div className="compare-selectors">{selected.map((slug, i) => <label key={i}>Teaching {i + 1}<select value={slug} onChange={(e) => update(i, e.target.value)}>{upanishads.map((u) => <option disabled={selected.includes(u.slug) && u.slug !== slug} key={u.slug} value={u.slug}>{u.name}</option>)}</select></label>)}{selected.length < 3 && <button onClick={add}>+ Add a third</button>}{selected.length > 2 && <button onClick={() => setSelected(selected.slice(0, 2))}>Remove third</button>}</div>
    <div className="comparison-grid" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
      {items.map((u) => <article key={u.slug} style={{ "--accent": u.color } as React.CSSProperties}>
        <div className="compare-heading"><span className="devanagari">{u.devanagari}</span><p className="eyebrow">{u.meaning}</p><h2>{u.name}</h2></div>
        <section><h3>Central question</h3><p className="question-copy">{u.question}</p></section>
        <section><h3>In brief</h3><p>{u.summary}</p></section>
        <section><h3>Key themes</h3><div className="tag-row">{u.themes.map((t) => <span key={t}>{t}</span>)}</div></section>
        <section><h3>Shared ideas</h3><ul className="concept-list">{u.conceptIds.map((id) => { const c = concepts.find((item) => item.slug === id)!; const shared = items.filter((item) => item.conceptIds.includes(id)).length > 1; return <li key={id} className={shared ? "shared" : ""}><span style={{ background: c.color }} />{c.name}{shared && <small> shared</small>}</li>; })}</ul></section>
        <section><h3>A passage to consider</h3><blockquote>“{u.passage.text}”</blockquote><small>{u.passage.locator}</small></section>
        <Link className="arrow-link" href={`/upanishads/${u.slug}`}>Open full profile <span>↗</span></Link>
      </article>)}
    </div>
  </div>;
}
