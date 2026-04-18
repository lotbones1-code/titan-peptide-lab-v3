import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

const THEMES: Record<string, { wash: string; line: string; ink: string; chip: string }> = {
  "bpc157-spray": { wash: "#DEE9E2", line: "#6F8E7B", ink: "#183026", chip: "#EEF4F0" },
  "selank-spray": { wash: "#E2E7F3", line: "#7288B5", ink: "#1D2942", chip: "#F0F3F9" },
  "semax-spray": { wash: "#EFE3C8", line: "#C79A47", ink: "#4A3512", chip: "#FBF4E8" },
  "pt141-spray": { wash: "#ECD8E2", line: "#9F6A7F", ink: "#44212F", chip: "#F8EFF3" },
  "oxytocin-spray": { wash: "#F0DDD6", line: "#D27D69", ink: "#49281E", chip: "#FBF1EE" },
  "dsip-spray": { wash: "#E0E5F2", line: "#6876A6", ink: "#202A45", chip: "#F0F3FA" },
  "selank-semax-stack": { wash: "#E6E9F0", line: "#8892B4", ink: "#222B3C", chip: "#F3F5F9" },
};

function shortName(name: string) {
  return name.replace(" Nasal Spray", "").replace(" + ", " × ");
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
      ? "text-[clamp(3.6rem,6vw,6rem)]"
      : variant === "detail"
        ? "text-[clamp(3.4rem,5vw,5.2rem)]"
        : variant === "hero"
          ? "text-[clamp(2.1rem,4vw,3.3rem)]"
          : "text-[clamp(2rem,3.4vw,2.7rem)]";

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[1.8rem] border border-[rgb(15_22_19/8%)] bg-[#faf7f1] shadow-[0_1px_2px_rgb(15_22_19/4%),_0_24px_60px_-40px_rgb(15_22_19/12%)]",
        className,
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 16% 18%, ${theme.wash} 0%, rgba(255,255,255,0) 42%), linear-gradient(180deg, #fbf8f2 0%, #f6f1e8 100%)`,
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-3 right-3 font-semibold uppercase tracking-[-0.06em] opacity-[0.06]"
        style={{ color: theme.ink, fontSize: variant === "card" ? "5rem" : variant === "hero" ? "7rem" : "8rem", lineHeight: 0.9 }}
      >
        {name}
      </div>
      <div
        aria-hidden
        className="absolute inset-y-5 left-5 w-3 rounded-full"
        style={{ background: theme.line }}
      />

      <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5d6963]">
              Titan Peptide Lab
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#7b847f]">
              {formatLabel(product.category)}
            </p>
          </div>
          <span
            className="rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em]"
            style={{ borderColor: `${theme.line}26`, color: theme.ink, background: theme.chip }}
          >
            Compound-led
          </span>
        </div>

        <div className="mt-8 max-w-[82%]">
          <h3 className={cn("font-semibold tracking-[-0.06em] text-[#101820]", titleClass)}>
            {name}
          </h3>
          <p className="mt-3 text-sm uppercase tracking-[0.22em] text-[#66706b]">
            {product.category === "stack" ? "Research stack" : "Precision nasal spray"}
          </p>
          <p className="mt-2 text-sm leading-6 text-[#44504a]">{product.size}</p>
        </div>

        <div className="mt-8 flex items-center justify-between gap-3 border-t border-[rgb(15_22_19/8%)] pt-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#66706b]">
            Lot-matched COA
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#66706b]">
            Universal crypto checkout
          </span>
        </div>
      </div>
    </div>
  );
}
