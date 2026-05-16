import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, FileText, Wallet } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { WALLETS } from "@/lib/products";
import { WalletCopyGrid } from "./wallet-copy-grid";

const PAY_TITLE = "How to Pay with Crypto — Titan Peptide Lab";
const PAY_DESCRIPTION =
  "A four-step Titan Peptide Lab walkthrough: pick a wallet, copy the correct address, send the exact amount, and confirm the order.";

export const metadata = {
  title: PAY_TITLE,
  description: PAY_DESCRIPTION,
  alternates: { canonical: "/how-to-pay-with-crypto/" },
  openGraph: {
    title: PAY_TITLE,
    description: PAY_DESCRIPTION,
    url: "/how-to-pay-with-crypto/",
    type: "website" as const,
  },
};

const WALLETS_FOR_PAGE = [
  {
    id: "usdc-sol",
    label: "USDC",
    network: "Solana",
    address: WALLETS.usdcSol,
    bestFor: "Recommended when you want a stable USD amount and low network fees.",
  },
  {
    id: "sol",
    label: "SOL",
    network: "Solana",
    address: WALLETS.sol,
    bestFor: "Fast settlement on the same Solana address shown at checkout.",
  },
  {
    id: "btc",
    label: "Bitcoin",
    network: "BTC",
    address: WALLETS.btc,
    bestFor: "Use only when your wallet app is sending on the Bitcoin network.",
  },
  {
    id: "eth",
    label: "Ethereum",
    network: "ERC-20",
    address: WALLETS.eth,
    bestFor: "Use for ETH or ERC-20 USDC when your wallet confirms the ERC-20 network.",
  },
] as const;

const STEPS = [
  {
    n: "01",
    icon: Wallet,
    title: "Pick the wallet network",
    body: "Choose the coin and network you actually hold. Network mismatch is the main payment mistake, so check the label before sending.",
  },
  {
    n: "02",
    icon: FileText,
    title: "Copy the address and amount",
    body: "Checkout shows a wallet address, QR, and exact crypto amount for the order total. Copy both before you leave the page.",
  },
  {
    n: "03",
    icon: ArrowRight,
    title: "Send the exact amount",
    body: "Open your wallet app, paste the address, verify the network one more time, and send the exact amount shown at checkout.",
  },
  {
    n: "04",
    icon: CheckCircle2,
    title: "Confirm the order",
    body: "Return to checkout and submit the transaction hash if you have it. Titan matches the payment to your order ID before dispatch.",
  },
];

export default function HowToPayWithCryptoPage() {
  return (
    <>
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fafbfa] py-14 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#dde5df] bg-white px-3 py-1">
                <span className="size-1.5 rounded-full bg-[#1e6f58]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1a5c48]">
                  Crypto-only checkout guide
                </span>
              </div>
              <h1 className="mt-6 text-balance font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.94] tracking-[-0.05em]">
                Pay the wallet address without second-guessing the network.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                Titan checkout gives you the exact wallet, network, QR, and order
                amount. This page is the cold-start walkthrough: pick the wallet,
                copy the address, send the exact amount, then confirm the order ID.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/checkout/?ref=ig"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#1e6f58] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#175946] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e6f58]/25"
                >
                  Open checkout
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/start/?ref=ig"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] bg-white px-6 text-[13px] font-semibold text-[#0f1613] transition-colors hover:border-[#1e6f58]/40 hover:text-[#1e6f58] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e6f58]/20"
                >
                  Pick a product first
                </Link>
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-[0.14em] text-[#8a9690]">
                For research use only · Not for human consumption
              </p>
            </div>

            <div className="rounded-[2rem] border border-[rgb(15_22_19/8%)] bg-white p-5 shadow-[0_24px_80px_-55px_rgb(15_22_19/32%)] sm:p-7">
              <div className="flex items-center justify-between border-b border-[rgb(15_22_19/6%)] pb-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a9690]">
                  Order payment panel
                </span>
                <Clock3 className="h-4 w-4 text-[#1e6f58]" aria-hidden="true" />
              </div>
              <div className="mt-5 space-y-4">
                <div className="rounded-[1.25rem] bg-[#f7faf8] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1a5c48]">
                    Exact amount
                  </p>
                  <p className="mt-2 font-mono text-[1.8rem] leading-none tracking-[-0.04em] text-[#0f1613]">
                    104.97 USDC
                  </p>
                  <p className="mt-2 text-[11px] leading-5 text-[#6b7a73]">
                    Example only. Checkout calculates your live order amount.
                  </p>
                </div>
                <div className="rounded-[1.25rem] border border-[#dfe6e2] bg-white p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                    Network
                  </p>
                  <p className="mt-2 text-[1rem] font-semibold text-[#0f1613]">
                    USDC on Solana
                  </p>
                  <p className="mt-2 text-[11px] leading-5 text-[#6b7a73]">
                    Send on this same network only. If your wallet shows a
                    different network, switch before sending.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-18">
          <div className="mx-auto max-w-5xl px-5 sm:px-6">
            <div className="grid gap-4 md:grid-cols-4">
              {STEPS.map(({ n, icon: Icon, title, body }) => (
                <article
                  key={n}
                  className="rounded-[1.35rem] border border-[rgb(15_22_19/8%)] bg-white p-5 shadow-[0_1px_2px_rgb(15_22_19/3%)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[12px] font-semibold text-[#1e6f58]">
                      {n}
                    </span>
                    <Icon className="h-4 w-4 text-[#1e6f58]" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-balance font-serif text-[1.35rem] leading-[1.05] tracking-[-0.02em] text-[#0f1613]">
                    {title}
                  </h2>
                  <p className="mt-3 text-[12.5px] leading-[1.75] text-[#5c6762]">
                    {body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[rgb(15_22_19/6%)] bg-[#fafbfa] py-14">
          <div className="mx-auto grid max-w-5xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Supported wallet addresses
              </p>
              <h2 className="mt-3 font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[0.96] tracking-[-0.04em] text-[#0f1613]">
                Copy from Titan, then verify inside your wallet.
              </h2>
              <p className="mt-4 text-[14px] leading-[1.8] text-[#5c6762]">
                Checkout is the source of truth for the exact amount. This list
                lets you recognize the same network/address pair before you send.
              </p>
            </div>
            <WalletCopyGrid wallets={WALLETS_FOR_PAGE} />
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.35rem)] leading-[0.98] tracking-[-0.04em] text-[#0f1613]">
              The only irreversible mistake is the wrong network.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[14px] leading-[1.85] text-[#5c6762]">
              Before sending, match three things: coin, network, and address.
              If those match the Titan checkout panel, send the exact amount and
              keep the order ID open for confirmation.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/start/?ref=ig"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#1a5c48] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f1613]/20"
              >
                Choose a peptide
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/lab-testing/?ref=ig"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-6 text-[13px] font-semibold text-[#0f1613] transition-colors hover:border-[#1e6f58]/40 hover:text-[#1e6f58] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e6f58]/20"
              >
                Review COA workflow
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
