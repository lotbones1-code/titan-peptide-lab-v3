import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Grain } from "@/components/site/grain";
import { AnnouncementBar } from "@/components/site/announcement-bar";
import { EmailCapture } from "@/components/site/email-capture";
import { CartDrawer } from "@/components/site/cart-drawer";
import { RefPassthrough } from "@/components/site/ref-passthrough";
import { AnalyticsEvents } from "@/components/site/analytics-events";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/site/json-ld";
import { CartProvider } from "@/lib/cart-context";
import { BRAND } from "@/lib/products";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

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
  title: "Research Peptides Online | Titan Peptide Lab",
  description:
    "Shop research peptides online with HPLC purity targets, lot-matched COAs, nasal sprays, vials, stacks, crypto checkout, and research-use labeling.",
  metadataBase: new URL(`https://${BRAND.domain}`),
  // Default canonical for the home page; sub-pages override via their own
  // alternates.canonical export. Prevents Google from picking duplicate
  // variants like /index.html or query-string forms (seo-audit §Canonicals).
  alternates: { canonical: "/" },
  openGraph: {
    title: "Research Peptides Online | Titan Peptide Lab",
    description:
      "Shop research peptides online with HPLC purity targets, lot-matched COAs, nasal sprays, vials, stacks, crypto checkout, and research-use labeling.",
    url: `https://${BRAND.domain}`,
    siteName: BRAND.name,
    type: "website",
    // 1200x630 brand OG card (standard 1.91:1 ratio for Telegram/iMessage/Slack/X).
    // PDPs override with product imagery via their own metadata. Without this
    // default, pages without explicit OG images render with no preview card,
    // which kills B2B email and chat-share click-through.
    images: [
      {
        url: "/titan-banner-3.png",
        width: 1200,
        height: 630,
        alt: `${BRAND.name} — ${BRAND.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Peptides Online | Titan Peptide Lab",
    description:
      "Shop research peptides online with HPLC purity targets, lot-matched COAs, nasal sprays, vials, stacks, crypto checkout, and research-use labeling.",
    images: ["/titan-banner-twitter-3.png"],
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

      <head>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}',{send_page_view:true});`}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-full bg-background text-foreground font-sans">
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <Grain />
        <AnalyticsEvents />
        <CartProvider>
          <RefPassthrough />
          <AnnouncementBar />
          {children}
          <CartDrawer />
          <EmailCapture />
        </CartProvider>
      </body>
    </html>
  );
}
