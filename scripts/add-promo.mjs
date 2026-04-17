#!/usr/bin/env node
// Add or update a promo banner via CLI. Consumed by components that read from PROMOS.
// Usage:
//   pnpm run add:promo -- --id=spring25 --headline="Spring sale — 25% off" --code=SPRING25 --expires=2026-05-01 --active

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIR = path.join(ROOT, "content", "promos");

function parseArgs(argv) {
  const out = {};
  for (const a of argv) {
    const m = a.match(/^--([^=]+)(?:=(.*))?$/);
    if (m) out[m[1]] = m[2] === undefined ? true : m[2];
  }
  return out;
}

const args = parseArgs(process.argv.slice(2));
if (!args.id || !args.headline) {
  console.error("[add:promo] require --id and --headline");
  process.exit(2);
}

fs.mkdirSync(DIR, { recursive: true });
const promo = {
  id: args.id,
  headline: args.headline,
  ...(args.body ? { body: args.body } : {}),
  ...(args.code ? { code: args.code } : {}),
  ...(args.expires ? { expiresAt: args.expires } : {}),
  active: !!args.active,
};
fs.writeFileSync(path.join(DIR, `${args.id}.json`), JSON.stringify(promo, null, 2) + "\n");
console.log(`[add:promo] wrote ${args.id}.json (active=${promo.active})`);

spawnSync("node", [path.join("scripts", "generate-catalog.mjs")], {
  cwd: ROOT,
  stdio: "inherit",
});
