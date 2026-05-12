import { BRAND, PRODUCTS } from "@/lib/products";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.name,
    url: `https://${BRAND.domain}`,
    description: BRAND.description,
    foundingDate: "2019",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Reno",
      addressRegion: "NV",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@titanpeptidelab.com",
      contactType: "customer service",
    },
    sameAs: [],
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

export function FAQJsonLd() {
  const faqs = [
    { q: "How is purity verified?", a: "Every batch is third-party HPLC tested to ≥99%. The certificate of analysis is tied to the specific lot on your bottle." },
    { q: "How fast do orders ship?", a: "Manual fulfillment within 24 hours of payment confirmation. Tracking emailed as soon as the dispatch record is closed." },
    { q: "What payment methods do you accept?", a: "Crypto only — BTC, ETH, USDC (ERC-20), SOL, and USDC (SPL)." },
    { q: "Are these products for human use?", a: "No. All products are sold for laboratory research purposes only." },
    { q: "What is your return policy?", a: "Unopened items within 14 days. Contact support for a return authorization." },
    { q: "How should nasal sprays be stored?", a: "Refrigerate at 2-8 degrees C. Storage guidance is included with every order." },
  ];

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
