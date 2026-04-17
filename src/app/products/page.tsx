"use client";

import { useState } from "react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { ProductCard } from "@/components/site/product-card";
import { PRODUCTS, type ProductCategory } from "@/lib/products";
import { cn } from "@/lib/utils";

type Filter = "all" | ProductCategory;

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All Products" },
  { value: "nasal-spray", label: "Nasal Sprays" },
  { value: "injectable", label: "Injectables" },
  { value: "stack", label: "Stacks" },
];

const CATEGORY_LABELS: Record<ProductCategory, string> = {
  "nasal-spray": "Nasal Spray",
  injectable: "Injectable",
  oral: "Oral",
  stack: "Stack",
};

const TRUST = [
  "HPLC ≥99% purity on every batch",
  "Lot-matched COA with every order",
  "Cold-chain dispatch within 24 h",
  "Mass-spec identity confirmed",
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
      <main>
        {/* Page header */}
        <section className="border-b border-[#dde4da] bg-[#fbf8f2] pb-12 pt-16 lg:pb-16 lg:pt-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6d7b74]">
              Research catalog
            </p>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <h1 className="font-serif text-[clamp(2.8rem,5vw,4.4rem)] leading-[0.96] tracking-[-0.04em] text-[#13211c]">
                Every compound,<br />one place.
              </h1>
              <p className="max-w-md text-[15px] leading-7 text-[#596761] lg:text-right">
                Nasal sprays, injectable vials, and research stacks — all
                independently verified by HPLC and mass spectrometry. Lot-matched
                COA ships with every order.
              </p>
            </div>

            {/* Trust strip */}
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {TRUST.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#53625c]"
                >
                  <span className="size-1.5 rounded-full bg-[#2d7b62]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Filter + grid */}
        <section className="bg-[#f5f1ea] py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            {/* Filter tabs */}
            <div className="mb-10 flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActive(f.value)}
                  className={cn(
                    "h-9 rounded-full border px-5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors",
                    active === f.value
                      ? "border-[#1e6f58] bg-[#1e6f58] text-[#f8fbf8]"
                      : "border-[#cfd8cf] bg-white/70 text-[#53625c] hover:border-[#2d7b62]/50 hover:bg-white"
                  )}
                >
                  {f.label}
                </button>
              ))}
              <span className="ml-auto self-center font-mono text-[11px] uppercase tracking-[0.16em] text-[#8a9690]">
                {filtered.length} {filtered.length === 1 ? "product" : "products"}
              </span>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product) => (
                <div key={product.id} className="flex flex-col">
                  {/* Category label */}
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#8a9690]">
                    {CATEGORY_LABELS[product.category]}
                  </p>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="py-20 text-center text-sm text-[#8a9690]">
                No products in this category yet.
              </p>
            )}
          </div>
        </section>

        {/* Bottom trust block */}
        <section className="border-t border-[#dde4da] bg-[#fbf8f2] py-14">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6d7b74]">
                  Purity
                </p>
                <h3 className="mt-3 font-serif text-[1.6rem] leading-tight tracking-[-0.025em] text-[#13211c]">
                  HPLC and mass-spec on every lot.
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#596761]">
                  We don't ship without a certificate. Every batch is
                  independently analyzed — not by us, by the lab.
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6d7b74]">
                  Dispatch
                </p>
                <h3 className="mt-3 font-serif text-[1.6rem] leading-tight tracking-[-0.025em] text-[#13211c]">
                  Cold-chain, same-day if ordered before 2 PM.
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#596761]">
                  Temperature-controlled packaging as standard. Tracking
                  emailed within hours of dispatch.
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6d7b74]">
                  Compliance
                </p>
                <h3 className="mt-3 font-serif text-[1.6rem] leading-tight tracking-[-0.025em] text-[#13211c]">
                  Research use only. No prescription implied.
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#596761]">
                  All compounds are sold strictly for in-vitro and laboratory
                  research purposes. Not for human consumption.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
