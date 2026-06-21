import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileSearch, FlaskConical, GitMerge, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { CompareMesh } from "@/components/site/compare-mesh";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "DSIP vs Oxytocin Nasal Spray | Research Compound Comparison | Titan Peptide Lab";
const DESCRIPTION =
  "DSIP vs oxytocin nasal spray: a research-use comparison of two intranasal peptides studied for completely different signaling systems — DSIP in sleep and stress-recovery research, oxytocin in social-bonding and OXTR research. What each is, the pathways studied in the literature, available formats, and purity documentation. Research use only, not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/dsip-vs-oxytocin-nasal-spray/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/dsip-vs-oxytocin-nasal-spray/",
    type: "article",
  },
  robots: { index: true, follow: true },
};

const ROWS = [
  ["Class", "Delta sleep-inducing peptide — endogenous nonapeptide", "Endogenous nonapeptide hormone / neuropeptide"],
  ["Primary research area", "Sleep architecture, circadian and stress-recovery research", "Social-bonding, attachment, and OXTR-signaling research"],
  ["Receptor / pathway", "Mechanism still debated; studied in sleep-regulatory and stress-modulating contexts", "Acts selectively on the oxytocin receptor (OXTR)"],
  ["Why they're compared", "Both appear in intranasal neuropeptide research catalogs", "Different signaling system entirely — not interchangeable with DSIP"],
  ["Titan format", "DSIP intranasal research spray", "Oxytocin intranasal research spray"],
  ["Documentation", "Lot-matched release sheet, HPLC purity target", "Lot-matched release sheet, HPLC purity target"],
];

const POINTS = [
  {
    icon: GitMerge,
    title: "Two unrelated research questions",
    body: "DSIP (delta sleep-inducing peptide) is studied in sleep-architecture and stress-recovery literature; oxytocin is the most-referenced peptide in social-bonding and attachment research, acting on the oxytocin receptor. They get cross-searched only because both are intranasal neuropeptides — mechanistically they target separate systems, which is why Titan stocks each as its own product.",
    href: "/products/dsip-nasal-spray/?ref=dsip-vs-oxt",
    cta: "View DSIP spray",
  },
  {
    icon: FlaskConical,
    title: "Oxytocin is the bonding / OXTR research compound",
    body: "If your study design is built around oxytocin-receptor signaling — affiliation, trust, attachment models — oxytocin, not DSIP, is the relevant compound. DSIP has no established role in that literature. Titan supplies oxytocin as a dedicated intranasal research spray with lot documentation referenced to the lot code on the unit.",
    href: "/products/oxytocin-nasal-spray/?ref=dsip-vs-oxt",
    cta: "View oxytocin spray",
  },
  {
    icon: ShieldCheck,
    title: "Same documentation standard for both",
    body: "Both sprays ship with a lot-matched in-house release sheet referenced to the lot code on the unit, against an HPLC purity target with identity confirmation. Whichever pathway you're reading the literature on, the paper-trail standard does not change — and that consistency is what separates a documented supplier from a blind one.",
    href: "/coa-verified-peptide-supplier/?ref=dsip-vs-oxt",
    cta: "How to verify a COA",
  },
  {
    icon: FileSearch,
    title: "Choose by the research system you're studying",
    body: "If your work centers on sleep, circadian, or stress-recovery research, DSIP is the candidate; if it's oxytocin-receptor signaling, oxytocin is. They are not alternatives for the same endpoint. Avoid any supplier that blends them with dosing, sleep-aid, or human-use claims — that marketing language is a compliance red flag, not science.",
    href: "/peptide-supplier-checklist/?ref=dsip-vs-oxt",
    cta: "Supplier checklist",
  },
];

const FAQS = [
  {
    q: "What is the difference between DSIP and oxytocin nasal spray?",
    a: "They are two distinct intranasal research peptides studied for entirely different signaling systems. DSIP (delta sleep-inducing peptide) is an endogenous nonapeptide examined in sleep-architecture, circadian, and stress-recovery research; oxytocin is an endogenous nonapeptide hormone studied for oxytocin-receptor (OXTR) signaling in social-bonding and attachment research. Because they engage separate research areas, the literature does not treat them as interchangeable. Both are supplied strictly for in-vitro laboratory research.",
  },
  {
    q: "Are DSIP and oxytocin used for the same thing in research?",
    a: "No. Despite both appearing in intranasal neuropeptide research catalogs, they are studied for different questions — DSIP in sleep and stress-recovery contexts, oxytocin in oxytocin-receptor signaling — so they are not substitutes for one another. Titan provides no protocols, dosing, or human-use guidance; material is research-use only.",
  },
  {
    q: "Which format does Titan offer for DSIP and oxytocin?",
    a: "Titan supplies each as a dedicated intranasal research spray with lot-matched documentation. See the individual DSIP nasal spray and oxytocin nasal spray product pages for format details, the lot release sheet, and the testing workflow.",
  },
  {
    q: "How do I verify the purity of either spray?",
    a: "Both sprays ship with a lot-matched in-house release sheet referenced to the lot code on the unit, against an HPLC purity target with identity confirmation. The COA verification guide explains how to read an HPLC/MS release sheet and what to check before trusting any supplier's documentation.",
  },
  {
    q: "Are these products for human use?",
    a: "No. DSIP and oxytocin from Titan Peptide Lab are sold strictly for in-vitro laboratory research. They are not for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
];

export default function DsipVsOxytocinPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "DSIP vs Oxytocin Nasal Spray", item: "/dsip-vs-oxytocin-nasal-spray/" },
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
                DSIP vs oxytocin nasal spray: different research systems, not substitutes.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                DSIP and oxytocin both show up as intranasal research peptides, so they get compared — but they aren&apos;t alternatives. DSIP (delta sleep-inducing peptide) is studied in sleep-architecture and stress-recovery research; oxytocin is an endogenous nonapeptide acting on the oxytocin receptor in social-bonding research. They sit in entirely separate literatures, which is exactly why a study design points to one or the other. This page lays out what each is, the research area each belongs to, and the documentation standard behind both.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/dsip-nasal-spray/?ref=dsip-vs-oxt-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View DSIP spray
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products/oxytocin-nasal-spray/?ref=dsip-vs-oxt-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  View oxytocin spray
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
                    <th className="px-5 py-4">Oxytocin</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map(([attr, dsip, oxt]) => (
                    <tr key={attr} className="border-t border-[#eef2f0] align-top">
                      <td className="px-5 py-4 font-semibold text-[#0f1613]">{attr}</td>
                      <td className="px-5 py-4 leading-7 text-[#5c6762]">{dsip}</td>
                      <td className="px-5 py-4 leading-7 text-[#5c6762]">{oxt}</td>
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
              <li><Link className="hover:underline" href="/where-to-buy-dsip-nasal-spray/?ref=dsip-vs-oxt">Where to buy DSIP nasal spray →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-oxytocin-nasal-spray/?ref=dsip-vs-oxt">Where to buy oxytocin nasal spray →</Link></li>
              <li><Link className="hover:underline" href="/pt-141-vs-oxytocin-nasal-spray/?ref=dsip-vs-oxt">PT-141 vs oxytocin nasal spray →</Link></li>
              <li><Link className="hover:underline" href="/research/nasal-stack-protocols/?ref=dsip-vs-oxt">Nasal-spray research formats →</Link></li>
              <li><Link className="hover:underline" href="/lab-testing/?ref=dsip-vs-oxt">Lab-testing & COA workflow →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              See both product pages.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the DSIP or oxytocin nasal spray page for size, lot documentation, and checkout, or browse the full research catalog.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/dsip-nasal-spray/?ref=dsip-vs-oxt-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                DSIP nasal spray
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/products/?ref=dsip-vs-oxt-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
                Browse catalog
              </Link>
            </div>
          </div>
        </section>
        <CompareMesh current="dsip-vs-oxytocin-nasal-spray" />
      </main>
      <Footer />
    </>
  );
}
