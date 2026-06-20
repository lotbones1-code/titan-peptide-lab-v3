import type { Metadata } from "next";

const TITLE = "Checkout — Titan Peptide Lab";
const DESCRIPTION =
  "Pay with BTC, SOL, or USDC on Solana. Wallet addresses, exact amounts, and order ID issued after payment confirmation. Cold-chain dispatch within 24h.";

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
