"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SearchOverlay from "./SearchOverlay";

const links = [
  ["/explore", "Explore"],
  ["/concepts", "Concepts"],
  ["/shanti-mantras", "Invocations"],
  ["/compare", "Compare"],
  ["/about", "About"],
];

export default function Header() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <Link href="/" className="brand" aria-label="The Inner Atlas home">
          <span className="brand-mark" aria-hidden="true">◉</span>
          <span>The Inner Atlas</span>
        </Link>
        <nav aria-label="Primary navigation">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className={pathname === href || pathname.startsWith(`${href}/`) ? "active" : ""}>{label}</Link>
          ))}
        </nav>
        <button className="search-button" onClick={() => setSearchOpen(true)} aria-label="Open search">
          <span aria-hidden="true">⌕</span><span className="search-label">Search</span><kbd>⌘ K</kbd>
        </button>
      </header>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
