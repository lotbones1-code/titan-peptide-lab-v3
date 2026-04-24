import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NASAL_SPRAYS, PRODUCTS } from "@/lib/products";
import { ProductCard, formatPrice } from "./product-card";
import { Reveal } from "./reveal";

export function Products() {
  const featured = NASAL_SPRAYS.find((p) => p.id === "bpc157-spray") ?? NASAL_SPRAYS[0];
  const rest = NASAL_SPRAYS.filter((p) => p.id !== featured.id);
  const stack = PRODUCTS.find((p) => p.id === "selank-semax-stack");

  return (
    <section id="products" className="border-t border-[#e8e6e1] bg-[#faf8f4] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <div className="mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1a5c48]">
              Full catalog
            </span>
            <h2 className="mt-3 font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-[-0.03em] text-[#0f1110]">
              Six sprays. Each one tested, documented, and shipped cold.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {rest.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.05}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        {stack && (
          <Reveal delay={0.08}>
            <div className="mt-5 overflow-hidden rounded-2xl border border-[#e8e6e1] bg-white">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="border-b border-[#e8e6e1] p-7 lg:border-b-0 lg:border-r lg:p-9">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1a5c48]">
                    Bundle &amp; save
                  </span>
                  <h3 className="mt-3 font-serif text-[1.8rem] leading-[1.05] tracking-[-0.03em] text-[#0f1110] lg:text-[2.2rem]">
                    {stack.name}
                  </h3>
                  <p className="mt-3 max-w-[42ch] text-[14px] leading-[1.75] text-[#555b55]">
                    Selank for calm focus, Semax for cognitive drive. Two complementary nootropic peptides paired at a reduced price.
                  </p>
                  <p className="mt-2 text-[13px] text-[#999]">{stack.size}</p>
                </div>

                <div className="flex flex-col justify-between p-7 lg:p-9">
                  <div className="flex flex-wrap gap-2">
                    {["Selank + Semax together", "COA for each compound", "One checkout"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#e8e6e1] bg-[#faf8f4] px-3 py-1.5 text-[12px] text-[#555b55]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-end justify-between gap-4 border-t border-[#e8e6e1] pt-5">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <p className="text-[1.6rem] font-semibold tracking-[-0.03em] text-[#0f1110]">{formatPrice(stack.price)}</p>
                        {stack.compareAtPrice ? (
                          <p className="text-[14px] text-[#bbb] line-through">{formatPrice(stack.compareAtPrice)}</p>
                        ) : null}
                      </div>
                    </div>
                    <Link
                      href={`/products/${stack.slug}`}
                      className="inline-flex h-11 items-center gap-2 rounded-full bg-[#0f1110] px-6 text-[12px] font-semibold text-white transition-colors hover:bg-[#1a5c48]"
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
