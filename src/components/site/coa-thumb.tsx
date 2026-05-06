import { ArrowUpRight } from "lucide-react";

/**
 * Trust element placed at the moment of doubt — next to the price on the PDP.
 * Renders a stylized release-sheet preview (chromatogram sparkline + table rows) instead
 * of a binary asset, so it stays sharp at any zoom and adds zero image weight.
 * Links to the full sample PDF on click.
 */
export function CoaThumb({ lot, productName }: { lot: string; productName: string }) {
  return (
    <a
      href="/specimen-coa.pdf"
      target="_blank"
      rel="noreferrer"
      className="group flex items-stretch gap-3 rounded-[1rem] border border-[rgb(15_22_19/8%)] bg-white p-3 transition-colors hover:border-[#1e6f58]/30"
    >
      {/* Left: stylized release-sheet preview, ~64×80, chromatogram + table rows */}
      <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-[0.65rem] border border-[rgb(15_22_19/6%)] bg-[#fafbfa]">
        {/* Header bar */}
        <div className="absolute left-1 right-1 top-1 flex items-center justify-between">
          <span className="h-1 w-5 rounded-full bg-[#1e6f58]/60" />
          <span className="font-mono text-[5px] tracking-[0.1em] text-[#8a9690]">LOT</span>
        </div>
        {/* Chromatogram sparkline */}
        <svg
          viewBox="0 0 64 24"
          className="absolute left-1 right-1 top-4 h-6 w-[calc(100%-0.5rem)]"
          aria-hidden
        >
          <path
            d="M0 22 L8 22 L12 20 L16 21 L20 19 L23 8 L26 2 L29 8 L33 19 L40 21 L48 22 L56 22 L64 22"
            fill="none"
            stroke="#1e6f58"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="0" y1="22" x2="64" y2="22" stroke="rgb(15 22 19 / 0.12)" strokeWidth="0.3" />
        </svg>
        {/* Mock table rows */}
        <div className="absolute bottom-1.5 left-1 right-1 space-y-[2px]">
          {[6, 5, 4].map((w, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className={`h-[2px] rounded-full bg-[#0f1613]/30 w-${w}`} style={{ width: `${w * 4}px` }} />
              <span className="h-[2px] w-3 rounded-full bg-[#1e6f58]/60" />
            </div>
          ))}
        </div>
      </div>

      {/* Right: caption + link */}
      <div className="flex flex-1 flex-col justify-between py-0.5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
            Lot release sheet
          </p>
          <p className="mt-1 font-mono text-[11px] tabular-nums leading-tight text-[#0f1613]">
            Lot {lot}
          </p>
          <p className="mt-0.5 text-[10.5px] leading-[1.4] text-[#6b7a73]">
            In-house release record for{" "}
            <span className="text-[#0f1613]">{productName}</span>
          </p>
        </div>
        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[#1e6f58] transition-colors group-hover:text-[#175946]">
          View sample
          <ArrowUpRight className="h-3 w-3" />
        </span>
      </div>
    </a>
  );
}
