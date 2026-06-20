import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bitcoin, FileSearch, Network, Truck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Buy BPC-157 with Bitcoin | Research Use | Titan Peptide Lab";
const DESCRIPTION =
  "Buy BPC-157 with Bitcoin for research use. Crypto-only checkout (BTC, USDC, SOL), lot-matched COAs, HPLC purity targets, and discreet shipping. Titan stocks a 15mL · 500mcg/actuation nasal spray and a lyophilized vial.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/buy-bpc-157-with-bitcoin/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/buy-bpc-157-with-bitcoin/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const STEPS = [
  {
    icon: FileSearch,
    title: "Check the lot documentation first",
    body: "Before price or payment, confirm the supplier exposes a lot-matched release sheet tied to the code on the bottle — not a generic stock spec. With Bitcoin there's no chargeback, so the paper trail is the protection.",
    href: "/coa-verified-peptide-supplier/?ref=buy-bpc-btc",
    cta: "How to verify a COA",
  },
  {
    icon: Network,
    title: "Send on the Bitcoin network",
    body: "At checkout Titan shows a BTC address, QR, and exact amount. Open your wallet, confirm it's sending on the Bitcoin network, paste the address, and send the exact amount shown. Network mismatch is the only irreversible mistake.",
    href: "/how-to-pay-with-crypto/?ref=buy-bpc-btc",
    cta: "Crypto checkout walkthrough",
  },
  {
    icon: Bitcoin,
    title: "Prefer a stable amount? Use USDC or SOL",
    body: "BTC price moves between cart and confirmation. If you'd rather lock a USD figure, USDC on Solana keeps the total stable with sub-cent fees. BTC, USDC, and SOL are all accepted on the same order.",
    href: "/pay-for-peptides-with-usdc-crypto/?ref=buy-bpc-btc",
    cta: "Pay with USDC",
  },
  {
    icon: Truck,
    title: "Confirm fulfillment before paying",
    body: "Shipping rate, dispatch target, and plain-parcel labeling are visible up front. An order ID is recorded with support before payment, then dispatch begins from Reno inside 24 to 48 hours.",
    href: "/shipping-faq/?ref=buy-bpc-btc",
    cta: "Shipping FAQ",
  },
];

const FAQS = [
  {
    q: "Can I buy BPC-157 with Bitcoin?",
    a: "Yes. Titan Peptide Lab accepts Bitcoin (BTC) at checkout for research-use BPC-157, alongside USDC and SOL. The BTC wallet address, network, QR code, and exact amount are shown before payment, and an order ID is recorded with support first. BPC-157 is sold strictly for in-vitro laboratory research and is not for human use.",
  },
  {
    q: "Should I pay in Bitcoin or a stablecoin for BPC-157?",
    a: "Bitcoin works and is widely held, but its price can move between the moment you load the cart and the moment the transaction confirms. If you want the order total to stay exactly what Titan quotes, USDC on Solana is the steadier option — a stable USD amount with sub-cent fees and sub-minute confirmation. Both are accepted; pick what your wallet holds.",
  },
  {
    q: "How much is BPC-157 at Titan?",
    a: "Current pricing is shown on the BPC-157 product pages — both the ready-to-use nasal spray (15mL · 500mcg per actuation) and the lyophilized vial — where lot documentation and concentration are listed. The live product page is always the source of truth, and first-order and bulk codes appear at checkout.",
  },
  {
    q: "Is it safe to pay for BPC-157 in Bitcoin before it ships?",
    a: "Bitcoin payments can't be reversed, so the screen that protects the order is the supplier's documentation, not a card chargeback. With Titan, an order ID is recorded with support before payment, many buyers start with a single unit to vet the source, and the payment is confirmed on-chain before dispatch. Every order ships with a lot-matched release sheet, and unopened items are returnable within 14 days.",
  },
  {
    q: "Should I buy the BPC-157 nasal spray or the vial?",
    a: "The nasal spray is a ready-to-use fixed-concentration format with low handling friction; the lyophilized vial lets you set the working concentration at reconstitution. The spray-vs-vial comparison page breaks down which format fits which research design — both are payable in Bitcoin.",
  },
  {
    q: "Is BPC-157 for human use?",
    a: "No. Titan Peptide Lab's BPC-157 is sold strictly for in-vitro laboratory research. It is not for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
];

export default function BuyBpc157WithBitcoinPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Buy BPC-157 with Bitcoin", item: "/buy-bpc-157-with-bitcoin/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                BPC-157 · pay with Bitcoin · research use
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                Buy BPC-157 with Bitcoin — documentation first, no card needed.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                Titan Peptide Lab is crypto-only, so paying for BPC-157 in Bitcoin is the default path, not a workaround. Confirm the lot release sheet and purity target, pick the format, then send the exact BTC amount shown at checkout. Prefer a fixed USD total? USDC on Solana works on the same order.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/bpc-157-nasal-spray/?ref=buy-bpc-btc-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View BPC-157 nasal spray
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products/bpc-157-vial/?ref=buy-bpc-btc-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  View BPC-157 vial
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
                Pay in BTC, but vet the lot first.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                The site answers the questions BPC-157 buyers actually ask: what is the lot, how is purity measured, which coins are accepted, how fast does it ship, and where is the research-use boundary.
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["Formats", "Ready-to-use nasal spray (15mL · 500mcg/actuation) or lyophilized vial."],
                ["COA path", "Lot-matched release sheet tied to the code on the bottle."],
                ["Purity target", "HPLC ≥99% internal release target, identity confirmation by MS."],
                ["Payment", "Crypto-only: BTC, USDC, SOL — wallet and network shown before you send."],
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
              <li><Link className="hover:underline" href="/buy-peptides-with-crypto/?ref=buy-bpc-btc">Buy peptides with crypto (all coins) →</Link></li>
              <li><Link className="hover:underline" href="/bpc-157-nasal-spray-vs-vial/?ref=buy-bpc-btc">BPC-157 nasal spray vs vial →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-bpc-157-nasal-spray/?ref=buy-bpc-btc">Where to buy BPC-157 nasal spray →</Link></li>
              <li><Link className="hover:underline" href="/tb-500-vs-bpc-157/?ref=buy-bpc-btc">TB-500 vs BPC-157 →</Link></li>
              <li><Link className="hover:underline" href="/how-to-pay-with-crypto/?ref=buy-bpc-btc">How to pay with crypto →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Ready to buy BPC-157 with Bitcoin?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open a product page for current pricing and lot documentation, or read the crypto checkout walkthrough first.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/bpc-157-nasal-spray/?ref=buy-bpc-btc-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                BPC-157 nasal spray
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/how-to-pay-with-crypto/?ref=buy-bpc-btc-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
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
