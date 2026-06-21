import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FlaskConical, GitCompareArrows, FileSearch, Scale } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { CompareMesh } from "@/components/site/compare-mesh";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Semaglutide vs Tirzepatide | GLP-1 Single vs Dual Agonist (Research) | Titan Peptide Lab";
const DESCRIPTION =
  "Semaglutide vs tirzepatide for research: single GLP-1 agonist vs dual GLP-1/GIP agonist, receptor mechanism, and how they sit next to the triple agonist retatrutide. Titan stocks neither — it supplies research-use retatrutide (LY3437943). Research use only, not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/semaglutide-vs-tirzepatide/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/semaglutide-vs-tirzepatide/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const POINTS = [
  {
    icon: GitCompareArrows,
    title: "One receptor vs two",
    body: "The core difference is receptor coverage. Semaglutide is a single agonist that acts at the GLP-1 receptor. Tirzepatide is a dual agonist that engages both the GLP-1 and the GIP (glucose-dependent insulinotropic polypeptide) receptor. In incretin-pathway research the added GIP arm is the whole reason tirzepatide is studied as a distinct molecule rather than a stronger semaglutide.",
    href: "/retatrutide-vs-tirzepatide-vs-semaglutide/?ref=sema-vs-tirz",
    cta: "See the full GLP-1 family",
  },
  {
    icon: Scale,
    title: "Where retatrutide fits",
    body: "Both compounds sit below retatrutide (LY3437943) on the receptor-count ladder. Retatrutide is a triple agonist — GLP-1, GIP, and glucagon — and it is the GLP-1-class compound Titan actually stocks. If a protocol is built around the single-receptor or dual-receptor profile specifically, that's a different molecule; Titan says so rather than substituting one for another at checkout.",
    href: "/where-to-buy-retatrutide/?ref=sema-vs-tirz",
    cta: "Where to buy retatrutide",
  },
  {
    icon: FlaskConical,
    title: "Format and handling",
    body: "Research-grade GLP-1 compounds are typically supplied as lyophilized powder for reconstitution before in-vitro work, not as ready-to-use solutions. Storage, reconstitution volume, and stability differ by molecule and concentration, so the lot documentation and the product page — not a generic spec sheet — are where the real handling details live.",
    href: "/peptide-reconstitution-calculator/?ref=sema-vs-tirz",
    cta: "Reconstitution calculator",
  },
  {
    icon: FileSearch,
    title: "What to verify before buying either",
    body: "Neither molecule is sold as a commercial medicine in the research-reagent market, so a polished product grid proves nothing. The screen that matters is a lot-matched certificate of analysis tied to the exact vial code, an HPLC purity target, and a mass-spec identity confirmation — plus visible checkout and shipping terms. A source hiding any of those is the one to skip.",
    href: "/coa-verified-peptide-supplier/?ref=sema-vs-tirz",
    cta: "How to verify a COA",
  },
];

const FAQS = [
  {
    q: "What is the difference between semaglutide and tirzepatide?",
    a: "Semaglutide is a single GLP-1 receptor agonist. Tirzepatide is a dual agonist that activates both the GLP-1 and GIP receptors. The added GIP-receptor activity is what makes tirzepatide a separate molecule rather than simply a more potent GLP-1 compound. Both appear in incretin-pathway and metabolic-signaling research, but they are not interchangeable. Titan makes no human-use, therapeutic, or efficacy claims about either and supplies the triple agonist retatrutide instead.",
  },
  {
    q: "Does Titan Peptide Lab sell semaglutide or tirzepatide?",
    a: "No. Titan does not stock semaglutide or tirzepatide. The GLP-1-class research compound Titan supplies is retatrutide (LY3437943), a GLP-1 / GIP / glucagon triple agonist provided as a lyophilized powder for in-vitro laboratory research. We state this directly rather than redirecting a semaglutide or tirzepatide search to a mislabeled vial. If your study specifically requires a single- or dual-agonist profile, retatrutide is a different molecule with a broader receptor footprint.",
  },
  {
    q: "Is tirzepatide stronger than semaglutide?",
    a: "In research terms the meaningful distinction is mechanism, not a simple strength ranking. Semaglutide acts on one receptor (GLP-1); tirzepatide acts on two (GLP-1 and GIP). That broader receptor engagement is why tirzepatide is studied as its own molecule. Comparing them as 'stronger' or 'weaker' oversimplifies a difference in receptor coverage. Titan supplies retatrutide strictly as a research reagent and makes no potency, therapeutic, or efficacy claims about any of these compounds.",
  },
  {
    q: "How does retatrutide compare to semaglutide and tirzepatide?",
    a: "Retatrutide (LY3437943) adds a third receptor target — glucagon — on top of GLP-1 and GIP, making it a triple agonist. Semaglutide is single (GLP-1) and tirzepatide is dual (GLP-1/GIP). On the receptor-count ladder the order is semaglutide → tirzepatide → retatrutide. Titan stocks retatrutide as the GLP-1-class research compound; the dedicated three-way comparison page lays out each receptor profile so you can match the molecule to the study.",
  },
  {
    q: "Are research-grade semaglutide and tirzepatide approved for human use?",
    a: "Research-grade GLP-1 compounds sold as reagents are not approved by the FDA or any regulator for human use and are not commercial medicines. They are supplied strictly as research-use-only material for in-vitro laboratory work — not for human or animal consumption, diagnostic, therapeutic, or preventative use. Titan supplies retatrutide on exactly those terms and makes no human-use claims about any incretin compound.",
  },
  {
    q: "How do I buy a GLP-1 research peptide safely?",
    a: "Buy from a supplier that separates laboratory research use from human use, exposes a lot-matched certificate of analysis tied to the vial code, states an HPLC purity target with mass-spec identity confirmation, and shows checkout and shipping terms up front. Titan supplies research-use retatrutide with lot-matched documentation and crypto-only checkout (BTC, USDC, SOL), confirmed on-chain before dispatch. Everything is for in-vitro research, not human use.",
  },
];

export default function SemaglutideVsTirzepatidePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Semaglutide vs Tirzepatide", item: "/semaglutide-vs-tirzepatide/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                GLP-1 family · research use only
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                Semaglutide vs tirzepatide: one receptor or two.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                The most-searched GLP-1 head-to-head comes down to receptor coverage. Semaglutide is a single GLP-1 agonist; tirzepatide is a dual GLP-1 / GIP agonist. Both sit below the triple agonist retatrutide (LY3437943) — the GLP-1-class compound Titan actually stocks. We&apos;ll be direct: Titan does not sell semaglutide or tirzepatide. If you&apos;re sourcing incretin-pathway research material, this page explains how the three molecules differ so you can match the receptor profile to your study. Research use only.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/retatrutide/?ref=sema-vs-tirz-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View retatrutide
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/retatrutide-vs-tirzepatide-vs-semaglutide/?ref=sema-vs-tirz-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  Full 3-way comparison
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {POINTS.map(({ icon: Icon, title, body, href, cta }) => (
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
                Receptor profiles at a glance
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
                Single, dual, triple.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                Lined up by the receptors they engage, the three incretin compounds form a clear ladder. Semaglutide covers GLP-1 alone. Tirzepatide adds GIP. Retatrutide adds glucagon on top of both. The further up the ladder, the broader the receptor footprint — and the more distinct the molecule. None are interchangeable, which is why matching the receptor profile to the research question matters more than picking the &quot;strongest.&quot; Titan supplies the triple agonist, retatrutide, and points single- and dual-agonist studies to the right molecule rather than a substitute vial.
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["Semaglutide", "Single agonist — GLP-1 receptor only."],
                ["Tirzepatide", "Dual agonist — GLP-1 + GIP receptors."],
                ["Retatrutide", "Triple agonist — GLP-1 + GIP + glucagon (Titan stocks this)."],
                ["Format", "Lyophilized powder; reconstitute before in-vitro use."],
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
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] tracking-[-0.035em]">Keep comparing.</h2>
            <ul className="mt-7 space-y-3 text-[14px] leading-7 text-[#1e6f58]">
              <li><Link className="hover:underline" href="/retatrutide-vs-tirzepatide-vs-semaglutide/?ref=sema-vs-tirz">Retatrutide vs tirzepatide vs semaglutide →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-retatrutide/?ref=sema-vs-tirz">Where to buy retatrutide →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-tirzepatide/?ref=sema-vs-tirz">Where to buy tirzepatide (research) →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-semaglutide-research/?ref=sema-vs-tirz">Where to buy semaglutide (research) →</Link></li>
              <li><Link className="hover:underline" href="/coa-verified-peptide-supplier/?ref=sema-vs-tirz">COA-verified peptide supplier →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Sourcing a GLP-1 research compound?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the retatrutide product page for pricing, vial size, and lot documentation — or read the full three-way comparison first to confirm the receptor profile your protocol needs.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/retatrutide/?ref=sema-vs-tirz-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                Retatrutide
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/start/?ref=sema-vs-tirz-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
                Start here
              </Link>
            </div>
          </div>
        </section>
        <CompareMesh current="semaglutide-vs-tirzepatide" />
      </main>
      <Footer />
    </>
  );
}
