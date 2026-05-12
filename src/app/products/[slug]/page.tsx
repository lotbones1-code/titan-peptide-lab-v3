import { notFound } from "next/navigation";
import { BRAND, PRODUCTS } from "@/lib/products";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { ProductDetail } from "@/components/site/product-detail";
import { CrossSell } from "@/components/site/cross-sell";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};

  const title = `${product.name} — Titan Peptide Lab`;
  const canonicalPath = `/products/${product.slug}/`;
  const socialImage = product.ogImage ?? product.image;
  const imageAlt = `${product.name} social preview`;

  return {
    title,
    description: product.description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title,
      description: product.tagline,
      url: canonicalPath,
      siteName: BRAND.name,
      type: "website",
      images: [{ url: socialImage, alt: imageAlt, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: product.tagline,
      images: [socialImage],
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

  // JSON-LD structured data for product
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://${BRAND.domain}${product.image}`,
    brand: { "@type": "Brand", name: "Titan Peptide Lab" },
    offers: {
      "@type": "Offer",
      price: product.price.toFixed(2),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Titan Peptide Lab" },
    },
  };

  return (
    <>
      <Nav />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ProductDetail product={product} />
        <CrossSell currentProduct={product} />
      </main>
      <Footer />
    </>
  );
}
