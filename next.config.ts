import type { NextConfig } from "next";

// Static export — produces an `out/` directory that any static host can serve
// (GitHub Pages, Vercel, CDN). We use this so the GH Pages repo that owns the
// titanpeptidelab.com DNS can serve the v3 site with zero registrar change.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
