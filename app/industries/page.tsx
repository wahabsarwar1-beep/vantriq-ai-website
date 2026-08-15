import Kicker from "@/components/Kicker";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import IndustryTile from "@/components/IndustryTile";

const SECTORS = [
  {
    icon: "storefront",
    name: "E-commerce & Retail",
    kicker: "Catalogue, cart recovery",
    body: "Shares products, answers sizing and stock questions, and follows up on abandoned carts before the customer buys elsewhere.",
  },
  {
    icon: "buildings",
    name: "Real Estate",
    kicker: "Matching, site visits",
    body: "Qualifies budget and area, matches listings to the enquiry, and books site visits straight into an agent's calendar.",
  },
  {
    icon: "stethoscope",
    name: "Healthcare",
    kicker: "Booking, follow-up care",
    body: "Handles appointment booking and rescheduling, sends follow-up reminders, and escalates anything clinical to your staff.",
  },
  {
    icon: "graduation-cap",
    name: "Education",
    kicker: "Admissions, fee reminders",
    body: "Answers admission queries at scale during intake season and reminds parents about fees and deadlines.",
  },
  {
    icon: "fork-knife",
    name: "Hospitality",
    kicker: "Ordering, reservations",
    body: "Takes orders and table reservations through the dinner rush, when no one is free to watch the phone.",
  },
  {
    icon: "scales",
    name: "Legal & Consulting",
    kicker: "Intake, document collection",
    body: "Runs first-contact intake, collects the documents a matter needs, and books the consultation.",
  },
  {
    icon: "airplane-tilt",
    name: "Travel & Tourism",
    kicker: "Itineraries, booking status",
    body: "Sends itineraries, answers package questions, and gives booking status without a call to the office.",
  },
  {
    icon: "users-three",
    name: "HR & Operations",
    kicker: "Onboarding, leave requests",
    body: "Walks new joiners through onboarding and handles routine leave and policy questions internally.",
  },
  {
    icon: "megaphone",
    name: "Marketing Agencies",
    kicker: "Comment-to-DM, scoring",
    body: "Turns comments into DMs, qualifies the lead, and scores it before it reaches a human on the account.",
  },
  {
    icon: "truck",
    name: "Logistics",
    kicker: "Shipment tracking",
    body: 'Answers "where is my order" instantly, at any volume, and flags exceptions to the team that can fix them.',
  },
];

export default function Industries() {
  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css" />
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
          <ol
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
              gridAutoRows: "minmax(196px,auto)",
              gap: 14,
            }}
          >
            {SECTORS.map((sector, i) => (
              <IndustryTile
                key={sector.name}
                index={i + 1}
                icon={sector.icon}
                name={sector.name}
                kicker={sector.kicker}
                body={sector.body}
              />
            ))}
          </ol>
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
