import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileCheck2, ShieldCheck, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NASAL_SPRAYS } from "@/lib/products";
import { Reveal } from "./reveal";

const HERO_PRODUCTS = NASAL_SPRAYS.slice(0, 3);

const PROOF_ITEMS = [
  {
    icon: ShieldCheck,
    label: "HPLC release",
    value: "≥99% purity gate",
  },
  {
    icon: FileCheck2,
    label: "Batch proof",
    value: "Lot-matched COA",
  },
  {
    icon: Snowflake,
    label: "Dispatch",
    value: "Cold-chain packed",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[rgb(15_22_19/8%)] bg-white">
      <div
        aria-hidden
        className="absolute left-[-12rem] top-[-8rem] h-[32rem] w-[32rem] rounded-full bg-[#e8f1ec] blur-3xl opacity-70"
      />
      <div
        aria-hidden
        className="absolute right-[-10rem] top-[6rem] h-[28rem] w-[28rem] rounded-full bg-[#f4f6f4] blur-3xl opacity-80"
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-18 pt-14 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)] lg:px-8 lg:pb-24 lg:pt-20">
        <Reveal className="relative z-10 flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgb(15_22_19/10%)] bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#5c6762] shadow-[0_1px_2px_rgb(15_22_19/4%)]">
            No needles, nasal-first, lot-linked proof
          </div>

          <h1 className="mt-7 max-w-4xl font-serif text-[clamp(3.4rem,7vw,6.8rem)] font-normal leading-[0.92] tracking-[-0.05em] text-[#0f1613]">
            Premium nasal sprays,
            <br />
            built to be <em className="text-[#2d7b62] not-italic">trusted</em> at first glance.
          </h1>

          <p className="mt-7 max-w-2xl text-[1.05rem] leading-8 text-[#5c6762] sm:text-[1.125rem]">
            Titan should feel like the cleanest way into the category. Start with nasal sprays, get the easiest format to trust, and see lot-matched proof, cleaner checkout, and sharper product presentation before you ever think about injectables.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#2a3530]">
            <div className="rounded-full border border-[rgb(15_22_19/9%)] bg-white px-4 py-2 shadow-[0_1px_2px_rgb(15_22_19/4%)]">
              6 flagship spray SKUs
            </div>
            <div className="rounded-full border border-[rgb(15_22_19/9%)] bg-white px-4 py-2 shadow-[0_1px_2px_rgb(15_22_19/4%)]">
              Selank + Semax stack ready
            </div>
            <div className="rounded-full border border-[rgb(15_22_19/9%)] bg-white px-4 py-2 shadow-[0_1px_2px_rgb(15_22_19/4%)]">
              FIRST10 on first order
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-12 rounded-full bg-[#1e6f58] px-6 text-white hover:bg-[#175946]"
            >
              <Link href="#products">
                Shop Nasal Sprays
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-[rgb(15_22_19/12%)] bg-white px-6 text-[#0f1613] hover:border-[#1e6f58]/50 hover:bg-[#f7faf8]"
            >
              <Link href="/research/bpc-157-nasal-spray">Read Research</Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="relative z-10">
          <div className="relative overflow-hidden rounded-[2rem] border border-[rgb(15_22_19/8%)] bg-white p-6 shadow-[0_40px_100px_-45px_rgb(15_22_19/18%),_0_4px_12px_-4px_rgb(15_22_19/6%)] sm:p-8">
            <div
              aria-hidden
              className="absolute inset-x-10 top-0 h-40 rounded-full bg-[#e8f1ec] blur-3xl opacity-60"
            />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6b7a73]">
                  Signature nasal lineup
                </p>
                <h2 className="mt-3 max-w-sm font-serif text-3xl leading-[1] tracking-[-0.04em] text-[#0f1613] sm:text-[2.35rem]">
                  The nasal-first shelf, cleaned up to feel premium and direct.
                </h2>
              </div>
              <div className="rounded-full border border-[rgb(15_22_19/10%)] bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#5c6762] shadow-[0_1px_2px_rgb(15_22_19/4%)]">
                Lot-linked COAs
              </div>
            </div>

            <div className="relative mt-8 grid min-h-[340px] items-end gap-4 sm:min-h-[430px] sm:grid-cols-[0.9fr_1.2fr_0.9fr]">
              {HERO_PRODUCTS.map((product, index) => {
                const elevated = index === 1;
                return (
                  <div
                    key={product.id}
                    className={`relative rounded-[1.5rem] border border-[rgb(15_22_19/8%)] bg-white p-4 shadow-[0_22px_44px_-28px_rgb(15_22_19/18%)] ${
                      elevated ? "sm:-translate-y-6 ring-1 ring-[#1e6f58]/10" : ""
                    }`}
                  >
                    <div className="absolute inset-x-8 top-3 h-16 rounded-full bg-[#f0f5f2] blur-2xl" />
                    <div className="relative flex items-center justify-between text-[11px] text-[#6b7a73]">
                      <span className="font-mono uppercase tracking-[0.18em]">
                        {product.name.replace(" Nasal Spray", "")}
                      </span>
                      <span className="font-medium text-[#0f1613]">${product.price.toFixed(2)}</span>
                    </div>
                    <div className="relative mt-4 flex min-h-[220px] items-end justify-center sm:min-h-[260px]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={260}
                        height={320}
                        priority={elevated}
                        className={`h-auto w-auto object-contain ${
                          elevated ? "max-h-[260px] sm:max-h-[310px]" : "max-h-[220px] sm:max-h-[270px]"
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative mt-6 grid gap-3 sm:grid-cols-3">
              {PROOF_ITEMS.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-[1.25rem] border border-[rgb(15_22_19/8%)] bg-white px-4 py-4 shadow-[0_1px_2px_rgb(15_22_19/4%)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-full bg-[#f0f5f2] text-[#1e6f58]">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6b7a73]">
                        {label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-[#0f1613]">
                        {value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
