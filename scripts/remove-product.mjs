#!/usr/bin/env node
// Remove a product by id. Usage: pnpm run remove:product -- --id=retatrutide
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const id = process.argv.find((a) => a.startsWith("--id="))?.split("=")[1];
if (!id) {
  console.error("[remove:product] missing --id=<product-id>");
  process.exit(2);
}

const file = path.join(ROOT, "content", "products", `${id}.json`);
if (!fs.existsSync(file)) {
  console.error(`[remove:product] ${id}.json not found`);
  process.exit(1);
}
fs.unlinkSync(file);
console.log(`[remove:product] deleted ${id}.json`);

spawnSync("node", [path.join("scripts", "generate-catalog.mjs")], {
  cwd: ROOT,
  stdio: "inherit",
});
