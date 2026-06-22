import { BRAND, PRODUCTS } from "@/lib/products";

const SITE_URL = `https://${BRAND.domain}`;
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_ID = `${SITE_URL}/#logo`;
const FOUNDER_ID = `${SITE_URL}/about/#founder`;
const VERIFIED_PUBLIC_LISTINGS = [
  {
    name: "Titan Peptide Lab - Online, US | The Peptide Alliance",
    url: "https://peptidealliance.io/online/titan-peptide-lab",
    publisher: "The Peptide Alliance",
  },
] as const;

const PUBLIC_PROFILES = VERIFIED_PUBLIC_LISTINGS.map((listing) => listing.url);

export function OrganizationJsonLd() {
  // Keep sameAs limited to verified, live public profiles/listings.
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Titan Peptide Lab",
    legalName: BRAND.legalName,
    alternateName: ["Titan Peptide", "Titan Peptide Lab Research", "TitanPeptideLab"],
    identifier: BRAND.legalName,
    url: SITE_URL,
    description: BRAND.description,
    disambiguatingDescription:
      "Titan Peptide Lab (legal name: The Titan Peptide Company) is a documentation-first, research-use-only peptide brand operating solely at www.titanpeptidelab.com. It is a separate entity from similarly named vendors on other domains.",
    logo: {
      "@type": "ImageObject",
      "@id": LOGO_ID,
      url: `${SITE_URL}/titan-icon.png`,
      contentUrl: `${SITE_URL}/titan-icon.png`,
      width: 1200,
      height: 803,
      caption: "Titan Peptide Lab logo",
    },
    image: `${SITE_URL}/titan-banner-3.png`,
    slogan: BRAND.tagline,
    brand: {
      "@type": "Brand",
      name: "Titan Peptide Lab",
      logo: { "@id": LOGO_ID },
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@titanpeptidelab.com",
      contactType: "customer service",
    },
    founder: {
      "@id": FOUNDER_ID,
      name: "Shamil Kuchaliyev",
      jobTitle: "Founder & CEO",
    },
    foundingLocation: {
      "@type": "Place",
      name: "Reno, NV",
    },
    sameAs: PUBLIC_PROFILES,
    citation: PUBLIC_PROFILES,
    subjectOf: VERIFIED_PUBLIC_LISTINGS.map((listing) => ({
      "@type": "WebPage",
      name: listing.name,
      url: listing.url,
      publisher: {
        "@type": "Organization",
        name: listing.publisher,
      },
    })),
    mentions: VERIFIED_PUBLIC_LISTINGS.map((listing) => ({
      "@type": "WebPage",
      name: listing.name,
      url: listing.url,
    })),
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
      "Research-use-only peptide supplier verification",
      "Peptide supplier directory listings",
      "HPLC purity testing",
      "Lot-matched release documentation",
    ],
    areaServed: "Worldwide (sanctioned jurisdictions excluded)",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
export function FounderJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: "Shamil Kuchaliyev",
    jobTitle: "Founder & CEO",
    url: `${SITE_URL}/about/#founder`,
    worksFor: {
      "@id": ORGANIZATION_ID,
      name: "Titan Peptide Lab",
    },
    mainEntityOfPage: `${SITE_URL}/about/`,
    description:
      "Founder and CEO of Titan Peptide Lab, a documentation-first, research-use-only peptide company. Builds the AI systems that run the business.",
    knowsAbout: [
      "Research peptides",
      "Certificate of analysis (COA)",
      "Lot-matched release documentation",
      "Quality assurance",
      "AI automation",
    ],
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
    "@id": WEBSITE_ID,
    name: BRAND.name,
    alternateName: "Titan Peptide Lab",
    url: SITE_URL,
    description: BRAND.description,
    publisher: { "@id": ORGANIZATION_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/products?q={search_term_string}`,
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
      name: p.name,
      url: `${SITE_URL}/products/${p.slug}/`,
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
      item: entry.item.startsWith("http") ? entry.item : `${SITE_URL}${entry.item}`,
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
