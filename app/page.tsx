import Kicker from "@/components/Kicker";
import Divider from "@/components/Divider";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import { waLink } from "@/lib/whatsapp";

const bodyMuted = { color: "color-mix(in srgb, var(--color-text) 78%, transparent)" };

const STATS = [
  {
    value: "~400%",
    label: "More leads convert when you reply within two minutes instead of hours",
  },
  {
    value: "20–30%",
    label: "Revenue typically lost to after-hours and peak-rush messages that go unanswered",
  },
  {
    value: "24/7",
    label: "The coverage your AI-equipped competitors already have — and you may not",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Engage",
    body: "Replies instantly on WhatsApp, Instagram, or your website — any hour, any volume, no queue.",
  },
  {
    n: "02",
    title: "Execute",
    body: "Books the appointment, shares the catalogue, checks availability, logs the lead in your CRM.",
  },
  {
    n: "03",
    title: "Escalate",
    body: "Hands to your team the moment judgement is needed — with the full conversation attached.",
  },
];

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
];

const WHY = [
  {
    title: "Built for you, not off the shelf",
    body: "Every agent is configured to your workflow, catalogue, and tone — not a template with your logo on it.",
  },
  {
    title: "A relationship, not a dashboard",
    body: "A dedicated local team manages, tunes, and improves your agent every single month.",
  },
  {
    title: "Priced in PKR, built for Pakistan",
    body: "No confusing USD billing, no overseas support hours, no timezone gap when something breaks.",
  },
  {
    title: "Enterprise experience, SME flexibility",
    body: "14+ years running enterprise and government accounts, applied to businesses of every size.",
  },
];

export default function Home() {
  return (
    <>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)" }}>
        <section style={{ padding: "112px 0 84px" }}>
          <h1
            style={{
              fontSize: "clamp(44px,6.4vw,88px)",
              lineHeight: 1.11,
              letterSpacing: "-0.015em",
              margin: "0 0 0 -0.06em",
              maxWidth: "18ch",
            }}
          >
            <span style={{ display: "block", color: "var(--color-hero)" }}>Never miss another</span>
            <span style={{ display: "block", color: "var(--color-hero)" }}>customer message.</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: "28px", maxWidth: "56ch", margin: "36px 0 0" }}>
            AI agents that reply, qualify, and book — 24 hours a day. On WhatsApp, Instagram, and your
            website, in seconds, at any volume.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
            <a
              className="btn btn-primary"
              href={waLink()}
              target="_blank"
              rel="noopener"
              style={{ minHeight: 38, paddingInline: 16 }}
            >
              Message us on WhatsApp
            </a>
            <a
              className="btn btn-ghost"
              href="/how-it-works"
              style={{ minHeight: 38, paddingInline: 16 }}
            >
              See how it works
            </a>
          </div>
        </section>
      </div>

      <section
        style={{
          background:
            "radial-gradient(900px 420px at 85% -40%, color-mix(in srgb, var(--color-section-glow) 70%, transparent), transparent 64%), var(--color-section)",
          padding: "70px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 clamp(20px,5vw,72px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: "42px 28px",
          }}
        >
          {STATS.map((stat) => (
            <div key={stat.value}>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 500,
                  fontSize: "clamp(36px,3.6vw,52px)",
                  lineHeight: 1.1,
                  margin: "0 0 0 -0.055em",
                  fontFeatureSettings: "'tnum' 1",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: "20px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "color-mix(in srgb, var(--color-text) 64%, transparent)",
                  margin: "14px 0 0",
                  maxWidth: "26ch",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)" }}>
        <section
          style={{
            padding: "98px 0 28px",
            display: "grid",
            gridTemplateColumns: "minmax(0,7fr) minmax(0,5fr)",
            gap: "28px clamp(24px,5vw,96px)",
            alignItems: "end",
          }}
        >
          <div>
            <Kicker label="The problem" />
            <h2
              style={{
                fontSize: "clamp(28px,3.4vw,40px)",
                lineHeight: 1.15,
                letterSpacing: "-0.012em",
                margin: 0,
                maxWidth: "22ch",
              }}
            >
              Your customers message at midnight. Does anyone reply?
            </h2>
          </div>
          <p style={{ fontSize: 15.5, lineHeight: "28px", margin: 0, maxWidth: "44ch", ...bodyMuted }}>
            WhatsApp is where business happens in Pakistan — but most businesses still answer it by
            hand. Every missed message is a customer who found someone faster.
          </p>
        </section>

        <section style={{ padding: "56px 0 84px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 1,
              background: "var(--color-neutral-700)",
            }}
          >
            {STEPS.map((step) => (
              <div key={step.n} style={{ background: "var(--color-bg)", padding: "32px 28px 36px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 500,
                    fontSize: 15,
                    color: "var(--color-accent)",
                    margin: "0 0 18px",
                    fontFeatureSettings: "'tnum' 1",
                  }}
                >
                  {step.n}
                </p>
                <h3 style={{ fontSize: 24, lineHeight: 1.2, margin: "0 0 12px" }}>{step.title}</h3>
                <p style={{ fontSize: 15.5, lineHeight: "28px", margin: 0, ...bodyMuted }}>{step.body}</p>
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: 13,
              lineHeight: "28px",
              color: "color-mix(in srgb, var(--color-text) 55%, transparent)",
              margin: "20px 0 0",
            }}
          >
            One partner — strategy, build, and ongoing management.{" "}
            <a href="/how-it-works">See what runs under the hood</a>
          </p>
        </section>

        <Divider />

        <section style={{ padding: "84px 0" }}>
          <Kicker label="Where it applies" />
          <h2
            style={{
              fontSize: "clamp(28px,3.4vw,40px)",
              lineHeight: 1.15,
              letterSpacing: "-0.012em",
              margin: "0 0 12px",
            }}
          >
            Built for your industry
          </h2>
          <p style={{ fontSize: 15.5, lineHeight: "28px", margin: "0 0 32px", maxWidth: "52ch", ...bodyMuted }}>
            The same core agent, tuned to the workflow of each sector.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, maxWidth: 900 }}>
            {INDUSTRIES.map((name) => (
              <span key={name} className="tag tag-neutral" style={{ fontSize: 13, padding: "7px 14px" }}>
                {name}
              </span>
            ))}
          </div>
          <p
            style={{
              fontSize: 13,
              lineHeight: "28px",
              color: "color-mix(in srgb, var(--color-text) 55%, transparent)",
              margin: "24px 0 0",
            }}
          >
            Not listed? The agent adapts — <a href="/industries">see the sector workflows</a>.
          </p>
        </section>

        <Divider />

        <section style={{ padding: "84px 0" }}>
          <Kicker label="Why Vantriq AI" />
          <h2
            style={{
              fontSize: "clamp(28px,3.4vw,40px)",
              lineHeight: 1.15,
              letterSpacing: "-0.012em",
              margin: "0 0 40px",
              maxWidth: "24ch",
            }}
          >
            A local partner, not a faceless subscription
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "36px 48px",
            }}
          >
            {WHY.map((item) => (
              <div key={item.title}>
                <h3 style={{ fontSize: 19, lineHeight: 1.25, margin: "0 0 10px" }}>{item.title}</h3>
                <p style={{ fontSize: 15.5, lineHeight: "28px", margin: 0, maxWidth: "46ch", ...bodyMuted }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CtaBand
        heading="Let's talk."
        body="Send us a message and see the agent answer. A discovery call maps your customer workflow before anything is built."
        primaryLabel="Message us on WhatsApp"
        secondaryLabel="Request a quote"
        secondaryHref="/pricing"
      />

      <Footer />
    </>
  );
}
