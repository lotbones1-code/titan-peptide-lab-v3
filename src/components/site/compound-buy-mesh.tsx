import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/**
 * CompoundBuyMesh
 * A consistent lateral internal-link mesh across the full "where to buy <compound>"
 * cluster. Each compound buy-page renders this once, so every page in the cluster is
 * one hop from every other — this gives Googlebot crawl paths between the commercial
 * pages it currently lists as "Discovered – currently not indexed", instead of relying
 * on sitewide footer boilerplate (which Google heavily discounts for importance).
 *
 * Additive only: pass the current page's slug via `current` so it is excluded from the
 * grid. Copy is RUO-safe; no claims, no fake stats.
 */

type Compound = { slug: string; label: string };

const GROUPS: { heading: string; items: Compound[] }[] = [
  {
    heading: "Metabolic / GLP-1 research",
    items: [
      { slug: "where-to-buy-retatrutide", label: "Retatrutide" },
      { slug: "where-to-buy-tirzepatide", label: "Tirzepatide" },
      { slug: "where-to-buy-semaglutide-research", label: "Semaglutide (research)" },
    ],
  },
  {
    heading: "Recovery & repair research",
    items: [
      { slug: "where-to-buy-bpc-157", label: "BPC-157" },
      { slug: "where-to-buy-bpc-157-nasal-spray", label: "BPC-157 Nasal Spray" },
      { slug: "where-to-buy-tb-500", label: "TB-500" },
      { slug: "where-to-buy-cjc-1295-ipamorelin", label: "CJC-1295 + Ipamorelin" },
    ],
  },
  {
    heading: "Neuropeptide & nootropic research",
    items: [
      { slug: "where-to-buy-selank", label: "Selank" },
      { slug: "where-to-buy-semax-nasal-spray", label: "Semax Nasal Spray" },
      { slug: "where-to-buy-semax-selank-stack", label: "Semax + Selank Stack" },
    ],
  },
  {
    heading: "Nasal-spray format research",
    items: [
      { slug: "where-to-buy-pt-141-nasal-spray", label: "PT-141 Nasal Spray" },
      { slug: "where-to-buy-oxytocin-nasal-spray", label: "Oxytocin Nasal Spray" },
      { slug: "where-to-buy-dsip-nasal-spray", label: "DSIP Nasal Spray" },
    ],
  },
];

export function CompoundBuyMesh({ current }: { current: string }) {
  return (
    <section className="border-t border-[rgb(15_22_19/6%)] bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
          Browse by compound
        </p>
        <h2 className="mt-4 max-w-3xl font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] tracking-[-0.035em]">
          Where to buy other research compounds.
        </h2>
        <p className="mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
          Every Titan buyer guide follows the same documentation-first checklist — lot-matched
          COA, HPLC purity target, visible shipping, crypto checkout, and a clear research-use
          boundary. Pick the compound you&apos;re sourcing.
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
                        href={`/${c.slug}/?ref=buy-mesh`}
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

        {current !== "where-to-buy-research-peptides" && (
          <p className="mt-12 text-[14px] leading-7">
            <Link
              href="/where-to-buy-research-peptides/?ref=buy-mesh"
              className="font-semibold text-[#0f1613] hover:text-[#1e6f58] hover:underline"
            >
              See all research peptides &rarr;
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
