import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BLOG_POSTS as POSTS } from "@/lib/blog-posts";

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

const CATEGORY_PALETTE: Record<string, string> = {
  Guide: "bg-[#e8f2ee] text-[#1e6f58]",
  "Buying Guide": "bg-[#f0ede6] text-[#5a4a2a]",
  Comparison: "bg-[#ebeef7] text-[#2a3a7a]",
  Education: "bg-[#f2e8f0] text-[#6a2a5a]",
  "Regulatory Update": "bg-[#fef3e6] text-[#8a5a1a]",
  "Trend Analysis": "bg-[#e6f3fe] text-[#1a5a8a]",
  "Market Analysis": "bg-[#e8eef2] text-[#2a4a5a]",
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
