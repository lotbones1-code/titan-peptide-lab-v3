import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

const THEMES: Record<
  string,
  { wash: string; line: string; ink: string; chip: string }
> = {
  "bpc157-spray": {
    wash: "#DEE9E2",
    line: "#6F8E7B",
    ink: "#183026",
    chip: "#EEF4F0",
  },
  "selank-spray": {
    wash: "#E2E7F3",
    line: "#7288B5",
    ink: "#1D2942",
    chip: "#F0F3F9",
  },
  "semax-spray": {
    wash: "#EFE3C8",
    line: "#C79A47",
    ink: "#4A3512",
    chip: "#FBF4E8",
  },
  "pt141-spray": {
    wash: "#ECD8E2",
    line: "#9F6A7F",
    ink: "#44212F",
    chip: "#F8EFF3",
  },
  "oxytocin-spray": {
    wash: "#F0DDD6",
    line: "#D27D69",
    ink: "#49281E",
    chip: "#FBF1EE",
  },
  "dsip-spray": {
    wash: "#E0E5F2",
    line: "#6876A6",
    ink: "#202A45",
    chip: "#F0F3FA",
  },
  "selank-semax-stack": {
    wash: "#E6E9F0",
    line: "#8892B4",
    ink: "#222B3C",
    chip: "#F3F5F9",
  },
};

function shortName(name: string) {
  return name.replace(" Nasal Spray", "").replace(" + ", " \u00d7 ");
}

function formatLabel(category: Product["category"]) {
  if (category === "nasal-spray") return "Nasal spray";
  if (category === "injectable") return "Injectable";
  if (category === "stack") return "Stack";
  return "Research";
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

  const titleClass =
    variant === "feature"
      ? "text-[clamp(3.2rem,5.5vw,5.2rem)]"
      : variant === "detail"
        ? "text-[clamp(3rem,4.5vw,4.6rem)]"
        : variant === "hero"
          ? "text-[clamp(2rem,3.5vw,2.8rem)]"
          : "text-[clamp(1.8rem,3vw,2.4rem)]";

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-[rgb(15_22_19/8%)] bg-[#faf8f4] shadow-[0_1px_2px_rgb(15_22_19/4%)]",
        className
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 16% 18%, ${theme.wash} 0%, rgba(255,255,255,0) 42%), linear-gradient(180deg, #faf8f4 0%, #f6f2ea 100%)`,
        }}
      />
      {/* Watermark */}
      <div
        aria-hidden
        className="absolute bottom-3 right-3 font-semibold uppercase tracking-[-0.06em] opacity-[0.04]"
        style={{
          color: theme.ink,
          fontSize:
            variant === "card"
              ? "4.5rem"
              : variant === "hero"
                ? "6rem"
                : "7rem",
          lineHeight: 0.9,
        }}
      >
        {name}
      </div>
      {/* Accent bar */}
      <div
        aria-hidden
        className="absolute inset-y-4 left-4 w-[3px] rounded-full"
        style={{ background: theme.line }}
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
          <span
            className="rounded-md border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em]"
            style={{
              borderColor: `${theme.line}20`,
              color: theme.ink,
              background: theme.chip,
            }}
          >
            Verified
          </span>
        </div>

        <div className="mt-8 max-w-[85%]">
          <h3
            className={cn(
              "font-semibold tracking-[-0.05em] text-[#0f1613]",
              titleClass
            )}
          >
            {name}
          </h3>
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
            {product.category === "stack"
              ? "Research stack"
              : "Precision nasal spray"}
          </p>
          <p className="mt-1.5 text-[12px] leading-relaxed text-[#5c6762]">
            {product.size}
          </p>
        </div>

        <div className="mt-8 flex items-center justify-between gap-3 border-t border-[rgb(15_22_19/6%)] pt-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#8a9690]">
            Lot-matched COA
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#8a9690]">
            Crypto checkout
          </span>
        </div>
      </div>
    </div>
  );
}
