"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ShoppingBag } from "lucide-react";
import { NASAL_SPRAYS } from "@/lib/products";
import { Reveal } from "./reveal";
import { CompoundPoster } from "./compound-poster";
import { useCart } from "@/lib/cart-context";

function formatPrice(price: number) {
  return `$${price.toFixed(2)}`;
}

export function Hero() {
  const featured = NASAL_SPRAYS[0];
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddFeatured = () => {
    if (!featured) return;
    addItem(featured, 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <section className="border-b border-[#ece9e2] bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-10 lg:py-20">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-start lg:gap-14">
            <div>
              <span className="inline-flex rounded-full border border-[#dde5df] bg-[#f7faf8] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1a5c48]">
                Nasal peptide catalog
              </span>

              <h1 className="mt-5 font-serif text-[clamp(2.9rem,6vw,5.3rem)] font-normal leading-[0.9] tracking-[-0.05em] text-[#0f1110]">
                Research-grade
                <br />
                peptide sprays.
                <br />
                <span className="text-[#1a5c48]">Built to order cleanly.</span>
              </h1>

              <p className="mt-6 max-w-[46ch] text-[15px] leading-[1.85] text-[#555b55] lg:text-[16px]">
                Six nasal sprays backed by lot-matched certificates of analysis, shipped worldwide with on-chain payment verification. Research-grade purity, no compromises.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/products"
                  className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#0f1110] px-8 text-[13px] font-semibold text-white transition-colors hover:bg-[#1a5c48]"
                >
                  Shop catalog
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/lab-testing"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[#d4d4d4] px-7 text-[13px] font-semibold text-[#0f1110] transition-colors hover:border-[#0f1110]"
                >
                  Review lab testing
                </Link>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {[
                  ["≥99%", "purity target with lot-matched COA"],
                  ["24h", "dispatch target after payment confirmation"],
                  ["5 rails", "BTC · ETH · SOL · USDC on two networks"],
                  ["40+", "countries we ship to from one warehouse"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-[1.2rem] border border-[#e7ece9] bg-[#fafbfa] px-5 py-4"
                  >
                    <p className="text-[1.6rem] font-semibold tracking-[-0.04em] text-[#0f1110]">{value}</p>
                    <p className="mt-1 text-[12px] leading-6 text-[#66736d]">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {featured ? (
                <div className="overflow-hidden rounded-[1.7rem] border border-[#e8e6e1] bg-[#fafaf8] shadow-[0_1px_2px_rgb(15_22_19/4%),_0_30px_70px_-50px_rgb(15_22_19/16%)]">
                  <div className="border-b border-[#e8e6e1] px-6 py-5 sm:px-7">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1a5c48]">
                          Featured release
                        </p>
                        <h2 className="mt-2 font-serif text-[1.95rem] leading-[0.95] tracking-[-0.04em] text-[#0f1110]">
                          {featured.name.replace(" Nasal Spray", "")}
                        </h2>
                      </div>
                      <p className="text-[1.55rem] font-semibold tabular-nums text-[#0f1110]">
                        {formatPrice(featured.price)}
                      </p>
                    </div>
                    <p className="mt-3 max-w-[44ch] text-[13px] leading-[1.75] text-[#66736d]">
                      {featured.tagline} Start with the featured release, review shipping, then choose the payment rail that fits your order.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5">
                    <CompoundPoster
                      product={featured}
                      variant="feature"
                      className="min-h-[320px] border-0 shadow-none sm:min-h-[380px] lg:min-h-[420px]"
                    />
                  </div>

                  <div className="grid gap-4 border-t border-[#e8e6e1] bg-white p-6 sm:grid-cols-[1fr_auto] sm:items-end sm:px-7">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a9690]">
                        Order desk
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {[
                          "Lot-matched COA",
                          "24h dispatch target",
                          "Ships worldwide",
                        ].map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[#e3e8e4] bg-[#fafbfa] px-3 py-1.5 text-[11px] font-medium text-[#52605a]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:min-w-[15rem]">
                      <button
                        onClick={handleAddFeatured}
                        className={`inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-[12px] font-semibold text-white transition-colors ${
                          added ? "bg-[#175946]" : "bg-[#0f1110] hover:bg-[#1a5c48]"
                        }`}
                      >
                        {added ? <Check className="size-4" /> : <ShoppingBag className="size-4" />}
                        {added ? "Added to cart" : "Add featured to cart"}
                      </button>
                      <Link
                        href={`/products/${featured.slug}`}
                        className="inline-flex h-11 items-center justify-center rounded-full border border-[#d4d4d4] px-6 text-[12px] font-semibold text-[#0f1110] transition-colors hover:border-[#0f1110]"
                      >
                        View product detail
                      </Link>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
