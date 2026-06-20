import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bitcoin, FileSearch, ShieldCheck, Truck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Buy PT-141 with Crypto | BTC, ETH, USDC, SOL | Titan Peptide Lab";
const DESCRIPTION =
  "Buy research-use PT-141 (bremelanotide) nasal spray with crypto — BTC, ETH, USDC, or SOL. Wallet and network shown before payment, order ID recorded with support, lot-matched COA, discreet shipping. Research use only — not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/buy-pt-141-with-crypto/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/buy-pt-141-with-crypto/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const STEPS = [
  {
    icon: Bitcoin,
    title: "Pick your network",
    body: "Titan checkout accepts Bitcoin (BTC), Ethereum (ETH), USDC (on Ethereum or Solana), and Solana (SOL). The exact wallet address and network are displayed on the checkout screen before you send anything — confirm the network matches the asset you're sending so funds aren't lost to a wrong-chain transfer.",
    href: "/how-to-pay-with-crypto/?ref=buy-pt141-crypto",
    cta: "How crypto checkout works",
  },
  {
    icon: ShieldCheck,
    title: "Record the order first",
    body: "An order ID is recorded with support before any payment is sent, so the transaction is matched to your order on-chain. Crypto payments can't be reversed — recording the order up front is what protects the buyer, not a chargeback.",
    href: "/start/?ref=buy-pt141-crypto",
    cta: "Start an order",
  },
  {
    icon: FileSearch,
    title: "Screen the documentation",
    body: "PT-141 (bremelanotide) is supplied as a research compound, so the real screen is the paperwork. Confirm the supplier exposes a lot-matched release sheet referenced to the code on the vial, an HPLC purity target, and mass-spec identity confirmation — not a generic stock spec sheet.",
    href: "/coa-verified-peptide-supplier/?ref=buy-pt141-crypto",
    cta: "How to verify a COA",
  },
  {
    icon: Truck,
    title: "Confirm fulfillment",
    body: "Shipping rate, dispatch target, and plain-parcel labeling are shown up front. Payment is confirmed on-chain before dispatch, and every order ships with a lot-matched release sheet tied to the lot code on the vial.",
    href: "/shipping-faq/?ref=buy-pt141-crypto",
    cta: "Shipping FAQ",
  },
];

const FAQS = [
  {
    q: "Can I buy PT-141 with cryptocurrency?",
    a: "Yes. Titan Peptide Lab uses crypto-only checkout for research-use PT-141 (bremelanotide) nasal spray, accepting BTC, ETH, USDC, and SOL. The wallet address and network are shown before payment, an order ID is recorded with support, and payment is confirmed on-chain before the order ships with a lot-matched COA. PT-141 is supplied strictly for in-vitro laboratory research, not for human use.",
  },
  {
    q: "Which cryptocurrencies does Titan accept?",
    a: "Titan accepts Bitcoin (BTC), Ethereum (ETH), USDC (on the Ethereum or Solana networks), and Solana (SOL). USDC and SOL settle fastest and with the lowest network fees. The exact address and network for each are displayed on the checkout screen before payment.",
  },
  {
    q: "Is buying peptides with crypto anonymous?",
    a: "Crypto checkout means no card or bank details are entered at checkout, and Titan ships in plain, unbranded parcels. A shipping address is still required to fulfill the order. Titan does not provide payment privacy beyond standard on-chain settlement; see the crypto checkout guide for exactly what is and isn't recorded.",
  },
  {
    q: "What is PT-141 (bremelanotide)?",
    a: "PT-141 (bremelanotide) is a synthetic melanocortin-receptor agonist studied in the research literature. Titan supplies it as a research-use nasal spray and makes no human-use, therapeutic, or efficacy claims. It is not approved for human use and is not for human or animal consumption.",
  },
  {
    q: "Is it safe to pay with crypto before the item ships?",
    a: "Crypto payments can't be reversed, so the right screen is the supplier's documentation, not chargeback protection. With Titan an order ID is recorded with support before payment, many new buyers start with a single unit to vet the source, and payment is confirmed on-chain before dispatch. Every order ships with a lot-matched release sheet, and unopened items are returnable within 14 days.",
  },
];

export default function BuyPt141WithCryptoPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Buy PT-141 with Crypto", item: "/buy-pt-141-with-crypto/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                PT-141 crypto checkout · research use only
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                Buy PT-141 with crypto, with the paperwork up front.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                Titan runs a crypto-only checkout — BTC, ETH, USDC, or SOL — for research-use PT-141 (bremelanotide) nasal spray. No card, no bank entry, plain-parcel shipping. Because crypto can&apos;t be charged back, the buyer&apos;s real protection is the supplier&apos;s documentation: a lot-matched release sheet, a stated HPLC purity target, and an order ID recorded before payment. Here&apos;s exactly how it works.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/pt-141-nasal-spray/?ref=buy-pt141-crypto-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View PT-141 nasal spray
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/how-to-pay-with-crypto/?ref=buy-pt141-crypto-hero"
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
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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
                What Titan exposes before checkout
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
                Crypto-native, documentation-first.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                The checkout is built around the questions a crypto buyer actually asks: which networks are accepted, where is the wallet shown, how is the order matched to my payment, what documentation ships with the vial, and where is the research-use boundary.
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["Networks", "BTC, ETH, USDC (ERC-20 / SPL), SOL — shown before payment."],
                ["Format", "PT-141 (bremelanotide) research-use nasal spray."],
                ["COA path", "Lot-matched release sheet tied to the code on the vial."],
                ["Order match", "Order ID recorded with support; payment confirmed on-chain."],
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
              <li><Link className="hover:underline" href="/where-to-buy-pt-141-nasal-spray/?ref=buy-pt141-crypto">Where to buy PT-141 nasal spray →</Link></li>
              <li><Link className="hover:underline" href="/buy-peptides-with-crypto/?ref=buy-pt141-crypto">Buy peptides with crypto →</Link></li>
              <li><Link className="hover:underline" href="/pay-for-peptides-with-usdc-crypto/?ref=buy-pt141-crypto">Pay for peptides with USDC →</Link></li>
              <li><Link className="hover:underline" href="/anonymous-peptide-purchase-crypto/?ref=buy-pt141-crypto">Anonymous purchase with crypto →</Link></li>
              <li><Link className="hover:underline" href="/coa-verified-peptide-supplier/?ref=buy-pt141-crypto">COA-verified peptide supplier →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Ready to buy PT-141 with crypto?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the PT-141 product page for current pricing, vial size, lot documentation, and the crypto checkout — or start with the recommended buyer routes.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/pt-141-nasal-spray/?ref=buy-pt141-crypto-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                PT-141 nasal spray
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/start/?ref=buy-pt141-crypto-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
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
