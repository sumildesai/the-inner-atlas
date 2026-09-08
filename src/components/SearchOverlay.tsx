"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { concepts, upanishads } from "@/data/content";

export default function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (open) onClose();
        else document.querySelector<HTMLButtonElement>(".search-button")?.click();
      }
      if (event.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 30); }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { texts: upanishads.slice(0, 4), ideas: concepts.slice(0, 4) };
    return {
      texts: upanishads.filter((u) => [u.name, u.meaning, u.summary, u.question, ...u.themes].join(" ").toLowerCase().includes(q)),
      ideas: concepts.filter((c) => [c.name, c.sanskrit, c.summary].join(" ").toLowerCase().includes(q)),
    };
  }, [query]);

  if (!open) return null;
  return (
    <div className="search-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <section className="search-dialog" role="dialog" aria-modal="true" aria-label="Search the Inner Atlas">
        <div className="search-input-wrap"><span aria-hidden="true">⌕</span><input ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search texts, ideas, or questions…" /><button onClick={onClose} aria-label="Close search">Esc</button></div>
        <div className="search-results">
          {!results.texts.length && !results.ideas.length && <p className="empty-state">No path found yet. Try “self,” “death,” “consciousness,” or “creation.”</p>}
          {!!results.texts.length && <div><h2>Upanishads</h2>{results.texts.map((u) => <Link onClick={onClose} href={`/upanishads/${u.slug}`} key={u.slug}><span className="result-dot" style={{ background: u.color }} /> <span><strong>{u.name}</strong><small>{u.question}</small></span><span>→</span></Link>)}</div>}
          {!!results.ideas.length && <div><h2>Ideas</h2>{results.ideas.map((c) => <Link onClick={onClose} href={`/concepts/${c.slug}`} key={c.slug}><span className="result-dot" style={{ background: c.color }} /> <span><strong>{c.name}</strong><small>{c.sanskrit}</small></span><span>→</span></Link>)}</div>}
        </div>
      </section>
    </div>
  );
}
