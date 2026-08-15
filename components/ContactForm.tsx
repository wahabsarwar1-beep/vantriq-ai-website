"use client";

import { useState } from "react";

const INDUSTRIES = [
  "E-commerce & Retail",
  "Real Estate",
  "Healthcare",
  "Education",
  "Hospitality",
  "Legal & Consulting",
  "Travel & Tourism",
  "HR & Operations",
  "Marketing Agencies",
  "Logistics",
  "Something else",
];

const labelStyle = {
  display: "grid",
  gap: 6,
  fontSize: 13,
  letterSpacing: "0.04em",
  textTransform: "uppercase" as const,
  color: "color-mix(in srgb, var(--color-text) 62%, transparent)",
};

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      style={{
        background: "var(--color-surface)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-md)",
        padding: "32px 30px 34px",
        display: "grid",
        gap: 18,
      }}
    >
      <h2 style={{ fontSize: 20, lineHeight: 1.25, margin: 0 }}>Send a brief</h2>
      <p
        style={{
          fontSize: 14.5,
          lineHeight: "24px",
          color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
          margin: 0,
        }}
      >
        Tell us how customers message you today and we&rsquo;ll come back with a scope.
      </p>
      <label className="field" style={labelStyle}>
        Name
        <input
          className="input"
          name="name"
          required
          placeholder="Your name"
          style={{ textTransform: "none", letterSpacing: "normal" }}
        />
      </label>
      <label className="field" style={labelStyle}>
        Business
        <input
          className="input"
          name="business"
          placeholder="Company name"
          style={{ textTransform: "none", letterSpacing: "normal" }}
        />
      </label>
      <label className="field" style={labelStyle}>
        WhatsApp or email
        <input
          className="input"
          name="contact"
          required
          placeholder="03XX XXXXXXX or you@company.com"
          style={{ textTransform: "none", letterSpacing: "normal" }}
        />
      </label>
      <label className="field" style={labelStyle}>
        Industry
        <select
          className="input"
          name="industry"
          style={{ textTransform: "none", letterSpacing: "normal", appearance: "none" }}
        >
          {INDUSTRIES.map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
      </label>
      <label className="field" style={labelStyle}>
        What should the agent handle?
        <textarea
          className="input"
          name="notes"
          rows={4}
          placeholder="Booking, catalogue questions, order tracking…"
          style={{
            textTransform: "none",
            letterSpacing: "normal",
            resize: "vertical",
            lineHeight: "24px",
            paddingTop: 10,
          }}
        />
      </label>
      <button
        className="btn btn-primary"
        type="submit"
        style={{ minHeight: 38, justifySelf: "start", paddingInline: 16 }}
      >
        Send brief
      </button>
      {sent && (
        <p style={{ fontSize: 14.5, lineHeight: "24px", color: "var(--color-accent-300)", margin: 0 }}>
          Thanks — we&rsquo;ll reply within one business day.
        </p>
      )}
    </form>
  );
}
