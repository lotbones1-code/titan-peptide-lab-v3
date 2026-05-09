#!/usr/bin/env node
/**
 * Asset-lock guard.
 *
 * Reads .asset-lock.json at repo root. For each locked asset: compute current
 * sha256, compare to manifest. If any mismatch (or missing file), the commit
 * is rejected unless the commit message contains the override token
 * `ASSET-LOCK-OVERRIDE: <reason>`.
 *
 * Invocation modes:
 *   - Pre-commit hook:  node scripts/asset-lock-check.mjs
 *       Reads commit message from $1 if passed, else from .git/COMMIT_EDITMSG.
 *   - Standalone audit: node scripts/asset-lock-check.mjs --audit
 *       Just reports drift; never fails. Useful for CI dashboards.
 *
 * Exit codes:
 *   0  all good (or override present, or --audit)
 *   1  drift detected and no override token in commit message
 *   2  manifest unreadable / malformed
 */

import { readFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REPO_ROOT = resolve(__dirname, "..");
const MANIFEST_PATH = resolve(REPO_ROOT, ".asset-lock.json");
const OVERRIDE_TOKEN = "ASSET-LOCK-OVERRIDE:";

function colorize(s, code) {
  if (!process.stdout.isTTY) return s;
  return `\u001b[${code}m${s}\u001b[0m`;
}
const red = (s) => colorize(s, "31");
const yellow = (s) => colorize(s, "33");
const green = (s) => colorize(s, "32");
const bold = (s) => colorize(s, "1");

function loadManifest() {
  if (!existsSync(MANIFEST_PATH)) {
    console.error(red(`[asset-lock] manifest missing: ${MANIFEST_PATH}`));
    process.exit(2);
  }
  try {
    const raw = readFileSync(MANIFEST_PATH, "utf8");
    const m = JSON.parse(raw);
    if (!Array.isArray(m.assets)) {
      console.error(red("[asset-lock] manifest .assets must be an array"));
      process.exit(2);
    }
    return m;
  } catch (e) {
    console.error(red(`[asset-lock] manifest parse failed: ${e.message}`));
    process.exit(2);
  }
}

function sha256OfFile(absPath) {
  const buf = readFileSync(absPath);
  return createHash("sha256").update(buf).digest("hex");
}

function readCommitMessage(argv) {
  // 1) Husky/git pass commit-msg file path as $1 in commit-msg hook;
  //    in pre-commit, no arg is passed but we can read .git/COMMIT_EDITMSG.
  // 2) Allow override via env ASSET_LOCK_COMMIT_MSG for testing.
  if (process.env.ASSET_LOCK_COMMIT_MSG !== undefined) {
    return process.env.ASSET_LOCK_COMMIT_MSG;
  }
  const argPath = argv.find((a) => a && !a.startsWith("--"));
  if (argPath && existsSync(argPath)) {
    try { return readFileSync(argPath, "utf8"); } catch {}
  }
  const editMsg = resolve(REPO_ROOT, ".git", "COMMIT_EDITMSG");
  if (existsSync(editMsg)) {
    try { return readFileSync(editMsg, "utf8"); } catch {}
  }
  // Fallback: try reading the last in-progress message via git
  try {
    return execSync("git log -1 --pretty=%B", { cwd: REPO_ROOT, stdio: ["ignore", "pipe", "ignore"] })
      .toString();
  } catch {
    return "";
  }
}

function main() {
  const argv = process.argv.slice(2);
  const auditOnly = argv.includes("--audit");
  const manifest = loadManifest();

  const drift = [];
  for (const a of manifest.assets) {
    const abs = resolve(REPO_ROOT, a.path);
    if (!existsSync(abs)) {
      drift.push({ ...a, reason: "MISSING", actual: null });
      continue;
    }
    const actual = sha256OfFile(abs);
    if (actual !== a.sha256) {
      drift.push({ ...a, reason: "HASH_MISMATCH", actual });
    }
  }

  if (drift.length === 0) {
    console.log(green(`[asset-lock] ok — ${manifest.assets.length} locked assets unchanged (approver: ${manifest.approver || "n/a"}, locked_at: ${manifest.locked_at || "n/a"}).`));
    process.exit(0);
  }

  if (auditOnly) {
    console.log(yellow(`[asset-lock] drift detected (${drift.length}) — audit mode, not failing.`));
    for (const d of drift) {
      console.log(yellow(`  - ${d.path}: ${d.reason}${d.actual ? ` actual=${d.actual.slice(0, 12)}…` : ""}`));
    }
    process.exit(0);
  }

  const msg = readCommitMessage(argv);
  const overrideMatch = msg.match(/ASSET-LOCK-OVERRIDE:\s*([^\n]+)/);

  if (overrideMatch) {
    console.warn(yellow(bold(`[asset-lock] OVERRIDE accepted — ${drift.length} locked asset(s) changed.`)));
    console.warn(yellow(`  reason: ${overrideMatch[1].trim()}`));
    for (const d of drift) {
      console.warn(yellow(`  - ${d.path} (${d.reason})`));
    }
    console.warn(yellow(`[asset-lock] reminder: update .asset-lock.json sha256 in the SAME commit if the new state is the new approved baseline.`));
    process.exit(0);
  }

  console.error("");
  console.error(red(bold("✘ ASSET LOCK VIOLATION")));
  console.error(red(`  ${drift.length} locked asset(s) changed without approval.`));
  console.error("");
  for (const d of drift) {
    console.error(red(`  • ${bold(d.path)}`));
    console.error(red(`      reason   : ${d.reason}`));
    console.error(red(`      expected : ${d.sha256}`));
    if (d.actual) console.error(red(`      actual   : ${d.actual}`));
    if (d.note) console.error(red(`      note     : ${d.note}`));
  }
  console.error("");
  console.error(red(`  approver: ${manifest.approver || "shamilkch17"}   locked_at: ${manifest.locked_at || "n/a"}`));
  console.error("");
  console.error(yellow("  To override (escape-hatch):"));
  console.error(yellow(`    add this line to the commit message:`));
  console.error(yellow(`      ${OVERRIDE_TOKEN} <short reason naming the file>`));
  console.error(yellow("  To make the new state the new approved baseline:"));
  console.error(yellow("    update the sha256 in .asset-lock.json in the SAME commit (still requires override token on the swap commit)."));
  console.error("");
  process.exit(1);
}

main();
