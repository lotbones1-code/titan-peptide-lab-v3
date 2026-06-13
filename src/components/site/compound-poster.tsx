import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";
import { LOT_CODES as SHARED_LOT_CODES } from "@/lib/lots";

const THEMES: Record<
  string,
  { wash: string; line: string; ink: string; chip: string; dark: string }
> = {
  "bpc157-spray": {
    wash: "#DEE9E2",
    line: "#6F8E7B",
    ink: "#183026",
    chip: "#EEF4F0",
    dark: "#1a3d2e",
  },
  "selank-spray": {
    wash: "#E2E7F3",
    line: "#7288B5",
    ink: "#1D2942",
    chip: "#F0F3F9",
    dark: "#1d2942",
  },
  "semax-spray": {
    wash: "#EFE3C8",
    line: "#C79A47",
    ink: "#4A3512",
    chip: "#FBF4E8",
    dark: "#3d2c0e",
  },
  "pt141-spray": {
    wash: "#ECD8E2",
    line: "#9F6A7F",
    ink: "#44212F",
    chip: "#F8EFF3",
    dark: "#3d1c28",
  },
  "oxytocin-spray": {
    wash: "#F0DDD6",
    line: "#D27D69",
    ink: "#49281E",
    chip: "#FBF1EE",
    dark: "#3d1e14",
  },
  "dsip-spray": {
    wash: "#E0E5F2",
    line: "#6876A6",
    ink: "#202A45",
    chip: "#F0F3FA",
    dark: "#1a2238",
  },
  "selank-semax-stack": {
    wash: "#E6E9F0",
    line: "#8892B4",
    ink: "#222B3C",
    chip: "#F3F5F9",
    dark: "#1c2333",
  },
};

const LOT_CODES = SHARED_LOT_CODES;

function shortName(name: string) {
  return name
    .replace(" Nasal Spray", "")
    .replace(" + ", " \u00d7 ")
    .replace(/-/g, "\u2011");
}

function formatLabel(category: Product["category"]) {
  if (category === "nasal-spray") return "Nasal spray";
  if (category === "injectable") return "Injectable";
  if (category === "stack") return "Stack";
  return "Research";
}

function precisionDescriptor(category: Product["category"]) {
  if (category === "stack") return "Two-compound protocol";
  return `Precision ${formatLabel(category).toLowerCase()}`;
}

export function CompoundPoster({
  product,
  variant = "card",
  className,
}: {
  product: Pick<Product, "id" | "name" | "size" | "category">;
  variant?: "hero" | "card" | "feature" | "detail";
  className?: string;
}) {
  const theme = THEMES[product.id] ?? THEMES["bpc157-spray"];
  const name = shortName(product.name);
  const lot = LOT_CODES[product.id] ?? "TPL-2604-A";

  // ── Detail variant: full specimen label ──────────────────────────────────
  if (variant === "detail") {
    return (
      <div
        className={cn(
          "group relative flex flex-col overflow-hidden rounded-2xl border border-[rgb(15_22_19/10%)]",
          className
        )}
        style={{ background: theme.chip }}
      >
        {/* Top stripe */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ background: theme.dark }}
        >
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/50">
              Titan Peptide Lab
            </p>
            <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80">
              {formatLabel(product.category)}
            </p>
          </div>
          <span
            className="rounded border border-white/20 px-2 py-0.5 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-white/70"
          >
            Verified
          </span>
        </div>

        {/* Compound name — centrepiece */}
        <div className="relative flex flex-1 items-center justify-center overflow-hidden px-8 py-12">
          {/* ghost watermark */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center font-semibold leading-none tracking-[-0.07em] opacity-[0.06]"
            style={{
              color: theme.ink,
              fontSize: "clamp(5rem, 16vw, 11rem)",
            }}
          >
            {name}
          </span>
          <div className="relative text-center">
            <h2
              className="font-semibold leading-[0.88] tracking-[-0.05em]"
              style={{
                color: theme.ink,
                fontSize: "clamp(3.6rem, 7vw, 6rem)",
              }}
            >
              {name}
            </h2>
            <p
              className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: theme.line }}
            >
              Precision {formatLabel(product.category).toLowerCase()}
            </p>
          </div>
        </div>

        {/* Specimen data grid */}
        <div
          className="grid grid-cols-3 border-t"
          style={{ borderColor: `${theme.line}22` }}
        >
          {[
            { label: "Purity", value: "≥99.0%" },
            { label: "Volume", value: product.size.split("·")[0].trim() },
            { label: "Lot", value: lot },
          ].map(({ label, value }, i) => (
            <div
              key={label}
              className="px-4 py-3"
              style={i > 0 ? { borderLeft: `1px solid ${theme.line}22` } : undefined}
            >
              <p
                className="text-[9px] font-semibold uppercase tracking-[0.16em]"
                style={{ color: theme.line }}
              >
                {label}
              </p>
              <p
                className="mt-1 text-[12px] font-semibold tabular-nums"
                style={{ color: theme.ink }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Accent bar */}
        <div className="h-1 w-full" style={{ background: theme.line }} />
      </div>
    );
  }

  // ── Standard variants (hero, card, feature) ──────────────────────────────
  const titleClass =
    variant === "feature"
      ? "text-[clamp(3.2rem,5.5vw,5.2rem)]"
      : variant === "hero"
        ? "text-[clamp(2rem,3.5vw,2.8rem)]"
        : "text-[clamp(1.8rem,3vw,2.4rem)]";

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[1.4rem] border border-[rgb(15_22_19/8%)] bg-white shadow-[0_1px_2px_rgb(15_22_19/4%),_0_20px_48px_-36px_rgb(15_22_19/18%)]",
        className
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${theme.wash} 0%, #ffffff 42%, ${theme.chip} 100%)`,
        }}
      />

      <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
              Titan Peptide
            </p>
            <p className="mt-1.5 text-[10px] uppercase tracking-[0.14em] text-[#b0b8b4]">
              {formatLabel(product.category)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="rounded-full border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.1em]"
              style={{
                borderColor: `${theme.line}24`,
                color: theme.ink,
                background: "rgba(255,255,255,0.75)",
              }}
            >
              Lot {lot.slice(-4)}
            </span>
            <span
              className="rounded-full border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.1em]"
              style={{
                borderColor: `${theme.line}20`,
                color: theme.ink,
                background: theme.chip,
              }}
            >
              Verified
            </span>
          </div>
        </div>

        <div className="mt-8 rounded-[1.15rem] border border-white/70 bg-white/80 p-5 shadow-[0_1px_2px_rgb(15_22_19/4%),_0_18px_36px_-30px_rgb(15_22_19/18%)] backdrop-blur">
          <div className="flex items-start justify-between gap-4">
            <div className="max-w-[78%]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a9690]">
                {product.category === "stack" ? "Research stack" : "Primary compound"}
              </p>
              <h3
                className={cn(
                  "mt-3 font-semibold tracking-[-0.05em] text-[#0f1613]",
                  titleClass
                )}
              >
                {name}
              </h3>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                {precisionDescriptor(product.category)}
              </p>
            </div>
            <span
              className="shrink-0 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em]"
              style={{
                color: theme.ink,
                background: theme.chip,
              }}
            >
              {product.size}
            </span>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-[rgb(15_22_19/6%)] pt-4">
            {[
              { label: "Purity", value: "≥99%" },
              { label: "Format", value: formatLabel(product.category) },
              { label: "Release", value: "Lot sheet" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#9aa6a0]">
                  {label}
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0f1613]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-3 border-t border-[rgb(15_22_19/6%)] pt-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#636b67]">
            Lot release sheet
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#636b67]">
            Crypto checkout
          </span>
        </div>
      </div>
    </div>
  );
}
