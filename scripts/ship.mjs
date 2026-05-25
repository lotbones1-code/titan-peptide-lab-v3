#!/usr/bin/env node
// Ship CLI — full flow: build → sync to GH Pages repo → commit → push.
// Usage:
//   pnpm run ship                                 # uses default message
//   pnpm run ship -- -m "redesign: white palette" # custom commit message
//
// Target repo: ~/titanpeptidelab-source (git remote lotbones1-code/titanpeptidelab)
// Serves: https://www.titanpeptidelab.com (via CNAME)

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PAGES_REPO = path.join(os.homedir(), "titanpeptidelab-source");

function run(cmd, args, opts = {}) {
  const r = spawnSync(cmd, args, { stdio: "inherit", ...opts });
  if (r.status !== 0) {
    console.error(`[ship] ${cmd} ${args.join(" ")} → exit ${r.status}`);
    process.exit(r.status || 1);
  }
  return r;
}

function getMessage() {
  const i = process.argv.indexOf("-m");
  if (i >= 0 && process.argv[i + 1]) return process.argv[i + 1];
  const stamp = new Date().toISOString().slice(0, 16).replace("T", " ");
  return `deploy: titan-peptide-lab-v3 ${stamp}`;
}

function preservedFiles(dir) {
  // Things that must NOT be wiped when syncing out/ → pages repo.
  // Preserve _next/static across deploys. GitHub Pages/CDN/Safari can briefly
  // hold HTML that references the previous hashed CSS/JS files; deleting those
  // assets makes cached pages render as raw unstyled HTML.
  return new Set([".git", "CNAME", ".nojekyll", "_next"]);
}

function wipePagesRepo() {
  if (!fs.existsSync(PAGES_REPO)) {
    console.error(`[ship] pages repo not found at ${PAGES_REPO}`);
    console.error("       clone it first: git clone https://github.com/lotbones1-code/titanpeptidelab.git ~/titanpeptidelab-source");
    process.exit(1);
  }
  const keep = preservedFiles(PAGES_REPO);
  for (const entry of fs.readdirSync(PAGES_REPO)) {
    if (keep.has(entry)) continue;
    fs.rmSync(path.join(PAGES_REPO, entry), { recursive: true, force: true });
  }
}

function copyTree(src, dst) {
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dst, entry.name);
    if (entry.isDirectory()) {
      fs.mkdirSync(d, { recursive: true });
      copyTree(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  }
}

function main() {
  const msg = getMessage();

  console.log("[ship] 1/5 generate catalog");
  run("node", [path.join("scripts", "generate-catalog.mjs")], { cwd: ROOT });

  console.log("[ship] 2/5 next build (static export)");
  run("npx", ["next", "build", "--webpack"], { cwd: ROOT });

  const outDir = path.join(ROOT, "out");
  if (!fs.existsSync(outDir)) {
    console.error(`[ship] out/ missing after build: ${outDir}`);
    process.exit(1);
  }

  console.log(`[ship] 3/5 sync out/ → ${PAGES_REPO}`);
  wipePagesRepo();
  copyTree(outDir, PAGES_REPO);
  // GitHub Pages needs .nojekyll so _next/ assets serve.
  fs.writeFileSync(path.join(PAGES_REPO, ".nojekyll"), "");

  console.log("[ship] 4/5 commit");
  const status = spawnSync("git", ["status", "--porcelain"], { cwd: PAGES_REPO, encoding: "utf8" });
  if (!status.stdout || status.stdout.trim().length === 0) {
    console.log("[ship] no changes — pages repo already up to date");
    return;
  }
  run("git", ["add", "-A"], { cwd: PAGES_REPO });
  run("git", [
    "-c", "user.name=shamil",
    "-c", "user.email=shamil@local",
    "commit", "-m", msg,
  ], { cwd: PAGES_REPO });

  console.log("[ship] 5/5 push");
  run("git", ["push", "origin", "main"], { cwd: PAGES_REPO });

  console.log(`[ship] ✅ live → https://www.titanpeptidelab.com  (msg: ${msg})`);
}

main();
