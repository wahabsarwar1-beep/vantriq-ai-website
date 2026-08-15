import { waLink } from "@/lib/whatsapp";

type CtaBandProps = {
  heading: string;
  body: string;
  primaryLabel: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export default function CtaBand({
  heading,
  body,
  primaryLabel,
  secondaryLabel,
  secondaryHref,
}: CtaBandProps) {
  return (
    <section
      style={{
        background:
          "radial-gradient(900px 420px at 85% -40%, color-mix(in srgb, var(--color-section-glow) 70%, transparent), transparent 64%), var(--color-section)",
        padding: "84px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)" }}>
        <h2
          style={{
            fontSize: "clamp(28px,3.4vw,40px)",
            lineHeight: 1.15,
            letterSpacing: "-0.012em",
            margin: "0 0 12px",
          }}
        >
          {heading}
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: "28px",
            color: "color-mix(in srgb, var(--color-text) 82%, transparent)",
            margin: "0 0 28px",
            maxWidth: "52ch",
          }}
        >
          {body}
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            className="btn btn-primary"
            href={waLink()}
            target="_blank"
            rel="noopener"
            style={{ minHeight: 38, paddingInline: 16 }}
          >
            {primaryLabel}
          </a>
          <a className="btn btn-ghost" href={secondaryHref} style={{ minHeight: 38, paddingInline: 16 }}>
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
