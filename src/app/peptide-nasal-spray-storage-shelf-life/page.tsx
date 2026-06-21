import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Snowflake, Sun, Timer, FileSearch } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Peptide Nasal Spray Storage & Shelf Life | Refrigeration, Room Temp & After Opening | Titan Peptide Lab";
const DESCRIPTION =
  "How research nasal peptides like Semax, Selank, DSIP, oxytocin, and PT-141 are stored and handled: lyophilized vs reconstituted shelf life, refrigeration vs room temperature, freeze–thaw and light exposure, and why the lot COA sets the handling window. Research use only — not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/peptide-nasal-spray-storage-shelf-life/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/peptide-nasal-spray-storage-shelf-life/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// [state, typical condition, handling note]
const STORAGE_TABLE: [string, string, string][] = [
  [
    "Lyophilized (sealed, unopened)",
    "Frozen for long-term, refrigerated short-term",
    "Freeze-dried research peptides are the most stable form. Kept cold and dry in the sealed vial, they are characterized for the longest window. Bring to room temperature before opening to avoid condensation drawing moisture into the powder.",
  ],
  [
    "Reconstituted (after diluent is added)",
    "Refrigerated (2–8 °C)",
    "Once a research peptide is dissolved it is far less stable than the powder. Reconstituted material is typically held refrigerated and used within a short research window, kept out of light, and never refrozen if avoidable.",
  ],
  [
    "In use (working aliquot)",
    "Refrigerated between handling",
    "Return the vial to cold storage promptly between draws. Repeated warming and cooling, and repeated needle entries, are the handling variables researchers track most closely for a reconstituted reagent.",
  ],
];

const CARDS = [
  {
    icon: Snowflake,
    title: "Lyophilized vs reconstituted is the real question",
    body: "“Does it need refrigeration?” depends entirely on state. A sealed, freeze-dried research peptide is stable cold and dry and tolerates brief transit at ambient temperature. The moment diluent is added, stability drops and refrigeration matters far more. Treat the powder and the solution as two different storage problems.",
    href: "/peptide-reconstitution-calculator/?ref=nasal-storage",
    cta: "Reconstitution calculator",
  },
  {
    icon: Sun,
    title: "Light and freeze–thaw are the quiet variables",
    body: "Beyond temperature, peptides in solution are sensitive to light and to repeated freeze–thaw cycles. Amber or foil-wrapped storage limits light exposure, and aliquoting before freezing avoids cycling the whole batch. These are standard reagent-handling controls, not human-use guidance.",
    href: "/research/?ref=nasal-storage",
    cta: "Research library",
  },
  {
    icon: Timer,
    title: "“Shelf life after opening” is a research window, not a date",
    body: "There is no universal opened-vial expiry for a research reagent — the usable window depends on the compound, the diluent, concentration, and how cold and dark it is kept. Researchers log the reconstitution date and conditions rather than reading a printed date, and re-verify identity if a sample sits.",
    href: "/blog/peptide-storage-guide/?ref=nasal-storage",
    cta: "Full storage guide",
  },
  {
    icon: FileSearch,
    title: "The COA defines the starting point",
    body: "Storage only preserves what you started with. A lot-matched certificate of analysis — HPLC purity and mass-spec identity tied to the code on the vial — is what tells you the reagent was sound at release. With crypto checkout there is no chargeback, so that document is the buyer protection.",
    href: "/how-to-verify-peptide-quality-coa/?ref=nasal-storage",
    cta: "How to verify a COA",
  },
];

const FAQS = [
  {
    q: "Does a peptide nasal spray need to be refrigerated?",
    a: "It depends on the state of the research peptide. A sealed, lyophilized (freeze-dried) vial is most stable kept cold and dry and tolerates brief room-temperature transit. Once it is reconstituted into a solution, the material is typically held refrigerated at 2–8 °C and protected from light. Titan supplies these strictly as research reagents, so this describes laboratory reagent handling, not human-use directions.",
  },
  {
    q: "What is the shelf life of a research nasal peptide after opening?",
    a: "There is no single opened-vial expiry. For a research reagent the usable window after reconstitution depends on the compound, the diluent, the concentration, and how consistently it is kept cold and out of light. Common research practice is to record the reconstitution date and storage conditions, minimize freeze–thaw cycles, and re-confirm identity if a sample is held for an extended period.",
  },
  {
    q: "Can research peptides be stored at room temperature?",
    a: "Sealed lyophilized powder tolerates short periods at room temperature, which is why research peptides ship without cold-chain packaging. Long-term storage of the powder is colder (frozen), and reconstituted solution is kept refrigerated. Prolonged warmth and humidity are the conditions researchers avoid for a dissolved reagent.",
  },
  {
    q: "How should Semax, Selank, or DSIP nasal research peptides be stored?",
    a: "The same state-based logic applies across the nasal-format compounds Titan lists — Semax, Selank, DSIP, oxytocin, and PT-141. Sealed lyophilized vials are kept cold and dry; reconstituted material is refrigerated, kept dark, and used within a short research window. Per-compound documentation is on each product page, and all of it is for in-vitro research only.",
  },
  {
    q: "Why does freeze–thaw cycling matter for stored peptides?",
    a: "Each freeze–thaw cycle is a stress event for a peptide in solution and can degrade a reconstituted reagent over repeated cycles. Researchers commonly split material into single-use aliquots before freezing so only what is needed is thawed, leaving the rest of the batch untouched.",
  },
  {
    q: "Are these storage notes human-use or dosing instructions?",
    a: "No. Titan Peptide Lab's peptides are supplied strictly for in-vitro laboratory research. The storage and handling notes here describe how research reagents are preserved and are not therapeutic, dosing, or administration guidance. The compounds are not for human or animal consumption.",
  },
];

export default function PeptideNasalSprayStorageShelfLifePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Peptide Nasal Spray Storage & Shelf Life", item: "/peptide-nasal-spray-storage-shelf-life/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Nasal-format peptides · storage & handling · research use
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.5rem,5.6vw,5rem)] leading-[0.96] tracking-[-0.05em] text-[#0f1613] text-balance">
                Storing a nasal research peptide — refrigeration, room temp, and shelf life after opening.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                The most common storage questions — does it need refrigeration, can it sit at room temperature, how long does it last after opening — all come down to one thing: whether the peptide is still a sealed freeze-dried powder or has been reconstituted into solution. This page covers both states for the nasal-format compounds Titan lists — Semax, Selank, DSIP, oxytocin, and PT-141 — strictly as research-reagent handling.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/nootropic-nasal-peptides/?ref=nasal-storage-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  Browse nasal peptides
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/how-to-verify-peptide-quality-coa/?ref=nasal-storage-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  How to verify a COA
                </Link>
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-[0.14em] text-[#8a9690]">
                For research use only · Not for human consumption
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
              Storage at a glance
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Three states, three storage answers.
            </h2>
            <div className="mt-9 overflow-hidden rounded-[1.5rem] border border-[#dde6e1]">
              <table className="w-full border-collapse text-left text-[13.5px]">
                <thead>
                  <tr className="bg-[#f4f7f5] text-[11px] uppercase tracking-[0.12em] text-[#1e6f58]">
                    <th className="px-5 py-4 font-semibold">State</th>
                    <th className="px-5 py-4 font-semibold">Typical condition</th>
                    <th className="px-5 py-4 font-semibold">Handling note</th>
                  </tr>
                </thead>
                <tbody>
                  {STORAGE_TABLE.map(([state, condition, note]) => (
                    <tr key={state} className="border-t border-[#e7ede9] align-top">
                      <td className="px-5 py-5 font-serif text-[1.1rem] tracking-[-0.01em]">{state}</td>
                      <td className="px-5 py-5 text-[#5c6762]">{condition}</td>
                      <td className="px-5 py-5 text-[#5c6762]">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[12px] leading-6 text-[#8a9690]">
              Conditions describe general laboratory storage of synthesized research reagents, not a use, effect, or administration in humans. Always follow the documentation supplied with a specific lot. All compounds are research-use-only.
            </p>
          </div>
        </section>

        <section className="border-y border-[rgb(15_22_19/6%)] bg-[#fafbfa] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {CARDS.map(({ icon: Icon, title, body, href, cta }) => (
                <Link key={title} href={href} className="group flex h-full flex-col rounded-[1.5rem] border border-[#dde6e1] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#1e6f58] hover:shadow-[0_18px_60px_-42px_rgb(15_22_19/45%)]">
                  <Icon className="h-5 w-5 text-[#1e6f58]" />
                  <h2 className="mt-5 font-serif text-[1.4rem] leading-tight tracking-[-0.02em] group-hover:text-[#1e6f58]">
                    {title}
                  </h2>
                  <p className="mt-3 flex-1 text-[13.5px] leading-7 text-[#5c6762]">{body}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1e6f58]">
                    {cta} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">Per-compound pages & related reading</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] tracking-[-0.035em]">Open the compound you are storing.</h2>
            <ul className="mt-7 space-y-3 text-[14px] leading-7 text-[#1e6f58]">
              <li><Link className="hover:underline" href="/nootropic-nasal-peptides/?ref=nasal-storage">Nootropic &amp; nasal research peptides (category hub) →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-semax-nasal-spray/?ref=nasal-storage">Where to buy Semax nasal spray →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-selank/?ref=nasal-storage">Where to buy Selank →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-dsip-nasal-spray/?ref=nasal-storage">Where to buy DSIP nasal spray →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-oxytocin-nasal-spray/?ref=nasal-storage">Where to buy oxytocin nasal spray →</Link></li>
              <li><Link className="hover:underline" href="/peptide-reconstitution-calculator/?ref=nasal-storage">Peptide reconstitution calculator →</Link></li>
              <li><Link className="hover:underline" href="/blog/peptide-storage-guide/?ref=nasal-storage">Full peptide storage guide →</Link></li>
              <li><Link className="hover:underline" href="/coa-verified-peptide-supplier/?ref=nasal-storage">COA-verified peptide supplier →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Sourcing a nasal research peptide?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the compound you need for current pricing and lot documentation, or read the crypto checkout walkthrough first.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/where-to-buy-semax-nasal-spray/?ref=nasal-storage-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                Semax spray
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/how-to-pay-with-crypto/?ref=nasal-storage-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
                How to pay with crypto
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
