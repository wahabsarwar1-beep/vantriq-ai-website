import Image from "next/image";

type LogoProps = {
  size?: number;
  fontSize?: number;
};

export default function Logo({ size = 40, fontSize = 24 }: LogoProps) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <Image
        src="/vantriq-logo.png"
        alt="Vantriq AI"
        width={size}
        height={size}
        style={{
          width: size,
          height: size,
          flex: "none",
          display: "block",
          borderRadius: size * 0.225,
        }}
      />
      <span style={{ fontFamily: "var(--font-heading)", fontWeight: 500, fontSize }}>
        Vantriq{" "}
        <span
          style={{
            color: "var(--color-logo-gold)",
            textDecoration: "underline",
            textDecorationColor: "var(--color-logo-gold)",
            textUnderlineOffset: "4px",
          }}
        >
          AI
        </span>
      </span>
    </span>
  );
}
