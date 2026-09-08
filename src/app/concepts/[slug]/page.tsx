import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import UpanishadCard from "@/components/UpanishadCard";
import { conceptBySlug, concepts, upanishads } from "@/data/content";

export function generateStaticParams() { return concepts.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const concept = conceptBySlug(slug); return { title: concept ? concept.name : "Idea not found" }; }
export default async function ConceptPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const concept = conceptBySlug(slug); if (!concept) notFound(); const texts = upanishads.filter((u) => u.conceptIds.includes(slug)); return <main id="main-content"><header className="detail-hero" style={{ "--accent": concept.color } as React.CSSProperties}><Link className="back-link" href="/concepts">← All ideas</Link><div className="detail-symbol"><span /></div><p className="eyebrow">{concept.sanskrit}</p><h1>{concept.name}</h1><p>{concept.summary}</p></header><section className="content-width linked-teachings"><div className="section-heading"><div><p className="eyebrow">Follow the thread</p><h2>{texts.length} teachings<br />touch this idea.</h2></div><p>The same word can open different questions. Enter each teaching to see its particular context.</p></div><div className="card-grid">{texts.map((u) => <UpanishadCard item={u} index={upanishads.indexOf(u)} key={u.slug} />)}</div></section></main>; }
