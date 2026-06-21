import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CreditCard, FileSearch, FlaskConical, Tag, Truck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "BPC-157 for Sale | 5mg Vial or Nasal Spray, COA-Documented | Titan Peptide Lab";
const DESCRIPTION =
  "BPC-157 for sale in two research formats — a 5mg lyophilized vial ($54.99) or a 15mL intranasal spray ($64.99). Lot-matched COA, HPLC ≥99% purity target, crypto-only checkout, tiered research-quantity discounts. Research use only, not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/bpc-157-for-sale/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/bpc-157-for-sale/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const TERMS = [
  {
    icon: FlaskConical,
    title: "Two formats actually ship",
    body: "Titan lists BPC-157 (Body Protection Compound 157) in two research formats: a 5mg lyophilized vial you reconstitute with bacteriostatic water for subcutaneous research protocols, and a 15mL intranasal spray dosed at 500mcg per actuation for intranasal work. Both are the same peptide cited across angiogenesis, tendon-fibroblast, and GI-mucosa research literature — the choice is the delivery format your protocol calls for, not a quality difference.",
    href: "/bpc-157-nasal-spray-vs-vial/?ref=bpc-sale",
    cta: "Vial vs nasal spray",
  },
  {
    icon: Tag,
    title: "The price and the quantity tiers",
    body: "The 5mg BPC-157 vial is listed at $54.99 and the 15mL nasal spray at $64.99. FIRST10 takes 10% off a first order; BULK15 takes 15% off three or more items; TITAN20 takes 20% off orders over $250; VIP25 is the 25% returning-researcher tier. Codes apply at checkout — the figure on screen is the figure the order settles at, with no fake countdown timers.",
    href: "/products/bpc-157-vial/?ref=bpc-sale",
    cta: "View the 5mg vial",
  },
  {
    icon: FileSearch,
    title: "The paperwork in the box",
    body: "Every unit ships with a lot-matched release sheet keyed to the exact lot code printed on the vial or spray bottle — not a generic spec sheet reused across batches. It carries an HPLC main-peak purity result against a ≥99% internal target plus mass-spec identity confirmation, so the documentation describes the unit you actually receive rather than an idealized batch.",
    href: "/how-to-verify-peptide-quality-coa/?ref=bpc-sale",
    cta: "How to read the COA",
  },
  {
    icon: CreditCard,
    title: "How checkout works",
    body: "Titan is crypto-only — BTC, USDC, or SOL. The accepting network and wallet address are shown before payment and an order ID is logged with support first. Paying in a stablecoin like USDC holds the total at exactly the quoted figure, so the amount you send matches the cart even if BTC drifts between cart and confirmation.",
    href: "/buy-bpc-157-with-bitcoin/?ref=bpc-sale",
    cta: "Crypto checkout walkthrough",
  },
  {
    icon: Truck,
    title: "Fulfillment and returns",
    body: "Shipping rate, dispatch target, and plain-parcel labeling are visible before you commit. Payment is confirmed on-chain before anything is dispatched, and because crypto can't be charged back, the lot-matched documentation is the buyer protection. Unopened items are returnable within 14 days.",
    href: "/shipping-faq/?ref=bpc-sale",
    cta: "Shipping & returns FAQ",
  },
];

const FAQS = [
  {
    q: "How much does BPC-157 cost at Titan Peptide Lab?",
    a: "The 5mg lyophilized BPC-157 vial is listed at $54.99 and the 15mL BPC-157 nasal spray (500mcg per actuation) at $64.99. Research-quantity discounts apply at checkout: FIRST10 for 10% off a first order, BULK15 for 15% off three or more items, TITAN20 for 20% off orders over $250, and VIP25 for the 25% returning-researcher tier. The displayed total is what the crypto payment settles at.",
  },
  {
    q: "Should I buy the BPC-157 vial or the nasal spray?",
    a: "The 5mg lyophilized vial is the standard format for subcutaneous research protocols and gives more total milligrams per unit, reconstituted with bacteriostatic water before in-vitro use. The 15mL intranasal spray is pre-formatted for intranasal research at 500mcg per actuation with no reconstitution step. The compound is identical; the comparison page lays out the format trade-offs so you can match the one your protocol requires.",
  },
  {
    q: "Does the BPC-157 come with a certificate of analysis?",
    a: "Yes. Every order ships with a lot-matched release sheet tied to the lot code on the unit you receive, showing an HPLC main-peak purity result against a ≥99% internal target and a mass-spec identity confirmation. It is a per-lot document rather than a stock spec sheet reused across batches, so it describes the specific material in hand.",
  },
  {
    q: "How do I pay for BPC-157?",
    a: "Checkout is crypto-only — Bitcoin (BTC), USDC, or Solana (SOL). The accepting network and wallet address are shown before payment and an order ID is logged with support beforehand. Paying in USDC fixes the order total at the quoted amount. Payment is confirmed on-chain before the order is dispatched.",
  },
  {
    q: "Is BPC-157 approved or available for human use?",
    a: "No. Research-grade BPC-157 sold as a reagent is not approved by the FDA or any regulator for human use. Titan supplies it strictly as a research-use-only compound for in-vitro laboratory work — not for human or animal consumption, and not for diagnostic, therapeutic, or preventative use. No human-use, dosing, or efficacy claims are made.",
  },
  {
    q: "Can I buy BPC-157 and TB-500 together?",
    a: "Both are stocked, and the two are frequently paired in academic protocol literature. Titan lists them as separate SKUs — the 5mg BPC-157 vial and the 5mg TB-500 vial — and the BPC-157 / TB-500 stack page explains how the two compounds are discussed together in the research, along with the combined discount tiers that apply when you order more than one item.",
  },
];

export default function Bpc157ForSalePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "BPC-157 for Sale", item: "/bpc-157-for-sale/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                BPC-157 · vial or nasal spray · research use only
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                BPC-157 for sale, in the format your protocol needs.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                Most &ldquo;BPC-157 for sale&rdquo; listings show one render and a price. This page is the opposite: both research formats Titan actually stocks, what each costs, the discount tiers, how the lot documentation works, and how crypto checkout settles — before you spend anything. Titan supplies Body Protection Compound 157 strictly for in-vitro laboratory research as a 5mg lyophilized vial or a 15mL intranasal spray.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/bpc-157-vial/?ref=bpc-sale-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  BPC-157 vial — $54.99
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products/bpc-157-nasal-spray/?ref=bpc-sale-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  Nasal spray — $64.99
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
                Two SKUs, one standard of documentation.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                BPC-157 sells in the research-reagent market, not as a commercial medicine, so a clean product grid tells you almost nothing about what arrives. Titan exposes the variables researchers actually weigh: which format (vial vs spray), the per-lot documentation, the checkout networks, the discount tiers, and where the research-use boundary sits. The 5mg vial carries more total peptide per unit for subcutaneous protocol work; the 15mL spray is pre-formatted for intranasal research at 500mcg per actuation. Both carry the same ≥99% HPLC purity target and a lot-matched release sheet. If your work pairs BPC-157 with TB-500, the stack page covers how the two are discussed together in the literature.
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["Compound", "BPC-157 (Body Protection Compound 157) research peptide."],
                ["Vial", "5mg lyophilized powder, $54.99 — SC research format."],
                ["Nasal spray", "15mL · 500mcg/actuation, $64.99 — intranasal format."],
                ["Discount tiers", "FIRST10 −10% · BULK15 −15% · TITAN20 −20% over $250 · VIP25 −25%."],
                ["COA path", "Lot-matched release sheet tied to the code on the unit."],
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
              <li><Link className="hover:underline" href="/where-to-buy-bpc-157/?ref=bpc-sale">Where to buy BPC-157 — sourcing checklist →</Link></li>
              <li><Link className="hover:underline" href="/bpc-157-nasal-spray-vs-vial/?ref=bpc-sale">BPC-157 nasal spray vs vial →</Link></li>
              <li><Link className="hover:underline" href="/tb-500-vs-bpc-157/?ref=bpc-sale">TB-500 vs BPC-157 →</Link></li>
              <li><Link className="hover:underline" href="/bpc-157-tb-500-stack/?ref=bpc-sale">The BPC-157 / TB-500 research pairing →</Link></li>
              <li><Link className="hover:underline" href="/how-to-verify-peptide-quality-coa/?ref=bpc-sale">How to verify peptide quality from a COA →</Link></li>
              <li><Link className="hover:underline" href="/how-to-pay-with-crypto/?ref=bpc-sale">How to pay with crypto →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Sourcing BPC-157 for research?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the product pages for current pricing, format, lot documentation, and crypto checkout — or read the vial-vs-spray comparison first to confirm which research format your protocol needs.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/bpc-157-vial/?ref=bpc-sale-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                BPC-157 vial — $54.99
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/start/?ref=bpc-sale-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
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
