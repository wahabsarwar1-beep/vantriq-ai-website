import Kicker from "@/components/Kicker";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

const bodyMuted = { color: "color-mix(in srgb, var(--color-text) 78%, transparent)" };

const SECTORS = [
  {
    name: "E-commerce & Retail",
    kicker: "Catalogue, cart recovery",
    body: "Shares products, answers sizing and stock questions, and follows up on abandoned carts before the customer buys elsewhere.",
  },
  {
    name: "Real Estate",
    kicker: "Matching, site visits",
    body: "Qualifies budget and area, matches listings to the enquiry, and books site visits straight into an agent's calendar.",
  },
  {
    name: "Healthcare",
    kicker: "Booking, follow-up care",
    body: "Handles appointment booking and rescheduling, sends follow-up reminders, and escalates anything clinical to your staff.",
  },
  {
    name: "Education",
    kicker: "Admissions, fee reminders",
    body: "Answers admission queries at scale during intake season and reminds parents about fees and deadlines.",
  },
  {
    name: "Hospitality",
    kicker: "Ordering, reservations",
    body: "Takes orders and table reservations through the dinner rush, when no one is free to watch the phone.",
  },
  {
    name: "Legal & Consulting",
    kicker: "Intake, document collection",
    body: "Runs first-contact intake, collects the documents a matter needs, and books the consultation.",
  },
  {
    name: "Travel & Tourism",
    kicker: "Itineraries, booking status",
    body: "Sends itineraries, answers package questions, and gives booking status without a call to the office.",
  },
  {
    name: "HR & Operations",
    kicker: "Onboarding, leave requests",
    body: "Walks new joiners through onboarding and handles routine leave and policy questions internally.",
  },
  {
    name: "Marketing Agencies",
    kicker: "Comment-to-DM, scoring",
    body: "Turns comments into DMs, qualifies the lead, and scores it before it reaches a human on the account.",
  },
  {
    name: "Logistics",
    kicker: "Shipment tracking",
    body: 'Answers "where is my order" instantly, at any volume, and flags exceptions to the team that can fix them.',
  },
];

export default function Industries() {
  return (
    <>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)" }}>
        <section style={{ padding: "84px 0 56px" }}>
          <Kicker label="Where it applies" />
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
            Ten sectors, one platform
          </h1>
          <p style={{ fontSize: 17, lineHeight: "28px", maxWidth: "54ch", margin: "32px 0 0" }}>
            The same core agent, tuned to the workflow of each sector — your catalogue, your booking
            rules, your tone.
          </p>
        </section>

        <section style={{ padding: "0 0 84px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: 1,
              background: "var(--color-neutral-700)",
            }}
          >
            {SECTORS.map((sector) => (
              <div key={sector.name} style={{ background: "var(--color-bg)", padding: "30px 28px 34px" }}>
                <h2 style={{ fontSize: 20, lineHeight: 1.2, margin: "0 0 8px" }}>{sector.name}</h2>
                <p
                  style={{
                    fontSize: 13,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--color-accent)",
                    margin: "0 0 12px",
                  }}
                >
                  {sector.kicker}
                </p>
                <p style={{ fontSize: 15, lineHeight: "26px", margin: 0, ...bodyMuted }}>{sector.body}</p>
              </div>
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
            Not listed? The agent adapts — <a href="/contact">ask us about your workflow</a>.
          </p>
        </section>
      </div>

      <CtaBand
        heading="Tell us how your business runs."
        body="We configure the agent around your workflow, not the other way round."
        primaryLabel="Message us on WhatsApp"
        secondaryLabel="Request a quote"
        secondaryHref="/pricing"
      />

      <Footer />
    </>
  );
}
