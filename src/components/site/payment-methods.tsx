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
    n: "01",
    title: "Choose product",
    body: "Select the compound and confirm the order total.",
  },
  {
    n: "02",
    title: "Send crypto",
    body: "Use BTC, ETH, USDC ERC-20, SOL, or USDC SPL on the selected chain.",
  },
  {
    n: "03",
    title: "Receive confirmation",
    body: "Manual review, batch COA, and tracking sent after payment clears.",
  },
];

export function PaymentMethods() {
  return (
    <section className="border-b border-[rgb(15_22_19/6%)] bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#1e6f58]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                  Payment
                </span>
              </div>
              <h2 className="mt-6 max-w-xl font-serif text-[clamp(2.2rem,4.2vw,3.4rem)] leading-[0.96] tracking-[-0.03em] text-[#0f1613]">
                Wallet checkout, clearly laid out.
              </h2>
            </div>
            <p className="max-w-2xl text-[15px] leading-[1.8] text-[#5c6762]">
              Crypto-only checkout with the addresses shown openly. Buyers
              should be able to verify the rail, send payment, and know what
              happens next without guessing.
            </p>
          </div>
        </Reveal>

        {/* Steps */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {STEPS.map(({ n, title, body }, index) => (
            <Reveal key={title} delay={index * 0.04}>
              <div className="flex h-full flex-col rounded-xl border border-[rgb(15_22_19/8%)] bg-[#fafbfa] p-6">
                <span className="text-[12px] font-semibold text-[#1e6f58]">
                  {n}
                </span>
                <h3 className="mt-6 font-serif text-[1.4rem] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
                  {title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-[#5c6762]">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Wallet cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {CHAINS.map((chain, index) => (
            <Reveal key={chain.key} delay={index * 0.03}>
              <div className="flex h-full flex-col rounded-xl border border-[rgb(15_22_19/8%)] bg-white p-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <ChainLogo chain={chain.key} />
                    <div>
                      <h3 className="text-[14px] font-medium text-[#0f1613]">
                        {chain.label}
                      </h3>
                      <p className="text-[12px] text-[#8a9690]">
                        {chain.asset}
                      </p>
                    </div>
                  </div>
                  <img
                    src={qrUrl(chain.qrData)}
                    alt={`${chain.label} wallet QR code`}
                    width={72}
                    height={72}
                    loading="lazy"
                    className="rounded-lg border border-[rgb(15_22_19/8%)] bg-white p-1"
                  />
                </div>
                <p className="mt-4 break-all font-mono text-[10px] leading-5 text-[#8a9690]">
                  {chain.address}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <p className="mt-8 rounded-xl border border-[rgb(15_22_19/8%)] bg-[#fafbfa] p-5 text-[13px] leading-[1.7] text-[#5c6762]">
            Manual review within 24 hours. Batch-matched COA included. Tracking
            sent after payment confirmation and packing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function qrUrl(value: string) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=144x144&data=${encodeURIComponent(value)}`;
}

function ChainLogo({ chain }: { chain: string }) {
  const base =
    "grid size-10 place-items-center rounded-lg text-sm font-semibold";

  if (chain === "btc") {
    return (
      <span className={`${base} bg-[#F7931A] text-white`}>\u20bf</span>
    );
  }

  if (chain === "eth") {
    return (
      <span className={`${base} bg-[#627EEA]/10`}>
        <svg viewBox="0 0 32 32" aria-hidden className="size-6">
          <path d="M16 2 7 16.4 16 21l9-4.6L16 2Z" fill="#627EEA" />
          <path d="M7 18.1 16 30l9-11.9-9 4.6-9-4.6Z" fill="#3C3C3D" />
        </svg>
      </span>
    );
  }

  if (chain === "usdcErc") {
    return (
      <span className={`${base} bg-[#2775CA] text-white text-[10px]`}>
        USDC
      </span>
    );
  }

  return (
    <span className={`${base} bg-[#0f1613]`}>
      <svg viewBox="0 0 40 40" aria-hidden className="size-7">
        <path d="M9 12h22l-4 4H5l4-4Z" fill="#00FFA3" />
        <path d="M9 18h22l-4 4H5l4-4Z" fill="#DC1FFF" />
        <path d="M9 24h22l-4 4H5l4-4Z" fill="#03E1FF" />
      </svg>
    </span>
  );
}
