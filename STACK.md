# Titan Peptide Lab — Auto-Build Stack

API-driven site: products, pages, and promos live as JSON under `/content/`.
Scripts mutate those files, regenerate the catalog, and trigger a Vercel deploy.
Zero hand-editing of component code to push new inventory or landing pages.

## One-command workflows

```bash
# Add a product — auto-slugs from name, regenerates catalog.
pnpm run add:product -- \
  --id=tesamorelin-vial \
  --name="Tesamorelin" \
  --category=injectable \
  --price=129.99 \
  --compareAt=149.99 \
  --size="2mg lyophilized" \
  --tagline="GHRH analog research" \
  --description="Full description..." \
  --benefits="Benefit 1|Benefit 2|Benefit 3" \
  --image=/products/tesamorelin-vial.png \
  --newArrival

# Remove a product
pnpm run remove:product -- --id=tesamorelin-vial

# Drop a promo banner (consumed by any component reading PROMOS)
pnpm run add:promo -- --id=spring25 --headline="Spring — 25% off" --code=SPRING25 --expires=2026-05-01 --active

# Scaffold a new static page
pnpm run add:page -- --slug=bulk-discounts --title="Bulk Discounts" --headline="Volume pricing for labs" --body="..."

# Commit + deploy everything
pnpm run push -- -m "Spring refresh: +tesamorelin, promo banner"
```

## Pipeline

```
/content/*.json  ──►  scripts/generate-catalog.mjs  ──►  src/lib/products.data.ts
                                                                │
                     (prebuild / predev hook auto-runs)         ▼
                                                      next build  ──►  Vercel
```

`src/lib/products.ts` re-exports the generated data with typed wrappers so every
component keeps its existing import path.

## Stack layers

| Layer        | Tool                    | Status                               |
|--------------|-------------------------|--------------------------------------|
| UI / pages   | Next.js 16 + React 19   | Live                                 |
| Styling      | Tailwind v4 + shadcn    | Live                                 |
| Animation    | Motion (framer)         | Live                                 |
| Components   | Magic UI (border-beam, shimmer, marquee, aurora-text, number-ticker) | Live |
| Content      | File-based JSON + codegen | Live (this commit)                  |
| CMS (remote) | Sanity                  | Scaffolded — add SANITY_PROJECT_ID to activate |
| Commerce     | Medusa.js               | Scaffolded at `../titan-peptide-lab-v3-backend` |
| Deploy       | Vercel API + CLI fallback | Scaffolded — add VERCEL_TOKEN to enable API path |

## Adding more premium components

Use shadcn CLI — pulls source straight into `src/components/ui/` so nothing is
locked behind a registry:

```bash
npx shadcn@latest add https://magicui.design/r/bento-grid
npx shadcn@latest add https://magicui.design/r/animated-list
npx shadcn@latest add https://magicui.design/r/retro-grid
# Aceternity:
npx shadcn@latest add https://ui.aceternity.com/registry/spotlight.json
```

**Caution** — the repo has a feedback rule against shipping the AI-template
fingerprint (AuroraText + BorderBeam + ShimmerButton + fake stats + 4-icon
grid + Geist-only). Add components, but don't stack the whole fingerprint
on one page.

## Turning on Sanity (remote CMS)

1. Create a project at sanity.io → copy the Project ID.
2. Add to `openclawv2/.env`:
   ```
   SANITY_PROJECT_ID=<id>
   SANITY_DATASET=production
   SANITY_TOKEN=<write token>
   ```
3. `pnpm add sanity @sanity/client next-sanity`
4. Start the studio: `pnpm exec sanity dev --project <id>`
5. Pull edits back into git before deploy: `pnpm run sync && pnpm run push`
   (using `scripts/sync-from-sanity.mjs`)

Design choice: Sanity is the editor UI, but `/content/*.json` remains the
single source of truth that Vercel builds from. Keeps builds deterministic,
avoids runtime API dependencies, and leaves a git audit trail.

## Turning on Medusa (checkout)

See `../titan-peptide-lab-v3-backend/README.md`.

TL;DR: `docker compose up -d` → `npx create-medusa-app@latest --skip-db --seed .`
→ frontend adds `@medusajs/js-sdk` for cart/checkout pages. Manual crypto
provider is the default (peptides are high-risk MCC); Coinbase Commerce is
wired and commented in `medusa-config.ts`.

## Vercel deploy

Two paths:
1. **API (preferred, non-interactive)** — set `VERCEL_TOKEN` +
   `VERCEL_PROJECT_ID` (and `VERCEL_ORG_ID` if team account) in
   `openclawv2/.env`. `scripts/deploy.mjs` uses the REST API directly.
2. **CLI fallback** — if the env vars aren't present, falls back to
   `vercel --prod --yes`.

```bash
pnpm run deploy              # production
DEPLOY_TARGET=preview pnpm run deploy
```
