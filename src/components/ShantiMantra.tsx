"use client";

import Link from "next/link";
import { useState } from "react";
import { mantraForUpanishad, textsForMantra } from "@/data/shanti";
import { upanishads } from "@/data/content";

export default function ShantiMantra({ slug, compact = false }: { slug: string; compact?: boolean }) {
  const [script, setScript] = useState<"devanagari" | "transliteration">("devanagari");
  const mantra = mantraForUpanishad(slug);
  if (!mantra) return null;
  const shared = textsForMantra(mantra.id).map((id) => upanishads.find((u) => u.slug === id)!).filter(Boolean);
  return <section className={`mantra-panel ${compact ? "compact" : ""}`}>
    <div className="mantra-heading"><div><p className="eyebrow">Śānti mantra · {mantra.veda}</p><h2>{mantra.title}</h2></div><div className="script-toggle" aria-label="Mantra script"><button className={script === "devanagari" ? "active" : ""} onClick={() => setScript("devanagari")}>देव</button><button className={script === "transliteration" ? "active" : ""} onClick={() => setScript("transliteration")}>IAST</button></div></div>
    <p className={script === "devanagari" ? "mantra-devanagari" : "mantra-transliteration"}>{script === "devanagari" ? mantra.devanagari : mantra.transliteration}</p>
    {!compact && <><div className="mantra-meaning"><span>In essence</span><p>{mantra.meaning}</p></div>{mantra.note && <p className="tradition-note">Tradition note: {mantra.note}</p>}</>}
    <div className="shared-mantra"><span>Shared invocation</span>{shared.map((u) => <Link key={u.slug} href={`/upanishads/${u.slug}`} style={{ "--dot": u.color } as React.CSSProperties}>{u.name}</Link>)}</div>
    {compact && <Link className="arrow-link" href="/shanti-mantras">Explore all five invocations <span>→</span></Link>}
  </section>;
}
