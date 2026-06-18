import type { Metadata } from "next";

const QUALITY_TITLE = "Quality, Testing & Lot Release — Titan Peptide Lab";
const QUALITY_DESCRIPTION =
  "How Titan Peptide Lab handles HPLC purity targets, lot release sheets, release documentation, and quality incident routing.";

// /quality is a client-side redirect page, so metadata lives in this co-located
// layout instead of page.tsx. Keep the route self-canonical so Google no longer
// collapses it onto the homepage canonical inherited from the root layout.
export const metadata: Metadata = {
  title: QUALITY_TITLE,
  description: QUALITY_DESCRIPTION,
  alternates: { canonical: "/quality/" },
  openGraph: {
    title: QUALITY_TITLE,
    description: QUALITY_DESCRIPTION,
    url: "/quality/",
    type: "website" as const,
  },
  robots: { index: true, follow: true },
};

export default function QualityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
