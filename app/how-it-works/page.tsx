import Kicker from "@/components/Kicker";
import Divider from "@/components/Divider";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

const bodyMuted = { color: "color-mix(in srgb, var(--color-text) 78%, transparent)" };
const mutedLabel = { color: "color-mix(in srgb, var(--color-text) 62%, transparent)" };

const STEPS = [
  {
    n: "01",
    title: "Engage",
    body: "Replies instantly on WhatsApp, Instagram, or your website — any hour, any volume, no queue. Natural language, not a menu tree: customers ask the way they actually speak, in English or Urdu, and get an answer in seconds.",
  },
  {
    n: "02",
    title: "Execute",
    body: "Books the appointment, shares the catalogue, checks availability, logs the lead in your CRM. Actions actually happen — the agent is connected to your calendar, inventory, and records, not just talking about them.",
  },
  {
    n: "03",
    title: "Escalate",
    body: "Hands to your team the moment judgement is needed — with the full conversation attached. Nothing is lost in the handover, and your staff spend their hours on the conversations that need a person.",
  },
];

const COMPARISON = [
  ["24/7 cost", "Two to three shifts of salary", "A low monthly fee", "Included in your plan"],
  ["Understanding", "Full — but only on shift", "Menu-driven only", "Natural language, any hour"],
  ["Gets things done", "Manually, yes", "Static answers only", "Books, checks stock, updates CRM"],
  ["The unexpected", "Handles it — until hour eight", "Breaks or loops", "Handles new questions gracefully"],
  ["Consistency", "Varies with mood and fatigue", "Consistent but rigid", "Consistent and flexible"],
  ["Long run", "Learns, then eventually leaves", "Frozen until reprogrammed", "Tuned monthly, stays"],
];

const HOOD = [
  {
    n: "01",
    title: "Smart AI models",
    body: "The reasoning behind every reply, matched to your business's complexity and data sensitivity.",
  },
  {
    n: "02",
    title: "Reliable automation",
    body: "Connects to your calendar, CRM, and inventory so actions actually happen — not just chat.",
  },
  {
    n: "03",
    title: "Secure data handling",
    body: "From simple catalogues to enterprise databases, including fully private on-premise options.",
  },
  {
    n: "04",
    title: "Where customers already are",
    body: "WhatsApp, Instagram, Facebook — no app downloads, no new habits to teach.",
  },
];

const ONBOARDING = [
  "Discovery call — we map your customer workflow and where AI adds the most value",
  "Proposal & scope — a fixed setup fee and monthly plan, in writing, no surprises",
  "Build & configure — your agent trained on your catalogue, FAQs, and booking rules",
  "Test & launch — we run it alongside your team before it goes fully live",
  "Ongoing management — monthly tuning, reporting, and support included in your plan",
];

export default function HowItWorks() {
  return (
    <>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)" }}>
        <section style={{ padding: "84px 0 56px" }}>
          <Kicker label="How it works" />
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
            Three things your agent does, on repeat
          </h1>
          <p style={{ fontSize: 17, lineHeight: "28px", maxWidth: "54ch", margin: "32px 0 0" }}>
            One AI agent, configured around how your business actually runs.
          </p>
        </section>

        <section style={{ padding: "0 0 84px", display: "grid", gap: 0 }}>
          {STEPS.map((step, i) => (
            <div key={step.n}>
              <div
                className="stack-mobile"
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(64px,120px) minmax(0,340px) minmax(0,1fr)",
                  gap: "20px clamp(24px,4vw,72px)",
                  alignItems: "baseline",
                  padding: "42px 0",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 500,
                    fontSize: 15,
                    color: "var(--color-accent)",
                    margin: 0,
                    fontFeatureSettings: "'tnum' 1",
                  }}
                >
                  {step.n}
                </p>
                <h2 style={{ fontSize: 26, lineHeight: 1.2, margin: 0 }}>{step.title}</h2>
                <p style={{ fontSize: 15.5, lineHeight: "28px", margin: 0, maxWidth: "52ch", ...bodyMuted }}>
                  {step.body}
                </p>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  style={{
                    height: 1,
                    background:
                      "linear-gradient(to right, transparent, var(--color-neutral-700) 48px calc(100% - 48px), transparent)",
                  }}
                />
              )}
            </div>
          ))}
        </section>

        <Divider />

        <section style={{ padding: "84px 0" }}>
          <Kicker label="The difference" />
          <h2
            style={{
              fontSize: "clamp(28px,3.4vw,40px)",
              lineHeight: 1.15,
              letterSpacing: "-0.012em",
              margin: "0 0 12px",
            }}
          >
            Not a chatbot. Not another hire.
          </h2>
          <p style={{ fontSize: 15.5, lineHeight: "28px", margin: "0 0 36px", maxWidth: "54ch", ...bodyMuted }}>
            Compared honestly against the two things you&rsquo;re probably weighing instead.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table className="table" style={{ minWidth: 760 }}>
              <thead>
                <tr>
                  <th style={{ width: "22%" }}></th>
                  <th>Hiring staff</th>
                  <th>A generic chatbot</th>
                  <th style={{ color: "var(--color-accent)" }}>Vantriq AI</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row[0]}>
                    <td style={mutedLabel}>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p
            style={{
              fontSize: 13,
              lineHeight: "28px",
              color: "color-mix(in srgb, var(--color-text) 55%, transparent)",
              margin: "20px 0 0",
            }}
          >
            Cost comparison based on typical Pakistan market shift-coverage rates.{" "}
            <a href="/pricing">Request a quote</a> for your figures.
          </p>
        </section>

        <Divider />

        <section style={{ padding: "84px 0" }}>
          <Kicker label="Under the hood" />
          <h2
            style={{
              fontSize: "clamp(28px,3.4vw,40px)",
              lineHeight: 1.15,
              letterSpacing: "-0.012em",
              margin: "0 0 12px",
              maxWidth: "26ch",
            }}
          >
            Enterprise-grade, without the enterprise headache
          </h2>
          <p style={{ fontSize: 15.5, lineHeight: "28px", margin: "0 0 40px", maxWidth: "54ch", ...bodyMuted }}>
            You never touch the infrastructure — we run, monitor, and tune all of it.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
            {HOOD.map((item) => (
              <div key={item.n} className="card elev-sm" style={{ padding: "26px 24px 30px", gap: 10 }}>
                <span className="card-kicker">{item.n}</span>
                <h3 className="card-title" style={{ fontSize: 19 }}>
                  {item.title}
                </h3>
                <p className="card-body" style={{ fontSize: 15, lineHeight: "26px", margin: 0, ...bodyMuted }}>
                  {item.body}
                </p>
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
            Private, self-hosted deployment available for strict data-residency requirements.
          </p>
        </section>

        <Divider />

        <section style={{ padding: "84px 0" }}>
          <Kicker label="Getting started" />
          <h2
            style={{
              fontSize: "clamp(28px,3.4vw,40px)",
              lineHeight: 1.15,
              letterSpacing: "-0.012em",
              margin: "0 0 44px",
            }}
          >
            How we get started
          </h2>
          <ol
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "grid",
              gap: 1,
              background: "var(--color-neutral-700)",
            }}
          >
            {ONBOARDING.map((step, i) => (
              <li
                key={step}
                style={{
                  background: "var(--color-bg)",
                  display: "grid",
                  gridTemplateColumns: "56px minmax(0,1fr)",
                  gap: 24,
                  padding: "24px 0",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 500,
                    fontSize: 15,
                    color: "var(--color-accent)",
                    fontFeatureSettings: "'tnum' 1",
                  }}
                >
                  {i + 1}
                </span>
                <span style={{ fontSize: 16, lineHeight: "28px" }}>{step}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <CtaBand
        heading="Start with a discovery call."
        body="Fifteen minutes on how your customers message you today, and where an agent would earn its keep."
        primaryLabel="Message us on WhatsApp"
        secondaryLabel="Send a brief instead"
        secondaryHref="/contact"
      />

      <Footer />
    </>
  );
}
