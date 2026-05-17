import type { Metadata } from "next";

const TITLE = "Cart — Titan Peptide Lab";
const DESCRIPTION =
  "Review Titan Peptide Lab research products before checkout. Crypto-only payment, worldwide shipping, lot release documentation, and 14-day unopened returns.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/cart/" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/cart/" },
  robots: { index: false, follow: true },
};

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children;
}
