"use client";

import { useRef } from "react";

type IndustryTileProps = {
  index: number;
  icon: string;
  name: string;
  kicker: string;
  body: string;
};

export default function IndustryTile({ index, icon, name, kicker, body }: IndustryTileProps) {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      data-tile=""
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
        el.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
      }}
      style={{
        position: "relative",
        isolation: "isolate",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: 8,
        minHeight: 196,
        padding: "24px 22px 26px",
        borderRadius: "var(--radius-lg)",
        background: "color-mix(in srgb, var(--color-surface) 72%, transparent)",
        border: "1px solid color-mix(in srgb, var(--color-accent) 18%, transparent)",
        overflow: "hidden",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 20,
          right: 22,
          fontFamily: "var(--font-heading)",
          fontWeight: 500,
          fontSize: 13,
          color: "color-mix(in srgb, var(--color-accent) 50%, transparent)",
          fontFeatureSettings: "'tnum' 1",
        }}
      >
        {String(index).padStart(2, "0")}
      </span>
      <i
        className={`ph ph-${icon}`}
        aria-hidden="true"
        data-ico=""
        style={{ fontSize: 22, color: "var(--color-accent)", marginBottom: 6 }}
      />
      <h2 style={{ fontSize: 21, lineHeight: 1.18, letterSpacing: "-0.012em", margin: 0 }}>{name}</h2>
      <span
        style={{
          fontSize: 13,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "var(--color-accent-300)",
        }}
      >
        {kicker}
      </span>
      <p
        style={{
          fontSize: 14.5,
          lineHeight: "25px",
          color: "color-mix(in srgb, var(--color-text) 74%, transparent)",
          margin: "4px 0 0",
          maxWidth: "46ch",
        }}
      >
        {body}
      </p>
      <a
        data-cue=""
        href="/contact"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 7,
          marginTop: "auto",
          paddingTop: 14,
          fontSize: 13,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "var(--color-accent-300)",
        }}
      >
        Ask about this
        <span aria-hidden="true">→</span>
      </a>
    </li>
  );
}
