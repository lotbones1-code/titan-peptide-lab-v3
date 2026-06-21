import type { Metadata } from "next";
import Link from "next/link";
import { CompoundBuyMesh } from "@/components/site/compound-buy-mesh";
import { ArrowRight, CreditCard, FileSearch, FlaskConical, Truck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Where to Buy BPC-157 Nasal Spray | Research Use | Titan Peptide Lab";
const DESCRIPTION =
  "Where to buy BPC-157 nasal spray for research use: a documentation-first buyer path with lot-matched COAs, HPLC purity targets, crypto checkout, and discreet shipping. Titan stocks a 15mL · 500mcg/actuation spray.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/where-to-buy-bpc-157-nasal-spray/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/where-to-buy-bpc-157-nasal-spray/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const STEPS = [
  {
    icon: FileSearch,
    title: "Confirm the lot documentation",
    body: "Before price, check that the supplier exposes a lot-matched release sheet referenced to the code on the bottle — not a generic stock spec sheet. That paper trail is what makes a research order usable.",
    href: "/coa-verified-peptide-supplier/?ref=buy-bpc-spray",
    cta: "How to verify a COA",
  },
  {
    icon: FlaskConical,
    title: "Confirm format and concentration",
    body: "Titan's BPC-157 nasal spray is a ready-to-use solution at 15mL · 500mcg per actuation. If you need a researcher-set concentration instead, the lyophilized vial is the better fit.",
    href: "/bpc-157-nasal-spray-vs-vial/?ref=buy-bpc-spray",
    cta: "Spray vs vial",
  },
  {
    icon: CreditCard,
    title: "Know the checkout terms",
    body: "Titan uses crypto-only checkout (BTC, USDC, SOL). The network and wallet are shown before payment, and an order ID is recorded with support before any payment is sent.",
    href: "/how-to-pay-with-crypto/?ref=buy-bpc-spray",
    cta: "See crypto checkout",
  },
  {
    icon: Truck,
    title: "Confirm fulfillment before paying",
    body: "Shipping rate, dispatch target, and plain-parcel labeling should be visible up front. Crypto payments can't be reversed, so the supplier's paper trail is the screen — not chargeback protection.",
    href: "/shipping-faq/?ref=buy-bpc-spray",
    cta: "Shipping FAQ",
  },
];

const FAQS = [
  {
    q: "Where can I buy BPC-157 nasal spray for research?",
    a: "Buy from a supplier that clearly separates laboratory research use from human use and provides a lot-matched release sheet, HPLC purity target, identity confirmation, visible shipping terms, and clear checkout. Titan Peptide Lab sells a research-use BPC-157 nasal spray (15mL, 500mcg per actuation) with a lot-matched documentation workflow and crypto-only checkout.",
  },
  {
    q: "How much is BPC-157 nasal spray at Titan?",
    a: "Current pricing is shown on the BPC-157 nasal spray product page, where the size (15mL · 500mcg per actuation) and lot documentation are also listed. Pricing on the live product page is always the source of truth. First-discount and bulk codes are shown at checkout.",
  },
  {
    q: "Is it safe to pay for BPC-157 nasal spray with crypto before shipping?",
    a: "Crypto payments can't be reversed, so the right screen is the supplier's documentation, not chargeback protection. With Titan an order ID is recorded with support before payment, many new buyers start with a single unit to vet the source, and payment is confirmed on-chain before dispatch. Every order ships with a lot-matched release sheet tied to the lot code on the bottle, and unopened items are returnable within 14 days.",
  },
  {
    q: "Should I buy the BPC-157 nasal spray or the vial?",
    a: "The nasal spray is a ready-to-use fixed-concentration format with low handling friction; the lyophilized vial lets you set the working concentration at reconstitution. The spray-vs-vial comparison page breaks down which format fits which research design.",
  },
  {
    q: "Is BPC-157 nasal spray for human use?",
    a: "No. Titan Peptide Lab's BPC-157 nasal spray is sold strictly for in-vitro laboratory research. It is not for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
];

export default function WhereToBuyBpcSprayPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Where to Buy BPC-157 Nasal Spray", item: "/where-to-buy-bpc-157-nasal-spray/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                BPC-157 nasal spray buyer path · research use
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                Where to buy BPC-157 nasal spray without guessing on the batch.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                Searching for BPC-157 nasal spray turns up plenty of product grids and very little paperwork. The right screen is documentation first: confirm the lot release sheet and purity target, confirm the format, then check the checkout and shipping terms. Titan stocks a ready-to-use 15mL · 500mcg/actuation spray with a visible COA workflow.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/bpc-157-nasal-spray/?ref=buy-bpc-spray-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View BPC-157 nasal spray
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/lab-testing/?ref=buy-bpc-spray-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  See the testing workflow
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
                Documentation-first, for BPC-157 buyers who vet the source.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                The site is built around the questions BPC-157 buyers actually ask: what is the lot, how is purity measured, which checkout networks are accepted, how fast does it ship, and where is the research-use boundary?
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["Format", "Ready-to-use nasal spray, 15mL · 500mcg per actuation."],
                ["COA path", "Lot-matched release sheet tied to the code on the bottle."],
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
              <li><Link className="hover:underline" href="/bpc-157-nasal-spray-vs-vial/?ref=buy-bpc-spray">BPC-157 nasal spray vs vial →</Link></li>
              <li><Link className="hover:underline" href="/blog/bpc-157-nasal-spray-complete-guide/?ref=buy-bpc-spray">BPC-157 nasal spray complete guide →</Link></li>
              <li><Link className="hover:underline" href="/tb-500-vs-bpc-157/?ref=buy-bpc-spray">TB-500 vs BPC-157 →</Link></li>
              <li><Link className="hover:underline" href="/peptide-nasal-spray-supplier/?ref=buy-bpc-spray">Peptide nasal spray supplier overview →</Link></li>
              <li><Link className="hover:underline" href="/peptide-supplier-checklist/?ref=buy-bpc-spray">Research peptide supplier checklist →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Ready to buy BPC-157 nasal spray?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the product page for current pricing, lot documentation, and checkout — or start with three recommended routes.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/bpc-157-nasal-spray/?ref=buy-bpc-spray-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                BPC-157 nasal spray
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/start/?ref=buy-bpc-spray-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
                Start here
              </Link>
            </div>
          </div>
        </section>
        <CompoundBuyMesh current="where-to-buy-bpc-157-nasal-spray" />
      </main>
      <Footer />
    </>
  );
}
