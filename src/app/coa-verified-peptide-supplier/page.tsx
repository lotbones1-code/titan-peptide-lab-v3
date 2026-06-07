import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ClipboardCheck, FileSearch, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd, ProductListJsonLd } from "@/components/site/json-ld";

const TITLE = "COA-Verified Peptide Supplier — Lot-Matched Research Peptides";
const DESCRIPTION =
  "Compare Titan Peptide Lab as a COA-verified peptide supplier with lot-matched documentation, HPLC purity targets, research-use labeling, crypto checkout, and clear fulfillment terms.";
const URL = "/coa-verified-peptide-supplier/";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
  },
  robots: { index: true, follow: true },
};

const PROOF_POINTS = [
  {
    icon: FileSearch,
    title: "Lot paperwork first",
    body: "Titan routes buyers toward product pages, lab-testing details, and COA workflow before checkout so the documentation path is visible before payment.",
    href: "/lab-testing/?ref=coa-supplier-proof",
    cta: "Review testing path",
  },
  {
    icon: BadgeCheck,
    title: "HPLC purity target",
    body: "The catalog is framed around HPLC release targets and identity confirmation instead of unsupported wellness claims or dosing advice.",
    href: "/blog/how-to-read-peptide-coa/?ref=coa-supplier-proof",
    cta: "Read COA guide",
  },
  {
    icon: ShieldCheck,
    title: "Research-use boundary",
    body: "All buyer-facing pages keep the in-vitro laboratory research boundary clear: no human-use claims, no therapeutic promises, and no medical advice.",
    href: "/legal/research-disclaimer/?ref=coa-supplier-proof",
    cta: "View disclaimer",
  },
  {
    icon: ClipboardCheck,
    title: "Checkout clarity",
    body: "Researchers can verify format, price, shipping terms, and crypto payment rails before committing to an order.",
    href: "/how-to-pay-with-crypto/?ref=coa-supplier-proof",
    cta: "See payment flow",
  },
];

const FAQS = [
  {
    q: "What is a COA-verified peptide supplier?",
    a: "A COA-verified peptide supplier should make lot documentation, purity testing method, identity confirmation, storage handling, and research-use boundaries visible before checkout. A COA should match the lot being purchased rather than acting as a generic marketing image.",
  },
  {
    q: "Does Titan Peptide Lab provide medical or dosing guidance?",
    a: "No. Titan Peptide Lab sells products strictly for in-vitro laboratory research use and does not provide human-use, animal-use, therapeutic, diagnostic, preventative, or dosing guidance.",
  },
  {
    q: "What should researchers compare before ordering peptides online?",
    a: "Researchers should compare lot matching, HPLC purity target, identity confirmation, storage requirements, shipping handling, payment terms, support responsiveness, and whether the supplier avoids medical claims.",
  },
];

export default function CoaVerifiedPeptideSupplierPage() {
  return (
    <>
      <ProductListJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "COA-verified peptide supplier", item: URL },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-[#fbf8f2] text-[#13211c]">
        <section className="border-b border-[#13211c]/10 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                COA-verified peptide supplier
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.7rem,6vw,5.5rem)] leading-[0.94] tracking-[-0.05em] text-balance">
                Research peptides with the paperwork path visible before checkout.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#53625c]">
                Titan Peptide Lab is built for buyers who compare suppliers by documentation, not hype: lot-matched COA workflow, HPLC purity targets, research-use labeling, crypto checkout, and clear fulfillment terms.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/?ref=coa-supplier-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  Shop research catalog
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/peptide-supplier-checklist/?ref=coa-supplier-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[#13211c]/15 px-7 text-[13px] font-semibold text-[#13211c] transition hover:border-[#13211c]"
                >
                  Run supplier checklist
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {PROOF_POINTS.map(({ icon: Icon, title, body, href, cta }) => (
                <Link key={title} href={href} className="group flex h-full flex-col rounded-[1.5rem] border border-[#dde6e1] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#1e6f58] hover:shadow-[0_18px_60px_-42px_rgb(15_22_19/45%)]">
                  <Icon className="h-5 w-5 text-[#1e6f58]" />
                  <h2 className="mt-5 font-serif text-[1.5rem] leading-tight tracking-[-0.02em] group-hover:text-[#1e6f58]">
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

        <section className="border-y border-[#13211c]/8 bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Buyer comparison angle
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
                Built to capture researchers already comparing vendors.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                Searchers looking for a COA-verified peptide supplier are usually close to purchase. This page routes that demand into the catalog while making the compliance boundary and documentation standard obvious.
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["High-intent terms", "COA peptide supplier, HPLC-tested peptides, buy research peptides online."],
                ["Internal links", "Catalog, lab testing, COA guide, legal disclaimer, crypto checkout."],
                ["Buyer proof", "Lot workflow and fulfillment facts before order submission."],
                ["Safe language", "Research-use-only framing without therapeutic claims."],
              ].map(([term, desc]) => (
                <div key={term} className="rounded-[1.25rem] border border-[#dde6e1] bg-[#fbf8f2] p-5">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1e6f58]">{term}</dt>
                  <dd className="mt-3 text-[13.5px] leading-7 text-[#5c6762]">{desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Compare the lot path before placing an order.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the catalog, choose the research format, and verify the paperwork and checkout terms before payment.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/?ref=coa-supplier-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                Open catalog
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/lab-testing/?ref=coa-supplier-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[#13211c]/15 px-7 text-[13px] font-semibold text-[#13211c] transition hover:border-[#13211c]">
                Verify testing workflow
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
