import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, CheckCircle2, ClipboardList, FileText, FlaskConical, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";
import { AeoFaqSection, AeoHero, AeoRelatedLinks, AeoRuBoundary } from "@/components/site/aeo-page";

const TITLE = "Current-Lot COA Checklist for Research Peptides | Titan Peptide Lab";
const DESCRIPTION =
  "A RUO checklist for matching a research peptide COA to the current lot: lot code, HPLC, identity method, date, lab/source, vial and order match.";
const URL = "/current-lot-coa-checklist-research-peptides/";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "article" },
  robots: { index: true, follow: true },
};

const SEVEN_FIELDS = [
  ["Lot code", "The lot or batch identifier is present and matches the vial, order record, or supplier lot page."],
  ["Compound identity", "The named compound and identity method support the product under review, not a nearby analog or blend."],
  ["Vial format / quantity", "The report context aligns with the product size, format, or sample described by the supplier."],
  ["HPLC result", "Purity is backed by method context such as chromatogram or summarized instrument output."],
  ["Identity method", "Mass spectrometry or another appropriate identity method is listed where the supplier claims identity verification."],
  ["Date context", "The report is plausible for the current lot rather than an old representative document."],
  ["Lab or source", "A lab name, source page, or verification route exists so the document is auditable."],
];

const RED_FLAGS = [
  "A reused PDF with no current lot reference.",
  "A purity number with no chromatogram, method summary, or source route.",
  "No identity method despite a strong identity claim.",
  "A vial, product page, and order record that do not share the same lot code.",
  "Human-use language presented as proof of quality.",
];

const FAQS = [
  {
    q: "What does current-lot COA mean?",
    a: "It means the certificate is tied to the exact production lot or batch under review, not an older or representative sample.",
  },
  {
    q: "What is the first COA field to check?",
    a: "Check the lot or batch identifier first. If it does not connect to the vial, order record, or supplier lot page, the rest of the document may not apply.",
  },
  {
    q: "Is a purity percentage enough?",
    a: "No. Purity should be supported by method context such as HPLC data, and identity should be supported by an appropriate identity method such as mass spectrometry where the supplier claims it.",
  },
  {
    q: "What is a generic COA red flag?",
    a: "A generic COA is a document reused across batches or products with no lot-specific link. It may show past testing, but it does not document the current lot.",
  },
  {
    q: "Is this checklist dosing or use guidance?",
    a: "No. It is research-use-only documentation due diligence and does not provide medical, dosing, treatment, or human-use advice.",
  },
];

export default function CurrentLotCoaChecklistPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Current-lot COA checklist", item: URL },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <AeoHero
          eyebrow="Lot-matched paperwork · research-use-only"
          title="Run the current-lot COA checklist before trusting the paperwork."
          answer="A COA only helps if it belongs to the lot being reviewed. Before comparing purity numbers, match the lot code across the COA, vial label, product/order record, and any supplier lot page. Then check whether identity and purity were documented with enough method context to support the claim."
          primary={{ href: "/peptide-supplier-checklist/?ref=current-lot-hero", label: "Full supplier checklist" }}
          secondary={{ href: "/how-to-verify-peptide-quality-coa/?ref=current-lot-hero", label: "COA quality guide" }}
        />

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">The current-lot rule</p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
                Current lot beats representative paperwork.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                The most useful COA is not the cleanest PDF; it is the one that can be traced to the exact material under review. Start with the lot code, then move outward to method evidence, lab source, and research-use boundary.
              </p>
            </div>
            <ol className="mt-10 grid gap-4 md:grid-cols-2">
              {SEVEN_FIELDS.map(([field, body], index) => (
                <li key={field} className="grid gap-4 rounded-[1.25rem] border border-[#dde6e1] bg-[#fbfcfb] p-5 sm:grid-cols-[44px_1fr]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8f2ee] text-[13px] font-semibold tabular-nums text-[#1e6f58]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-[1.35rem] leading-tight tracking-[-0.02em]">{field}</h3>
                    <p className="mt-2 text-[13.5px] leading-7 text-[#5c6762]">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-y border-[rgb(15_22_19/6%)] bg-[#fafbfa] py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">Before checkout</p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
                Ask whether the displayed record is batch-specific.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                If one document is used as a general proof badge across products, the audit trail is incomplete. Pause until the supplier can connect the current lot to the vial or order path.
              </p>
              <Link className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]" href="/lab-testing/?ref=current-lot-checklist">
                Titan lot-release documentation
              </Link>
            </div>
            <div className="rounded-[1.5rem] border border-[#dde6e1] bg-white p-6">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-[#1e6f58]" />
                <h3 className="font-serif text-[1.55rem] tracking-[-0.02em]">Red flags</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {RED_FLAGS.map((flag) => (
                  <li key={flag} className="flex gap-3 text-[13.5px] leading-7 text-[#5c6762]">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#1e6f58]" />
                    <span>{flag}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 rounded-[1rem] bg-[#fbfcfb] p-4 text-[12.5px] leading-6 text-[#6b766f]">
                A generic COA may document past testing, but it does not document the current lot. Current-lot paperwork must connect to the exact production batch under review.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-6 md:grid-cols-3 lg:px-8">
            {[
              { icon: ClipboardList, title: "Request current lot documentation", body: "Ask for the lot-specific record before checkout when the public page is unclear." },
              { icon: FlaskConical, title: "Separate purity from identity", body: "HPLC supports purity; identity needs its own method context when claimed." },
              { icon: ShieldCheck, title: "Reject human-use framing", body: "Research-use-only supplier diligence should not rely on dosing, treatment, or outcome language." },
            ].map(({ icon: Icon, title, body }) => (
              <article key={title} className="rounded-[1.5rem] border border-[#dde6e1] bg-white p-6 shadow-[0_18px_50px_-44px_rgb(15_22_19/40%)]">
                <Icon className="h-5 w-5 text-[#1e6f58]" />
                <h2 className="mt-5 font-serif text-[1.45rem] leading-tight tracking-[-0.02em]">{title}</h2>
                <p className="mt-3 text-[13.5px] leading-7 text-[#5c6762]">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <AeoFaqSection faqs={FAQS} />
        <AeoRelatedLinks
          title="Keep checking the exact lot before the supplier pitch."
          links={[
            { href: "/peptide-supplier-checklist/?ref=current-lot-related", label: "Full supplier checklist", blurb: "Screen COA, HPLC, identity, shipping, checkout, and RUO boundaries." },
            { href: "/how-to-verify-peptide-quality-coa/?ref=current-lot-related", label: "COA quality guide", blurb: "Read the document itself before trusting the number." },
            { href: "/janoshik-coa-verification/?ref=current-lot-related", label: "Janoshik source-check guide", blurb: "Verify a third-party report at the lab source, then match the lot." },
            { href: "/lab-testing/?ref=current-lot-related", label: "Titan lot-release documentation", blurb: "Review the documentation path." },
            { href: "/research-peptide-supplier/?ref=current-lot-related", label: "Research peptide supplier guide", blurb: "Compare suppliers by evidence, not claims." },
            { href: "/products/?ref=current-lot-related", label: "Product pages and lot documentation", blurb: "Open catalog pages and check the paper trail." },
          ]}
        />
        <AeoRuBoundary />
      </main>
      <Footer />
    </>
  );
}
