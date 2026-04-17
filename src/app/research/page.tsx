import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Research — Titan Peptide Laboratory",
  description:
    "Long-form literature summaries on nasal-delivered research peptides: BPC-157, Selank, Semax, PT-141, and multi-peptide stack protocols.",
  alternates: { canonical: "/research" },
  openGraph: {
    title: "Research — Titan Peptide Laboratory",
    description:
      "Long-form literature summaries on nasal-delivered research peptides.",
    url: "/research",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const ARTICLES = [
  {
    slug: "bpc-157-nasal-spray",
    n: "01",
    title: "BPC-157 nasal spray",
    subtitle: "Angiogenic repair peptide — intranasal pharmacokinetics",
    summary:
      "A pentadecapeptide fragment of human gastric juice protein, studied for endothelial recovery, tendon repair, and gut-lining cytoprotection.",
    tag: "Repair",
    readingTime: "12 min",
  },
  {
    slug: "selank-anxiolytic-nootropic",
    n: "02",
    title: "Selank",
    subtitle: "Heptapeptide anxiolytic and GABA-ergic modulator",
    summary:
      "A synthetic analogue of tuftsin studied by the Institute of Molecular Genetics (Moscow) for its anxiolytic profile without sedation or dependence.",
    tag: "Anxiolytic",
    readingTime: "11 min",
  },
  {
    slug: "semax-cognition-neuroplasticity",
    n: "03",
    title: "Semax",
    subtitle: "ACTH(4-10) heptapeptide — BDNF and NGF expression",
    summary:
      "A melanocortin-derived peptide researched for cognitive enhancement, neuroprotection, and upregulation of brain-derived neurotrophic factor.",
    tag: "Nootropic",
    readingTime: "12 min",
  },
  {
    slug: "pt-141-research",
    n: "04",
    title: "PT-141 (Bremelanotide)",
    subtitle: "Melanocortin receptor agonist",
    summary:
      "A cyclic heptapeptide derivative of α-MSH studied for central nervous system activation of sexual arousal pathways via MC3R/MC4R.",
    tag: "Melanocortin",
    readingTime: "11 min",
  },
  {
    slug: "nasal-stack-protocols",
    n: "05",
    title: "Nasal stack protocols",
    subtitle: "Rationale and separation when combining intranasal peptides",
    summary:
      "How researchers separate nasal dosing windows, rotate peptide pairs, and manage receptor downregulation across multi-compound protocols.",
    tag: "Protocol",
    readingTime: "13 min",
  },
];

export default function ResearchHubPage() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Titan Peptide Lab Research Index",
    itemListElement: ARTICLES.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `/research/${a.slug}`,
      name: a.title,
    })),
  };

  return (
    <>
      <Header />
      <main className="bg-stone-50 text-stone-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
        />

        {/* Hero */}
        <section className="border-b border-stone-200">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500">
              §Research — Literature index
            </div>
            <h1 className="mt-8 font-serif text-[clamp(2.75rem,7vw,6rem)] font-normal leading-[0.95] tracking-[-0.02em] text-stone-900 text-pretty">
              Peptide literature,
              <br />
              <em className="italic text-[oklch(0.68_0.17_78)]">annotated.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-[1.65] text-stone-600">
              We compile long-form summaries of the peer-reviewed work
              underlying each compound we synthesize. No supplement-blog
              hype. No fabricated trial data. Citations with PubMed IDs,
              methodology footnotes, and honest gaps where the evidence is
              thin.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-[1.7] text-stone-500">
              All material is published for qualified researchers. Compounds
              are sold for <em>in-vitro</em> research use only and are not for
              human consumption.
            </p>
          </div>
        </section>

        {/* Index list */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500">
            Volume I — Intranasal peptides
          </div>

          <ol className="mt-12 divide-y divide-stone-300 border-t border-stone-300">
            {ARTICLES.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/research/${a.slug}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-8 gap-y-3 py-10 transition-colors"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.18em] tabular-nums text-[oklch(0.68_0.17_78)]">
                    {a.n}
                  </span>
                  <div>
                    <h2 className="font-serif text-3xl font-normal leading-tight text-stone-900 transition-colors group-hover:text-[oklch(0.68_0.17_78)] md:text-4xl">
                      {a.title}
                    </h2>
                    <p className="mt-2 font-serif text-lg italic text-stone-500">
                      {a.subtitle}
                    </p>
                    <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-stone-700">
                      {a.summary}
                    </p>
                    <div className="mt-4 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">
                      <span>{a.tag}</span>
                      <span aria-hidden>·</span>
                      <span>{a.readingTime}</span>
                    </div>
                  </div>
                  <span
                    aria-hidden
                    className="hidden font-mono text-xs uppercase tracking-[0.18em] text-stone-500 transition-colors group-hover:text-[oklch(0.68_0.17_78)] md:block"
                  >
                    Read →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <Footer />
    </>
  );
}
