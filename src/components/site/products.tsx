import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NASAL_SPRAYS, PRODUCTS } from "@/lib/products";
import { ProductCard, formatPrice } from "./product-card";
import { Reveal } from "./reveal";

const CATEGORIES = [
  {
    title: "Recovery",
    description: "Repair-led compounds for recovery and tissue-support demand.",
    compound: "BPC-157",
    href: "/products/bpc-157-nasal-spray",
  },
  {
    title: "Cognition",
    description: "Selank and Semax organized for calm focus and cognitive resilience.",
    compound: "Selank · Semax",
    href: "/products/selank-semax-stack",
  },
  {
    title: "Intimacy + Sleep",
    description: "PT-141, Oxytocin, and DSIP grouped around higher-intent use cases.",
    compound: "3 compounds",
    href: "/products/pt-141-nasal-spray",
  },
];

export function Products() {
  const featured = NASAL_SPRAYS.find((p) => p.id === "bpc157-spray") ?? NASAL_SPRAYS[0];
  const rest = NASAL_SPRAYS.filter((p) => p.id !== featured.id);
  const stack = PRODUCTS.find((p) => p.id === "selank-semax-stack");

  return (
    <section id="products" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <div className="grid gap-8 border-b border-[rgba(10,10,10,0.07)] pb-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                Nasal spray catalog
              </span>
              <h2
                className="mt-4 max-w-[10ch] font-serif text-[clamp(2.2rem,4vw,3.8rem)] font-bold leading-[1.02] tracking-[-0.03em] text-neutral-900"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Full nasal spray lineup.
              </h2>
            </div>
            <p className="max-w-2xl text-[14px] leading-[1.8] text-neutral-500">
              The homepage opens with merchandising by outcome. This section is the shelf itself, one flagship, then the rest of the lineup, then the stack for buyers who already know the pair they want.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[1.5rem] border border-[rgba(10,10,10,0.07)] bg-[rgba(10,10,10,0.07)] md:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group bg-[#fbfaf7] px-6 py-6 transition-colors hover:bg-[#f4f1ea]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-800">
                    {cat.compound}
                  </span>
                  <ArrowRight className="size-4 text-neutral-400 transition-all group-hover:translate-x-1 group-hover:text-neutral-900" />
                </div>
                <h3 className="mt-8 font-serif text-[1.95rem] leading-none tracking-[-0.04em] text-neutral-900">
                  {cat.title}
                </h3>
                <p className="mt-3 max-w-[30ch] text-[13px] leading-[1.75] text-neutral-600">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-6 overflow-hidden rounded-[2rem] border border-neutral-200 bg-[#f7f5ef] text-[#0f1613]">
            <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
              <div className="border-b border-[rgba(10,10,10,0.07)] p-8 lg:border-b-0 lg:border-r lg:p-10">
                <span className="inline-flex rounded-full border border-[rgba(10,10,10,0.08)] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1a5c48]">
                  Flagship compound
                </span>
                <h3
                  className="mt-6 font-serif text-[clamp(2.2rem,3vw,3.25rem)] font-bold leading-[1.02] tracking-[-0.04em] text-[#0f1613]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {featured.name}
                </h3>
                <p className="mt-3 text-[13px] text-[#8b908c]">{featured.size}</p>
                <p className="mt-6 max-w-[34ch] text-[14px] leading-[1.8] text-[#5f655f]">
                  {featured.tagline}. Titan uses this as the anchor product because it is the clearest high-intent entry into the catalog and makes the assortment feel tangible fast.
                </p>
                <div className="mt-8 flex items-baseline gap-3">
                  <span className="text-3xl font-semibold tabular-nums text-[#0f1613]">
                    {formatPrice(featured.price)}
                  </span>
                  {featured.compareAtPrice ? (
                    <span className="text-[15px] text-[#c7c7c2] line-through">
                      {formatPrice(featured.compareAtPrice)}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="p-8 lg:p-10">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ["Format", "Precision nasal atomizer"],
                    ["Purity", "HPLC ≥99%, lot-matched"],
                    ["Paperwork", "Batch-specific COA packet"],
                    ["Dispatch", "Cold-chain within 24h"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-[1.25rem] border border-[rgba(10,10,10,0.07)] bg-white p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8b908c]">{label}</p>
                      <p className="mt-2 text-[13px] leading-[1.7] text-[#0f1613]">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`/products/${featured.slug}`}
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-[#111614] px-6 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition-all hover:bg-[#1a5c48]"
                  >
                    Shop BPC-157
                    <ArrowRight className="size-3.5" />
                  </Link>
                  <Link
                    href="/research/bpc-157-nasal-spray"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-[rgba(10,10,10,0.1)] px-6 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#0f1613] transition-all hover:bg-white"
                  >
                    Read research
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {rest.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.05}>
              <ProductCard
                product={product}
                variant={index === 0 ? "editorial" : "default"}
                className={index === 0 ? "lg:col-span-2" : undefined}
              />
            </Reveal>
          ))}
        </div>

        {stack && (
          <Reveal delay={0.08}>
            <div className="mt-4 overflow-hidden rounded-[1.9rem] border border-[rgba(10,10,10,0.08)] bg-[#f7f5ef]">
              <div className="grid gap-px bg-[rgba(10,10,10,0.07)] lg:grid-cols-[1.14fr_0.86fr]">
                <div className="bg-[#f7f5ef] px-7 py-8 lg:px-9 lg:py-9">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1a5c48]">
                    Already know the pair?
                  </span>
                  <h3
                    className="mt-3 max-w-[12ch] font-serif text-[2rem] font-bold leading-[1.03] tracking-[-0.035em] text-[#0f1613] lg:text-[2.45rem]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {stack.name}
                  </h3>
                  <p className="mt-3 max-w-[42ch] text-[14px] leading-[1.82] text-[#5f655f]">
                    {stack.tagline}. {stack.size}. Built for buyers who want the calm-and-cognition pair in one checkout instead of comparing compounds one by one.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {[
                      "Selank + Semax pairing",
                      "Single checkout path",
                      "COA path shown before payment",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[rgba(10,10,10,0.08)] bg-white px-3 py-1.5 text-[11px] leading-none text-[#5f655f]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white px-7 py-8 lg:px-8 lg:py-9">
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    <div className="rounded-[1.15rem] border border-[rgba(10,10,10,0.07)] bg-[#fbfaf7] px-4 py-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8b908c]">Pairing</p>
                      <p className="mt-2 text-[13px] leading-[1.7] text-[#0f1613]">Calm-focus stack organized for buyers starting with the known duo.</p>
                    </div>
                    <div className="rounded-[1.15rem] border border-[rgba(10,10,10,0.07)] bg-[#fbfaf7] px-4 py-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8b908c]">Order path</p>
                      <p className="mt-2 text-[13px] leading-[1.7] text-[#0f1613]">One product page, one checkout decision, same Titan paperwork standard.</p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-end justify-between gap-4 border-t border-[rgba(10,10,10,0.07)] pt-5">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8b908c]">Stack price</p>
                      <div className="mt-1 flex items-baseline gap-2">
                        <p className="text-[1.8rem] font-semibold tracking-[-0.04em] text-[#0f1613]">{formatPrice(stack.price)}</p>
                        {stack.compareAtPrice ? (
                          <p className="text-[13px] text-[#c7c7c2] line-through">{formatPrice(stack.compareAtPrice)}</p>
                        ) : null}
                      </div>
                    </div>
                    <Link
                      href={`/products/${stack.slug}`}
                      className="inline-flex h-11 items-center gap-2 rounded-full bg-[#111614] px-5 text-[12px] font-semibold uppercase tracking-[0.07em] text-white transition-all hover:bg-[#1a5c48]"
                    >
                      View stack
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
