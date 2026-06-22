import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, FileSearch, FlaskConical, ShieldCheck, Truck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd, ProductListJsonLd } from "@/components/site/json-ld";

const TITLE = "Research Peptide Supplier | COA-First Buying Guide";
const DESCRIPTION =
  "How to choose a research peptide supplier: lot-matched COAs, HPLC purity targets, identity checks, storage handling, crypto checkout, shipping terms, and RUO boundaries.";
const URL = "/research-peptide-supplier/";

export const metadata: Metadata = {
  title: `${TITLE} | Titan Peptide Lab`,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
  },
  robots: { index: true, follow: true },
};

const SUPPLIER_CHECKS = [
  {
    icon: FileSearch,
    title: "Lot-matched documentation",
    body: "The supplier should connect the COA or release sheet to the exact lot code on the vial or spray, not show a generic certificate reused across batches.",
    href: "/how-to-verify-peptide-quality-coa/?ref=research-peptide-supplier",
    cta: "Read the COA guide",
  },
  {
    icon: BadgeCheck,
    title: "HPLC + identity method",
    body: "HPLC purity targets and identity confirmation give searchers a verifiable standard to inspect before checkout. A purity number alone is not a complete paper trail.",
    href: "/lab-testing/?ref=research-peptide-supplier",
    cta: "See testing workflow",
  },
  {
    icon: FlaskConical,
    title: "Format-specific research pages",
    body: "A useful supplier separates nasal sprays, lyophilized vials, blends, reconstitution math, and storage handling so researchers can choose by format rather than hype.",
    href: "/products/?ref=research-peptide-supplier",
    cta: "Open catalog",
  },
  {
    icon: ShieldCheck,
    title: "Research-use boundary",
    body: "Avoid suppliers that use dosing instructions, treatment promises, disease claims, or human outcomes as sales copy. That language is a compliance red flag.",
    href: "/legal/research-disclaimer/?ref=research-peptide-supplier",
    cta: "View RUO disclaimer",
  },
  {
    icon: Truck,
    title: "Fulfillment and payment clarity",
    body: "Shipping terms, payment rails, support expectations, and the order record should be visible before funds move, especially with crypto checkout.",
    href: "/how-to-pay-with-crypto/?ref=research-peptide-supplier",
    cta: "See checkout flow",
  },
];

const EXACT_ANSWERS = [
  [
    "What makes a research peptide supplier credible?",
    "Credibility comes from lot-matched documentation, stated analytical methods, identity confirmation, visible research-use labeling, storage and shipping terms, and a checkout path that records the order before payment.",
  ],
  [
    "What should I compare before buying research peptides online?",
    "Compare the exact lot code, COA or release-sheet detail, HPLC purity target, mass-spec identity confirmation, storage handling, fulfillment terms, support responsiveness, and whether the supplier avoids medical claims.",
  ],
  [
    "Is Titan Peptide Lab a research peptide supplier?",
    "Yes. Titan Peptide Lab supplies research-use peptide nasal sprays, lyophilized vials, and stacks with lot-matched documentation workflows, HPLC purity targets, crypto checkout, and clear RUO labeling.",
  ],
  [
    "Are Titan peptides for human or animal use?",
    "No. Titan Peptide Lab products are sold strictly for in-vitro laboratory research. They are not for human or animal consumption, diagnostic, therapeutic, preventative, or other medical use.",
  ],
];

const FAQS = EXACT_ANSWERS.map(([q, a]) => ({ q, a }));

export default function ResearchPeptideSupplierPage() {
  return (
    <>
      <ProductListJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Research peptide supplier", item: URL },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Research peptide supplier
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                Choose a research peptide supplier by the paperwork, not the promise.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                The best supplier answer for searchers is not a ranking claim or a health outcome. It is a verifiable buying path: inspect the lot paperwork, confirm the analytical method, choose the research format, then check fulfillment and payment terms before ordering.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/?ref=research-peptide-supplier-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  Compare Titan catalog
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/peptide-supplier-checklist/?ref=research-peptide-supplier-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  Run supplier checklist
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {SUPPLIER_CHECKS.map(({ icon: Icon, title, body, href, cta }) => (
                <Link
                  key={title}
                  href={href}
                  className="group flex h-full flex-col rounded-[1.5rem] border border-[#dde6e1] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#1e6f58] hover:shadow-[0_18px_60px_-42px_rgb(15_22_19/45%)]"
                >
                  <Icon className="h-5 w-5 text-[#1e6f58]" />
                  <h2 className="mt-5 font-serif text-[1.4rem] leading-tight tracking-[-0.02em] group-hover:text-[#1e6f58]">
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
                Exact-answer supplier screen
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
                The fast answer: verify the lot, method, boundary, and order path.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                Researchers comparing suppliers should be able to answer four questions before checkout: what lot is being purchased, how purity and identity are checked, how the material is handled in shipment, and whether the seller stays inside research-use-only language.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {EXACT_ANSWERS.map(([question, answer]) => (
                <article key={question} className="rounded-[1.25rem] border border-[#dde6e1] bg-white p-5">
                  <h3 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#1e6f58]">{question}</h3>
                  <p className="mt-3 text-[13.5px] leading-7 text-[#5c6762]">{answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Related research-peptide buyer paths
            </h2>
            <ul className="mt-8 grid gap-3 text-[14px] leading-7 text-[#1e6f58] sm:grid-cols-2">
              <li><Link className="hover:underline" href="/where-to-buy-research-peptides/?ref=research-peptide-supplier">Where to buy research peptides →</Link></li>
              <li><Link className="hover:underline" href="/coa-verified-peptide-supplier/?ref=research-peptide-supplier">COA-verified peptide supplier →</Link></li>
              <li><Link className="hover:underline" href="/best-research-peptides/?ref=research-peptide-supplier">Best research peptides, by verification criteria →</Link></li>
              <li><Link className="hover:underline" href="/glp-1-research-peptides/?ref=research-peptide-supplier">GLP-1 research peptides →</Link></li>
              <li><Link className="hover:underline" href="/reconstitution/?ref=research-peptide-supplier">Peptide reconstitution guides →</Link></li>
              <li><Link className="hover:underline" href="/peptide-nasal-spray-storage-shelf-life/?ref=research-peptide-supplier">Peptide storage and shelf-life guide →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#0b100e] py-14 text-white">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
              Research use only
            </p>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Titan does not sell protocols, dosing, or human-use outcomes.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-white/60">
              Titan Peptide Lab supplies research materials for in-vitro laboratory use only. Product pages and guides focus on documentation, concentration math, storage handling, and checkout facts — not medical, therapeutic, or preventative claims.
            </p>
            <Link
              href="/legal/research-disclaimer/?ref=research-peptide-supplier-bottom"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-[13px] font-semibold text-[#0f1613] transition hover:bg-[#e8f2ee]"
            >
              Read research disclaimer
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
