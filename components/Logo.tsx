import Image from "next/image";

type LogoProps = {
  size?: number;
  fontSize?: number;
};

export default function Logo({ size = 40, fontSize = 24 }: LogoProps) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, letterSpacing: "-0.01em" }}>
      <Image
        src="/vantriq-logo.png"
        alt=""
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
        Vantriq
        <span
          style={{
            color: "var(--color-logo-gold)",
            fontSize: "0.78em",
            letterSpacing: "0.02em",
            borderBottom: "2px solid var(--color-logo-gold)",
            paddingBottom: 2,
            marginLeft: -1,
          }}
        >
          AI
        </span>
      </span>
    </span>
  );
}
