import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, ShieldCheck, Wallet } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Peptide Supplier Checklist: COA, HPLC, Lot Verification | Titan Peptide Lab";
const DESCRIPTION =
  "A research-use peptide supplier checklist for buyers comparing COAs, HPLC purity, mass-spec identity, lot codes, shipping, crypto checkout, and research-use labeling.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/peptide-supplier-checklist/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/peptide-supplier-checklist/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const CHECKS = [
  {
    icon: FileText,
    label: "Lot-matched COA",
    body: "The document should reference the same lot code printed on the bottle, not a recycled stock certificate from a different batch.",
  },
  {
    icon: ShieldCheck,
    label: "HPLC + identity method",
    body: "Look for purity by HPLC and identity confirmation by mass spectrometry. A purity number alone does not prove the compound identity.",
  },
  {
    icon: CheckCircle2,
    label: "Research-use boundaries",
    body: "A serious supplier keeps research-use labeling visible and does not hide behind dosing advice, disease claims, or medical promises.",
  },
  {
    icon: Wallet,
    label: "Checkout clarity",
    body: "Payment network, wallet, dispatch target, shipping rate, and order documentation should be clear before funds move.",
  },
];

const SCORECARD = [
  ["COA references exact lot code", "Reject generic PDFs or old batch screenshots."],
  ["HPLC chromatogram shown or summarized", "Purity should be traceable to a method, not just marketing copy."],
  ["Mass-spec identity confirmation", "Confirms the compound is the expected molecule."],
  ["Independent retest path", "Best when third-party documentation is available or sent after dispatch."],
  ["Research-use disclaimer visible", "Avoid vendors that blur into medical, dosing, or treatment claims."],
  ["Shipping and payment expectations visible", "No hidden network, no vague dispatch promise, no unclear order path."],
];

const FAQS = [
  {
    q: "What should I check before choosing a peptide supplier?",
    a: "Check whether the supplier provides a lot-matched COA, HPLC purity data, mass-spectrometry identity confirmation, visible research-use disclaimers, clear shipping expectations, and a checkout path that explains payment network and dispatch timing before payment.",
  },
  {
    q: "Is a COA enough to trust a research peptide supplier?",
    a: "A COA is necessary but not sufficient. It should match the exact lot code, include a test method and date, and ideally be supported by independent retesting or a retained lot workflow. A generic certificate can create false confidence.",
  },
  {
    q: "Why does lot matching matter for peptide COAs?",
    a: "Peptide quality is batch-specific. A COA from one synthesis run does not prove that a different bottle from a different lot has the same purity, identity, or handling history.",
  },
  {
    q: "Does Titan provide dosing or medical-use guidance?",
    a: "No. Titan Peptide Lab sells products strictly for laboratory research use. Products are not for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
];

export default function PeptideSupplierChecklistPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Peptide Supplier Checklist", item: "/peptide-supplier-checklist/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fafbfa] py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Buyer due diligence
              </p>
              <h1 className="mt-5 max-w-3xl font-serif text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] tracking-[-0.045em] text-[#0f1613] text-balance">
                The peptide supplier checklist buyers should run before checkout.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                If you are comparing research peptide vendors, the real question is not who has the loudest discount code. It is whether the batch, document, shipping path, and research-use boundaries can survive basic verification.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/?ref=supplier-checklist"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  Compare Titan catalog
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/lab-testing/?ref=supplier-checklist"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  See COA workflow
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {CHECKS.map(({ icon: Icon, label, body }) => (
                <article key={label} className="rounded-[1.5rem] border border-[#dde6e1] bg-white p-6 shadow-[0_18px_50px_-42px_rgb(15_22_19/45%)]">
                  <Icon className="h-5 w-5 text-[#1e6f58]" />
                  <h2 className="mt-5 font-serif text-[1.55rem] leading-tight tracking-[-0.02em] text-[#0f1613]">
                    {label}
                  </h2>
                  <p className="mt-3 text-[13.5px] leading-7 text-[#5c6762]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Six-point scorecard
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1] tracking-[-0.035em]">
                Use this as a fast screen for vendor pages, forum recommendations, and DMs.
              </h2>
            </div>
            <ol className="mt-10 grid gap-4">
              {SCORECARD.map(([title, body], index) => (
                <li key={title} className="grid gap-4 rounded-[1.25rem] border border-[rgb(15_22_19/8%)] bg-[#fbfcfb] p-5 sm:grid-cols-[44px_1fr] sm:p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8f2ee] text-[13px] font-semibold tabular-nums text-[#1e6f58]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-[1.35rem] leading-tight tracking-[-0.02em]">{title}</h3>
                    <p className="mt-2 text-[13.5px] leading-7 text-[#5c6762]">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#0b100e] py-14 text-white">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
              Titan’s position
            </p>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Lot paperwork first. Claims second.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-white/60">
              Titan’s sales path is deliberately boring: research-use language, lot release sheet, HPLC purity target, crypto checkout, plain fulfillment terms, and a product page that keeps documentation visible at the point of doubt.
            </p>
            <Link
              href="/buy-research-peptides/?ref=supplier-checklist-bottom"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-[13px] font-semibold text-[#0f1613] transition hover:bg-[#e8f2ee]"
            >
              Open research peptide buying guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
