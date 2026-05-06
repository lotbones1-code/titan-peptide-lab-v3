import type { Metadata } from "next";

const TITLE = "Nasal Peptide Guide — Titan Peptide Lab";
const DESCRIPTION =
  "Free 32-page guide: delivery science, full compound profiles (BPC-157, Selank, Semax, PT-141, Oxytocin, DSIP), COA literacy, dose ranges, and storage. Email-gated PDF.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/guide/" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/guide/" },
};

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return children;
}
