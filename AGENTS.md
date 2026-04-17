<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Content is API-driven — don't hand-edit product/page code

Product catalog, brand config, and promo banners live under `/content/*.json`.
A build-time codegen step (`scripts/generate-catalog.mjs`, wired via
`prebuild`/`predev`) writes `src/lib/products.data.ts`. Components import from
`src/lib/products.ts`, which re-exports the generated data with TypeScript
wrappers.

**Never hand-edit `src/lib/products.data.ts`** — it's regenerated on every
build. Modify `/content/*.json` instead, or use one of the CLI scripts:

```bash
pnpm run add:product -- --id=... --name=... --category=... --price=... ...
pnpm run remove:product -- --id=...
pnpm run add:promo -- --id=... --headline=... --active
pnpm run add:page -- --slug=... --title=... --headline=... --body=...
pnpm run push -- -m "commit msg"    # gen + git commit + vercel deploy
pnpm run deploy                     # vercel-only
```

See `STACK.md` for the full auto-build pipeline (content → codegen → Next →
Vercel) and how to activate Sanity (remote CMS) + Medusa (commerce API) when
those layers are needed.
