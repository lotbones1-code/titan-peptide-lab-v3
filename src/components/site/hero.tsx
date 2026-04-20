import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NASAL_SPRAYS } from "@/lib/products";
import { Reveal } from "./reveal";
import { CompoundPoster } from "./compound-poster";

const HERO_PRODUCTS = NASAL_SPRAYS.slice(0, 3);
const PRIMARY_PRODUCT = HERO_PRODUCTS[0];
const SECONDARY_PRODUCTS = HERO_PRODUCTS.slice(1);

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[rgb(15_22_19/7%)] bg-[#f8f6f2]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 15% 0%, rgba(30,111,88,0.08) 0%, transparent 58%), radial-gradient(ellipse 55% 45% at 85% 12%, rgba(15,22,19,0.06) 0%, transparent 52%), linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(248,246,242,0) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-18 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[rgb(15_22_19/10%)] bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#1e6f58]">
                  The Titan Peptide Company
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#7b8781]">
                  Batch-traceable research compounds
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.04}>
              <h1 className="mt-8 max-w-5xl font-serif text-[clamp(1.7rem,8.6vw,6.4rem)] font-normal leading-[0.96] tracking-[-0.035em] text-[#0f1613]">
                Clinical-grade presentation.
                <br />
                <span className="text-[#1e6f58]">Research-first proof.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-7 max-w-2xl text-[1.05rem] leading-[1.85] text-[#55625c] sm:text-[1.08rem]">
                Titan turns peptide buying into a branded quality system.
                Every release clears a {"\u2265"}99% HPLC threshold, carries a
                lot-matched certificate, and ships with cold-chain handling
                built in from the start.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  className="h-12 rounded-full bg-[#0f1613] px-7 text-[14px] font-medium text-white shadow-[0_20px_50px_-28px_rgba(15,22,19,0.8)] hover:bg-[#18201d]"
                >
                  <Link href="/products">
                    View catalog
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-[rgb(15_22_19/12%)] bg-white/80 px-7 text-[14px] font-medium text-[#0f1613] hover:border-[rgb(15_22_19/20%)] hover:bg-white"
                >
                  <Link href="/lab-testing">Review lab system</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-12 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  ["\u226599%", "HPLC release threshold"],
                  ["1:1", "Lot-to-COA match"],
                  ["ISO 17025", "Accredited partner lab"],
                  ["24h", "Cold-chain dispatch"],
                ].map(([stat, label]) => (
                  <div
                    key={label}
                    className="rounded-[1.4rem] border border-[rgb(15_22_19/8%)] bg-white/86 px-5 py-4 shadow-[0_18px_50px_-34px_rgba(15,22,19,0.28)]"
                  >
                    <p className="font-serif text-[1.8rem] leading-none tracking-[-0.04em] text-[#0f1613]">
                      {stat}
                    </p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-[#7b8781]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-[2rem] border border-[rgb(15_22_19/8%)] bg-white p-3 shadow-[0_30px_80px_-40px_rgba(15,22,19,0.25)]">
                <CompoundPoster
                  product={PRIMARY_PRODUCT}
                  variant="hero"
                  className="min-h-[420px] rounded-[1.6rem] border-0 shadow-none"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
                {SECONDARY_PRODUCTS.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="group overflow-hidden rounded-[1.6rem] border border-[rgb(15_22_19/8%)] bg-white p-2.5 outline-none transition-transform hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
                  >
                    <CompoundPoster
                      product={product}
                      variant="card"
                      className="min-h-[240px] rounded-[1.2rem] border-0 shadow-none transition-all duration-300 group-hover:shadow-[0_24px_60px_-28px_rgb(15_22_19/24%)]"
                    />
                  </Link>
                ))}
                <div className="flex flex-col justify-between rounded-[1.6rem] bg-[#0f1613] p-6 text-white shadow-[0_30px_80px_-40px_rgba(15,22,19,0.75)] md:row-span-1">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-white/55">
                      Release standard
                    </p>
                    <p className="mt-4 font-serif text-[2rem] leading-[0.95] tracking-[-0.04em]">
                      Documentation that survives scrutiny.
                    </p>
                  </div>
                  <div className="mt-8 space-y-4 text-[13px] leading-[1.7] text-white/70">
                    <p>Every lot stays tied to its certificate, shipping flow, and order record.</p>
                    <p>Built to look premium because the underlying system is premium.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
