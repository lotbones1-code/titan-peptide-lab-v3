"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type WalletRow = {
  id: string;
  label: string;
  network: string;
  address: string;
  bestFor: string;
};

function truncateAddress(address: string) {
  if (address.length <= 18) return address;
  return `${address.slice(0, 9)}…${address.slice(-7)}`;
}

export function WalletCopyGrid({ wallets }: { wallets: readonly WalletRow[] }) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  async function copyAddress(row: WalletRow) {
    try {
      await navigator.clipboard.writeText(row.address);
      setCopiedId(row.id);
      window.setTimeout(() => setCopiedId(null), 1800);
    } catch {
      setCopiedId(null);
    }
  }

  return (
    <div className="grid gap-3" aria-live="polite">
      {wallets.map((wallet) => {
        const copied = copiedId === wallet.id;
        return (
          <div
            key={wallet.id}
            className="grid gap-3 rounded-[1.25rem] border border-[rgb(15_22_19/8%)] bg-white p-4 shadow-[0_1px_2px_rgb(15_22_19/3%)] sm:grid-cols-[1fr_auto] sm:items-center"
          >
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-[13px] font-semibold text-[#0f1613]">
                  {wallet.label}
                </p>
                <span className="rounded-full bg-[#f0f7f4] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1a5c48]">
                  {wallet.network}
                </span>
              </div>
              <p className="mt-1 text-[12px] leading-5 text-[#6b7a73]">
                {wallet.bestFor}
              </p>
              <code className="mt-2 block break-all rounded-lg bg-[#f7faf8] px-3 py-2 font-mono text-[11px] text-[#2a3530] sm:hidden">
                {wallet.address}
              </code>
              <code className="mt-2 hidden rounded-lg bg-[#f7faf8] px-3 py-2 font-mono text-[11px] text-[#2a3530] sm:inline-block">
                {truncateAddress(wallet.address)}
              </code>
            </div>
            <button
              type="button"
              onClick={() => copyAddress(wallet)}
              aria-label={`Copy ${wallet.label} ${wallet.network} address`}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[#dfe6e2] bg-white px-4 text-[12px] font-semibold text-[#0f1613] transition-colors hover:border-[#1e6f58]/40 hover:text-[#1e6f58] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e6f58]/25"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                  Copy address
                </>
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
}
