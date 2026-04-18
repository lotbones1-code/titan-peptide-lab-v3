"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { NASAL_SPRAYS, PRODUCTS, type Product } from "@/lib/products";
import { formatPrice } from "./product-card";
import { Reveal } from "./reveal";
import { ArrowUpRight } from "lucide-react";

export function Products() {
  const sprays = NASAL_SPRAYS;
  const stack = PRODUCTS.find((p) => p.id === "selank-semax-stack");

  return (
    <section id="products" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#1e6f58]">
                Catalog
              </p>
              <h2 className="mt-4 max-w-2xl font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[0.96] tracking-[-0.03em] text-[#0f1613]">
                Six compounds, one standard.
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-[#5c6762]">
              Every bottle ships with a batch-matched COA and cold-chain
              packing. No needles, no reconstitution.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sprays.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.05}>
              <CatalogCard product={product} />
            </Reveal>
          ))}
          {stack && (
            <Reveal delay={sprays.length * 0.05}>
              <CatalogCard product={stack} featured />
            </Reveal>
          )}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-[13px] text-[#999]">
            All products are sold for laboratory research purposes only.
            Use code <span className="font-medium text-[#1e6f58]">FIRST10</span> for 10% off your first order.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function CatalogCard({ product, featured }: { product: Product; featured?: boolean }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] ${
        featured
          ? "border-[#1e6f58]/20 bg-[#f0f5f2]"
          : "border-[#e5e5e5] bg-white hover:border-[#1e6f58]/30"
      }`}
    >
      {/* Ghost text background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-2 -right-2 font-serif text-[5rem] font-bold leading-none tracking-[-0.06em] text-[#0f1613]/[0.03] transition-all duration-500 group-hover:text-[#0f1613]/[0.06]"
      >
        {product.name.replace(" Nasal Spray", "").split(" ")[0]}
      </div>

      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-serif text-[1.5rem] leading-tight tracking-[-0.02em] text-[#0f1613]">
              {product.name.replace(" Nasal Spray", "")}
            </h3>
            <p className="mt-1 text-[12px] text-[#999]">{product.size}</p>
          </div>
          <motion.div
            className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e5e5e5] text-[#ccc] transition-all duration-300 group-hover:border-[#1e6f58] group-hover:bg-[#1e6f58] group-hover:text-white"
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
          </motion.div>
        </div>

        <p className="mt-4 text-[14px] leading-relaxed text-[#5c6762]">
          {product.tagline}
        </p>
      </div>

      <div className="relative mt-6 flex items-center justify-between border-t border-[#e5e5e5]/60 pt-4">
        <span className="text-[18px] font-semibold tracking-tight text-[#0f1613]">
          {formatPrice(product.price)}
        </span>
        {product.compareAtPrice ? (
          <span className="text-[13px] text-[#bbb] line-through">
            {formatPrice(product.compareAtPrice)}
          </span>
        ) : (
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#1e6f58]">
            ≥99% HPLC
          </span>
        )}
      </div>
    </Link>
  );
}
