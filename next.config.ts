import type { NextConfig } from "next";
import path from "node:path";

// Static export — produces an `out/` directory that any static host can serve
// (GitHub Pages, Vercel, CDN). We use this so the GH Pages repo that owns the
// titanpeptidelab.com DNS can serve the v3 site with zero registrar change.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Pin tracing root to this project so Next.js stops inferring the parent
  // workspace from a stray sibling lockfile.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
