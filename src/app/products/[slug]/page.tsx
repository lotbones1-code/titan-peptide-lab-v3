import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BRAND, PRODUCTS } from "@/lib/products";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { ProductDetail } from "@/components/site/product-detail";
import { getLot } from "@/lib/lots";
import { zoneForCountry } from "@/lib/countries";

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
  const description = `${product.tagline}. ${product.size}. HPLC ≥99% purity target, lot release sheet, independent retest by email, 24h dispatch. Crypto-only checkout. Research use only.`;
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

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://${BRAND.domain}${product.image}`,
    sku: product.id,
    mpn: lot,
    brand: { "@type": "Brand", name: "Titan Peptide Lab" },
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
        <ProductDetail product={product} />
      </main>
      <Footer />
    </>
  );
}
