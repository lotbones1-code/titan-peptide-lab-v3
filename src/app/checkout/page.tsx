"use client";

import { useCart } from "@/lib/cart-context";
import { WALLETS } from "@/lib/products";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ShieldCheck,
  Truck,
  FileText,
  Check,
  Copy,
  Loader2,
  Lock,
} from "lucide-react";

const SHIPPING_RATES: Record<string, { label: string; rate: number; freeAbove: number }> = {
  US: { label: "United States", rate: 12, freeAbove: 150 },
  CA: { label: "Canada", rate: 18, freeAbove: 200 },
  MX: { label: "Mexico", rate: 24, freeAbove: 250 },
  GB: { label: "United Kingdom", rate: 28, freeAbove: 250 },
  DE: { label: "Germany", rate: 28, freeAbove: 250 },
  FR: { label: "France", rate: 28, freeAbove: 250 },
  AU: { label: "Australia", rate: 32, freeAbove: 300 },
  JP: { label: "Japan", rate: 32, freeAbove: 300 },
  BR: { label: "Brazil", rate: 24, freeAbove: 250 },
  OTHER: { label: "Other", rate: 34, freeAbove: 300 },
};

const WALLET_LIST = [
  { label: "BTC", network: "Bitcoin", address: WALLETS.btc },
  { label: "ETH", network: "Ethereum", address: WALLETS.eth },
  { label: "USDC", network: "ERC-20", address: WALLETS.usdcErc },
  { label: "SOL", network: "Solana (SPL)", address: WALLETS.sol },
];

type Step = "info" | "confirm" | "done";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<Step>("info");
  const [submitting, setSubmitting] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [copiedWallet, setCopiedWallet] = useState<string | null>(null);

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("US");
  const [address, setAddress] = useState("");

  // Hydration guard
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <>
        <Nav />
        <main className="min-h-screen bg-white" />
        <Footer />
      </>
    );
  }

  const shippingInfo = SHIPPING_RATES[country] || SHIPPING_RATES.OTHER;
  const shipping = subtotal >= shippingInfo.freeAbove ? 0 : shippingInfo.rate;
  const total = subtotal + shipping;

  const canSubmit = name.trim() && email.trim() && address.trim() && items.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            productId: i.product.id,
            name: i.product.name,
            quantity: i.quantity,
            price: i.product.price,
          })),
          name: name.trim(),
          email: email.trim(),
          country,
          address: address.trim(),
          shipping,
          total,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setOrderId(data.orderId);
        setStep("done");
        clearCart();
      } else {
        alert("Something went wrong. Please try again or email support@titanpeptidelab.com");
      }
    } catch {
      alert("Connection error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const copyWallet = (label: string, addr: string) => {
    navigator.clipboard.writeText(addr);
    setCopiedWallet(label);
    setTimeout(() => setCopiedWallet(null), 2000);
  };

  // Empty cart
  if (items.length === 0 && step !== "done") {
    return (
      <>
        <Nav />
        <main className="min-h-screen bg-white">
          <div className="mx-auto max-w-lg px-6 py-32 text-center">
            <p className="text-[15px] text-[#999]">Your cart is empty.</p>
            <Link
              href="/products"
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-[#1e6f58] px-6 text-[14px] font-medium text-white transition-colors hover:bg-[#175946]"
            >
              Browse products
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Order confirmation
  if (step === "done") {
    return (
      <>
        <Nav />
        <main className="min-h-screen bg-white">
          <div className="mx-auto max-w-2xl px-6 py-20">
            {/* Success header */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1e6f58]">
                <Check className="h-7 w-7 text-white" />
              </div>
              <h1 className="mt-6 font-serif text-[2rem] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
                Order placed.
              </h1>
              <p className="mt-2 text-[14px] text-[#999]">
                <span className="font-mono text-[#1e6f58]">{orderId}</span>
                {" "}&mdash; confirmation sent to <strong className="text-[#0f1613]">{email}</strong>
              </p>
            </div>

            {/* Payment instructions */}
            <div className="mt-12 rounded-2xl border border-[#e7ece9] bg-[#fafbfa] p-8">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                Send payment
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#44514b]">
                Send <strong className="text-[#0f1613]">${total.toFixed(2)}</strong> in crypto
                to one of the wallets below. Reply to the confirmation email with your
                transaction hash. We verify on-chain and ship within 24 hours.
              </p>

              <div className="mt-6 space-y-2">
                {WALLET_LIST.map((w) => (
                  <button
                    key={w.label}
                    onClick={() => copyWallet(w.label, w.address)}
                    className="group flex w-full items-center gap-4 rounded-xl border border-[#e7ece9] bg-white px-4 py-3 text-left transition-colors hover:border-[#1e6f58]/30"
                  >
                    <span className="w-14 text-[12px] font-semibold text-[#1e6f58]">{w.label}</span>
                    <span className="flex-1 truncate font-mono text-[12px] text-[#666]">{w.address}</span>
                    {copiedWallet === w.label ? (
                      <span className="flex items-center gap-1 text-[11px] font-medium text-[#1e6f58]">
                        <Check className="h-3.5 w-3.5" /> Copied
                      </span>
                    ) : (
                      <Copy className="h-4 w-4 text-[#ccc] transition-colors group-hover:text-[#1e6f58]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Next steps */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: FileText, title: "Check email", desc: "Confirmation with full payment details" },
                { icon: ShieldCheck, title: "Send crypto", desc: "We verify on-chain within minutes" },
                { icon: Truck, title: "We ship", desc: "Cold-chain packed, tracking emailed" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-[#e7ece9] bg-[#fafbfa] p-5">
                  <Icon className="h-5 w-5 text-[#1e6f58]" />
                  <p className="mt-3 text-[13px] font-semibold text-[#0f1613]">{title}</p>
                  <p className="mt-1 text-[12px] text-[#8a9690]">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/products"
                className="text-[13px] text-[#1e6f58] underline decoration-[#1e6f58]/30 underline-offset-4 hover:decoration-[#1e6f58]"
              >
                Continue browsing
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Checkout form
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          {/* Back link */}
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-[13px] text-[#8a9690] transition-colors hover:text-[#0f1613]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to catalog
          </Link>

          <h1 className="mt-8 font-serif text-[2rem] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
            Checkout
          </h1>
          <p className="mt-2 text-[14px] text-[#8a9690]">
            Review your order and enter shipping details.
          </p>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_400px]">
            {/* Left — Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact */}
              <fieldset className="space-y-5">
                <legend className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                  Contact
                </legend>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-[12px] font-medium text-[#44514b]">
                      Full name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1.5 h-11 w-full rounded-lg border border-[#e5e5e5] bg-white px-4 text-[14px] text-[#0f1613] transition-colors focus:border-[#1e6f58] focus:outline-none"
                      placeholder="Dr. Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[12px] font-medium text-[#44514b]">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1.5 h-11 w-full rounded-lg border border-[#e5e5e5] bg-white px-4 text-[14px] text-[#0f1613] transition-colors focus:border-[#1e6f58] focus:outline-none"
                      placeholder="jane@lab.edu"
                    />
                  </div>
                </div>
              </fieldset>

              {/* Shipping */}
              <fieldset className="space-y-5">
                <legend className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                  Shipping
                </legend>
                <div>
                  <label htmlFor="country" className="block text-[12px] font-medium text-[#44514b]">
                    Country
                  </label>
                  <select
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="mt-1.5 h-11 w-full rounded-lg border border-[#e5e5e5] bg-white px-4 text-[14px] text-[#0f1613] transition-colors focus:border-[#1e6f58] focus:outline-none"
                  >
                    {Object.entries(SHIPPING_RATES).map(([code, info]) => (
                      <option key={code} value={code}>{info.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="address" className="block text-[12px] font-medium text-[#44514b]">
                    Full shipping address
                  </label>
                  <textarea
                    id="address"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows={3}
                    className="mt-1.5 w-full rounded-lg border border-[#e5e5e5] bg-white px-4 py-3 text-[14px] leading-relaxed text-[#0f1613] transition-colors focus:border-[#1e6f58] focus:outline-none"
                    placeholder={"123 Research Blvd, Suite 400\nAustin, TX 78701"}
                  />
                </div>
              </fieldset>

              {/* Trust signals */}
              <div className="rounded-xl border border-[#e7ece9] bg-[#fafbfa] p-5">
                <div className="flex flex-col gap-3 text-[12px] text-[#44514b]">
                  <div className="flex items-start gap-2.5">
                    <FileText className="mt-0.5 h-4 w-4 text-[#1e6f58] shrink-0" />
                    <span>Every order ships with a lot-matched COA.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="mt-0.5 h-4 w-4 text-[#1e6f58] shrink-0" />
                    <span>Crypto payment verified on-chain before dispatch.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Truck className="mt-0.5 h-4 w-4 text-[#1e6f58] shrink-0" />
                    <span>Cold-chain packed, shipped within 24h of verification.</span>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!canSubmit || submitting}
                className="flex h-13 w-full items-center justify-center gap-2.5 rounded-xl bg-[#1e6f58] text-[15px] font-semibold text-white transition-colors hover:bg-[#175946] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Placing order...
                  </>
                ) : (
                  <>
                    <Lock className="h-4 w-4" />
                    Place order &mdash; ${total.toFixed(2)}
                  </>
                )}
              </button>
              <p className="text-center text-[11px] text-[#bbb]">
                You&apos;ll receive payment instructions by email after placing the order.
              </p>
            </form>

            {/* Right — Order Summary */}
            <div className="lg:sticky lg:top-8 lg:self-start">
              <div className="rounded-2xl border border-[#e7ece9] bg-[#fafbfa] p-6">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                  Order summary
                </h2>

                <div className="mt-5 space-y-3">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-[14px] font-medium text-[#0f1613] truncate">
                          {item.product.name}
                        </p>
                        <p className="text-[12px] text-[#8a9690]">
                          {item.product.size} &times; {item.quantity}
                        </p>
                      </div>
                      <p className="text-[14px] font-medium text-[#0f1613] shrink-0">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 space-y-2 border-t border-[#e7ece9] pt-4">
                  <div className="flex justify-between text-[13px]">
                    <span className="text-[#8a9690]">Subtotal</span>
                    <span className="text-[#0f1613]">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[13px]">
                    <span className="text-[#8a9690]">Shipping ({shippingInfo.label})</span>
                    <span className="text-[#0f1613]">
                      {shipping === 0 ? (
                        <span className="text-[#1e6f58] font-medium">Free</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-[11px] text-[#1e6f58]">
                      Free shipping on orders over ${shippingInfo.freeAbove}
                    </p>
                  )}
                  <div className="flex justify-between border-t border-[#e7ece9] pt-3 text-[15px]">
                    <span className="font-semibold text-[#0f1613]">Total</span>
                    <span className="font-bold text-[#0f1613]">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Payment methods */}
                <div className="mt-5 border-t border-[#e7ece9] pt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                    Accepted payment
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["BTC", "ETH", "USDC", "SOL"].map((coin) => (
                      <span
                        key={coin}
                        className="rounded-md border border-[#e7ece9] bg-white px-2.5 py-1 text-[11px] font-medium text-[#44514b]"
                      >
                        {coin}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
