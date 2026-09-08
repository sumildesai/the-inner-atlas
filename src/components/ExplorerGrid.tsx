"use client";

import { useState } from "react";
import { upanishads } from "@/data/content";
import UpanishadCard from "./UpanishadCard";

export default function ExplorerGrid() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("all");
  const themes = Array.from(new Set(upanishads.flatMap((u) => u.themes))).sort();
  const results = upanishads.filter((u) => {
    const matchesText = [u.name, u.summary, u.question, ...u.themes].join(" ").toLowerCase().includes(query.toLowerCase());
    return matchesText && (theme === "all" || u.themes.includes(theme));
  });
  return <>
    <div className="explorer-tools">
      <label><span className="sr-only">Search Upanishads</span><span aria-hidden="true">⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search the ten texts…" /></label>
      <select value={theme} onChange={(e) => setTheme(e.target.value)} aria-label="Filter by theme"><option value="all">All themes</option>{themes.map((t) => <option key={t} value={t}>{t}</option>)}</select>
    </div>
    <p className="result-count">Showing {results.length} of {upanishads.length} teachings</p>
    <div className="card-grid">{results.map((item) => <UpanishadCard key={item.slug} item={item} index={upanishads.indexOf(item)} />)}</div>
    {!results.length && <p className="empty-state">No teachings match this path. Clear the search or choose another theme.</p>}
  </>;
}
