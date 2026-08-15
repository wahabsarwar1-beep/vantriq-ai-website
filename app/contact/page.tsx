import Kicker from "@/components/Kicker";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { waLink } from "@/lib/whatsapp";

const infoLabel = {
  fontSize: 13,
  letterSpacing: "0.06em",
  textTransform: "uppercase" as const,
  color: "color-mix(in srgb, var(--color-text) 62%, transparent)",
  margin: "0 0 6px",
};

export default function Contact() {
  return (
    <>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)" }}>
        <section
          className="stack-mobile"
          style={{
            padding: "84px 0 56px",
            display: "grid",
            gridTemplateColumns: "minmax(0,6fr) minmax(0,6fr)",
            gap: "56px clamp(32px,6vw,96px)",
            alignItems: "start",
          }}
        >
          <div>
            <Kicker label="Contact" />
            <h1
              style={{
                fontSize: "clamp(36px,4.6vw,56px)",
                lineHeight: 1.11,
                letterSpacing: "-0.015em",
                margin: "0 0 0 -0.06em",
                maxWidth: "16ch",
                color: "var(--color-hero)",
              }}
            >
              Let&rsquo;s talk.
            </h1>
            <p style={{ fontSize: 17, lineHeight: "28px", maxWidth: "46ch", margin: "28px 0 0" }}>
              The fastest way to reach us is the same channel we build on. Message us and see the
              agent answer.
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
            </div>
            <div style={{ marginTop: 48, display: "grid", gap: 22, maxWidth: "44ch" }}>
              <div>
                <p style={infoLabel}>Where we are</p>
                <p style={{ fontSize: 15.5, lineHeight: "26px", margin: 0 }}>
                  Islamabad, Pakistan — local hours, local support, PKR billing.
                </p>
              </div>
              <div>
                <p style={infoLabel}>Who you&rsquo;ll speak to</p>
                <p style={{ fontSize: 15.5, lineHeight: "26px", margin: 0 }}>
                  Wahab Sarwar and the Vantriq AI team — 14+ years across enterprise and government
                  accounts.
                </p>
              </div>
              <div>
                <p style={infoLabel}>What happens next</p>
                <p style={{ fontSize: 15.5, lineHeight: "26px", margin: 0 }}>
                  A fifteen-minute discovery call, then a fixed setup fee and monthly plan in writing.{" "}
                  <a href="/how-it-works">See the five steps</a>.
                </p>
              </div>
            </div>
          </div>

          <ContactForm />
        </section>
      </div>

      <Footer />
    </>
  );
}
