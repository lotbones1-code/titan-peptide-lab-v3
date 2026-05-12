import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { BRAND } from "@/lib/products";

export const dynamic = "force-static";
export const alt = `${BRAND.name} — ${BRAND.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#0e1f1a";
const INK = "#f3ead8";
const HAIRLINE = "#2a3d36";
const MUTED = "#8aa097";

export default async function OgImage() {
  const fontsDir = join(process.cwd(), "src", "app", "_fonts");
  const [serif, mono] = await Promise.all([
    readFile(join(fontsDir, "InstrumentSerif-Regular.ttf")),
    readFile(join(fontsDir, "GeistMono-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: BG,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          color: INK,
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "mono",
            fontSize: 16,
            letterSpacing: "0.22em",
            color: MUTED,
            textTransform: "uppercase",
          }}
        >
          <span>Titan Peptide Lab</span>
          <span>Research Use Only</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <h1
            style={{
              fontFamily: "serif",
              fontSize: 104,
              lineHeight: 1.02,
              letterSpacing: "-0.025em",
              margin: 0,
              color: INK,
              maxWidth: 980,
            }}
          >
            Every batch ships with the lot-matched COA in the box.
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontFamily: "mono",
              fontSize: 18,
              letterSpacing: "0.14em",
              color: MUTED,
              textTransform: "uppercase",
            }}
          >
            <span>HPLC-verified</span>
            <span style={{ color: HAIRLINE }}>·</span>
            <span>ISO 17025 retest</span>
            <span style={{ color: HAIRLINE }}>·</span>
            <span>Crypto-only · no KYC</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", width: "100%", height: 1, backgroundColor: HAIRLINE }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "mono",
              fontSize: 18,
              letterSpacing: "0.2em",
              color: INK,
              textTransform: "uppercase",
            }}
          >
            <span>titanpeptidelab.com</span>
            <span style={{ color: MUTED }}>Nasal-first catalog · 2026</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "serif", data: serif, style: "normal", weight: 400 },
        { name: "mono", data: mono, style: "normal", weight: 400 },
      ],
    }
  );
}
