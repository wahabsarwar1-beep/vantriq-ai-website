import Kicker from "@/components/Kicker";
import Divider from "@/components/Divider";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import { waLink } from "@/lib/whatsapp";

const bodyMuted = { color: "color-mix(in srgb, var(--color-text) 78%, transparent)" };
const mutedLabel = { color: "color-mix(in srgb, var(--color-text) 62%, transparent)" };

const TIERS = [
  {
    tier: "Tier 01",
    name: "Starter",
    audience: "Small business",
    body: "WhatsApp only. One agent, your catalogue and FAQs, replying around the clock.",
    featured: false,
  },
  {
    tier: "Tier 02",
    name: "Growth",
    audience: "Medium corporate",
    body: "Everything in Starter, plus CRM sync so every lead lands in your pipeline.",
    featured: false,
  },
  {
    tier: "Tier 03 · Most chosen",
    name: "Scale",
    audience: "Multi-location business",
    body: "Adds your website as a channel, with location-aware routing and availability.",
    featured: true,
  },
  {
    tier: "Tier 04",
    name: "Pro",
    audience: "Established corporate",
    body: "Top-tier AI models across every channel your customers already use.",
    featured: false,
  },
  {
    tier: "Tier 05",
    name: "Enterprise",
    audience: "Large enterprise",
    body: "Adds a private on-premise deployment option for strict data residency.",
    featured: false,
  },
  {
    tier: "Tier 06",
    name: "Enterprise+",
    audience: "Highest volume, custom",
    body: "Custom SLA, custom integrations, and capacity for the highest message volumes.",
    featured: false,
  },
];

const FAQS = [
  {
    q: "Why don't you list prices?",
    a: "Because the setup fee depends on what the agent has to connect to. We quote a fixed setup fee and a fixed monthly plan in writing after a fifteen-minute discovery call — nothing is estimated after that.",
  },
  {
    q: "How long until it is live?",
    a: "Most agents are built, tested alongside your team, and live within a few weeks of scope sign-off. Complex integrations and on-premise deployments take longer, and we say so up front.",
  },
  {
    q: "Will it answer in Urdu?",
    a: "Yes — customers write the way they normally write, including Roman Urdu, and the agent replies in kind. Tone and vocabulary are tuned to your brand during configuration.",
  },
  {
    q: "What happens when it doesn't know?",
    a: "It escalates to your team with the full conversation attached, rather than guessing or looping. Recurring escalations are folded into the next monthly tuning round.",
  },
  {
    q: "Where does our data live?",
    a: "From simple catalogues to enterprise databases, we match handling to your sensitivity — including fully private, self-hosted deployment for strict data-residency requirements.",
  },
  {
    q: "Can we move up a tier later?",
    a: "Yes. Tiers are a path, not a lock-in — most clients start on the channel that matters most and add CRM, website, or extra channels as volume grows.",
  },
];

export default function Pricing() {
  return (
    <>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)" }}>
        <section style={{ padding: "84px 0 56px" }}>
          <Kicker label="Packages" />
          <h1
            style={{
              fontSize: "clamp(36px,5vw,64px)",
              lineHeight: 1.11,
              letterSpacing: "-0.015em",
              margin: "0 0 0 -0.06em",
              maxWidth: "20ch",
              color: "var(--color-hero)",
            }}
          >
            Six tiers. One clear path as you grow.
          </h1>
          <p style={{ fontSize: 17, lineHeight: "28px", maxWidth: "56ch", margin: "32px 0 0" }}>
            A one-time setup fee plus a simple monthly plan, quoted in PKR after we scope your
            workflow. No USD surprises, and no charge for normal business volume.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
            <a
              className="btn btn-primary"
              href={waLink()}
              target="_blank"
              rel="noopener"
              style={{ minHeight: 38, paddingInline: 16 }}
            >
              Request a quote on WhatsApp
            </a>
            <a className="btn btn-ghost" href="/contact" style={{ minHeight: 38, paddingInline: 16 }}>
              Send a brief
            </a>
          </div>
        </section>

        <section style={{ padding: "0 0 84px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 16 }}>
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className="card elev-sm"
                style={{
                  padding: "28px 26px 30px",
                  gap: 0,
                  ...(tier.featured
                    ? {
                        boxShadow: "var(--shadow-md)",
                        outline: "1px solid var(--color-accent)",
                        outlineOffset: -1,
                      }
                    : {}),
                }}
              >
                <span className="card-kicker">{tier.tier}</span>
                <h2 style={{ fontSize: 22, lineHeight: 1.2, margin: "10px 0 6px" }}>{tier.name}</h2>
                <p style={{ fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", margin: "0 0 18px", ...mutedLabel }}>
                  {tier.audience}
                </p>
                <p style={{ fontSize: 15, lineHeight: "26px", margin: "0 0 20px", ...bodyMuted }}>{tier.body}</p>
                <a
                  className={tier.featured ? "btn btn-primary" : "btn btn-ghost"}
                  href={waLink()}
                  target="_blank"
                  rel="noopener"
                  style={{ alignSelf: "start" }}
                >
                  Request a quote
                </a>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, lineHeight: "28px", margin: "28px 0 0", maxWidth: "64ch", ...bodyMuted }}>
            Every plan includes a generous monthly conversation allowance, monthly tuning, and support
            — no surprise charges for normal business volume.
          </p>
          <p
            style={{
              fontSize: 13,
              lineHeight: "28px",
              color: "color-mix(in srgb, var(--color-text) 55%, transparent)",
              margin: "8px 0 0",
            }}
          >
            The WhatsApp Business API subscription is billed to you directly by the provider.
          </p>
        </section>

        <Divider />

        <section style={{ padding: "84px 0" }}>
          <Kicker label="Questions" />
          <h2
            style={{
              fontSize: "clamp(28px,3.4vw,40px)",
              lineHeight: 1.15,
              letterSpacing: "-0.012em",
              margin: "0 0 40px",
            }}
          >
            Before you ask us
          </h2>
          <div style={{ display: "grid", gap: 1, background: "var(--color-neutral-700)", maxWidth: 900 }}>
            {FAQS.map((faq) => (
              <details key={faq.q} style={{ background: "var(--color-bg)", padding: "22px 0" }}>
                <summary
                  style={{
                    display: "flex",
                    gap: 20,
                    alignItems: "baseline",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 500,
                    fontSize: 18,
                    lineHeight: 1.4,
                  }}
                >
                  <span data-chev="" style={{ color: "var(--color-accent)", fontSize: 15 }}>
                    +
                  </span>
                  {faq.q}
                </summary>
                <p
                  style={{
                    fontSize: 15.5,
                    lineHeight: "28px",
                    margin: "12px 0 0 35px",
                    maxWidth: "56ch",
                    ...bodyMuted,
                  }}
                >
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <CtaBand
        heading="Get your numbers in writing."
        body="A fixed setup fee and monthly plan for your workflow, after one call."
        primaryLabel="Message us on WhatsApp"
        secondaryLabel="Send a brief"
        secondaryHref="/contact"
      />

      <Footer />
    </>
  );
}
