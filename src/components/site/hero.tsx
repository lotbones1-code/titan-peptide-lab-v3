"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";
import { NumberTicker } from "@/components/ui/number-ticker";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowRight, ShieldCheck, FlaskConical, Truck } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      {/* Ambient gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(16,185,129,0.15), transparent 60%), radial-gradient(ellipse 60% 40% at 80% 30%, rgba(99,102,241,0.1), transparent 50%)",
        }}
      />
      {/* Grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="flex flex-col items-center text-center">
          <Badge
            variant="outline"
            className="mb-6 border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            New: PT-141 Nasal Spray in stock
          </Badge>

          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Research-grade peptides.{" "}
            <AuroraText className="font-semibold">No needles.</AuroraText>
            <br className="hidden md:block" />
            <span className="text-zinc-400">No guesswork.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-zinc-400 md:text-xl">
            Premium nasal spray peptides, HPLC-verified to ≥99% purity.
            Batch-matched COAs in every order. Discreet shipping. The clean way
            to run research protocols.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link href="#nasal-sprays">
              <ShimmerButton
                className="h-12 text-sm font-semibold"
                shimmerColor="#10b981"
                background="rgba(15, 159, 122, 1)"
              >
                <span className="flex items-center">
                  Shop Nasal Sprays
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </ShimmerButton>
            </Link>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="h-12 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
            >
              <Link href="#quality">See our quality standards</Link>
            </Button>
          </div>

          {/* Trust row */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>HPLC-verified ≥99%</span>
            </div>
            <div className="flex items-center gap-2">
              <FlaskConical className="h-4 w-4 text-emerald-400" />
              <span>Batch-matched COA</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-emerald-400" />
              <span>Free shipping over $150</span>
            </div>
          </div>
        </div>

        {/* Social proof card */}
        <div className="relative mx-auto mt-20 max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 md:p-10 backdrop-blur">
            <BorderBeam
              size={200}
              duration={12}
              colorFrom="#10b981"
              colorTo="#6366f1"
            />
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <Stat value={2147} suffix="+" label="Orders shipped" />
              <Stat value={99.2} suffix="%" label="Avg HPLC purity" />
              <Stat value={4.9} suffix="/5" label="Verified reviews" decimals={1} />
              <Stat value={48} suffix="h" label="Ship time" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  suffix,
  label,
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-baseline gap-0.5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
        <NumberTicker value={value} decimalPlaces={decimals} />
        {suffix && <span>{suffix}</span>}
      </div>
      <div className="mt-1 text-xs font-medium uppercase tracking-widest text-zinc-500">
        {label}
      </div>
    </div>
  );
}
