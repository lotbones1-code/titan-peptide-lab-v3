import type { Metadata } from "next";
import Link from "next/link";
import { CompoundBuyMesh } from "@/components/site/compound-buy-mesh";
import { ArrowRight, CreditCard, FileSearch, FlaskConical, Truck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Where to Buy PT-141 Nasal Spray | Research Use | Titan Peptide Lab";
const DESCRIPTION =
  "Where to buy PT-141 (bremelanotide) nasal spray for research use: a documentation-first buyer path with lot-matched COAs, HPLC purity targets, crypto checkout, and discreet shipping. Titan stocks a 10mL · 1mg/actuation spray.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/where-to-buy-pt-141-nasal-spray/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/where-to-buy-pt-141-nasal-spray/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const STEPS = [
  {
    icon: FileSearch,
    title: "Confirm the lot documentation",
    body: "PT-141 (bremelanotide) is a melanocortin-receptor agonist studied in the literature — but the screen for buying is the paperwork. Confirm the supplier exposes a lot-matched release sheet referenced to the code on the bottle, not a generic stock spec sheet.",
    href: "/coa-verified-peptide-supplier/?ref=buy-pt141-spray",
    cta: "How to verify a COA",
  },
  {
    icon: FlaskConical,
    title: "Confirm format and concentration",
    body: "Titan's PT-141 nasal spray is a ready-to-use solution at 10mL · 1mg per actuation. A fixed-concentration spray removes reconstitution handling — confirm the concentration matches your research design before ordering.",
    href: "/peptide-nasal-spray-supplier/?ref=buy-pt141-spray",
    cta: "Nasal spray supplier overview",
  },
  {
    icon: CreditCard,
    title: "Know the checkout terms",
    body: "Titan uses crypto-only checkout (BTC, USDC, SOL). The network and wallet are shown before payment, and an order ID is recorded with support before any payment is sent.",
    href: "/how-to-pay-with-crypto/?ref=buy-pt141-spray",
    cta: "See crypto checkout",
  },
  {
    icon: Truck,
    title: "Confirm fulfillment before paying",
    body: "Shipping rate, dispatch target, and plain-parcel labeling should be visible up front. Crypto payments can't be reversed, so the supplier's paper trail is the screen — not chargeback protection.",
    href: "/shipping-faq/?ref=buy-pt141-spray",
    cta: "Shipping FAQ",
  },
];

const FAQS = [
  {
    q: "Where can I buy PT-141 nasal spray for research?",
    a: "Buy from a supplier that clearly separates laboratory research use from human use and provides a lot-matched release sheet, HPLC purity target, identity confirmation, visible shipping terms, and clear checkout. Titan Peptide Lab sells a research-use PT-141 (bremelanotide) nasal spray (10mL, 1mg per actuation) with a lot-matched documentation workflow and crypto-only checkout.",
  },
  {
    q: "What is PT-141 (bremelanotide)?",
    a: "PT-141, also called bremelanotide, is a synthetic α-MSH analog and melanocortin-receptor (MC3R/MC4R) agonist that appears in melanocortin-pathway and CNS-receptor research literature. Titan supplies it strictly as a research compound — not for human use.",
  },
  {
    q: "How much is PT-141 nasal spray at Titan?",
    a: "Current pricing is shown on the PT-141 nasal spray product page, where the size (10mL · 1mg per actuation) and lot documentation are also listed. Pricing on the live product page is always the source of truth. First-discount and bulk codes are shown at checkout.",
  },
  {
    q: "Is it safe to pay for PT-141 with crypto before shipping?",
    a: "Crypto payments can't be reversed, so the right screen is the supplier's documentation, not chargeback protection. With Titan an order ID is recorded with support before payment, many new buyers start with a single unit to vet the source, and payment is confirmed on-chain before dispatch. Every order ships with a lot-matched release sheet tied to the lot code on the bottle, and unopened items are returnable within 14 days.",
  },
  {
    q: "Is PT-141 nasal spray for human use?",
    a: "No. Titan Peptide Lab's PT-141 nasal spray is sold strictly for in-vitro laboratory research. It is not for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
];

export default function WhereToBuyPt141SprayPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Where to Buy PT-141 Nasal Spray", item: "/where-to-buy-pt-141-nasal-spray/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                PT-141 nasal spray buyer path · research use
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                Where to buy PT-141 nasal spray without guessing on the batch.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                Searching for PT-141 (bremelanotide) nasal spray turns up plenty of product grids and very little paperwork. The right screen is documentation first: confirm the lot release sheet and purity target, confirm the format, then check the checkout and shipping terms. Titan stocks a ready-to-use 10mL · 1mg/actuation spray with a visible COA workflow.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/pt-141-nasal-spray/?ref=buy-pt141-spray-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View PT-141 nasal spray
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/lab-testing/?ref=buy-pt141-spray-hero"
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
                Documentation-first, for PT-141 buyers who vet the source.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                The site is built around the questions PT-141 buyers actually ask: what is the lot, how is purity measured, which checkout networks are accepted, how fast does it ship, and where is the research-use boundary?
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["Format", "Ready-to-use nasal spray, 10mL · 1mg per actuation."],
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
              <li><Link className="hover:underline" href="/blog/pt-141-nasal-spray-research-guide/?ref=buy-pt141-spray">PT-141 nasal spray research guide →</Link></li>
              <li><Link className="hover:underline" href="/pt-141-nasal-spray-vs-injection/?ref=buy-pt141-spray">PT-141 nasal spray vs injection route comparison →</Link></li>
              <li><Link className="hover:underline" href="/peptide-nasal-spray-supplier/?ref=buy-pt141-spray">Peptide nasal spray supplier overview →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-bpc-157-nasal-spray/?ref=buy-pt141-spray">Where to buy BPC-157 nasal spray →</Link></li>
              <li><Link className="hover:underline" href="/peptide-supplier-checklist/?ref=buy-pt141-spray">Research peptide supplier checklist →</Link></li>
              <li><Link className="hover:underline" href="/coa-verified-peptide-supplier/?ref=buy-pt141-spray">COA-verified peptide supplier →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Ready to buy PT-141 nasal spray?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the product page for current pricing, lot documentation, and checkout — or start with three recommended routes.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/pt-141-nasal-spray/?ref=buy-pt141-spray-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                PT-141 nasal spray
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/start/?ref=buy-pt141-spray-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
                Start here
              </Link>
            </div>
          </div>
        </section>
        <CompoundBuyMesh current="where-to-buy-pt-141-nasal-spray" />
      </main>
      <Footer />
    </>
  );
}
