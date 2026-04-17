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
    <section id="products" className="border-b border-[#dde4da] bg-[#f7f3ec] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr] lg:items-end">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6d7b74]">
              Nasal spray catalog
            </p>
            <div>
              <h2 className="max-w-3xl font-serif text-[clamp(2.8rem,5vw,4.6rem)] leading-[0.96] tracking-[-0.04em] text-[#13211c]">
                Start with the easiest format to trust.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#596761]">
                The front of the catalog is intentionally simple, premium nasal
                sprays, clear batch proof, and checkout language that reads more
                like a real lab brand than a crypto side quest.
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
            <div className="mt-6 grid gap-5 rounded-[1.75rem] border border-[#d8dfd7] bg-[linear-gradient(180deg,#edf4ee_0%,#e6efe8_100%)] p-6 shadow-[0_24px_60px_-42px_rgba(19,33,28,0.35)] md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#587066]">
                  Stack option
                </p>
                <h3 className="mt-3 font-serif text-[2rem] leading-[1.02] tracking-[-0.03em] text-[#13211c]">
                  {stack.name}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#55645d]">
                  {stack.tagline}. {stack.size}. Built for buyers who want the
                  calm and focus pairing without piecing it together manually.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="text-right">
                  <p className="text-3xl font-semibold text-[#13211c]">
                    {formatPrice(stack.price)}
                  </p>
                  {stack.compareAtPrice ? (
                    <p className="text-sm text-[#7a8781] line-through">
                      {formatPrice(stack.compareAtPrice)}
                    </p>
                  ) : null}
                </div>
                <Button
                  asChild
                  className="h-11 rounded-full bg-[#1e6f58] px-5 text-[#f8fbf8] hover:bg-[#175946]"
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
    <article className="mt-14 grid overflow-hidden rounded-[2rem] border border-[#d7dfd6] bg-[linear-gradient(180deg,#fffdf9_0%,#f4efe7_100%)] text-[#13211c] shadow-[0_34px_90px_-48px_rgba(19,33,28,0.36)] lg:grid-cols-[0.92fr_1.08fr]">
      <div className="relative min-h-[420px] border-b border-[#dfe6dc] bg-[linear-gradient(180deg,#eef4ee_0%,#e5eee7_100%)] p-8 lg:border-b-0 lg:border-r">
        <div
          aria-hidden
          className="absolute inset-x-10 top-10 h-28 rounded-full bg-[#d8e8dd] blur-3xl"
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
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#5f7169]">
            Featured nasal spray
          </p>
          <span className="rounded-full border border-[#d4ddd3] bg-white/85 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#6b7972]">
            Best entry point
          </span>
        </div>
        <h3 className="mt-4 max-w-xl font-serif text-[clamp(2.5rem,5vw,4.4rem)] leading-[0.95] tracking-[-0.045em] text-[#13211c]">
          {product.name}
        </h3>
        <p className="mt-3 text-sm text-[#6a7871]">{product.size}</p>
        <p className="mt-6 max-w-xl text-lg leading-8 text-[#2f3e37]">
          {product.description}
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_240px]">
          <ul className="grid gap-3">
            {product.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3 text-sm text-[#314039]">
                <span className="mt-2 size-1.5 rounded-full bg-[#2d7b62]" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <dl className="divide-y divide-[#13211c]/10 rounded-[1.2rem] border border-[#13211c]/10 bg-white/65 px-4 font-mono text-xs">
            {SPEC_ROWS.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[82px_1fr] gap-3 py-3">
                <dt className="uppercase text-[#73817b]">{label}</dt>
                <dd className="text-[#13211c]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-9 flex flex-col gap-5 border-t border-[#13211c]/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-baseline gap-3">
            <p className="text-4xl font-semibold">{formatPrice(product.price)}</p>
            {product.compareAtPrice ? (
              <p className="text-lg text-[#7a8781] line-through">
                {formatPrice(product.compareAtPrice)}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-11 rounded-full bg-[#1e6f58] px-5 text-[#f8fbf8] hover:bg-[#175946]"
            >
              <Link href={`/products/${product.slug}`}>View Product</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full border-[#cfd7cf] bg-white/70 px-5 text-[#24332c] hover:border-[#2d7b62]/40 hover:bg-white"
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
