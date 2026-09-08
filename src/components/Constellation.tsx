"use client";

import Link from "next/link";
import { useState } from "react";
import { concepts, upanishads } from "@/data/content";

const textPositions = [
  [16, 26], [34, 15], [56, 15], [78, 27], [87, 50],
  [75, 74], [55, 83], [33, 80], [13, 66], [8, 45],
];
const conceptPositions = [[42, 34], [59, 35], [70, 49], [62, 62], [46, 67], [30, 60], [28, 43], [50, 50]];

export default function Constellation() {
  const [active, setActive] = useState<string | null>(null);
  const activeConcept = concepts.find((c) => c.slug === active);
  const visibleTexts = active ? upanishads.filter((u) => u.conceptIds.includes(active)) : upanishads;
  return (
    <div className="constellation-shell">
      <div className="constellation-controls" aria-label="Filter constellation by idea">
        <button className={!active ? "selected" : ""} onClick={() => setActive(null)}>All connections</button>
        {concepts.map((c) => <button className={active === c.slug ? "selected" : ""} key={c.slug} onClick={() => setActive(c.slug)}>{c.name}</button>)}
      </div>
      <div className="constellation" aria-label="Interactive map of Upanishads and core ideas">
        <svg className="connection-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {upanishads.flatMap((u, ui) => u.conceptIds.map((conceptId) => {
            const ci = concepts.findIndex((c) => c.slug === conceptId);
            const show = !active || active === conceptId;
            return <line key={`${u.slug}-${conceptId}`} x1={textPositions[ui][0]} y1={textPositions[ui][1]} x2={conceptPositions[ci][0]} y2={conceptPositions[ci][1]} className={show ? "visible" : "muted"} />;
          }))}
        </svg>
        {upanishads.map((u, i) => <Link key={u.slug} href={`/upanishads/${u.slug}`} className={`star-node text-node ${visibleTexts.includes(u) ? "visible" : "muted"}`} style={{ left: `${textPositions[i][0]}%`, top: `${textPositions[i][1]}%`, "--node": u.color } as React.CSSProperties}><span className="node-orbit" /><strong>{u.name}</strong><small>{u.devanagari}</small></Link>)}
        {concepts.map((c, i) => <button key={c.slug} onClick={() => setActive(active === c.slug ? null : c.slug)} className={`star-node concept-node ${!active || active === c.slug ? "visible" : "muted"}`} style={{ left: `${conceptPositions[i][0]}%`, top: `${conceptPositions[i][1]}%`, "--node": c.color } as React.CSSProperties} aria-pressed={active === c.slug}><span />{c.name}</button>)}
        <div className="center-mark" aria-hidden="true"><span>ॐ</span></div>
      </div>
      <div className="constellation-caption" aria-live="polite">
        <span className="caption-symbol">✦</span>
        <p>{activeConcept ? <><strong>{activeConcept.name} · {activeConcept.sanskrit}</strong><br />{activeConcept.summary} Connected to {visibleTexts.length} texts.</> : <><strong>A constellation, not a single path.</strong><br />Choose an idea to reveal how it travels through the ten teachings.</>}</p>
      </div>
      <div className="constellation-list" aria-label="Text alternative to constellation">{visibleTexts.map((u) => <Link href={`/upanishads/${u.slug}`} key={u.slug}><span style={{ background: u.color }} />{u.name}</Link>)}</div>
    </div>
  );
}
