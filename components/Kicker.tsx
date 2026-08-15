export default function Kicker({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 14 }}>
      <span style={{ width: 44, height: 1, background: "var(--color-accent)", flex: "none" }} />
      <span
        style={{
          fontSize: 13,
          lineHeight: "14px",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "var(--color-accent)",
        }}
      >
        {label}
      </span>
    </div>
  );
}
