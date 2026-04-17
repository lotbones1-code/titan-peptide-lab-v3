import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";

// Per-product accent surface — breaks the "every card identical" template smell.
// Keys to product.id; falls back to neutral graphite.
const ACCENT: Record<
  string,
  { surface: string; ink: string; tone: string }
> = {
  "bpc157-spray": {
    surface: "bg-[oklch(0.32_0.06_180)]",
    ink: "text-[oklch(0.92_0.04_180)]",
    tone: "Recovery",
  },
  "selank-spray": {
    surface: "bg-[oklch(0.30_0.08_270)]",
    ink: "text-[oklch(0.90_0.06_270)]",
    tone: "Calm",
  },
  "semax-spray": {
    surface: "bg-[oklch(0.34_0.10_55)]",
    ink: "text-[oklch(0.92_0.06_55)]",
    tone: "Cognition",
  },
  "pt141-spray": {
    surface: "bg-[oklch(0.32_0.10_15)]",
    ink: "text-[oklch(0.93_0.06_15)]",
    tone: "Arousal",
  },
  "selank-semax-stack": {
    surface: "bg-[oklch(0.28_0.06_310)]",
    ink: "text-[oklch(0.90_0.05_310)]",
    tone: "Stack",
  },
  "bpc157-vial": {
    surface: "bg-[oklch(0.26_0.05_180)]",
    ink: "text-[oklch(0.88_0.04_180)]",
    tone: "Recovery · Injectable",
  },
  "tb500-vial": {
    surface: "bg-[oklch(0.28_0.05_220)]",
    ink: "text-[oklch(0.90_0.04_220)]",
    tone: "Regeneration",
  },
  "cjc-ipa": {
    surface: "bg-[oklch(0.26_0.06_140)]",
    ink: "text-[oklch(0.88_0.05_140)]",
    tone: "GH Axis",
  },
  retatrutide: {
    surface: "bg-[oklch(0.28_0.08_35)]",
    ink: "text-[oklch(0.92_0.06_35)]",
    tone: "Metabolic · New",
  },
};

const NEUTRAL = {
  surface: "bg-[oklch(0.22_0_0)]",
  ink: "text-zinc-400",
  tone: "Research",
};

export function ProductCard({ product }: { product: Product }) {
  const accent = ACCENT[product.id] ?? NEUTRAL;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block focus-visible:outline-none"
      aria-label={`View ${product.name}`}
    >
      <article className="flex flex-col">
        {/* Product surface — each gets its own color */}
        <div
          className={`relative aspect-[4/5] overflow-hidden ${accent.surface} transition-[filter] duration-500 group-hover:brightness-110 group-focus-visible:ring-2 group-focus-visible:ring-[var(--signature)] group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-background`}
        >
          {/* Tone label, hand-set in mono */}
          <div
            className={`absolute left-5 top-5 z-10 font-mono text-[10px] uppercase tracking-[0.18em] ${accent.ink} opacity-80`}
          >
            {accent.tone}
          </div>

          {/* Discount tag — only when real */}
          {product.compareAtPrice && (
            <div className="absolute right-5 top-5 z-10 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-50">
              −
              {Math.round(
                ((product.compareAtPrice - product.price) /
                  product.compareAtPrice) *
                  100
              )}
              %
            </div>
          )}

          {/* Product photo, mid-card so it floats */}
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-contain object-center p-10 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          {/* Hairline footer with batch indicator */}
          <div
            className={`absolute bottom-0 left-0 right-0 flex items-end justify-between border-t border-white/10 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] ${accent.ink} opacity-70`}
          >
            <span>{product.size.split("·")[0].trim()}</span>
            <span>HPLC ≥99%</span>
          </div>
        </div>

        {/* Caption block — editorial, not card */}
        <div className="mt-5 flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="font-serif text-2xl leading-[1.1] tracking-[-0.01em] text-zinc-50">
              {product.name.replace(/ Nasal Spray$/i, "")}
            </h3>
            <p className="mt-1 text-sm text-zinc-400">{product.tagline}.</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-baseline gap-1.5 font-mono text-sm tabular-nums text-zinc-50">
              <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                $
              </span>
              {product.price.toFixed(2)}
            </div>
            <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--signature)]" />
          </div>
        </div>
      </article>
    </Link>
  );
}
