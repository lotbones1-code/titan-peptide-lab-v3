#!/usr/bin/env node
// Scaffold a new Next.js page programmatically.
// Usage:
//   pnpm run add:page -- \
//     --slug=bulk-discounts \
//     --title="Bulk Discounts" \
//     --headline="Volume pricing for research labs" \
//     --body="Full body paragraph..."
//
// Creates: src/app/<slug>/page.tsx using the site <Nav /> + <Footer /> wrappers.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

function parseArgs(argv) {
  const out = {};
  for (const a of argv) {
    const m = a.match(/^--([^=]+)(?:=(.*))?$/);
    if (m) out[m[1]] = m[2] === undefined ? true : m[2];
  }
  return out;
}

function esc(s) {
  return String(s).replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

const args = parseArgs(process.argv.slice(2));
for (const k of ["slug", "title", "headline"]) {
  if (!args[k]) {
    console.error(`[add:page] missing --${k}`);
    process.exit(2);
  }
}

const body = args.body || "";
const dir = path.join(ROOT, "src", "app", args.slug);
fs.mkdirSync(dir, { recursive: true });

const file = path.join(dir, "page.tsx");
const tsx = `import type { Metadata } from "next";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: \`${esc(args.title)}\`,
  description: \`${esc(args.headline)}\`,
};

export default function Page() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-4xl font-semibold tracking-tight">${esc(args.title)}</h1>
        <p className="mt-4 text-lg text-muted-foreground">${esc(args.headline)}</p>
        <div className="mt-8 prose prose-invert max-w-none">
          <p>${esc(body)}</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
`;

fs.writeFileSync(file, tsx);
console.log(`[add:page] wrote ${path.relative(ROOT, file)}`);
