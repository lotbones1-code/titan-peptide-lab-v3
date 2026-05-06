import type { Metadata } from "next";

const TITLE = "All Peptides — Titan Peptide Lab";
const DESCRIPTION =
  "Full peptide catalog: nasal sprays, injectable vials, and stacks. Lot-matched release sheet on every order, independent ISO 17025 retest within 5 business days, HPLC ≥99% purity target, 24h dispatch, crypto-only checkout. Ships to 218 destinations worldwide.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/products/" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/products/" },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
