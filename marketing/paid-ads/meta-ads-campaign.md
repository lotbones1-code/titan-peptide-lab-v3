# Meta (Facebook + Instagram) Ads Campaign Plan — Titan Peptide Lab

## Strategy Overview

Meta serves two roles for Titan:
1. **Retargeting** (Phase 1) — convert Google Ads traffic that didn't buy
2. **Prospecting** (Phase 2) — find new peptide researchers via interest + lookalike targeting

Launch retargeting first (lower CPA, leverages existing traffic). Add prospecting once the pixel has 100+ purchase events.

---

## Campaign Architecture

```
Titan Peptide Lab (Ad Account)
│
├── CONVERSIONS: Retargeting — Site Visitors
│   ├── Ad Set: All Visitors 1–7 Days
│   ├── Ad Set: Product Viewers 1–14 Days
│   └── Ad Set: Cart / Checkout Abandon 1–7 Days
│
├── CONVERSIONS: Retargeting — Engagers
│   └── Ad Set: IG/FB Engagers 1–30 Days
│
├── CONVERSIONS: Prospecting — Interest Targeting
│   ├── Ad Set: Peptide Research Interest
│   ├── Ad Set: Nootropics / Biohacking Interest
│   └── Ad Set: Fitness Recovery / Sports Science
│
├── CONVERSIONS: Prospecting — Lookalike
│   ├── Ad Set: 1% Lookalike — Purchasers
│   └── Ad Set: 1% Lookalike — Product Viewers
│
└── TRAFFIC: Content Amplification (Phase 3)
    └── Ad Set: Broad — Blog / Education Content
```

---

## Campaign 1: Retargeting — Site Visitors

**Objective:** Conversions (Purchase)
**Budget:** $400/month
**Bid strategy:** Cost cap at $25 CPA
**Placements:** Automatic (let Meta optimize)

### Ad Set: All Visitors 1–7 Days

**Audience:**
- Custom audience: All website visitors, last 7 days
- Exclude: Purchasers (last 30 days)
- Min size needed: ~500 people (build with Google traffic first)

**Ads:**

**Ad 1 — Trust Reminder (Static Image)**
- Format: Single image (1080x1080)
- Visual: Dark background, product grid showing all 6 sprays, "HPLC ≥99%" badge prominent
- Primary text: You looked at our catalog. Here's why researchers come back: every bottle ships with a lot-matched certificate of analysis, not a generic PDF someone else's batch generated. Six nasal sprays. From $59.99. Cold-chain shipped.
- Headline: The COA Matches Your Bottle
- CTA: Shop Now
- Link: titanpeptidelab.com/products?utm_source=meta&utm_medium=paid&utm_campaign=retarget-visitors

**Ad 2 — Social Proof (Carousel)**
- Format: Carousel, 4 cards
- Card 1: "HPLC ≥99% purity" — lab image / chromatogram aesthetic
- Card 2: "Lot-matched COA" — certificate visual
- Card 3: "Cold-chain dispatch" — packaging visual
- Card 4: "From $59.99" — product lineup
- Primary text: Research-grade nasal peptide sprays with a release workflow most suppliers skip. Lot intake → HPLC screen → COA match → cold-chain dispatch. No representative certificates. No corner-cutting.
- Headline: The Release Process
- CTA: Learn More
- Link: titanpeptidelab.com/lab-testing?utm_source=meta&utm_medium=paid&utm_campaign=retarget-process

### Ad Set: Product Viewers 1–14 Days

**Audience:**
- Custom audience: Viewed /products/* pages, last 14 days
- Exclude: Purchasers (last 30 days)

**Ads:**

**Ad 3 — Specific Product Retarget (Dynamic)**
- Format: Dynamic product ads (requires catalog)
- Show the exact product they viewed
- Primary text: Still researching {product_name}? Every Titan spray ships with a batch-specific COA and cold-chain handling. HPLC purity ≥99%.
- Headline: {product_name} — In Stock
- CTA: Shop Now

**Ad 4 — Discount Nudge (Static)**
- Visual: Single best-selling product (BPC-157) with "FIRST10" code overlay
- Primary text: Your first order ships with 10% off. Code: FIRST10. BPC-157, Selank, Semax, PT-141, Oxytocin, or DSIP — all HPLC-verified, all cold-chain shipped.
- Headline: 10% Off Your First Order
- CTA: Get Offer
- Link: titanpeptidelab.com/products?utm_source=meta&utm_medium=paid&utm_campaign=retarget-discount

### Ad Set: Cart / Checkout Abandon 1–7 Days

**Audience:**
- Custom audience: Initiated checkout but didn't purchase, last 7 days
- Exclude: Purchasers (last 7 days)

**Ads:**

**Ad 5 — Urgency (Static)**
- Visual: Minimalist, compound name typography (matches site aesthetic)
- Primary text: You were close. Your cart is still waiting — and every order still ships cold-chain with a lot-matched COA within 24 hours. Finish checkout before your compound ships to someone else's lab.
- Headline: Your Order Is Waiting
- CTA: Complete Order

---

## Campaign 2: Retargeting — Engagers

**Objective:** Conversions (Purchase)
**Budget:** $200/month
**Bid strategy:** Lowest cost

### Ad Set: IG/FB Engagers 1–30 Days

**Audience:**
- Custom audience: Engaged with Instagram or Facebook page/ads, last 30 days
- Exclude: Website visitors last 7 days (already in Campaign 1)
- Exclude: Purchasers last 30 days

**Ads:**

**Ad 6 — Brand Introduction (Video or Static)**
- Format: 15-sec video or static
- Visual: Text-led, editorial. "The compound is the product." tagline.
- Primary text: Six nasal peptide sprays. Every batch lot-coded, HPLC-screened to ≥99%, and shipped cold-chain with a matching certificate of analysis. BPC-157 · Selank · Semax · PT-141 · Oxytocin · DSIP. From $59.99.
- Headline: Research-Grade Nasal Peptides
- CTA: Shop Now

---

## Campaign 3: Prospecting — Interest Targeting

**Objective:** Conversions (Purchase)
**Budget:** $500/month
**Bid strategy:** Cost cap at $35 CPA
**Launch:** Phase 2 (after pixel has 50+ purchase events)

### Ad Set: Peptide Research Interest

**Audience:**
- Interests: Peptides, Research chemicals, Nootropics, Pharmacology
- AND behavior: Online shoppers
- Age: 25–55
- Gender: All
- Geo: US
- Exclude: Website visitors last 30 days, Purchasers last 180 days

**Ads:**

**Ad 7 — Category Education (Static)**
- Visual: All 6 spray bottles in editorial grid, dark background
- Primary text: Most peptide sprays ship without a batch-specific COA. Titan is different. Every bottle gets a lot code at intake, passes HPLC screening at ≥99% purity, and ships cold-chain with a certificate that matches the exact batch you receive. Six nasal sprays from $59.99.
- Headline: Not All Peptide Sprays Are Verified
- CTA: Shop Now
- Link: titanpeptidelab.com/products?utm_source=meta&utm_medium=paid&utm_campaign=prospect-peptide

**Ad 8 — BPC-157 Lead (Static)**
- Visual: BPC-157 compound name in large editorial type (matches site poster style)
- Primary text: BPC-157 nasal spray. 500mcg per dose, 15mL precision atomizer. HPLC-verified ≥99% purity. No reconstitution — the bottle is the dose. $64.99 with lot-matched COA and cold-chain dispatch.
- Headline: BPC-157 Nasal Spray — $64.99
- CTA: Shop Now
- Link: titanpeptidelab.com/products/bpc157-spray?utm_source=meta&utm_medium=paid&utm_campaign=prospect-bpc157

### Ad Set: Nootropics / Biohacking Interest

**Audience:**
- Interests: Nootropics, Biohacking, Cognitive enhancement, Brain health, Self-optimization
- AND behavior: Engaged shoppers
- Age: 22–45
- Geo: US
- Exclude: Website visitors last 30 days, Purchasers last 180 days

**Ads:**

**Ad 9 — Selank + Semax Angle (Carousel)**
- Card 1: "Selank — Calm focus without sedation" — $59.99
- Card 2: "Semax — Cognitive performance & BDNF" — $59.99
- Card 3: "Run them together" — Stack $105
- Card 4: "HPLC ≥99% verified" — lab process
- Primary text: Two Russian-developed nootropic peptides. Selank modulates GABA for calm, Semax upregulates BDNF for sharp. Run them in tandem for balanced cognitive performance. Save $15 with the stack.
- Headline: The Cognitive-Emotional Pair
- CTA: Shop Now
- Link: titanpeptidelab.com/products/selank-semax-stack?utm_source=meta&utm_medium=paid&utm_campaign=prospect-stack

**Ad 10 — Semax Standalone (Static)**
- Visual: "SEMAX" in large editorial type
- Primary text: Semax nasal spray. Heptapeptide that upregulates BDNF and supports memory, focus, and neural recovery. 1mg per spray, 15mL. HPLC-verified ≥99%. $59.99.
- Headline: Semax — BDNF Upregulation Research
- CTA: Learn More

### Ad Set: Fitness Recovery / Sports Science

**Audience:**
- Interests: Sports science, Athletic recovery, Tissue repair, Regenerative medicine, Physical therapy
- AND behavior: Online shoppers
- Age: 25–50
- Geo: US
- Exclude: Website visitors last 30 days, Purchasers last 180 days

**Ads:**

**Ad 11 — BPC-157 Recovery Angle (Static)**
- Visual: "BPC-157" large type, "Recovery. Gut support. Systemic repair." subtitle
- Primary text: Body Protection Compound 157 in a precision nasal spray. Researchers report rapid tissue recovery and systemic anti-inflammatory action. 500mcg per dose, HPLC ≥99%, cold-chain shipped. $64.99.
- Headline: BPC-157 Nasal Spray — Research Grade
- CTA: Shop Now

**Ad 12 — TB-500 + BPC-157 Pair (Static)**
- Visual: Split layout — "BPC-157 Spray + TB-500 Vial"
- Primary text: The two most-studied recovery peptides. BPC-157 nasal spray ($64.99) pairs with TB-500 injectable ($89.99) for researchers running tissue repair protocols. Both HPLC ≥99%, both ship with lot-matched COA.
- Headline: The Recovery Research Pair
- CTA: Shop Now

---

## Campaign 4: Prospecting — Lookalike

**Objective:** Conversions (Purchase)
**Budget:** $400/month
**Bid strategy:** Cost cap at $30 CPA
**Launch:** Phase 2 (need 100+ source events)

### Ad Set: 1% Lookalike — Purchasers

**Source audience:** Custom audience of all purchasers
**Lookalike:** 1% US
**Exclude:** All custom audiences (visitors, engagers, purchasers)

Use best-performing ads from Campaign 3.

### Ad Set: 1% Lookalike — Product Viewers

**Source audience:** Custom audience of product page viewers
**Lookalike:** 1–3% US
**Exclude:** All custom audiences

Use best-performing ads from Campaign 3.

---

## Creative Guidelines

### Visual Style (Match Site Aesthetic)

- **Dark backgrounds** (#0f1613 ink) with light text (#f6f3ee paper)
- **Large editorial typography** — compound names as the hero visual
- **No fake product renders** — use compound-name-led posters only
- **Minimal, clinical luxury** feel — not flashy supplement marketing
- **Trust badges:** HPLC ≥99%, LOT-MATCHED COA, COLD-CHAIN
- **Color accent:** Titan Green (#1e6f58) for CTAs and highlights

### Sizes Needed

| Placement | Size | Format |
|-----------|------|--------|
| Feed (FB/IG) | 1080x1080 | Square |
| Stories/Reels | 1080x1920 | Vertical |
| Right column | 1200x628 | Landscape |

### Copy Rules

1. Always include "for research purposes" framing
2. Never make health claims or imply human therapeutic use
3. Lead with purity, verification, and process — not effects
4. Use researcher/laboratory language, not consumer supplement language
5. Price transparency — always include the price
6. Mention COA and HPLC in every ad

---

## Exclusions (Account-Level)

- Purchasers last 7 days (all campaigns except retention)
- Employees / team members
- Under 21 age group
- Interests: Recreational drugs, illegal substances (broad exclusion)

---

## Naming Convention

```
TITAN_[Objective]_[Audience]_[Creative]_[Date]

Examples:
TITAN_Conv_Retarget-Visitors-7d_TrustReminder_Apr26
TITAN_Conv_Prospect-Peptide_CategoryEdu_Apr26
TITAN_Conv_Lookalike-Purchasers_BPC157Lead_May26
```

---

## Measurement & Optimization Schedule

### Week 1–2: Learning Phase
- Do NOT touch budgets or audiences
- Monitor delivery, CPM, CTR
- Ensure pixel is firing correctly

### Week 3–4: First Optimization
- Kill ads with CTR < 0.8% and 1,000+ impressions
- Kill ad sets with CPA > 2x target after 500+ impressions
- Duplicate winning ads with copy variations

### Monthly: Scale
- Increase budget 20–30% on winning ad sets
- Test 2–3 new creative concepts
- Expand lookalike from 1% to 2–3% if 1% is converting
- Add new interest targeting based on learnings
