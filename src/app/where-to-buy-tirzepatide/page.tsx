import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CreditCard, FileSearch, FlaskConical, Truck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Where to Buy Tirzepatide for Research | GLP-1/GIP Research Peptides | Titan Peptide Lab";
const DESCRIPTION =
  "Where to buy tirzepatide-class GLP-1 research peptides and how to screen a source: lot-matched COAs, HPLC purity targets, crypto checkout, and discreet shipping. Titan stocks the triple-agonist research compound retatrutide (LY3437943) — tirzepatide is not stocked. Research use only, not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/where-to-buy-tirzepatide/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/where-to-buy-tirzepatide/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const STEPS = [
  {
    icon: FileSearch,
    title: "Screen the paperwork, not the grid",
    body: "Tirzepatide is sold in the research-reagent market, not as a commercial medicine, so a clean-looking product grid tells you nothing. The screen that matters is a lot-matched release sheet referenced to the exact code printed on the vial — with an HPLC purity target and mass-spec identity confirmation — rather than a generic spec sheet reused across every batch.",
    href: "/coa-verified-peptide-supplier/?ref=buy-tirz",
    cta: "How to verify a COA",
  },
  {
    icon: FlaskConical,
    title: "Match the receptor profile to your study",
    body: "Tirzepatide is a dual GLP-1 / GIP receptor agonist. Retatrutide (LY3437943) — the GLP-1-class compound Titan stocks — adds glucagon receptor activity, making it a GLP-1 / GIP / glucagon triple agonist. Titan does not stock tirzepatide. Confirm which incretin-pathway profile your protocol actually calls for before you order, because the two molecules are not interchangeable.",
    href: "/retatrutide-vs-tirzepatide-vs-semaglutide/?ref=buy-tirz",
    cta: "Compare the GLP-1 family",
  },
  {
    icon: CreditCard,
    title: "Know the checkout terms up front",
    body: "Titan is crypto-only (BTC, USDC, SOL). The network and wallet address are shown before payment, and an order ID is recorded with support before anything is sent. A stablecoin like USDC holds the order total at exactly the quoted figure, which matters on higher-ticket metabolic compounds.",
    href: "/how-to-pay-with-crypto/?ref=buy-tirz",
    cta: "See crypto checkout",
  },
  {
    icon: Truck,
    title: "Confirm fulfillment before paying",
    body: "Shipping rate, dispatch target, and plain-parcel labeling should be visible before you commit. Crypto payments can't be reversed, so the supplier's documentation — not a card chargeback — is the protection. Titan confirms payment on-chain before dispatch and ships every order with a lot-matched release sheet.",
    href: "/shipping-faq/?ref=buy-tirz",
    cta: "Shipping FAQ",
  },
];

const FAQS = [
  {
    q: "Does Titan Peptide Lab sell tirzepatide?",
    a: "No. Titan does not stock tirzepatide. The GLP-1-class research compound Titan supplies is retatrutide (LY3437943), a GLP-1 / GIP / glucagon triple agonist provided as a lyophilized powder for in-vitro laboratory research. We say this plainly rather than redirecting a tirzepatide search to a mislabeled vial — if your protocol specifically requires tirzepatide's dual GLP-1/GIP profile, retatrutide is a different molecule with an added glucagon-receptor component.",
  },
  {
    q: "Where can I buy tirzepatide-class research peptides?",
    a: "Buy from a supplier that clearly separates laboratory research use from human use and exposes a lot-matched release sheet, an HPLC purity target, mass-spec identity confirmation, visible shipping terms, and clear checkout. Titan Peptide Lab supplies research-use retatrutide (LY3437943) — a GLP-1 / GIP / glucagon triple agonist — with a lot-matched documentation workflow and crypto-only checkout. It is sold strictly for in-vitro laboratory research, not for human use.",
  },
  {
    q: "What is the difference between tirzepatide and retatrutide?",
    a: "Tirzepatide is a dual agonist active at the GLP-1 and GIP receptors. Retatrutide is an investigational triple agonist active at the GLP-1, GIP, and glucagon receptors. Both appear in incretin-pathway and metabolic-signaling research literature, but the added glucagon activity makes retatrutide a distinct molecule with a broader receptor profile. Titan supplies retatrutide strictly as a research compound and makes no human-use, therapeutic, or efficacy claims about either.",
  },
  {
    q: "Is tirzepatide approved or available for human use?",
    a: "Research-grade tirzepatide sold as a reagent is not approved by the FDA or any regulator for human use and is not a commercial medicine. Titan supplies retatrutide only as a research-use-only reagent for in-vitro laboratory work — not for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
  {
    q: "How do I verify the quality of a research peptide before buying?",
    a: "Ask for a lot-matched certificate of analysis tied to the code on the vial you will actually receive, not a stock document. It should show an HPLC purity result against a stated target and a mass-spec identity confirmation. Confirm the format (Titan ships lyophilized powder for reconstitution), the vial size on the product page, and the checkout and shipping terms. A source that hides any of these is the one to skip.",
  },
  {
    q: "Is it safe to pay for research peptides with crypto before shipping?",
    a: "Crypto payments can't be reversed, so the right screen is the supplier's documentation, not chargeback protection. With Titan an order ID is recorded with support before payment, many new buyers start with a single vial to vet the source, and payment is confirmed on-chain before dispatch. Every order ships with a lot-matched release sheet tied to the lot code on the vial, and unopened items are returnable within 14 days.",
  },
];

export default function WhereToBuyTirzepatidePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Where to Buy Tirzepatide for Research", item: "/where-to-buy-tirzepatide/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Tirzepatide-class buyer path · research use only
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                Where to buy tirzepatide-class research material without the bait-and-switch.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                Searching for research-grade tirzepatide turns up endless product grids and very little paperwork — and plenty of sources that quietly swap one GLP-1 for another at checkout. We&apos;ll be direct: Titan does not stock tirzepatide. The GLP-1-class compound we supply is retatrutide (LY3437943), a GLP-1 / GIP / glucagon triple agonist. If you&apos;re sourcing incretin-pathway research material, the screen is the same either way — confirm the lot release sheet and purity target, match the receptor profile to your study, then check checkout and shipping terms.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/retatrutide/?ref=buy-tirz-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View retatrutide
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/retatrutide-vs-tirzepatide-vs-semaglutide/?ref=buy-tirz-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  Compare the GLP-1 family
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
                The GLP-1 compound Titan actually stocks
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
                Retatrutide, documented batch by batch.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                Rather than redirect a tirzepatide search to a mislabeled vial, Titan lists exactly one GLP-1-class research compound — retatrutide (LY3437943) — and exposes the questions buyers actually ask: what is the lot, how is purity measured, which checkout networks are accepted, how fast it ships, and where the research-use boundary sits. If your study needs tirzepatide&apos;s dual GLP-1/GIP profile specifically, the comparison page lays out exactly how the two molecules differ so you can decide.
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["Compound", "Retatrutide (LY3437943) — GLP-1/GIP/glucagon triple agonist."],
                ["Format", "Lyophilized powder; reconstitute before in-vitro use."],
                ["COA path", "Lot-matched release sheet tied to the code on the vial."],
                ["Purity target", "HPLC ≥99% internal release target, identity confirmation by MS."],
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
              <li><Link className="hover:underline" href="/retatrutide-vs-tirzepatide-vs-semaglutide/?ref=buy-tirz">Retatrutide vs tirzepatide vs semaglutide →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-retatrutide/?ref=buy-tirz">Where to buy retatrutide →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-semaglutide-research/?ref=buy-tirz">Where to buy semaglutide for research →</Link></li>
              <li><Link className="hover:underline" href="/coa-verified-peptide-supplier/?ref=buy-tirz">COA-verified peptide supplier →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-research-peptides/?ref=buy-tirz">Where to buy research peptides →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Sourcing GLP-1/GIP research material?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the retatrutide product page for current pricing, vial size, lot documentation, and checkout — or compare the GLP-1 family first to confirm the receptor profile your protocol needs.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/retatrutide/?ref=buy-tirz-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                Retatrutide
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/start/?ref=buy-tirz-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
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
