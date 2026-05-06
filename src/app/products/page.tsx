"use client";

import { useState } from "react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { ProductCard } from "@/components/site/product-card";
import { PageHero } from "@/components/site/page-hero";
import { NextRead } from "@/components/site/next-read";
import { PRODUCTS, type ProductCategory } from "@/lib/products";
import { cn } from "@/lib/utils";

type Filter = "all" | ProductCategory;

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "nasal-spray", label: "Nasal Sprays" },
  { value: "injectable", label: "Injectables" },
  { value: "stack", label: "Stacks" },
];

const TRUST = [
  "HPLC ≥99% purity on every batch",
  "Lot release sheet with every order",
  "Cold-chain dispatch within 24h",
  "Mass-spec identity confirmed",
];

const FORMAT_GUIDE = [
  {
    label: "Nasal spray",
    title: "Start here.",
    text: "Measured nasal sprays are the shortest path into a peptide protocol. No reconstitution, no needles, no dosing math — the bottle is the dose. Built for researchers who want compliance and consistency without handling lyophilized powder.",
  },
  {
    label: "Injectable",
    title: "Go deeper when the protocol calls for it.",
    text: "Lyophilized vials for researchers who already run their own reconstitution. Same release-sheet discipline, higher on-hand concentration per mg. Use when the spray form cannot deliver the range the study requires.",
  },
  {
    label: "Stack",
    title: "Curated, not bundled.",
    text: "Stacks combine compounds that are typically run in parallel (Selank + Semax). Same purity spec per component, priced to remove the small penalty of two separate bottles. Not a discount pack — a deliberate pairing.",
  },
];

export default function ProductsPage() {
  const [active, setActive] = useState<Filter>("all");

  const filtered =
    active === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === active);

  return (
    <>
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <PageHero
          eyebrow="Research catalog"
          title={
            <>
              Start with sprays,
              <br />
              <em className="not-italic text-[#1e6f58]">then go deeper</em>.
            </>
          }
          supporting={
            <>
              The catalog is built nasal-first. Sprays lead because they are
              the easiest format to trust, while injectables and stacks stay
              available for researchers who want them.
            </>
          }
          below={
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {TRUST.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8a9690]"
                >
                  <span className="size-1 rounded-full bg-[#1e6f58]" />
                  {item}
                </li>
              ))}
            </ul>
          }
        />

        {/* Filter + grid */}
        <section className="bg-[#fafbfa] py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="sticky top-16 z-10 -mx-5 mb-10 flex flex-wrap items-center gap-2 bg-[#fafbfa]/85 px-5 py-4 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              {FILTERS.map((f) => {
                const isActive = active === f.value;
                return (
                  <button
                    key={f.value}
                    onClick={() => setActive(f.value)}
                    className={cn(
                      "relative px-2 pb-2 pt-1 text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors",
                      isActive
                        ? "text-[#0f1613]"
                        : "text-[#8a9690] hover:text-[#0f1613]",
                    )}
                  >
                    {f.label}
                    <span
                      className={cn(
                        "absolute inset-x-2 -bottom-px h-px transition-colors",
                        isActive ? "bg-[#1e6f58]" : "bg-transparent",
                      )}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
              <span className="ml-auto text-[12px] text-[#8a9690]">
                {filtered.length}{" "}
                {filtered.length === 1 ? "product" : "products"}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="py-20 text-center text-[14px] text-[#8a9690]">
                No products in this category yet.
              </p>
            )}
          </div>
        </section>

        {/* How to read the catalog — editorial */}
        <section className="border-t border-[rgb(15_22_19/6%)] bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#1e6f58]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                How to read the catalog
              </span>
            </div>

            <div className="mt-10 grid gap-x-14 gap-y-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h2 className="font-serif text-[clamp(1.75rem,3.2vw,2.6rem)] leading-[1.05] tracking-[-0.02em] text-[#0f1613] text-pretty">
                  Spray, inject, stack —
                  <br />
                  <em className="not-italic text-[#1e6f58]">pick by protocol</em>,
                  <br />
                  not by shelf appeal.
                </h2>
                <p className="mt-6 max-w-md text-[14px] leading-[1.8] text-[#5c6762]">
                  Every format below carries the same release rule: batch-matched
                  COA, ≥ 99.0% internal purity threshold, retained lot record.
                  The only thing that changes is how the compound gets delivered.
                </p>
              </div>

              <div className="lg:col-span-7">
                <ol className="space-y-8">
                  {FORMAT_GUIDE.map((item, i) => (
                    <li
                      key={item.label}
                      className="grid grid-cols-[auto_1fr] gap-x-5 border-t border-[rgb(15_22_19/6%)] pt-6"
                    >
                      <span className="text-[12px] font-semibold tabular-nums text-[#1e6f58]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                          {item.label}
                        </span>
                        <h3 className="mt-1 font-serif text-[1.35rem] leading-[1.15] tracking-[-0.02em] text-[#0f1613]">
                          {item.title}
                        </h3>
                        <p className="mt-3 max-w-xl text-[13.5px] leading-[1.75] text-[#5c6762]">
                          {item.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <NextRead
          eyebrow="Lab testing"
          title="What each bottle is tested for before it ships."
          href="/lab-testing"
          blurb="Identity, purity, sterility, endotoxin, heavy metals, residual solvents — with specs, methods, and the independent ISO 17025 crosscheck that decides whether a batch leaves the building."
        />
      </main>
      <Footer />
    </>
  );
}
