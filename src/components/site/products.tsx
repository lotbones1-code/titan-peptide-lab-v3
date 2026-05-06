import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NASAL_SPRAYS, VIALS, STACKS } from "@/lib/products";
import { ProductCard } from "./product-card";

function formatPrice(price: number) {
  return `$${price.toFixed(2)}`;
}
import { Reveal } from "./reveal";

export function Products() {
  const sprays = NASAL_SPRAYS;
  const vials = VIALS;
  const stack = STACKS[0];

  return (
    <section id="products" className="border-t border-[#e8e6e1] bg-[#faf8f4] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <div className="mb-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1a5c48]">
                Full catalog
              </span>
              <h2 className="mt-3 font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-[-0.03em] text-[#0f1110]">
                Eleven research-grade compounds.{" "}
                <span className="text-[#1a5c48]">Every lot documented.</span>
              </h2>
              <p className="mt-4 max-w-[44rem] text-[14px] leading-[1.8] text-[#59665f]">
                Six ship as precision intranasal sprays, four as injectable vials, one as a paired nootropic stack. Each ships with the in-house release sheet for the lot on your bottle; the independent ISO 17025 retest report follows by email within 5 business days.
              </p>
            </div>

            <div className="rounded-[1.35rem] border border-[#e5ebe7] bg-white p-6 shadow-[0_1px_2px_rgb(15_22_19/4%),_0_24px_48px_-42px_rgb(15_22_19/18%)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a9690]">
                How ordering works
              </p>
              <div className="mt-4 space-y-3 text-[13px] leading-7 text-[#44514b]">
                <p><span className="font-semibold text-[#0f1110]">01.</span> Add any spray or stack to your cart.</p>
                <p><span className="font-semibold text-[#0f1110]">02.</span> Enter your shipping address — 218 destinations supported, exact rate at checkout.</p>
                <p><span className="font-semibold text-[#0f1110]">03.</span> Pay with BTC, ETH, SOL, or USDC. We verify on-chain and ship within 24h.</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mb-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8a9690]">
            Nasal sprays · 6
          </p>
        </div>
        <div className="grid gap-5 xl:grid-cols-3">
          {sprays.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.05}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        {vials.length > 0 && (
          <>
            <div className="mb-3 mt-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8a9690]">
                Vials &amp; injectables · {vials.length}
              </p>
            </div>
            <div className="grid gap-5 xl:grid-cols-4">
              {vials.map((product, index) => (
                <Reveal key={product.id} delay={index * 0.05}>
                  <ProductCard product={product} />
                </Reveal>
              ))}
            </div>
          </>
        )}

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
                    {["Selank + Semax together", "COA for each compound", "One order path"].map((item) => (
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
