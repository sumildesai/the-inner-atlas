import type { Metadata } from "next";
import CompareTool from "@/components/CompareTool";

export const metadata: Metadata = { title: "Compare Teachings", description: "Compare the questions, themes, ideas, and passages of the principal Upanishads." };
export default function ComparePage() { return <main id="main-content"><header className="page-hero centered"><p className="eyebrow">See difference without losing connection</p><h1>Place the teachings<br /><em>in conversation.</em></h1><p>Choose two or three Upanishads. Shared ideas are illuminated, while each text keeps its distinct question and voice.</p></header><section className="wide-content"><CompareTool /></section></main>; }
