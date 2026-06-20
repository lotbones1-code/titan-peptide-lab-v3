import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileSearch, FlaskConical, GitMerge, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "CJC-1295 vs Ipamorelin | Research Compound Comparison | Titan Peptide Lab";
const DESCRIPTION =
  "CJC-1295 vs ipamorelin: a research-use comparison of two growth-hormone-secretagogue peptides that act on different receptors — what each is, why they're studied as a blend, available formats, and purity documentation. Research use only, not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/cjc-1295-vs-ipamorelin/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/cjc-1295-vs-ipamorelin/",
    type: "article",
  },
  robots: { index: true, follow: true },
};

const ROWS = [
  ["Class", "GHRH analog (growth-hormone-releasing hormone)", "GHRP / ghrelin-receptor agonist (secretagogue)"],
  ["Receptor target", "GHRH receptor on the pituitary", "GHS-R1a (ghrelin) receptor"],
  ["Literature role", "Studied for raising the baseline GH-release signal", "Studied for pulsatile, selective GH-release signaling"],
  ["Why they're paired", "Different receptors → studied as complementary, not redundant", "Selectivity is the reason it's the common GHRH partner"],
  ["Titan format", "Supplied in the CJC-1295 + Ipamorelin blend vial", "Supplied in the CJC-1295 + Ipamorelin blend vial"],
  ["Documentation", "Lot-matched release sheet", "Lot-matched release sheet"],
];

const POINTS = [
  {
    icon: GitMerge,
    title: "Two receptors, which is why they're a blend",
    body: "CJC-1295 is a GHRH analog acting on the GHRH receptor; ipamorelin is a selective secretagogue acting on the ghrelin (GHS-R1a) receptor. Because they engage different pathways, the literature studies them together as complementary signals rather than as substitutes — which is exactly why Titan stocks them as a single blend vial.",
    href: "/products/cjc-1295-ipamorelin/?ref=cjc-vs-ipa",
    cta: "View the blend vial",
  },
  {
    icon: FlaskConical,
    title: "Ipamorelin's selling point is selectivity",
    body: "Among ghrelin-receptor secretagogues, ipamorelin is the one most referenced for a cleaner, more selective GH-release profile in the research literature. That selectivity is the practical reason it is so commonly the partner chosen for a GHRH analog like CJC-1295, rather than an older, less selective GHRP.",
    href: "/cjc-1295-ipamorelin-research-guide/?ref=cjc-vs-ipa",
    cta: "Blend research guide",
  },
  {
    icon: ShieldCheck,
    title: "Same documentation standard across the blend",
    body: "The blend ships with a lot-matched in-house release sheet referenced to the lot code on the vial, against an HPLC purity target with identity confirmation. Whichever component you are reading the literature on, the paper-trail standard is the same.",
    href: "/coa-verified-peptide-supplier/?ref=cjc-vs-ipa",
    cta: "How to verify a COA",
  },
  {
    icon: FileSearch,
    title: "Choose by the pathway your study targets",
    body: "If your work is built around the GHRH-receptor signal, CJC-1295 is the relevant component; if it's the ghrelin-receptor pathway, ipamorelin is. Many research designs reference both, which is why the blend exists. Avoid suppliers that blur the two with dosing or human-use claims — that language is a red flag.",
    href: "/peptide-supplier-checklist/?ref=cjc-vs-ipa",
    cta: "Supplier checklist",
  },
];

const FAQS = [
  {
    q: "What is the difference between CJC-1295 and ipamorelin?",
    a: "They are two distinct growth-hormone-secretagogue peptides that act on different receptors. CJC-1295 is a GHRH analog that engages the growth-hormone-releasing-hormone receptor; ipamorelin is a selective secretagogue that engages the ghrelin (GHS-R1a) receptor. Because they target separate pathways, the literature studies them as complementary signals rather than interchangeable ones. Both are supplied strictly for in-vitro laboratory research.",
  },
  {
    q: "Why are CJC-1295 and ipamorelin combined in one blend?",
    a: "Because they act on different receptors, researchers study them together as complementary rather than redundant inputs to GH-release signaling — a GHRH analog plus a selective ghrelin-receptor secretagogue. That is why Titan stocks them as a single CJC-1295 + Ipamorelin blend vial rather than two separate products. Titan provides no protocols, dosing, or human-use guidance — material is research-use only.",
  },
  {
    q: "Is ipamorelin more selective than other secretagogues?",
    a: "In the research literature, ipamorelin is frequently referenced for a cleaner, more selective growth-hormone-release profile compared with older GHRPs. That selectivity is the common reason it is paired with a GHRH analog such as CJC-1295 in study designs. This describes the literature context only and is not a human-use, therapeutic, or efficacy claim.",
  },
  {
    q: "Which format does Titan offer for CJC-1295 and ipamorelin?",
    a: "Titan supplies the two together as a CJC-1295 + Ipamorelin blend vial, with lot-matched documentation. See the blend product page and the CJC-1295 + Ipamorelin research guide for format details and the testing workflow.",
  },
  {
    q: "Are these products for human use?",
    a: "No. CJC-1295 and ipamorelin from Titan Peptide Lab are sold strictly for in-vitro laboratory research. They are not for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
];

export default function Cjc1295VsIpamorelinPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "CJC-1295 vs Ipamorelin", item: "/cjc-1295-vs-ipamorelin/" },
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
                CJC-1295 vs ipamorelin: different receptors, studied together.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                CJC-1295 and ipamorelin are two of the most-searched GH-secretagogue peptides — and the reason they keep getting compared is that they aren&apos;t alternatives. CJC-1295 is a GHRH analog; ipamorelin is a selective ghrelin-receptor secretagogue. They engage separate pathways, which is precisely why the literature studies them as a complementary pair. This page lays out what each is, why Titan stocks them as one blend, and the documentation standard.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/cjc-1295-ipamorelin/?ref=cjc-vs-ipa-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View the blend vial
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/cjc-1295-ipamorelin-research-guide/?ref=cjc-vs-ipa-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  Blend research guide
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
                    <th className="px-5 py-4">CJC-1295</th>
                    <th className="px-5 py-4">Ipamorelin</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map(([attr, cjc, ipa]) => (
                    <tr key={attr} className="border-t border-[#eef2f0] align-top">
                      <td className="px-5 py-4 font-semibold text-[#0f1613]">{attr}</td>
                      <td className="px-5 py-4 leading-7 text-[#5c6762]">{cjc}</td>
                      <td className="px-5 py-4 leading-7 text-[#5c6762]">{ipa}</td>
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
              <li><Link className="hover:underline" href="/cjc-1295-ipamorelin-research-guide/?ref=cjc-vs-ipa">CJC-1295 + Ipamorelin research guide →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-cjc-1295-ipamorelin/?ref=cjc-vs-ipa">Where to buy CJC-1295 + Ipamorelin →</Link></li>
              <li><Link className="hover:underline" href="/best-research-peptides/?ref=cjc-vs-ipa">Best research peptides by category →</Link></li>
              <li><Link className="hover:underline" href="/lab-testing/?ref=cjc-vs-ipa">Lab-testing & COA workflow →</Link></li>
              <li><Link className="hover:underline" href="/peptide-reconstitution-calculator/?ref=cjc-vs-ipa">Peptide reconstitution calculator →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              See the blend product page.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the CJC-1295 + Ipamorelin page for size, lot documentation, and checkout, or browse the full research catalog.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/cjc-1295-ipamorelin/?ref=cjc-vs-ipa-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                CJC-1295 + Ipamorelin
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/products/?ref=cjc-vs-ipa-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
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
