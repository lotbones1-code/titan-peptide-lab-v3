import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileSearch, FlaskConical, GitMerge, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { CompareMesh } from "@/components/site/compare-mesh";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "DSIP vs Selank Nasal Spray | Research Compound Comparison | Titan Peptide Lab";
const DESCRIPTION =
  "DSIP vs selank nasal spray: a research-use comparison of two intranasal peptides studied in different literatures — DSIP in sleep-architecture and stress-recovery research, selank in anxiolytic and nootropic research. What each is, the pathways studied, available formats, and purity documentation. Research use only, not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/dsip-vs-selank-nasal-spray/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/dsip-vs-selank-nasal-spray/",
    type: "article",
  },
  robots: { index: true, follow: true },
};

const ROWS = [
  ["Class", "Delta sleep-inducing peptide — endogenous nonapeptide", "Synthetic heptapeptide (Tuftsin analog)"],
  ["Primary research area", "Sleep architecture, circadian and stress-recovery research", "Anxiolytic, nootropic and stress-resilience research"],
  ["Pathway studied", "Mechanism still debated; examined in sleep-regulatory and stress-modulating contexts", "Studied around GABA/BDNF and monoamine-modulation models, plus enkephalin/Tuftsin pathways"],
  ["Why they're compared", "Both appear in calming / recovery intranasal neuropeptide catalogs", "Different research question — daytime stress-resilience vs sleep regulation"],
  ["Titan format", "DSIP intranasal research spray", "Selank intranasal research spray"],
  ["Documentation", "Lot-matched release sheet, HPLC purity target", "Lot-matched release sheet, HPLC purity target"],
];

const POINTS = [
  {
    icon: GitMerge,
    title: "Two different research questions",
    body: "DSIP (delta sleep-inducing peptide) sits in sleep-architecture and stress-recovery literature; selank is a synthetic Tuftsin-derived heptapeptide studied in anxiolytic and nootropic research. They get cross-searched because both are intranasal peptides associated with 'calm,' but they target separate research areas — which is why Titan stocks each as its own product, not as a substitute for the other.",
    href: "/products/dsip-nasal-spray/?ref=dsip-vs-selank",
    cta: "View DSIP spray",
  },
  {
    icon: FlaskConical,
    title: "Selank is the anxiolytic / nootropic research compound",
    body: "If your study design is built around daytime stress-resilience, anxiolytic models, or nootropic endpoints, selank — not DSIP — is the relevant compound, with research referencing GABA/BDNF and monoamine modulation. Titan supplies selank as a dedicated intranasal research spray with lot documentation referenced to the lot code on the unit.",
    href: "/products/selank-nasal-spray/?ref=dsip-vs-selank",
    cta: "View selank spray",
  },
  {
    icon: ShieldCheck,
    title: "Same documentation standard for both",
    body: "Both sprays ship with a lot-matched in-house release sheet referenced to the lot code on the unit, against an HPLC purity target with identity confirmation. Whichever pathway you're reading the literature on, the paper-trail standard does not change — and that consistency is what separates a documented supplier from a blind one.",
    href: "/coa-verified-peptide-supplier/?ref=dsip-vs-selank",
    cta: "How to verify a COA",
  },
  {
    icon: FileSearch,
    title: "Choose by the research system you're studying",
    body: "If your work centers on sleep, circadian, or recovery research, DSIP is the candidate; if it's anxiolytic or nootropic research, selank is. They are not alternatives for the same endpoint. Avoid any supplier that blends them with dosing, sleep-aid, anti-anxiety, or human-use claims — that marketing language is a compliance red flag, not science.",
    href: "/peptide-supplier-checklist/?ref=dsip-vs-selank",
    cta: "Supplier checklist",
  },
];

const FAQS = [
  {
    q: "What is the difference between DSIP and selank nasal spray?",
    a: "They are two distinct intranasal research peptides studied in different literatures. DSIP (delta sleep-inducing peptide) is an endogenous nonapeptide examined in sleep-architecture, circadian, and stress-recovery research; selank is a synthetic Tuftsin-derived heptapeptide studied in anxiolytic and nootropic research, with literature referencing GABA/BDNF and monoamine modulation. Because they engage separate research questions, they are not treated as interchangeable. Both are supplied strictly for in-vitro laboratory research.",
  },
  {
    q: "Are DSIP and selank used for the same thing in research?",
    a: "No. Although both appear in 'calming' intranasal peptide catalogs, they are studied for different questions — DSIP in sleep and stress-recovery contexts, selank in daytime anxiolytic and nootropic contexts — so they are not substitutes for one another. Titan provides no protocols, dosing, or human-use guidance; material is research-use only.",
  },
  {
    q: "Which format does Titan offer for DSIP and selank?",
    a: "Titan supplies each as a dedicated intranasal research spray with lot-matched documentation. See the individual DSIP nasal spray and selank nasal spray product pages for format details, the lot release sheet, and the testing workflow.",
  },
  {
    q: "How do I verify the purity of either spray?",
    a: "Both sprays ship with a lot-matched in-house release sheet referenced to the lot code on the unit, against an HPLC purity target with identity confirmation. The COA verification guide explains how to read an HPLC/MS release sheet and what to check before trusting any supplier's documentation.",
  },
  {
    q: "Are these products for human use?",
    a: "No. DSIP and selank from Titan Peptide Lab are sold strictly for in-vitro laboratory research. They are not for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
];

export default function DsipVsSelankPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "DSIP vs Selank Nasal Spray", item: "/dsip-vs-selank-nasal-spray/" },
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
                DSIP vs selank nasal spray: different research systems, not substitutes.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                DSIP and selank both show up as &ldquo;calming&rdquo; intranasal research peptides, so they get compared — but they aren&apos;t alternatives. DSIP (delta sleep-inducing peptide) is studied in sleep-architecture and stress-recovery research; selank is a synthetic Tuftsin-derived heptapeptide studied in anxiolytic and nootropic research. They sit in separate literatures, which is exactly why a study design points to one or the other. This page lays out what each is, the research area each belongs to, and the documentation standard behind both.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/dsip-nasal-spray/?ref=dsip-vs-selank-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View DSIP spray
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products/selank-nasal-spray/?ref=dsip-vs-selank-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  View selank spray
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
                    <th className="px-5 py-4">DSIP</th>
                    <th className="px-5 py-4">Selank</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map(([attr, dsip, selank]) => (
                    <tr key={attr} className="border-t border-[#eef2f0] align-top">
                      <td className="px-5 py-4 font-semibold text-[#0f1613]">{attr}</td>
                      <td className="px-5 py-4 leading-7 text-[#5c6762]">{dsip}</td>
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
              <li><Link className="hover:underline" href="/where-to-buy-dsip-nasal-spray/?ref=dsip-vs-selank">Where to buy DSIP nasal spray →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-selank/?ref=dsip-vs-selank">Where to buy selank →</Link></li>
              <li><Link className="hover:underline" href="/semax-vs-selank/?ref=dsip-vs-selank">Semax vs selank →</Link></li>
              <li><Link className="hover:underline" href="/research/selank-anxiolytic-nootropic/?ref=dsip-vs-selank">Selank anxiolytic & nootropic research →</Link></li>
              <li><Link className="hover:underline" href="/research/dsip-sleep-recovery/?ref=dsip-vs-selank">DSIP sleep & recovery research →</Link></li>
              <li><Link className="hover:underline" href="/lab-testing/?ref=dsip-vs-selank">Lab-testing & COA workflow →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              See both product pages.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the DSIP or selank nasal spray page for size, lot documentation, and checkout, or browse the full research catalog.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/selank-nasal-spray/?ref=dsip-vs-selank-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                Selank nasal spray
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/products/?ref=dsip-vs-selank-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
                Browse catalog
              </Link>
            </div>
          </div>
        </section>
        <CompareMesh current="dsip-vs-selank-nasal-spray" />
      </main>
      <Footer />
    </>
  );
}
