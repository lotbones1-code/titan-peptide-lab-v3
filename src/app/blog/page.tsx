import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Blog — Titan Peptide Laboratory",
  description:
    "Guides, comparisons, and buyer resources for peptide nasal sprays. Learn about BPC-157, Semax, Selank, PT-141, DSIP, oxytocin, peptide stacking, and storage from Titan Peptide Lab.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Titan Peptide Laboratory",
    description:
      "Guides, comparisons, and buyer resources for peptide nasal sprays.",
    url: "/blog",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const POSTS = [
  {
    slug: "fda-peptide-reclassification-2026",
    n: "01",
    title: "FDA Peptide Reclassification 2026: What It Means for Nasal Sprays",
    subtitle:
      "In February 2026, HHS moved 14 previously restricted peptides back to legal compounding status. Here's what changed, which peptides are affected, and what it means for nasal spray research.",
    category: "Regulatory Update",
    readingTime: "9 min",
    date: "2026-04-25",
  },
  {
    slug: "peptide-nasal-sprays-trending-2026",
    n: "02",
    title: "Why Peptide Nasal Sprays Are Exploding in 2026",
    subtitle:
      "From niche biohacker protocol to 10.1 million monthly searches — peptide nasal sprays are the fastest-growing segment in the peptide market. Here's what's driving the surge.",
    category: "Trend Analysis",
    readingTime: "8 min",
    date: "2026-04-25",
  },
  {
    slug: "peptide-trends-2026-research-compounds",
    n: "03",
    title: "Peptide Trends 2026: The Research Compounds Everyone's Talking About",
    subtitle:
      "From BPC-157 to GHK-Cu, the peptide market hit $164 billion in 2026. Here are the compounds driving the research boom, what the data says, and where the market is heading.",
    category: "Market Analysis",
    readingTime: "10 min",
    date: "2026-04-25",
  },
  {
    slug: "bpc-157-nasal-spray-complete-guide",
    n: "04",
    title: "BPC-157 Nasal Spray: Complete Guide (2026)",
    subtitle:
      "Everything researchers need to know about BPC-157 nasal spray — dosing, purity, sourcing, and what the literature actually says.",
    category: "Guide",
    readingTime: "11 min",
    date: "2026-04-25",
  },
  {
    slug: "where-to-buy-peptide-nasal-sprays",
    n: "05",
    title: "Where to Buy Peptide Nasal Sprays in the US",
    subtitle:
      "A sourcing guide for researchers looking for lab-grade peptide nasal sprays with verified purity and proper documentation.",
    category: "Buying Guide",
    readingTime: "10 min",
    date: "2026-04-25",
  },
  {
    slug: "semax-vs-selank-neuropeptide-comparison",
    n: "06",
    title: "Semax vs Selank: Which Neuropeptide Is Right for Your Research?",
    subtitle:
      "A head-to-head comparison of two Russian-developed neuropeptides — mechanisms, study applications, and stacking considerations.",
    category: "Comparison",
    readingTime: "12 min",
    date: "2026-04-25",
  },
  {
    slug: "how-to-read-peptide-coa",
    n: "07",
    title: "How to Read a Peptide COA (Certificate of Analysis)",
    subtitle:
      "A practical walkthrough of HPLC chromatograms, mass spec data, and purity metrics — so you know exactly what you are buying.",
    category: "Education",
    readingTime: "9 min",
    date: "2026-04-25",
  },
  {
    slug: "peptide-nasal-sprays-vs-injections",
    n: "08",
    title:
      "Peptide Nasal Sprays vs Injections: Which Delivery Method Is Better?",
    subtitle:
      "Bioavailability, convenience, and research applications — comparing the two dominant peptide delivery methods.",
    category: "Comparison",
    readingTime: "10 min",
    date: "2026-04-25",
  },
  {
    slug: "pt-141-nasal-spray-research-guide",
    n: "09",
    title: "PT-141 Nasal Spray: Mechanism, Research, and What You Need to Know",
    subtitle:
      "From melanocortin pathways to sourcing criteria — what researchers need to know about PT-141 (Bremelanotide) in intranasal format.",
    category: "Guide",
    readingTime: "11 min",
    date: "2026-04-25",
  },
  {
    slug: "dsip-nasal-spray-delta-sleep-peptide",
    n: "10",
    title: "DSIP Nasal Spray: The Delta Sleep Peptide Explained",
    subtitle:
      "From its accidental discovery in 1977 to modern sleep architecture research — a complete look at the peptide that modulates deep sleep without sedation.",
    category: "Guide",
    readingTime: "10 min",
    date: "2026-04-25",
  },
  {
    slug: "oxytocin-nasal-spray-research",
    n: "11",
    title: "Oxytocin Nasal Spray: Beyond 'The Love Hormone'",
    subtitle:
      "The popular narrative reduces oxytocin to a bonding chemical. The science tells a more complex and more interesting story.",
    category: "Guide",
    readingTime: "12 min",
    date: "2026-04-25",
  },
  {
    slug: "best-peptide-stacks-research-guide",
    n: "12",
    title: "Best Peptide Stacks for Research: Beginner's Guide to Combining Compounds",
    subtitle:
      "Why researchers combine peptides, which combinations have mechanistic rationale, and how to design protocols that account for the unknown.",
    category: "Guide",
    readingTime: "12 min",
    date: "2026-04-25",
  },
  {
    slug: "peptide-storage-guide",
    n: "13",
    title: "Peptide Storage Guide: How to Keep Your Research Compounds Stable",
    subtitle:
      "Temperature, light, reconstitution stability, and compound-specific protocols — everything you need to keep research peptides intact.",
    category: "Education",
    readingTime: "9 min",
    date: "2026-04-25",
  },
  {
    slug: "peptide-nasal-spray-benefits",
    n: "14",
    title: "5 Benefits of Peptide Nasal Sprays Over Injections",
    subtitle:
      "Bioavailability, convenience, pain-free dosing, precision, and compliance — a research-focused breakdown of why nasal delivery is reshaping how researchers work with peptides.",
    category: "Comparison",
    readingTime: "10 min",
    date: "2026-04-25",
  },
  {
    slug: "beginners-guide-nootropic-peptides",
    n: "15",
    title: "The Beginner's Guide to Nootropic Peptides: Selank vs Semax",
    subtitle:
      "What nootropic peptides are, how they interact with the brain, and an honest head-to-head between Selank and Semax — mechanisms, research findings, and stacking considerations.",
    category: "Guide",
    readingTime: "13 min",
    date: "2026-04-25",
  },
  {
    slug: "how-to-verify-peptide-purity",
    n: "16",
    title: "How to Verify Peptide Purity: A Researcher's Guide to COAs",
    subtitle:
      "What a Certificate of Analysis actually tells you, how to read HPLC chromatograms and mass spec data, what red flags to watch for, and why third-party testing matters.",
    category: "Education",
    readingTime: "12 min",
    date: "2026-04-25",
  },
  {
    slug: "usa-made-peptide-nasal-sprays",
    n: "17",
    title: "USA-Made Peptide Nasal Sprays: What Domestic Sourcing Changes",
    subtitle:
      "A US shipping address is not the same as domestic synthesis, domestic fill, or finished-product testing. Here is how researchers can evaluate USA-made sourcing claims without relying on vague copy.",
    category: "Sourcing",
    readingTime: "10 min",
    date: "2026-05-19",
  },
];

const CATEGORY_PALETTE: Record<string, string> = {
  Guide: "bg-[#e8f2ee] text-[#1e6f58]",
  "Buying Guide": "bg-[#f0ede6] text-[#5a4a2a]",
  Comparison: "bg-[#ebeef7] text-[#2a3a7a]",
  Education: "bg-[#f2e8f0] text-[#6a2a5a]",
  "Regulatory Update": "bg-[#fef3e6] text-[#8a5a1a]",
  "Trend Analysis": "bg-[#e6f3fe] text-[#1a5a8a]",
  "Market Analysis": "bg-[#e8eef2] text-[#2a4a5a]",
  Sourcing: "bg-[#eef0e6] text-[#4a5a1e]",
};

export default function BlogIndexPage() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Titan Peptide Lab Blog",
    itemListElement: POSTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `/blog/${p.slug}`,
      name: p.title,
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
            <div className="flex items-center justify-between">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6d7b74]">
                Blog — Peptide guides &amp; resources
              </div>
              <div className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-[#8a9791] sm:block">
                Updated April 2026
              </div>
            </div>

            <h1 className="mt-6 font-serif text-[clamp(2.6rem,6.5vw,5.6rem)] font-normal leading-[0.95] tracking-[-0.025em] text-[#13211c] text-pretty">
              The peptide
              <br />
              <em className="italic text-[oklch(0.68_0.17_78)]">
                buyer&rsquo;s guide.
              </em>
            </h1>

            <div className="mt-8 grid gap-8 pb-12 lg:grid-cols-[1fr_auto] lg:items-end lg:pb-0">
              <div className="max-w-2xl">
                <p className="text-lg leading-[1.65] text-[#4a5852]">
                  Practical guides for researchers sourcing peptide nasal sprays.
                  What to look for, how to compare, and what the science actually
                  supports — no marketing fluff.
                </p>
              </div>

              <dl className="flex shrink-0 flex-wrap items-end gap-x-8 gap-y-3 border-t border-[#d9dfd5] pt-4 lg:flex-col lg:items-end lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
                <div className="flex flex-col items-end">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8a9791]">
                    Articles
                  </dt>
                  <dd className="font-serif text-4xl leading-none text-[#13211c]">
                    {POSTS.length}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 inline-block border-t-2 border-[#1e6f58] pt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#1e6f58] lg:mt-10">
              Guides &amp; comparisons
            </div>
          </div>
        </section>

        {/* Post index */}
        <section className="mx-auto max-w-7xl px-6 pb-24 lg:pb-32">
          <ol className="divide-y divide-[#d9dfd5]">
            {POSTS.map((p) => {
              const catClass =
                CATEGORY_PALETTE[p.category] ?? "bg-[#eef2eb] text-[#324030]";
              return (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group grid grid-cols-[3rem_1fr] items-start gap-x-6 py-8 sm:grid-cols-[3rem_1fr_7rem] sm:items-baseline sm:gap-x-8 lg:grid-cols-[4rem_1fr_9rem]"
                  >
                    <span className="pt-1.5 font-mono text-[11px] tabular-nums text-[oklch(0.68_0.17_78)] sm:pt-0">
                      {p.n}
                    </span>

                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span
                          className={`inline-block rounded px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] ${catClass}`}
                        >
                          {p.category}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#8a9791]">
                          {p.readingTime} · {p.date}
                        </span>
                      </div>

                      <h2 className="font-serif text-2xl font-normal leading-tight text-[#13211c] transition-colors group-hover:text-[oklch(0.68_0.17_78)] md:text-3xl">
                        {p.title}
                      </h2>
                      <p className="mt-3 max-w-2xl text-[14px] leading-[1.7] text-[#4a5852]">
                        {p.subtitle}
                      </p>
                    </div>

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
        </section>
      </main>
      <Footer />
    </>
  );
}
