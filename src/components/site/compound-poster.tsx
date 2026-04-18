import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

const THEMES: Record<string, { line: string; tint: string }> = {
  "bpc157-spray": { line: "#5F8A76", tint: "#EDF3EF" },
  "selank-spray": { line: "#7487B0", tint: "#EEF1F7" },
  "semax-spray": { line: "#B88A3D", tint: "#F7F1E5" },
  "pt141-spray": { line: "#98677B", tint: "#F5EDF1" },
  "oxytocin-spray": { line: "#C77D69", tint: "#F8F0EC" },
  "dsip-spray": { line: "#6577A4", tint: "#EEF1F8" },
  "selank-semax-stack": { line: "#6F7C97", tint: "#EEF1F5" },
};

function shortName(name: string) {
  return name.replace(" Nasal Spray", "").replace(" + ", " × ");
}

function formatLabel(category: Product["category"]) {
  if (category === "nasal-spray") return "Nasal spray";
  if (category === "injectable") return "Injectable";
  if (category === "stack") return "Research stack";
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
      ? "text-[clamp(3rem,4.4vw,4.4rem)]"
      : variant === "detail"
        ? "text-[clamp(2.8rem,4.2vw,4rem)]"
        : variant === "hero"
          ? "text-[clamp(2rem,3.1vw,2.9rem)]"
          : "text-[clamp(1.9rem,2.7vw,2.5rem)]";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] border border-[rgb(17_17_17/8%)] bg-[#faf8f2] shadow-[0_1px_2px_rgb(17_17_17/4%),_0_18px_40px_-32px_rgb(17_17_17/14%)]",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(17,17,17,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,17,17,0.035) 1px, transparent 1px)",
          backgroundSize: variant === "card" ? "30px 30px" : "34px 34px",
          maskImage: "linear-gradient(180deg, rgba(0,0,0,0.3), transparent 85%)",
        }}
      />
      <div aria-hidden className="absolute inset-x-0 top-0 h-[3px]" style={{ background: theme.line }} />
      <div aria-hidden className="absolute right-6 top-6 h-20 w-20 rounded-full border border-[rgb(17_17_17/6%)]" style={{ background: theme.tint }} />

      <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5f6662]">
              Titan Peptide Lab
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#7a817d]">
              {formatLabel(product.category)}
            </p>
          </div>
          <span className="rounded-full border border-[rgb(17_17_17/8%)] bg-white/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#505652]">
            Lot-matched COA
          </span>
        </div>

        <div className="mt-10 max-w-[34rem]">
          <h3 className={cn("font-semibold leading-[0.94] tracking-[-0.05em] text-[#111111]", titleClass)}>
            {name}
          </h3>
          <p className="mt-4 max-w-[28rem] text-sm leading-6 text-[#4e5551]">
            {product.category === "stack"
              ? "Two-compound stack, merchandised as a cleaner single decision."
              : "Clean entry-format presentation, built to feel credible before the buyer even reads the research page."}
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Metric label="Format" value={formatLabel(product.category)} tint={theme.tint} />
          <Metric label="Size" value={product.size} tint={theme.tint} />
          <Metric label="Proof" value="HPLC release" tint={theme.tint} />
          <Metric label="Checkout" value="Universal crypto" tint={theme.tint} />
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value, tint }: { label: string; value: string; tint: string }) {
  return (
    <div className="rounded-[1rem] border border-[rgb(17_17_17/7%)] bg-white/92 px-4 py-3">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#7a817d]">{label}</p>
      <p className="mt-2 text-sm font-medium text-[#111111]" style={{ background: `linear-gradient(180deg, transparent 65%, ${tint} 65%)` }}>
        {value}
      </p>
    </div>
  );
}
