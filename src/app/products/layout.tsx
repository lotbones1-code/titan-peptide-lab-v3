import type { Metadata } from "next";

const TITLE = "Buy Research Peptides Online — Titan Peptide Lab";
const DESCRIPTION =
  "Shop research peptides online: nasal sprays, vials, and stacks with lot-matched COAs, HPLC purity targets, crypto checkout, and 24h dispatch target.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/products/" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/products/" },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
