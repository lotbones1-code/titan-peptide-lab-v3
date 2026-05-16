import type { Metadata } from "next";

const SHIPPING_TITLE = "Shipping & Cold-Chain Handling — Titan Peptide Lab";
const SHIPPING_DESCRIPTION =
  "Domestic and international research-use peptide shipping: dispatch timing, tracking, cold-pack handling, and carrier mix.";

// /shipping is a client-side redirect page, so metadata lives in this co-located
// layout instead of page.tsx. Keep the route self-canonical so Google no longer
// collapses it onto the homepage canonical inherited from the root layout.
export const metadata: Metadata = {
  title: SHIPPING_TITLE,
  description: SHIPPING_DESCRIPTION,
  alternates: { canonical: "/shipping/" },
  openGraph: {
    title: SHIPPING_TITLE,
    description: SHIPPING_DESCRIPTION,
    url: "/shipping/",
    type: "website" as const,
  },
  robots: { index: true, follow: true },
};

export default function ShippingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
