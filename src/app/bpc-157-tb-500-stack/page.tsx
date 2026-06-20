import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileSearch, FlaskConical, Layers, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "BPC-157 + TB-500 Stack | Research Pairing Guide | Titan Peptide Lab";
const DESCRIPTION =
  "BPC-157 and TB-500 are the two research peptides most often referenced together. A research-use overview of why the pair gets studied side by side, the formats Titan stocks, purity documentation, and how to source both with a consistent paper trail. Research use only — not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/bpc-157-tb-500-stack/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/bpc-157-tb-500-stack/",
    type: "article",
  },
  robots: { index: true, follow: true },
};

const ROWS = [
  ["Identity", "Pentadecapeptide of gastric origin (BPC-157)", "Synthetic fragment related to thymosin beta-4"],
  ["Literature context", "Studied for angiogenesis and GI-mucosa biology", "Studied for actin-binding and angiogenesis"],
  ["Why referenced together", "Different mechanism, frequently co-cited", "Different mechanism, frequently co-cited"],
  ["Titan formats", "Nasal spray (15mL · 500mcg) + 5mg lyophilized vial", "5mg lyophilized vial"],
  ["Prep", "Spray is ready-to-use; vial is reconstituted", "Reconstitute lyophilized powder"],
  ["Documentation", "Lot-matched release sheet", "Lot-matched release sheet"],
];

const POINTS = [
  {
    icon: Layers,
    title: "Why the two get studied side by side",
    body: "BPC-157 and TB-500 act through different mechanisms in the literature — one a gastric pentadecapeptide, the other a thymosin beta-4 fragment — which is exactly why they are so often referenced together rather than as substitutes. A pairing design keeps each compound's documentation distinct.",
    href: "/blog/best-peptide-stacks-research-guide/?ref=bpc-tb-stack",
    cta: "Research stacks guide",
  },
  {
    icon: FlaskConical,
    title: "Match the format to the design",
    body: "BPC-157 is available as a ready-to-use nasal spray or a 5mg lyophilized vial; TB-500 is a 5mg lyophilized vial. If a pairing study needs concentration control on both, the two vials line up; if low-prep matters for the BPC-157 arm, the spray removes a reconstitution step.",
    href: "/bpc-157-nasal-spray-vs-vial/?ref=bpc-tb-stack",
    cta: "BPC-157 spray vs vial",
  },
  {
    icon: ShieldCheck,
    title: "One documentation standard, two lots",
    body: "Each compound ships with its own lot-matched in-house release sheet referenced to the lot code on the unit, against an HPLC purity target with identity confirmation. A pairing study should keep two separate paper trails, not one shared spec sheet.",
    href: "/coa-verified-peptide-supplier/?ref=bpc-tb-stack",
    cta: "How to verify a COA",
  },
  {
    icon: FileSearch,
    title: "Source by protocol, not by marketing",
    body: "Pick the compounds the literature you are working from actually references, confirm each lot's documentation, then select formats. Suppliers that sell a pre-bundled \"healing stack\" with recovery or treatment claims are a compliance red flag — Titan sells each compound as a separate research material.",
    href: "/peptide-supplier-checklist/?ref=bpc-tb-stack",
    cta: "Supplier checklist",
  },
];

const FAQS = [
  {
    q: "Why are BPC-157 and TB-500 used together in research?",
    a: "The two are the most frequently co-cited research peptides because they act through different mechanisms — BPC-157 is a gastric pentadecapeptide studied in angiogenesis and GI-mucosa biology, while TB-500 is a thymosin beta-4 fragment studied in actin-binding and angiogenesis. Researchers compare and pair them precisely because they are distinct, not interchangeable. Both are sold strictly for in-vitro laboratory research.",
  },
  {
    q: "Does Titan sell a pre-made BPC-157 + TB-500 stack?",
    a: "Titan sells BPC-157 and TB-500 as separate research materials, each with its own lot-matched documentation, rather than a pre-bundled product with combined claims. This keeps a clean, distinct paper trail for each compound, which is what a credible pairing study needs.",
  },
  {
    q: "Which formats should I buy for a BPC-157 + TB-500 pairing?",
    a: "TB-500 is available as a 5mg lyophilized vial. BPC-157 is available as a ready-to-use nasal spray or a 5mg lyophilized vial. If a design needs concentration control on both compounds, the two vials align; if low-prep matters for the BPC-157 arm, the nasal spray removes a reconstitution step. See the BPC-157 spray vs vial comparison.",
  },
  {
    q: "How do I verify purity for both compounds?",
    a: "Look for a lot-matched release sheet on each compound — documentation referenced to the exact lot code on the unit, not a generic stock spec sheet — plus a stated HPLC purity target and identity confirmation. Titan's lab-testing workflow and COA-verification guide explain what a credible paper trail looks like for each lot.",
  },
  {
    q: "Are these products for human use?",
    a: "No. BPC-157 and TB-500 from Titan Peptide Lab are sold strictly for in-vitro laboratory research. They are not for human or animal consumption, diagnostic, therapeutic, or preventative use, and Titan provides no protocols, dosing, or pairing guidance.",
  },
];

export default function Bpc157Tb500StackPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "BPC-157 + TB-500 Stack", item: "/bpc-157-tb-500-stack/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Research pairing overview · research use
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                BPC-157 + TB-500: the pair researchers keep studying together.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                BPC-157 and TB-500 are the two most-co-cited research peptides, paired in the literature precisely because they act through different mechanisms. This page lays out why the two are studied side by side, the formats Titan stocks, and the documentation standard — so you can source each compound to your protocol with a clean, separate paper trail, not to a marketing &quot;stack&quot; claim.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/bpc-157-vial/?ref=bpc-tb-stack-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  BPC-157 vial
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products/tb-500-vial/?ref=bpc-tb-stack-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  TB-500 vial
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
                    <th className="px-5 py-4">BPC-157</th>
                    <th className="px-5 py-4">TB-500</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map(([attr, bpc, tb]) => (
                    <tr key={attr} className="border-t border-[#eef2f0] align-top">
                      <td className="px-5 py-4 font-semibold text-[#0f1613]">{attr}</td>
                      <td className="px-5 py-4 leading-7 text-[#5c6762]">{bpc}</td>
                      <td className="px-5 py-4 leading-7 text-[#5c6762]">{tb}</td>
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
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] tracking-[-0.035em]">Keep comparing before you source.</h2>
            <ul className="mt-7 space-y-3 text-[14px] leading-7 text-[#1e6f58]">
              <li><Link className="hover:underline" href="/tb-500-vs-bpc-157/?ref=bpc-tb-stack">TB-500 vs BPC-157 →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-bpc-157/?ref=bpc-tb-stack">Where to buy BPC-157 →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-tb-500/?ref=bpc-tb-stack">Where to buy TB-500 →</Link></li>
              <li><Link className="hover:underline" href="/blog/best-peptide-stacks-research-guide/?ref=bpc-tb-stack">Best peptide stacks research guide →</Link></li>
              <li><Link className="hover:underline" href="/lab-testing/?ref=bpc-tb-stack">Lab-testing & COA workflow →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Source each compound separately.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open each product page to see size, lot documentation, and checkout, or browse the full research catalog.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/?ref=bpc-tb-stack-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                Browse catalog
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/peptide-supplier-checklist/?ref=bpc-tb-stack-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
                Supplier checklist
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
