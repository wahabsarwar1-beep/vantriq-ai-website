"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/nav-links";
import { waLink } from "@/lib/whatsapp";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openedForPathname, setOpenedForPathname] = useState(pathname);

  if (pathname !== openedForPathname) {
    setOpenedForPathname(pathname);
    setOpen(false);
  }

  return (
    <nav
      className="nav"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        paddingInline:
          "max(clamp(20px,5vw,72px), calc((100% - 1200px) / 2 + clamp(20px,5vw,72px)))",
        background: "color-mix(in srgb, var(--color-bg) 88%, transparent)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Link
        href="/"
        className="nav-brand"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          marginRight: "auto",
          fontSize: 24,
          color: "inherit",
        }}
      >
        <Image
          src="/vantriq-logo.png"
          alt="Vantriq AI"
          width={40}
          height={40}
          style={{ width: 40, height: 40, flex: "none", display: "block", borderRadius: 9 }}
        />
        Vantriq AI
      </Link>

      <div
        className="nav-links-desktop"
        style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
            style={pathname === link.href ? { color: "var(--color-accent)" } : undefined}
          >
            {link.label}
          </Link>
        ))}
        <a className="btn btn-primary" href={waLink()} target="_blank" rel="noopener">
          WhatsApp us
        </a>
      </div>

      <button
        type="button"
        className="nav-toggle-btn"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div className="nav-mobile-panel">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              style={pathname === link.href ? { color: "var(--color-accent)" } : undefined}
            >
              {link.label}
            </Link>
          ))}
          <a className="btn btn-primary" href={waLink()} target="_blank" rel="noopener">
            WhatsApp us
          </a>
        </div>
      )}
    </nav>
  );
}
