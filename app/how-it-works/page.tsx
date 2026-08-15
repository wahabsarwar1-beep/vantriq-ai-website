import Kicker from "@/components/Kicker";
import Divider from "@/components/Divider";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

const bodyMuted = { color: "color-mix(in srgb, var(--color-text) 78%, transparent)" };
const mutedLabel = { color: "color-mix(in srgb, var(--color-text) 62%, transparent)" };
const vantriqCellStyle = {
  color: "var(--color-accent-100)",
  background: "color-mix(in srgb, var(--color-accent-900) 45%, transparent)",
};

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
        <section
          className="stack-mobile"
          style={{
            padding: "84px 0 64px",
            display: "grid",
            gridTemplateColumns: "minmax(0,7fr) minmax(0,5fr)",
            gap: "48px clamp(32px,6vw,88px)",
            alignItems: "center",
          }}
        >
          <div>
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
            <p style={{ fontSize: 17, lineHeight: "28px", maxWidth: "48ch", margin: "32px 0 0" }}>
              One AI agent, configured around how your business actually runs.
            </p>
          </div>

          <div
            style={{
              background: "var(--color-surface)",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-lg)",
              padding: "22px 20px",
              display: "grid",
              gap: 12,
              justifyItems: "start",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "auto -40px -70px auto",
                width: 220,
                height: 220,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, color-mix(in srgb, var(--color-accent-900) 90%, transparent), transparent 70%)",
              }}
            />
            <span
              style={{
                fontSize: 13,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "color-mix(in srgb, var(--color-text) 55%, transparent)",
                position: "relative",
              }}
            >
              Today · 11:42 pm
            </span>
            <span
              style={{
                position: "relative",
                maxWidth: "82%",
                background: "var(--color-neutral-700)",
                borderRadius: "14px 14px 14px 4px",
                padding: "11px 15px",
                fontSize: 15,
                lineHeight: "23px",
              }}
            >
              Do you have the beige one in medium?
            </span>
            <span
              style={{
                position: "relative",
                maxWidth: "86%",
                alignSelf: "end",
                justifySelf: "end",
                background: "color-mix(in srgb, var(--color-accent-800) 85%, transparent)",
                borderRadius: "14px 14px 4px 14px",
                padding: "11px 15px",
                fontSize: 15,
                lineHeight: "23px",
                color: "var(--color-accent-100)",
              }}
            >
              Yes — two left in medium. Want me to reserve one and send the checkout link?
            </span>
            <span
              style={{
                position: "relative",
                maxWidth: "82%",
                background: "var(--color-neutral-700)",
                borderRadius: "14px 14px 14px 4px",
                padding: "11px 15px",
                fontSize: 15,
                lineHeight: "23px",
              }}
            >
              Please do
            </span>
            <span
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "var(--color-accent-300)",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-accent)", flex: "none" }} />
              Reserved · link sent · 4 seconds
            </span>
          </div>
        </section>

        <section style={{ padding: "0 0 84px" }} aria-label="How the agent works, in three steps">
          <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 0 }}>
            {STEPS.map((step, i) => (
              <li key={step.n} style={{ display: "contents" }}>
                <div
                  className="stack-mobile"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(64px,120px) minmax(0,340px) minmax(0,1fr)",
                    gap: "20px clamp(24px,4vw,72px)",
                    alignItems: "start",
                    padding: "46px 0",
                  }}
                >
                  <p
                    aria-hidden="true"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 500,
                      fontSize: "clamp(40px,5vw,64px)",
                      lineHeight: 0.9,
                      color: "color-mix(in srgb, var(--color-accent) 26%, transparent)",
                      margin: 0,
                      fontFeatureSettings: "'tnum' 1",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {step.n}
                  </p>
                  <h2 style={{ fontSize: 30, lineHeight: 1.15, margin: 0, letterSpacing: "-0.01em" }}>
                    <span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clipPath: "inset(50%)" }}>
                      Step {i + 1}:{" "}
                    </span>
                    {step.title}
                  </h2>
                  <p style={{ fontSize: 15.5, lineHeight: "28px", margin: 0, maxWidth: "52ch", ...bodyMuted }}>
                    {step.body}
                  </p>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    aria-hidden="true"
                    style={{
                      height: 1,
                      background:
                        "linear-gradient(to right, transparent, var(--color-neutral-700) 48px calc(100% - 48px), transparent)",
                    }}
                  />
                )}
              </li>
            ))}
          </ol>
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
                  <th style={{ ...vantriqCellStyle, background: "color-mix(in srgb, var(--color-accent-900) 70%, transparent)" }}>
                    Vantriq AI
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row[0]}>
                    <td style={mutedLabel}>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td style={vantriqCellStyle}>{row[3]}</td>
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
          <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 0 }}>
            {ONBOARDING.map((step, i) => (
              <li
                key={step}
                style={{
                  display: "grid",
                  gridTemplateColumns: "40px minmax(0,1fr)",
                  gap: 22,
                  padding: i < ONBOARDING.length - 1 ? "0 0 30px" : 0,
                }}
              >
                <span style={{ display: "grid", justifyItems: "center", gap: 8 }}>
                  <span
                    style={{
                      width: 34,
                      height: 34,
                      flex: "none",
                      borderRadius: "50%",
                      border: "1px solid var(--color-accent)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-heading)",
                      fontWeight: 500,
                      fontSize: 15,
                      color: "var(--color-accent)",
                      background: "var(--color-bg)",
                      fontFeatureSettings: "'tnum' 1",
                    }}
                  >
                    {i + 1}
                  </span>
                  {i < ONBOARDING.length - 1 && (
                    <span
                      style={{
                        width: 1,
                        flex: 1,
                        minHeight: 26,
                        background: "linear-gradient(to bottom, var(--color-accent-800), transparent)",
                      }}
                    />
                  )}
                </span>
                <span style={{ fontSize: 16.5, lineHeight: "28px", paddingTop: 3, maxWidth: "60ch" }}>{step}</span>
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
