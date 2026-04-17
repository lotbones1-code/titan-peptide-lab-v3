#!/usr/bin/env node
// Programmatic Vercel deploy. Prefers the Vercel REST API (faster, non-interactive);
// falls back to the `vercel` CLI if VERCEL_TOKEN isn't present.
//
// Required env (API path):
//   VERCEL_TOKEN       — Vercel personal token (Vercel → Account Settings → Tokens)
//   VERCEL_PROJECT_ID  — project id
//   VERCEL_ORG_ID      — team/user id (vercel.com/teams/.../settings)
//
// Optional:
//   DEPLOY_TARGET=production   (default: production)
//
// Usage:
//   pnpm run deploy
//   DEPLOY_TARGET=preview pnpm run deploy

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

function loadEnvFile() {
  // Pull VERCEL_* out of the root .env (openclawv2/.env) if not already in process.env.
  const envPath = path.resolve(ROOT, "..", ".env");
  if (!fs.existsSync(envPath)) return;
  const text = fs.readFileSync(envPath, "utf8");
  for (const line of text.split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (!m) continue;
    const [, k, v] = m;
    if (!(k in process.env) && (k.startsWith("VERCEL_") || k === "DEPLOY_TARGET")) {
      process.env[k] = v.replace(/^['"]|['"]$/g, "");
    }
  }
}

async function apiDeploy() {
  const token = process.env.VERCEL_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID;
  const orgId = process.env.VERCEL_ORG_ID;
  const target = process.env.DEPLOY_TARGET || "production";

  if (!token || !projectId) return false;

  const url =
    "https://api.vercel.com/v13/deployments" +
    (orgId ? `?teamId=${encodeURIComponent(orgId)}` : "");

  const body = {
    name: "titan-peptide-lab-v3",
    project: projectId,
    target,
    // Minimal hook deploy — relies on the project's Git connection to fetch the ref.
    gitSource: process.env.VERCEL_GIT_REF
      ? { type: "github", ref: process.env.VERCEL_GIT_REF, repoId: process.env.VERCEL_GIT_REPO_ID }
      : undefined,
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error("[deploy] Vercel API error:", res.status, data);
    return false;
  }
  console.log(`[deploy] Vercel API → ${target} | url=https://${data.url}`);
  return true;
}

function cliDeploy() {
  const target = process.env.DEPLOY_TARGET || "production";
  const flag = target === "production" ? "--prod" : "";
  const r = spawnSync("vercel", flag ? [flag, "--yes"] : ["--yes"], {
    cwd: ROOT,
    stdio: "inherit",
  });
  if (r.status !== 0) {
    console.error("[deploy] vercel CLI exited with", r.status);
    process.exit(r.status || 1);
  }
}

async function main() {
  loadEnvFile();
  // Regenerate catalog so no stale data makes it to the build context.
  spawnSync("node", [path.join("scripts", "generate-catalog.mjs")], {
    cwd: ROOT,
    stdio: "inherit",
  });
  const ok = await apiDeploy();
  if (!ok) {
    console.log("[deploy] falling back to vercel CLI (set VERCEL_TOKEN + VERCEL_PROJECT_ID for API path)");
    cliDeploy();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
