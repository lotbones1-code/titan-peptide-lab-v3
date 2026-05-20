import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";

export const dynamic = "force-static";

const BASE = "https://www.titanpeptidelab.com";

const BLOG_SLUGS = [
  "fda-peptide-reclassification-2026",
  "peptide-nasal-sprays-trending-2026",
  "peptide-trends-2026-research-compounds",
  "bpc-157-nasal-spray-complete-guide",
  "where-to-buy-peptide-nasal-sprays",
  "semax-vs-selank-neuropeptide-comparison",
  "how-to-read-peptide-coa",
  "peptide-nasal-sprays-vs-injections",
  "pt-141-nasal-spray-research-guide",
  "dsip-nasal-spray-delta-sleep-peptide",
  "oxytocin-nasal-spray-research",
  "best-peptide-stacks-research-guide",
  "peptide-storage-guide",
  "peptide-nasal-spray-benefits",
  "beginners-guide-nootropic-peptides",
  "how-to-verify-peptide-purity",
  "usa-made-peptide-nasal-sprays",
];

// Pull product slugs from the live catalog so the sitemap can never desync
// from the actual product routes. Previously this was a hand-maintained list
// that drifted (e.g. listed `bpc-157-injectable` after the real slug became
// `bpc-157-vial`, producing 404s in Google's index).
const PRODUCT_SLUGS = PRODUCTS.map((p) => p.slug);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Trailing slashes match next.config.ts `trailingSlash: true` so static
  // export URLs (`/path/index.html`) don't 301-redirect from sitemap entries.
  const pages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/start/`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/products/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/blog/`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/about/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/lab-testing/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/shipping-faq/`, lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    { url: `${BASE}/affiliates/`, lastModified: now, changeFrequency: "monthly", priority: 0.55 },
    { url: `${BASE}/press/`, lastModified: now, changeFrequency: "monthly", priority: 0.55 },
    { url: `${BASE}/how-to-pay-with-crypto/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/research/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/contact/`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/guide/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  for (const slug of PRODUCT_SLUGS) {
    pages.push({
      url: `${BASE}/products/${slug}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  for (const slug of BLOG_SLUGS) {
    pages.push({
      url: `${BASE}/blog/${slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return pages;
}
