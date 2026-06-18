import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BRAND, PRODUCTS } from "@/lib/products";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { ProductDetail } from "@/components/site/product-detail";
import { getLot } from "@/lib/lots";
import { zoneForCountry } from "@/lib/countries";
import { getCoaMeta, HPLC_METHOD, IDENTITY_METHOD } from "@/lib/coa";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  const title = `${product.name} — ${product.size} | Titan Peptide Lab`;
  const description = `${product.tagline}. ${product.size}. HPLC ≥99% purity target, lot-matched in-house release sheet, 24h dispatch. Crypto-only checkout. Research use only.`;
  const url = `https://${BRAND.domain}/products/${product.slug}/`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [{ url: `https://${BRAND.domain}${product.image}` }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const lot = getLot(product.id);
  const usZone = zoneForCountry("US");
  const coa = getCoaMeta(product.id, product.slug);
  const coaAbsoluteUrl = `https://${BRAND.domain}${coa.coaUrl}`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://${BRAND.domain}${product.image}`,
    sku: product.id,
    mpn: lot,
    brand: { "@type": "Brand", name: "Titan Peptide Lab" },
    manufacturer: {
      "@type": "Organization",
      name: "Titan Peptide Lab",
      url: `https://${BRAND.domain}/`,
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Lot code",
        value: lot,
      },
      {
        "@type": "PropertyValue",
        name: "HPLC purity",
        value: coa.purity,
      },
      {
        "@type": "PropertyValue",
        name: "Analytical method (purity)",
        value: HPLC_METHOD,
      },
      {
        "@type": "PropertyValue",
        name: "Analytical method (identity)",
        value: IDENTITY_METHOD,
      },
      {
        "@type": "PropertyValue",
        name: "Lab report status",
        value: coa.thirdPartyLab,
      },
      {
        "@type": "PropertyValue",
        name: "COA issue date",
        value: coa.issuedDate,
      },
    ],
    subjectOf: {
      "@type": "CreativeWork",
      name: coa.isSpecimen
        ? `Specimen lot-release-sheet format (sample) — ${product.name}`
        : `Certificate of Analysis — ${product.name} (lot ${lot})`,
      url: coaAbsoluteUrl,
      encodingFormat: "application/pdf",
    },
    offers: {
      "@type": "Offer",
      url: `https://${BRAND.domain}/products/${product.slug}/`,
      price: product.price.toFixed(2),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: "Titan Peptide Lab" },
      // Closes Google Merchant Center "missing shippingDetails" /
      // "missing hasMerchantReturnPolicy" structured-data warnings and
      // makes the offer eligible for richer SERP treatment. Numbers track
      // the live values in src/lib/countries.ts (US domestic zone + free
      // over threshold) and the FAQ return policy (14 days, unopened).
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: usZone.rate.toFixed(2),
          currency: "USD",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "US",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 2,
            maxValue: 5,
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "US",
        returnPolicyCategory:
          "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 14,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `https://${BRAND.domain}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `https://${BRAND.domain}/products/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://${BRAND.domain}/products/${product.slug}/`,
      },
    ],
  };

  // Per-SKU FAQ JSON-LD — COA / lot / shipping / storage / research-use
  // questions per audit Fix #2 sketch. Plain-text answers so AI bots and
  // Google rich-results extract cleanly. NO disease/dosing claims.
  const productFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How is ${product.name} tested for purity?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Each lot is released against in-house analytical checks \u2014 an HPLC-UV purity read (\u226599% main-peak release target) and a mass-spec identity check against the documented sequence \u2014 recorded on the lot-release sheet. The in-house lot-release sheet ships in the box, referenced to the lot code on your bottle. No independent third-party lot report is currently published for this lot.",
        },
      },
      {
        "@type": "Question",
        name: `Is the COA tied to the specific lot I receive?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. The in-house release sheet for lot ${lot} ships inside the order and references the lot code printed on your bottle. Any future independent third-party report would be checked against that same lot code before Titan names it.`,
        },
      },
      {
        "@type": "Question",
        name: `How is ${product.name} shipped and how fast?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Orders dispatch from a US warehouse within 24 hours of payment confirmation, with cold-chain packing where applicable. Tracking is emailed at packout. International shipping reaches 218 destinations from one warehouse; sanctioned jurisdictions are excluded.",
        },
      },
      {
        "@type": "Question",
        name: `How should ${product.name} be stored?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Refrigerate at 2\u20138\u00b0C (36\u201346\u00b0F). Storage guidance is included with each order. This is a laboratory handling specification \u2014 the product is sold for research use only, not for human or animal consumption.",
        },
      },
      {
        "@type": "Question",
        name: `Is ${product.name} intended for human use?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. All Titan Peptide Lab products are sold strictly for in-vitro laboratory research. They are not approved by the FDA for the prevention, treatment, or cure of any disease and are not intended for human or animal consumption, diagnostic, therapeutic, or preventative use.",
        },
      },
      {
        "@type": "Question",
        name: `I've never paid a supplier in crypto first — how do I order ${product.name} with confidence?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Crypto has no chargebacks, so the paper trail does the work. Your order ID is created and recorded with support before any crypto leaves your wallet, so the order exists on our side first. Most new buyers start with a single unit (FIRST10 takes 10% off) to verify the source on a small order before scaling up. Payment is confirmed on-chain — usually under 30 minutes — then orders ship within 24h with tracking by email. Every order includes the lot-matched in-house release sheet in the box, referenced to the lot code on your bottle. Unopened items are returnable within 14 days, and support@titanpeptidelab.com replies within 24–48h.",
        },
      },
      {
        "@type": "Question",
        name: `What payment methods are accepted for ${product.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Crypto only. USDC on Solana is recommended for the lowest fees; BTC, ETH, USDC on ERC-20, and SOL are also accepted. The checkout page shows the wallet address, QR, network, and live-converted amount before payment. No cards, no ACH, no wires.",
        },
      },
    ],
  };

  return (
    <>
      <Nav />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productFaqJsonLd) }}
        />
        <ProductDetail product={product} />
      </main>
      <Footer />
    </>
  );
}
