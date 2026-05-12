import { FileCheck2, PackageCheck, Send } from "lucide-react";
import { WALLETS } from "@/lib/products";
import { Reveal } from "./reveal";

type Chain = {
  key: string;
  label: string;
  asset: string;
  address: string;
  qrData: string;
};

const CHAINS: Chain[] = [
  {
    key: "btc",
    label: "Bitcoin",
    asset: "BTC",
    address: WALLETS.btc,
    qrData: `bitcoin:${WALLETS.btc}`,
  },
  {
    key: "eth",
    label: "Ethereum",
    asset: "ETH",
    address: WALLETS.eth,
    qrData: WALLETS.eth,
  },
  {
    key: "usdcErc",
    label: "USDC ERC-20",
    asset: "USDC",
    address: WALLETS.usdcErc,
    qrData: WALLETS.usdcErc,
  },
  {
    key: "usdcSol",
    label: "SOL / USDC SPL",
    asset: "SOL",
    address: WALLETS.usdcSol,
    qrData: WALLETS.usdcSol,
  },
];

const STEPS = [
  {
    icon: PackageCheck,
    title: "Choose product",
    body: "Select the nasal spray or stack, then confirm the order total.",
  },
  {
    icon: Send,
    title: "Send crypto",
    body: "Use BTC, ETH, USDC ERC-20, SOL, or USDC SPL on the selected chain.",
  },
  {
    icon: FileCheck2,
    title: "Receive confirmation",
    body: "Manual review, batch COA, and tracking are sent after payment clears.",
  },
];

export function PaymentMethods() {
  return (
    <section className="border-b border-[rgb(15_22_19/8%)] bg-[#fafafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#1e6f58]">
                Crypto payment
              </p>
              <h2 className="mt-4 max-w-xl font-serif text-[clamp(2.5rem,4.5vw,4.3rem)] leading-[0.96] tracking-[-0.04em] text-[#0f1613]">
                A payment flow that feels orderly, not improvised.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#5c6762]">
              It is still crypto-only, but the presentation should be clearer,
              calmer, and more premium. The point is reducing hesitation before
              the buyer ever sees a wallet string.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, body }, index) => (
            <Reveal key={title} delay={index * 0.04}>
              <div className="h-full rounded-[1.5rem] border border-[rgb(15_22_19/8%)] bg-white p-6 shadow-[0_1px_2px_rgb(15_22_19/4%),_0_12px_32px_-20px_rgb(15_22_19/12%)]">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-full bg-[#f0f5f2] text-[#1e6f58]">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-[#9aa6a0]">0{index + 1}</span>
                </div>
                <h3 className="mt-8 font-serif text-[1.9rem] leading-[1.02] tracking-[-0.03em] text-[#0f1613]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5c6762]">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {CHAINS.map((chain, index) => (
            <Reveal key={chain.key} delay={index * 0.035}>
              <div className="h-full rounded-[1.5rem] border border-[rgb(15_22_19/8%)] bg-white p-5 shadow-[0_1px_2px_rgb(15_22_19/4%),_0_12px_32px_-20px_rgb(15_22_19/12%)]">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <ChainLogo chain={chain.key} />
                    <div>
                      <h3 className="font-medium text-[#0f1613]">{chain.label}</h3>
                      <p className="text-sm text-[#6b7a73]">{chain.asset}</p>
                    </div>
                  </div>
                  <img
                    src={qrUrl(chain.qrData)}
                    alt={`${chain.label} wallet QR code`}
                    width={86}
                    height={86}
                    loading="lazy"
                    className="rounded-xl border border-[rgb(15_22_19/10%)] bg-white p-1"
                  />
                </div>
                <p className="mt-5 break-all font-mono text-[11px] leading-5 text-[#5c6762]">
                  {chain.address}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <p className="mt-8 rounded-[1.35rem] border border-[rgb(15_22_19/8%)] bg-white p-4 text-sm leading-7 text-[#2a3530] shadow-[0_1px_2px_rgb(15_22_19/4%)]">
            Manual review within 24 hours, batch-matched COA included, tracking
            sent after payment confirmation and packing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function qrUrl(value: string) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=172x172&data=${encodeURIComponent(value)}`;
}

function ChainLogo({ chain }: { chain: string }) {
  if (chain === "btc") {
    return (
      <span className="grid size-11 place-items-center rounded-full bg-[#F7931A] text-lg font-semibold text-white">
        ₿
      </span>
    );
  }

  if (chain === "eth") {
    return (
      <span className="grid size-11 place-items-center rounded-full bg-[#E3E8FF]">
        <svg viewBox="0 0 32 32" aria-hidden className="size-7">
          <path d="M16 2 7 16.4 16 21l9-4.6L16 2Z" fill="#627EEA" />
          <path d="M7 18.1 16 30l9-11.9-9 4.6-9-4.6Z" fill="#3C3C3D" />
        </svg>
      </span>
    );
  }

  if (chain === "usdcErc") {
    return (
      <span className="grid size-11 place-items-center rounded-full bg-[#2775CA] text-sm font-semibold text-white">
        USDC
      </span>
    );
  }

  return (
    <span className="grid size-11 place-items-center rounded-full bg-[#13211c]">
      <svg viewBox="0 0 40 40" aria-hidden className="size-8">
        <path d="M9 12h22l-4 4H5l4-4Z" fill="#00FFA3" />
        <path d="M9 18h22l-4 4H5l4-4Z" fill="#DC1FFF" />
        <path d="M9 24h22l-4 4H5l4-4Z" fill="#03E1FF" />
      </svg>
    </span>
  );
}
