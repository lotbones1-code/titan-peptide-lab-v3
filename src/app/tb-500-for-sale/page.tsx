import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CreditCard, FileSearch, FlaskConical, Tag, Truck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "TB-500 for Sale | 5mg Research Vial, COA-Documented | Titan Peptide Lab";
const DESCRIPTION =
  "TB-500 (Thymosin Beta-4 fragment) for sale as a 5mg lyophilized research vial ($89.99) — lot-matched COA, HPLC ≥99% purity target, crypto-only checkout, and tiered research-quantity discounts. Research use only, not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/tb-500-for-sale/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/tb-500-for-sale/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const TERMS = [
  {
    icon: FlaskConical,
    title: "What actually ships",
    body: "One 5mg lyophilized TB-500 vial per unit — a dry, sealed powder reconstituted with bacteriostatic water before in-vitro work, not a pre-mixed solution. TB-500 is the active fragment of Thymosin Beta-4, cited across actin-sequestration and angiogenesis research literature and frequently paired with BPC-157 in academic protocol literature. It is supplied strictly as a research reagent.",
    href: "/products/tb-500-vial/?ref=tb500-sale",
    cta: "View the product page",
  },
  {
    icon: Tag,
    title: "The price and the quantity tiers",
    body: "A single 5mg TB-500 vial is listed at $89.99. FIRST10 takes 10% off a first order; BULK15 takes 15% off three or more items; TITAN20 takes 20% off orders over $250; VIP25 is the 25% returning-researcher tier. The codes are entered at checkout — the price on screen is the price the order settles at, with no manufactured scarcity.",
    href: "/start/?ref=tb500-sale",
    cta: "Start an order",
  },
  {
    icon: FileSearch,
    title: "The paperwork that comes with it",
    body: "Every vial ships with a lot-matched release sheet referenced to the exact lot code printed on the vial — not a generic spec sheet reused across batches. It carries an HPLC main-peak purity result against a ≥99% internal target plus mass-spec identity confirmation, so the documentation describes the unit you actually receive.",
    href: "/how-to-verify-peptide-quality-coa/?ref=tb500-sale",
    cta: "How to read the COA",
  },
  {
    icon: CreditCard,
    title: "How checkout works",
    body: "Titan is crypto-only — BTC, USDC, or SOL. The network and wallet address appear before payment, and an order ID is recorded with support first. Paying in a stablecoin like USDC holds the total at exactly the quoted figure, so the amount you send matches the cart regardless of BTC drift.",
    href: "/buy-tb-500-with-crypto/?ref=tb500-sale",
    cta: "Crypto checkout walkthrough",
  },
  {
    icon: Truck,
    title: "Fulfillment and returns",
    body: "Shipping rate, dispatch target, and plain-parcel labeling are visible before you commit. Payment is confirmed on-chain before anything is dispatched, and because crypto can't be charged back, the lot-matched documentation is the protection. Unopened items are returnable within 14 days.",
    href: "/shipping-faq/?ref=tb500-sale",
    cta: "Shipping & returns FAQ",
  },
];

const FAQS = [
  {
    q: "How much does TB-500 cost at Titan Peptide Lab?",
    a: "A single 5mg lyophilized TB-500 research vial is listed at $89.99. Research-quantity discounts apply at checkout: FIRST10 for 10% off a first order, BULK15 for 15% off three or more items, TITAN20 for 20% off orders over $250, and VIP25 for the 25% returning-researcher tier. The displayed total is what the crypto payment settles at.",
  },
  {
    q: "What form is the TB-500 sold in?",
    a: "It ships as a 5mg lyophilized (freeze-dried) powder in a sealed vial, reconstituted with bacteriostatic water before in-vitro laboratory use. It is not supplied as a pre-mixed solution and is not formulated, labeled, or intended for human or animal consumption. It is a research-use-only reagent.",
  },
  {
    q: "Does the TB-500 come with a certificate of analysis?",
    a: "Yes. Every order ships with a lot-matched release sheet tied to the lot code on the vial you receive, showing an HPLC main-peak purity result against a ≥99% internal target and a mass-spec identity confirmation. This is a per-lot document rather than a stock spec sheet reused across batches, so it describes the specific material in hand.",
  },
  {
    q: "How do I pay for TB-500?",
    a: "Checkout is crypto-only — Bitcoin (BTC), USDC, or Solana (SOL). The accepting network and wallet address are shown before payment and an order ID is logged with support beforehand. Paying in USDC fixes the order total at the quoted amount. Payment is confirmed on-chain before the order is dispatched.",
  },
  {
    q: "Is TB-500 approved or available for human use?",
    a: "No. Research-grade TB-500 sold as a reagent is not approved by the FDA or any regulator for human use. Titan supplies it strictly as a research-use-only compound for in-vitro laboratory work — not for human or animal consumption, and not for diagnostic, therapeutic, or preventative use. No human-use, dosing, or efficacy claims are made.",
  },
  {
    q: "Why is TB-500 often bought alongside BPC-157?",
    a: "The two compounds are frequently paired in academic protocol literature, which is why researchers often source them together. Titan lists them as separate SKUs — the 5mg TB-500 vial at $89.99 and the 5mg BPC-157 vial at $54.99 — and the BPC-157 / TB-500 stack page explains how they are discussed together in the research. Ordering more than one item also unlocks the BULK15 tier.",
  },
];

export default function Tb500ForSalePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "TB-500 for Sale", item: "/tb-500-for-sale/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                TB-500 · 5mg research vial · research use only
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                TB-500 for sale, with the paperwork in the box.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                Most &ldquo;TB-500 for sale&rdquo; listings show a price and a render and stop there. This page is the opposite: exactly what ships, what it costs, the discount tiers, how the lot documentation works, and how crypto checkout settles — before you spend anything. Titan stocks TB-500, the Thymosin Beta-4 active fragment, as a 5mg lyophilized vial supplied strictly for in-vitro laboratory research.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/tb-500-vial/?ref=tb500-sale-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View TB-500 — $89.99
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/buy-tb-500-with-crypto/?ref=tb500-sale-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  How crypto checkout works
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {TERMS.map(({ icon: Icon, title, body, href, cta }) => (
                <Link
                  key={title}
                  href={href}
                  className="group flex h-full flex-col rounded-[1.5rem] border border-[#dde6e1] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#1e6f58] hover:shadow-[0_18px_60px_-42px_rgb(15_22_19/45%)]"
                >
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
                The offer, in plain terms
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
                One vial, one lot sheet, one price.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                TB-500 is sold in the research-reagent market, not as a commercial medicine, so a clean product grid tells you almost nothing about what you&apos;ll receive. Titan lists a single SKU — a 5mg lyophilized TB-500 vial at $89.99 — and exposes the variables researchers actually weigh: the format, the per-lot documentation, the checkout networks, the discount tiers, and where the research-use boundary sits. As the active fragment of Thymosin Beta-4, TB-500 appears in actin-sequestration and angiogenesis literature and is frequently studied alongside BPC-157; the stack page covers that pairing. The tiered codes reward research quantity rather than hiding the real cost behind a fake &ldquo;sale.&rdquo;
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["Compound", "TB-500 — Thymosin Beta-4 active fragment."],
                ["Unit", "5mg lyophilized powder, one sealed vial."],
                ["List price", "$89.99 per vial; tiered codes at checkout."],
                ["Discount tiers", "FIRST10 −10% · BULK15 −15% · TITAN20 −20% over $250 · VIP25 −25%."],
                ["COA path", "Lot-matched release sheet tied to the code on the vial."],
                ["Checkout", "Crypto-only — BTC, USDC, SOL; on-chain confirm before dispatch."],
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
              <li><Link className="hover:underline" href="/where-to-buy-tb-500/?ref=tb500-sale">Where to buy TB-500 — sourcing checklist →</Link></li>
              <li><Link className="hover:underline" href="/tb-500-vs-bpc-157/?ref=tb500-sale">TB-500 vs BPC-157 →</Link></li>
              <li><Link className="hover:underline" href="/bpc-157-tb-500-stack/?ref=tb500-sale">The BPC-157 / TB-500 research pairing →</Link></li>
              <li><Link className="hover:underline" href="/buy-tb-500-with-crypto/?ref=tb500-sale">Buy TB-500 with crypto →</Link></li>
              <li><Link className="hover:underline" href="/how-to-verify-peptide-quality-coa/?ref=tb500-sale">How to verify peptide quality from a COA →</Link></li>
              <li><Link className="hover:underline" href="/how-to-pay-with-crypto/?ref=tb500-sale">How to pay with crypto →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Sourcing TB-500 for research?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the TB-500 product page for current pricing, vial size, lot documentation, and crypto checkout — or read the TB-500 vs BPC-157 comparison first to confirm which compound your protocol calls for.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/tb-500-vial/?ref=tb500-sale-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                TB-500 — $89.99
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/start/?ref=tb500-sale-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
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
