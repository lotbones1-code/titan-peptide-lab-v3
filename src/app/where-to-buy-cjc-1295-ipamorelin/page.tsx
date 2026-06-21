import type { Metadata } from "next";
import Link from "next/link";
import { CompoundBuyMesh } from "@/components/site/compound-buy-mesh";
import { ArrowRight, CreditCard, FileSearch, FlaskConical, Truck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Where to Buy CJC-1295 + Ipamorelin | Research Use | Titan Peptide Lab";
const DESCRIPTION =
  "Where to buy the CJC-1295 + Ipamorelin blend for laboratory research: a documentation-first buyer path with lot-matched COAs, HPLC purity targets, crypto checkout, and discreet shipping. Titan supplies a research-use CJC-1295/Ipamorelin vial.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/where-to-buy-cjc-1295-ipamorelin/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/where-to-buy-cjc-1295-ipamorelin/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const STEPS = [
  {
    icon: FileSearch,
    title: "Confirm the lot documentation",
    body: "CJC-1295 and Ipamorelin are growth-hormone-secretagogue peptides studied together across GH/IGF-1 signaling literature. For a blend, the paperwork matters twice: confirm a lot-matched release sheet referenced to the code on the vial that documents both components, not a generic stock spec sheet.",
    href: "/coa-verified-peptide-supplier/?ref=buy-cjc-ipa",
    cta: "How to verify a COA",
  },
  {
    icon: FlaskConical,
    title: "Confirm format and purity target",
    body: "Titan's CJC-1295 + Ipamorelin is supplied as a lyophilized blend for reconstitution before in-vitro use. Confirm the HPLC purity target and identity confirmation for each component, and check the listed vial size on the product page against your research design before ordering.",
    href: "/lab-testing/?ref=buy-cjc-ipa",
    cta: "See the testing workflow",
  },
  {
    icon: CreditCard,
    title: "Know the checkout terms",
    body: "Titan uses crypto-only checkout (BTC, USDC, SOL). The network and wallet are shown before payment, and an order ID is recorded with support before any payment is sent.",
    href: "/how-to-pay-with-crypto/?ref=buy-cjc-ipa",
    cta: "See crypto checkout",
  },
  {
    icon: Truck,
    title: "Confirm fulfillment before paying",
    body: "Shipping rate, dispatch target, and plain-parcel labeling should be visible up front. Crypto payments can't be reversed, so the supplier's paper trail is the screen — not chargeback protection.",
    href: "/shipping-faq/?ref=buy-cjc-ipa",
    cta: "Shipping FAQ",
  },
];

const FAQS = [
  {
    q: "Where can I buy CJC-1295 + Ipamorelin for research?",
    a: "Buy from a supplier that clearly separates laboratory research use from human use and provides a lot-matched release sheet documenting both components, HPLC purity targets, identity confirmation, visible shipping terms, and clear checkout. Titan Peptide Lab supplies the research-use CJC-1295 + Ipamorelin blend as a lyophilized vial with a lot-matched documentation workflow and crypto-only checkout. It is sold strictly for in-vitro laboratory research, not for human use.",
  },
  {
    q: "What is the CJC-1295 + Ipamorelin blend?",
    a: "CJC-1295 is a long-acting GHRH analog and Ipamorelin is a selective growth-hormone secretagogue (a ghrelin-receptor agonist). They are studied together in growth-hormone and IGF-1 research because they engage complementary pathways. Titan supplies the blend strictly as a research compound — not for human use.",
  },
  {
    q: "Why are CJC-1295 and Ipamorelin studied as a pair?",
    a: "In the research literature, CJC-1295 (a GHRH analog) and Ipamorelin (a selective GH secretagogue) are frequently examined together because they act on different parts of the growth-hormone axis. Researchers comparing GH-secretagogue protocols often reference the pair. See the CJC-1295 + Ipamorelin research guide for a documentation-first overview.",
  },
  {
    q: "How much is CJC-1295 + Ipamorelin at Titan?",
    a: "Current pricing and the available vial size are shown on the CJC-1295 + Ipamorelin product page, which is always the source of truth for price and documentation. First-discount and bulk codes are shown at checkout.",
  },
  {
    q: "Is CJC-1295 + Ipamorelin for human use?",
    a: "No. Titan Peptide Lab's CJC-1295 + Ipamorelin blend is sold strictly for in-vitro laboratory research. It is not for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
];

export default function WhereToBuyCjcIpamorelinPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Where to Buy CJC-1295 + Ipamorelin", item: "/where-to-buy-cjc-1295-ipamorelin/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                CJC-1295 + Ipamorelin buyer path · research use
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                Where to buy CJC-1295 + Ipamorelin without guessing on the batch.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                The CJC-1295 + Ipamorelin blend is one of the most-searched growth-hormone-secretagogue pairs in research — and searching for it turns up plenty of product grids and very little paperwork. The right screen is documentation first: for a blend, confirm a lot release sheet that covers both components and the purity targets, confirm the format, then check the checkout and shipping terms. Titan supplies a research-use lyophilized vial with a visible COA workflow.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/cjc-1295-ipamorelin/?ref=buy-cjc-ipa-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View CJC-1295 + Ipamorelin
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/cjc-1295-ipamorelin-research-guide/?ref=buy-cjc-ipa-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  Read the research guide
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
                Documentation-first, for blend buyers who vet the source.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                The site is built around the questions blend buyers actually ask: what is the lot, how is each component&apos;s purity measured, which checkout networks are accepted, how fast does it ship, and where is the research-use boundary?
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["Format", "Lyophilized blend; reconstitute before in-vitro use."],
                ["COA path", "Lot-matched release sheet tied to the code on the vial."],
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
              <li><Link className="hover:underline" href="/cjc-1295-ipamorelin-research-guide/?ref=buy-cjc-ipa">CJC-1295 + Ipamorelin research guide →</Link></li>
              <li><Link className="hover:underline" href="/peptide-reconstitution-calculator/?ref=buy-cjc-ipa">Peptide reconstitution calculator →</Link></li>
              <li><Link className="hover:underline" href="/coa-verified-peptide-supplier/?ref=buy-cjc-ipa">COA-verified peptide supplier →</Link></li>
              <li><Link className="hover:underline" href="/peptide-supplier-checklist/?ref=buy-cjc-ipa">Research peptide supplier checklist →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-research-peptides/?ref=buy-cjc-ipa">Where to buy research peptides →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Ready to buy CJC-1295 + Ipamorelin for research?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the product page for current pricing, vial size, lot documentation, and checkout — or start with the recommended buyer routes.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/cjc-1295-ipamorelin/?ref=buy-cjc-ipa-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                CJC-1295 + Ipamorelin
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/start/?ref=buy-cjc-ipa-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
                Start here
              </Link>
            </div>
          </div>
        </section>
        <CompoundBuyMesh current="where-to-buy-cjc-1295-ipamorelin" />
      </main>
      <Footer />
    </>
  );
}
