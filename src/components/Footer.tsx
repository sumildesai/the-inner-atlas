import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div><span className="brand-mark" aria-hidden="true">◉</span> The Inner Atlas</div>
      <p>A contemplative beginner’s guide to ten principal Upanishads.</p>
      <div className="footer-links"><Link href="/about">Methodology</Link><a href="#top">Back to top ↑</a></div>
    </footer>
  );
}
