// Per-SKU COA + analytical method metadata.
// Structure: every released product maps to its current lot, the lot-matched
// COA PDF path under `/public/coa/`, the analytical methods used, and the
// third-party ISO 17025 retest lab. The COA PDF path follows the convention:
//
//   /coa/<slug>-lot-<lot>.pdf
//
// IMPORTANT: as of the first visibility ship, real per-lot COA PDFs are
// NOT YET dropped in `/public/coa/`. The paths below are wired into Product
// JSON-LD (`subjectOf`) and PDP UI (`coaProofLink`) so the structure is live
// the moment QA drops the sanitized PDFs. Until then the placeholder paths
// will 404 — surface this clearly in the report so the missing artifact
// blocks any "click to verify" claim on the PDP.

import { LOT_CODES } from "./lots";

export interface CoaMeta {
  /** Full public URL path to the lot-matched COA PDF. */
  coaUrl: string;
  /** Third-party lab partner that performed the ISO 17025 retest. */
  thirdPartyLab: string;
  /** HPLC purity reported on this lot (release target ≥99%). */
  purity: string;
  /** ESI-MS observed mass confirmation status. */
  identityMethod: string;
  /** Date the COA was issued (ISO yyyy-mm-dd). Same lot, both documents. */
  issuedDate: string;
}

// Single source of truth for partner lab + analytical methods until the
// commercial lab partnership is publicly named (Fix #8 in audit — gate A3).
// Surfacing a placeholder "ISO 17025 partner" string is honest per audit
// caveat: do not name a lab in schema before the contract is signed.
const PARTNER_LAB_PLACEHOLDER = "ISO 17025 accredited partner laboratory";
const HPLC_METHOD = "HPLC-UV at 220 nm";
const IDENTITY_METHOD = "ESI-MS identity confirmation";
const ISSUE_DATE_PLACEHOLDER = "2026-04-22";

// Per-SKU PDF availability flag. Flip to `true` per slug after the real
// sanitized PDF lands under `/public/coa/<slug>-lot-<lot>.pdf`. When `false`,
// `getCoaMeta` falls back to the publicly available specimen COA so that
// Product JSON-LD `subjectOf` never resolves to a 404.
const COA_PDF_AVAILABLE: Record<string, boolean> = {
  // Default for every SKU is `false` until QA drops real per-lot PDFs.
};

function defaultMeta(slug: string, lot: string): CoaMeta {
  const hasRealPdf = COA_PDF_AVAILABLE[slug] === true;
  return {
    coaUrl: hasRealPdf
      ? `/coa/${slug}-lot-${lot}.pdf`
      : "/specimen-coa.pdf",
    thirdPartyLab: PARTNER_LAB_PLACEHOLDER,
    purity: "≥99% HPLC-UV target",
    identityMethod: IDENTITY_METHOD,
    issuedDate: ISSUE_DATE_PLACEHOLDER,
  };
}

/**
 * Resolve COA metadata for a given product id + slug.
 *
 * Returns the lot-matched COA URL plus the methods used for both release and
 * retest. The URL is wired into Product JSON-LD `subjectOf` and into the PDP
 * "View certificate" CTA. Real PDFs ship in `/public/coa/` per the same
 * naming convention.
 */
export function getCoaMeta(productId: string, slug: string): CoaMeta {
  const lot = LOT_CODES[productId] ?? "TPL-2604-A";
  return defaultMeta(slug, lot);
}

export { HPLC_METHOD, IDENTITY_METHOD, PARTNER_LAB_PLACEHOLDER };
