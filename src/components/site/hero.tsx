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
    <section className="relative overflow-hidden border-b border-[#dbe2d8] bg-[linear-gradient(180deg,#fbf8f2_0%,#f6f0e7_62%,#edf3ed_100%)]">
      <div
        aria-hidden
        className="absolute left-[-10rem] top-[-6rem] h-[28rem] w-[28rem] rounded-full bg-[#dce9d9] blur-3xl"
      />
      <div
        aria-hidden
        className="absolute right-[-8rem] top-[8rem] h-[24rem] w-[24rem] rounded-full bg-[#efe2cf] blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-18 pt-14 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)] lg:px-8 lg:pb-24 lg:pt-20">
        <Reveal className="relative z-10 flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#d4ddd3] bg-white/80 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#5a6861] shadow-sm">
            Nasal sprays, batch-linked proof, fast dispatch
          </div>

          <h1 className="mt-7 max-w-4xl font-serif text-[clamp(3.4rem,7vw,6.8rem)] font-normal leading-[0.92] tracking-[-0.05em] text-[#13211c]">
            Clean formulation,
            <br />
            clear <em className="text-[#2d7b62] not-italic">proof</em>,
            zero guesswork.
          </h1>

          <p className="mt-7 max-w-2xl text-[1.05rem] leading-8 text-[#55655e] sm:text-[1.125rem]">
            Titan is built around the easiest entry point in the catalog,
            nasal spray peptides with documented purity, matched certificates,
            and a checkout flow that feels direct instead of sketchy.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#33423b]">
            <div className="rounded-full border border-[#d4ddd3] bg-white/72 px-4 py-2 shadow-sm">
              4 flagship nasal SKUs
            </div>
            <div className="rounded-full border border-[#d4ddd3] bg-white/72 px-4 py-2 shadow-sm">
              First order code: FIRST10
            </div>
            <div className="rounded-full border border-[#d4ddd3] bg-white/72 px-4 py-2 shadow-sm">
              Ships in 24h after payment
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-12 rounded-full bg-[#1e6f58] px-6 text-[#f8fbf8] hover:bg-[#175946]"
            >
              <Link href="#products">
                Shop Nasal Sprays
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-[#cdd8ce] bg-white/75 px-6 text-[#24332c] hover:border-[#2d7b62]/40 hover:bg-white"
            >
              <Link href="/research/bpc-157-nasal-spray">Read Research</Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="relative z-10">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#d8dfd8] bg-[linear-gradient(180deg,rgba(255,253,249,0.98)_0%,rgba(247,244,238,0.96)_100%)] p-6 shadow-[0_30px_80px_-40px_rgba(19,33,28,0.35)] sm:p-8">
            <div
              aria-hidden
              className="absolute inset-x-10 top-0 h-40 rounded-full bg-[#dbeadf] blur-3xl"
            />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#708078]">
                  Signature nasal lineup
                </p>
                <h2 className="mt-3 max-w-sm font-serif text-3xl leading-[1] tracking-[-0.04em] text-[#13211c] sm:text-[2.35rem]">
                  Built to look premium before the checkout even starts.
                </h2>
              </div>
              <div className="rounded-full border border-[#d4ddd3] bg-white/85 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#5b6a63] shadow-sm">
                Lot-linked COAs
              </div>
            </div>

            <div className="relative mt-8 grid min-h-[340px] items-end gap-4 sm:min-h-[430px] sm:grid-cols-[0.9fr_1.2fr_0.9fr]">
              {HERO_PRODUCTS.map((product, index) => {
                const elevated = index === 1;
                return (
                  <div
                    key={product.id}
                    className={`relative rounded-[1.5rem] border border-[#dbe2d9] bg-[linear-gradient(180deg,#ffffff_0%,#f3f0ea_100%)] p-4 shadow-[0_22px_44px_-28px_rgba(19,33,28,0.3)] ${
                      elevated ? "sm:-translate-y-6" : ""
                    }`}
                  >
                    <div className="absolute inset-x-8 top-3 h-16 rounded-full bg-[#e6efe3] blur-2xl" />
                    <div className="relative flex items-center justify-between text-[11px] text-[#6a7871]">
                      <span className="font-mono uppercase tracking-[0.18em]">
                        {product.name.replace(" Nasal Spray", "")}
                      </span>
                      <span>${product.price.toFixed(2)}</span>
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
                  className="rounded-[1.25rem] border border-[#d5ddd3] bg-white/82 px-4 py-4 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-full bg-[#edf4ef] text-[#2d7b62]">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#74837b]">
                        {label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-[#1b2b24]">
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
