"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative bg-[#1e6f58] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-2.5">
        <p className="text-center text-[12px] font-medium tracking-wide">
          <span className="hidden sm:inline">Free cold-chain shipping over $150</span>
          <span className="sm:hidden">Free shipping over $150</span>
          <span className="mx-2 opacity-30">|</span>
          Subscribe for <span className="font-semibold">10% off</span> your first order
        </p>
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
          aria-label="Dismiss"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
