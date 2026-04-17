import { ProductCard } from "./product-card";
import { NASAL_SPRAYS } from "@/lib/products";
import { Wind } from "lucide-react";

export function NasalSpraySection() {
  return (
    <section
      id="nasal-sprays"
      className="relative border-b border-white/5 py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(16,185,129,0.08), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-300">
            <Wind className="h-3.5 w-3.5" />
            Primary format
          </div>
          <h2 className="mt-6 max-w-2xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Nasal sprays.{" "}
            <span className="text-zinc-500">The low-friction way in.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-balance text-lg text-zinc-400">
            No needles. No reconstitution. No guessing. Precision atomizers
            deliver a consistent research dose every time.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {NASAL_SPRAYS.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              featured={i === 0 || i === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
