import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileSearch, FlaskConical, GitMerge, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { CompareMesh } from "@/components/site/compare-mesh";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Semax vs Selank | Research Peptide Comparison | Titan Peptide Lab";
const DESCRIPTION =
  "Semax vs Selank: a research-use comparison of two intranasal neuropeptides with different origins — Semax is derived from ACTH(4-10), Selank from the immunopeptide tuftsin. What each is studied for, why they're researched as a stack, formats, and purity documentation. Research use only, not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/semax-vs-selank/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/semax-vs-selank/",
    type: "article",
  },
  robots: { index: true, follow: true },
};

const ROWS = [
  ["Origin", "Synthetic analog of the ACTH(4-10) fragment (melanocortin family)", "Synthetic analog of the immunopeptide tuftsin"],
  ["Peptide length", "Heptapeptide (Pro-Gly-Pro extended)", "Heptapeptide (Thr-Lys-Pro-Arg-Pro-Gly-Pro)"],
  ["Literature domain", "Studied in neuroprotection, BDNF-expression and cognition research", "Studied in anxiolytic, GABAergic and immunomodulation research"],
  ["Why they're stacked", "Cognition/neurotrophic signaling pathway", "Anxiolytic/calming pathway — different mechanism, so studied together"],
  ["Titan format", "Semax Nasal Spray (intranasal, metered)", "Selank Nasal Spray (intranasal, metered)"],
  ["Documentation", "Lot-matched release sheet, HPLC purity target", "Lot-matched release sheet, HPLC purity target"],
];

const POINTS = [
  {
    icon: GitMerge,
    title: "Different parent molecules, not two versions of one thing",
    body: "Semax is a synthetic analog of the ACTH(4-10) fragment from the melanocortin family, while Selank is a synthetic analog of the immune-system peptide tuftsin. They share the short-heptapeptide, intranasal-research format, but they descend from entirely different parent molecules — which is the root reason their research literatures point in different directions.",
    href: "/products/semax-nasal-spray/?ref=semax-vs-selank",
    cta: "View Semax spray",
  },
  {
    icon: FlaskConical,
    title: "Semax indexes to cognition; Selank indexes to calm",
    body: "In the published research literature, Semax is most often referenced in neuroprotection, BDNF-expression and attention/cognition studies, whereas Selank appears in anxiolytic and GABAergic signaling work alongside immunomodulation. If your reading is built around neurotrophic or cognitive endpoints, Semax is the relevant compound; if it is built around anxiolytic pathways, Selank is.",
    href: "/products/selank-nasal-spray/?ref=semax-vs-selank",
    cta: "View Selank spray",
  },
  {
    icon: ShieldCheck,
    title: "Why researchers study them as a stack",
    body: "Because the two engage separate mechanisms, the literature frequently treats them as complementary rather than interchangeable — one indexed to cognition, the other to anxiolytic signaling. That is why Titan stocks a Selank + Semax stack alongside the individual sprays, rather than presenting one as a substitute for the other.",
    href: "/products/selank-semax-stack/?ref=semax-vs-selank",
    cta: "View the stack",
  },
  {
    icon: FileSearch,
    title: "Same documentation standard on both",
    body: "Whichever you read on, the paper-trail is identical: a lot-matched in-house release sheet referenced to the code on the vial, against an HPLC purity target with identity confirmation. Avoid suppliers that blur the two compounds with dosing or human-use claims — that language is a red flag, not a spec.",
    href: "/coa-verified-peptide-supplier/?ref=semax-vs-selank",
    cta: "How to verify a COA",
  },
];

const FAQS = [
  {
    q: "What is the difference between Semax and Selank?",
    a: "Semax and Selank are two distinct synthetic neuropeptides with different origins. Semax is a synthetic analog of the ACTH(4-10) fragment from the melanocortin family and is most referenced in neuroprotection, BDNF-expression and cognition research. Selank is a synthetic analog of the immune-regulating peptide tuftsin and appears in anxiolytic, GABAergic and immunomodulation research. Both are short heptapeptides supplied in an intranasal format strictly for in-vitro laboratory research, not for human use.",
  },
  {
    q: "Why are Semax and Selank used together as a stack?",
    a: "Because they act through different mechanisms — one indexed in the literature to cognition and neurotrophic signaling, the other to anxiolytic and GABAergic pathways — researchers study them as complementary rather than redundant. That is why Titan stocks a Selank + Semax stack in addition to the individual nasal sprays. Titan provides no protocols, dosing, or human-use guidance; material is research-use only.",
  },
  {
    q: "Which format does Titan offer for Semax and Selank?",
    a: "Titan supplies both as metered intranasal sprays — Semax Nasal Spray and Selank Nasal Spray — and also offers them together as a Selank + Semax stack. Each ships with a lot-matched release sheet referenced to the lot code on the vial. See each product page for size and documentation details.",
  },
  {
    q: "Is Semax stronger than Selank, or better?",
    a: "Neither is 'stronger' — they are studied for different things, so a direct potency comparison is not meaningful. Semax is referenced in cognition and neuroprotection literature; Selank in anxiolytic and immunomodulation literature. The right compound depends entirely on the research pathway you are reading on. This describes literature context only and is not a human-use, therapeutic, or efficacy claim.",
  },
  {
    q: "Are Semax and Selank for human use?",
    a: "No. Semax and Selank from Titan Peptide Lab are sold strictly for in-vitro laboratory research. They are not for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
];

export default function SemaxVsSelankPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Semax vs Selank", item: "/semax-vs-selank/" },
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
                Semax vs Selank: two nasal neuropeptides, two different jobs.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                Semax and Selank get compared constantly because they look alike on the shelf — both are short heptapeptides, both ship as intranasal research sprays. But they descend from completely different parent molecules: Semax from the ACTH(4-10) melanocortin fragment, Selank from the immunopeptide tuftsin. In the literature, Semax indexes to cognition and neuroprotection while Selank indexes to anxiolytic and immune signaling — which is exactly why they&apos;re studied as a complementary stack rather than as substitutes. This page lays out what each is, why the stack exists, and the documentation standard behind both.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/semax-nasal-spray/?ref=semax-vs-selank-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View Semax spray
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products/selank-nasal-spray/?ref=semax-vs-selank-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  View Selank spray
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
                    <th className="px-5 py-4">Semax</th>
                    <th className="px-5 py-4">Selank</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map(([attr, semax, selank]) => (
                    <tr key={attr} className="border-t border-[#eef2f0] align-top">
                      <td className="px-5 py-4 font-semibold text-[#0f1613]">{attr}</td>
                      <td className="px-5 py-4 leading-7 text-[#5c6762]">{semax}</td>
                      <td className="px-5 py-4 leading-7 text-[#5c6762]">{selank}</td>
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
              <li><Link className="hover:underline" href="/blog/semax-vs-selank-neuropeptide-comparison/?ref=semax-vs-selank">Semax vs Selank: full neuropeptide breakdown →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-semax-selank-stack/?ref=semax-vs-selank">Where to buy the Semax + Selank stack →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-semax-nasal-spray/?ref=semax-vs-selank">Where to buy Semax nasal spray →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-selank/?ref=semax-vs-selank">Where to buy Selank →</Link></li>
              <li><Link className="hover:underline" href="/best-research-peptides/?ref=semax-vs-selank">Best research peptides by category →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Read the literature on both, then choose by pathway.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open either nasal-spray product page for size, lot documentation, and checkout, or take the stack if your design references both compounds.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/selank-semax-stack/?ref=semax-vs-selank-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                Selank + Semax stack
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/products/?ref=semax-vs-selank-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
                Browse catalog
              </Link>
            </div>
          </div>
        </section>
        <CompareMesh current="semax-vs-selank" />
      </main>
      <Footer />
    </>
  );
}
