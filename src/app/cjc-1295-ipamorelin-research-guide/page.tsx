import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FlaskConical, FileSearch, Beaker, Layers } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE =
  "CJC-1295 + Ipamorelin Research Guide | Pre-Blended GH-Secretagogue Vial | Titan Peptide Lab";
const DESCRIPTION =
  "CJC-1295 + Ipamorelin research guide: how the GHRH analog and GHS-receptor agonist pair in the literature, why they are pre-blended, reconstitution, and documentation. Titan stocks a 5mg/5mg single-vial blend with lot-matched COAs.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/cjc-1295-ipamorelin-research-guide/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/cjc-1295-ipamorelin-research-guide/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const CARDS = [
  {
    icon: Beaker,
    title: "CJC-1295 — the GHRH analog",
    body: "CJC-1295 (no DAC) is a synthetic growth-hormone-releasing-hormone analog that acts at the GHRH receptor. It appears in research literature on the GH/IGF-1 axis as a pathway-stimulus tool, studied for how GHRH-receptor activity shapes secretagogue research models.",
  },
  {
    icon: FlaskConical,
    title: "Ipamorelin — the GHS-receptor agonist",
    body: "Ipamorelin is a selective growth-hormone-secretagogue (GHS / ghrelin) receptor agonist. In the literature it is studied for receptor selectivity, and it is frequently cited alongside CJC-1295 because the two act on complementary receptors in the same research pathway.",
  },
  {
    icon: Layers,
    title: "Why they are pre-blended",
    body: "The CJC-1295 + Ipamorelin pairing is one of the most-cited secretagogue combinations in the literature, so Titan supplies it as a single pre-blended 5mg/5mg lyophilized vial — one reconstitution, one lot release sheet, both compounds at an HPLC ≥99% main-peak purity target.",
  },
];

const SPECS: Array<[string, string]> = [
  ["Format", "Pre-blended single lyophilized vial"],
  ["Content", "CJC-1295 (no DAC) 5mg + Ipamorelin 5mg"],
  ["Receptors", "GHRH receptor (CJC-1295) + GHS/ghrelin receptor (Ipamorelin)"],
  ["Reconstitution", "Bacteriostatic water to a researcher-set concentration"],
  ["Purity target", "HPLC ≥99% main-peak, identity confirmation by MS"],
  ["COA path", "Lot-matched release sheet tied to the vial code"],
];

const FAQS = [
  {
    q: "What is CJC-1295 + Ipamorelin used for in research?",
    a: "In the literature, CJC-1295 is a GHRH-receptor analog and Ipamorelin is a selective GHS/ghrelin-receptor agonist, and the pair is studied together because they act on complementary receptors in growth-hormone-secretagogue research models. Titan supplies the blend strictly as a research compound — not for human use, and no physiological outcome is claimed.",
  },
  {
    q: "Why are CJC-1295 and Ipamorelin sold pre-blended?",
    a: "Because the two are one of the most frequently-cited secretagogue pairs in the research literature, supplying them in a single pre-blended 5mg/5mg vial means one reconstitution, one lot-matched release sheet, and one HPLC purity check covering both compounds — less handling friction than two separate vials.",
  },
  {
    q: "How do you reconstitute the CJC-1295 + Ipamorelin blend?",
    a: "The blend ships lyophilized and is reconstituted with bacteriostatic water to a working concentration set for the research protocol. The peptide reconstitution calculator helps determine the correct bacteriostatic-water volume for a target concentration across both compounds in the vial.",
  },
  {
    q: "Where can I buy CJC-1295 + Ipamorelin for research?",
    a: "Titan Peptide Lab stocks a pre-blended CJC-1295 + Ipamorelin vial (5mg/5mg) with a lot-matched release sheet, an HPLC ≥99% main-peak purity target, crypto checkout, and discreet shipping. The live product page is always the source of truth for current pricing and documentation.",
  },
  {
    q: "Is CJC-1295 + Ipamorelin for human use?",
    a: "No. Titan Peptide Lab's CJC-1295 + Ipamorelin blend is sold strictly for in-vitro laboratory research. It is not for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
];

export default function CjcIpamorelinGuidePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          {
            name: "CJC-1295 + Ipamorelin Research Guide",
            item: "/cjc-1295-ipamorelin-research-guide/",
          },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                CJC-1295 + Ipamorelin · research guide · research use
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.5rem,5.6vw,5rem)] leading-[0.95] tracking-[-0.05em] text-[#0f1613] text-balance">
                CJC-1295 + Ipamorelin, and why the pair ships in one vial.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                CJC-1295 and Ipamorelin get searched together because the literature studies them together: a GHRH-receptor analog paired with a selective GHS-receptor agonist, acting on complementary points of the same secretagogue pathway. This guide covers how each works in research framing, why Titan pre-blends them into one 5mg/5mg lyophilized vial, and how to read the documentation before ordering.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/cjc-1295-ipamorelin/?ref=cjc-ipa-guide-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View CJC-1295 + Ipamorelin
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/peptide-reconstitution-calculator/?ref=cjc-ipa-guide-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  Reconstitution calculator
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-3">
              {CARDS.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="flex h-full flex-col rounded-[1.5rem] border border-[#dde6e1] bg-white p-6"
                >
                  <Icon className="h-5 w-5 text-[#1e6f58]" />
                  <h2 className="mt-5 font-serif text-[1.45rem] leading-tight tracking-[-0.02em]">
                    {title}
                  </h2>
                  <p className="mt-3 flex-1 text-[13.5px] leading-7 text-[#5c6762]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[rgb(15_22_19/6%)] bg-[#fafbfa] py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                What Titan exposes before checkout
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
                One vial, two compounds, one paper trail.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                The blend is built around the questions secretagogue researchers ask: which receptors, what is in the vial, how is purity measured, and how is it reconstituted. Everything is documentation-first — and the research-use boundary is stated on every surface.
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {SPECS.map(([term, desc]) => (
                <div key={term} className="rounded-[1.25rem] border border-[#dde6e1] bg-white p-5">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1e6f58]">{term}</dt>
                  <dd className="mt-3 text-[13.5px] leading-7 text-[#5c6762]">{desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">Related reading</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] tracking-[-0.035em]">Before you order the blend.</h2>
            <ul className="mt-7 space-y-3 text-[14px] leading-7 text-[#1e6f58]">
              <li><Link className="hover:underline" href="/products/cjc-1295-ipamorelin/?ref=cjc-ipa-guide">CJC-1295 + Ipamorelin — product page →</Link></li>
              <li><Link className="hover:underline" href="/peptide-reconstitution-calculator/?ref=cjc-ipa-guide">Peptide reconstitution calculator →</Link></li>
              <li><Link className="hover:underline" href="/blog/best-peptide-stacks-research-guide/?ref=cjc-ipa-guide">Best peptide stacks research guide →</Link></li>
              <li><Link className="hover:underline" href="/coa-verified-peptide-supplier/?ref=cjc-ipa-guide">How to verify a lot-matched COA →</Link></li>
              <li><Link className="hover:underline" href="/best-research-peptides/?ref=cjc-ipa-guide">Best research peptides — full catalog →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <FileSearch className="mx-auto h-6 w-6 text-[#1e6f58]" />
            <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Order the CJC-1295 + Ipamorelin blend.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Titan stocks the pre-blended 5mg/5mg vial with a lot-matched release sheet, an HPLC ≥99% main-peak purity target, and crypto checkout. Open the product page for current pricing and documentation.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/cjc-1295-ipamorelin/?ref=cjc-ipa-guide-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                View CJC-1295 + Ipamorelin
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/start/?ref=cjc-ipa-guide-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
                Start here
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
