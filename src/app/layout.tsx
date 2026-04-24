import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Grain } from "@/components/site/grain";
import { AnnouncementBar } from "@/components/site/announcement-bar";
import { AIAdvisor } from "@/components/site/ai-advisor";
import { EmailCapture } from "@/components/site/email-capture";
import { CartDrawer } from "@/components/site/cart-drawer";
import { OrganizationJsonLd, WebsiteJsonLd, FAQJsonLd } from "@/components/site/json-ld";
import { CartProvider } from "@/lib/cart-context";
import { BRAND } from "@/lib/products";

const barlow = Barlow({
  variable: "--font-geist-sans",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-geist-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BRAND.name} — ${BRAND.tagline}`,
  description: BRAND.description,
  metadataBase: new URL(`https://${BRAND.domain}`),
  openGraph: {
    title: BRAND.name,
    description: BRAND.description,
    url: `https://${BRAND.domain}`,
    siteName: BRAND.name,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${barlow.variable} ${barlowCondensed.variable} ${instrumentSerif.variable}`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full bg-background text-foreground font-sans">
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <FAQJsonLd />
        <Grain />
        <CartProvider>
          <AnnouncementBar />
          {children}
          <CartDrawer />
          <AIAdvisor />
          <EmailCapture />
        </CartProvider>
      </body>
    </html>
  );
}
