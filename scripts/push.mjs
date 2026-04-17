#!/usr/bin/env node
// Full publish: regenerate catalog → git commit any content changes → vercel deploy.
// Usage: pnpm run push -- -m "Add tesamorelin + spring promo"
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

function run(cmd, args, opts = {}) {
  return spawnSync(cmd, args, { cwd: ROOT, stdio: "inherit", ...opts });
}

const msgIdx = process.argv.indexOf("-m");
const msg =
  msgIdx >= 0 && process.argv[msgIdx + 1]
    ? process.argv[msgIdx + 1]
    : `chore(content): publish catalog ${new Date().toISOString()}`;

run("node", ["scripts/generate-catalog.mjs"]);

const st = spawnSync("git", ["status", "--porcelain", "content/", "src/lib/products.data.ts"], {
  cwd: ROOT,
  encoding: "utf8",
});
if (st.stdout && st.stdout.trim().length > 0) {
  run("git", ["add", "content/", "src/lib/products.data.ts"]);
  run("git", ["commit", "-m", msg]);
} else {
  console.log("[push] no content changes to commit");
}

run("node", ["scripts/deploy.mjs"]);
