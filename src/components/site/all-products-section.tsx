import { ProductCard } from "./product-card";
import { PRODUCTS } from "@/lib/products";

export function AllProductsSection() {
  const rest = PRODUCTS.filter((p) => p.category !== "nasal-spray");

  return (
    <section id="all-products" className="border-b border-white/8 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <header className="grid gap-x-12 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              §04 — Injectables &amp; stacks
            </div>
            <p className="mt-6 max-w-xs text-sm leading-[1.7] text-zinc-400">
              For researchers who already have a sharps protocol. Same batch
              discipline, lyophilized format.
            </p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] font-normal leading-[0.98] tracking-[-0.02em] text-zinc-50 text-pretty">
              The rest of the{" "}
              <em className="font-serif italic text-zinc-300">cabinet</em>.
            </h2>
          </div>
        </header>

        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
