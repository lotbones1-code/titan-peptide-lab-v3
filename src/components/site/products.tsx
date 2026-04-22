import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NASAL_SPRAYS, PRODUCTS, type Product } from "@/lib/products";
import { ProductCard, formatPrice } from "./product-card";
import { Reveal } from "./reveal";
import { CompoundPoster } from "./compound-poster";

const SPEC_ROWS = [
  ["Format", "Precision nasal atomizer"],
  ["Purity", "HPLC ≥99%"],
  ["COA", "Lot-matched certificate"],
  ["Dispatch", "Cold-chain handling"],
];

export function Products() {
  const featured =
    NASAL_SPRAYS.find((product) => product.id === "bpc157-spray") ??
    NASAL_SPRAYS[0];
  const rest = NASAL_SPRAYS.filter((product) => product.id !== featured.id);
  const stack = PRODUCTS.find((product) => product.id === "selank-semax-stack");

  return (
    <section
      id="products"
      className="border-b border-[rgba(10,10,10,0.07)] bg-white py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mb-12 flex flex-col gap-5 border-b border-[rgba(10,10,10,0.07)] pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a3a3a3]">
                Nasal spray catalog
              </span>
              <h2 className="mt-4 font-serif text-[clamp(2.4rem,4.7vw,4.25rem)] leading-[0.92] tracking-[-0.045em] text-[#0a0a0a]">
                Nasal sprays with the proof attached.
              </h2>
            </div>
            <p className="max-w-md text-[14px] leading-[1.8] text-[#525252]">
              Every product page leads with the compound, dose format, assay standard, and the paperwork path before checkout.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <FeaturedProduct product={featured} />
        </Reveal>

        {/* Rest of catalog — tighter grid */}
        <div className="mt-px grid grid-cols-1 gap-px bg-[rgba(10,10,10,0.07)] sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.04}>
              <div className="bg-white">
                <ProductCard product={product} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stack upsell — horizontal rule style */}
        {stack ? (
          <Reveal delay={0.08}>
            <div className="mt-px border border-[rgba(10,10,10,0.07)] bg-[#f5f5f5] p-8 md:flex md:items-center md:justify-between md:gap-10">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#1a5c48]">
                  Stack option
                </span>
                <h3 className="mt-3 font-serif text-[1.9rem] leading-[1.0] tracking-[-0.04em] text-[#0a0a0a]">
                  {stack.name}
                </h3>
                <p className="mt-3 max-w-xl text-[14px] leading-[1.8] text-[#525252]">
                  {stack.tagline}. {stack.size}.
                </p>
              </div>
              <div className="mt-6 flex shrink-0 items-center gap-6 md:mt-0">
                <div>
                  <p className="text-2xl font-semibold text-[#0a0a0a]">
                    {formatPrice(stack.price)}
                  </p>
                  {stack.compareAtPrice ? (
                    <p className="mt-0.5 text-[13px] text-[#a3a3a3] line-through">
                      {formatPrice(stack.compareAtPrice)}
                    </p>
                  ) : null}
                </div>
                <Link
                  href={`/products/${stack.slug}`}
                  className="inline-flex h-10 items-center gap-2 border border-[#0a0a0a] px-5 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#0a0a0a] transition-colors hover:bg-[#0a0a0a] hover:text-white"
                >
                  View stack
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

function FeaturedProduct({ product }: { product: Product }) {
  return (
    <article className="mt-16 grid overflow-hidden border border-[rgba(10,10,10,0.07)] bg-[#0a0a0a] text-white lg:grid-cols-[0.85fr_1.15fr]">
      {/* Poster */}
      <div className="border-b border-white/10 lg:border-b-0 lg:border-r lg:border-r-white/10">
        <CompoundPoster
          product={product}
          variant="feature"
          className="min-h-[380px] rounded-none border-0 shadow-none lg:min-h-[580px]"
        />
      </div>

      {/* Details */}
      <div className="p-8 lg:p-12">
        <div className="flex flex-wrap items-center gap-2">
          <span className="border border-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6bbea0]">
            Flagship
          </span>
          <span className="border border-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">
            HPLC ≥99%
          </span>
        </div>

        <h3 className="mt-6 font-serif text-[clamp(2.6rem,5vw,4.2rem)] leading-[0.9] tracking-[-0.045em] text-white">
          {product.name}
        </h3>
        <p className="mt-2 text-[12px] tracking-[0.04em] text-white/40">{product.size}</p>

        <p className="mt-6 max-w-xl text-[15px] leading-[1.85] text-white/78">
          {product.description}
        </p>

        {/* Spec grid */}
        <dl className="mt-8 border border-white/10">
          {SPEC_ROWS.map(([label, value], i) => (
            <div
              key={label}
              className={`flex items-baseline gap-4 px-5 py-3 text-[12px] ${i > 0 ? "border-t border-white/10" : ""}`}
            >
              <dt className="w-16 shrink-0 font-semibold uppercase tracking-[0.1em] text-white/35">
                {label}
              </dt>
              <dd className="text-white/85">{value}</dd>
            </div>
          ))}
        </dl>

        {/* Benefits */}
        <ul className="mt-6 space-y-2">
          {product.benefits.slice(0, 3).map((benefit) => (
            <li
              key={benefit}
              className="flex gap-3 text-[13.5px] leading-[1.7] text-white/74"
            >
              <span className="mt-2 size-1 shrink-0 rounded-full bg-[#1a5c48]" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-baseline gap-3">
            <p className="text-3xl font-semibold text-white">
              {formatPrice(product.price)}
            </p>
            {product.compareAtPrice ? (
              <p className="text-[15px] text-white/30 line-through">
                {formatPrice(product.compareAtPrice)}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/products/${product.slug}`}
              className="inline-flex h-10 items-center bg-white px-6 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#0a0a0a] transition-colors hover:bg-[#f0f0f0]"
            >
              Shop spray
            </Link>
            <Link
              href="/research/bpc-157-nasal-spray"
              className="inline-flex h-10 items-center gap-1.5 border border-white/15 px-6 text-[12px] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:bg-white/8"
            >
              Read research
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
