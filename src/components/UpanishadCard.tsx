import Link from "next/link";
import type { Upanishad } from "@/data/content";
import UpanishadEmblem from "./UpanishadEmblem";

export default function UpanishadCard({ item, index, guided = false }: { item: Upanishad; index?: number; guided?: boolean }) {
  return (
    <article className="text-card" style={{ "--accent": item.color } as React.CSSProperties}>
      <UpanishadEmblem emblem={item.emblem} variant="card" />
      <div className="card-top"><span className="card-number">{String((index ?? 0) + 1).padStart(2, "0")}</span><span className="devanagari">{item.devanagari}</span></div>
      <div>
        <p className="eyebrow">{item.meaning}</p><h3>{item.name}</h3>
        {guided ? <>
          <p><strong>{item.question}</strong></p>
          <p>{item.whyItMatters}</p>
          {item.readingGuide && <p><strong>{item.readingGuide.approach}.</strong> {item.readingGuide.background}</p>}
        </> : <p>{item.summary}</p>}
      </div>
      <div className="tag-row">{item.themes.slice(0, 3).map((theme) => <span key={theme}>{theme}</span>)}</div>
      <Link className="arrow-link" href={`/upanishads/${item.slug}`}>Enter this teaching <span>↗</span></Link>
    </article>
  );
}
