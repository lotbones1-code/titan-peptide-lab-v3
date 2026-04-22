import Link from "next/link";
import { ArrowRight, FlaskConical, ShieldCheck, Snowflake } from "lucide-react";
import { NASAL_SPRAYS } from "@/lib/products";
import { Reveal } from "./reveal";
import { CompoundPoster } from "./compound-poster";

const START_POINTS = [
  {
    id: "bpc157-spray",
    eyebrow: "Recovery",
    title: "BPC-157",
    note: "Repair-first merchandising for tissue recovery protocols.",
    tone: "bg-[#eef3ef] border-[#d9e6dc]",
  },
  {
    id: "selank-spray",
    eyebrow: "Calm + clarity",
    title: "Selank",
    note: "For steadier focus, softer stress load, and cleaner daily use cases.",
    tone: "bg-[#f3f3f0] border-[#e4e4dd]",
  },
  {
    id: "pt141-spray",
    eyebrow: "Intimacy",
    title: "PT-141",
    note: "The fastest entry point for desire-led protocol demand.",
    tone: "bg-[#f5f0f0] border-[#eadfdf]",
  },
  {
    id: "dsip-spray",
    eyebrow: "Sleep",
    title: "DSIP",
    note: "Nighttime and downshift support in a simpler nasal format.",
    tone: "bg-[#f4f1eb] border-[#e8dfd0]",
  },
];

const PROOF_CARDS = [
  {
    icon: ShieldCheck,
    label: "Lot-matched proof",
    note: "The order batch ties directly to the paperwork you review.",
  },
  {
    icon: FlaskConical,
    label: "Release threshold",
    note: "HPLC ≥99% is treated like a release gate, not soft marketing copy.",
  },
  {
    icon: Snowflake,
    label: "Cold-chain handling",
    note: "Temperature-sensitive orders are packed and dispatched fast.",
  },
];

function shortName(name: string) {
  return name.replace(" Nasal Spray", "");
}

function formatPrice(price: number) {
  return `$${price.toFixed(2)}`;
}

export function Hero() {
  const featured = NASAL_SPRAYS[0];
  const startPoints = START_POINTS.map((entry) => {
    const product = NASAL_SPRAYS.find((item) => item.id === entry.id);
    return product ? { ...entry, product } : null;
  }).filter(Boolean) as Array<(typeof START_POINTS)[number] & { product: (typeof NASAL_SPRAYS)[number] }>;

  return (
    <section className="border-b border-[rgba(10,10,10,0.07)] bg-[#f5f3ee]">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10 lg:py-10">
        <Reveal>
          <div className="rounded-[2rem] border border-[rgba(10,10,10,0.08)] bg-white p-5 shadow-[0_22px_70px_rgba(10,10,10,0.05)] lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.02fr)_430px] lg:items-start lg:gap-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(10,10,10,0.08)] bg-[#f7f6f1] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1a5c48]">
                  6 nasal sprays, merchandised by outcome
                </div>

                <h1 className="mt-5 max-w-[11ch] font-serif text-[clamp(2.7rem,7vw,6.35rem)] font-normal leading-[0.88] tracking-[-0.055em] text-[#0f1110]">
                  Recovery, cognition, intimacy, sleep.
                </h1>

                <p className="mt-5 max-w-[56ch] text-[15px] leading-[1.85] text-[#565b56]">
                  Titan is a tighter peptide catalog, six research-grade nasal sprays priced, packaged, and presented like real products, with assay standards and batch paperwork visible before payment.
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5 text-[11px] text-[#40463f]">
                  <span className="inline-flex items-center rounded-full border border-[rgba(10,10,10,0.08)] bg-white px-3 py-1.5">
                    From {featured ? formatPrice(featured.price) : "$59.99"}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-[rgba(10,10,10,0.08)] bg-white px-3 py-1.5">
                    15mL measured atomizers
                  </span>
                  <span className="hidden items-center rounded-full border border-[rgba(10,10,10,0.08)] bg-white px-3 py-1.5 lg:inline-flex">
                    No reconstitution
                  </span>
                  <span className="hidden items-center rounded-full border border-[rgba(10,10,10,0.08)] bg-white px-3 py-1.5 lg:inline-flex">
                    Certificate path shown pre-checkout
                  </span>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/products"
                    className="inline-flex h-11 items-center justify-center gap-2.5 rounded-full bg-[#0f1110] px-7 text-[12px] font-semibold uppercase tracking-[0.07em] text-white transition-colors hover:bg-[#1a5c48]"
                  >
                    Shop nasal sprays
                    <ArrowRight className="size-3.5" />
                  </Link>
                  <Link
                    href="/lab-testing"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-[rgba(10,10,10,0.1)] px-6 text-[12px] font-semibold uppercase tracking-[0.07em] text-[#0f1110] transition-colors hover:border-[#0f1110] hover:bg-[#f7f6f1]"
                  >
                    Review lab standard
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                {featured ? (
                  <div className="overflow-hidden rounded-[1.75rem] border border-[rgba(10,10,10,0.08)] bg-[#f8f6f0] p-4">
                    <CompoundPoster
                      product={featured}
                      variant="hero"
                      className="min-h-[350px] rounded-[1.3rem] border-0 shadow-none lg:min-h-[380px]"
                    />
                  </div>
                ) : null}

                <div className="rounded-[1.75rem] border border-[rgba(10,10,10,0.08)] bg-[#111614] p-5 text-white">
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8fd0b5]">
                        Flagship spray
                      </p>
                      <h2 className="mt-2 font-serif text-[1.8rem] leading-[1.02] tracking-[-0.04em] text-white">
                        {featured ? shortName(featured.name) : "BPC-157"}
                      </h2>
                      <p className="mt-2 text-[13px] leading-[1.7] text-white/70">
                        {featured?.tagline ?? "Measured nasal format with high-demand merchandising priority."}
                      </p>
                    </div>
                    <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                      {featured ? formatPrice(featured.price) : "$64.99"}
                    </span>
                  </div>

                  <dl className="mt-4 space-y-4 text-[12px] text-white/75">
                    {[
                      ["Format", featured?.size ?? "15mL nasal spray"],
                      ["Use case", "The cleanest first click for recovery-driven buyers"],
                      ["Proof", "COA path, assay threshold, and dispatch notes shown pre-checkout"],
                    ].map(([label, value]) => (
                      <div key={label} className="grid grid-cols-[82px_1fr] gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                        <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/40">
                          {label}
                        </dt>
                        <dd className="leading-[1.65] text-white">{value}</dd>
                      </div>
                    ))}
                  </dl>

                  {featured ? (
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href={`/products/${featured.slug}`}
                        className="inline-flex h-10 items-center justify-center rounded-full bg-white px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0f1110] transition-colors hover:bg-[#dce9e2]"
                      >
                        Shop flagship spray
                      </Link>
                      <Link
                        href="/research/bpc-157-nasal-spray"
                        className="inline-flex h-10 items-center justify-center rounded-full border border-white/12 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/6"
                      >
                        Read research
                      </Link>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {PROOF_CARDS.map(({ icon: Icon, label, note }) => (
                <div key={label} className="rounded-[1.25rem] border border-[rgba(10,10,10,0.07)] bg-[#faf9f5] p-4">
                  <Icon className="size-4 text-[#1a5c48]" />
                  <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#0f1110]">
                    {label}
                  </p>
                  <p className="mt-1.5 text-[12px] leading-[1.7] text-[#6a6f6a]">{note}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {startPoints.map(({ eyebrow, title, note, product, tone }) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className={`group rounded-[1.35rem] border p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(10,10,10,0.05)] ${tone}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1a5c48]">{eyebrow}</p>
                    <span className="text-[11px] font-semibold tabular-nums text-[#0f1110]">{formatPrice(product.price)}</span>
                  </div>
                  <h2 className="mt-4 font-serif text-[1.8rem] leading-none tracking-[-0.04em] text-[#0f1110]">
                    {title}
                  </h2>
                  <p className="mt-3 text-[12.5px] leading-[1.75] text-[#5f655f]">{note}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0f1110]">
                    Review compound
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
