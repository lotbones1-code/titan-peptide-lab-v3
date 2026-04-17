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
  ["COA", "Lot-matched QR certificate"],
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
      className="border-b border-white/10 bg-[#080C0B] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr] lg:items-end">
            <p className="font-mono text-xs uppercase text-[#77E1C3]">
              Nasal spray catalog
            </p>
            <div>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-[#F3F7F6] md:text-5xl">
                Start with the lowest-friction format.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[#9FABAA]">
                Four nasal compounds lead the catalog. BPC-157 sits first
                because it is the simplest entry point for research teams
                comparing delivery formats.
              </p>
            </div>
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
            <div className="mt-5 grid gap-5 rounded-lg border border-white/10 bg-[#101615] p-5 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="font-mono text-xs uppercase text-[#77E1C3]">
                  Stack option
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-[#F3F7F6]">
                  {stack.name}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#9FABAA]">
                  {stack.tagline}. {stack.size}.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="text-right">
                  <p className="text-2xl font-semibold text-[#F3F7F6]">
                    {formatPrice(stack.price)}
                  </p>
                  {stack.compareAtPrice ? (
                    <p className="text-sm text-[#66736F] line-through">
                      {formatPrice(stack.compareAtPrice)}
                    </p>
                  ) : null}
                </div>
                <Button
                  asChild
                  className="h-10 rounded-lg bg-[#F3F7F6] px-4 text-[#06110E] hover:bg-white"
                >
                  <Link href={`/products/${stack.slug}`}>Add to cart</Link>
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
    <article className="mt-14 grid overflow-hidden rounded-lg border border-white/10 bg-[#E8ECF0] text-[#07100E] lg:grid-cols-[0.95fr_1.05fr]">
      <div className="relative min-h-[420px] bg-[#DDE4E2] p-8">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(15,159,122,0.18),transparent_43%)]"
        />
        <Image
          src={product.image}
          alt={product.name}
          width={520}
          height={640}
          priority
          className="relative mx-auto h-[360px] w-auto object-contain lg:h-[480px]"
        />
      </div>

      <div className="p-6 sm:p-8 lg:p-10">
        <p className="font-mono text-xs uppercase text-[#426158]">
          Featured nasal spray
        </p>
        <h3 className="mt-4 text-4xl font-semibold leading-tight text-[#07100E] md:text-5xl">
          {product.name}
        </h3>
        <p className="mt-3 text-sm text-[#52635F]">{product.size}</p>
        <p className="mt-6 max-w-xl text-lg leading-8 text-[#273632]">
          {product.description}
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_240px]">
          <ul className="grid gap-3">
            {product.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3 text-sm text-[#273632]">
                <span className="mt-2 size-1.5 rounded-[2px] bg-[#0F9F7A]" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <dl className="divide-y divide-[#07100E]/12 border-y border-[#07100E]/12 font-mono text-xs">
            {SPEC_ROWS.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[82px_1fr] gap-3 py-3">
                <dt className="uppercase text-[#71817D]">{label}</dt>
                <dd className="text-[#07100E]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-9 flex flex-col gap-5 border-t border-[#07100E]/12 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-baseline gap-3">
            <p className="text-4xl font-semibold">{formatPrice(product.price)}</p>
            {product.compareAtPrice ? (
              <p className="text-lg text-[#7A8783] line-through">
                {formatPrice(product.compareAtPrice)}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-11 rounded-lg bg-[#07100E] px-5 text-[#F3F7F6] hover:bg-[#14211D]"
            >
              <Link href={`/products/${product.slug}`}>Add to cart</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-lg border-[#07100E]/18 bg-transparent px-5 text-[#07100E] hover:bg-[#07100E]/5"
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
