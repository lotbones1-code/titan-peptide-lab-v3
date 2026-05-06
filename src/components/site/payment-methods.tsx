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
    label: "USDC (ERC-20)",
    asset: "USDC",
    address: WALLETS.usdcErc,
    qrData: WALLETS.usdcErc,
  },
  {
    key: "usdcSol",
    label: "USDC / SOL (Solana)",
    asset: "USDC · SOL",
    address: WALLETS.usdcSol,
    qrData: WALLETS.usdcSol,
  },
];

export function PaymentMethods() {
  return (
    <section className="border-t border-[#e8e6e1] bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 max-w-xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#999]">
              Payment
            </span>
            <h2 className="mt-3 font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-[-0.03em] text-[#0f1110]">
              Crypto-only.<br />No bank, no KYC, no card data.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.8] text-[#555b55]">
              Your card statement stays clean. The order desk sees a wallet, not a name. Pay in BTC, ETH, USDC, or SOL — the same flow whether you&apos;re in Denver or Dubai.
            </p>
            <ul className="mt-5 grid gap-2 text-[13px] text-[#44514b] sm:grid-cols-2">
              <li className="flex items-start gap-2"><span className="mt-1 size-1.5 shrink-0 rounded-full bg-[#1a5c48]"></span>No 3rd-party processor — funds confirm direct on-chain</li>
              <li className="flex items-start gap-2"><span className="mt-1 size-1.5 shrink-0 rounded-full bg-[#1a5c48]"></span>No chargebacks, no holds, no merchant flags</li>
              <li className="flex items-start gap-2"><span className="mt-1 size-1.5 shrink-0 rounded-full bg-[#1a5c48]"></span>Refunds returned to the same wallet on QA failure</li>
              <li className="flex items-start gap-2"><span className="mt-1 size-1.5 shrink-0 rounded-full bg-[#1a5c48]"></span>Same flow worldwide — no regional banking gates</li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="mb-8 rounded-[1.5rem] border border-[#e8e6e1] bg-[#faf8f4] p-6 lg:p-7">
            <div className="grid gap-4 lg:grid-cols-3">
              {[
                ["1", "Place the order with your shipping destination."],
                ["2", "Use BTC, ETH, USDC, or SOL on the listed rail."],
                ["3", "Titan verifies payment and sends dispatch confirmation."],
              ].map(([step, copy]) => (
                <div key={step} className="rounded-[1rem] border border-[#e5e1d7] bg-white px-4 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1a5c48]">Step {step}</p>
                  <p className="mt-2 text-[13px] leading-6 text-[#44514b]">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {CHAINS.map((chain, index) => (
            <Reveal key={chain.key} delay={index * 0.04}>
              <div className="flex items-start gap-5 rounded-2xl border border-[#e8e6e1] bg-[#faf8f4] p-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <ChainLogo chain={chain.key} />
                    <div>
                      <h3 className="text-[14px] font-semibold text-[#0f1110]">{chain.label}</h3>
                      <p className="text-[12px] font-mono text-[#999]">{chain.asset}</p>
                    </div>
                  </div>
                  <p className="mt-4 break-all font-mono text-[11px] leading-5 text-[#777]">
                    {chain.address}
                  </p>
                </div>
                <img
                  src={qrUrl(chain.qrData)}
                  alt={`${chain.label} QR code`}
                  width={80}
                  height={80}
                  loading="lazy"
                  className="shrink-0 rounded-xl border border-[#e8e6e1] bg-white p-1.5"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function qrUrl(value: string) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=144x144&data=${encodeURIComponent(value)}`;
}

function ChainLogo({ chain }: { chain: string }) {
  const base = "grid size-10 place-items-center rounded-lg text-sm font-semibold";

  if (chain === "btc") {
    return <span className={`${base} bg-[#F7931A] text-white`}>BTC</span>;
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
    return <span className={`${base} bg-[#2775CA] text-white text-[10px]`}>USDC</span>;
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
