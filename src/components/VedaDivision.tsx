"use client";

import Link from "next/link";
import { useState } from "react";
import { upanishadsForBranch, vedas, type VedaId } from "@/data/content";
import { mahavakyaForVeda } from "@/data/mahavakyas";
import { mantraForBranch, shantiRefrain } from "@/data/shanti";

export default function VedaDivision() {
  const [activeVeda, setActiveVeda] = useState<VedaId>("rig");
  const activeMahavakya = mahavakyaForVeda(activeVeda)!;
  const activeVedaData = vedas.find((veda) => veda.id === activeVeda)!;

  return (
    <div className="veda-division">
      <ol className="veda-branches">
        {vedas.map((veda) => {
          const mahavakya = mahavakyaForVeda(veda.id)!;
          const isActive = activeVeda === veda.id;
          return (
            <li key={veda.id} className={`veda-column ${isActive ? "mahavakya-active" : ""}`} style={{ "--veda": veda.color } as React.CSSProperties}>
              <div className="veda-crown">
                <span className="veda-devanagari" aria-hidden="true">{veda.devanagari}</span>
                <h3>{veda.name}</h3>
                <p className="veda-blurb">{veda.blurb}</p>
              </div>
              <div className={`veda-limbs ${veda.branches.length > 1 ? "split" : ""}`}>
                {veda.branches.map((branch) => {
                  const texts = upanishadsForBranch(veda.id, branch.recension);
                  const mantra = mantraForBranch(veda.id, branch.recension);
                  return (
                    <div className="veda-limb" key={branch.label}>
                      <p className="veda-limb-label">
                        <span aria-hidden="true">{branch.devanagari}</span>
                        {branch.label}
                      </p>
                      <ul className="veda-texts">
                        {texts.map((item) => {
                          const isSource = isActive && item.slug === mahavakya.sourceSlug;
                          return (
                            <li key={item.slug}>
                              <Link className={isSource ? "mahavakya-source" : ""} href={`/upanishads/${item.slug}`} style={{ "--dot": item.color } as React.CSSProperties}>
                                <strong>{item.name}</strong>
                                <small>{item.devanagari}</small>
                                {isSource && <span className="source-mark">source</span>}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                      {mantra && (
                        <p className="veda-mantra">
                          Opens with <Link href={`/shanti-mantras#${mantra.id}`}>{mantra.opening}</Link>
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
              <button
                type="button"
                className="mahavakya-trigger"
                aria-pressed={isActive}
                aria-controls="mahavakya-detail"
                onClick={() => setActiveVeda(veda.id)}
              >
                <span>Mahāvākya{mahavakya.recension === "shukla" ? " · Śukla" : ""}</span>
                <strong>{mahavakya.transliteration}</strong>
              </button>
              <span className="veda-stem" aria-hidden="true" />
            </li>
          );
        })}
      </ol>
      <article
        id="mahavakya-detail"
        className="mahavakya-detail"
        style={{ "--veda": activeVedaData.color } as React.CSSProperties}
        aria-live="polite"
        aria-atomic="true"
      >
        <p className="mahavakya-detail-label">The great utterance of the {activeVedaData.name}</p>
        <p className="mahavakya-devanagari" lang="sa">{activeMahavakya.devanagari}</p>
        <div className="mahavakya-reading">
          <p><em>{activeMahavakya.transliteration}</em><span>{activeMahavakya.meaning}</span></p>
          <Link href={`/upanishads/${activeMahavakya.sourceSlug}`}>
            {activeMahavakya.sourceName} <span>{activeMahavakya.locator} →</span>
          </Link>
        </div>
      </article>
      <div className="shanti-throughline">
        <span className="throughline-rule" aria-hidden="true" />
        <p className="throughline-refrain" lang="sa">{shantiRefrain.devanagari}</p>
        <p className="throughline-iast">{shantiRefrain.transliteration}</p>
        <p className="throughline-meaning">{shantiRefrain.meaning}</p>
        <Link className="arrow-link" href="/shanti-mantras">Hear all five invocations <span>→</span></Link>
      </div>
    </div>
  );
}
