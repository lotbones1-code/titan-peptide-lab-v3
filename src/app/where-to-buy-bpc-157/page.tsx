import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CreditCard, FileSearch, FlaskConical, Truck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Where to Buy BPC-157 | Vial & Nasal Spray | Research Use Only | Titan Peptide Lab";
const DESCRIPTION =
  "Where to buy BPC-157 for laboratory research — lyophilized vial or ready-to-use nasal spray. A documentation-first buyer path with lot-matched COAs, HPLC purity targets, crypto checkout, and discreet shipping. BPC-157 is a synthetic research peptide supplied strictly for research use — not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/where-to-buy-bpc-157/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/where-to-buy-bpc-157/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const STEPS = [
  {
    icon: FileSearch,
    title: "Confirm the lot documentation",
    body: "BPC-157 is a pentadecapeptide of gastric origin that appears across the angiogenesis and GI-mucosa literature. It is one of the most-counterfeited research peptides, so the real screen when buying is the paperwork: confirm a lot-matched release sheet referenced to the code on the unit, not a generic stock spec sheet.",
    href: "/coa-verified-peptide-supplier/?ref=buy-bpc157",
    cta: "How to verify a COA",
  },
  {
    icon: FlaskConical,
    title: "Pick the format your design needs",
    body: "Titan stocks BPC-157 in two formats: a 5mg lyophilized vial you reconstitute, and a ready-to-use nasal spray at a fixed concentration. The vial gives concentration control; the spray removes a reconstitution step. The spray-vs-vial page breaks down which fits which study.",
    href: "/bpc-157-nasal-spray-vs-vial/?ref=buy-bpc157",
    cta: "Spray vs vial",
  },
  {
    icon: CreditCard,
    title: "Know the checkout terms",
    body: "Titan uses crypto-only checkout (BTC, ETH, USDC, SOL). The network and wallet are shown before payment, and an order ID is recorded with support before any payment is sent. For a small first order, USDC keeps the total stable.",
    href: "/how-to-pay-with-crypto/?ref=buy-bpc157",
    cta: "See crypto checkout",
  },
  {
    icon: Truck,
    title: "Confirm fulfillment before paying",
    body: "Shipping rate, dispatch target, and plain-parcel labeling should be visible up front. Crypto payments can't be reversed, so the supplier's paper trail is the screen — not chargeback protection. Unopened items are returnable within 14 days.",
    href: "/shipping-faq/?ref=buy-bpc157",
    cta: "Shipping FAQ",
  },
];

const FAQS = [
  {
    q: "Where can I buy BPC-157 for research?",
    a: "Buy from a supplier that clearly separates laboratory research use from human use and provides a lot-matched release sheet, HPLC purity target, identity confirmation, visible shipping terms, and clear checkout. Titan Peptide Lab supplies research-use BPC-157 as both a 5mg lyophilized vial and a ready-to-use nasal spray, each with a lot-matched documentation workflow and crypto-only checkout. It is sold strictly for in-vitro laboratory research, not for human use.",
  },
  {
    q: "Should I buy BPC-157 as a vial or a nasal spray?",
    a: "It depends on the study design. The 5mg lyophilized vial lets a researcher reconstitute to a chosen concentration and gives maximum flexibility; the ready-to-use nasal spray ships at a fixed concentration and removes a reconstitution and dilution step. The BPC-157 nasal spray vs vial comparison walks through the trade-offs.",
  },
  {
    q: "How do I avoid counterfeit BPC-157?",
    a: "BPC-157 is widely counterfeited, so the screen is documentation, not price. Look for a lot-matched release sheet tied to the exact code on the unit, a stated HPLC purity target, and identity confirmation — and avoid any supplier that attaches treatment, healing, or recovery claims, which is a compliance red flag rather than a feature.",
  },
  {
    q: "What purity does Titan's BPC-157 target?",
    a: "Titan's internal release target is HPLC ≥99% with identity confirmation by mass spectrometry, documented on a lot-matched release sheet referenced to the code on the unit. The lab-testing page explains the workflow.",
  },
  {
    q: "Is it safe to pay for BPC-157 with crypto before shipping?",
    a: "Crypto payments can't be reversed, so the right screen is the supplier's documentation, not chargeback protection. With Titan an order ID is recorded with support before payment, many new buyers start with a single unit to vet the source, and payment is confirmed on-chain before dispatch. Every order ships with a lot-matched release sheet, and unopened items are returnable within 14 days.",
  },
  {
    q: "Is BPC-157 for human use?",
    a: "No. Titan Peptide Lab's BPC-157 is sold strictly for in-vitro laboratory research. It is not for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
];

export default function WhereToBuyBpc157Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Where to Buy BPC-157", item: "/where-to-buy-bpc-157/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                BPC-157 buyer path · research use only
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                Where to buy BPC-157 — vial or spray — without guessing on the batch.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                BPC-157 is a pentadecapeptide studied across the angiogenesis and GI-mucosa literature — and one of the most-counterfeited research peptides, which is exactly why documentation is where the difference between sources shows up. The right screen is documentation first: confirm the lot release sheet and purity target, pick the format your design needs, then check the checkout and shipping terms. Titan supplies research-use BPC-157 as both a lyophilized vial and a ready-to-use nasal spray with a visible COA workflow.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/bpc-157-vial/?ref=buy-bpc157-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  BPC-157 vial
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products/bpc-157-nasal-spray/?ref=buy-bpc157-hero"
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
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {STEPS.map(({ icon: Icon, title, body, href, cta }) => (
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

        <section className="border-y border-[rgb(15_22_19/6%)] bg-[#fafbfa] py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                What Titan exposes before checkout
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
                Documentation-first, for BPC-157 buyers who vet the source.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                The site is built around the questions BPC-157 buyers actually ask: what is the lot, how is purity measured, which format fits the design, which checkout networks are accepted, and where is the research-use boundary?
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["Formats", "5mg lyophilized vial (reconstitute) and ready-to-use nasal spray."],
                ["COA path", "Lot-matched release sheet tied to the code on the unit."],
                ["Purity target", "HPLC ≥99% internal release target, identity confirmation by MS."],
                ["Payment", "Crypto-only checkout: BTC, ETH, USDC, SOL."],
              ].map(([term, desc]) => (
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
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] tracking-[-0.035em]">Before you check out.</h2>
            <ul className="mt-7 space-y-3 text-[14px] leading-7 text-[#1e6f58]">
              <li><Link className="hover:underline" href="/bpc-157-nasal-spray-vs-vial/?ref=buy-bpc157">BPC-157 nasal spray vs vial →</Link></li>
              <li><Link className="hover:underline" href="/tb-500-vs-bpc-157/?ref=buy-bpc157">TB-500 vs BPC-157 →</Link></li>
              <li><Link className="hover:underline" href="/blog/bpc-157-nasal-spray-complete-guide/?ref=buy-bpc157">BPC-157 nasal spray complete guide →</Link></li>
              <li><Link className="hover:underline" href="/coa-verified-peptide-supplier/?ref=buy-bpc157">COA-verified peptide supplier →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-bpc-157-nasal-spray/?ref=buy-bpc157">Where to buy BPC-157 nasal spray →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Ready to buy BPC-157 for research?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the product pages for current pricing, format, lot documentation, and checkout — or start with the recommended buyer routes.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/bpc-157-vial/?ref=buy-bpc157-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                BPC-157 vial
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/start/?ref=buy-bpc157-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
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
