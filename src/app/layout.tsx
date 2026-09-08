import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "The Inner Atlas · Ten Upanishads", template: "%s · The Inner Atlas" },
  description: "A visual, contemplative guide to ten principal Upanishads and the ideas connecting them.",
  metadataBase: new URL("https://theinneratlas.example"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={geist.variable}><body id="top"><Header />{children}<Footer /></body></html>;
}
