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

// Molecular formulas matched to product IDs
const FORMULAS: Record<string, string> = {
  "bpc157-spray": "C\u2083\u2085H\u2086\u2080N\u2081\u2082O\u2086S\u2082",
  "selank-spray": "C\u2083\u2083H\u2085\u2087N\u2081\u2081O\u2089",
  "oxytocin-spray": "C\u2084\u2083H\u2086\u2086N\u2081\u2082O\u2081\u2082S\u2082",
  "pt141-spray": "C\u2085\u2080H\u2086\u2088N\u2081\u2084O\u2081\u2080",
  "semax-spray": "C\u2083\u2087H\u2085\u2081N\u2089O\u2081\u2080S",
  "dsip-spray": "C\u2083\u2085H\u2084\u2088N\u2081\u2080O\u2081\u2085",
};

function shortName(name: string) {
  return name.replace(" Nasal Spray", "");
}

function formatPrice(cents: number) {
  return `$${cents.toFixed(2)}`;
}

export function Hero() {
  const featured = NASAL_SPRAYS[0];

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
          <div className="grid gap-10 border-b border-[rgba(10,10,10,0.07)] py-16 lg:grid-cols-[minmax(0,1.05fr)_420px] lg:items-start lg:py-20">
            <div>
              <div className="inline-flex items-center gap-2 border border-[rgba(10,10,10,0.08)] bg-[#f7f7f5] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1a5c48]">
                Batch-specific COA with every order
              </div>
              <h1 className="mt-6 font-serif text-[clamp(3.25rem,8vw,7.5rem)] font-normal leading-[0.88] tracking-[-0.05em] text-[#0a0a0a]">
                Peptide supply,
                <br />
                <em className="not-italic text-[#1a5c48]">built on proof, not hype.</em>
              </h1>
              <p className="mt-7 max-w-xl text-[15px] leading-[1.9] text-[#525252]">
                Six nasal sprays, each released against assay standards, logged for cold-chain dispatch, and paired with batch paperwork that matches the order in your hands.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/products"
                  className="inline-flex h-11 items-center justify-center gap-2.5 bg-[#0a0a0a] px-7 text-[12px] font-semibold uppercase tracking-[0.07em] text-white transition-colors hover:bg-[#1a5c48]"
                >
                  Shop nasal sprays
                  <ArrowRight className="size-3.5" />
                </Link>
                <Link
                  href="/lab-testing"
                  className="inline-flex h-11 items-center justify-center border border-[rgba(10,10,10,0.1)] px-6 text-[12px] font-semibold uppercase tracking-[0.07em] text-[#0a0a0a] transition-colors hover:border-[#0a0a0a] hover:bg-[#f7f7f5]"
                >
                  View lab results
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
                      COA packet
                    </p>
                    <h2 className="mt-2 font-serif text-[1.6rem] leading-[1.02] tracking-[-0.04em] text-[#0a0a0a]">
                      What ships with every order
                    </h2>
                  </div>
                  <span className="border border-[rgba(10,10,10,0.08)] bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0a0a0a]">
                    Included
                  </span>
                </div>
                <dl className="mt-4 space-y-4 text-[12px] text-[#525252]">
                  {[
                    ["Lot number", "Matched to the batch on your order"],
                    ["Purity result", "Recorded against release threshold"],
                    ["Method date", "Attached to the assay record"],
                    ["Analyst initials", "Visible on the QA document"],
                    ["QR lookup", "Fast access to reference paperwork"],
                  ].map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[92px_1fr] gap-3 border-b border-[rgba(10,10,10,0.06)] pb-4 last:border-0 last:pb-0">
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#a3a3a3]">
                        {label}
                      </dt>
                      <dd className="leading-[1.6] text-[#0a0a0a]">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="border-b border-[rgba(10,10,10,0.07)]">
          {NASAL_SPRAYS.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.05}>
              <Link
                href={`/products/${product.slug}`}
                className="group flex flex-col gap-2 border-b border-[rgba(10,10,10,0.06)] py-4 transition-colors last:border-0 hover:bg-[#fafaf9] sm:grid sm:grid-cols-[1fr_auto_auto_auto] sm:items-center sm:gap-8 sm:py-5"
              >
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="w-6 shrink-0 text-[10px] font-semibold tabular-nums text-[#d0d0d0]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className="text-[1.25rem] font-semibold leading-none tracking-[-0.03em] text-[#0a0a0a] transition-colors group-hover:text-[#1a5c48] sm:text-[1.5rem]">
                      {shortName(product.name)}
                    </span>
                    <span className="mt-1 block font-mono text-[11px] text-[#8f8f8f] tracking-[0.08em]">
                      {FORMULAS[product.id] ?? ""}
                    </span>
                  </div>
                </div>

                <span className="hidden text-[12px] text-[#a3a3a3] sm:block">{product.size}</span>

                <span className="self-end text-[15px] font-semibold tabular-nums text-[#0a0a0a] sm:self-auto">
                  {formatPrice(product.price)}
                </span>

                <span className="inline-flex h-9 items-center justify-center self-start bg-[#0a0a0a] px-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-white transition-all group-hover:bg-[#1a5c48] sm:self-auto">
                  View spray
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.32}>
          <div className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/products"
              className="inline-flex h-11 items-center gap-2.5 bg-[#0a0a0a] px-7 text-[12px] font-semibold uppercase tracking-[0.07em] text-white transition-colors hover:bg-[#1a5c48]"
            >
              View full catalog
              <ArrowRight className="size-3.5" />
            </Link>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {[
                "HPLC \u2265 99% purity",
                "24h cold-chain dispatch",
                "Lot-matched COA every order",
              ].map((item) => (
                <span key={item} className="text-[11px] font-medium text-[#6f6f6f]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
