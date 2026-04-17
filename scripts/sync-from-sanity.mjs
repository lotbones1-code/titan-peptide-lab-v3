#!/usr/bin/env node
// Pull products/pages/promos from Sanity → /content/*.json, so the file-based
// build pipeline remains the single source of truth for what Vercel deploys.
//
// Requires in openclawv2/.env:
//   SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (read)
//
// Run before `pnpm run push` to pick up remote edits:
//   pnpm run sync && pnpm run push

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

function loadEnv() {
  const envPath = path.resolve(ROOT, "..", ".env");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && m[1].startsWith("SANITY_") && !(m[1] in process.env)) {
      process.env[m[1]] = m[2].replace(/^['"]|['"]$/g, "");
    }
  }
}

async function queryGroq(groq) {
  const { SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN } = process.env;
  if (!SANITY_PROJECT_ID || !SANITY_DATASET) {
    throw new Error("SANITY_PROJECT_ID + SANITY_DATASET required");
  }
  const url =
    `https://${SANITY_PROJECT_ID}.api.sanity.io/v2024-01-01/data/query/` +
    `${SANITY_DATASET}?query=${encodeURIComponent(groq)}`;
  const res = await fetch(url, {
    headers: SANITY_TOKEN ? { Authorization: `Bearer ${SANITY_TOKEN}` } : {},
  });
  if (!res.ok) throw new Error(`Sanity query failed ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return data.result || [];
}

function writeJson(rel, obj) {
  const p = path.join(ROOT, "content", rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + "\n");
}

async function main() {
  loadEnv();
  if (!process.env.SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID === "REPLACE_ME") {
    console.log("[sync] SANITY_PROJECT_ID not set — skipping. File-based content is still the source of truth.");
    return;
  }

  const products = await queryGroq(`*[_type == "product"]{id, "slug": slug.current, name, category, price, compareAtPrice, size, tagline, description, benefits, "image": image.asset->url, featured, bestseller, newArrival}`);
  for (const p of products) writeJson(`products/${p.id}.json`, p);
  console.log(`[sync] pulled ${products.length} products`);

  const promos = await queryGroq(`*[_type == "promo"]{id, headline, body, code, expiresAt, active}`);
  for (const p of promos) writeJson(`promos/${p.id}.json`, p);
  console.log(`[sync] pulled ${promos.length} promos`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
