import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileSearch, FlaskConical, ShieldCheck, Truck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd, ProductListJsonLd } from "@/components/site/json-ld";

const TITLE = "Where to Buy Research Peptides Online | Titan Peptide Lab";
const DESCRIPTION =
  "Where researchers can buy research peptides online with lot-matched COAs, HPLC purity targets, crypto checkout, discreet shipping, and research-use labeling.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/where-to-buy-research-peptides/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/where-to-buy-research-peptides/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const BUYING_PATHS = [
  {
    icon: FileSearch,
    title: "Start with documentation",
    body: "Before you compare prices, confirm whether the supplier exposes a lot release sheet, HPLC purity target, and identity confirmation path.",
    href: "/lab-testing/?ref=where-buy",
    cta: "Review testing workflow",
  },
  {
    icon: FlaskConical,
    title: "Pick by research format",
    body: "Nasal sprays reduce handling friction; vials and blends fit buyers who need concentrated lyophilized formats. Choose by protocol needs, not packaging hype.",
    href: "/products/?ref=where-buy",
    cta: "Open catalog",
  },
  {
    icon: ShieldCheck,
    title: "Check research-use boundaries",
    body: "Avoid suppliers that use medical treatment claims, dosing advice, or fake neutral testimonials to push a sale. That language creates risk and weakens trust.",
    href: "/peptide-supplier-checklist/?ref=where-buy",
    cta: "Run supplier checklist",
  },
  {
    icon: Truck,
    title: "Confirm fulfillment before paying",
    body: "Shipping rate, dispatch target, payment network, and order documentation should be visible before the payment step.",
    href: "/how-to-pay-with-crypto/?ref=where-buy",
    cta: "See crypto checkout",
  },
];

const FAQS = [
  {
    q: "Where can I buy research peptides online?",
    a: "Research buyers should use suppliers that clearly separate laboratory research use from medical use and provide lot-matched documentation, HPLC purity testing, identity confirmation, shipping expectations, and clear checkout terms. Titan Peptide Lab sells research-use peptide nasal sprays, vials, and stacks with a visible COA workflow and crypto-only checkout.",
  },
  {
    q: "What is the safest way to compare research peptide suppliers?",
    a: "Compare the exact lot documentation, test methods, research-use disclaimers, fulfillment terms, and payment flow. Price alone is a poor screen because a generic COA or unclear lot record can make a cheap order unusable for serious research documentation.",
  },
  {
    q: "Can I buy research peptides with crypto?",
    a: "Yes. Titan Peptide Lab uses crypto-only checkout and supports BTC, ETH, USDC, and SOL. The checkout flow shows the network and wallet details before payment confirmation.",
  },
  {
    q: "Is it safe to pay a research peptide supplier in crypto before they ship?",
    a: "Crypto payments can't be reversed, so the right screen is the supplier's paper trail, not chargeback protection. With Titan an order ID is recorded with support before any payment is sent, most new buyers start with a single unit to vet the source, and payment is confirmed on-chain before dispatch. Every order ships with the lot-matched in-house release sheet referenced to the lot code on the bottle — a clearer paper trail than a generic stock spec sheet. Unopened items are returnable within 14 days and support replies within 24–48h.",
  },
  {
    q: "Are Titan products for human use?",
    a: "No. Titan Peptide Lab products are sold strictly for in-vitro laboratory research. They are not for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
];

export default function WhereToBuyResearchPeptidesPage() {
  return (
    <>
      <ProductListJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Where to Buy Research Peptides", item: "/where-to-buy-research-peptides/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Research peptide buyer path
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                Where to buy research peptides online without guessing on the batch.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                Buyers searching for research peptides usually find the same problem: polished product grids, vague COA claims, and no easy way to know whether the paperwork matches the bottle. This page gives the clean path: verify, choose format, then checkout.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/start/?ref=where-buy-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  Start with 3 recommended paths
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products/?ref=where-buy-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  Browse all products
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {BUYING_PATHS.map(({ icon: Icon, title, body, href, cta }) => (
                <Link key={title} href={href} className="group flex h-full flex-col rounded-[1.5rem] border border-[#dde6e1] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#1e6f58] hover:shadow-[0_18px_60px_-42px_rgb(15_22_19/45%)]">
                  <Icon className="h-5 w-5 text-[#1e6f58]" />
                  <h2 className="mt-5 font-serif text-[1.55rem] leading-tight tracking-[-0.02em] group-hover:text-[#1e6f58]">
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
                Built for buyers who want the documentation first.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                Titan’s site is structured around the questions real buyers ask in forums and DMs: what is the lot, how is purity measured, which checkout networks are accepted, how fast does it ship, and where is the research-use boundary?
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["COA path", "Specimen release sheet and lot-matched documentation workflow."],
                ["Purity target", "HPLC ≥99% internal release target, identity confirmation by MS."],
                ["Payment", "BTC, ETH, USDC, and SOL with crypto-only checkout."],
                ["Fulfillment", "Plain parcel labeling, dispatch target, tracking after packout."],
              ].map(([term, desc]) => (
                <div key={term} className="rounded-[1.25rem] border border-[#dde6e1] bg-white p-5">
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
              Ready to compare real product pages?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the short start page if you want three recommended routes, or open the full catalog if you already know the compound and format you need.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/start/?ref=where-buy-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                Start here
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/peptide-supplier-checklist/?ref=where-buy-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
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
