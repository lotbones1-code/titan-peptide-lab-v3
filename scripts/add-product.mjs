#!/usr/bin/env node
// Add a product to the catalog via CLI flags (no hand-editing code).
// Usage:
//   pnpm run add:product -- \
//     --id=tesamorelin-vial \
//     --name="Tesamorelin (Vial)" \
//     --category=injectable \
//     --price=129.99 \
//     --compareAt=149.99 \
//     --size="2mg lyophilized" \
//     --tagline="GHRH analog" \
//     --description="Full description here." \
//     --benefits="GH axis|Body comp|99% purity|Ships w/ COA" \
//     --image=/products/tesamorelin-vial.png \
//     --featured --bestseller --newArrival
//
// Or pipe a JSON object on stdin:
//   cat product.json | pnpm run add:product -- --stdin
//
// After writing, the script optionally triggers `pnpm run deploy` if --deploy is passed.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PRODUCTS_DIR = path.join(ROOT, "content", "products");

function parseArgs(argv) {
  const out = {};
  for (const a of argv) {
    const m = a.match(/^--([^=]+)(?:=(.*))?$/);
    if (!m) continue;
    const [, k, v] = m;
    out[k] = v === undefined ? true : v;
  }
  return out;
}

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function validCategory(c) {
  return ["nasal-spray", "injectable", "oral", "stack"].includes(c);
}

async function readStdin() {
  return await new Promise((resolve, reject) => {
    let data = "";
    process.stdin.setEncoding("utf8");
    process.stdin.on("data", (c) => (data += c));
    process.stdin.on("end", () => resolve(data));
    process.stdin.on("error", reject);
  });
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  let product;

  if (args.stdin) {
    product = JSON.parse(await readStdin());
  } else {
    const required = ["id", "name", "category", "price", "size", "tagline", "description", "image"];
    for (const k of required) {
      if (args[k] === undefined) {
        console.error(`[add:product] missing required --${k}`);
        process.exit(2);
      }
    }
    if (!validCategory(args.category)) {
      console.error(`[add:product] invalid category (need one of nasal-spray|injectable|oral|stack)`);
      process.exit(2);
    }

    product = {
      id: args.id,
      slug: args.slug || slugify(args.name),
      name: args.name,
      category: args.category,
      price: Number(args.price),
      ...(args.compareAt !== undefined ? { compareAtPrice: Number(args.compareAt) } : {}),
      size: args.size,
      tagline: args.tagline,
      description: args.description,
      benefits: (args.benefits || "").split("|").filter(Boolean),
      image: args.image,
      ...(args.featured ? { featured: true } : {}),
      ...(args.bestseller ? { bestseller: true } : {}),
      ...(args.newArrival ? { newArrival: true } : {}),
    };
  }

  if (!product.id || !product.slug) {
    console.error("[add:product] product.id and product.slug are required");
    process.exit(2);
  }

  fs.mkdirSync(PRODUCTS_DIR, { recursive: true });
  const file = path.join(PRODUCTS_DIR, `${product.id}.json`);
  fs.writeFileSync(file, JSON.stringify(product, null, 2) + "\n");
  console.log(`[add:product] wrote ${path.relative(ROOT, file)}`);

  // Regenerate the data module so dev/build immediately sees it.
  spawnSync("node", [path.join("scripts", "generate-catalog.mjs")], {
    cwd: ROOT,
    stdio: "inherit",
  });

  if (args.deploy) {
    spawnSync("node", [path.join("scripts", "deploy.mjs")], { cwd: ROOT, stdio: "inherit" });
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
