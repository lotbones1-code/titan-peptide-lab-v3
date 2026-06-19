# Search Console + Bing Setup & Peptide SEO Plan

_Owner: Shamil. Last updated 2026-06-19 (New OpenClaw worker)._

This is the discovery layer. The site's **on-page SEO and analytics are already
excellent and live** — the missing piece is claiming the site in the search
engines so we can submit the sitemap, watch which "peptide" queries we rank for,
and request faster indexing. Everything below the verification step is a content
plan, not a code task.

---

## Current state (verified 2026-06-19)

**Analytics — LIVE.** Google Analytics 4 (`G-8X5CKDLSPB`) is baked into the
deployed `out/` and firing on every page. It already tracks:

- Page views with attribution (`utm_*`, `ref`, `oc_touch_id`, persistent `session_id`).
- `link_click` (incl. outbound), `product_view`, `cart_add`, `checkout_start`,
  `order_intent`, and GA4-standard `purchase` (revenue, items, coupon, source).
- Source/medium/campaign is captured from the URL and persisted in sessionStorage,
  so "where visitors come from" → GA4 **Reports → Acquisition → Traffic acquisition**,
  and revenue-by-source → **Monetization** once a real `purchase` fires.

Code: `src/lib/analytics.ts`, `src/components/site/analytics-events.tsx`, GA4 loader in `src/app/layout.tsx`.

**On-page SEO — LIVE.** 55-URL auto-synced sitemap (`src/app/sitemap.ts`),
`robots.ts` → sitemap, Organization + Website + Product + Breadcrumb JSON-LD,
canonical URLs, OG/Twitter cards, `llms.txt` / `llms-full.txt`, and dedicated
keyword landing pages (`/buy-research-peptides`, `/best-research-peptides`,
`/where-to-buy-research-peptides`, `/coa-verified-peptide-supplier`,
`/peptide-nasal-spray-supplier`, `/peptide-supplier-checklist`, + research articles).

**The gap — search-engine verification was missing.** No Google Search Console
or Bing tag, so the sitemap was never submitted and we have zero visibility into
rankings. This branch (`seo/search-console-bing-verification`) adds env-driven
verification meta tags, build-verified.

---

## STEP 1 — Verify ownership (owner action, ~10 min, free, no spend)

### Google Search Console
1. Go to https://search.google.com/search-console (sign in with the Google
   account that should own the property — ideally the same one as GA4 `G-8X5CKDLSPB`).
2. Add property → **URL prefix** → `https://www.titanpeptidelab.com`.
3. Choose the **HTML tag** verification method. Google shows a meta tag like:
   `<meta name="google-site-verification" content="ABC123..." />`
4. Copy the `content` value (just the token, not the whole tag).
5. In `titan-peptide-lab-v3/.env.local` set:
   `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=ABC123...`
6. Rebuild + ship: `pnpm run ship` (this needs your code-deploy approval).
7. Back in Search Console, click **Verify**.

### Bing Webmaster Tools (optional but free — also feeds DuckDuckGo/ChatGPT search)
1. Go to https://www.bing.com/webmasters → Add site `https://www.titanpeptidelab.com`.
   Tip: Bing can **import directly from Google Search Console** in one click — do that
   instead and you can skip the meta tag entirely.
2. If using the meta tag: copy the `msvalidate.01` content value and set
   `NEXT_PUBLIC_BING_SITE_VERIFICATION=...` in `.env.local`, then ship + verify.

> The tags render only when the env token is set; empty = no tag, no broken markup.

## STEP 2 — Submit the sitemap (after verify)
- Search Console → **Sitemaps** → submit `sitemap.xml`. (Bing usually auto-detects
  it from `robots.txt`, but submit there too.)
- Search Console → **URL Inspection** → paste the homepage + top money pages
  (`/products/`, `/buy-research-peptides/`, `/best-research-peptides/`) → **Request
  Indexing** to jump the queue.

## STEP 3 — Watch + iterate (ongoing, this is where ranking actually happens)
- After ~3–7 days, Search Console → **Performance** shows real queries, impressions,
  clicks, and average position. That tells us exactly which "peptide" terms we're
  close to ranking for. We then sharpen those pages' titles/H1s/content.

---

## Peptide SEO keyword & content plan (compliant, realistic)

Ranking "#1 for peptides" is not a switch you flip — it's earned via relevance +
authority + time. Honest expectation: branded + long-tail terms can rank in
**weeks–2 months** once indexed; broad head terms ("peptides", "BPC-157") are
high-competition and take **months + backlinks**. Plan accordingly:

**Win first (low competition, high buyer intent) — pages mostly exist, sharpen them:**
- "where to buy research peptides", "buy research peptides online",
  "COA verified peptide supplier", "peptide nasal spray supplier",
  "best research peptides [2026]", "research peptides with third-party testing".
- Per-product long-tail: "BPC-157 nasal spray", "buy BPC-157 vial", "Semax buy",
  "Selank nasal spray", "PT-141 research", "DSIP buy", "TB-500 supplier".

**Build authority (informational, feeds the buyer pages via internal links):**
- Keep publishing `/research/*` and `/blog/*` educational articles targeting
  "<peptide> research", "<peptide> half-life", "how to reconstitute peptides",
  "what is a COA", "research peptide storage" — each links to the relevant product.

**Compliance guardrails (do NOT break these — they protect rankings AND legality):**
- Research-use-only framing everywhere; **no** human dosing, medical, cure,
  treatment, performance, or body-composition claims.
- No fake reviews, fake scarcity, or unverifiable lot-specific COA claims.
- No "FDA approved" / disease-treatment language.

**Off-page (the real long-game lever):**
- Get listed in legit peptide review/affiliate directories (Pepper Review,
  PeptideBenchmark, etc. — already in the outreach lane) for relevant backlinks.
- Earn mentions from fitness/research media (the existing cold-outreach lane).

---

## What requires Shamil (owner gates)
1. **GSC/Bing account verify** — your Google/Microsoft login (Step 1).
2. **Deploy** — `pnpm run ship` pushes to prod; needs your `SITE_CODE_APPROVED`.
3. No spend is required for any of this. Search Console, Bing Webmaster, the
   sitemap, and GA4 are all free.
