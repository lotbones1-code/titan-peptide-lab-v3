import Link from "next/link";
import { PRODUCTS, type Product } from "@/lib/products";

// Define which products pair well with each other
const PAIRINGS: Record<string, string[]> = {
  "bpc157-spray": ["tb500-vial", "bpc157-vial", "selank-semax-stack"],
  "selank-spray": ["semax-spray", "selank-semax-stack", "dsip-spray"],
  "semax-spray": ["selank-spray", "selank-semax-stack", "bpc157-spray"],
  "oxytocin-spray": ["selank-spray", "dsip-spray", "pt141-spray"],
  "pt141-spray": ["oxytocin-spray", "bpc157-spray", "selank-spray"],
  "dsip-spray": ["selank-spray", "bpc157-spray", "oxytocin-spray"],
  "selank-semax-stack": ["bpc157-spray", "dsip-spray", "pt141-spray"],
  "bpc157-vial": ["tb500-vial", "bpc157-spray", "cjc-ipa"],
  "tb500-vial": ["bpc157-vial", "bpc157-spray", "cjc-ipa"],
  "cjc-ipa": ["bpc157-vial", "tb500-vial", "retatrutide"],
  "retatrutide": ["cjc-ipa", "bpc157-vial", "bpc157-spray"],
};

export function CrossSell({ currentProduct }: { currentProduct: Product }) {
  const pairingIds = PAIRINGS[currentProduct.id] || [];
  const recommendations = pairingIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean) as Product[];

  if (recommendations.length === 0) return null;

  return (
    <section className="border-t border-[#e5e5e5] bg-[#faf9f7] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.05] tracking-tight text-[#1a1a1a]">
          Pairs well with {currentProduct.name.replace(" Nasal Spray", "").replace(" (Injectable Vial)", "")}
        </h2>
        <p className="mt-2 text-[14px] text-[#888]">
          Researchers often combine these compounds for synergistic protocols.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group flex items-center gap-4 rounded-xl border border-[#e5e5e5] bg-white p-4 transition-all hover:border-[#1e6f58]/30 hover:shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#f0f5f2]">
                <span className="text-[11px] font-semibold text-[#1e6f58]">
                  {product.category === "nasal-spray" ? "NS" : product.category === "injectable" ? "INJ" : "STK"}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-medium text-[#1a1a1a] truncate">{product.name}</p>
                <p className="text-[12px] text-[#999]">{product.size}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-[15px] font-semibold text-[#1e6f58]">${product.price.toFixed(2)}</p>
                {product.compareAtPrice && (
                  <p className="text-[11px] text-[#bbb] line-through">${product.compareAtPrice.toFixed(2)}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
