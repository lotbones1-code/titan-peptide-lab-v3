"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative border-b border-[rgb(15_22_19/6%)] bg-[#0f1613] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-2.5">
        <p className="text-center text-[11px] font-medium tracking-[0.04em] text-white/90">
          <span className="hidden sm:inline">
            Cold-chain shipping on every order
          </span>
          <span className="sm:hidden">Cold-chain shipping standard</span>
          <span className="mx-2.5 text-white/20">|</span>
          Use code{" "}
          <span className="font-semibold text-white">FIRST10</span> for 10%
          off
        </p>
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 transition-colors hover:text-white/70"
          aria-label="Dismiss"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
