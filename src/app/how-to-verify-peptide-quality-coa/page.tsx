import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileSearch, FlaskConical, ScanLine, ShieldCheck, TriangleAlert } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "How to Verify Peptide Quality With a COA | Read HPLC & MS Purity | Titan Peptide Lab";
const DESCRIPTION =
  "A plain-English guide to reading a research-peptide Certificate of Analysis: what HPLC and mass-spec purity numbers actually mean, third-party vs in-house testing, how to confirm a lot code matches the vial, and the red flags that tell you to walk away. Research use only.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/how-to-verify-peptide-quality-coa/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/how-to-verify-peptide-quality-coa/",
    type: "article",
  },
  robots: { index: true, follow: true },
};

const ROWS = [
  ["Identity (MS)", "Mass spectrometry confirms the molecule's measured mass matches the theoretical mass of the sequence", "A COA with purity but no identity test — purity of the wrong molecule is meaningless"],
  ["Purity (HPLC)", "High-performance liquid chromatography reports the percentage of the main peak vs impurity peaks", "A bare '99%' with no chromatogram, no method, and no instrument trace"],
  ["Lot / batch code", "A unique code tying the document to one specific production batch — and to the code printed on the vial", "A generic COA reused across every order, or a code that doesn't match the vial"],
  ["Test date & lab", "Who ran the test and when — ideally a named third-party analytical lab", "'Tested' with no lab name, no date, no signature"],
  ["Method reference", "The analytical method and column/gradient used, so the result is reproducible", "No method at all, or claims that can't be reproduced"],
];

const POINTS = [
  {
    icon: ScanLine,
    title: "Identity first, then purity — not the other way around",
    body: "The single most common mistake is reading the big '99%' number and stopping. Purity only tells you how much of the main peak is present; it says nothing about whether that peak is the peptide you ordered. That is what the mass-spectrometry (MS) section is for — it confirms the measured molecular mass matches the theoretical mass of the sequence. A real COA shows both: MS for identity, HPLC for purity. If a document shows a purity percentage with no identity confirmation, the percentage is unanchored.",
    href: "/coa-verified-peptide-supplier/?ref=how-to-verify-coa",
    cta: "What a verified supplier looks like",
  },
  {
    icon: FlaskConical,
    title: "What an HPLC purity number actually means",
    body: "High-performance liquid chromatography separates a sample into peaks over time. The main peak is your target compound; the smaller peaks are synthesis-related impurities, truncated sequences, or solvents. Purity is the area of the main peak as a percentage of total peak area. A trustworthy COA includes the actual chromatogram — the trace with retention times and peak areas — not just a typed-in number. The chromatogram is the evidence; the percentage is the summary. If you only get the summary, you are being asked to trust, not verify.",
    href: "/products/?ref=how-to-verify-coa",
    cta: "Browse documented compounds",
  },
  {
    icon: ShieldCheck,
    title: "Third-party vs in-house testing",
    body: "In-house testing means the vendor ran the analysis on their own instruments; third-party testing means an independent analytical lab did. Both can be legitimate, but they carry different weight. In-house release testing is the operational baseline — it should be lot-matched and reproducible. A named third-party report adds independent verification, which is the strongest trust signal a research buyer can ask for. The thing that should worry you is neither: a 'COA' with no lab named at all, in-house or otherwise.",
    href: "/lab-testing/?ref=how-to-verify-coa",
    cta: "See Titan's testing standard",
  },
  {
    icon: TriangleAlert,
    title: "The red flags that should end the purchase",
    body: "Walk away from any supplier whose documentation includes dosing instructions, human-use language, therapeutic or efficacy claims, before/after results, or 'how to take it' guidance — that language is a compliance red flag, not a quality spec, and it signals a vendor who does not understand the research-use-only boundary. Also walk away from a single generic COA reused across unrelated products, a lot code that doesn't match the vial, or a refusal to share the chromatogram. Real documentation is specific, lot-matched, and silent on human use.",
    href: "/peptide-supplier-checklist/?ref=how-to-verify-coa",
    cta: "Full supplier checklist",
  },
];

const FAQS = [
  {
    q: "What is a Certificate of Analysis (COA) for a research peptide?",
    a: "A Certificate of Analysis is a lab document that reports the analytical testing for a specific production lot of a compound. For a research peptide it should include an identity confirmation by mass spectrometry (the measured mass matches the theoretical mass of the sequence), a purity result by HPLC (the percentage of the main peak versus impurity peaks), the lot/batch code that matches the code on the vial, and the test date and lab. It documents what was made and tested — it is not a usage, dosing, or human-use document.",
  },
  {
    q: "How do I read the purity percentage on a peptide COA?",
    a: "The purity percentage on an HPLC report is the area of the main peak expressed as a percentage of the total area of all peaks. The smaller peaks are synthesis-related impurities or solvents. A trustworthy COA shows the actual chromatogram — the trace with retention times and peak areas — so the number is backed by evidence you can inspect, not just a typed-in figure. Treat a bare percentage with no chromatogram and no method as unverified.",
  },
  {
    q: "What is the difference between third-party and in-house COA testing?",
    a: "In-house testing means the supplier ran the analysis on their own instruments as part of batch release; third-party testing means an independent analytical laboratory performed it. Both can be legitimate when the report is lot-matched and reproducible. A named third-party report adds independent verification and is the strongest trust signal. The real warning sign is a 'COA' with no lab named at all and no method referenced.",
  },
  {
    q: "What are the warning signs of a fake or low-quality peptide COA?",
    a: "Major red flags include: dosing instructions or human-use, therapeutic, or efficacy language anywhere in the documentation (a compliance red flag, not a spec); a single generic COA reused across multiple unrelated products; a lot code that does not match the code printed on the vial; a purity number with no chromatogram or method; and no lab name or test date. Legitimate documentation is specific, lot-matched, reproducible, and silent on human use.",
  },
  {
    q: "How do I confirm a COA matches the vial I received?",
    a: "Find the lot or batch code printed on the vial and confirm the same code appears on the Certificate of Analysis. A COA is only meaningful when it is tied to the exact batch you hold — a document for a different lot, or a generic document with no code, does not verify your material. Matching the lot code is the step most buyers skip and the one that actually closes the verification loop.",
  },
  {
    q: "Are Titan Peptide Lab's compounds for human use?",
    a: "No. All compounds from Titan Peptide Lab are supplied strictly for in-vitro laboratory and research use. They are not for human or animal consumption, nor for diagnostic, therapeutic, or preventative use. This guide explains how to read analytical documentation and makes no human-use, dosing, or efficacy claims.",
  },
];

export default function HowToVerifyPeptideQualityCoaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "How to verify peptide quality with a COA", item: "/how-to-verify-peptide-quality-coa/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Buyer education · research use only
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.5rem,6vw,5.2rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                How to verify peptide quality with a COA.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                A Certificate of Analysis is the one document that separates a documented compound from a number on a label. But most buyers read the big &ldquo;99%&rdquo; and stop &mdash; which is exactly the wrong move. This is a plain-English guide to reading a research-peptide COA the way an analyst would: identity before purity, what the HPLC and mass-spec sections actually prove, third-party versus in-house testing, how to confirm the lot code matches your vial, and the red flags that should end a purchase. It makes no human-use or dosing claims; it is about how to read the paper trail.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/coa-verified-peptide-supplier/?ref=how-to-verify-coa-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  See a verified supplier
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products/?ref=how-to-verify-coa-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  Browse documented compounds
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">The five lines that matter</p>
              <h2 className="mt-4 font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] tracking-[-0.035em]">
                What a real COA contains &mdash; and the shortcut a fake takes.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                Every legitimate Certificate of Analysis answers five questions. Run any document you&apos;re handed against this table before you trust the purity number on it.
              </p>
            </div>
            <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-[#dde6e1]">
              <table className="w-full border-collapse text-left text-[13.5px]">
                <thead>
                  <tr className="bg-[#fafbfa] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1e6f58]">
                    <th className="px-5 py-4">What to check</th>
                    <th className="px-5 py-4">What a real COA shows</th>
                    <th className="px-5 py-4">Red flag</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map(([attr, real, flag]) => (
                    <tr key={attr} className="border-t border-[#eef2f0] align-top">
                      <td className="px-5 py-4 font-semibold text-[#0f1613]">{attr}</td>
                      <td className="px-5 py-4 leading-7 text-[#5c6762]">{real}</td>
                      <td className="px-5 py-4 leading-7 text-[#5c6762]">{flag}</td>
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">The verification loop, in order</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] tracking-[-0.035em]">Four steps, every order.</h2>
            <ol className="mt-7 space-y-5 text-[14px] leading-7 text-[#5c6762]">
              <li><span className="font-semibold text-[#0f1613]">1. Confirm identity.</span> Find the mass-spectrometry section and check that the measured mass matches the theoretical mass for the sequence. No identity test means the purity number is meaningless.</li>
              <li><span className="font-semibold text-[#0f1613]">2. Read the purity from the chromatogram.</span> Look for the HPLC trace, not just the percentage. The main peak should dominate; impurity peaks should be small and few. The chromatogram is the evidence behind the number.</li>
              <li><span className="font-semibold text-[#0f1613]">3. Match the lot code.</span> The batch code on the COA must match the code on the vial you received. This is the step most buyers skip and the one that actually closes the loop.</li>
              <li><span className="font-semibold text-[#0f1613]">4. Scan for compliance red flags.</span> Any dosing, human-use, or efficacy language in the documentation is a reason to walk away — not because the molecule is wrong, but because the vendor is.</li>
            </ol>
            <p className="mt-8 rounded-[1.25rem] border border-[#dde6e1] bg-[#fbfcfb] p-6 text-[13px] leading-7 text-[#5c6762]">
              Titan publishes a lot-matched release sheet referenced to the code on each vial, with an HPLC purity target and mass-spec identity confirmation, and keeps all product documentation silent on human use. That is the standard this guide is written to — read it, then verify it yourself.
            </p>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fafbfa] py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">Related reading</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] tracking-[-0.035em]">Verify before you buy.</h2>
            <ul className="mt-7 space-y-3 text-[14px] leading-7 text-[#1e6f58]">
              <li><Link className="hover:underline" href="/coa-verified-peptide-supplier/?ref=how-to-verify-coa">What a COA-verified peptide supplier looks like →</Link></li>
              <li><Link className="hover:underline" href="/peptide-supplier-checklist/?ref=how-to-verify-coa">The full peptide-supplier checklist →</Link></li>
              <li><Link className="hover:underline" href="/lab-testing/?ref=how-to-verify-coa">Titan&apos;s lab-testing standard →</Link></li>
              <li><Link className="hover:underline" href="/titan-peptide-lab-reviews/?ref=how-to-verify-coa">Titan Peptide Lab reviews &amp; legitimacy →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-research-peptides/?ref=how-to-verify-coa">Where to buy research peptides →</Link></li>
              <li><Link className="hover:underline" href="/best-research-peptides/?ref=how-to-verify-coa">Best research peptides by category →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Know what to look for. Then buy from a lab that shows it.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Every Titan compound ships with lot-matched release documentation and an HPLC purity target. Browse the catalog and read the paper trail on each product page.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/?ref=how-to-verify-coa-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                Browse catalog
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/coa-verified-peptide-supplier/?ref=how-to-verify-coa-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
                See a verified supplier
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
