import Link from "next/link";
import { ArrowRight, FlaskConical, ShieldCheck, Snowflake } from "lucide-react";
import { NASAL_SPRAYS } from "@/lib/products";
import { Reveal } from "./reveal";
import { Marquee } from "@/components/ui/marquee";
import { CompoundPoster } from "./compound-poster";

const TAPE_ITEMS = [
  { text: "C\u2083\u2085H\u2086\u2080N\u2081\u2082O\u2086S\u2082", dim: false },
  { text: "BPC-157", dim: true },
  { text: "C\u2083\u2083H\u2085\u2087N\u2081\u2081O\u2089", dim: false },
  { text: "Selank", dim: true },
  { text: "HPLC \u226599%", dim: false },
  { text: "C\u2083\u2087H\u2085\u2081N\u2089O\u2081\u2080S", dim: false },
  { text: "Semax", dim: true },
  { text: "Mass-spec verified", dim: false },
  { text: "C\u2085\u2080H\u2086\u2088N\u2081\u2084O\u2081\u2080", dim: false },
  { text: "PT-141", dim: true },
  { text: "Lot-matched COA", dim: false },
  { text: "C\u2084\u2083H\u2086\u2086N\u2081\u2082O\u2081\u2082S\u2082", dim: false },
  { text: "Oxytocin", dim: true },
  { text: "Cold-chain dispatch", dim: false },
  { text: "C\u2083\u2085H\u2084\u2088N\u2081\u2080O\u2081\u2085", dim: false },
  { text: "DSIP", dim: true },
  { text: "\u226524h dispatch", dim: false },
];

const START_POINTS = [
  {
    id: "bpc157-spray",
    eyebrow: "Recovery",
    title: "Start with BPC-157",
    note: "The flagship repair-oriented spray in the catalog.",
  },
  {
    id: "selank-spray",
    eyebrow: "Calm + clarity",
    title: "Selank for steadier focus",
    note: "A clearer entry point for anxiolytic nootropic protocols.",
  },
  {
    id: "pt141-spray",
    eyebrow: "Arousal research",
    title: "PT-141 for faster intent",
    note: "A simpler way into the intimacy-focused side of the catalog.",
  },
  {
    id: "dsip-spray",
    eyebrow: "Sleep architecture",
    title: "DSIP for recovery-state work",
    note: "Built for labs prioritizing nighttime and downshift categories.",
  },
];

function shortName(name: string) {
  return name.replace(" Nasal Spray", "");
}

function formatPrice(cents: number) {
  return `$${cents.toFixed(2)}`;
}

export function Hero() {
  const featured = NASAL_SPRAYS[0];
  const startPoints = START_POINTS.map((entry) => {
    const product = NASAL_SPRAYS.find((item) => item.id === entry.id);
    return product ? { ...entry, product } : null;
  }).filter(Boolean) as Array<(typeof START_POINTS)[number] & { product: (typeof NASAL_SPRAYS)[number] }>;

  return (
    <section className="relative bg-white">
      <div className="border-b border-[rgba(10,10,10,0.07)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center justify-between py-3.5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b0b0b0]">
              Research-grade peptide formulations
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b0b0b0] sm:block">
              HPLC ≥ 99% · Lot-matched COA · Cold-chain
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-b border-[rgba(10,10,10,0.06)]">
        <Marquee className="[--duration:52s] [--gap:2.5rem] px-0 py-2" repeat={3}>
          {TAPE_ITEMS.map((item, i) => (
            <span key={`${item.text}-${i}`} className="flex items-center gap-2.5 whitespace-nowrap">
              <span
                className="font-mono text-[9.5px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: item.dim ? "#c2c2c2" : "#6e8c7e" }}
              >
                {item.text}
              </span>
              <span className="size-0.5 rounded-full bg-[rgba(10,10,10,0.12)]" />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="grid gap-10 border-b border-[rgba(10,10,10,0.07)] py-16 lg:grid-cols-[minmax(0,1.02fr)_460px] lg:items-start lg:py-20">
            <div>
              <div className="inline-flex items-center gap-2 border border-[rgba(10,10,10,0.08)] bg-[#f7f7f5] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1a5c48]">
                Titan Peptide Lab · 6 nasal sprays in stock
              </div>
              <h1 className="mt-6 font-serif text-[clamp(3.25rem,8vw,7.5rem)] font-normal leading-[0.88] tracking-[-0.05em] text-[#0a0a0a]">
                Recovery, calm,
                <br />
                cognition, libido, sleep.
              </h1>
              <p className="mt-7 max-w-xl text-[15px] leading-[1.9] text-[#525252]">
                Titan leads with the formats people actually want to order, then backs each spray with assay standards, lot-matched paperwork, and cold-chain dispatch before checkout.
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {[
                  `From ${featured ? formatPrice(featured.price) : "$59.99"}`,
                  "15mL measured atomizers",
                  "No reconstitution",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-[rgba(10,10,10,0.08)] px-3 py-1.5 text-[11px] font-medium text-[#3f4a45]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/products"
                  className="inline-flex h-11 items-center justify-center gap-2.5 bg-[#0a0a0a] px-7 text-[12px] font-semibold uppercase tracking-[0.07em] text-white transition-colors hover:bg-[#1a5c48]"
                >
                  Shop 6 nasal sprays
                  <ArrowRight className="size-3.5" />
                </Link>
                <Link
                  href="/lab-testing"
                  className="inline-flex h-11 items-center justify-center border border-[rgba(10,10,10,0.1)] px-6 text-[12px] font-semibold uppercase tracking-[0.07em] text-[#0a0a0a] transition-colors hover:border-[#0a0a0a] hover:bg-[#f7f7f5]"
                >
                  Review release standard
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    icon: ShieldCheck,
                    label: "Lot-matched proof",
                    note: "Certificate fields tied to the batch on your order.",
                  },
                  {
                    icon: FlaskConical,
                    label: "HPLC ≥ 99%",
                    note: "Purity threshold treated as release criteria, not marketing copy.",
                  },
                  {
                    icon: Snowflake,
                    label: "Cold-chain within 24h",
                    note: "Temperature-sensitive orders packed and dispatched fast.",
                  },
                ].map(({ icon: Icon, label, note }) => (
                  <div key={label} className="border border-[rgba(10,10,10,0.07)] bg-[#fafaf9] p-4">
                    <Icon className="size-4 text-[#1a5c48]" />
                    <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#0a0a0a]">
                      {label}
                    </p>
                    <p className="mt-1.5 text-[12px] leading-[1.7] text-[#737373]">{note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {startPoints.map(({ eyebrow, title, note, product }) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="group rounded-[1.25rem] border border-[rgba(10,10,10,0.08)] bg-[#fafaf9] p-4 transition-colors hover:border-[#1a5c48]/30 hover:bg-white"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1a5c48]">
                      {eyebrow}
                    </p>
                    <div className="mt-3 flex items-start justify-between gap-3">
                      <div>
                        <h2 className="text-[1.1rem] font-semibold leading-[1.1] tracking-[-0.03em] text-[#0a0a0a]">
                          {title}
                        </h2>
                        <p className="mt-2 text-[12px] leading-[1.7] text-[#666]">{note}</p>
                      </div>
                      <span className="shrink-0 text-[11px] font-semibold tabular-nums text-[#0a0a0a]">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {featured ? (
                <div className="overflow-hidden border border-[rgba(10,10,10,0.08)] bg-white">
                  <CompoundPoster
                    product={featured}
                    variant="hero"
                    className="min-h-[340px] rounded-none border-0 shadow-none"
                  />
                </div>
              ) : null}
              <div className="border border-[rgba(10,10,10,0.08)] bg-[#f7f7f5] p-5">
                <div className="flex items-start justify-between gap-4 border-b border-[rgba(10,10,10,0.08)] pb-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1a5c48]">
                      Flagship spray
                    </p>
                    <h2 className="mt-2 font-serif text-[1.6rem] leading-[1.02] tracking-[-0.04em] text-[#0a0a0a]">
                      {featured ? shortName(featured.name) : "BPC-157"}
                    </h2>
                    <p className="mt-2 text-[13px] leading-[1.7] text-[#5a5a5a]">
                      {featured?.tagline ?? "Measured nasal format with high-demand merchandising priority."}
                    </p>
                  </div>
                  <span className="border border-[rgba(10,10,10,0.08)] bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0a0a0a]">
                    {featured ? formatPrice(featured.price) : "$64.99"}
                  </span>
                </div>
                <dl className="mt-4 space-y-4 text-[12px] text-[#525252]">
                  {[
                    ["Format", featured?.size ?? "15mL nasal spray"],
                    ["Why it leads", "Fastest path into the catalog for recovery-focused buyers"],
                    ["Proof path", "Lot-matched COA, assay threshold, and cold-chain release notes"],
                  ].map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[92px_1fr] gap-3 border-b border-[rgba(10,10,10,0.06)] pb-4 last:border-0 last:pb-0">
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#a3a3a3]">
                        {label}
                      </dt>
                      <dd className="leading-[1.6] text-[#0a0a0a]">{value}</dd>
                    </div>
                  ))}
                </dl>
                {featured ? (
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={`/products/${featured.slug}`}
                      className="inline-flex h-10 items-center justify-center bg-[#0a0a0a] px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#1a5c48]"
                    >
                      Shop flagship spray
                    </Link>
                    <Link
                      href="/research/bpc-157-nasal-spray"
                      className="inline-flex h-10 items-center justify-center border border-[rgba(10,10,10,0.1)] px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0a0a0a] transition-colors hover:border-[#0a0a0a] hover:bg-white"
                    >
                      Read research
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
