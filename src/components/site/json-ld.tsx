import { BRAND, PRODUCTS } from "@/lib/products";

export function OrganizationJsonLd() {
  // Only `@titan.peptidelab` (IG) is currently a live, brand-claimed profile.
  // Per audit guidance, false `sameAs` entries hurt entity-graph trust — add
  // X / LinkedIn / Reddit handles only when they are claimed and brand-consistent.
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.name,
    url: `https://${BRAND.domain}`,
    description: BRAND.description,
    logo: `https://${BRAND.domain}/titan-icon.png`,
    slogan: BRAND.tagline,
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@titanpeptidelab.com",
      contactType: "customer service",
    },
    sameAs: [
      "https://www.instagram.com/titan.peptidelab/",
    ],
    knowsAbout: [
      "BPC-157",
      "TB-500",
      "CJC-1295",
      "Ipamorelin",
      "Semax",
      "Selank",
      "PT-141",
      "Oxytocin",
      "DSIP",
      "Retatrutide",
      "Research peptides",
      "HPLC purity testing",
      "ISO 17025 third-party COA",
    ],
    areaServed: "Worldwide (218 destinations, sanctioned jurisdictions excluded)",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
export function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND.name,
    url: `https://${BRAND.domain}`,
    description: BRAND.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `https://${BRAND.domain}/products?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
export function ProductListJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Titan Peptide Lab Research Catalog",
    numberOfItems: PRODUCTS.length,
    itemListElement: PRODUCTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        url: `https://${BRAND.domain}/products/${p.slug}`,
        description: p.tagline,
        offers: {
          "@type": "Offer",
          price: p.price.toFixed(2),
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: Array<{ name: string; item: string }>;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: entry.item.startsWith("http")
        ? entry.item
        : `https://${BRAND.domain}${entry.item}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQJsonLd({
  faqs,
}: {
  faqs: Array<{ q: string; a: string }>;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
