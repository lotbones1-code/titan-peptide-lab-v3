import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bitcoin, Lock, ShieldCheck, Wallet } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Buy Peptides with Crypto — Bitcoin, USDC & SOL | Titan Peptide Lab";
const DESCRIPTION =
  "A crypto-only research peptide store. Buy peptides with Bitcoin, USDC, or SOL — no card processor, no account required, lot-matched COAs, and discreet plain-parcel shipping. For research use only.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/buy-peptides-with-crypto/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/buy-peptides-with-crypto/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const REASONS = [
  {
    icon: Bitcoin,
    title: "Crypto is the checkout, not an afterthought",
    body: "Most research-peptide sites bolt crypto onto a card-first cart and still drop orders when the processor flags the category. Titan is crypto-only by design — BTC, USDC, and SOL clear on-chain in seconds to minutes, so an order never depends on a card network that won't bank the category.",
  },
  {
    icon: Lock,
    title: "No account, no card on file",
    body: "Checkout doesn't ask for a card number, a billing profile, or a saved login. You pick products, get a wallet address and exact amount, and send from your own self-custody wallet. The only identifier the order needs is a shipping address and an order ID.",
  },
  {
    icon: ShieldCheck,
    title: "Documentation is the buyer protection",
    body: "Crypto payments can't be charged back, so the screen that protects a research order is the paper trail — a lot-matched release sheet tied to the code on the bottle, an HPLC purity target, and identity confirmation. That's what Titan exposes before you ever open a wallet.",
  },
  {
    icon: Wallet,
    title: "Pick the coin you already hold",
    body: "USDC on Solana is the lowest-friction option (the total is already in USD, fees are typically under a cent). BTC and SOL are also first-class at checkout — the wallet, network, QR, and amount are shown side by side so there's no network guesswork.",
  },
];

const COINS = [
  ["USDC (Solana)", "Stable USD amount, sub-cent fees, confirms in under a minute. The default for most first-time buyers."],
  ["Bitcoin (BTC)", "The most widely held coin. Settles in a few minutes; use when your wallet is on the Bitcoin network."],
  ["Solana (SOL)", "Native SOL on the same Solana address shown at checkout. Fast and cheap."],
];

const FAQS = [
  {
    q: "Can I buy peptides with crypto on Titan Peptide Lab?",
    a: "Yes. Titan Peptide Lab is a crypto-only research peptide store. Checkout accepts Bitcoin (BTC), USDC on Solana, and SOL. There is no card option — the wallet address, network, QR code, and exact amount are shown at checkout, and an order ID is recorded with support before payment is sent. All products are sold strictly for in-vitro laboratory research use.",
  },
  {
    q: "Which crypto is best for buying peptides?",
    a: "USDC on Solana is the lowest-friction choice for most buyers: the order total is already in USD, Solana network fees are usually under a cent, and confirmation typically takes under a minute. Bitcoin and SOL are also accepted — the practical answer is to use whichever coin and network your wallet already holds, matching the network shown at checkout.",
  },
  {
    q: "Is buying peptides with crypto anonymous or private?",
    a: "Checkout does not require an account, a card, or a billing profile, and Titan does not store card data because there is none. An order still needs a shipping address to deliver a physical parcel, and on-chain transactions are publicly recorded by nature, so crypto checkout is best described as low-data and discreet rather than fully anonymous. Parcels ship in plain, unbranded packaging.",
  },
  {
    q: "Why is Titan crypto-only instead of taking cards?",
    a: "Card processors are unstable for the research-peptide category and frequently freeze or claw back orders. Crypto clears quickly, ties every dispatch to a confirmed on-chain transaction, and removes the card network as a point of failure. It is a deliberate design choice, not a limitation.",
  },
  {
    q: "What if I send the wrong amount or the wrong network?",
    a: "Under- and overpayments are reconciled manually — email support@titanpeptidelab.com with your order ID and transaction hash and the order is held until the balance is corrected or refunded. Network mismatch (for example USDC sent on the wrong network to a single-network address) is the one mistake that can be irreversible, so always match coin, network, and address before sending. Titan checkout shows all three together.",
  },
  {
    q: "How fast does a crypto order ship?",
    a: "Solana settles in seconds and Bitcoin in a few minutes. Titan matches the on-chain transfer to your order ID — usually within 30 minutes during business hours — and dispatch begins inside 24 to 48 hours per the shipping policy, in plain parcels.",
  },
  {
    q: "Are these peptides for human use?",
    a: "No. Every Titan Peptide Lab product is sold strictly for in-vitro laboratory research and is not for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
];

export default function BuyPeptidesWithCryptoPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Buy Peptides with Crypto", item: "/buy-peptides-with-crypto/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Crypto-only peptide store · research use
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                Buy research peptides with crypto — no card, no account.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                Titan Peptide Lab is crypto-only on purpose. Pay with Bitcoin, USDC, or SOL; skip the card processor that won&apos;t reliably bank this category; and get a lot-matched release sheet with every order. The wallet, network, QR, and exact amount are shown before you send — so the only thing left to do is confirm.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/?ref=buy-crypto-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  Browse the catalog
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/how-to-pay-with-crypto/?ref=buy-crypto-hero"
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
            <div className="grid gap-5 md:grid-cols-2">
              {REASONS.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex h-full flex-col rounded-[1.5rem] border border-[#dde6e1] bg-white p-7">
                  <Icon className="h-5 w-5 text-[#1e6f58]" />
                  <h2 className="mt-5 font-serif text-[1.55rem] leading-tight tracking-[-0.02em]">{title}</h2>
                  <p className="mt-3 flex-1 text-[13.5px] leading-7 text-[#5c6762]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[rgb(15_22_19/6%)] bg-[#fafbfa] py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Coins accepted at checkout
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
                Four networks. Pick the one your wallet already holds.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                Every order shows the wallet address, network, QR, and exact crypto amount before you pay. Match the coin and network, send the exact amount, and the payment is reconciled to your order ID before dispatch.
              </p>
              <Link href="/how-to-pay-with-crypto/?ref=buy-crypto-coins" className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#1e6f58] hover:underline">
                Full crypto checkout walkthrough →
              </Link>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {COINS.map(([term, desc]) => (
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">Popular research compounds</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] tracking-[-0.035em]">Buy with crypto, ship in 24–48h.</h2>
            <ul className="mt-7 space-y-3 text-[14px] leading-7 text-[#1e6f58]">
              <li><Link className="hover:underline" href="/products/bpc-157-nasal-spray/?ref=buy-crypto">BPC-157 nasal spray →</Link></li>
              <li><Link className="hover:underline" href="/products/tb-500-vial/?ref=buy-crypto">TB-500 vial →</Link></li>
              <li><Link className="hover:underline" href="/products/retatrutide/?ref=buy-crypto">Retatrutide →</Link></li>
              <li><Link className="hover:underline" href="/products/pt-141-nasal-spray/?ref=buy-crypto">PT-141 nasal spray →</Link></li>
              <li><Link className="hover:underline" href="/buy-bpc-157-with-bitcoin/?ref=buy-crypto">Buy BPC-157 with Bitcoin →</Link></li>
              <li><Link className="hover:underline" href="/pay-for-peptides-with-usdc-crypto/?ref=buy-crypto">Pay for peptides with USDC →</Link></li>
              <li><Link className="hover:underline" href="/coa-verified-peptide-supplier/?ref=buy-crypto">COA-verified supplier →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Ready to buy peptides with crypto?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the catalog for current pricing and lot documentation, or read the four-step crypto checkout walkthrough first.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/?ref=buy-crypto-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                Browse products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/how-to-pay-with-crypto/?ref=buy-crypto-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
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
