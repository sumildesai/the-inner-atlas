import type { ReactNode } from "react";
import type { UpanishadEmblem as EmblemData, UpanishadEmblemId } from "@/data/content";

type EmblemVariant = "card" | "hero" | "related";

const emblemDrawings: Record<UpanishadEmblemId, ReactNode> = {
  "katha-buffalo": (
    <>
      <path d="M51 38C42 37 32 32 27 24C24 19 23 14 23 9C31 17 39 18 47 15C43 22 44 30 51 38Z" />
      <path d="M69 38C78 37 88 32 93 24C96 19 97 14 97 9C89 17 81 18 73 15C77 22 76 30 69 38Z" />
      <path d="M48 35C43 46 43 64 48 77C51 85 55 91 60 96C65 91 69 85 72 77C77 64 77 46 72 35C68 31 64 29 60 29C56 29 52 31 48 35Z" />
      <path d="M50 48C43 46 38 48 34 53C40 51 45 53 49 57" />
      <path d="M70 48C77 46 82 48 86 53C80 51 75 53 71 57" />
      <path d="M53 72C55 75 57 77 60 77C63 77 65 75 67 72" />
      <path d="M55 84C58 86 62 86 65 84" />
    </>
  ),
};

export default function UpanishadEmblem({
  emblem,
  variant,
  labelled = false,
}: {
  emblem?: EmblemData;
  variant: EmblemVariant;
  labelled?: boolean;
}) {
  if (!emblem) return null;

  const accessibility = labelled
    ? { role: "img", "aria-label": `Mnemonic emblem: ${emblem.label}` }
    : { "aria-hidden": true };

  return (
    <span className={`upanishad-emblem upanishad-emblem--${variant}`} {...accessibility}>
      <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">
        {emblemDrawings[emblem.id]}
      </svg>
    </span>
  );
}
