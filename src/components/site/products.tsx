import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NASAL_SPRAYS, PRODUCTS, type Product } from "@/lib/products";
import { ProductCard, formatPrice } from "./product-card";
import { Reveal } from "./reveal";

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
    <section id="products" className="border-b border-[rgb(15_22_19/8%)] bg-[#fafafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr] lg:items-end">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6b7a73]">
              Nasal spray catalog
            </p>
            <div>
              <h2 className="max-w-3xl font-serif text-[clamp(2.8rem,5vw,4.6rem)] leading-[0.96] tracking-[-0.04em] text-[#0f1613]">
                Nasal sprays first, everything else after.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5c6762]">
                The top of the catalog should immediately answer the buyer’s
                easiest question: where do I start? Titan starts with spray
                formats, cleaner trust signals, and the products that are
                easiest to understand without friction.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.03}>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["No needles", "Lower hesitation, cleaner entry point"],
              ["Lot-matched proof", "Every spray tied back to batch release"],
              ["Fastest catalog read", "Lead offers merchandised before injectables"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-[1.25rem] border border-[rgb(15_22_19/8%)] bg-white px-4 py-4 shadow-[0_1px_2px_rgb(15_22_19/4%)]"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6b7a73]">
                  {label}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#2a3530]">{value}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <FeaturedProduct product={featured} />
        </Reveal>

        <div className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {rest.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.04}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        {stack ? (
          <Reveal delay={0.08}>
            <div className="mt-6 grid gap-5 rounded-[1.75rem] border border-[rgb(15_22_19/8%)] bg-white p-6 shadow-[0_24px_60px_-45px_rgb(15_22_19/18%),_0_2px_6px_-2px_rgb(15_22_19/6%)] md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#1e6f58]">
                  Stack option
                </p>
                <h3 className="mt-3 font-serif text-[2rem] leading-[1.02] tracking-[-0.03em] text-[#0f1613]">
                  {stack.name}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5c6762]">
                  {stack.tagline}. {stack.size}. Built for buyers who want the
                  calm and focus pairing without piecing it together manually.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="text-right">
                  <p className="text-3xl font-semibold text-[#0f1613]">
                    {formatPrice(stack.price)}
                  </p>
                  {stack.compareAtPrice ? (
                    <p className="text-sm text-[#9aa6a0] line-through">
                      {formatPrice(stack.compareAtPrice)}
                    </p>
                  ) : null}
                </div>
                <Button
                  asChild
                  className="h-11 rounded-full bg-[#1e6f58] px-5 text-white hover:bg-[#175946]"
                >
                  <Link href={`/products/${stack.slug}`}>View Stack</Link>
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
    <article className="mt-14 grid overflow-hidden rounded-[2rem] border border-[rgb(15_22_19/8%)] bg-white text-[#0f1613] shadow-[0_34px_90px_-50px_rgb(15_22_19/20%),_0_4px_12px_-4px_rgb(15_22_19/6%)] lg:grid-cols-[0.92fr_1.08fr]">
      <div className="relative min-h-[420px] border-b border-[rgb(15_22_19/6%)] bg-[#fafbfa] p-8 lg:border-b-0 lg:border-r">
        <div
          aria-hidden
          className="absolute inset-x-10 top-10 h-28 rounded-full bg-[#e8f1ec] blur-3xl opacity-60"
        />
        <Image
          src={product.image}
          alt={product.name}
          width={520}
          height={640}
          priority
          className="relative mx-auto h-[360px] w-auto object-contain lg:h-[500px]"
        />
      </div>

      <div className="p-6 sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#1e6f58]">
            Featured nasal spray
          </p>
          <span className="rounded-full border border-[rgb(15_22_19/10%)] bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#5c6762]">
            Best entry point
          </span>
        </div>
        <h3 className="mt-4 max-w-xl font-serif text-[clamp(2.5rem,5vw,4.4rem)] leading-[0.95] tracking-[-0.045em] text-[#0f1613]">
          {product.name}
        </h3>
        <p className="mt-3 text-sm text-[#6b7a73]">{product.size}</p>
        <p className="mt-6 max-w-xl text-lg leading-8 text-[#2a3530]">
          {product.description}
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_240px]">
          <ul className="grid gap-3">
            {product.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3 text-sm text-[#2a3530]">
                <span className="mt-2 size-1.5 rounded-full bg-[#1e6f58]" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <dl className="divide-y divide-[rgb(15_22_19/6%)] rounded-[1.2rem] border border-[rgb(15_22_19/8%)] bg-[#fafafa] px-4 font-mono text-xs">
            {SPEC_ROWS.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[82px_1fr] gap-3 py-3">
                <dt className="uppercase text-[#6b7a73]">{label}</dt>
                <dd className="text-[#0f1613]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-9 flex flex-col gap-5 border-t border-[rgb(15_22_19/8%)] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-baseline gap-3">
            <p className="text-4xl font-semibold">{formatPrice(product.price)}</p>
            {product.compareAtPrice ? (
              <p className="text-lg text-[#9aa6a0] line-through">
                {formatPrice(product.compareAtPrice)}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-11 rounded-full bg-[#1e6f58] px-5 text-white hover:bg-[#175946]"
            >
              <Link href={`/products/${product.slug}`}>Shop Spray</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full border-[rgb(15_22_19/12%)] bg-white px-5 text-[#0f1613] hover:border-[#1e6f58]/50 hover:bg-[#f7faf8]"
            >
              <Link href="/research/bpc-157-nasal-spray">
                Read research
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
