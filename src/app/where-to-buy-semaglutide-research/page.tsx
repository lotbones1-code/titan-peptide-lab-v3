import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CreditCard, FileSearch, FlaskConical, Truck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Where to Buy Semaglutide for Research | GLP-1 Research Peptides | Titan Peptide Lab";
const DESCRIPTION =
  "Where to buy GLP-1 research peptides like semaglutide and how to evaluate a source: lot-matched COAs, HPLC purity targets, crypto checkout, and discreet shipping. Titan supplies the triple-agonist research compound retatrutide (LY3437943) — semaglutide is not stocked. Research use only, not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/where-to-buy-semaglutide-research/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/where-to-buy-semaglutide-research/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const STEPS = [
  {
    icon: FileSearch,
    title: "Screen the documentation, not the price",
    body: "GLP-1 research peptides are sold as research reagents, not commercial medicines, so the only real screen is the paperwork. Confirm the supplier exposes a lot-matched release sheet referenced to the code on the vial — an HPLC purity target and mass-spec identity confirmation — rather than a generic stock spec sheet reused across batches.",
    href: "/coa-verified-peptide-supplier/?ref=buy-sema",
    cta: "How to verify a COA",
  },
  {
    icon: FlaskConical,
    title: "Match the compound to your study",
    body: "Semaglutide is a GLP-1 receptor agonist; retatrutide (LY3437943) is a GLP-1 / GIP / glucagon triple agonist studied across incretin-pathway literature. Titan stocks retatrutide as a lyophilized research compound and does not stock semaglutide. Confirm which receptor profile your protocol needs before ordering.",
    href: "/retatrutide-vs-tirzepatide-vs-semaglutide/?ref=buy-sema",
    cta: "Compare the GLP-1 family",
  },
  {
    icon: CreditCard,
    title: "Know the checkout terms",
    body: "Titan uses crypto-only checkout (BTC, USDC, SOL). The network and wallet are shown before payment, and an order ID is recorded with support before any payment is sent.",
    href: "/how-to-pay-with-crypto/?ref=buy-sema",
    cta: "See crypto checkout",
  },
  {
    icon: Truck,
    title: "Confirm fulfillment before paying",
    body: "Shipping rate, dispatch target, and plain-parcel labeling should be visible up front. Crypto payments can't be reversed, so the supplier's paper trail is the screen — not chargeback protection.",
    href: "/shipping-faq/?ref=buy-sema",
    cta: "Shipping FAQ",
  },
];

const FAQS = [
  {
    q: "Does Titan Peptide Lab sell semaglutide?",
    a: "No. Titan does not stock semaglutide. The GLP-1-class research compound Titan supplies is retatrutide (LY3437943), a GLP-1 / GIP / glucagon triple agonist supplied as a lyophilized powder for in-vitro laboratory research. We say this plainly rather than redirecting a semaglutide search to an unrelated product — if your protocol specifically requires semaglutide, retatrutide is a different molecule with a broader receptor profile.",
  },
  {
    q: "Where can I buy GLP-1 research peptides?",
    a: "Buy from a supplier that clearly separates laboratory research use from human use and provides a lot-matched release sheet, HPLC purity target, mass-spec identity confirmation, visible shipping terms, and clear checkout. Titan Peptide Lab supplies research-use retatrutide (LY3437943) — a GLP-1 / GIP / glucagon triple agonist — with a lot-matched documentation workflow and crypto-only checkout. It is sold strictly for in-vitro laboratory research, not for human use.",
  },
  {
    q: "What is the difference between semaglutide and retatrutide?",
    a: "Semaglutide is a single GLP-1 receptor agonist. Retatrutide is an investigational triple agonist active at the GLP-1, GIP, and glucagon receptors. Both appear in incretin-pathway and metabolic-signaling research literature. Titan supplies retatrutide strictly as a research compound and makes no human-use, therapeutic, or efficacy claims about either molecule.",
  },
  {
    q: "Are GLP-1 research peptides approved for human use?",
    a: "Research-grade GLP-1 peptides sold as reagents are not approved by the FDA or any regulator for human use and are not commercial medicines. Titan supplies retatrutide only as a research-use-only reagent for in-vitro laboratory work. It is not for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
  {
    q: "Is it safe to pay for research peptides with crypto before shipping?",
    a: "Crypto payments can't be reversed, so the right screen is the supplier's documentation, not chargeback protection. With Titan an order ID is recorded with support before payment, many new buyers start with a single vial to vet the source, and payment is confirmed on-chain before dispatch. Every order ships with a lot-matched release sheet tied to the lot code on the vial, and unopened items are returnable within 14 days.",
  },
];

export default function WhereToBuySemaglutideResearchPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Where to Buy Semaglutide for Research", item: "/where-to-buy-semaglutide-research/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                GLP-1 research peptide buyer path · research use only
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                Where to buy GLP-1 research peptides without the bait-and-switch.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                Searching for research-grade semaglutide turns up endless product grids and very little paperwork — and plenty of sources that swap one GLP-1 for another at checkout. We&apos;ll be direct: Titan does not stock semaglutide. The GLP-1-class compound we supply is retatrutide (LY3437943), a GLP-1 / GIP / glucagon triple agonist. If you&apos;re sourcing GLP-1 research material, the screen that matters is the same either way — confirm the lot release sheet and purity target, confirm the format, then check checkout and shipping terms.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/retatrutide/?ref=buy-sema-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View retatrutide
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/retatrutide-vs-tirzepatide-vs-semaglutide/?ref=buy-sema-hero"
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
                Rather than redirect a semaglutide search to a mislabeled vial, Titan lists exactly one GLP-1-class research compound — retatrutide (LY3437943) — and exposes the questions buyers actually ask: what is the lot, how is purity measured, which checkout networks are accepted, how fast it ships, and where the research-use boundary sits.
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
              <li><Link className="hover:underline" href="/retatrutide-vs-tirzepatide-vs-semaglutide/?ref=buy-sema">Retatrutide vs tirzepatide vs semaglutide →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-retatrutide/?ref=buy-sema">Where to buy retatrutide →</Link></li>
              <li><Link className="hover:underline" href="/peptide-reconstitution-calculator/?ref=buy-sema">Peptide reconstitution calculator →</Link></li>
              <li><Link className="hover:underline" href="/coa-verified-peptide-supplier/?ref=buy-sema">COA-verified peptide supplier →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-research-peptides/?ref=buy-sema">Where to buy research peptides →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Sourcing GLP-1 research material?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the retatrutide product page for current pricing, vial size, lot documentation, and checkout — or start with the recommended buyer routes.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/retatrutide/?ref=buy-sema-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                Retatrutide
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/start/?ref=buy-sema-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
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
