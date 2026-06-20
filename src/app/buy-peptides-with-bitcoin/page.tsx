import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bitcoin, Clock, FileSearch, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Buy Peptides with Bitcoin | BTC Checkout for Research Peptides | Titan Peptide Lab";
const DESCRIPTION =
  "How to buy research peptides with Bitcoin: the BTC checkout flow, network confirmations, on-chain order verification, and why a stablecoin like USDC can be the simpler option. Titan Peptide Lab is crypto-only (BTC, USDC, SOL). Research use only, not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/buy-peptides-with-bitcoin/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/buy-peptides-with-bitcoin/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const STEPS = [
  {
    icon: FileSearch,
    title: "Pick the compound and lock the quote",
    body: "Choose the research peptide and vial size on the product page first. At checkout the total is shown in USD and converted to a live BTC amount. Because Bitcoin moves while you confirm, the quoted BTC figure is held for a short window — pay within it so the on-chain amount matches the order. If you'd rather avoid the price drift entirely, USDC settles at exactly the quoted dollar figure.",
    href: "/how-to-pay-with-crypto/?ref=buy-btc",
    cta: "See crypto checkout",
  },
  {
    icon: Bitcoin,
    title: "Send to the displayed BTC address",
    body: "The checkout shows a Bitcoin network address and a QR code. Send the exact BTC amount from any wallet or exchange that supports on-chain BTC withdrawals — Coinbase, Kraken, Cash App, a hardware wallet, or a self-custody app all work. Send on the Bitcoin network itself, not a wrapped or layer-2 version, so the payment lands against your order.",
    href: "/buy-peptides-with-crypto/?ref=buy-btc",
    cta: "Coins accepted",
  },
  {
    icon: Clock,
    title: "Wait for network confirmations",
    body: "A Bitcoin payment is final once the network confirms it — typically one to three confirmations, which can take roughly ten to forty minutes depending on fee and congestion. Titan watches the chain for your transaction; you don't need to send a screenshot. Once the payment confirms on-chain, the order moves to dispatch.",
    href: "/shipping-faq/?ref=buy-btc",
    cta: "Shipping timeline",
  },
  {
    icon: ShieldCheck,
    title: "Your protection is the paperwork, not a chargeback",
    body: "Bitcoin payments can't be reversed, so the real safeguard is documentation, not a card dispute. An order ID is recorded with support before you pay, every order ships with a lot-matched release sheet tied to the code on the vial, and many new buyers start with a single vial to vet the source. That's the screen that matters on an irreversible payment.",
    href: "/coa-verified-peptide-supplier/?ref=buy-btc",
    cta: "How to verify a COA",
  },
];

const FAQS = [
  {
    q: "Can I buy research peptides with Bitcoin at Titan Peptide Lab?",
    a: "Yes. Titan is crypto-only and accepts Bitcoin (BTC) alongside USDC and SOL. At checkout the order total is shown in USD and converted to a live BTC amount with a Bitcoin network address and QR code. Send the exact amount on the Bitcoin network from any wallet or exchange, and the order is confirmed on-chain before dispatch. All peptides are sold for in-vitro laboratory research only, not for human use.",
  },
  {
    q: "Which Bitcoin wallets or exchanges can I pay from?",
    a: "Any service that supports standard on-chain BTC withdrawals works — Coinbase, Kraken, Cash App, Strike, a hardware wallet like Ledger or Trezor, or a self-custody app such as Electrum or BlueWallet. Send on the native Bitcoin network rather than a wrapped BTC token on another chain, and send the exact quoted amount so the transaction matches the order total.",
  },
  {
    q: "How long does a Bitcoin payment take to confirm?",
    a: "Bitcoin transactions are settled by network confirmations. Most orders clear within one to three confirmations, which usually takes about ten to forty minutes depending on the fee you set and how busy the network is. A higher fee confirms faster. Titan monitors the chain for your payment and advances the order to dispatch once it confirms, so you do not need to send proof manually.",
  },
  {
    q: "Should I pay with Bitcoin or USDC?",
    a: "Both are accepted. Bitcoin is the most widely held coin and easy to send from almost any exchange, but its price moves between the quote and confirmation, so pay within the held window. USDC is a dollar-pegged stablecoin, so the amount you send equals the quoted order total exactly with no price drift — handy on higher-ticket compounds. Choose whichever you already hold; the documentation and shipping are identical either way.",
  },
  {
    q: "Is buying peptides with Bitcoin anonymous?",
    a: "A Bitcoin payment doesn't carry your card or bank details, and Titan records only the order ID and the shipping address needed to deliver. It is not fully anonymous in the cryptographic sense — on-chain transactions are public and most exchanges apply their own identity rules — but it keeps the purchase off card statements. Titan ships in plain, unbranded parcels. Everything is supplied strictly for research use, not human use.",
  },
  {
    q: "What happens if I send the wrong Bitcoin amount?",
    a: "If you send slightly less than quoted, contact support with your order ID and transaction hash before anything ships so the balance can be reconciled. If you overpay, the same applies. Because the price is held only briefly, the cleanest path is to send the exact displayed amount within the window — or use USDC, where the amount never drifts. Support resolves underpayments and overpayments against the recorded order ID.",
  },
];

export default function BuyPeptidesWithBitcoinPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Buy Peptides with Bitcoin", item: "/buy-peptides-with-bitcoin/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Bitcoin checkout · research use only
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                Buy research peptides with Bitcoin, the straightforward way.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                Titan Peptide Lab is crypto-only, and Bitcoin is one of the three networks accepted at checkout alongside USDC and SOL. There&apos;s no card form and no account at a payment processor — you pick the compound, the total converts to a live BTC amount, and you send it from any wallet or exchange. Below is the actual flow: how the quote is held, what confirmations mean, and why a stablecoin is sometimes the easier call. Everything Titan supplies is for in-vitro laboratory research only.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/?ref=buy-btc-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  Browse the catalog
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/how-to-pay-with-crypto/?ref=buy-btc-hero"
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
                Bitcoin vs stablecoin at checkout
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
                Same order, two ways to pay.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                Bitcoin is the coin most buyers already hold and the easiest to send from a mainstream exchange, which is why it&apos;s the default crypto request. The one thing to watch is price drift: BTC moves between the quote and the confirmation, so the checkout holds the converted amount for a short window. USDC sidesteps that — a stablecoin is pegged to the dollar, so the amount you send equals the order total to the cent. Both settle on-chain, both ship with the same lot-matched release sheet, and both are confirmed before dispatch. Pick whichever lives in your wallet today.
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["Networks accepted", "Bitcoin (BTC), USDC, and SOL — shown before you pay."],
                ["Confirmation time", "Roughly 10–40 min on BTC; faster with a higher fee."],
                ["Price certainty", "USDC settles at the exact quoted USD total; BTC is held briefly."],
                ["Order protection", "Order ID logged with support + lot-matched COA on every parcel."],
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
              <li><Link className="hover:underline" href="/buy-peptides-with-crypto/?ref=buy-btc">Buy peptides with crypto (all coins) →</Link></li>
              <li><Link className="hover:underline" href="/buy-bpc-157-with-bitcoin/?ref=buy-btc">Buy BPC-157 with Bitcoin →</Link></li>
              <li><Link className="hover:underline" href="/how-to-pay-with-crypto/?ref=buy-btc">How to pay with crypto →</Link></li>
              <li><Link className="hover:underline" href="/coa-verified-peptide-supplier/?ref=buy-btc">COA-verified peptide supplier →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-research-peptides/?ref=buy-btc">Where to buy research peptides →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Ready to pay with Bitcoin?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Browse the research catalog, add a vial, and choose Bitcoin, USDC, or SOL at checkout — the address and amount are shown before you send anything.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/?ref=buy-btc-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                View products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/start/?ref=buy-btc-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
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
