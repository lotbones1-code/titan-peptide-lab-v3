// COA archive data — Phase 1 placeholders. Pending Janoshik third-party
// analysis; PDF/chromatogram slots are intentionally empty until vendor-neutral
// reports land.

import { PRODUCTS } from "./products";

export type LotEntry = {
  lot: string;
  manufactured: string;
  status: "pending" | "available";
};

export type CoaRecord = {
  slug: string;
  sku: string;
  name: string;
  category: string;
  pdfPath: string | null;
  chromatogramPath: string | null;
  lots: LotEntry[];
  testedAssays: string[];
  thirdPartyLab: string;
};

const PLACEHOLDER_LOTS: LotEntry[] = [
  { lot: "—", manufactured: "TBD", status: "pending" },
];

const STANDARD_ASSAYS = [
  "HPLC purity",
  "Mass spectrometry identity",
  "Endotoxin (LAL)",
  "Bioburden",
  "Appearance / pH",
];

export const COA_RECORDS: CoaRecord[] = PRODUCTS.map((p) => ({
  slug: p.slug,
  sku: p.id,
  name: p.name,
  category: p.category,
  pdfPath: null,
  chromatogramPath: null,
  lots: PLACEHOLDER_LOTS,
  testedAssays: STANDARD_ASSAYS,
  thirdPartyLab: "Independent third-party analytical laboratory (TBD)",
}));

export function findCoaRecord(slug: string): CoaRecord | undefined {
  return COA_RECORDS.find((r) => r.slug === slug);
}
