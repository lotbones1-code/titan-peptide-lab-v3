import { ProductCard } from "./product-card";
import { NASAL_SPRAYS } from "@/lib/products";

export function NasalSpraySection() {
  return (
    <section
      id="nasal-sprays"
      className="relative border-b border-white/8 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Editorial section header — sidebound caption left, large heading right.
            Breaks the centered "badge + title + subtitle" template pattern. */}
        <header className="grid gap-x-12 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              §01 — Catalog
            </div>
            <p className="mt-6 max-w-xs text-sm leading-[1.7] text-zinc-400">
              Four nasal sprays. Each ships with the chromatogram from its own
              batch — printed, signed, dated. Not a representative one.
            </p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-serif text-[clamp(2.25rem,5.5vw,4.5rem)] font-normal leading-[0.98] tracking-[-0.02em] text-zinc-50 text-pretty">
              Four sprays. One{" "}
              <em className="text-[var(--signature)] not-italic">
                certificate
              </em>{" "}
              per box.
            </h2>
          </div>
        </header>

        {/* Asymmetric grid — first card spans wider on desktop to break monotony */}
        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {NASAL_SPRAYS.map((product, i) => (
            <div
              key={product.id}
              className={
                // Featured first card spans 2 columns on lg, others single
                i === 0
                  ? "md:col-span-2 lg:col-span-2"
                  : "lg:col-span-1"
              }
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
