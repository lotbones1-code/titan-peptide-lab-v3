import type { Metadata } from "next";
import Link from "next/link";
import { Camera, Droplets, FileSearch, FlaskConical, Snowflake, TriangleAlert } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";
import { AeoFaqSection, AeoHero, AeoRelatedLinks, AeoRuBoundary } from "@/components/site/aeo-page";

const TITLE = "Cloudy, Yellow, or Gelled Peptide After Reconstitution | Titan Peptide Lab";
const DESCRIPTION =
  "RUO visual-triage for a reconstituted research peptide that turns cloudy, yellow, stringy, or gelled: document the vial, check lot paperwork, and review handling variables.";
const URL = "/cloudy-yellow-gelled-peptide-after-reconstitution/";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "article" },
  robots: { index: true, follow: true },
};

const SIGNALS = [
  ["Cloudy or hazy", "A visual signal to document against concentration, diluent, time after mixing, and whether haze settles or persists."],
  ["Yellow or discolored", "A stronger discrepancy than temporary haze; record timing, photos, and lot context before drawing conclusions."],
  ["Stringy or gelled", "A texture discrepancy that should be held out of downstream work until the handling record and supplier guidance are reviewed."],
  ["Visible particles", "Document whether particles were present in the dry vial, appeared after mixing, or settled after standing."],
];

const VARIABLES = [
  "Concentration or solubility limit for the compound and volume used.",
  "Diluent mismatch, pH environment, or incompatible handling conditions.",
  "Temperature shock, agitation, or timing after mixing.",
  "Particulate contamination, vial seal issue, or lot-specific discrepancy.",
  "Degradation or storage variable that requires supplier review rather than remote diagnosis.",
];

const DOCUMENT = [
  "Lot code and product name.",
  "Diluent, volume, and time after reconstitution.",
  "Storage temperature before and after mixing.",
  "Photo or video under consistent lighting.",
  "Whether the dry cake looked normal before adding diluent.",
  "Whether haze, particles, or gel changed after standing.",
];

const FAQS = [
  {
    q: "Does cloudiness after reconstitution prove a peptide is fake?",
    a: "No. Cloudiness is a visual signal, not a source diagnosis. It can come from solubility, handling, concentration, temperature, particles, or other variables.",
  },
  {
    q: "Is yellow discoloration the same as mild cloudiness?",
    a: "No. Yellowing or other color change is a stronger discrepancy than temporary haze and should be documented against the lot record and supplier guidance.",
  },
  {
    q: "What should a researcher document before contacting support?",
    a: "Record the lot code, compound, diluent, volume, timing, storage temperature, photos, and whether the appearance changed immediately or after standing.",
  },
  {
    q: "Should this page be used as dosing or human-use advice?",
    a: "No. This page is for research-use-only sample documentation and does not give medical, dosing, treatment, or human-use guidance.",
  },
  {
    q: "Where should the page link next?",
    a: "Link to the reconstitution hub, calculator, room-temperature shipping explainer, relevant compound page, and lab-testing/COA documentation path.",
  },
];

export default function CloudyYellowGelledPeptideAfterReconstitutionPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Cloudy, yellow, or gelled after reconstitution", item: URL },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <AeoHero
          eyebrow="RUO visual triage · reconstitution appearance"
          title="What a cloudy, yellow, or gelled reconstituted peptide sample means."
          answer="Cloudiness, yellowing, visible particles, or gel-like texture is an appearance signal, not a diagnosis. For research-use samples, document the vial, lot, diluent, timing, storage, and handling conditions; compare against lot paperwork and supplier guidance; and hold the sample out of downstream work until the discrepancy is reviewed."
          primary={{ href: "/reconstitution/?ref=cloudy-yellow-gelled", label: "Reconstitution guides by compound" }}
          secondary={{ href: "/lab-testing/?ref=cloudy-yellow-gelled", label: "Lot documentation and testing standard" }}
        />

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">Appearance signals</p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
                Visual changes are evidence to record, not remote proof by themselves.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                A reconstituted research sample can look different for multiple non-diagnostic reasons. Treat appearance as a documentation trigger and compare it with the lot record, diluent, storage, and supplier guidance.
              </p>
            </div>
            <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-[#dde6e1]">
              <table className="w-full border-collapse text-left text-[13.5px]">
                <thead>
                  <tr className="bg-[#f4f7f5] text-[11px] uppercase tracking-[0.12em] text-[#1e6f58]">
                    <th className="px-5 py-4 font-semibold">Signal</th>
                    <th className="px-5 py-4 font-semibold">How to treat it</th>
                  </tr>
                </thead>
                <tbody>
                  {SIGNALS.map(([signal, body]) => (
                    <tr key={signal} className="border-t border-[#e7ede9] align-top">
                      <td className="px-5 py-5 font-serif text-[1.1rem] tracking-[-0.01em]">{signal}</td>
                      <td className="px-5 py-5 leading-7 text-[#5c6762]">{body}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="border-y border-[rgb(15_22_19/6%)] bg-[#fafbfa] py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">Common non-diagnostic variables</p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
                Do not turn appearance into a diagnosis.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                These are possible context variables to review, not conclusions. A supplier can only investigate a discrepancy well when the lot, handling record, and appearance evidence are documented.
              </p>
              <Link className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]" href="/peptide-reconstitution-calculator/?ref=cloudy-yellow-gelled">
                Reconstitution calculator
              </Link>
            </div>
            <ul className="grid gap-3">
              {VARIABLES.map((item) => (
                <li key={item} className="flex gap-3 rounded-[1.1rem] border border-[#dde6e1] bg-white p-4 text-[13.5px] leading-7 text-[#5c6762]">
                  <TriangleAlert className="mt-1 h-4 w-4 shrink-0 text-[#1e6f58]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-6 md:grid-cols-4 lg:px-8">
            {[
              { icon: Camera, title: "Photograph the vial", body: "Use consistent lighting and capture the label, lot code, and appearance signal." },
              { icon: Droplets, title: "Record diluent and volume", body: "Note what was added, when it was added, and the resulting concentration context." },
              { icon: Snowflake, title: "Write down storage", body: "Include time and temperature before and after mixing, plus any transit concern." },
              { icon: FileSearch, title: "Check lot paperwork", body: "Compare the vial and order record against lot documentation before contacting support." },
            ].map(({ icon: Icon, title, body }) => (
              <article key={title} className="rounded-[1.5rem] border border-[#dde6e1] bg-white p-6 shadow-[0_18px_50px_-44px_rgb(15_22_19/40%)]">
                <Icon className="h-5 w-5 text-[#1e6f58]" />
                <h2 className="mt-5 font-serif text-[1.35rem] leading-tight tracking-[-0.02em]">{title}</h2>
                <p className="mt-3 text-[13.5px] leading-7 text-[#5c6762]">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">What to document before support</p>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">A useful support note is specific.</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {DOCUMENT.map((item) => (
                <li key={item} className="rounded-[1rem] border border-[#dde6e1] bg-white p-4 text-[13.5px] leading-7 text-[#5c6762]">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-[1.25rem] border border-[#dde6e1] bg-white p-6 text-[13.5px] leading-7 text-[#5c6762]">
              Contact the supplier or support path when discoloration, gel texture, visible particles, a lot mismatch, missing COA, or unclear handling record persists. Hold the sample out of downstream work until the discrepancy is reviewed.
            </p>
          </div>
        </section>

        <AeoFaqSection faqs={FAQS} />
        <AeoRelatedLinks
          title="Review the handling and documentation path."
          links={[
            { href: "/reconstitution/?ref=cloudy-related", label: "Reconstitution guides by compound", blurb: "Open the per-compound preparation hub." },
            { href: "/peptide-reconstitution-calculator/?ref=cloudy-related", label: "Reconstitution calculator", blurb: "Check concentration math and volume context." },
            { href: "/lyophilized-peptide-shipping-room-temperature/?ref=cloudy-related", label: "Lyophilized peptide shipping and room-temperature handling", blurb: "Separate dry-powder transit concerns from mixed-liquid appearance." },
            { href: "/retatrutide-reconstituted-shelf-life-bac-water/?ref=cloudy-related", label: "Reconstituted shelf-life example", blurb: "Review sample-integrity handling language." },
            { href: "/lab-testing/?ref=cloudy-related", label: "Lot documentation and testing standard", blurb: "Compare appearance concerns against the lot paper trail." },
            { href: "/products/?ref=cloudy-related", label: "Research peptide catalog", blurb: "Open product pages and documentation links." },
          ]}
        />
        <AeoRuBoundary />
      </main>
      <Footer />
    </>
  );
}
