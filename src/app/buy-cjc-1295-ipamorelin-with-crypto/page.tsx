import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bitcoin, CircleDollarSign, FileSearch, Layers, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Buy CJC-1295 + Ipamorelin with Crypto | Blend Vial, COA-Documented | Titan Peptide Lab";
const DESCRIPTION =
  "Buy the CJC-1295 + Ipamorelin research blend with crypto (BTC, USDC, SOL). A pre-blended 5mg/5mg lyophilized vial at $119.99 — with a lot-matched COA that confirms both peptides' identity. Research use only, not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/buy-cjc-1295-ipamorelin-with-crypto/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/buy-cjc-1295-ipamorelin-with-crypto/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const STEPS = [
  {
    icon: Layers,
    title: "What the blend actually is",
    body: "Titan stocks CJC-1295 (no DAC) pre-blended with Ipamorelin in a single 5mg / 5mg lyophilized vial — two distinct GH-secretagogue research peptides combined in one unit so you reconstitute once rather than mixing two vials. Both compounds appear in GHRH-receptor and GH-secretagogue research literature. It is supplied strictly as a research reagent, reconstituted with bacteriostatic water before in-vitro work.",
    href: "/products/cjc-1295-ipamorelin/?ref=cjcipa-crypto",
    cta: "View the blend",
  },
  {
    icon: ShieldCheck,
    title: "Why a blend changes what you verify",
    body: "With a single-peptide vial a COA confirms one identity. With a blend, the documentation has to account for both — so the lot-matched release sheet covers the CJC-1295 and Ipamorelin components against an HPLC ≥99% main-peak target plus mass-spec identity confirmation, tied to the lot code on the vial you receive. That is the screen that matters when you pay in crypto, because the paperwork — not a chargeback — is your protection.",
    href: "/how-to-verify-peptide-quality-coa/?ref=cjcipa-crypto",
    cta: "How to read the COA",
  },
  {
    icon: CircleDollarSign,
    title: "Pay in USDC to fix the total",
    body: "On a $119.99 blend, the difference between coins matters. Paying in a stablecoin like USDC holds the order at exactly the quoted figure — no drift between the cart and the on-chain confirmation. USDC on Solana settles fast with low network fees, which is the usual choice for a mid-ticket research order you want to land at the displayed price.",
    href: "/pay-for-peptides-with-usdc-crypto/?ref=cjcipa-crypto",
    cta: "Why USDC at checkout",
  },
  {
    icon: Bitcoin,
    title: "Or pay in BTC or SOL",
    body: "Bitcoin and Solana are both accepted. The accepting network and wallet address are shown before payment and an order ID is logged with support first. BTC carries price drift between cart and confirmation, so the amount you send is quoted at checkout time; SOL settles quickly with low fees. Payment is confirmed on-chain before the order is dispatched.",
    href: "/how-to-pay-with-crypto/?ref=cjcipa-crypto",
    cta: "Full crypto checkout guide",
  },
];

const FAQS = [
  {
    q: "How much is CJC-1295 + Ipamorelin and which coins can I pay with?",
    a: "The pre-blended CJC-1295 + Ipamorelin vial (5mg / 5mg lyophilized) is listed at $119.99. Checkout is crypto-only — Bitcoin (BTC), USDC, or Solana (SOL). Research-quantity discounts apply at checkout: FIRST10 for 10% off a first order, BULK15 for 15% off three or more items, TITAN20 for 20% off orders over $250, and VIP25 for the 25% returning-researcher tier. The displayed total is what the crypto payment settles at.",
  },
  {
    q: "Why is it sold as a pre-blend instead of two separate vials?",
    a: "CJC-1295 (no DAC) and Ipamorelin are frequently studied as a secretagogue pair in the research literature, so Titan supplies them pre-blended in one 5mg/5mg lyophilized vial. That means a single reconstitution step instead of mixing two vials. They remain two distinct peptides — the lot documentation accounts for both components.",
  },
  {
    q: "How does the COA work for a two-peptide blend?",
    a: "The lot-matched release sheet is keyed to the lot code printed on the vial you receive and accounts for both blend components against an HPLC ≥99% main-peak purity target with mass-spec identity confirmation, rather than a single-analyte spec sheet reused across batches. Because crypto payments can't be reversed, that per-lot documentation is the buyer protection — see the COA guide for how to read it.",
  },
  {
    q: "Should I pay with USDC, BTC, or SOL?",
    a: "Paying in USDC fixes the order total at the quoted $119.99 with no price drift between cart and confirmation, and USDC on Solana settles fast with low fees — the usual choice on a mid-ticket order. BTC is accepted but its price can move between cart and payment, so the amount is quoted at checkout time. SOL also settles quickly. The accepting network and wallet address are shown before you pay.",
  },
  {
    q: "Is buying research peptides with crypto before they ship safe?",
    a: "Crypto payments can't be reversed, so the supplier's documentation is what matters, not chargeback protection. With Titan an order ID is recorded with support before payment, payment is confirmed on-chain before dispatch, each order ships with a lot-matched release sheet, and unopened items are returnable within 14 days. Many new buyers start with a single vial to vet the source.",
  },
  {
    q: "Is CJC-1295 + Ipamorelin approved for human use?",
    a: "No. The research-grade CJC-1295 + Ipamorelin blend sold as a reagent is not approved by the FDA or any regulator for human use. Titan supplies it strictly as a research-use-only compound for in-vitro laboratory work — not for human or animal consumption, and not for diagnostic, therapeutic, or preventative use. No human-use, dosing, or efficacy claims are made.",
  },
];

export default function BuyCjcIpamorelinWithCryptoPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Buy CJC-1295 + Ipamorelin with Crypto", item: "/buy-cjc-1295-ipamorelin-with-crypto/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                CJC-1295 + Ipamorelin · 5mg/5mg blend · crypto checkout · research use only
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.55rem,6vw,5.2rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                Buy CJC-1295 + Ipamorelin with crypto.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                Titan is crypto-only — BTC, USDC, or SOL — and the CJC-1295 + Ipamorelin blend is a single pre-mixed research vial, which changes what you verify before you pay. This page walks the checkout for a two-peptide blend: how the lot documentation covers both components, why a stablecoin fixes the $119.99 total, and how on-chain confirmation works — before you spend anything.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/cjc-1295-ipamorelin/?ref=cjcipa-crypto-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View the blend — $119.99
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/buy-peptides-with-crypto/?ref=cjcipa-crypto-hero"
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
            <div className="grid gap-5 md:grid-cols-2">
              {STEPS.map(({ icon: Icon, title, body, href, cta }) => (
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
                Why crypto-only, on a blend
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
                The coin you pick decides what you send.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                Card processors routinely de-risk research-chemical vendors, so crypto-only checkout removes a layer of cost and refusal — part of why the blend lands at $119.99 rather than a card-marked-up figure. On a mid-ticket order the practical question is which coin: a stablecoin like USDC holds the total at exactly the quoted amount, while BTC can drift between the cart and the on-chain confirmation. Because the payment can&apos;t be charged back, the lot-matched COA — which on this product covers both the CJC-1295 and Ipamorelin components — is the protection that matters. Verify the documentation first, then settle in the coin that fixes your total.
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["Product", "CJC-1295 (no DAC) + Ipamorelin pre-blend."],
                ["Unit", "5mg / 5mg lyophilized, one sealed vial."],
                ["Price", "$119.99; tiered codes at checkout."],
                ["Coins accepted", "BTC, USDC, SOL — network shown before payment."],
                ["Best for fixed total", "USDC (stablecoin, no drift; fast/low-fee on Solana)."],
                ["COA path", "Lot-matched sheet covering both blend components."],
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
              <li><Link className="hover:underline" href="/where-to-buy-cjc-1295-ipamorelin/?ref=cjcipa-crypto">Where to buy CJC-1295 + Ipamorelin — sourcing checklist →</Link></li>
              <li><Link className="hover:underline" href="/cjc-1295-vs-ipamorelin/?ref=cjcipa-crypto">CJC-1295 vs Ipamorelin →</Link></li>
              <li><Link className="hover:underline" href="/cjc-1295-ipamorelin-research-guide/?ref=cjcipa-crypto">CJC-1295 + Ipamorelin research guide →</Link></li>
              <li><Link className="hover:underline" href="/buy-peptides-with-crypto/?ref=cjcipa-crypto">Buy peptides with crypto — the hub →</Link></li>
              <li><Link className="hover:underline" href="/pay-for-peptides-with-usdc-crypto/?ref=cjcipa-crypto">Pay for peptides with USDC →</Link></li>
              <li><Link className="hover:underline" href="/how-to-verify-peptide-quality-coa/?ref=cjcipa-crypto">How to verify peptide quality from a COA →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Ready to source the blend?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the product page for current pricing, the 5mg/5mg blend format, lot documentation, and crypto checkout — or read the crypto hub first to confirm which coin settles your total cleanly.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/cjc-1295-ipamorelin/?ref=cjcipa-crypto-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                CJC-1295 + Ipamorelin — $119.99
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/start/?ref=cjcipa-crypto-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
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
