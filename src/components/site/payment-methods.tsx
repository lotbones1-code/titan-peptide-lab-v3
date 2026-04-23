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

const PAYMENT_FLOW = [
  ["01", "Verify rail", "Confirm the exact network before funds move. Titan shows the route openly instead of hiding it behind support."],
  ["02", "Send payment", "Use the matching wallet, then keep the transfer tied to the order details already shown in checkout."],
  ["03", "Manual review", "Titan verifies the transfer, matches it to the order record, and prepares paperwork before dispatch starts."],
];

export function PaymentMethods() {
  return (
    <section className="border-b border-[rgb(15_22_19/6%)] bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-[rgba(10,10,10,0.08)] bg-[rgba(10,10,10,0.06)]">
            <div className="grid gap-px lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-[#f7f5ef] p-8 lg:p-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1a5c48]">
                  Payment rails
                </p>
                <h2 className="mt-5 max-w-[11ch] font-serif text-[clamp(2.4rem,4.5vw,4rem)] leading-[0.92] tracking-[-0.04em] text-[#0f1613]">
                  Wallet checkout should read like a transaction desk.
                </h2>
                <p className="mt-5 max-w-[48ch] text-[14px] leading-[1.9] text-[#5c6762]">
                  Crypto-only. Confirm the exact rail, send on the matching network, then let Titan tie the transfer back to the order record before dispatch starts.
                </p>

                <div className="mt-8 space-y-5 border-t border-[rgba(10,10,10,0.07)] pt-6">
                  {PAYMENT_FLOW.map(([step, title, body]) => (
                    <div key={step} className="grid gap-3 sm:grid-cols-[60px_1fr]">
                      <span className="font-serif text-[1rem] leading-none tracking-[-0.02em] text-[#b7beb8]">
                        {step}
                      </span>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1a5c48]">
                          {title}
                        </p>
                        <p className="mt-2 text-[13px] leading-[1.8] text-[#5c6762]">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-px overflow-hidden rounded-[1.25rem] border border-[rgba(10,10,10,0.07)] bg-[rgba(10,10,10,0.07)] sm:grid-cols-3">
                  {[
                    ["24h", "manual review target"],
                    ["1:1", "payment to order match"],
                    ["COA", "included with dispatch"],
                  ].map(([value, label]) => (
                    <div key={label} className="bg-white px-4 py-4">
                      <p className="font-serif text-[1.8rem] leading-none tracking-[-0.04em] text-[#0f1613]">{value}</p>
                      <p className="mt-2 text-[11px] leading-[1.6] text-[#7d857f]">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#111614] p-8 text-white lg:p-10">
                <div className="border-b border-white/10 pb-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8fd0b5]">
                    Live rails
                  </p>
                  <p className="mt-3 max-w-[46ch] text-[13.5px] leading-[1.82] text-white/64">
                    Every network sits in one ledger so the buyer can match the correct wallet before funds move. No hidden handoff, no support-only routing.
                  </p>
                </div>

                <div className="divide-y divide-white/10">
                  {CHAINS.map((chain, index) => (
                    <Reveal key={chain.key} delay={index * 0.03}>
                      <div className="grid gap-4 py-5 sm:grid-cols-[1fr_auto] sm:items-center">
                        <div>
                          <div className="flex items-center gap-3">
                            <ChainLogo chain={chain.key} />
                            <div>
                              <h3 className="text-[13px] font-semibold text-white">{chain.label}</h3>
                              <p className="text-[11px] font-mono text-white/42">{chain.asset}</p>
                            </div>
                          </div>
                          <div className="mt-4 border-t border-white/10 pt-3">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/38">
                              Network address
                            </p>
                            <p className="mt-2 break-all font-mono text-[10.5px] leading-5 text-white/68">
                              {chain.address}
                            </p>
                          </div>
                        </div>

                        <img
                          src={qrUrl(chain.qrData)}
                          alt={`${chain.label} wallet QR code`}
                          width={72}
                          height={72}
                          loading="lazy"
                          className="rounded-[0.9rem] border border-white/10 bg-white p-1.5"
                        />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function qrUrl(value: string) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=144x144&data=${encodeURIComponent(value)}`;
}

function ChainLogo({ chain }: { chain: string }) {
  const base = "grid size-10 place-items-center text-sm font-semibold";

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
