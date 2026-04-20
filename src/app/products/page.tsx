"use client";

import { useState } from "react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { ProductCard } from "@/components/site/product-card";
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
  "HPLC \u226599% purity on every batch",
  "Lot-matched COA with every order",
  "Cold-chain dispatch within 24h",
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
      <main className="bg-white text-[#0f1613]">
        {/* Page header */}
        <section className="border-b border-[rgb(15_22_19/6%)] pb-14 pt-16 lg:pb-16 lg:pt-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#1e6f58]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Research catalog
              </span>
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <h1 className="font-serif text-[clamp(2.4rem,4.8vw,3.8rem)] leading-[0.96] tracking-[-0.03em] text-[#0f1613]">
                Start with sprays,
                <br />
                then go deeper.
              </h1>
              <p className="max-w-md text-[14px] leading-[1.7] text-[#5c6762] lg:text-right">
                The catalog is built nasal-first. Sprays lead because they are
                the easiest format to trust, while injectables and stacks stay
                available for researchers who want them.
              </p>
            </div>

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
          </div>
        </section>

        {/* Filter + grid */}
        <section className="bg-[#fafbfa] py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-wrap items-center gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActive(f.value)}
                  className={cn(
                    "h-9 rounded-lg border px-4 text-[12px] font-semibold uppercase tracking-[0.06em] transition-colors",
                    active === f.value
                      ? "border-[#0f1613] bg-[#0f1613] text-white"
                      : "border-[rgb(15_22_19/10%)] bg-white text-[#5c6762] hover:border-[rgb(15_22_19/18%)] hover:text-[#0f1613]"
                  )}
                >
                  {f.label}
                </button>
              ))}
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

        {/* Bottom trust block */}
        <section className="border-t border-[rgb(15_22_19/6%)] bg-white py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-3">
              {[
                {
                  label: "Purity",
                  title: "HPLC and mass-spec on every lot.",
                  text: "We don\u2019t ship without a certificate. Every batch is independently analyzed \u2014 not by us, by the lab.",
                },
                {
                  label: "Dispatch",
                  title: "Cold-chain, same-day if ordered before 2 PM.",
                  text: "Temperature-controlled packaging as standard. Tracking emailed within hours of dispatch.",
                },
                {
                  label: "Compliance",
                  title: "Research use only. No prescription implied.",
                  text: "All compounds are sold strictly for in-vitro and laboratory research purposes. Not for human consumption.",
                },
              ].map((item) => (
                <div key={item.label}>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1e6f58]">
                    {item.label}
                  </span>
                  <h3 className="mt-3 font-serif text-[1.25rem] leading-[1.2] tracking-[-0.02em] text-[#0f1613]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-[1.7] text-[#5c6762]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
