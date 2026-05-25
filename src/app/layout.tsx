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

const criticalFallbackCss = `
html{background:#fff;color:#0f1613;font-family:var(--font-geist-sans),-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;-webkit-text-size-adjust:100%}
body{margin:0;min-width:320px;background:#fff;color:#0f1613;font-family:var(--font-geist-sans),-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.55;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased}
*{box-sizing:border-box}
a{color:#1e6f58;text-decoration-thickness:1px;text-underline-offset:.18em}
img,svg{max-width:100%;height:auto}
button,input,textarea,select{font:inherit}
header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.94);border-bottom:1px solid rgba(15,22,19,.08);backdrop-filter:blur(16px)}
header>div,main>section>div,footer>div{max-width:80rem;margin-inline:auto;padding-inline:1.25rem}
nav{display:flex;gap:1.25rem;align-items:center;flex-wrap:wrap}
main{background:#fff;color:#0f1613}
section{padding-block:3.5rem;border-bottom:1px solid rgba(15,22,19,.06)}
h1,h2,h3{margin:0;color:#0f1613;font-family:var(--font-serif),Georgia,serif;letter-spacing:0;line-height:1.02}
h1{font-size:clamp(2.35rem,10vw,4.5rem)}
h2{font-size:clamp(1.9rem,6vw,3rem)}
h3{font-size:1.35rem}
p{margin:1rem 0 0;color:#5c6762}
ul{padding-left:1.2rem}
.bg-\\[\\#0f1110\\]{background:#0f1110;color:#fff}
.text-white{color:#fff}
.font-serif{font-family:var(--font-serif),Georgia,serif}
.rounded-full{border-radius:999px}
.hidden{display:none}
@media (min-width:768px){.md\\:flex{display:flex}.md\\:hidden{display:none}}
@media (max-width:767px){nav{gap:.6rem;font-size:.9rem}header>div{padding-block:.7rem}section{padding-block:2.75rem}}
`;

export const metadata: Metadata = {
  title: `${BRAND.name} — ${BRAND.tagline}`,
  description: BRAND.description,
  metadataBase: new URL(`https://${BRAND.domain}`),
  // Default canonical for the home page; sub-pages override via their own
  // alternates.canonical export. Prevents Google from picking duplicate
  // variants like /index.html or query-string forms (seo-audit §Canonicals).
  alternates: { canonical: "/" },
  openGraph: {
    title: BRAND.name,
    description: BRAND.description,
    url: `https://${BRAND.domain}`,
    siteName: BRAND.name,
    type: "website",
    // 1200x630 brand OG card (standard 1.91:1 ratio for Telegram/iMessage/Slack/X).
    // PDPs override with product imagery via their own metadata. Without this
    // default, pages without explicit OG images render with no preview card,
    // which kills B2B email and chat-share click-through.
    images: [
      {
        url: "/titan-banner-2.png",
        width: 1200,
        height: 630,
        alt: `${BRAND.name} — ${BRAND.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND.name,
    description: BRAND.description,
    images: ["/titan-banner-twitter-2.png"],
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
        <style
          id="critical-fallback-css"
          dangerouslySetInnerHTML={{ __html: criticalFallbackCss }}
        />
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
