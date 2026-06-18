# Landing Page Recommendations — Paid Ad Traffic

## Current State

The existing site pages work as landing pages, but paid traffic benefits from
a tighter conversion focus. Here are recommendations ranked by impact.

---

## Option A: Use Existing Pages (Fastest to Launch)

### For Google Search (Compound-Specific)

Route compound-specific ads to the product detail page:
- BPC-157 ads → `/products/bpc157-spray`
- Selank ads → `/products/selank-spray`
- Semax ads → `/products/semax-spray`
- PT-141 ads → `/products/pt141-spray`
- Oxytocin ads → `/products/oxytocin-spray`
- DSIP ads → `/products/dsip-spray`

Route category/generic ads to the products page:
- Generic peptide spray ads → `/products`
- Stack ads → `/products/selank-semax-stack`

Route brand ads to homepage:
- Brand terms → `/`

### For Meta Ads

- Retargeting → same page they previously viewed (dynamic)
- Prospecting → `/products` (full catalog view)
- Stack campaigns → `/products/selank-semax-stack`
- BPC-157 lead campaigns → `/products/bpc157-spray`

---

## Option B: Dedicated Landing Pages (Higher Conversion, More Work)

Create stripped-down landing pages optimized for paid traffic. Remove
navigation distractions, add urgency elements, streamline to conversion.

### Recommended Landing Pages to Build

**1. `/lp/nasal-sprays` — Category Landing Page**

Purpose: Catch-all for generic "peptide nasal spray" searches and Meta prospecting.

Structure:
```
[Hero]
Headline: "Six Research-Grade Nasal Peptide Sprays"
Subhead: "In-House HPLC ≥99% Target · Lot-matched COA · Cold-chain shipped"
CTA: "View Catalog" → scrolls to product grid

[Trust Strip]
In-house HPLC ≥99% target | Lot-matched COA | Cold-chain 24h | Crypto accepted

[Product Grid]
All 6 sprays with name, price, key stat, "Shop" button

[Process Section]
4-step release workflow (lot → HPLC → COA → ship)

[FAQ]
3-4 questions about nasal delivery, purity, ordering

[Final CTA]
"Use FIRST10 for 10% off your first order"
```

**2. `/lp/bpc-157` — BPC-157 Specific Landing Page**

Purpose: Highest-volume compound keyword. Dedicated page maximizes Quality Score.

Structure:
```
[Hero]
Headline: "BPC-157 Nasal Spray"
Subhead: "500mcg/spray · 15mL · HPLC ≥99% Target · $64.99"
CTA: "Order Now"

[Compound Info]
What is BPC-157, mechanism of action (research context)
Key specs: per-spray amount, volume, purity, format

[Why Titan]
Lot-matched COA, cold-chain, no representative certificates

[Stack Suggestion]
"Researchers also pair with TB-500" — cross-sell

[COA Preview]
Show example certificate to build trust

[Order Section]
Price, quantity selector, "Add to Cart"
Discount reminder: FIRST10 for 10% off

[Research Disclaimer]
"For research purposes only" — prominent
```

**3. `/lp/cognitive-stack` — Selank + Semax Landing Page**

Purpose: Nootropics/biohacking audience from Meta.

Structure:
```
[Hero]
Headline: "The Cognitive-Emotional Research Pair"
Subhead: "Selank: GABA pathway. Semax: BDNF pathway. $105 for both."
CTA: "Order Stack"

[Two-Column Compare]
Left: Selank specs, pathway, price
Right: Semax specs, pathway, price
Center: "Better together — save $15"

[How It Works]
Nasal spray format explanation

[Trust]
HPLC, COA, cold-chain

[Order]
Stack for $105 or individual sprays
```

---

## Site Modifications for Paid Traffic (Quick Wins)

These changes to the EXISTING site improve ad traffic conversion without
building new pages:

### 1. Add UTM-Aware Discount Banner

When a user arrives with `utm_medium=paid`, show a sticky banner:
"Welcome — use FIRST10 for 10% off your first order"

### 2. Add "Research Use Only" Above Fold (REQUIRED for paid traffic)

Currently in footer only. For ad compliance, every landing page that receives
paid traffic MUST show a visible above-the-fold line: "For laboratory research
use only. Not for human or animal consumption." This is required by Google/Meta
review and reduces FTC/FDA exposure — not optional for ad landing pages.

### 3. Improve Product Page CTAs

Current product detail pages should have:
- Clear "Add to Cart" / "Order Now" button above the fold
- Price prominently displayed
- Trust badges (HPLC, COA) near the CTA
- Cross-sell suggestions below

### 4. Add Structured Data for Products

If not already present, add JSON-LD product schema to product pages.
This enables Google Merchant Center integration and rich snippets.

### 5. Speed Optimization

Google Ads Quality Score factors in landing page speed.
- Ensure images are optimized (WebP, lazy loading)
- Core Web Vitals should pass
- Mobile-first (60%+ of ad traffic will be mobile)

---

## Tracking Pixels on Landing Pages

Every landing page (existing or new) needs:
- Google Ads conversion tag
- Google Analytics 4
- Meta Pixel with standard events
- UTM parameter capture

See `tracking-plan.md` for implementation details.

---

## Priority Order

1. **Now:** Use existing product pages as landing pages (zero work)
2. **Week 2:** Apply quick-win site modifications
3. **Month 2:** Build `/lp/nasal-sprays` category landing page
4. **Month 2:** Build `/lp/bpc-157` if BPC-157 is top performer
5. **Month 3:** Build `/lp/cognitive-stack` if nootropic Meta audience converts
