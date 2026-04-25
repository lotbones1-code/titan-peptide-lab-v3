# Lead Magnet Implementation — Nasal Peptide Protocol Guide

## Goal

Convert homepage and research-page traffic into email subscribers by
offering the Nasal Peptide Protocol Guide (PDF) in exchange for an email
address. The guide is research-voiced and compliance-aligned, so it can
sit on the same site that is selling research compounds without creating
ad-platform risk.

Compliance framing (from `paid-ads/compliance-guide.md`): positioning is
laboratory supplier, not health/supplement brand. Copy should use
"research", "literature", "references". Never "protocol for you", "dose",
"benefits", "supplement", or outcome language.

---

## 1. Email capture placements

Three placements, each with a different intent.

### A. Hero — inline capture

- **Where.** Homepage hero section, under the subhead and above (or
  alongside) the primary CTA. Sits next to "shop research compounds" so
  users who aren't ready to buy still convert.
- **Headline.** "The Nasal Peptide Protocol Guide — 35 studies, 5
  compounds, free research reference."
- **Subhead.** "A citation-first reference on intranasal BPC-157, DSIP,
  Selank, and Oxytocin. PubMed IDs throughout. For researchers."
- **Fields.** Email only. First name optional (Klaviyo split-test later).
- **Button.** "Send me the guide." (Not "get access", not "unlock".)
- **Microcopy.** "Research-use-only reference. No marketing emails we
  wouldn't read ourselves. Unsubscribe anywhere."

### B. Exit intent — modal

- **Trigger.** Mouse moves toward browser chrome on desktop; scroll-up
  velocity threshold on mobile; 45-second idle on product or research
  pages.
- **Display cap.** Once per 30 days per visitor (localStorage).
- **Suppress on.** Cart, checkout, account, and any page where the visitor
  has already submitted the form or is logged in.
- **Copy.** Short. "Before you go — the Nasal Peptide Protocol Guide. 35
  references. Free. Email it to yourself." Single input, single button.

### C. Footer — persistent opt-in

- **Where.** Global footer, above the legal/compliance line.
- **Copy.** "Research reference library — monthly summaries of new peptide
  literature. Free PDF guide on signup."
- Acts as the long-tail capture for repeat visitors who skipped the hero.

### D. Research-page inline (bonus)

- Bottom of every `/research/*` page.
- **Copy.** "This page references seven studies. The full Nasal Peptide
  Protocol Guide cites 35. Free PDF."
- Converts the highest-intent, highest-literacy audience on the site.

### E. Site plumbing

- Build a single `<LeadMagnetForm variant="hero|modal|footer|inline" />`
  component in `src/components/` that posts to a `/api/lead` route. Route
  forwards to Klaviyo via Klaviyo Subscribe API (server-side, server token
  in env). On success, triggers Klaviyo flow and returns a signed URL to
  the PDF so the user can download immediately without waiting for email.
- All captures tagged with `source` and UTM params so Klaviyo flows can
  personalize.

---

## 2. Five-email welcome sequence

Sent as a Klaviyo flow triggered by "Subscribed to Nasal Peptide Guide"
list membership. Researcher voice. No emojis. No urgency. Every email
links back to site but does not hard-sell.

### Email 1 — Delivery (send: immediately, 0h)

- **Subject.** "Your Nasal Peptide Protocol Guide (PDF attached)"
- **Preheader.** "35 citations, 5 compounds, and what the literature
  doesn't yet answer."
- **Key points.**
  - Deliver the PDF (link + attachment).
  - One-paragraph summary of how the guide is structured.
  - Explicit: "This is a research reference. It is not a dosing guide."
  - Soft CTA: "If you want to go deeper on any single compound, our
    research pages have the detailed mechanistic writeups."
- **Links.** PDF, /research/ index.

### Email 2 — Why intranasal (send: +2 days)

- **Subject.** "Why intranasal — a short mechanistic note"
- **Preheader.** "The case for the nasal route, and where it's
  overstated."
- **Key points.**
  - 400-word excerpt on the olfactory/trigeminal CNS pathway.
  - Cite Illum 2003, Born 2002, Dhuria 2010, Leng & Ludwig 2016.
  - Note the honest limit: <1% of dose to CNS targets for most peptides.
  - Link to the BPC-157 research page as the next step for anyone focused
    on peripheral healing, and the Selank page for anyone focused on CNS.
- **CTA.** "Read the full nasal-delivery section of the guide."

### Email 3 — Sourcing and quality (send: +5 days)

- **Subject.** "How to read a peptide COA"
- **Preheader.** "Chromatograms, mass-spec, and the red flags that
  matter."
- **Key points.**
  - 300-word extract from section 11 of the guide.
  - What HPLC ≥99% actually means when a chromatogram is present vs.
    absent.
  - Mass-spec confirmation as sequence identity evidence.
  - Lot-matched COAs.
  - Sentence on Titan's COA practices with a link to a sample lot-matched
    COA page. (This is the first "we exist" email.)
- **CTA.** "See a sample COA." (Not "buy now".)

### Email 4 — What the literature doesn't answer (send: +9 days)

- **Subject.** "What the peptide literature still doesn't answer"
- **Preheader.** "An honest list. Because most marketing pretends these
  are resolved."
- **Key points.**
  - Adapted from section 12 of the guide.
  - Pulls quotes from Kovalzon & Strekalova ("still unresolved riddle") and
    Leng & Ludwig ("myths and delusions").
  - Frames Titan's position: we sell research chemicals, we think
    researchers deserve honest framing of what is known and unknown.
  - Distinguishes the brand from supplement companies making confident
    claims.
- **CTA.** Soft. Link to research index.

### Email 5 — Research-page deep dives + soft compound offer (send: +14 days)

- **Subject.** "Five compound pages worth reading"
- **Preheader.** "Mechanism, evidence, limitations — per compound."
- **Key points.**
  - Short paragraph per compound (BPC-157, DSIP, Selank, Oxytocin, +
    Semax and PT-141 as extras since research pages exist).
  - Each links to its research page.
  - Closes with a one-paragraph, non-pushy note that Titan carries
    research-grade formulations of each, lot-tested, documented. "If
    you're the researcher these would be useful to, you know where we
    are." Single link to shop.
- **CTA.** "Browse research compounds." First and only direct sell CTA
  in the sequence.

After email 5, subscribers graduate to the general "Research Reference"
list (monthly literature summary), which is a low-frequency retention
list, not a sales list.

---

## 3. Klaviyo flow structure

### Lists

- **List A — Nasal Peptide Guide subscribers** (entry list for the
  welcome sequence).
- **List B — Research Reference monthly** (long-term list, graduated
  subscribers + general newsletter opt-ins).

### Segments

- **Engaged readers.** Opened 3+ of the 5 welcome emails. Higher
  priority for monthly research sends.
- **Clicked shop CTA.** Tagged for a short (2-email) "first order"
  re-engagement flow that reinforces sourcing/quality messaging without
  discounting.
- **Purchased.** Suppressed from welcome series after email 1; moved
  into post-purchase flow.

### Flows to build (priority order)

1. **Nasal Peptide Guide welcome (5 emails, above).** Trigger: added to
   List A.
2. **Research Reference monthly campaign.** Not a flow — a monthly
   manually-reviewed campaign. 600 words, 3 new studies summarized, no
   product links in the body, single footer shop link.
3. **Abandoned product-page flow.** For guide subscribers who visited a
   product page and did not add to cart. Single email at 48h referencing
   the matching research page (not the product).
4. **Abandoned cart.** Standard 3-email flow (1h, 24h, 72h). First two
   have no discount; third carries a modest research-discount framing
   ("10% off your first order — use code RESEARCH10").
5. **Post-purchase.** Day 0 thanks + lot COA link. Day 7 storage and
   stability (pulled from section 10 of the guide). Day 30 review
   request.

### Compliance settings

- In every email footer: physical address, unsubscribe, and
  "research-use-only" line.
- No health claims in any copy. Subject-line and body copy reviewed
  against `paid-ads/compliance-guide.md` rules.
- Klaviyo "Smart Sending" enabled globally to avoid over-contact.

---

## 4. PDF generation approach

### Recommendation: Puppeteer-based HTML → PDF

**Why puppeteer.** The Next.js site already uses a serious typography and
design system. Rendering the guide as an HTML page styled to match the
site, then printing to PDF with puppeteer, gives us a deliverable that
looks like an extension of the brand — not a generic marked-up document.
Alternatives (`md-to-pdf`, `pandoc`, Typst) produce acceptable PDFs but
lose the visual continuity that matters for a premium brand.

### Implementation

1. **Create a print-view route.** `src/app/guide/nasal-peptide-protocol/page.tsx`
   that server-renders the guide content with a `@media print` stylesheet
   tuned for PDF. Content is sourced from
   `marketing/lead-magnet-nasal-peptide-guide.md` parsed with
   `remark`/`rehype` at build time (already part of Next.js ecosystem).
2. **Add a build script.** `scripts/build-guide-pdf.mjs`:
   ```js
   // pseudocode
   import puppeteer from 'puppeteer';
   const browser = await puppeteer.launch();
   const page = await browser.newPage();
   await page.goto('http://localhost:3000/guide/nasal-peptide-protocol?print=1');
   await page.pdf({
     path: 'public/downloads/nasal-peptide-protocol-guide.pdf',
     format: 'Letter',
     printBackground: true,
     margin: { top: '0.75in', bottom: '0.75in', left: '0.75in', right: '0.75in' },
     displayHeaderFooter: true,
     headerTemplate: '<div style="font-size:9px;width:100%;text-align:center;color:#888;">Titan Peptide Lab — Nasal Peptide Protocol Guide</div>',
     footerTemplate: '<div style="font-size:9px;width:100%;text-align:center;color:#888;">Page <span class="pageNumber"></span> of <span class="totalPages"></span> · For research purposes only · titanpeptidelab.com</div>',
   });
   await browser.close();
   ```
3. **Wire into CI.** Add `pnpm run build:guide` to the build pipeline so
   the PDF is regenerated whenever the source markdown changes. Commit
   the generated PDF to `public/downloads/` so it is served as a static
   asset.
4. **Serve the PDF.** From `/downloads/nasal-peptide-protocol-guide.pdf`
   directly (no gating — gating is at the form, and the email link
   points here). Add a signed-URL variant for the immediate post-signup
   download so the public URL isn't the primary share vector.

### Design notes

- Cover page: brand wordmark, title, short subtitle, research-use-only
  line, publication date.
- Table of contents on page 2.
- Section headers in the same typeface as the website (Geist or the
  site's current display face), numbered to match the markdown.
- Citations rendered as a numbered reference list at the back, with
  PubMed hyperlinks active in the PDF (puppeteer preserves anchors).
- Page count target: 18-22 pages at 11pt body, 1.5 leading.

### Fallback (if puppeteer is overkill)

`npx md-to-pdf marketing/lead-magnet-nasal-peptide-guide.md` with a
custom CSS file matching brand colors. Faster to set up, less
design control, acceptable for v1.

---

## 5. Measurement

Track in Klaviyo + the site analytics:

- Capture rate per placement (hero / exit / footer / research inline).
- Welcome-sequence open and click rates per email.
- Subscribers → first-order conversion rate, and median days from
  subscribe to first order.
- Per-source LTV over a 90-day rolling window.

Revisit copy and placement after the first 500 submissions or 30 days,
whichever comes first. The hero capture carries the most traffic — A/B
the headline there first.

---

## 6. Ship order

1. Write the guide (done — `lead-magnet-nasal-peptide-guide.md`).
2. Build the `/guide/nasal-peptide-protocol` print-view route.
3. Add the puppeteer PDF build script and run it.
4. Build `<LeadMagnetForm />` + `/api/lead` route + Klaviyo integration.
5. Place the form on hero, footer, research-page inline, and wire the
   exit-intent modal.
6. Build the 5-email Klaviyo welcome flow; QA the full series.
7. Launch. Watch capture rate and welcome-series engagement for 7 days.
   Adjust.
