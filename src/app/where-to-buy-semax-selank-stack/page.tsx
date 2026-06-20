import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CreditCard, FileSearch, FlaskConical, Truck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Where to Buy the Semax + Selank Stack | Research Use Only | Titan Peptide Lab";
const DESCRIPTION =
  "Where to buy a Semax + Selank research stack: a documentation-first buyer path with lot-matched COAs, HPLC purity targets, ready-to-use nasal spray formats, crypto checkout, and discreet shipping. Semax and Selank are synthetic research neuropeptides supplied strictly for research use — not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/where-to-buy-semax-selank-stack/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/where-to-buy-semax-selank-stack/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const STEPS = [
  {
    icon: FileSearch,
    title: "Confirm the lot documentation",
    body: "Semax and Selank are synthetic neuropeptides referenced across the cognition, neuroplasticity, and anxiolytic literature. Research-grade material is not a commercial pharmaceutical, so the real screen is the paperwork: confirm a lot-matched release sheet referenced to the code on each unit, not a generic stock spec sheet.",
    href: "/coa-verified-peptide-supplier/?ref=buy-semax-selank",
    cta: "How to verify a COA",
  },
  {
    icon: FlaskConical,
    title: "Two distinct neuropeptides, one workflow",
    body: "Semax and Selank are separate sequences studied for different things — Semax in cognition and neuroplasticity, Selank in the anxiolytic and stress literature — which is why they are so often referenced together. Titan supplies the stack as ready-to-use nasal sprays at fixed concentrations; confirm each concentration and HPLC target against your design.",
    href: "/blog/semax-vs-selank-neuropeptide-comparison/?ref=buy-semax-selank",
    cta: "Semax vs Selank",
  },
  {
    icon: CreditCard,
    title: "Know the checkout terms",
    body: "Titan uses crypto-only checkout (BTC, ETH, USDC, SOL). The network and wallet are shown before payment, and an order ID is recorded with support before any payment is sent. For a small first order, USDC keeps the total stable.",
    href: "/how-to-pay-with-crypto/?ref=buy-semax-selank",
    cta: "See crypto checkout",
  },
  {
    icon: Truck,
    title: "Confirm fulfillment before paying",
    body: "Shipping rate, dispatch target, and plain-parcel labeling should be visible up front. Crypto payments can't be reversed, so the supplier's paper trail is the screen — not chargeback protection. Unopened items are returnable within 14 days.",
    href: "/shipping-faq/?ref=buy-semax-selank",
    cta: "Shipping FAQ",
  },
];

const FAQS = [
  {
    q: "Where can I buy a Semax + Selank stack for research?",
    a: "Buy from a supplier that clearly separates laboratory research use from human use and provides lot-matched release sheets, HPLC purity targets, identity confirmation, visible shipping terms, and clear checkout. Titan Peptide Lab supplies a research-use Semax + Selank stack as ready-to-use nasal sprays with lot-matched documentation and crypto-only checkout. It is sold strictly for in-vitro laboratory research, not for human use.",
  },
  {
    q: "Why are Semax and Selank studied together?",
    a: "They are distinct synthetic neuropeptides referenced in adjacent parts of the nootropic literature — Semax in cognition and neuroplasticity research, Selank in the anxiolytic and stress-response literature — which is why they are frequently compared and paired. They are not interchangeable, and each should be selected on the literature your design is built on.",
  },
  {
    q: "Does Titan sell Semax and Selank as nasal sprays?",
    a: "Yes. Titan supplies the Semax + Selank stack as ready-to-use nasal sprays at fixed concentrations, which removes the reconstitution step. The product page lists the current concentrations, sizes, and lot documentation, and each compound is also available individually.",
  },
  {
    q: "How do I verify purity for both compounds?",
    a: "Look for a lot-matched release sheet on each compound — documentation referenced to the exact lot code on the unit, not a generic stock spec sheet — plus a stated HPLC purity target and identity confirmation. Titan's lab-testing workflow and COA-verification guide explain what a credible paper trail looks like.",
  },
  {
    q: "Is it safe to pay for the stack with crypto before shipping?",
    a: "Crypto payments can't be reversed, so the right screen is the supplier's documentation, not chargeback protection. With Titan an order ID is recorded with support before payment, many new buyers start with a single unit to vet the source, and payment is confirmed on-chain before dispatch. Every order ships with a lot-matched release sheet, and unopened items are returnable within 14 days.",
  },
  {
    q: "Is the Semax + Selank stack for human use?",
    a: "No. Titan Peptide Lab's Semax and Selank are sold strictly for in-vitro laboratory research. They are not for human or animal consumption, diagnostic, therapeutic, or preventative use, and Titan provides no protocols, dosing, or pairing guidance.",
  },
];

export default function WhereToBuySemaxSelankStackPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Where to Buy the Semax + Selank Stack", item: "/where-to-buy-semax-selank-stack/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Semax + Selank buyer path · research use only
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                Where to buy the Semax + Selank stack without guessing on the batch.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                Semax and Selank are two synthetic neuropeptides studied across the cognition, neuroplasticity, and anxiolytic literature — distinct sequences that get referenced together, which is exactly why documentation is where the difference between sources shows up. The right screen is documentation first: confirm each lot release sheet and purity target, confirm the spray concentrations, then check the checkout and shipping terms. Titan supplies a research-use stack as ready-to-use nasal sprays with a visible COA workflow.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/selank-semax-stack/?ref=buy-semax-selank-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View Semax + Selank stack
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/blog/semax-vs-selank-neuropeptide-comparison/?ref=buy-semax-selank-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  Semax vs Selank
                </Link>
              </div>
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
                Documentation-first, for nootropic-peptide buyers who vet the source.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                The site is built around the questions Semax and Selank buyers actually ask: what is the lot, how is purity measured, what concentration is each spray, which checkout networks are accepted, and where is the research-use boundary?
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["Format", "Ready-to-use nasal sprays at fixed concentrations; no reconstitution."],
                ["COA path", "Lot-matched release sheet tied to the code on each unit."],
                ["Purity target", "HPLC ≥99% internal release target, identity confirmation by MS."],
                ["Payment", "Crypto-only checkout: BTC, ETH, USDC, SOL."],
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
              <li><Link className="hover:underline" href="/blog/semax-vs-selank-neuropeptide-comparison/?ref=buy-semax-selank">Semax vs Selank neuropeptide comparison →</Link></li>
              <li><Link className="hover:underline" href="/research/semax-cognition-neuroplasticity/?ref=buy-semax-selank">Semax cognition & neuroplasticity profile →</Link></li>
              <li><Link className="hover:underline" href="/research/selank-anxiolytic-nootropic/?ref=buy-semax-selank">Selank anxiolytic & nootropic profile →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-semax-nasal-spray/?ref=buy-semax-selank">Where to buy Semax nasal spray →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-selank/?ref=buy-semax-selank">Where to buy Selank →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Ready to buy the Semax + Selank stack for research?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the product page for current pricing, concentrations, lot documentation, and checkout — or start with the recommended buyer routes.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/selank-semax-stack/?ref=buy-semax-selank-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                Semax + Selank stack
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/start/?ref=buy-semax-selank-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
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
