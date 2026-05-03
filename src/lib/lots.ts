// Lot codes per product — schema documented on /lab-testing: TPL-YYMM-[A-Z].
// SSR-safe (no Date / random). Update when a new production batch lands.

export const LOT_CODES: Record<string, string> = {
  "bpc157-spray": "TPL-2604-A",
  "selank-spray": "TPL-2604-B",
  "semax-spray": "TPL-2604-C",
  "pt141-spray": "TPL-2604-D",
  "oxytocin-spray": "TPL-2604-E",
  "dsip-spray": "TPL-2604-F",
  "selank-semax-stack": "TPL-2604-G",
  "bpc157-vial": "TPL-2604-H",
  "tb500-vial": "TPL-2604-I",
  "cjc-ipa": "TPL-2604-J",
  "retatrutide": "TPL-2604-K",
};

export function getLot(productId: string): string {
  return LOT_CODES[productId] ?? "TPL-2604-A";
}
