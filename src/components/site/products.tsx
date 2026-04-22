import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NASAL_SPRAYS, PRODUCTS, type Product } from "@/lib/products";
import { ProductCard, formatPrice } from "./product-card";
import { Reveal } from "./reveal";

const CATEGORIES = [
  {
    title: "Recovery",
    description: "Tissue repair and regeneration protocols",
    compound: "BPC-157",
    href: "/products/bpc-157-nasal-spray",
  },
  {
    title: "Cognition",
    description: "Mental clarity and stress resilience",
    compound: "Selank · Semax",
    href: "/products/selank-semax-stack",
  },
  {
    title: "Intimacy & Sleep",
    description: "PT-141, Oxytocin, and DSIP formulations",
    compound: "3 compounds",
    href: "/products/pt-141-nasal-spray",
  },
];

export function Products() {
  const featured = NASAL_SPRAYS.find((p) => p.id === "bpc157-spray") ?? NASAL_SPRAYS[0];
  const rest = NASAL_SPRAYS.filter((p) => p.id !== featured.id);
  const stack = PRODUCTS.find((p) => p.id === "selank-semax-stack");

  return (
    <section id="products" className="bg-neutral-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <Reveal>
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                Nasal spray catalog
              </span>
              <h2 
                className="mt-4 font-serif text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-neutral-900"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Choose by outcome.
              </h2>
            </div>
            <p className="max-w-sm text-[14px] leading-[1.7] text-neutral-500">
              Every compound ships with its certificate, assay data, and cold-chain protocol. 
              No generic sheets. No hidden specs.
            </p>
          </div>
        </Reveal>

        {/* Category entry points */}
        <Reveal delay={0.04}>
          <div className="mb-16 grid gap-4 md:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group border border-neutral-200 bg-white p-6 transition-all hover:border-emerald-200 hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    {cat.compound}
                  </span>
                  <ArrowRight className="size-4 text-neutral-300 transition-all group-hover:text-emerald-700 group-hover:translate-x-1" />
                </div>
                <h3 className="mt-4 text-[1.25rem] font-semibold tracking-[-0.01em] text-neutral-900">
                  {cat.title}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-neutral-500">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </Reveal>

        {/* Featured product — editorial layout */}
        <Reveal>
          <div className="mb-4 border border-neutral-200 bg-white">
            <div className="grid lg:grid-cols-[1fr_1.2fr]">
              {/* Left — product visual */}
              <div className="border-b border-neutral-100 p-8 lg:border-b-0 lg:border-r">
                <div className="flex h-full min-h-[300px] flex-col justify-between">
                  <div>
                    <span className="inline-block border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald-800">
                      Flagship compound
                    </span>
                    <h3 
                      className="mt-6 font-serif text-[clamp(2rem,3vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.02em] text-neutral-900"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {featured.name}
                    </h3>
                    <p className="mt-3 text-[13px] text-neutral-400">{featured.size}</p>
                  </div>
                  
                  <div className="mt-8">
                    <p className="text-[14px] leading-[1.7] text-neutral-600">
                      {featured.description}
                    </p>
                    <div className="mt-6 flex items-baseline gap-3">
                      <span className="text-3xl font-semibold tabular-nums text-neutral-900">
                        {formatPrice(featured.price)}
                      </span>
                      {featured.compareAtPrice && (
                        <span className="text-[15px] text-neutral-300 line-through">
                          {formatPrice(featured.compareAtPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — specs and CTA */}
              <div className="p-8 lg:p-10">
                <div className="space-y-4">
                  {[
                    ["Format", "Precision nasal atomizer"],
                    ["Purity", "HPLC ≥99% — lot-matched"],
                    ["COA", "Batch-specific certificate"],
                    ["Dispatch", "Cold-chain within 24h"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-baseline justify-between border-b border-neutral-100 pb-4">
                      <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-neutral-400">
                        {label}
                      </span>
                      <span className="text-[13px] text-neutral-700">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`/products/${featured.slug}`}
                    className="inline-flex h-11 items-center gap-2 bg-neutral-900 px-6 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition-all hover:bg-emerald-700"
                  >
                    Shop BPC-157
                    <ArrowRight className="size-3.5" />
                  </Link>
                  <Link
                    href="/research/bpc-157-nasal-spray"
                    className="inline-flex h-11 items-center gap-2 border border-neutral-200 px-6 text-[12px] font-semibold uppercase tracking-[0.08em] text-neutral-600 transition-all hover:border-neutral-400"
                  >
                    Read research
                  </Link>
                </div>

                {/* Benefits */}
                <ul className="mt-8 space-y-3">
                  {featured.benefits.slice(0, 3).map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-[13px] leading-[1.6] text-neutral-600">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Product grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.05}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        {/* Stack upsell */}
        {stack && (
          <Reveal delay={0.08}>
            <div className="mt-4 border border-neutral-200 bg-white p-8 md:flex md:items-center md:justify-between md:gap-10">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Stack option
                </span>
                <h3 
                  className="mt-3 font-serif text-[1.75rem] font-bold leading-[1.1] tracking-[-0.02em] text-neutral-900"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {stack.name}
                </h3>
                <p className="mt-2 max-w-lg text-[14px] leading-[1.7] text-neutral-500">
                  {stack.tagline}. {stack.size}.
                </p>
              </div>
              <div className="mt-6 flex shrink-0 items-center gap-6 md:mt-0">
                <div className="text-right">
                  <p className="text-2xl font-semibold tabular-nums text-neutral-900">
                    {formatPrice(stack.price)}
                  </p>
                  {stack.compareAtPrice && (
                    <p className="text-[13px] text-neutral-300 line-through">
                      {formatPrice(stack.compareAtPrice)}
                    </p>
                  )}
                </div>
                <Link
                  href={`/products/${stack.slug}`}
                  className="inline-flex h-10 items-center gap-2 border border-neutral-900 px-5 text-[12px] font-semibold uppercase tracking-[0.06em] text-neutral-900 transition-all hover:bg-neutral-900 hover:text-white"
                >
                  View stack
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
