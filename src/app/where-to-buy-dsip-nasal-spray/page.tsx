import type { Metadata } from "next";
import Link from "next/link";
import { CompoundBuyMesh } from "@/components/site/compound-buy-mesh";
import { ArrowRight, CreditCard, FileSearch, FlaskConical, Truck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Where to Buy DSIP Nasal Spray | Research Use Only | Titan Peptide Lab";
const DESCRIPTION =
  "Where to buy DSIP (delta sleep-inducing peptide) nasal spray for laboratory research: a documentation-first buyer path with lot-matched COAs, HPLC purity targets, a ready-to-use spray format, crypto checkout, and discreet shipping. DSIP is a synthetic neuropeptide supplied strictly for research use — not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/where-to-buy-dsip-nasal-spray/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/where-to-buy-dsip-nasal-spray/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const STEPS = [
  {
    icon: FileSearch,
    title: "Confirm the lot documentation",
    body: "DSIP (delta sleep-inducing peptide) is a short endogenous neuropeptide studied in the sleep-architecture and recovery literature. It is not a commercial pharmaceutical, so the real screen when buying is the paperwork: confirm the supplier exposes a lot-matched release sheet referenced to the code on the unit, not a generic stock spec sheet.",
    href: "/coa-verified-peptide-supplier/?ref=buy-dsip",
    cta: "How to verify a COA",
  },
  {
    icon: FlaskConical,
    title: "Decide on format — spray stability matters",
    body: "DSIP is a nine-residue peptide, and the format affects handling. Titan supplies it as a ready-to-use nasal spray at a fixed concentration, which removes a reconstitution step and the dilution error that comes with it. Confirm the listed concentration and the HPLC purity target against your study design before ordering.",
    href: "/research/dsip-sleep-recovery/?ref=buy-dsip",
    cta: "DSIP research profile",
  },
  {
    icon: CreditCard,
    title: "Know the checkout terms",
    body: "Titan uses crypto-only checkout (BTC, USDC, SOL). The network and wallet are shown before payment, and an order ID is recorded with support before any payment is sent. For a small first order, USDC keeps the total stable.",
    href: "/how-to-pay-with-crypto/?ref=buy-dsip",
    cta: "See crypto checkout",
  },
  {
    icon: Truck,
    title: "Confirm fulfillment before paying",
    body: "Shipping rate, dispatch target, and plain-parcel labeling should be visible up front. Crypto payments can't be reversed, so the supplier's paper trail is the screen — not chargeback protection. Unopened items are returnable within 14 days.",
    href: "/shipping-faq/?ref=buy-dsip",
    cta: "Shipping FAQ",
  },
];

const FAQS = [
  {
    q: "Where can I buy DSIP nasal spray for research?",
    a: "Buy from a supplier that clearly separates laboratory research use from human use and provides a lot-matched release sheet, HPLC purity target, identity confirmation, visible shipping terms, and clear checkout. Titan Peptide Lab supplies research-use DSIP as a ready-to-use nasal spray with a lot-matched documentation workflow and crypto-only checkout. It is sold strictly for in-vitro laboratory research, not for human use.",
  },
  {
    q: "What is DSIP?",
    a: "DSIP, or delta sleep-inducing peptide, is a short endogenous neuropeptide that appears in the research literature on sleep architecture, the stress axis, and recovery. Titan supplies it strictly as a research compound and makes no human-use, therapeutic, or efficacy claims.",
  },
  {
    q: "Does Titan sell DSIP as a nasal spray or a vial?",
    a: "Titan supplies DSIP as a ready-to-use nasal spray at a fixed concentration, which removes the reconstitution step. The product page lists the current concentration, size, and lot documentation.",
  },
  {
    q: "How is DSIP different from other sleep-research peptides?",
    a: "DSIP is a distinct nine-residue sequence studied for its role in sleep and the stress response, and it should not be confused with other compounds that appear in recovery or sleep contexts. Each Titan compound ships with its own lot-matched documentation so the identity and purity of the specific peptide can be confirmed.",
  },
  {
    q: "Is it safe to pay for DSIP with crypto before shipping?",
    a: "Crypto payments can't be reversed, so the right screen is the supplier's documentation, not chargeback protection. With Titan an order ID is recorded with support before payment, many new buyers start with a single unit to vet the source, and payment is confirmed on-chain before dispatch. Every order ships with a lot-matched release sheet, and unopened items are returnable within 14 days.",
  },
  {
    q: "Is DSIP for human use?",
    a: "No. Titan Peptide Lab's DSIP is sold strictly for in-vitro laboratory research. It is not for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
];

export default function WhereToBuyDsipNasalSprayPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Where to Buy DSIP Nasal Spray", item: "/where-to-buy-dsip-nasal-spray/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                DSIP buyer path · research use only
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                Where to buy DSIP nasal spray without guessing on the batch.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                DSIP — delta sleep-inducing peptide — is a short endogenous neuropeptide studied in the sleep-architecture and recovery literature, which means it isn&apos;t a commercial pharmaceutical, and documentation is where the difference between sources shows up. The right screen is documentation first: confirm the lot release sheet and purity target, confirm the spray concentration, then check the checkout and shipping terms. Titan supplies a research-use, ready-to-use nasal spray with a visible COA workflow.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/dsip-nasal-spray/?ref=buy-dsip-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View DSIP nasal spray
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/research/dsip-sleep-recovery/?ref=buy-dsip-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  DSIP research profile
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
                Documentation-first, for DSIP buyers who vet the source.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                The site is built around the questions DSIP buyers actually ask: what is the lot, how is purity measured, what concentration is the spray, which checkout networks are accepted, and where is the research-use boundary?
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["Format", "Ready-to-use nasal spray at fixed concentration; no reconstitution."],
                ["COA path", "Lot-matched release sheet tied to the code on the unit."],
                ["Purity target", "HPLC ≥99% internal release target, identity confirmation by MS."],
                ["Payment", "Crypto-only checkout: BTC, USDC, SOL."],
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
              <li><Link className="hover:underline" href="/blog/dsip-nasal-spray-delta-sleep-peptide/?ref=buy-dsip">DSIP nasal spray research guide →</Link></li>
              <li><Link className="hover:underline" href="/research/dsip-sleep-recovery/?ref=buy-dsip">DSIP and sleep recovery research profile →</Link></li>
              <li><Link className="hover:underline" href="/coa-verified-peptide-supplier/?ref=buy-dsip">COA-verified peptide supplier →</Link></li>
              <li><Link className="hover:underline" href="/peptide-supplier-checklist/?ref=buy-dsip">Research peptide supplier checklist →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-research-peptides/?ref=buy-dsip">Where to buy research peptides →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Ready to buy DSIP nasal spray for research?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the product page for current pricing, concentration, lot documentation, and checkout — or start with the recommended buyer routes.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/dsip-nasal-spray/?ref=buy-dsip-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                DSIP nasal spray
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/start/?ref=buy-dsip-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
                Start here
              </Link>
            </div>
          </div>
        </section>
        <CompoundBuyMesh current="where-to-buy-dsip-nasal-spray" />
      </main>
      <Footer />
    </>
  );
}
