import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileSearch, FlaskConical, Layers, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "GHK-Cu vs BPC-157 | Research Compound Comparison | Titan Peptide Lab";
const DESCRIPTION =
  "GHK-Cu vs BPC-157: a research-use comparison of a copper-binding tripeptide and a gastric pentadecapeptide — two structurally unrelated compounds that buyers confuse. What each is, the literature context, which Titan stocks, and how to verify purity.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/ghk-cu-vs-bpc-157/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/ghk-cu-vs-bpc-157/",
    type: "article",
  },
  robots: { index: true, follow: true },
};

const ROWS = [
  ["Class", "Copper-binding tripeptide (Gly-His-Lys + Cu²⁺)", "Pentadecapeptide of gastric origin (15 residues)"],
  ["Structure", "Three amino acids chelating a copper ion", "Fifteen-residue chain, no metal cofactor"],
  ["Literature context", "Copper transport, extracellular-matrix & skin biology", "Angiogenesis and GI-mucosa biology"],
  ["Titan availability", "Not stocked — outside Titan's research catalog", "In catalog: nasal spray + 5mg lyophilized vial"],
  ["Typical format", "Lyophilized powder or topical-research solution", "Ready-to-use nasal spray or reconstituted vial"],
  ["Documentation standard", "Verify identity + copper content separately", "Lot-matched release sheet, HPLC + identity"],
];

const POINTS = [
  {
    icon: FlaskConical,
    title: "Different molecules, not variants",
    body: "GHK-Cu is a three-amino-acid peptide bound to a copper ion (Gly-His-Lys-Cu²⁺); BPC-157 is a fifteen-residue gastric pentadecapeptide with no metal cofactor. They are not the same family, not 'stronger or weaker' versions of each other, and they appear in entirely separate bodies of literature.",
    href: "/research/?ref=ghk-vs-bpc",
    cta: "Browse research index",
  },
  {
    icon: Layers,
    title: "Only one is in Titan's catalog",
    body: "Titan stocks BPC-157 as a ready-to-use nasal spray and a 5mg lyophilized vial. GHK-Cu is not part of the Titan research catalog, so this page is a like-for-like comparison rather than a sales page for both — if your design needs BPC-157, the product links below go straight to it.",
    href: "/bpc-157-nasal-spray-vs-vial/?ref=ghk-vs-bpc",
    cta: "BPC-157 spray vs vial",
  },
  {
    icon: ShieldCheck,
    title: "Copper peptides need an extra verification step",
    body: "A copper-bound peptide like GHK-Cu has two things to confirm — peptide identity and the copper content — whereas a single-chain peptide like BPC-157 is verified against an HPLC purity target with identity confirmation on a lot-matched release sheet. The paper-trail you should demand differs with the chemistry.",
    href: "/how-to-verify-peptide-quality-coa/?ref=ghk-vs-bpc",
    cta: "How to read a COA",
  },
  {
    icon: FileSearch,
    title: "Pick by your literature, ignore the marketing overlap",
    body: "GHK-Cu and BPC-157 get marketed together under vague 'repair' or 'recovery' umbrellas, but a study design references one specific compound for a specific reason. Match the compound to the paper you are working from, confirm the lot documentation, then choose the format. Treatment or recovery claims are a red flag, not a selling point.",
    href: "/peptide-supplier-checklist/?ref=ghk-vs-bpc",
    cta: "Supplier checklist",
  },
];

const FAQS = [
  {
    q: "What is the difference between GHK-Cu and BPC-157?",
    a: "They are two structurally unrelated research peptides. GHK-Cu is a copper-binding tripeptide — the three-amino-acid sequence glycyl-L-histidyl-L-lysine complexed with a copper(II) ion — studied in copper-transport and extracellular-matrix literature. BPC-157 is a separate fifteen-residue pentadecapeptide of gastric origin studied in angiogenesis and GI-mucosa research. They share no common backbone and are not interchangeable. Both, where sold, are strictly for in-vitro laboratory research.",
  },
  {
    q: "Does Titan Peptide Lab sell GHK-Cu?",
    a: "No. GHK-Cu is not part of Titan's research catalog. Titan stocks BPC-157 as a ready-to-use nasal spray (15mL, 500mcg per actuation) and as a 5mg lyophilized vial, both with lot-matched documentation. This page exists to compare the two compounds honestly, not to imply Titan carries GHK-Cu.",
  },
  {
    q: "Why are GHK-Cu and BPC-157 compared so often?",
    a: "Both are referenced in connective-tissue and 'repair'-themed research discussions online, so buyers searching one frequently encounter the other and assume they are alternatives. Chemically they are very different: GHK-Cu carries a copper cofactor central to its proposed activity, while BPC-157 is a metal-free peptide chain. Comparing them helps researchers avoid substituting one for the other by mistake.",
  },
  {
    q: "How do I verify GHK-Cu or BPC-157 purity before buying?",
    a: "For BPC-157, look for a lot-matched release sheet referenced to the exact lot code on the unit, with a stated HPLC purity target and identity confirmation. For a copper-bound peptide like GHK-Cu, a credible supplier should document both peptide identity and copper content, since purity of the peptide alone does not confirm correct complexation. Titan's lab-testing workflow and COA-verification guide explain what a real paper trail looks like.",
  },
  {
    q: "Are these products for human use?",
    a: "No. BPC-157 from Titan Peptide Lab is sold strictly for in-vitro laboratory research and is not for human or animal consumption, diagnostic, therapeutic, or preventative use. GHK-Cu, where sold by other suppliers, is likewise a research material; Titan makes no human-use, dosing, or efficacy claims for either compound.",
  },
];

export default function GhkCuVsBpcPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "GHK-Cu vs BPC-157", item: "/ghk-cu-vs-bpc-157/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Research compound comparison · research use
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                GHK-Cu vs BPC-157: two compounds people confuse, with almost nothing in common.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                GHK-Cu is a copper-binding tripeptide; BPC-157 is a gastric pentadecapeptide. They turn up in the same &ldquo;repair&rdquo; searches, but they are different molecules with different cofactors and live in separate bodies of literature. This page lays out what each one actually is, which Titan stocks, and the documentation standard each chemistry demands — so you match the compound to your study, not to the marketing.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/bpc-157-vial/?ref=ghk-vs-bpc-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  BPC-157 vial
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products/bpc-157-nasal-spray/?ref=ghk-vs-bpc-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  BPC-157 nasal spray
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[1.5rem] border border-[#dde6e1]">
              <table className="w-full border-collapse text-left text-[13.5px]">
                <thead>
                  <tr className="bg-[#fafbfa] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1e6f58]">
                    <th className="px-5 py-4">Attribute</th>
                    <th className="px-5 py-4">GHK-Cu</th>
                    <th className="px-5 py-4">BPC-157</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map(([attr, ghk, bpc]) => (
                    <tr key={attr} className="border-t border-[#eef2f0] align-top">
                      <td className="px-5 py-4 font-semibold text-[#0f1613]">{attr}</td>
                      <td className="px-5 py-4 leading-7 text-[#5c6762]">{ghk}</td>
                      <td className="px-5 py-4 leading-7 text-[#5c6762]">{bpc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="border-y border-[rgb(15_22_19/6%)] bg-[#fafbfa] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {POINTS.map(({ icon: Icon, title, body, href, cta }) => (
                <Link key={title} href={href} className="group flex h-full flex-col rounded-[1.5rem] border border-[#dde6e1] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#1e6f58] hover:shadow-[0_18px_60px_-42px_rgb(15_22_19/45%)]">
                  <Icon className="h-5 w-5 text-[#1e6f58]" />
                  <h2 className="mt-5 font-serif text-[1.45rem] leading-tight tracking-[-0.02em] group-hover:text-[#1e6f58]">
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">Related reading</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] tracking-[-0.035em]">Keep comparing before you commit.</h2>
            <ul className="mt-7 space-y-3 text-[14px] leading-7 text-[#1e6f58]">
              <li><Link className="hover:underline" href="/tb-500-vs-bpc-157/?ref=ghk-vs-bpc">TB-500 vs BPC-157 →</Link></li>
              <li><Link className="hover:underline" href="/bpc-157-nasal-spray-vs-vial/?ref=ghk-vs-bpc">BPC-157 nasal spray vs vial →</Link></li>
              <li><Link className="hover:underline" href="/how-to-verify-peptide-quality-coa/?ref=ghk-vs-bpc">How to read a Certificate of Analysis →</Link></li>
              <li><Link className="hover:underline" href="/best-research-peptides/?ref=ghk-vs-bpc">Best research peptides by category →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-bpc-157-nasal-spray/?ref=ghk-vs-bpc">Where to buy BPC-157 nasal spray →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              See the BPC-157 product pages.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Titan stocks BPC-157, not GHK-Cu. Open a product page to see size, lot documentation, and crypto checkout, or browse the full research catalog.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/?ref=ghk-vs-bpc-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                Browse catalog
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/peptide-supplier-checklist/?ref=ghk-vs-bpc-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
                Supplier checklist
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
