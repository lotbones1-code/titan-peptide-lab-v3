import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/**
 * CompareMesh
 * A consistent lateral internal-link mesh across the full peptide "X vs Y" comparison
 * cluster. Each comparison page renders this once, so every comparison is one hop from
 * every other — this gives Googlebot contextual crawl paths between the comparison pages
 * it currently lists as "Discovered – currently not indexed", instead of relying on the
 * sitewide footer (which Google heavily discounts for importance).
 *
 * Mirrors CompoundBuyMesh (the proven buy-cluster mesh). Additive only: pass the current
 * page's slug via `current` so it is excluded from the grid. Copy is RUO-safe; no claims,
 * no dosing, no efficacy, no fake stats.
 */

type Comparison = { slug: string; label: string };

const GROUPS: { heading: string; items: Comparison[] }[] = [
  {
    heading: "GLP-1 / metabolic research",
    items: [
      { slug: "retatrutide-vs-tirzepatide", label: "Retatrutide vs Tirzepatide" },
      { slug: "retatrutide-vs-semaglutide", label: "Retatrutide vs Semaglutide" },
      { slug: "semaglutide-vs-tirzepatide", label: "Semaglutide vs Tirzepatide" },
      { slug: "retatrutide-vs-tirzepatide-vs-semaglutide", label: "Reta vs Tirz vs Sema" },
    ],
  },
  {
    heading: "Growth-hormone secretagogue research",
    items: [
      { slug: "cjc-1295-vs-ipamorelin", label: "CJC-1295 vs Ipamorelin" },
      { slug: "ipamorelin-vs-sermorelin", label: "Ipamorelin vs Sermorelin" },
      { slug: "mk-677-vs-ipamorelin", label: "MK-677 vs Ipamorelin" },
    ],
  },
  {
    heading: "Recovery & repair research",
    items: [
      { slug: "tb-500-vs-bpc-157", label: "TB-500 vs BPC-157" },
      { slug: "ghk-cu-vs-bpc-157", label: "GHK-Cu vs BPC-157" },
      { slug: "bpc-157-nasal-spray-vs-vial", label: "BPC-157 Nasal Spray vs Vial" },
    ],
  },
  {
    heading: "Neuropeptide & nasal-format research",
    items: [
      { slug: "semax-vs-selank", label: "Semax vs Selank" },
      { slug: "selank-vs-oxytocin-nasal-spray", label: "Selank vs Oxytocin Spray" },
      { slug: "pt-141-vs-oxytocin-nasal-spray", label: "PT-141 vs Oxytocin Spray" },
      { slug: "dsip-vs-oxytocin-nasal-spray", label: "DSIP vs Oxytocin Spray" },
      { slug: "dsip-vs-selank-nasal-spray", label: "DSIP vs Selank Spray" },
      { slug: "dsip-vs-pt-141-nasal-spray", label: "DSIP vs PT-141 Spray" },
    ],
  },
];

export function CompareMesh({ current }: { current: string }) {
  return (
    <section className="border-t border-[rgb(15_22_19/6%)] bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
          Compare research compounds
        </p>
        <h2 className="mt-4 max-w-3xl font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] tracking-[-0.035em]">
          Other peptide comparisons researchers run before sourcing.
        </h2>
        <p className="mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
          Each Titan comparison breaks down the structural differences, research format, and
          documentation a buyer should confirm — lot-matched COA, HPLC purity target, and a
          clear research-use boundary. Pick the pair you&apos;re evaluating.
        </p>

        <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((group) => {
            const items = group.items.filter((c) => c.slug !== current);
            if (items.length === 0) return null;
            return (
              <div key={group.heading}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0f1613]">
                  {group.heading}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {items.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/${c.slug}/?ref=compare-mesh`}
                        className="group inline-flex items-center gap-1 text-[14px] leading-7 text-[#1e6f58] hover:underline"
                      >
                        {c.label}
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-[14px] leading-7">
          <Link
            href="/products/?ref=compare-mesh"
            className="font-semibold text-[#0f1613] hover:text-[#1e6f58] hover:underline"
          >
            Browse the full research catalog &rarr;
          </Link>
        </p>
      </div>
    </section>
  );
}
