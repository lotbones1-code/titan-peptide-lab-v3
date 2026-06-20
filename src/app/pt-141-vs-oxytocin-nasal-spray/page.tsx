import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileSearch, FlaskConical, GitMerge, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "PT-141 vs Oxytocin Nasal Spray | Research Compound Comparison | Titan Peptide Lab";
const DESCRIPTION =
  "PT-141 vs oxytocin nasal spray: a research-use comparison of two intranasal peptides that act through completely different mechanisms — what each is, the receptor pathways studied in the literature, available formats, and purity documentation. Research use only, not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/pt-141-vs-oxytocin-nasal-spray/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/pt-141-vs-oxytocin-nasal-spray/",
    type: "article",
  },
  robots: { index: true, follow: true },
};

const ROWS = [
  ["Class", "Melanocortin-receptor agonist (synthetic α-MSH analog)", "Endogenous nonapeptide hormone / neuropeptide"],
  ["Receptor target", "Melanocortin receptors (notably MC3R / MC4R)", "Oxytocin receptor (OXTR)"],
  ["Literature role", "Studied in central melanocortin-pathway and arousal-signaling research", "Studied in social-bonding, attachment, and OXTR-signaling research"],
  ["Why they're compared", "Both appear in intranasal libido / behavior research catalogs", "Different mechanism entirely — not interchangeable with PT-141"],
  ["Titan format", "PT-141 intranasal research spray", "Oxytocin intranasal research spray"],
  ["Documentation", "Lot-matched release sheet, HPLC purity target", "Lot-matched release sheet, HPLC purity target"],
];

const POINTS = [
  {
    icon: GitMerge,
    title: "Two completely different mechanisms",
    body: "PT-141 (bremelanotide) is a synthetic melanocortin-receptor agonist studied in the central melanocortin pathway; oxytocin is an endogenous nonapeptide that signals through the oxytocin receptor in social-bonding and attachment research. They get cross-searched because both show up as intranasal research peptides, but mechanistically they are not substitutes — which is why Titan stocks each as its own product.",
    href: "/products/pt-141-nasal-spray/?ref=pt141-vs-oxt",
    cta: "View PT-141 spray",
  },
  {
    icon: FlaskConical,
    title: "Oxytocin is the bonding / OXTR research compound",
    body: "Oxytocin is the most-referenced peptide in social-bonding and attachment literature, acting selectively on the oxytocin receptor. If your study design is built around OXTR signaling rather than the melanocortin pathway, oxytocin — not PT-141 — is the relevant compound. Titan supplies it as a dedicated intranasal research spray with lot documentation.",
    href: "/products/oxytocin-nasal-spray/?ref=pt141-vs-oxt",
    cta: "View oxytocin spray",
  },
  {
    icon: ShieldCheck,
    title: "Same documentation standard for both",
    body: "Both sprays ship with a lot-matched in-house release sheet referenced to the lot code on the unit, against an HPLC purity target with identity confirmation. Whichever pathway you are reading the literature on, the paper-trail standard does not change — and that consistency is what separates a documented supplier from a blind one.",
    href: "/coa-verified-peptide-supplier/?ref=pt141-vs-oxt",
    cta: "How to verify a COA",
  },
  {
    icon: FileSearch,
    title: "Choose by the receptor pathway your study targets",
    body: "If your work is built around the melanocortin (MC3R/MC4R) signal, PT-141 is the relevant compound; if it's oxytocin-receptor signaling, oxytocin is. They are not alternatives for the same endpoint. Avoid any supplier that blurs the two with dosing, intimacy, or human-use claims — that marketing language is a compliance red flag, not science.",
    href: "/peptide-supplier-checklist/?ref=pt141-vs-oxt",
    cta: "Supplier checklist",
  },
];

const FAQS = [
  {
    q: "What is the difference between PT-141 and oxytocin nasal spray?",
    a: "They are two distinct intranasal research peptides that act through entirely different mechanisms. PT-141 (bremelanotide) is a synthetic melanocortin-receptor agonist studied in the central melanocortin pathway; oxytocin is an endogenous nonapeptide hormone studied for oxytocin-receptor (OXTR) signaling in social-bonding and attachment research. Because they engage separate receptor systems, the literature does not treat them as interchangeable. Both are supplied strictly for in-vitro laboratory research.",
  },
  {
    q: "Are PT-141 and oxytocin used for the same thing in research?",
    a: "No. Despite both appearing in intranasal peptide research catalogs, they target different receptor pathways — PT-141 acts on melanocortin receptors, oxytocin on the oxytocin receptor — so they are studied for different research questions and are not substitutes for one another. Titan provides no protocols, dosing, or human-use guidance; material is research-use only.",
  },
  {
    q: "Which format does Titan offer for PT-141 and oxytocin?",
    a: "Titan supplies each as a dedicated intranasal research spray with lot-matched documentation. See the individual PT-141 nasal spray and oxytocin nasal spray product pages for format details, the lot release sheet, and the testing workflow.",
  },
  {
    q: "How do I verify the purity of either spray?",
    a: "Both sprays ship with a lot-matched in-house release sheet referenced to the lot code on the unit, against an HPLC purity target with identity confirmation. The COA verification guide explains how to read an HPLC/MS release sheet and what to check before trusting any supplier's documentation.",
  },
  {
    q: "Are these products for human use?",
    a: "No. PT-141 and oxytocin from Titan Peptide Lab are sold strictly for in-vitro laboratory research. They are not for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
];

export default function Pt141VsOxytocinPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "PT-141 vs Oxytocin Nasal Spray", item: "/pt-141-vs-oxytocin-nasal-spray/" },
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
                PT-141 vs oxytocin nasal spray: different receptors, not substitutes.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                PT-141 and oxytocin both show up as intranasal research peptides, so they get compared constantly — but they aren&apos;t alternatives. PT-141 (bremelanotide) is a melanocortin-receptor agonist; oxytocin is an endogenous nonapeptide acting on the oxytocin receptor. They engage entirely separate pathways, which is exactly why the literature studies them for different questions. This page lays out what each is, the receptor each targets, and the documentation standard behind both.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/pt-141-nasal-spray/?ref=pt141-vs-oxt-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View PT-141 spray
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products/oxytocin-nasal-spray/?ref=pt141-vs-oxt-hero"
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
                    <th className="px-5 py-4">PT-141</th>
                    <th className="px-5 py-4">Oxytocin</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map(([attr, pt, oxt]) => (
                    <tr key={attr} className="border-t border-[#eef2f0] align-top">
                      <td className="px-5 py-4 font-semibold text-[#0f1613]">{attr}</td>
                      <td className="px-5 py-4 leading-7 text-[#5c6762]">{pt}</td>
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
              <li><Link className="hover:underline" href="/where-to-buy-pt-141-nasal-spray/?ref=pt141-vs-oxt">Where to buy PT-141 nasal spray →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-oxytocin-nasal-spray/?ref=pt141-vs-oxt">Where to buy oxytocin nasal spray →</Link></li>
              <li><Link className="hover:underline" href="/research/nasal-stack-protocols/?ref=pt141-vs-oxt">Nasal-spray research formats →</Link></li>
              <li><Link className="hover:underline" href="/best-research-peptides/?ref=pt141-vs-oxt">Best research peptides by category →</Link></li>
              <li><Link className="hover:underline" href="/lab-testing/?ref=pt141-vs-oxt">Lab-testing & COA workflow →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              See both product pages.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the PT-141 or oxytocin nasal spray page for size, lot documentation, and checkout, or browse the full research catalog.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/pt-141-nasal-spray/?ref=pt141-vs-oxt-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                PT-141 nasal spray
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/products/?ref=pt141-vs-oxt-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
                Browse catalog
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
