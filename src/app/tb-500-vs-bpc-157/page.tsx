import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileSearch, FlaskConical, Layers, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "TB-500 vs BPC-157 | Research Compound Comparison | Titan Peptide Lab";
const DESCRIPTION =
  "TB-500 vs BPC-157: a research-use comparison of two of the most-studied research peptides — what each is, the literature context, available formats, purity documentation, and how researchers choose or pair them.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/tb-500-vs-bpc-157/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/tb-500-vs-bpc-157/",
    type: "article",
  },
  robots: { index: true, follow: true },
};

const ROWS = [
  ["Identity", "Synthetic fragment related to thymosin beta-4", "Pentadecapeptide of gastric origin (BPC-157)"],
  ["Literature context", "Studied for actin-binding and angiogenesis", "Studied for angiogenesis and GI-mucosa biology"],
  ["Titan formats", "5mg lyophilized vial", "Nasal spray (15mL · 500mcg) + 5mg lyophilized vial"],
  ["Prep", "Reconstitute lyophilized powder", "Spray is ready-to-use; vial is reconstituted"],
  ["Common research pairing", "Frequently referenced alongside BPC-157", "Frequently referenced alongside TB-500"],
  ["Documentation", "Lot-matched release sheet", "Lot-matched release sheet"],
];

const POINTS = [
  {
    icon: FlaskConical,
    title: "Two distinct compounds, not interchangeable",
    body: "TB-500 is a synthetic fragment associated with thymosin beta-4; BPC-157 is a separate pentadecapeptide. They appear in different parts of the literature and are not substitutes for one another in a study design.",
    href: "/research/?ref=tb500-vs-bpc",
    cta: "Browse research index",
  },
  {
    icon: Layers,
    title: "Format availability differs",
    body: "Titan stocks TB-500 as a 5mg lyophilized vial, and BPC-157 in both a ready-to-use nasal spray and a lyophilized vial. If a fixed, low-prep format matters to your design, that availability difference is a practical factor.",
    href: "/bpc-157-nasal-spray-vs-vial/?ref=tb500-vs-bpc",
    cta: "BPC-157 spray vs vial",
  },
  {
    icon: ShieldCheck,
    title: "Same documentation standard",
    body: "Both compounds ship with a lot-matched in-house release sheet referenced to the lot code on the unit, against an HPLC purity target with identity confirmation. The compound differs; the paper-trail standard does not.",
    href: "/coa-verified-peptide-supplier/?ref=tb500-vs-bpc",
    cta: "How to verify a COA",
  },
  {
    icon: FileSearch,
    title: "Choose by your protocol, not by marketing",
    body: "Pick the compound the literature you are working from actually references, confirm the lot documentation, then select the format. Avoid suppliers that blur the two with treatment or recovery claims — that language is a red flag, not a feature.",
    href: "/peptide-supplier-checklist/?ref=tb500-vs-bpc",
    cta: "Supplier checklist",
  },
];

const FAQS = [
  {
    q: "What is the difference between TB-500 and BPC-157?",
    a: "They are two distinct research peptides. TB-500 is a synthetic fragment associated with thymosin beta-4 and appears in actin-binding and angiogenesis research; BPC-157 is a separate pentadecapeptide studied in angiogenesis and GI-mucosa literature. They are not interchangeable, and each should be selected based on the specific literature a research design is built on. Both are sold strictly for in-vitro laboratory research.",
  },
  {
    q: "Are TB-500 and BPC-157 used together in research?",
    a: "The two are frequently referenced alongside each other in the literature, which is why researchers often compare them. Titan provides both with lot-matched documentation so a study using either or both can keep a consistent paper trail. Titan does not provide protocols, dosing, or human-use guidance — material is research-use only.",
  },
  {
    q: "Which formats does Titan offer for TB-500 and BPC-157?",
    a: "TB-500 is available as a 5mg lyophilized vial. BPC-157 is available both as a ready-to-use nasal spray (15mL, 500mcg per actuation) and as a 5mg lyophilized vial. See the BPC-157 nasal spray vs vial comparison to choose a BPC-157 format.",
  },
  {
    q: "How do I verify TB-500 or BPC-157 purity before buying?",
    a: "Look for a lot-matched release sheet — documentation referenced to the exact lot code on the unit, not a generic stock spec sheet — plus a stated HPLC purity target and identity confirmation. Titan's lab-testing workflow and COA-verification guide explain what a credible paper trail looks like.",
  },
  {
    q: "Are these products for human use?",
    a: "No. TB-500 and BPC-157 from Titan Peptide Lab are sold strictly for in-vitro laboratory research. They are not for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
];

export default function Tb500VsBpcPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "TB-500 vs BPC-157", item: "/tb-500-vs-bpc-157/" },
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
                TB-500 vs BPC-157: two compounds researchers keep comparing.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                TB-500 and BPC-157 are two of the most-referenced research peptides, and they show up together constantly in the literature. They are not the same compound and not interchangeable. This page lays out what each is, the formats Titan stocks, and the documentation standard — so you can match the compound to your study, not to marketing.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/tb-500-vial/?ref=tb500-vs-bpc-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  TB-500 vial
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products/bpc-157-vial/?ref=tb500-vs-bpc-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  BPC-157 vial
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
                    <th className="px-5 py-4">TB-500</th>
                    <th className="px-5 py-4">BPC-157</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map(([attr, tb, bpc]) => (
                    <tr key={attr} className="border-t border-[#eef2f0] align-top">
                      <td className="px-5 py-4 font-semibold text-[#0f1613]">{attr}</td>
                      <td className="px-5 py-4 leading-7 text-[#5c6762]">{tb}</td>
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
              <li><Link className="hover:underline" href="/ghk-cu-vs-bpc-157/?ref=tb500-vs-bpc">GHK-Cu vs BPC-157 →</Link></li>
              <li><Link className="hover:underline" href="/bpc-157-nasal-spray-vs-vial/?ref=tb500-vs-bpc">BPC-157 nasal spray vs vial →</Link></li>
              <li><Link className="hover:underline" href="/blog/bpc-157-nasal-spray-complete-guide/?ref=tb500-vs-bpc">BPC-157 nasal spray complete guide →</Link></li>
              <li><Link className="hover:underline" href="/best-research-peptides/?ref=tb500-vs-bpc">Best research peptides by category →</Link></li>
              <li><Link className="hover:underline" href="/lab-testing/?ref=tb500-vs-bpc">Lab-testing & COA workflow →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-bpc-157-nasal-spray/?ref=tb500-vs-bpc">Where to buy BPC-157 nasal spray →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Compare the real product pages.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open each product page to see size, lot documentation, and checkout, or browse the full research catalog.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/?ref=tb500-vs-bpc-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                Browse catalog
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/peptide-supplier-checklist/?ref=tb500-vs-bpc-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
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
