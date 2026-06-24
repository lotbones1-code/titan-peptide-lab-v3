import type { Metadata } from "next";

const TITLE = "Checkout — Titan Peptide Lab";
const DESCRIPTION =
  "Pay with USDC on Solana first: wallet address, QR code, exact amount, and order reference are visible immediately. Submit shipping after payment for 24h dispatch.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/checkout/" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/checkout/" },
  robots: { index: false, follow: true },
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
