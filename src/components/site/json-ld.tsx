import { BRAND, PRODUCTS } from "@/lib/products";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.name,
    url: `https://${BRAND.domain}`,
    description: BRAND.description,
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
  faqs = DEFAULT_FAQS,
}: {
  faqs?: Array<{ q: string; a: string }>;
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

const DEFAULT_FAQS = [
  { q: "How is purity verified?", a: "Every batch is HPLC tested in-house, then sent to an independent ISO 17025 lab for retest. Release target is ≥99% purity. The in-house release sheet ships in the box; the independent retest report follows by email within 5 business days." },
  { q: "How fast do orders ship?", a: "Orders ship within 24 hours after payment confirmation. Cold-chain pack, tracking emailed when the package leaves." },
  { q: "What payment methods do you accept?", a: "Crypto only — USDC on Solana (recommended), SOL, BTC, ETH, and USDC on ERC-20. No cards, no ACH, no wires." },
  { q: "Are these products for human use?", a: "No. All products are sold for laboratory research purposes only." },
  { q: "What is your return policy?", a: "Unopened items within 14 days. Contact support for a return authorization." },
  { q: "How should nasal sprays be stored?", a: "Refrigerate at 2-8 degrees C. Storage guidance is included with every order." },
  { q: "Is the COA tied to my specific lot, or a generic specimen?", a: "Tied to your specific lot. The in-house release sheet shipped in the box and the independent ISO 17025 retest report (emailed within 5 business days) both reference the same lot code printed on the bottle." },
  { q: "Intranasal spray vs lyophilized vial — how do I choose?", a: "Seven of eleven compounds ship as precision intranasal sprays. Lyophilized vials are used where intranasal isn't viable (BPC-157 SC, CJC+Ipa, retatrutide, TB-500); each vial ships with a reconstitution guide for laboratory handling." },
  { q: "Will my international order clear customs?", a: "We ship to 218 destinations from one warehouse, sanctioned jurisdictions excluded. Orders are declared as research articles for laboratory use only. If a destination requires extra documentation, we email before dispatch." },
  { q: "Do you sell wholesale to clinics, pharmacies, or research labs?", a: "Tier pricing exists for repeat-volume buyers (5+ units per month). Email support@titanpeptidelab.com with the compound and approximate monthly volume — wholesale settles in stablecoin on the same crypto rail as retail." },
];
