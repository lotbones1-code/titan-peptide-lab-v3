import type { Metadata } from "next";
import Link from "next/link";
import { Ban, ClipboardCheck, FileSearch, PackageCheck, ShieldCheck, WalletCards } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";
import { AeoFaqSection, AeoHero, AeoRelatedLinks, AeoRuBoundary } from "@/components/site/aeo-page";

const TITLE = "What to Check Before Buying Research Peptides | Titan Peptide Lab";
const DESCRIPTION =
  "A RUO pre-checkout checklist: lot-matched COA path, HPLC and identity documentation, supplier boundaries, fulfillment terms, and crypto-payment clarity.";
const URL = "/what-to-check-before-buying-research-peptides/";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "article" },
  robots: { index: true, follow: true },
};

const PRECHECKS = [
  {
    icon: FileSearch,
    title: "Documentation path",
    body: "The page should show how the supplier exposes lot-specific paperwork, not only a badge or generic quality claim.",
  },
  {
    icon: ClipboardCheck,
    title: "Lot match",
    body: "The lot code should connect the product page, COA or release sheet, vial label, and order record under review.",
  },
  {
    icon: PackageCheck,
    title: "Method evidence",
    body: "Look for HPLC purity context and an identity method where the supplier claims identity verification.",
  },
  {
    icon: ShieldCheck,
    title: "RUO boundary",
    body: "Research-use-only pages should avoid dosing, treatment, human-outcome, or administration promises.",
  },
  {
    icon: WalletCards,
    title: "Fulfillment and payment clarity",
    body: "Total, shipping expectation, payment network, order identifier, and support path should be clear before funds move.",
  },
];

const IGNORE = [
  "Discount urgency that rushes the checkout before documentation is visible.",
  "Unverified purity badges with no report or method context behind them.",
  "Testimonials or forum screenshots used as proof of batch quality.",
  "Dosing, treatment, or human-outcome language framed as a sales signal.",
];

const FAQS = [
  {
    q: "What should I check first before buying research peptides?",
    a: "Start with the documentation path: whether the supplier exposes lot-specific paperwork and explains how purity and identity are documented.",
  },
  {
    q: "Is a COA enough before checkout?",
    a: "Not by itself. The COA should be lot-specific, connected to the product under review, and supported by enough method context to make the claim auditable.",
  },
  {
    q: "Is dosing advice a good sign from a research peptide supplier?",
    a: "No. For RUO products, dosing, treatment, or human-outcome language is a compliance red flag, not a quality signal.",
  },
  {
    q: "What checkout details should be clear before payment?",
    a: "The total, shipping expectation, accepted payment network, order identifier, and support path should be clear before funds move.",
  },
  {
    q: "Where should this page send a ready buyer?",
    a: "Send them to the catalog, the current-lot COA checklist, the supplier checklist, and the crypto payment guide.",
  },
];

export default function WhatToCheckBeforeBuyingResearchPeptidesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "What to check before buying research peptides", item: URL },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <AeoHero
          eyebrow="Pre-checkout source-check · research-use-only"
          title="What to check before buying research peptides online."
          answer="Before buying research peptides, verify the supplier's documentation path, not just the product grid. Look for lot-specific paperwork, an HPLC/identity evidence path, clear research-use boundaries, visible shipping/payment terms, and no medical or dosing promises."
          primary={{ href: "/products/?ref=precheckout-checklist", label: "Browse research peptide catalog" }}
          secondary={{ href: "/peptide-supplier-checklist/?ref=precheckout-checklist", label: "Full supplier checklist" }}
        />

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">Five pre-checkout checks</p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
                Use this as the final buyer screen before funds move.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                This page is intentionally narrower than the full supplier checklist: it is the final pass a buyer runs between a product page and checkout.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {PRECHECKS.map(({ icon: Icon, title, body }) => (
                <article key={title} className="rounded-[1.5rem] border border-[#dde6e1] bg-white p-6 shadow-[0_18px_50px_-44px_rgb(15_22_19/40%)]">
                  <Icon className="h-5 w-5 text-[#1e6f58]" />
                  <h2 className="mt-5 font-serif text-[1.35rem] leading-tight tracking-[-0.02em]">{title}</h2>
                  <p className="mt-3 text-[13.5px] leading-7 text-[#5c6762]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[rgb(15_22_19/6%)] bg-[#fafbfa] py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">What to ignore</p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
                A purchase signal is only useful when it can be audited.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                Supplier pages can look polished while the evidence remains thin. Ignore pressure and preference signals until the lot paperwork, method context, and checkout facts are visible.
              </p>
              <Link className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]" href="/current-lot-coa-checklist-research-peptides/?ref=precheckout-ignore">
                Run the current-lot COA checklist
              </Link>
            </div>
            <div className="rounded-[1.5rem] border border-[#dde6e1] bg-white p-6">
              <div className="flex items-center gap-3">
                <Ban className="h-5 w-5 text-[#1e6f58]" />
                <h3 className="font-serif text-[1.55rem] tracking-[-0.02em]">Do not use these as proof</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {IGNORE.map((item) => (
                  <li key={item} className="rounded-[1rem] bg-[#fbfcfb] p-4 text-[13.5px] leading-7 text-[#5c6762]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">What to check on Titan pages</p>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">Follow the path from documentation to order facts.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Product documentation", "Open the catalog page, identify the format, and look for the lot-documentation path before checkout."],
                ["Lab-testing page", "Review the lot-release standard and how COA information is generated or reissued."],
                ["Crypto guide", "Confirm the accepted payment network, order identifier, and support path before sending funds."],
                ["Shipping terms", "Check dispatch and shipping expectations so the order path is clear before payment."],
              ].map(([title, body]) => (
                <article key={title} className="rounded-[1.25rem] border border-[#dde6e1] bg-[#fbfcfb] p-5">
                  <h3 className="font-serif text-[1.35rem] tracking-[-0.02em]">{title}</h3>
                  <p className="mt-2 text-[13.5px] leading-7 text-[#5c6762]">{body}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 rounded-[1.25rem] border border-[#dde6e1] bg-white p-6 text-[13.5px] leading-7 text-[#5c6762]">
              If one check fails, pause before checkout. Request current documentation, use the supplier checklist, or choose a clearer product path rather than relying on a generic purity promise.
            </p>
          </div>
        </section>

        <AeoFaqSection faqs={FAQS} />
        <AeoRelatedLinks
          title="Next steps for a ready buyer."
          links={[
            { href: "/products/?ref=precheckout-related", label: "Browse research peptide catalog", blurb: "Open product pages and verify the documentation path." },
            { href: "/current-lot-coa-checklist-research-peptides/?ref=precheckout-related", label: "Current-lot COA checklist", blurb: "Match the COA to the exact lot under review." },
            { href: "/peptide-supplier-checklist/?ref=precheckout-related", label: "Full supplier checklist", blurb: "Use the deeper supplier scoring guide when you need more context." },
            { href: "/where-to-buy-research-peptides/?ref=precheckout-related", label: "Where to buy research peptides", blurb: "Compare buyer paths and supplier documentation." },
            { href: "/how-to-pay-with-crypto/?ref=precheckout-related", label: "Crypto checkout guide", blurb: "Confirm the payment network and order record before funds move." },
            { href: "/research-peptide-supplier/?ref=precheckout-related", label: "Research peptide supplier guide", blurb: "Compare suppliers by paperwork, method evidence, and RUO boundaries." },
          ]}
        />
        <AeoRuBoundary />
      </main>
      <Footer />
    </>
  );
}
