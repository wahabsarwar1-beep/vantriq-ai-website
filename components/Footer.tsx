"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { NAV_LINKS } from "@/lib/nav-links";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "56px clamp(20px,5vw,72px)",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px 40px",
        justifyContent: "space-between",
        fontSize: 13,
        lineHeight: "28px",
        color: "color-mix(in srgb, var(--color-text) 55%, transparent)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Logo size={28} fontSize={16} />
        <span>Intelligent automation for business · Islamabad, Pakistan</span>
      </div>
      <span style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {NAV_LINKS.filter((link) => link.href !== pathname).map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </span>
    </footer>
  );
}
