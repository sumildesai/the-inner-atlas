import Link from "next/link";
import type { Upanishad } from "@/data/content";
import UpanishadEmblem from "./UpanishadEmblem";

export default function UpanishadCard({ item, index }: { item: Upanishad; index?: number }) {
  return (
    <article className="text-card" style={{ "--accent": item.color } as React.CSSProperties}>
      <UpanishadEmblem emblem={item.emblem} variant="card" />
      <div className="card-top"><span className="card-number">{String((index ?? 0) + 1).padStart(2, "0")}</span><span className="devanagari">{item.devanagari}</span></div>
      <div><p className="eyebrow">{item.meaning}</p><h3>{item.name}</h3><p>{item.summary}</p></div>
      <div className="tag-row">{item.themes.slice(0, 3).map((theme) => <span key={theme}>{theme}</span>)}</div>
      <Link className="arrow-link" href={`/upanishads/${item.slug}`}>Enter this teaching <span>↗</span></Link>
    </article>
  );
}
