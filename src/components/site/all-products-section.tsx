import { ProductCard } from "./product-card";
import { PRODUCTS } from "@/lib/products";

export function AllProductsSection() {
  // Non-nasal-spray products (the rest of the catalog)
  const rest = PRODUCTS.filter((p) => p.category !== "nasal-spray");

  return (
    <section id="all-products" className="border-b border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Full research catalog
            </h2>
            <p className="mt-3 max-w-xl text-lg text-zinc-400">
              Injectables, stacks, and emerging compounds. Same quality
              standard.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
