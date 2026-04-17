/**
 * Sanity Studio config — scaffolded, ready to connect.
 *
 * To activate:
 *   1. Create a project at sanity.io → copy the Project ID.
 *   2. Add to openclawv2/.env:
 *        SANITY_PROJECT_ID=<id>
 *        SANITY_DATASET=production
 *        SANITY_TOKEN=<write token>
 *   3. Install deps:
 *        pnpm add sanity @sanity/client next-sanity
 *   4. Run the studio:
 *        pnpm exec sanity dev --project <id>
 *
 * Once connected, `scripts/sync-from-sanity.mjs` (to be added) will pull remote
 * products → /content/products/*.json, so the file-based pipeline still drives builds.
 * This keeps the system single-source-of-truth (files committed to git) while
 * giving non-technical editors a hosted UI.
 */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { product } from "./schemas/product";
import { page } from "./schemas/page";
import { promo } from "./schemas/promo";

const projectId = process.env.SANITY_PROJECT_ID || "REPLACE_ME";
const dataset = process.env.SANITY_DATASET || "production";

export default defineConfig({
  name: "titan-peptide-lab",
  title: "Titan Peptide Lab",
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: [product, page, promo],
  },
});
