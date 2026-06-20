import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CreditCard, EyeOff, ScrollText, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Anonymous Peptide Purchase with Crypto | Research Use | Titan Peptide Lab";
const DESCRIPTION =
  "How private is buying research peptides with crypto? An honest breakdown — no card processor, no card statement line, minimal data collected — versus what crypto does not hide. Titan Peptide Lab is crypto-only and ships research-use material, not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/anonymous-peptide-purchase-crypto/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/anonymous-peptide-purchase-crypto/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const POINTS = [
  {
    icon: CreditCard,
    title: "No processor, no statement line",
    body: "A card purchase passes through a processor that can flag, decline, or freeze the order, and it prints a line on your statement. Crypto removes both: there is no third party between you and the order, and nothing about the purchase appears on a bank or card record. For research buyers, that is the concrete privacy gain.",
    href: "/how-to-pay-with-crypto/?ref=anon-crypto",
    cta: "How crypto checkout works",
  },
  {
    icon: ScrollText,
    title: "What Titan actually collects",
    body: "To fulfill an order Titan needs a shipping address and a way to reach you about the order — that's it. There is no card vault, no credit check, and no resale of payment data, because there is no card data to begin with. The less collected, the less that can ever leak.",
    href: "/legal/privacy/?ref=anon-crypto",
    cta: "Privacy policy",
  },
  {
    icon: EyeOff,
    title: "Where crypto is — and isn't — anonymous",
    body: "Be precise: public-chain transactions (BTC, SOL, USDC) are recorded on a ledger anyone can read, so crypto is pseudonymous, not invisible. What it does is decouple the purchase from your card identity and bank. If on-chain privacy matters to your threshold, a fresh wallet and a stablecoin keep the footprint minimal.",
    href: "/pay-for-peptides-with-usdc-crypto/?ref=anon-crypto",
    cta: "Pay with USDC",
  },
  {
    icon: ShieldCheck,
    title: "Privacy is not a reason to skip the COA",
    body: "Buying quietly and buying carelessly are different things. The same documentation screen applies: confirm a lot-matched release sheet, an HPLC purity target, and identity confirmation before you send. Crypto has no chargeback, so the paper trail is what protects the order regardless of how private the payment is.",
    href: "/coa-verified-peptide-supplier/?ref=anon-crypto",
    cta: "How to verify a COA",
  },
];

const FAQS = [
  {
    q: "Can I buy research peptides anonymously with crypto?",
    a: "You can buy them privately, but it is more accurate to say 'card-free and pseudonymous' than 'fully anonymous.' Titan Peptide Lab is crypto-only, so there is no card processor in the loop and no card statement line. Titan collects only what's needed to ship — a delivery address and a contact point for the order. Public-chain transactions are still recorded on a ledger, so crypto decouples the purchase from your bank identity rather than making it invisible. All material is research-use only and not for human use.",
  },
  {
    q: "Does Titan store my payment information?",
    a: "No. Because checkout is crypto-only, there is no card number, CVV, or bank credential to store in the first place — nothing to vault, leak, or resell. The only data tied to an order is the shipping address and an order ID recorded with support. This is structurally more private than a card flow, where payment data is handled by multiple processors.",
  },
  {
    q: "Is crypto truly untraceable?",
    a: "No, and any supplier claiming otherwise is overstating it. Bitcoin, SOL, and USDC settle on public ledgers that anyone can inspect, so they are pseudonymous: a transaction isn't labeled with your name, but it is permanently recorded. The practical privacy benefit is removing the card and bank from the purchase. If you want to minimize the on-chain footprint, use a fresh wallet and a stablecoin.",
  },
  {
    q: "Which coins keep a purchase most private and stable?",
    a: "A stablecoin such as USDC on Solana keeps the order total fixed at the quoted USD amount with sub-cent fees, and using a wallet you don't reuse for other identifiable activity keeps the footprint minimal. BTC and SOL are also accepted. The wallet address and network are shown before you send, and an order ID is recorded with support first.",
  },
  {
    q: "Do I still need to verify quality if I'm buying privately?",
    a: "Yes — privacy and due diligence are separate. Confirm a lot-matched release sheet tied to the code on the unit, a stated HPLC purity target, and identity confirmation before paying. Crypto can't be reversed, so the documentation is the protection on the order no matter how private the payment method is.",
  },
];

export default function AnonymousPeptidePurchaseCryptoPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Anonymous Peptide Purchase with Crypto", item: "/anonymous-peptide-purchase-crypto/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Private checkout · crypto-only · research use
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                Buying peptides privately with crypto — the honest version.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                Plenty of stores promise &quot;100% anonymous.&quot; That overstates it. Here&apos;s the accurate picture: Titan Peptide Lab is crypto-only, so there&apos;s no card processor in the loop and nothing on a card statement — and Titan collects only a shipping address and an order contact. What crypto does not do is hide a transaction from a public ledger. Card-free and pseudonymous is the real benefit, and it&apos;s a meaningful one.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/?ref=anon-crypto-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  Browse the catalog
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/how-to-pay-with-crypto/?ref=anon-crypto-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  How to pay with crypto
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
              {POINTS.map(({ icon: Icon, title, body, href, cta }) => (
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
                Private vs anonymous
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
                What crypto checkout hides, and what it doesn&apos;t.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                A short, honest ledger of the tradeoffs — so you can decide where your own privacy threshold actually sits rather than trusting a marketing claim.
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["Hidden from your bank", "No card processor, no statement line, no credit check."],
                ["Minimal data held", "Only a shipping address + order contact; no card vault."],
                ["Still on a public ledger", "Chain transactions are pseudonymous, not invisible."],
                ["Your move for more privacy", "Use a fresh wallet + a stablecoin to keep the footprint small."],
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
              <li><Link className="hover:underline" href="/buy-peptides-with-crypto/?ref=anon-crypto">Buy peptides with crypto (all coins) →</Link></li>
              <li><Link className="hover:underline" href="/pay-for-peptides-with-usdc-crypto/?ref=anon-crypto">Pay for peptides with USDC →</Link></li>
              <li><Link className="hover:underline" href="/buy-bpc-157-with-bitcoin/?ref=anon-crypto">Buy BPC-157 with Bitcoin →</Link></li>
              <li><Link className="hover:underline" href="/coa-verified-peptide-supplier/?ref=anon-crypto">COA-verified peptide supplier →</Link></li>
              <li><Link className="hover:underline" href="/shipping-faq/?ref=anon-crypto">Shipping & discretion FAQ →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Ready to order without the card rails?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Browse the catalog for current pricing and lot documentation, or read the crypto checkout walkthrough first.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/?ref=anon-crypto-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                Browse catalog
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/how-to-pay-with-crypto/?ref=anon-crypto-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
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
