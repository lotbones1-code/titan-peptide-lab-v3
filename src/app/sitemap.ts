import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";
import { RESEARCH_ARTICLE_SLUGS } from "@/lib/research-articles";
import { BLOG_SLUGS } from "@/lib/blog-posts";
import { RECONSTITUTION_SLUGS } from "@/lib/reconstitution-compounds";

export const dynamic = "force-static";

const BASE = "https://www.titanpeptidelab.com";

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
    { url: `${BASE}/research-assistant/`, lastModified: now, changeFrequency: "weekly", priority: 0.88 },
    { url: `${BASE}/research-peptides/`, lastModified: now, changeFrequency: "weekly", priority: 0.92 },
    { url: `${BASE}/peptide-reconstitution-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/reconstitution/`, lastModified: now, changeFrequency: "weekly", priority: 0.88 },
    { url: `${BASE}/best-research-peptides/`, lastModified: now, changeFrequency: "weekly", priority: 0.93 },
    { url: `${BASE}/buy-research-peptides/`, lastModified: now, changeFrequency: "weekly", priority: 0.92 },
    { url: `${BASE}/where-to-buy-research-peptides/`, lastModified: now, changeFrequency: "weekly", priority: 0.91 },
    { url: `${BASE}/where-to-buy-bpc-157-nasal-spray/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/bpc-157-nasal-spray-vs-vial/`, lastModified: now, changeFrequency: "weekly", priority: 0.89 },
    { url: `${BASE}/tb-500-vs-bpc-157/`, lastModified: now, changeFrequency: "weekly", priority: 0.89 },
    { url: `${BASE}/retatrutide-vs-tirzepatide-vs-semaglutide/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/where-to-buy-pt-141-nasal-spray/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/where-to-buy-retatrutide/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/where-to-buy-tb-500/`, lastModified: now, changeFrequency: "weekly", priority: 0.89 },
    { url: `${BASE}/where-to-buy-cjc-1295-ipamorelin/`, lastModified: now, changeFrequency: "weekly", priority: 0.89 },
    { url: `${BASE}/where-to-buy-semax-nasal-spray/`, lastModified: now, changeFrequency: "weekly", priority: 0.88 },
    { url: `${BASE}/cjc-1295-ipamorelin-research-guide/`, lastModified: now, changeFrequency: "weekly", priority: 0.89 },
    { url: `${BASE}/coa-verified-peptide-supplier/`, lastModified: now, changeFrequency: "weekly", priority: 0.91 },
    { url: `${BASE}/how-to-verify-peptide-quality-coa/`, lastModified: now, changeFrequency: "weekly", priority: 0.91 },
    { url: `${BASE}/titan-peptide-lab-reviews/`, lastModified: now, changeFrequency: "weekly", priority: 0.88 },
    { url: `${BASE}/peptide-nasal-spray-supplier/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/peptide-supplier-checklist/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/blog/`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/about/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/lab-testing/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/shipping-faq/`, lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    { url: `${BASE}/affiliates/`, lastModified: now, changeFrequency: "monthly", priority: 0.55 },
    { url: `${BASE}/press/`, lastModified: now, changeFrequency: "monthly", priority: 0.55 },
    { url: `${BASE}/how-to-pay-with-crypto/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/buy-peptides-with-crypto/`, lastModified: now, changeFrequency: "weekly", priority: 0.92 },
    { url: `${BASE}/buy-bpc-157-with-bitcoin/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/buy-retatrutide-with-crypto/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/buy-tb-500-with-crypto/`, lastModified: now, changeFrequency: "weekly", priority: 0.89 },
    { url: `${BASE}/anonymous-peptide-purchase-crypto/`, lastModified: now, changeFrequency: "weekly", priority: 0.88 },
    { url: `${BASE}/cjc-1295-vs-ipamorelin/`, lastModified: now, changeFrequency: "weekly", priority: 0.89 },
    { url: `${BASE}/where-to-buy-selank/`, lastModified: now, changeFrequency: "weekly", priority: 0.88 },
    { url: `${BASE}/where-to-buy-dsip-nasal-spray/`, lastModified: now, changeFrequency: "weekly", priority: 0.87 },
    { url: `${BASE}/where-to-buy-oxytocin-nasal-spray/`, lastModified: now, changeFrequency: "weekly", priority: 0.87 },
    { url: `${BASE}/where-to-buy-bpc-157/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/where-to-buy-semax-selank-stack/`, lastModified: now, changeFrequency: "weekly", priority: 0.87 },
    { url: `${BASE}/bpc-157-tb-500-stack/`, lastModified: now, changeFrequency: "weekly", priority: 0.89 },
    { url: `${BASE}/pay-for-peptides-with-usdc-crypto/`, lastModified: now, changeFrequency: "weekly", priority: 0.89 },
    { url: `${BASE}/buy-pt-141-with-crypto/`, lastModified: now, changeFrequency: "weekly", priority: 0.89 },
    { url: `${BASE}/glp-1-research-peptides/`, lastModified: now, changeFrequency: "weekly", priority: 0.91 },
    { url: `${BASE}/where-to-buy-semaglutide-research/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/where-to-buy-tirzepatide/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/buy-tirzepatide-with-crypto/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/ipamorelin-vs-sermorelin/`, lastModified: now, changeFrequency: "weekly", priority: 0.88 },
    { url: `${BASE}/pt-141-vs-oxytocin-nasal-spray/`, lastModified: now, changeFrequency: "weekly", priority: 0.88 },
    { url: `${BASE}/dsip-vs-oxytocin-nasal-spray/`, lastModified: now, changeFrequency: "weekly", priority: 0.87 },
    { url: `${BASE}/dsip-vs-selank-nasal-spray/`, lastModified: now, changeFrequency: "weekly", priority: 0.87 },
    { url: `${BASE}/buy-peptides-with-bitcoin/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/semaglutide-vs-tirzepatide/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/mk-677-vs-ipamorelin/`, lastModified: now, changeFrequency: "weekly", priority: 0.88 },
    { url: `${BASE}/semax-vs-selank/`, lastModified: now, changeFrequency: "weekly", priority: 0.88 },
    { url: `${BASE}/nootropic-nasal-peptides/`, lastModified: now, changeFrequency: "weekly", priority: 0.91 },
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

  // /research/<slug>/ literature articles. These pages are indexable
  // (robots index:true, canonical set) and linked from the research index's
  // ItemList JSON-LD, but were previously absent from the sitemap — leaving
  // the brand's strongest long-form / E-E-A-T content undiscoverable via the
  // primary crawl signal. Slugs come from the same source the index renders,
  // so the two can't desync.
  for (const slug of RESEARCH_ARTICLE_SLUGS) {
    pages.push({
      url: `${BASE}/research/${slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  // /reconstitution/<slug>/ programmatic per-compound calculator+guide cluster.
  // Highest-volume / lowest-competition long-tail asset in the niche
  // ("{compound} reconstitution calculator", "how much bac water for X").
  // Slugs come from lib/reconstitution-compounds.ts — the same single source the
  // hub page and dynamic route render, so the sitemap can never advertise a 404.
  for (const slug of RECONSTITUTION_SLUGS) {
    pages.push({
      url: `${BASE}/reconstitution/${slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.78,
    });
  }

  return pages;
}
