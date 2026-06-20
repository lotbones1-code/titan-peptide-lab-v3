import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileSearch, Layers, Link2, Truck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Buy TB-500 with Crypto | Research Use | Titan Peptide Lab";
const DESCRIPTION =
  "Buy TB-500 with crypto for laboratory research. Crypto-only checkout (BTC, ETH, USDC, SOL), lot-matched COAs, HPLC purity targets, and discreet shipping on a 5mg lyophilized vial. TB-500 is supplied strictly for research use — not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/buy-tb-500-with-crypto/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/buy-tb-500-with-crypto/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const STEPS = [
  {
    icon: FileSearch,
    title: "The lot sheet is the receipt",
    body: "TB-500 is a synthetic fragment associated with thymosin beta-4, sold as a research reagent — so there is no brand-name authenticity to lean on. Confirm a lot-matched release sheet referenced to the code on the 5mg vial before paying. With crypto there is no chargeback, so that document is the thing standing in for buyer protection.",
    href: "/coa-verified-peptide-supplier/?ref=buy-tb500-crypto",
    cta: "How to verify a COA",
  },
  {
    icon: Link2,
    title: "On-chain confirmation is your proof of payment",
    body: "Unlike a card, a crypto payment leaves a public transaction hash. That hash is timestamped proof you sent the exact amount to the address Titan showed — useful if anything about an order needs reconciling. An order ID is recorded with support before you send, and dispatch follows on-chain confirmation.",
    href: "/how-to-pay-with-crypto/?ref=buy-tb500-crypto",
    cta: "Crypto checkout walkthrough",
  },
  {
    icon: Layers,
    title: "Pairing TB-500 with BPC-157? One crypto order covers both",
    body: "TB-500 and BPC-157 are frequently referenced together in the literature, and both are payable in the same crypto checkout. If your study uses both, you can settle a single order in one transaction rather than splitting payments — choose the coin your wallet holds.",
    href: "/tb-500-vs-bpc-157/?ref=buy-tb500-crypto",
    cta: "TB-500 vs BPC-157",
  },
  {
    icon: Truck,
    title: "Confirm fulfillment before you send",
    body: "Shipping rate, dispatch target, and plain-parcel labeling are visible up front. Crypto can't be reversed, so the paper trail and the order ID are the screen — not a card dispute. Unopened items are returnable within 14 days.",
    href: "/shipping-faq/?ref=buy-tb500-crypto",
    cta: "Shipping FAQ",
  },
];

const FAQS = [
  {
    q: "Can I buy TB-500 with crypto?",
    a: "Yes. Titan Peptide Lab is crypto-only, so research-use TB-500 is paid for in cryptocurrency — BTC, ETH, USDC, or SOL. The wallet address, network, QR code, and exact amount are shown before payment, and an order ID is recorded with support first. TB-500 is supplied strictly for in-vitro laboratory research and is not for human use.",
  },
  {
    q: "How do I prove I paid for a TB-500 order in crypto?",
    a: "Every crypto payment produces a public transaction hash on the network you used. That hash is a timestamped, verifiable record that you sent the exact amount to the address Titan displayed at checkout. Keep it with your order ID — together they reconcile any question about a payment far more cleanly than a pending card line would.",
  },
  {
    q: "Should I pay for TB-500 in Bitcoin or a stablecoin?",
    a: "Both work. Bitcoin is widely held but its price can drift between loading the cart and the transaction confirming. If you want the total to stay exactly as quoted, USDC on Solana holds a stable USD amount with sub-cent fees and sub-minute confirmation. Pick whichever your wallet already holds — both settle the same order.",
  },
  {
    q: "What is TB-500?",
    a: "TB-500 is a synthetic peptide fragment associated with thymosin beta-4. It appears in research on actin-binding and angiogenesis and is frequently studied alongside BPC-157. Titan supplies it as a 5mg lyophilized vial strictly for research use, and makes no human-use, therapeutic, or efficacy claims.",
  },
  {
    q: "Is it safe to pay for TB-500 with crypto before it ships?",
    a: "Crypto payments can't be reversed, so the protection is the supplier's documentation and your own transaction record, not a card chargeback. With Titan an order ID is recorded with support before payment, many buyers start with a single vial to vet the source, and the payment is confirmed on-chain before dispatch. Every order ships with a lot-matched release sheet, and unopened items are returnable within 14 days.",
  },
  {
    q: "Is TB-500 for human use?",
    a: "No. Titan Peptide Lab's TB-500 is sold strictly for in-vitro laboratory research. It is not for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
];

export default function BuyTb500WithCryptoPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Buy TB-500 with Crypto", item: "/buy-tb-500-with-crypto/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                TB-500 · pay with crypto · research use
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                Buy TB-500 with crypto — a public hash beats a pending card line.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                Titan Peptide Lab is crypto-only, so research-use TB-500 is paid for in cryptocurrency by default. The upside that buyers underrate: a crypto payment leaves a timestamped transaction hash — verifiable proof you paid the exact amount to the address shown. Vet the lot release sheet, pick your coin, and settle in one transaction. Pairing it with BPC-157? Both go on the same order.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/tb-500-vial/?ref=buy-tb500-crypto-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View TB-500 vial
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/how-to-pay-with-crypto/?ref=buy-tb500-crypto-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  How crypto checkout works
                </Link>
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-[0.14em] text-[#8a9690]">
                For research use only · Not for human consumption
              </p>
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
                Pay in crypto, but vet the lot first.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                The site answers the questions TB-500 buyers actually ask: what is the lot, how is purity measured, which coins are accepted, how fast does it ship, and where is the research-use boundary.
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["Format", "5mg lyophilized vial; reconstitute before in-vitro use."],
                ["COA path", "Lot-matched release sheet tied to the code on the vial."],
                ["Purity target", "HPLC ≥99% internal release target, identity confirmation by MS."],
                ["Payment", "Crypto-only: BTC, ETH, USDC, SOL — public hash as your receipt."],
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
              <li><Link className="hover:underline" href="/where-to-buy-tb-500/?ref=buy-tb500-crypto">Where to buy TB-500 →</Link></li>
              <li><Link className="hover:underline" href="/tb-500-vs-bpc-157/?ref=buy-tb500-crypto">TB-500 vs BPC-157 →</Link></li>
              <li><Link className="hover:underline" href="/buy-peptides-with-crypto/?ref=buy-tb500-crypto">Buy peptides with crypto (all coins) →</Link></li>
              <li><Link className="hover:underline" href="/anonymous-peptide-purchase-crypto/?ref=buy-tb500-crypto">Anonymous peptide purchase with crypto →</Link></li>
              <li><Link className="hover:underline" href="/coa-verified-peptide-supplier/?ref=buy-tb500-crypto">COA-verified peptide supplier →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Ready to buy TB-500 with crypto?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the product page for current pricing and lot documentation, or read the crypto checkout walkthrough first.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/tb-500-vial/?ref=buy-tb500-crypto-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                TB-500 vial
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/how-to-pay-with-crypto/?ref=buy-tb500-crypto-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
                How to pay with crypto
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
