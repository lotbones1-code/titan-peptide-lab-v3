import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileSearch, Network, ShieldCheck, Truck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Buy Retatrutide with Crypto | Research Use | Titan Peptide Lab";
const DESCRIPTION =
  "Buy retatrutide (LY3437943) with crypto for laboratory research. Crypto-only checkout — USDC, BTC, SOL — with lot-matched COAs, HPLC purity targets, and discreet shipping. Retatrutide is an investigational triple agonist supplied strictly for research use, not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/buy-retatrutide-with-crypto/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/buy-retatrutide-with-crypto/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const STEPS = [
  {
    icon: FileSearch,
    title: "Vet the lot before the coin",
    body: "Retatrutide (LY3437943) is an investigational triple agonist with no commercial pharmaceutical equivalent, so the paperwork is the only real screen. Confirm the supplier exposes a lot-matched release sheet referenced to the code on the vial — not a generic stock spec — before you think about which wallet to open.",
    href: "/coa-verified-peptide-supplier/?ref=buy-reta-crypto",
    cta: "How to verify a COA",
  },
  {
    icon: ShieldCheck,
    title: "Why GLP-1 research buyers reach for crypto",
    body: "Metabolic-research compounds draw high search volume and, with it, card processors that flag or freeze these orders. Crypto sidesteps that friction entirely: no processor sits between you and the order, and there is no card statement line tying the purchase back to you. For a high-demand compound like retatrutide, that is the practical reason crypto is the default — not a workaround.",
    href: "/how-to-pay-with-crypto/?ref=buy-reta-crypto",
    cta: "Crypto checkout walkthrough",
  },
  {
    icon: Network,
    title: "Lock the total with a stablecoin",
    body: "Retatrutide sits at the higher end of the catalog, so a few percent of BTC drift between cart and confirmation is real money. USDC on Solana keeps the order total exactly what Titan quotes, with sub-cent network fees and sub-minute confirmation. BTC, USDC, and SOL are all accepted on the same order.",
    href: "/pay-for-peptides-with-usdc-crypto/?ref=buy-reta-crypto",
    cta: "Pay with USDC",
  },
  {
    icon: Truck,
    title: "Confirm fulfillment before you send",
    body: "Crypto payments can't be reversed, so shipping rate, dispatch target, and plain-parcel labeling should all be visible up front. An order ID is recorded with support before payment, and the transaction is confirmed on-chain before dispatch.",
    href: "/shipping-faq/?ref=buy-reta-crypto",
    cta: "Shipping FAQ",
  },
];

const FAQS = [
  {
    q: "Can I buy retatrutide with crypto?",
    a: "Yes. Titan Peptide Lab is crypto-only, so research-use retatrutide (LY3437943) is paid for in cryptocurrency by default — USDC, BTC, or SOL. The wallet address, network, QR code, and exact amount are shown before payment, and an order ID is recorded with support first. Retatrutide is supplied strictly for in-vitro laboratory research and is not for human use.",
  },
  {
    q: "Should I pay for retatrutide in Bitcoin or a stablecoin?",
    a: "Both are accepted; the difference is price stability. Retatrutide is one of the higher-priced compounds in the catalog, so a few percent of Bitcoin movement between loading the cart and the transaction confirming can shift the total noticeably. USDC on Solana holds the order at exactly the quoted USD figure with sub-cent fees, which is why many buyers of higher-ticket compounds prefer it. Pick whatever your wallet already holds.",
  },
  {
    q: "What is retatrutide (LY3437943)?",
    a: "Retatrutide is an investigational synthetic peptide studied as a simultaneous agonist at the GLP-1, GIP, and glucagon receptors — often described in the literature as a 'triple agonist.' It appears in metabolic-pathway and receptor-signaling research. Titan supplies it strictly as a research compound and makes no human-use, therapeutic, or efficacy claims.",
  },
  {
    q: "Is paying with crypto for retatrutide private?",
    a: "Crypto checkout means no card processor sits between you and the order and no card statement line records it, which is part of why research buyers use it. It is not anonymous in the cryptographic sense — on-chain transactions are public — but it does keep a high-demand metabolic compound off your card history. Titan only needs a shipping address and an order ID; see the anonymous-purchase guide for the full privacy picture.",
  },
  {
    q: "Is it safe to pay for retatrutide with crypto before it ships?",
    a: "Crypto payments can't be reversed, so the protection is the supplier's documentation, not a card chargeback. With Titan an order ID is recorded with support before payment, many buyers start with a single vial to vet the source, and the payment is confirmed on-chain before dispatch. Every order ships with a lot-matched release sheet tied to the lot code on the vial, and unopened items are returnable within 14 days.",
  },
  {
    q: "Is retatrutide approved for human use?",
    a: "No. Retatrutide is an investigational compound not approved by the FDA or any regulator for human use, and it is not commercially available as a medicine. Titan supplies it only as a research-use-only reagent for in-vitro laboratory work — not for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
];

export default function BuyRetatrutideWithCryptoPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Buy Retatrutide with Crypto", item: "/buy-retatrutide-with-crypto/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Retatrutide · pay with crypto · research use
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                Buy retatrutide with crypto — off the card rails, on the paper trail.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                Titan Peptide Lab is crypto-only, so paying for retatrutide (LY3437943) in cryptocurrency is the default path. For a high-demand metabolic-research compound that is exactly the point: no card processor to flag the order, and the total stays exactly what you&apos;re quoted when you use a stablecoin. Confirm the lot release sheet and purity target first, then send the amount shown at checkout.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/retatrutide/?ref=buy-reta-crypto-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View retatrutide
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/pay-for-peptides-with-usdc-crypto/?ref=buy-reta-crypto-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  Pay with USDC
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
                The site answers the questions retatrutide buyers actually ask: what is the lot, how is purity measured, which coins are accepted, how fast does it ship, and where is the research-use boundary.
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["Format", "Lyophilized powder; reconstitute before in-vitro use."],
                ["COA path", "Lot-matched release sheet tied to the code on the vial."],
                ["Purity target", "HPLC ≥99% internal release target, identity confirmation by MS."],
                ["Payment", "Crypto-only: USDC, BTC, SOL — network shown before you send."],
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
              <li><Link className="hover:underline" href="/where-to-buy-retatrutide/?ref=buy-reta-crypto">Where to buy retatrutide →</Link></li>
              <li><Link className="hover:underline" href="/retatrutide-vs-tirzepatide-vs-semaglutide/?ref=buy-reta-crypto">Retatrutide vs tirzepatide vs semaglutide →</Link></li>
              <li><Link className="hover:underline" href="/buy-peptides-with-crypto/?ref=buy-reta-crypto">Buy peptides with crypto (all coins) →</Link></li>
              <li><Link className="hover:underline" href="/anonymous-peptide-purchase-crypto/?ref=buy-reta-crypto">Anonymous peptide purchase with crypto →</Link></li>
              <li><Link className="hover:underline" href="/coa-verified-peptide-supplier/?ref=buy-reta-crypto">COA-verified peptide supplier →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Ready to buy retatrutide with crypto?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the product page for current pricing, vial size, and lot documentation, or read the crypto checkout walkthrough first.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/retatrutide/?ref=buy-reta-crypto-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                Retatrutide
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/how-to-pay-with-crypto/?ref=buy-reta-crypto-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
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
