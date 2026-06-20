import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Activity, FlaskConical, GitCompare, Timer } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Ipamorelin vs Sermorelin | Research Comparison | Titan Peptide Lab";
const DESCRIPTION =
  "Ipamorelin vs sermorelin compared for research: mechanism (ghrelin mimetic vs GHRH analog), selectivity, half-life, and how each appears in growth-hormone-secretagogue literature. Titan supplies a research-use CJC-1295 + Ipamorelin blend. Research use only — not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/ipamorelin-vs-sermorelin/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/ipamorelin-vs-sermorelin/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const FACETS = [
  {
    icon: GitCompare,
    title: "Different mechanisms, same axis",
    body: "Sermorelin is a GHRH (growth-hormone-releasing hormone) analog — a truncated GHRH(1-29) fragment that acts on GHRH receptors. Ipamorelin is a selective ghrelin/GHSR agonist (a growth-hormone secretagogue). Both are studied for effects on the GH axis, but they engage it through two distinct receptor pathways, which is why they appear together in stacking literature.",
  },
  {
    icon: Activity,
    title: "Selectivity profile",
    body: "Ipamorelin is frequently described in the literature as one of the more selective GHSR agonists, studied for minimal effect on cortisol and prolactin relative to older secretagogues. Sermorelin's GHRH-analog action is dependent on the existing GHRH signaling pathway. Selectivity is the most-cited difference researchers compare.",
  },
  {
    icon: Timer,
    title: "Half-life and pairing",
    body: "Sermorelin is short-acting in published pharmacokinetics. Ipamorelin is also short-acting, which is why research protocols often pair a ghrelin mimetic with a longer-acting GHRH analog such as CJC-1295 — the combination Titan stocks — rather than sermorelin alone.",
  },
  {
    icon: FlaskConical,
    title: "What Titan stocks",
    body: "Titan does not list standalone sermorelin or standalone ipamorelin. Titan supplies a research-use CJC-1295 + Ipamorelin blend — a long-acting GHRH analog paired with a selective ghrelin mimetic — as a lyophilized powder with lot-matched documentation. Confirm the format and purity target on the product page before ordering.",
  },
];

const FAQS = [
  {
    q: "What is the difference between ipamorelin and sermorelin?",
    a: "Sermorelin is a GHRH (growth-hormone-releasing hormone) analog that acts on GHRH receptors, while ipamorelin is a selective ghrelin/GHSR agonist (a growth-hormone secretagogue). They influence the growth-hormone axis through two different receptor pathways, which is why they are studied both individually and in combination. Titan supplies these compounds strictly for in-vitro research and makes no human-use or efficacy claims.",
  },
  {
    q: "Is ipamorelin or sermorelin better?",
    a: "Neither is universally 'better' — they are studied for different mechanisms. Ipamorelin is often cited for its selectivity as a ghrelin mimetic; sermorelin is a GHRH analog. In research protocols a ghrelin mimetic is frequently paired with a longer-acting GHRH analog (such as CJC-1295) rather than used alone. The right choice depends entirely on the research question, not on a ranking.",
  },
  {
    q: "Does Titan sell sermorelin?",
    a: "No. Titan does not stock standalone sermorelin or standalone ipamorelin. The growth-hormone-secretagogue research compound Titan supplies is a CJC-1295 + Ipamorelin blend — a long-acting GHRH analog paired with a selective ghrelin mimetic — as a lyophilized powder with a lot-matched release sheet, supplied for research use only.",
  },
  {
    q: "Are ipamorelin and sermorelin approved for human use?",
    a: "Research-grade ipamorelin and sermorelin sold as reagents are not approved by the FDA or any regulator for human use and are not commercial medicines. Titan supplies its CJC-1295 + Ipamorelin blend only as a research-use-only reagent for in-vitro laboratory work. It is not for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
  {
    q: "How do I verify the quality of a growth-hormone-secretagogue peptide?",
    a: "Confirm the supplier provides a lot-matched release sheet referenced to the code on the vial, an HPLC purity target, and mass-spec identity confirmation — not a generic stock spec sheet. Titan exposes this documentation workflow on the product page and ships a lot-matched COA with every order.",
  },
];

export default function IpamorelinVsSermorelinPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Ipamorelin vs Sermorelin", item: "/ipamorelin-vs-sermorelin/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Growth-hormone secretagogue comparison · research use only
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                Ipamorelin vs sermorelin, compared honestly.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                Ipamorelin and sermorelin are two of the most-compared compounds in growth-hormone-secretagogue research — but they aren&apos;t interchangeable. One is a selective ghrelin mimetic; the other is a GHRH analog. They engage the GH axis through different receptors, which is exactly why protocols often pair a ghrelin mimetic with a longer-acting GHRH analog. Here is the mechanism-level difference, and the research-use blend Titan actually supplies.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/cjc-1295-ipamorelin/?ref=ipa-vs-ser-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View CJC-1295 + Ipamorelin
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/cjc-1295-ipamorelin-research-guide/?ref=ipa-vs-ser-hero"
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
              {FACETS.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="flex h-full flex-col rounded-[1.5rem] border border-[#dde6e1] bg-white p-6"
                >
                  <Icon className="h-5 w-5 text-[#1e6f58]" />
                  <h2 className="mt-5 font-serif text-[1.45rem] leading-tight tracking-[-0.02em]">
                    {title}
                  </h2>
                  <p className="mt-3 flex-1 text-[13.5px] leading-7 text-[#5c6762]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[rgb(15_22_19/6%)] bg-[#fafbfa] py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Side by side
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
                Two pathways into the same axis.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                The cleanest way to think about it: sermorelin pushes the GHRH receptor; ipamorelin pushes the ghrelin receptor. Researchers comparing them are usually choosing a pathway, not a winner — and many study designs use a GHRH analog and a ghrelin mimetic together.
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["Sermorelin", "GHRH analog (GHRH 1-29 fragment); acts on GHRH receptors; short-acting."],
                ["Ipamorelin", "Selective ghrelin/GHSR agonist; cited for selectivity; short-acting."],
                ["Common pairing", "Ghrelin mimetic + longer-acting GHRH analog (e.g. CJC-1295)."],
                ["Titan stocks", "CJC-1295 + Ipamorelin blend — lyophilized, lot-matched COA."],
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
              <li><Link className="hover:underline" href="/cjc-1295-vs-ipamorelin/?ref=ipa-vs-ser">CJC-1295 vs ipamorelin →</Link></li>
              <li><Link className="hover:underline" href="/cjc-1295-ipamorelin-research-guide/?ref=ipa-vs-ser">CJC-1295 + Ipamorelin research guide →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-cjc-1295-ipamorelin/?ref=ipa-vs-ser">Where to buy CJC-1295 + Ipamorelin →</Link></li>
              <li><Link className="hover:underline" href="/coa-verified-peptide-supplier/?ref=ipa-vs-ser">COA-verified peptide supplier →</Link></li>
              <li><Link className="hover:underline" href="/best-research-peptides/?ref=ipa-vs-ser">Best research peptides →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Studying the GH-secretagogue axis?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the CJC-1295 + Ipamorelin product page for current pricing, vial size, lot documentation, and checkout — or start with the recommended buyer routes.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/cjc-1295-ipamorelin/?ref=ipa-vs-ser-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                CJC-1295 + Ipamorelin
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/start/?ref=ipa-vs-ser-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
                Start here
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
