import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileSearch, FlaskConical, GitMerge, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { CompareMesh } from "@/components/site/compare-mesh";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Retatrutide vs Semaglutide | Research Compound Comparison | Titan Peptide Lab";
const DESCRIPTION =
  "Retatrutide vs semaglutide: a research-use comparison of two incretin receptor-agonist peptides studied in metabolic research. Semaglutide is a single GLP-1 receptor agonist; retatrutide is a triple GIP/GLP-1/glucagon receptor agonist. What each is, the receptor pathways studied, available research formats, and purity documentation. Research use only, not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/retatrutide-vs-semaglutide/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/retatrutide-vs-semaglutide/",
    type: "article",
  },
  robots: { index: true, follow: true },
};

const ROWS = [
  ["Class", "Triple incretin receptor agonist (research peptide)", "Single GLP-1 receptor agonist (research peptide)"],
  ["Receptor pathways studied", "GIP, GLP-1, and glucagon receptor signaling", "GLP-1 receptor signaling only"],
  ["Mechanistic distinction", "Engages three receptor arms — adds GIP and glucagon signaling on top of the GLP-1 pathway studied with semaglutide", "The single-pathway GLP-1 baseline — the mono-agonist reference point the multi-agonists are contrasted against"],
  ["Why they're compared", "Both appear in incretin / metabolic receptor-agonist research and are cross-searched as the single-receptor vs triple-receptor question", "Same — semaglutide is the canonical mono-agonist, retatrutide the triple agonist, in the same research area"],
  ["Titan format", "Retatrutide research vial, lyophilized for reconstitution", "Sourced as a research compound; see the semaglutide buyer page for current format"],
  ["Documentation", "Lot-matched release sheet, HPLC purity target with identity confirmation", "Lot-matched release sheet, HPLC purity target with identity confirmation"],
];

const POINTS = [
  {
    icon: GitMerge,
    title: "Single GLP-1 agonist vs triple agonist",
    body: "The distinction researchers care about: semaglutide is studied as a single GLP-1 receptor agonist, while retatrutide engages three receptor arms — GIP, GLP-1, and glucagon together. That two-extra-pathway gap is the entire reason the two are cross-searched. Both are handled by Titan strictly as research compounds, never as substitutes for one another or for any approved medication.",
    href: "/products/retatrutide/?ref=reta-vs-sema",
    cta: "View retatrutide",
  },
  {
    icon: FlaskConical,
    title: "Retatrutide is the triple-agonist research peptide",
    body: "If your study design is built around three-receptor incretin signaling — GIP, GLP-1, and glucagon — retatrutide, not semaglutide, is the relevant compound. Titan supplies retatrutide as a lyophilized research vial with lot documentation referenced to the lot code on the unit, so the material in front of you matches the paperwork.",
    href: "/where-to-buy-retatrutide/?ref=reta-vs-sema",
    cta: "Where to buy retatrutide",
  },
  {
    icon: ShieldCheck,
    title: "Same documentation standard for both",
    body: "Whichever receptor framework you're studying, the paper-trail standard does not change: a lot-matched in-house release sheet referenced to the lot code on the unit, against an HPLC purity target with identity confirmation. That consistency is what separates a documented supplier from a blind one — and it is the only claim Titan makes about these compounds.",
    href: "/coa-verified-peptide-supplier/?ref=reta-vs-sema",
    cta: "How to verify a COA",
  },
  {
    icon: FileSearch,
    title: "Choose by the receptor framework you're studying",
    body: "Pick by the number of receptor arms your research model targets: one (GLP-1 only) points to semaglutide, three (GIP/GLP-1/glucagon) points to retatrutide. They are not interchangeable. Avoid any supplier that attaches weight-loss, dosing, or human-use claims to either — that marketing language is a compliance red flag, not science. For all three side by side, see the full GLP-1 comparison.",
    href: "/retatrutide-vs-tirzepatide-vs-semaglutide/?ref=reta-vs-sema",
    cta: "Add tirzepatide to the comparison",
  },
];

const FAQS = [
  {
    q: "What is the difference between retatrutide and semaglutide?",
    a: "In research terms they differ by two receptor pathways. Semaglutide is studied as a single GLP-1 receptor agonist; retatrutide is studied as a triple incretin receptor agonist that adds GIP and glucagon-receptor signaling on top of the GLP-1 pathway. That one-receptor-versus-three-receptor difference is the core distinction. Both are supplied strictly for in-vitro laboratory research.",
  },
  {
    q: "Is retatrutide a triple agonist and semaglutide a single agonist?",
    a: "Yes. Semaglutide is characterized in the research literature as a GLP-1 receptor agonist (a single-pathway mono-agonist), and retatrutide as a triple GIP/GLP-1/glucagon receptor agonist. Titan provides these descriptions as mechanistic research context only — no protocols, dosing, efficacy, or human-use guidance is offered.",
  },
  {
    q: "How does this compare to retatrutide vs tirzepatide?",
    a: "Tirzepatide sits between the two: it is a dual GIP/GLP-1 receptor agonist, so the progression studied is single (semaglutide) → dual (tirzepatide) → triple (retatrutide) receptor arms. See the retatrutide vs tirzepatide page for the dual-vs-triple comparison, or the three-way page for all of them side by side.",
  },
  {
    q: "Which format does Titan offer for retatrutide and semaglutide?",
    a: "Titan supplies retatrutide as a lyophilized research vial for reconstitution with lot-matched documentation. For semaglutide format and availability, see the dedicated where-to-buy-semaglutide-research page. Each product page lists size, the lot release sheet, and the testing workflow.",
  },
  {
    q: "How do I verify the purity of either compound?",
    a: "Both ship with a lot-matched in-house release sheet referenced to the lot code on the unit, against an HPLC purity target with identity confirmation. The COA verification guide explains how to read an HPLC/MS release sheet and what to check before trusting any supplier's documentation.",
  },
  {
    q: "Are these products for human use?",
    a: "No. Retatrutide and semaglutide from Titan Peptide Lab are sold strictly for in-vitro laboratory research. They are not for human or animal consumption, diagnostic, therapeutic, or preventative use, and no weight-loss or metabolic outcome is claimed.",
  },
];

export default function RetatrutideVsSemaglutidePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Retatrutide vs Semaglutide", item: "/retatrutide-vs-semaglutide/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Research compound comparison · research use
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                Retatrutide vs semaglutide: one receptor arm vs three.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                Retatrutide and semaglutide are both incretin receptor-agonist research peptides, so they get cross-searched — but they aren&apos;t the same compound. Semaglutide is studied as a single GLP-1 receptor agonist; retatrutide is studied as a triple GIP/GLP-1/glucagon receptor agonist, adding two more receptor arms. That mechanistic gap is the whole comparison. This page lays out what each is, the receptor pathways each engages in research, available formats, and the documentation standard behind both.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/retatrutide/?ref=reta-vs-sema-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View retatrutide
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/where-to-buy-semaglutide-research/?ref=reta-vs-sema-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  Where to buy semaglutide
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[1.5rem] border border-[#dde6e1]">
              <table className="w-full border-collapse text-left text-[13.5px]">
                <thead>
                  <tr className="bg-[#fafbfa] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1e6f58]">
                    <th className="px-5 py-4">Attribute</th>
                    <th className="px-5 py-4">Retatrutide</th>
                    <th className="px-5 py-4">Semaglutide</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map(([attr, reta, sema]) => (
                    <tr key={attr} className="border-t border-[#eef2f0] align-top">
                      <td className="px-5 py-4 font-semibold text-[#0f1613]">{attr}</td>
                      <td className="px-5 py-4 leading-7 text-[#5c6762]">{reta}</td>
                      <td className="px-5 py-4 leading-7 text-[#5c6762]">{sema}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="border-y border-[rgb(15_22_19/6%)] bg-[#fafbfa] py-16 lg:py-24">
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

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">Related reading</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] tracking-[-0.035em]">Keep comparing before you commit.</h2>
            <ul className="mt-7 space-y-3 text-[14px] leading-7 text-[#1e6f58]">
              <li><Link className="hover:underline" href="/retatrutide-vs-tirzepatide-vs-semaglutide/?ref=reta-vs-sema">Retatrutide vs tirzepatide vs semaglutide (all three) →</Link></li>
              <li><Link className="hover:underline" href="/retatrutide-vs-tirzepatide/?ref=reta-vs-sema">Retatrutide vs tirzepatide (dual vs triple) →</Link></li>
              <li><Link className="hover:underline" href="/semaglutide-vs-tirzepatide/?ref=reta-vs-sema">Semaglutide vs tirzepatide →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-retatrutide/?ref=reta-vs-sema">Where to buy retatrutide →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-semaglutide-research/?ref=reta-vs-sema">Where to buy semaglutide (research) →</Link></li>
              <li><Link className="hover:underline" href="/glp-1-research-peptides/?ref=reta-vs-sema">GLP-1 research peptides overview →</Link></li>
              <li><Link className="hover:underline" href="/retatrutide-for-sale/?ref=reta-vs-sema">Retatrutide for sale →</Link></li>
              <li><Link className="hover:underline" href="/peptide-supplier-checklist/?ref=reta-vs-sema">Supplier checklist →</Link></li>
              <li><Link className="hover:underline" href="/lab-testing/?ref=reta-vs-sema">Lab-testing & COA workflow →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              See the product pages.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the retatrutide research vial for size, lot documentation, and crypto checkout, check the semaglutide buyer page, or browse the full research catalog.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/retatrutide/?ref=reta-vs-sema-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                Retatrutide vial
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/products/?ref=reta-vs-sema-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
                Browse catalog
              </Link>
            </div>
          </div>
        </section>
        <CompareMesh current="retatrutide-vs-semaglutide" />
      </main>
      <Footer />
    </>
  );
}
