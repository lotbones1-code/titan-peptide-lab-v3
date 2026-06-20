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

// Search-engine ownership verification. These let us claim the site in Google
// Search Console and Bing Webmaster Tools — the prerequisite for submitting the
// sitemap, monitoring which "peptide" queries we rank for, and requesting faster
// indexing. Env-driven so tokens never live in source; set them in .env.local
// (build-time inlined into the static export). Empty token → tag omitted.
const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "";
const BING_SITE_VERIFICATION = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "";

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
  icons: {
    icon: "/titan-mark.svg",
    apple: "/titan-icon.png",
  },
  robots: { index: true, follow: true },
  // Rendered into <head> only when the env token is present. `google` emits
  // <meta name="google-site-verification">; `other` emits Bing's
  // <meta name="msvalidate.01">. Both are inert until Search Console / Bing
  // Webmaster issue real tokens (owner step — see SEARCH-CONSOLE-SETUP.md).
  verification: {
    ...(GOOGLE_SITE_VERIFICATION ? { google: GOOGLE_SITE_VERIFICATION } : {}),
    ...(BING_SITE_VERIFICATION
      ? { other: { "msvalidate.01": BING_SITE_VERIFICATION } }
      : {}),
  },
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
            {/*
              Internal-traffic tagging. The raw GA4 session count is polluted by
              our own Playwright/headless QA + buyer-walk runs (they execute JS,
              so they register as real sessions — this is why "31 visitors" reads
              as "probably all us", and why engagedSessions=0). Before configuring
              GA4 we stamp a session-scoped `traffic_type` param: 'internal' when
              the visit is automation (`navigator.webdriver`) or carries our
              `?oc_internal=1` flag (persisted to localStorage so the whole walk
              is tagged), else 'external'. `gtag('set', …)` applies it to the
              page_view and every custom event, so a GA4 Admin → Data Filters →
              Internal Traffic rule (match `traffic_type` = `internal`) can
              exclude all of it and leave only real demand. Fails open: any error
              defaults to 'external' so tracking never breaks navigation.
            */}
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());(function(){var i=false;try{if(navigator.webdriver===true)i=true;var p=new URLSearchParams(location.search);try{if(p.get('oc_internal')==='1')localStorage.setItem('tpl_internal','1');if(p.get('oc_internal')==='0')localStorage.removeItem('tpl_internal');}catch(e){}try{if(localStorage.getItem('tpl_internal')==='1')i=true;}catch(e){}}catch(e){}window.__tplInternal=i;gtag('set',{traffic_type:i?'internal':'external'});}());gtag('config','${GA_ID}',{send_page_view:true});`}
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
