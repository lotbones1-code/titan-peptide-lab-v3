import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Grain } from "@/components/site/grain";
import { AnnouncementBar } from "@/components/site/announcement-bar";
import { AIAdvisor } from "@/components/site/ai-advisor";
import { EmailCapture } from "@/components/site/email-capture";
import { OrganizationJsonLd, WebsiteJsonLd, FAQJsonLd } from "@/components/site/json-ld";
import { BRAND } from "@/lib/products";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`h-full antialiased ${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full bg-background text-foreground font-sans">
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <FAQJsonLd />
        <Grain />
        <AnnouncementBar />
        {children}
        <AIAdvisor />
        <EmailCapture />
      </body>
    </html>
  );
}
