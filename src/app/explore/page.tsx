import type { Metadata } from "next";
import ExplorerGrid from "@/components/ExplorerGrid";

export const metadata: Metadata = { title: "Explore the Ten Upanishads", description: "Browse ten principal Upanishads by theme, question, and core idea." };

export default function ExplorePage() {
  return <main id="main-content"><header className="page-hero"><p className="eyebrow">The ten principal teachings</p><h1>Ten doorways<br /><em>into one inquiry.</em></h1><p>Each Upanishad speaks in its own voice—through dialogue, image, question, silence, and story. Start wherever curiosity pulls you.</p></header><section className="content-width explorer-section"><ExplorerGrid /></section></main>;
}
