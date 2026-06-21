import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FlaskConical, FileSearch, Microscope, Beaker } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { CompareMesh } from "@/components/site/compare-mesh";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE =
  "Retatrutide vs Tirzepatide vs Semaglutide | Incretin Research Comparison | Titan Peptide Lab";
const DESCRIPTION =
  "Retatrutide vs tirzepatide vs semaglutide compared by receptor target for research use: single, dual, and triple incretin agonism, formats, and documentation. Titan stocks research-grade retatrutide (10mg lyophilized) with lot-matched COAs.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/retatrutide-vs-tirzepatide-vs-semaglutide/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/retatrutide-vs-tirzepatide-vs-semaglutide/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const ROWS: Array<[string, string, string, string]> = [
  ["Receptor target", "GLP-1 agonist (single)", "GLP-1 + GIP agonist (dual)", "GLP-1 + GIP + glucagon (triple)"],
  ["Compound class", "Incretin mimetic", "Dual incretin agonist", "Triple incretin agonist"],
  ["Research literature", "Most-studied incretin analog", "Dual-agonist phase III literature", "Triple-agonist phase II/III literature"],
  ["Common research format", "Lyophilized vial", "Lyophilized vial", "Lyophilized vial"],
  ["Reconstitution", "Bacteriostatic water", "Bacteriostatic water", "Bacteriostatic water"],
  ["Titan catalog", "Not stocked", "Not stocked", "Retatrutide 10mg lyophilized"],
];

const CARDS = [
  {
    icon: Microscope,
    title: "Semaglutide — single GLP-1 agonism",
    body: "Semaglutide is a single-target GLP-1 receptor agonist and the most heavily published of the three in incretin-pathway research. As a research compound it is the reference point the dual and triple agonists are measured against in the literature.",
  },
  {
    icon: Beaker,
    title: "Tirzepatide — dual GLP-1 / GIP",
    body: "Tirzepatide adds GIP-receptor activity to GLP-1 agonism, making it a dual incretin agonist. Comparative research literature studies how the second receptor target changes the pharmacology relative to single-agonist GLP-1 analogs.",
  },
  {
    icon: FlaskConical,
    title: "Retatrutide — triple GLP-1 / GIP / glucagon",
    body: "Retatrutide is a triple-incretin agonist active at GLP-1, GIP, and glucagon receptors, appearing in published phase-II/III clinical literature on incretin-pathway pharmacology. It is the only one of the three Titan stocks as a research compound (10mg lyophilized).",
  },
];

const FAQS = [
  {
    q: "What is the difference between retatrutide, tirzepatide, and semaglutide?",
    a: "The difference is the number of incretin receptors each compound targets. Semaglutide is a single GLP-1 receptor agonist; tirzepatide is a dual agonist (GLP-1 + GIP); and retatrutide is a triple agonist (GLP-1 + GIP + glucagon). All three are studied in incretin-pathway research literature and are supplied as lyophilized vials reconstituted with bacteriostatic water. Titan Peptide Lab stocks research-grade retatrutide for laboratory research use only.",
  },
  {
    q: "Which is the strongest research agonist of the three?",
    a: "In receptor terms, retatrutide has the broadest activity because it is a triple agonist (GLP-1, GIP, and glucagon), whereas tirzepatide acts on two receptors and semaglutide on one. 'Strongest' depends entirely on the research endpoint being studied — this is a receptor-target comparison for research framing, not a human-use or efficacy claim.",
  },
  {
    q: "Does Titan sell tirzepatide or semaglutide?",
    a: "Titan Peptide Lab currently stocks research-grade retatrutide (10mg lyophilized) with a lot-matched release sheet and an HPLC ≥99% main-peak purity target. The live products page is always the source of truth for what is in stock and current pricing.",
  },
  {
    q: "How is retatrutide supplied and reconstituted for research?",
    a: "Titan's retatrutide ships as a 10mg lyophilized vial. Researchers reconstitute it with bacteriostatic water to a working concentration set for their protocol. The peptide reconstitution calculator helps determine the correct bacteriostatic-water volume for a target concentration.",
  },
  {
    q: "Are these compounds for human use?",
    a: "No. Retatrutide, tirzepatide, and semaglutide supplied as research compounds are strictly for in-vitro laboratory research. They are not for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
];

export default function RetaVsTirzVsSemaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          {
            name: "Retatrutide vs Tirzepatide vs Semaglutide",
            item: "/retatrutide-vs-tirzepatide-vs-semaglutide/",
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
                Incretin-pathway research comparison · research use
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.5rem,5.6vw,5rem)] leading-[0.95] tracking-[-0.05em] text-[#0f1613] text-balance">
                Retatrutide vs tirzepatide vs semaglutide, by receptor target.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                The three names get searched together because they sit on one continuum: single, dual, and triple incretin agonism. Semaglutide hits GLP-1 alone, tirzepatide adds GIP, and retatrutide adds glucagon on top. This is a research-framing comparison of how the targets differ — formats, documentation, and where each sits in the literature — not a human-use guide. Titan stocks research-grade retatrutide.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/retatrutide/?ref=reta-tirz-sema-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View retatrutide
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/peptide-reconstitution-calculator/?ref=reta-tirz-sema-hero"
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
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
              Side by side
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              The comparison researchers actually search for.
            </h2>
            <div className="mt-9 overflow-x-auto rounded-[1.25rem] border border-[#dde6e1] bg-white">
              <table className="w-full min-w-[640px] border-collapse text-left text-[13.5px]">
                <thead>
                  <tr className="border-b border-[#dde6e1] bg-[#fbfcfb]">
                    <th className="px-5 py-4 font-semibold text-[#0f1613]">Attribute</th>
                    <th className="px-5 py-4 font-semibold text-[#0f1613]">Semaglutide</th>
                    <th className="px-5 py-4 font-semibold text-[#0f1613]">Tirzepatide</th>
                    <th className="px-5 py-4 font-semibold text-[#1e6f58]">Retatrutide</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map(([attr, sema, tirz, reta]) => (
                    <tr key={attr} className="border-b border-[#eef2f0] last:border-0">
                      <td className="px-5 py-4 font-medium text-[#0f1613]">{attr}</td>
                      <td className="px-5 py-4 text-[#5c6762]">{sema}</td>
                      <td className="px-5 py-4 text-[#5c6762]">{tirz}</td>
                      <td className="px-5 py-4 text-[#1e6f58]">{reta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 max-w-2xl text-[12.5px] leading-6 text-[#8a938e]">
              Receptor-target comparison for research framing only. No human-use, dosing, safety, or efficacy claim is made or implied.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
              Related reading
            </p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] tracking-[-0.035em]">
              Before you order retatrutide.
            </h2>
            <ul className="mt-7 space-y-3 text-[14px] leading-7 text-[#1e6f58]">
              <li>
                <Link className="hover:underline" href="/retatrutide-vs-tirzepatide/?ref=reta-tirz-sema">
                  Retatrutide vs tirzepatide (dual vs triple agonist) →
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/products/retatrutide/?ref=reta-tirz-sema">
                  Retatrutide 10mg lyophilized — product page →
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/peptide-reconstitution-calculator/?ref=reta-tirz-sema">
                  Peptide reconstitution calculator →
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/coa-verified-peptide-supplier/?ref=reta-tirz-sema">
                  How to verify a lot-matched COA →
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/best-research-peptides/?ref=reta-tirz-sema">
                  Best research peptides — full catalog →
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/blog/how-to-read-peptide-coa/?ref=reta-tirz-sema">
                  How to read a peptide COA →
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <FileSearch className="mx-auto h-6 w-6 text-[#1e6f58]" />
            <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Order research-grade retatrutide.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Titan stocks retatrutide (10mg lyophilized) with a lot-matched release sheet, an HPLC ≥99% main-peak purity target, and crypto checkout. Open the product page for current pricing and documentation.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/products/retatrutide/?ref=reta-tirz-sema-bottom"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
              >
                View retatrutide
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/start/?ref=reta-tirz-sema-bottom"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
              >
                Start here
              </Link>
            </div>
          </div>
        </section>
        <CompareMesh current="retatrutide-vs-tirzepatide-vs-semaglutide" />
      </main>
      <Footer />
    </>
  );
}
