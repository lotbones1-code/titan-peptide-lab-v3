import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardCheck, FileSearch, Link2, ShieldAlert, TriangleAlert } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";
import { AeoFaqSection, AeoHero, AeoRelatedLinks, AeoRuBoundary } from "@/components/site/aeo-page";

const TITLE = "Janoshik COA Verification: Source-Check a Peptide Report | Titan Peptide Lab";
const DESCRIPTION =
  "How to verify a Janoshik peptide COA against the lab source: QR or task lookup, compound, purity, date, and lot match. RUO supplier due diligence.";
const URL = "/janoshik-coa-verification/";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "article" },
  robots: { index: true, follow: true },
};

const CHECKS = [
  {
    icon: FileSearch,
    title: "Open the source record",
    body: "Use the QR code, report link, or task lookup route shown on the document. A copied logo or isolated PDF is only a prompt to verify, not proof by itself.",
  },
  {
    icon: ClipboardCheck,
    title: "Match the document fields",
    body: "Confirm the compound identity, reported purity or assay result, task or report identifier, date information, and any lot or batch reference.",
  },
  {
    icon: Link2,
    title: "Tie the report to the vial",
    body: "The source record still has to connect to the vial, supplier lot page, or order record under review. Authentic paperwork for one sample can be wrong-lot paperwork for another.",
  },
  {
    icon: ShieldAlert,
    title: "Keep the boundary clear",
    body: "Janoshik verification can support supplier due diligence. It does not create a supplier-wide guarantee, future-lot guarantee, or human-use implication.",
  },
];

const MATCH_FIELDS = [
  ["Compound identity", "The named peptide, sequence where available, or analyte should match the PDF and source record."],
  ["Result summary", "Purity, assay, or identity result should match the source page rather than only a screenshot."],
  ["Report/task identifiers", "Task numbers, report IDs, keys, or QR-resolved identifiers should align across the record."],
  ["Date context", "Report and sample dates should be plausible for the lot being sold now."],
  ["Lot or batch reference", "Any lot code shown should connect to the vial, supplier lot page, or order record."],
];

const LIMITS = [
  "A valid report for one sample does not verify every vial from a supplier.",
  "A valid report does not verify future lots, replacement lots, or relabeled batches.",
  "A source record does not replace the need to match the report to the exact lot under review.",
  "A third-party analytical report is not medical, dosing, treatment, or human-use guidance.",
];

const FAQS = [
  {
    q: "Does a Janoshik logo prove a peptide COA is real?",
    a: "No. Treat the logo as a prompt to verify, not as proof. The report should resolve through Janoshik's own public or verification route and match the document details.",
  },
  {
    q: "Which fields should match between the PDF and source record?",
    a: "Match the compound identity, reported purity or assay result, report/task identifiers, date information, and any batch or lot reference shown on the document.",
  },
  {
    q: "Can a real Janoshik report still be the wrong report for a vial?",
    a: "Yes. A report can be authentic but attached to a different batch. The batch or lot identifier must connect the report to the vial, order record, or supplier lot page.",
  },
  {
    q: "Does Janoshik verification prove a peptide is suitable for human use?",
    a: "No. This page is for research-use-only supplier due diligence. It does not provide medical, dosing, treatment, or human-use guidance.",
  },
  {
    q: "Does Titan claim Janoshik testing on every lot?",
    a: "Do not infer that. Only a named report for a specific lot should be treated as a third-party report. Otherwise, use Titan's live lab-testing and lot-release documentation path.",
  },
];

export default function JanoshikCoaVerificationPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Janoshik COA verification", item: URL },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <AeoHero
          eyebrow="COA source-check · RUO supplier due diligence"
          title="How to verify a Janoshik COA before trusting a peptide report."
          answer="A Janoshik logo or PDF is not enough. Verify the report at the lab source, match the compound and reported result to the record, then confirm the lot or batch identifier ties the report to the vial or order under review. A valid report for one sample does not automatically verify every vial, future lot, or supplier-wide claim."
          primary={{ href: "/how-to-verify-peptide-quality-coa/?ref=janoshik-source-check", label: "Read a peptide COA" }}
          secondary={{ href: "/lab-testing/?ref=janoshik-source-check", label: "Titan lab-testing standard" }}
        />

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {CHECKS.map(({ icon: Icon, title, body }) => (
                <article key={title} className="rounded-[1.5rem] border border-[#dde6e1] bg-white p-6 shadow-[0_18px_50px_-44px_rgb(15_22_19/40%)]">
                  <Icon className="h-5 w-5 text-[#1e6f58]" />
                  <h2 className="mt-5 font-serif text-[1.45rem] leading-tight tracking-[-0.02em]">{title}</h2>
                  <p className="mt-3 text-[13.5px] leading-7 text-[#5c6762]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[rgb(15_22_19/6%)] bg-[#fafbfa] py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">Fields that must match</p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
                The 90-second source check is field matching, not logo recognition.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                Start at the lab source, then compare the resolved record against the supplier PDF and the vial or order record in front of you.
              </p>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-[#dde6e1] bg-white">
              <table className="w-full border-collapse text-left text-[13.5px]">
                <thead>
                  <tr className="bg-[#f4f7f5] text-[11px] uppercase tracking-[0.12em] text-[#1e6f58]">
                    <th className="px-5 py-4 font-semibold">Field</th>
                    <th className="px-5 py-4 font-semibold">What to compare</th>
                  </tr>
                </thead>
                <tbody>
                  {MATCH_FIELDS.map(([field, body]) => (
                    <tr key={field} className="border-t border-[#e7ede9] align-top">
                      <td className="px-5 py-5 font-serif text-[1.1rem] tracking-[-0.01em]">{field}</td>
                      <td className="px-5 py-5 leading-7 text-[#5c6762]">{body}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">What verification does not prove</p>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">Authentic paperwork still has limits.</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {LIMITS.map((item) => (
                <li key={item} className="flex gap-3 rounded-[1.25rem] border border-[#dde6e1] bg-[#fbfcfb] p-5 text-[13.5px] leading-7 text-[#5c6762]">
                  <TriangleAlert className="mt-1 h-4 w-4 shrink-0 text-[#1e6f58]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-[1.25rem] border border-[#dde6e1] bg-white p-6 text-[13.5px] leading-7 text-[#5c6762]">
              Titan-specific boundary: do not treat this educational page as a claim that every Titan lot is Janoshik-tested. Only a named report for a specific lot should be treated as a third-party report. For Titan, use the live lab-testing and lot-release documentation path unless a named lot report says otherwise.
            </p>
          </div>
        </section>

        <AeoFaqSection faqs={FAQS} />
        <AeoRelatedLinks
          title="Continue the COA source-check path."
          links={[
            { href: "/how-to-verify-peptide-quality-coa/?ref=janoshik-related", label: "COA quality guide", blurb: "Read identity, HPLC, MS, and lot matching before trusting a document." },
            { href: "/current-lot-coa-checklist-research-peptides/?ref=janoshik-related", label: "Current-lot COA checklist", blurb: "Match the report to the exact current lot under review." },
            { href: "/lab-testing/?ref=janoshik-related", label: "Titan lab-testing standard", blurb: "Review the lot-release documentation path." },
            { href: "/coa-verified-peptide-supplier/?ref=janoshik-related", label: "COA-verified peptide supplier workflow", blurb: "Compare supplier claims against visible paperwork." },
            { href: "/peptide-supplier-checklist/?ref=janoshik-related", label: "Supplier due-diligence checklist", blurb: "Screen the seller before checkout." },
            { href: "/products/?ref=janoshik-related", label: "Research peptide catalog", blurb: "Browse catalog pages and documentation links." },
          ]}
        />
        <AeoRuBoundary />
      </main>
      <Footer />
    </>
  );
}
