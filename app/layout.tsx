import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Vantriq AI — WhatsApp AI agents for Pakistani SMEs",
  description:
    "AI agents that reply, qualify, and book — 24 hours a day. On WhatsApp, Instagram, and your website, in seconds, at any volume.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Nav />
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
