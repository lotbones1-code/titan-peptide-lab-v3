# Tier-0 Honesty — Stale `out.noindex` Tracked-Artifact Hygiene (AE-0007g)

**Run:** Autonomous Empire Build, Phase 5, slice AE-0007g
**When:** 2026-06-17 ~19:55 MDT (2026-06-18 ~01:55 UTC)
**Repo:** `titan-peptide-lab-v3`, branch `trust/coa-claims-honesty-ae0007`
**Commit:** `68b21fe` — source/repo-only, **deploy-gated (NOT shipped)**
**Status:** COMPLETE + verified on disk. Loop: build → codexclaw + Hermes adversarial review → judge → fix → verify.

## What this fixed (the real risk)

The AE-0007f corroboration run flagged a stale tracked build artifact. Confirmed and closed it:

- `out.noindex/` was committed **once** in old commit `b5d296b` ("v27") and **never regenerated since**.
- It was git-tracked: **347 files, 148 carrying pre-honesty-sweep "HPLC-verified ≥99% purity" guarantee phrasings** that the sweep already removed from live source and from the deployed `out/`.
- **Nothing references it.** `scripts/ship.mjs` deploys only `out/` (`outDir = ROOT/out`, ship.mjs:76/82; writes `.nojekyll` :85). No `.github/` CI. The live Pages repo `~/titanpeptidelab-source` has no `out.noindex` dependency. `.noindex` / `.metadata_never_index` are macOS Spotlight signals only — no Next/Pages meaning.

### Fix (mirrors how `/out/` is handled)
1. `git rm -r --cached out.noindex` — untracked 347 files (stayed on disk).
2. Added `/out.noindex/` to `.gitignore` (next to `/out/`) **and** `/.tmp/` (local scratch).
3. Deleted the local `out.noindex/` cruft — **recoverable** via `git checkout b5d296b -- out.noindex`.

### Verified on disk (before logging COMPLETE)
- tracked `out.noindex` = **0** · on disk = **GONE** · recoverable from `b5d296b` = **YES**
- `/out.noindex/` + `/.tmp/` ignore rules **committed** · `out/` deploy source **untouched (709 files)**, still gitignored
- tracked files **596 → 249** (exactly 347 removed) · **working tree clean** · `next.config.ts output:"export"` produces `out/`, never `out.noindex`
- pre-commit asset-lock guard **passed** (11 locked assets unchanged)

## 3-agent loop (genuine, model-proofed — Hermes NOT skipped)

- **codexclaw (GPT-5.5/Codex)** — source-grounded with file:line. VERDICT: NEEDS-FIX → confirmed untrack+gitignore is the correct minimal reversible fix; **required staging `.gitignore`** (it was unstaged); confirmed no consumer, ship.mjs out/-only, Pages repo has no dep. Raw: `receipts/AE-0007g-codexclaw-review-20260618.txt`.
- **Hermes (GPT-5.5, elite)** — adversarial. VERDICT: NEEDS-FIX → caught the **same unstaged `.gitignore`**, flagged untracked `.tmp/` as a stale-claim commit hazard, and (bigger miss) that `out.noindex` is **not the only claim surface** — tracked `marketing/paid-ads/*` + blog still carry `HPLC-verified ≥99%`. Demanded the commit be scoped honestly, not called a "sweep complete." Raw: `receipts/AE-0007g-hermes-review-20260618.txt`.
- **Muhlis (Opus 4.8)** — judged high-convergence; applied every required fix (staged `.gitignore`, ignored `.tmp/`, narrowed the commit message), independently verified each finding, committed, verified on disk.

Both reviewers converged on the unstaged-`.gitignore` bug — caught **before** commit. That is the loop doing its real job.

## NEW finding surfaced → AE-0007h (logged, NOT silently swallowed)

Hermes' "bigger miss," independently verified by me (`git grep`):

- **`marketing/paid-ads/{ad-copy-bank,google-ads-campaign,meta-ads-campaign}.md`** still contain **hard Titan self-guarantees**: "Every batch HPLC-verified ≥99%", "HPLC-verified ≥99% purity. $64.99", etc. These are first-person ad copy — the exact unprovable guarantee class the honesty chain decided to drop. The AE-0007f sweep did not scope `paid-ads/`.
  - Exposure **right now = none**: draft ad files, not deployed, no ad spend authorized.
  - The deeper question (is ≥99% actually provable?) is the **same Shamil-gated method-claim decision** already queued. The safe guarantee→"in-house ≥99% release target" softening can be applied to these the same way it was applied site-wide.
- Blog `HPLC-verified` hits (bpc-157, pt-141, how-to-verify, trends/trending, fda-reclass, where-to-buy) are **educational buyer-guidance** ("look for / suppliers should provide ≥99%") — **correctly left** (both agents agree, not a blocker).

**AE-0007h (next slice / morning decision):** soften the `marketing/paid-ads/*` hard guarantees to match the site's release-target framing (autonomous-safe), bundled with Shamil's gated ≥99%/method-claim decision.

## Residuals noted (not acted on autonomously — correct per safety gates)
- **Git history still contains** the old `out.noindex` claims (recoverable from `b5d296b`). A history purge = force-push rewrite = heavy/irreversible → **Shamil-gated**, not done casually. Repo is the private source (not the public site); deployed `out/` is clean.
- Snapshot of pre-change state: `.tmp/ae0007g-snapshot-20260618T015041Z/` (filelist + `.gitignore.pre`).

## Proof paths
- Commit `68b21fe` (branch `trust/coa-claims-honesty-ae0007`)
- Receipts: `Marketing/Titan/receipts/AE-0007g-{codexclaw,hermes}-{review,prompt}-20260618.*`
