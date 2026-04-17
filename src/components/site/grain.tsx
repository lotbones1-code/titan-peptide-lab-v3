// SVG grain overlay — fixed full-page, blends into anything
// Add once in layout.tsx for site-wide film-grain texture
export function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] mix-blend-overlay opacity-[0.035]"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0'/></filter><rect width='200' height='200' filter='url(%23n)' opacity='1'/></svg>\")",
      }}
    />
  );
}
