import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NASAL_SPRAYS, PRODUCTS, type Product } from "@/lib/products";
import { ProductCard, formatPrice } from "./product-card";
import { Reveal } from "./reveal";
import { CompoundPoster } from "./compound-poster";

const SPEC_ROWS = [
  ["Format", "Precision nasal atomizer"],
  ["Purity", "HPLC \u226599%"],
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
      className="border-b border-[rgb(15_22_19/7%)] bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#1e6f58]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                  Catalog
                </span>
              </div>
              <h2 className="mt-6 font-serif text-[clamp(2.7rem,5vw,4.25rem)] leading-[0.92] tracking-[-0.04em] text-[#0f1613]">
                Nasal sprays that look premium because the workflow is premium.
              </h2>
            </div>
            <p className="max-w-xl text-[15px] leading-[1.85] text-[#55625c]">
              Titan leads with nasal delivery because the experience is cleaner,
              faster to understand, and easier to trust for first-time buyers.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <FeaturedProduct product={featured} />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {rest.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.04}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        {stack ? (
          <Reveal delay={0.08}>
            <div className="mt-8 grid gap-6 rounded-[1.75rem] border border-[rgb(15_22_19/8%)] bg-[#f5f1ea] p-7 shadow-[0_20px_60px_-38px_rgba(15,22,19,0.18)] md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1e6f58]">
                  Stack option
                </span>
                <h3 className="mt-3 font-serif text-[1.8rem] leading-[1.05] tracking-[-0.03em] text-[#0f1613]">
                  {stack.name}
                </h3>
                <p className="mt-3 max-w-xl text-[14px] leading-[1.8] text-[#55625c]">
                  {stack.tagline}. {stack.size}. Built for buyers who want the
                  calm and focus pairing without piecing together two separate
                  orders.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="text-right">
                  <p className="text-2xl font-semibold text-[#0f1613]">
                    {formatPrice(stack.price)}
                  </p>
                  {stack.compareAtPrice ? (
                    <p className="text-[13px] text-[#b0b8b4] line-through">
                      {formatPrice(stack.compareAtPrice)}
                    </p>
                  ) : null}
                </div>
                <Button
                  asChild
                  className="h-10 rounded-full bg-[#0f1613] px-5 text-[13px] font-medium text-white hover:bg-[#1a2420]"
                >
                  <Link href={`/products/${stack.slug}`}>
                    View stack
                    <ArrowRight className="ml-1.5 size-3.5" />
                  </Link>
                </Button>
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
    <article className="mt-14 grid overflow-hidden rounded-[2rem] border border-[rgb(15_22_19/8%)] bg-[#0f1613] text-white shadow-[0_35px_90px_-50px_rgba(15,22,19,0.7)] lg:grid-cols-[0.9fr_1.1fr]">
      <div className="border-b border-white/10 bg-[#f5f1ea] lg:border-b-0 lg:border-r lg:border-r-white/10">
        <CompoundPoster
          product={product}
          variant="feature"
          className="min-h-[400px] rounded-none border-0 shadow-none lg:min-h-[620px]"
        />
      </div>

      <div className="p-6 sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-white/14 bg-white/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9fd0c0]">
            Flagship spray
          </span>
          <span className="rounded-full border border-white/14 bg-white/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60">
            Best entry point
          </span>
        </div>
        <h3 className="mt-5 max-w-xl font-serif text-[clamp(2.4rem,4.8vw,4rem)] leading-[0.92] tracking-[-0.04em] text-white">
          {product.name}
        </h3>
        <p className="mt-2 text-[13px] text-white/45">{product.size}</p>
        <p className="mt-6 max-w-xl text-[15px] leading-[1.85] text-white/72">
          {product.description}
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_240px]">
          <ul className="grid gap-3">
            {product.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex gap-3 text-[13.5px] leading-[1.7] text-white/72"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#1e6f58]" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <dl className="divide-y divide-white/10 rounded-[1.4rem] border border-white/10 bg-white/6 px-4 text-[12px]">
            {SPEC_ROWS.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[72px_1fr] gap-3 py-3"
              >
                <dt className="font-semibold uppercase tracking-[0.08em] text-white/45">
                  {label}
                </dt>
                <dd className="text-white/90">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-baseline gap-3">
            <p className="text-3xl font-semibold text-white">
              {formatPrice(product.price)}
            </p>
            {product.compareAtPrice ? (
              <p className="text-[15px] text-white/35 line-through">
                {formatPrice(product.compareAtPrice)}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-10 rounded-full bg-white px-5 text-[13px] font-medium text-[#0f1613] hover:bg-[#f5f1ea]"
            >
              <Link href={`/products/${product.slug}`}>Shop spray</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-10 rounded-full border-white/16 bg-transparent px-5 text-[13px] font-medium text-white hover:bg-white/8 hover:text-white"
            >
              <Link href="/research/bpc-157-nasal-spray">
                Read research
                <ArrowRight className="ml-1.5 size-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
