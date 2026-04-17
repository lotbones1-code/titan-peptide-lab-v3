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
    title: "Pick product",
    body: "Choose the nasal spray or stack and confirm the order total.",
  },
  {
    icon: Send,
    title: "Send crypto",
    body: "Use BTC, ETH, USDC ERC-20, or SOL / USDC SPL at checkout.",
  },
  {
    icon: FileCheck2,
    title: "Get COA + tracking",
    body: "Manual fulfillment within 24h with batch COA and shipping tracking.",
  },
];

export function PaymentMethods() {
  return (
    <section className="border-b border-white/10 bg-[#080C0B] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase text-[#77E1C3]">
                Crypto checkout
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#F3F7F6] md:text-5xl">
                Clear payment path. No card rails.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#9FABAA]">
              Checkout is crypto-only. Send payment on the selected chain, then
              receive manual order confirmation, the batch-matched COA, and
              tracking once packed.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, body }, index) => (
            <Reveal key={title} delay={index * 0.04}>
              <div className="h-full rounded-lg border border-white/10 bg-white/[0.04] p-6">
                <div className="flex items-center justify-between">
                  <Icon className="size-6 text-[#77E1C3]" />
                  <span className="font-mono text-xs text-[#66736F]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold text-[#F3F7F6]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#9FABAA]">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {CHAINS.map((chain, index) => (
            <Reveal key={chain.key} delay={index * 0.035}>
              <div className="h-full rounded-lg border border-white/10 bg-[#101615] p-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <ChainLogo chain={chain.key} />
                    <div>
                      <h3 className="font-semibold text-[#F3F7F6]">
                        {chain.label}
                      </h3>
                      <p className="text-sm text-[#7C8986]">{chain.asset}</p>
                    </div>
                  </div>
                  <img
                    src={qrUrl(chain.qrData)}
                    alt={`${chain.label} wallet QR code`}
                    width={86}
                    height={86}
                    loading="lazy"
                    className="rounded-lg border border-white/10 bg-white p-1"
                  />
                </div>
                <p className="mt-5 break-all font-mono text-[11px] leading-5 text-[#9FABAA]">
                  {chain.address}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <p className="mt-8 rounded-lg border border-[#0F9F7A]/25 bg-[#0F9F7A]/10 p-4 text-sm leading-6 text-[#CFE7DF]">
            Manual order fulfillment within 24h. COA matched to your batch.
            Shipping tracking is sent after payment confirmation and packing.
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
      <span className="grid size-11 place-items-center rounded-lg bg-[#F7931A] text-lg font-semibold text-white">
        ₿
      </span>
    );
  }

  if (chain === "eth") {
    return (
      <span className="grid size-11 place-items-center rounded-lg bg-[#DDE4FF]">
        <svg viewBox="0 0 32 32" aria-hidden className="size-7">
          <path d="M16 2 7 16.4 16 21l9-4.6L16 2Z" fill="#627EEA" />
          <path d="M7 18.1 16 30l9-11.9-9 4.6-9-4.6Z" fill="#3C3C3D" />
        </svg>
      </span>
    );
  }

  if (chain === "usdcErc") {
    return (
      <span className="grid size-11 place-items-center rounded-lg bg-[#2775CA] text-sm font-semibold text-white">
        USDC
      </span>
    );
  }

  return (
    <span className="grid size-11 place-items-center rounded-lg bg-[#101615]">
      <svg viewBox="0 0 40 40" aria-hidden className="size-8">
        <path d="M9 12h22l-4 4H5l4-4Z" fill="#00FFA3" />
        <path d="M9 18h22l-4 4H5l4-4Z" fill="#DC1FFF" />
        <path d="M9 24h22l-4 4H5l4-4Z" fill="#03E1FF" />
      </svg>
    </span>
  );
}
