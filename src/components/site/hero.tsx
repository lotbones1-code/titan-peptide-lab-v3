import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NASAL_SPRAYS } from "@/lib/products";
import { Reveal } from "./reveal";
import { CompoundPoster } from "./compound-poster";

function formatPrice(price: number) {
  return `$${price.toFixed(2)}`;
}

export function Hero() {
  const featured = NASAL_SPRAYS[0];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-10 lg:py-20">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <h1 className="font-serif text-[clamp(2.6rem,6vw,4.8rem)] font-normal leading-[0.92] tracking-[-0.04em] text-[#0f1110]">
                Research-grade
                <br />
                peptide sprays.
                <br />
                <span className="text-[#1a5c48]">No needles.</span>
              </h1>

              <p className="mt-6 max-w-[46ch] text-[15px] leading-[1.8] text-[#555b55] lg:text-[16px]">
                Six compounds in precision nasal atomizers — ready to use out of the box. Every bottle ships with a batch-specific certificate of analysis.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/products"
                  className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#0f1110] px-8 text-[13px] font-semibold text-white transition-colors hover:bg-[#1a5c48]"
                >
                  Browse sprays
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/lab-testing"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[#d4d4d4] px-7 text-[13px] font-semibold text-[#0f1110] transition-colors hover:border-[#0f1110]"
                >
                  See lab testing
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-6 border-t border-[#e8e6e1] pt-6">
                <div>
                  <p className="text-[22px] font-semibold tabular-nums text-[#0f1110]">≥99%</p>
                  <p className="mt-1 text-[12px] text-[#777]">HPLC purity</p>
                </div>
                <div className="h-8 w-px bg-[#e8e6e1]" />
                <div>
                  <p className="text-[22px] font-semibold tabular-nums text-[#0f1110]">6</p>
                  <p className="mt-1 text-[12px] text-[#777]">Compounds</p>
                </div>
                <div className="h-8 w-px bg-[#e8e6e1]" />
                <div>
                  <p className="text-[22px] font-semibold tabular-nums text-[#0f1110]">24h</p>
                  <p className="mt-1 text-[12px] text-[#777]">Ships cold-chain</p>
                </div>
              </div>
            </div>

            <div>
              {featured ? (
                <div className="overflow-hidden rounded-2xl border border-[#e8e6e1] bg-[#faf8f4]">
                  <CompoundPoster
                    product={featured}
                    variant="feature"
                    className="min-h-[320px] rounded-none border-0 shadow-none sm:min-h-[380px] lg:min-h-[440px]"
                  />
                  <div className="border-t border-[#e8e6e1] bg-white p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1a5c48]">
                          Most popular
                        </p>
                        <h2 className="mt-2 font-serif text-[1.6rem] leading-none tracking-[-0.03em] text-[#0f1110]">
                          {featured.name.replace(" Nasal Spray", "")}
                        </h2>
                        <p className="mt-2 text-[13px] leading-[1.6] text-[#777]">
                          {featured.tagline}
                        </p>
                      </div>
                      <p className="text-[1.4rem] font-semibold tabular-nums text-[#0f1110]">
                        {formatPrice(featured.price)}
                      </p>
                    </div>
                    <div className="mt-5 flex gap-3">
                      <Link
                        href={`/products/${featured.slug}`}
                        className="inline-flex h-10 flex-1 items-center justify-center rounded-full bg-[#0f1110] text-[12px] font-semibold text-white transition-colors hover:bg-[#1a5c48]"
                      >
                        View product
                      </Link>
                      <Link
                        href="/research/bpc-157-nasal-spray"
                        className="inline-flex h-10 items-center justify-center rounded-full border border-[#d4d4d4] px-5 text-[12px] font-semibold text-[#0f1110] transition-colors hover:border-[#0f1110]"
                      >
                        Research
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
