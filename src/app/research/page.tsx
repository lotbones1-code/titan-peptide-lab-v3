import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { ContentBuyerCta } from "@/components/site/content-buyer-cta";

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
      "A pentadecapeptide fragment of human gastric juice protein, studied for endothelial recovery, tendon repair, and gut-lining cytoprotection. Fourteen studies reviewed; emphasis on bioavailability via transmucosal absorption.",
    tag: "Repair",
    readingTime: "12 min",
    refs: 14,
  },
  {
    slug: "selank-anxiolytic-nootropic",
    n: "02",
    title: "Selank",
    subtitle: "Heptapeptide anxiolytic and GABA-ergic modulator",
    summary:
      "A synthetic analogue of tuftsin studied by the Institute of Molecular Genetics (Moscow) for its anxiolytic profile without sedation or dependence. Includes comparative analysis with benzodiazepine class compounds.",
    tag: "Anxiolytic",
    readingTime: "11 min",
    refs: 11,
  },
  {
    slug: "semax-cognition-neuroplasticity",
    n: "03",
    title: "Semax",
    subtitle: "ACTH(4-10) heptapeptide — BDNF and NGF expression",
    summary:
      "A melanocortin-derived peptide researched for cognitive enhancement, neuroprotection, and upregulation of brain-derived neurotrophic factor. Reviewed alongside emerging stroke-recovery literature from Eastern European trials.",
    tag: "Nootropic",
    readingTime: "12 min",
    refs: 13,
  },
  {
    slug: "pt-141-research",
    n: "04",
    title: "PT-141 (Bremelanotide)",
    subtitle: "Melanocortin receptor agonist",
    summary:
      "A cyclic heptapeptide derivative of α-MSH studied for central nervous system activation of sexual arousal pathways via MC3R/MC4R. Covers FDA-approved clinical trial data alongside broader research applications.",
    tag: "Melanocortin",
    readingTime: "11 min",
    refs: 10,
  },
  {
    slug: "oxytocin-bonding-social",
    n: "05",
    title: "Oxytocin",
    subtitle: "Social-cognition neuropeptide and the intranasal delivery paradigm",
    summary:
      "A cyclic nonapeptide synthesized in the hypothalamus, studied for effects on trust, empathic accuracy, and face processing via OXTR and partial V1a cross-reactivity. Reviews both the behavioral findings and the methodological caveats around intranasal central exposure.",
    tag: "Social",
    readingTime: "12 min",
    refs: 9,
  },
  {
    slug: "dsip-sleep-recovery",
    n: "06",
    title: "DSIP (Delta Sleep-Inducing Peptide)",
    subtitle: "Slow-wave sleep modulation and HPA-axis literature",
    summary:
      "A nonapeptide originally isolated from rabbit cerebral venous blood during electrically-induced sleep. Reviews four decades of literature on EEG delta-wave facilitation, HPA-axis dampening, withdrawal-syndrome applications, and stress-adaptation findings.",
    tag: "Sleep",
    readingTime: "12 min",
    refs: 9,
  },
  {
    slug: "nasal-stack-protocols",
    n: "07",
    title: "Nasal stack protocols",
    subtitle: "Rationale and separation when combining intranasal peptides",
    summary:
      "How researchers separate nasal dosing windows, rotate peptide pairs, and manage receptor downregulation across multi-compound protocols. Includes timing grids for the most common two- and three-compound stacks.",
    tag: "Protocol",
    readingTime: "13 min",
    refs: 8,
  },
];

const TAG_PALETTE: Record<string, string> = {
  Repair: "bg-[#e8f2ee] text-[#1e6f58]",
  Anxiolytic: "bg-[#f0ede6] text-[#5a4a2a]",
  Nootropic: "bg-[#ebeef7] text-[#2a3a7a]",
  Melanocortin: "bg-[#f2e8f0] text-[#6a2a5a]",
  Social: "bg-[#f5ece8] text-[#7a3a2a]",
  Sleep: "bg-[#e8ecf2] text-[#2a3e5a]",
  Protocol: "bg-[#eef2eb] text-[#324030]",
};

export default function ResearchHubPage() {
  const totalRefs = ARTICLES.reduce((s, a) => s + a.refs, 0);
  const totalMinutes = ARTICLES.reduce(
    (s, a) => s + parseInt(a.readingTime),
    0
  );

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
      <Nav />
      <main className="bg-[#fbf8f2] text-[#13211c]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
        />

        {/* Masthead */}
        <section className="border-b border-[#d9dfd5]">
          <div className="mx-auto max-w-7xl px-6 pt-20 pb-0 lg:pt-28">
            {/* Top label row */}
            <div className="flex items-center justify-between">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6d7b74]">
                §Research — Literature index
              </div>
              <div className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-[#8a9791] sm:block">
                Volume I · {new Date().getFullYear()}
              </div>
            </div>

            {/* Headline */}
            <h1 className="mt-6 font-serif text-[clamp(2.6rem,6.5vw,5.6rem)] font-normal leading-[0.95] tracking-[-0.025em] text-[#13211c] text-pretty">
              Peptide literature,
              <br />
              <em className="italic text-[oklch(0.68_0.17_78)]">annotated.</em>
            </h1>

            {/* Lede + stats bar */}
            <div className="mt-8 grid gap-8 pb-12 lg:grid-cols-[1fr_auto] lg:items-end lg:pb-0">
              <div className="max-w-2xl">
                <p className="text-lg leading-[1.65] text-[#4a5852]">
                  Long-form summaries of peer-reviewed work underlying each
                  compound we synthesize. PubMed-cited, methodology-annotated,
                  with honest gaps where the evidence is thin.
                </p>
                <p className="mt-3 text-sm leading-[1.7] text-[#6d7b74]">
                  For qualified researchers. Compounds sold for{" "}
                  <em>in-vitro</em> research use only — not for human
                  consumption.
                </p>
              </div>

              {/* Stats strip */}
              <dl className="flex shrink-0 flex-wrap items-end gap-x-8 gap-y-3 border-t border-[#d9dfd5] pt-4 lg:flex-col lg:items-end lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
                <div className="flex flex-col items-end">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8a9791]">
                    Entries
                  </dt>
                  <dd className="font-serif text-4xl leading-none text-[#13211c]">
                    {ARTICLES.length}
                  </dd>
                </div>
                <div className="flex flex-col items-end">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8a9791]">
                    References
                  </dt>
                  <dd className="font-serif text-4xl leading-none text-[#13211c]">
                    {totalRefs}
                  </dd>
                </div>
                <div className="flex flex-col items-end">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8a9791]">
                    Est. read
                  </dt>
                  <dd className="font-serif text-4xl leading-none text-[#13211c]">
                    {totalMinutes}
                    <span className="ml-0.5 font-mono text-xs text-[#8a9791]">
                      min
                    </span>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Volume label tab */}
            <div className="mt-6 inline-block border-t-2 border-[#1e6f58] pt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#1e6f58] lg:mt-10">
              Volume I — Intranasal peptides
            </div>
          </div>
        </section>

        {/* Article index */}
        <section className="mx-auto max-w-7xl px-6 pb-24 lg:pb-32">
          <ol className="divide-y divide-[#d9dfd5]">
            {ARTICLES.map((a) => {
              const tagClass =
                TAG_PALETTE[a.tag] ?? "bg-[#eef2eb] text-[#324030]";
              return (
                <li key={a.slug}>
                  <Link
                    href={`/research/${a.slug}`}
                    className="group grid grid-cols-[3rem_1fr] items-start gap-x-6 py-8 sm:grid-cols-[3rem_1fr_7rem] sm:items-baseline sm:gap-x-8 lg:grid-cols-[4rem_1fr_9rem]"
                  >
                    {/* Number */}
                    <span className="pt-1.5 font-mono text-[11px] tabular-nums text-[oklch(0.68_0.17_78)] sm:pt-0">
                      {a.n}
                    </span>

                    {/* Content */}
                    <div>
                      {/* Tag + reading time */}
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span
                          className={`inline-block rounded px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] ${tagClass}`}
                        >
                          {a.tag}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#8a9791]">
                          {a.readingTime} · {a.refs} refs
                        </span>
                      </div>

                      <h2 className="font-serif text-2xl font-normal leading-tight text-[#13211c] transition-colors group-hover:text-[oklch(0.68_0.17_78)] md:text-3xl">
                        {a.title}
                      </h2>
                      <p className="mt-1 font-serif text-base italic text-[#6d7b74]">
                        {a.subtitle}
                      </p>
                      <p className="mt-3 max-w-2xl text-[14px] leading-[1.7] text-[#4a5852]">
                        {a.summary}
                      </p>
                    </div>

                    {/* Arrow — hidden on mobile */}
                    <span
                      aria-hidden
                      className="hidden self-center text-right font-mono text-[11px] uppercase tracking-[0.16em] text-[#8a9791] transition-colors group-hover:text-[oklch(0.68_0.17_78)] sm:block"
                    >
                      Read →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>

          <div className="mt-14 border-t border-[#d9dfd5] pt-14">
            <ContentBuyerCta
              eyebrow="Next step"
              title="Ready to move from papers to product pages?"
              body="The buyer path trims the catalog down to the fastest first-order options, keeps FIRST10 attached, and still puts the COA workflow in front of the cart."
              primaryHref="/start/?ref=content&discount=FIRST10&utm_source=onsite&utm_medium=research_index&utm_content=footer"
              primaryLabel="Open buyer path"
              secondaryHref="/lab-testing?utm_source=onsite&utm_medium=research_index&utm_content=footer"
              secondaryLabel="Review lot proof"
              note="This is the shortest path from long-form research content into a documented first order."
            />
          </div>
        </section>

        {/* Editorial footer strip */}
        <section className="border-t border-[#d9dfd5] bg-[#f4f1eb]">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:py-16">
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d7b74]">
                  Methodology
                </div>
                <p className="mt-3 text-sm leading-[1.7] text-[#4a5852]">
                  Each entry cites primary sources. PubMed IDs are provided
                  in-text. Where human trial data is unavailable, we note
                  preclinical scope explicitly.
                </p>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d7b74]">
                  Update cadence
                </div>
                <p className="mt-3 text-sm leading-[1.7] text-[#4a5852]">
                  Entries are reviewed when new literature becomes available.
                  Revision dates are noted at the foot of each article. No AI
                  summary generation.
                </p>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d7b74]">
                  Disclaimer
                </div>
                <p className="mt-3 text-sm leading-[1.7] text-[#4a5852]">
                  All compounds are sold for{" "}
                  <em>in-vitro</em> research use only. Nothing here constitutes
                  medical advice or treatment recommendation.
                </p>
              </div>
            </div>
            <div className="mt-10 border-t border-[#d9dfd5] pt-6">
              <Link
                href="/lab-testing"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#1e6f58] transition-opacity hover:opacity-70"
              >
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-[#1e6f58]"
                />
                View COAs and lab certifications →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
