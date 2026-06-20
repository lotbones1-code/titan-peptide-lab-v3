import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CircleDollarSign, Network, Timer, Wallet } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Pay for Peptides with USDC | Stablecoin Checkout | Titan Peptide Lab";
const DESCRIPTION =
  "Pay for research peptides with USDC. A stable USD amount, sub-cent fees on Solana, and sub-minute confirmation — no card, no account. Titan accepts USDC on Solana, plus BTC and SOL. For research use only.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/pay-for-peptides-with-usdc-crypto/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/pay-for-peptides-with-usdc-crypto/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const REASONS = [
  {
    icon: CircleDollarSign,
    title: "A stable USD amount",
    body: "USDC is pegged to the dollar, so the figure Titan quotes at checkout is the figure you send. No price drift between loading the cart and confirming the transaction — useful when you want the order total to match the invoice exactly.",
  },
  {
    icon: Timer,
    title: "Sub-cent fees, sub-minute confirmation",
    body: "On Solana, USDC transfers typically cost a fraction of a cent and confirm in under a minute. That's the lowest-friction way to pay for a research order without a card processor in the loop.",
  },
  {
    icon: Network,
    title: "Pay USDC on Solana — fast and sub-cent",
    body: "Titan accepts USDC on Solana (Phantom and similar wallets). Match the network shown at checkout; sending USDC on a different network to a Solana address is the one mistake that can't be undone, so confirm Solana before you send.",
  },
  {
    icon: Wallet,
    title: "No card, no account on file",
    body: "Checkout never asks for a card number or a saved login. You get a wallet address, a QR, and the exact USDC amount; you send from your own self-custody wallet; the order is matched to your order ID before dispatch.",
  },
];

const FAQS = [
  {
    q: "Can I pay for peptides with USDC?",
    a: "Yes. Titan Peptide Lab accepts USDC on Solana at checkout, alongside BTC and native SOL. The wallet address, network, QR code, and exact USDC amount are shown before payment, and an order ID is recorded with support first. All products are for in-vitro laboratory research use only.",
  },
  {
    q: "Is USDC the best crypto for buying peptides?",
    a: "For most buyers, yes. USDC is a dollar-pegged stablecoin, so the order total stays exactly what Titan quotes — no price movement between cart and confirmation. On Solana it also has sub-cent fees and sub-minute confirmation, making it the lowest-friction option. BTC and SOL are accepted too if that's what your wallet holds.",
  },
  {
    q: "Which network does Titan accept USDC on?",
    a: "USDC is accepted on Solana (USDC-SOL) — it's cheaper and faster than most networks, with sub-cent fees and sub-minute confirmation. The critical rule is to match the network Titan shows at checkout — USDC sent on the wrong network to a single-network address will not arrive and the transfer cannot be reversed. If your USDC is on another network, swap or bridge it to Solana first, or pay in BTC or SOL instead.",
  },
  {
    q: "What if I send the wrong USDC amount?",
    a: "Under- and overpayments are reconciled manually. Email support@titanpeptidelab.com with your order ID and transaction hash, and the order is held until the balance is corrected or refunded. Because USDC is a stablecoin, the cleanest path is simply to send the exact amount Titan shows at checkout.",
  },
  {
    q: "How fast does a USDC order ship?",
    a: "USDC on Solana confirms in under a minute. Titan matches the transfer to your order ID — usually within 30 minutes during business hours — and dispatch begins inside 24 to 48 hours per the shipping policy, in plain unbranded parcels.",
  },
  {
    q: "Are these peptides for human use?",
    a: "No. Every Titan Peptide Lab product is sold strictly for in-vitro laboratory research and is not for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
];

export default function PayForPeptidesWithUsdcPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Pay for Peptides with USDC", item: "/pay-for-peptides-with-usdc-crypto/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                USDC stablecoin checkout · research use
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                Pay for peptides with USDC — a stable amount, no card.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                If you want the order total to stay exactly what Titan quotes, USDC is the steadiest way to pay. It&apos;s pegged to the dollar, costs a fraction of a cent on Solana, and confirms in under a minute. Titan is crypto-only — USDC on Solana, plus BTC and SOL — with the wallet, network, and amount shown before you send.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/?ref=buy-usdc-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  Browse the catalog
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/how-to-pay-with-crypto/?ref=buy-usdc-hero"
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
                USDC at a glance
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
                The stablecoin path, end to end.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                Match the network, send the exact amount, and the payment reconciles to your order ID before dispatch. Want the full four-step walkthrough with wallet tips and copy-ready addresses?
              </p>
              <Link href="/how-to-pay-with-crypto/?ref=buy-usdc-glance" className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#1e6f58] hover:underline">
                Full crypto checkout walkthrough →
              </Link>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["Networks", "USDC on Solana (USDC-SOL)."],
                ["Fees", "Typically under a cent on Solana."],
                ["Confirmation", "Usually under a minute on Solana."],
                ["Also accepted", "BTC and native SOL on the same checkout."],
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
              <li><Link className="hover:underline" href="/buy-peptides-with-crypto/?ref=buy-usdc">Buy peptides with crypto (all coins) →</Link></li>
              <li><Link className="hover:underline" href="/buy-bpc-157-with-bitcoin/?ref=buy-usdc">Buy BPC-157 with Bitcoin →</Link></li>
              <li><Link className="hover:underline" href="/how-to-pay-with-crypto/?ref=buy-usdc">How to pay with crypto →</Link></li>
              <li><Link className="hover:underline" href="/coa-verified-peptide-supplier/?ref=buy-usdc">COA-verified supplier →</Link></li>
              <li><Link className="hover:underline" href="/products/?ref=buy-usdc">Browse all products →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Ready to pay with USDC?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the catalog for current pricing and lot documentation, or read the four-step crypto checkout walkthrough first.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/?ref=buy-usdc-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                Browse products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/how-to-pay-with-crypto/?ref=buy-usdc-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
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
