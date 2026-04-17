import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative border-b border-white/8">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 lg:pt-28 lg:pb-32">
        {/* Eyebrow */}
        <div className="mb-12 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
          <span className="h-px w-8 bg-zinc-700" />
          <span>Issue 04 — Spring 2026</span>
          <span aria-hidden>·</span>
          <span>Titan Peptide Laboratory</span>
        </div>

        {/* Editorial 2-column. Headline left, spec column right. */}
        <div className="grid gap-x-12 gap-y-16 lg:grid-cols-12">
          {/* Headline column */}
          <div className="lg:col-span-8">
            <h1 className="font-serif text-[clamp(3rem,8vw,7.5rem)] font-normal leading-[0.92] tracking-[-0.02em] text-zinc-50 text-pretty">
              Peptides,
              <br />
              measured by{" "}
              <em className="text-[var(--signature)] not-italic">
                milligram
              </em>
              ,<br />
              shipped by{" "}
              <em className="font-serif italic text-zinc-300">batch</em>.
            </h1>

            <p className="mt-10 max-w-xl text-base leading-[1.7] text-zinc-400">
              Every order ships with the HPLC chromatogram from{" "}
              <span className="text-zinc-200">its own batch</span> — not a
              representative one. Read the certificate, then read the spray.
              That&rsquo;s the whole pitch.
            </p>

            <div className="mt-10 flex items-center gap-6">
              <Link
                href="#nasal-sprays"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--signature)] px-6 py-3 text-sm font-medium text-[var(--signature-foreground)] transition-colors hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signature)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Browse the catalog
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="#quality"
                className="text-sm text-zinc-400 underline decoration-zinc-700 underline-offset-[6px] transition-colors hover:text-zinc-100 hover:decoration-zinc-400 focus-visible:outline-none focus-visible:text-zinc-100"
              >
                How we test
              </Link>
            </div>
          </div>

          {/* Spec column — replaces fake stats card */}
          <aside className="lg:col-span-4 lg:pt-4">
            <div className="border-t border-zinc-800 pt-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                Currently in stock
              </div>
              <ul className="mt-5 space-y-4 text-sm">
                <SpecRow name="BPC-157 nasal" lot="TPL-2604-A" purity="99.4%" />
                <SpecRow name="Selank nasal" lot="TPL-2604-B" purity="99.1%" />
                <SpecRow name="Semax nasal" lot="TPL-2604-C" purity="99.3%" />
                <SpecRow name="PT-141 nasal" lot="TPL-2604-D" purity="98.9%" />
              </ul>
              <div className="mt-6 border-t border-zinc-800 pt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                <span className="text-[var(--signature)]">●</span> Ships within
                48 hours · Cold chain available
              </div>
            </div>
          </aside>
        </div>

        {/* Wide editorial image — proof element */}
        <figure className="mt-24 overflow-hidden border border-white/8">
          <div className="relative aspect-[16/7] w-full bg-zinc-900">
            <Image
              src="/products/bpc157-spray.png"
              alt="BPC-157 nasal spray bottle, batch TPL-2604-A, photographed on neutral seamless"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between bg-gradient-to-t from-black/60 to-transparent p-6 md:p-8">
              <figcaption className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-300">
                Plate 01 — BPC-157, 30 mg / 15 mL, atomizer head
              </figcaption>
              <div className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400 md:block">
                Batch TPL-2604-A · HPLC 99.4%
              </div>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}

function SpecRow({
  name,
  lot,
  purity,
}: {
  name: string;
  lot: string;
  purity: string;
}) {
  return (
    <li className="grid grid-cols-[1fr_auto] items-baseline gap-3 border-b border-zinc-900 pb-3">
      <div>
        <div className="text-zinc-100">{name}</div>
        <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
          Lot {lot}
        </div>
      </div>
      <div className="font-mono text-xs tabular-nums text-[var(--signature)]">
        {purity}
      </div>
    </li>
  );
}
