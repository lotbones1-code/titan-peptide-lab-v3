"use client";

import { useCart } from "@/lib/cart-context";
import { WALLETS } from "@/lib/products";
import { COUNTRIES, zoneForCountry } from "@/lib/countries";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ShieldCheck,
  Truck,
  FileText,
  Check,
  Copy,
  Loader2,
  Lock,
  ChevronDown,
} from "lucide-react";

type Coin = "BTC" | "ETH" | "USDC-ERC" | "SOL" | "USDC-SOL";

type WalletOption = {
  coin: Coin;
  label: string;
  network: string;
  address: string;
  priceKey: "bitcoin" | "ethereum" | "solana" | "usd-coin";
};

const WALLET_OPTIONS: WalletOption[] = [
  { coin: "BTC", label: "Bitcoin", network: "BTC network", address: WALLETS.btc, priceKey: "bitcoin" },
  { coin: "ETH", label: "Ethereum", network: "ERC-20", address: WALLETS.eth, priceKey: "ethereum" },
  { coin: "USDC-ERC", label: "USDC", network: "Ethereum (ERC-20)", address: WALLETS.usdcErc, priceKey: "usd-coin" },
  { coin: "SOL", label: "Solana", network: "SOL network", address: WALLETS.sol, priceKey: "solana" },
  { coin: "USDC-SOL", label: "USDC", network: "Solana (SPL)", address: WALLETS.usdcSol, priceKey: "usd-coin" },
];

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/ssj4shamil@gmail.com";

type PriceMap = Partial<Record<WalletOption["priceKey"], number>>;

export default function CheckoutPage() {
  const { items, subtotal, clearCart, hydrated } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<null | { orderId: string; coin: Coin; total: number }>(null);
  const [copied, setCopied] = useState(false);
  const [prices, setPrices] = useState<PriceMap>({});
  const [orderSummaryOpen, setOrderSummaryOpen] = useState(false);

  const [selectedCoin, setSelectedCoin] = useState<Coin>("USDC-SOL");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [apt, setApt] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [postal, setPostal] = useState("");
  const [country, setCountry] = useState("US");
  const [txHash, setTxHash] = useState("");

  // Fetch live crypto prices once on mount (fails silently — amount hint is optional).
  useEffect(() => {
    const ctrl = new AbortController();
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,usd-coin&vs_currencies=usd",
      { signal: ctrl.signal },
    )
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!data) return;
        setPrices({
          bitcoin: data.bitcoin?.usd,
          ethereum: data.ethereum?.usd,
          solana: data.solana?.usd,
          "usd-coin": data["usd-coin"]?.usd ?? 1,
        });
      })
      .catch(() => {});
    return () => ctrl.abort();
  }, []);

  const zone = zoneForCountry(country);
  const shipping = subtotal >= zone.freeAbove ? 0 : zone.rate;
  const total = subtotal + shipping;

  const wallet = useMemo(
    () => WALLET_OPTIONS.find((w) => w.coin === selectedCoin)!,
    [selectedCoin],
  );

  const cryptoAmount = useMemo(() => {
    const price = prices[wallet.priceKey];
    if (!price) return null;
    const amt = total / price;
    if (wallet.priceKey === "usd-coin") return amt.toFixed(2);
    if (wallet.priceKey === "bitcoin") return amt.toFixed(6);
    return amt.toFixed(4);
  }, [prices, wallet.priceKey, total]);

  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=0&data=${encodeURIComponent(wallet.address)}`;

  if (!hydrated) {
    return (
      <>
        <Nav />
        <main className="min-h-screen bg-white">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <div className="h-6 w-40 animate-pulse rounded bg-[#f2f5f3]" />
            <div className="mt-6 h-12 w-72 animate-pulse rounded bg-[#f2f5f3]" />
            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_400px]">
              <div className="h-96 animate-pulse rounded-2xl bg-[#fafbfa]" />
              <div className="h-96 animate-pulse rounded-2xl bg-[#fafbfa]" />
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (items.length === 0 && !done) {
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

  const canSubmit =
    name.trim() &&
    email.trim() &&
    street.trim() &&
    city.trim() &&
    postal.trim() &&
    items.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || submitting) return;
    setSubmitting(true);

    const generatedId = `TPL-${Date.now().toString(36).slice(-4).toUpperCase()}${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    const itemsSummary = items
      .map((i) => `${i.product.name} × ${i.quantity} @ $${i.product.price}`)
      .join("; ");
    const fullAddress = [street, apt, city, region, postal, country].filter(Boolean).join(", ");

    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New order ${generatedId} — $${total.toFixed(2)} — ${name}${txHash ? " [TX]" : ""}`,
          _captcha: "false",
          _template: "table",
          "Order ID": generatedId,
          "Customer name": name,
          "Customer email": email,
          "Shipping address": fullAddress,
          Country: country,
          Items: itemsSummary,
          Subtotal: `$${subtotal.toFixed(2)}`,
          Shipping: shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`,
          Total: `$${total.toFixed(2)}`,
          "Payment coin": `${wallet.label} (${wallet.network})`,
          "Payment address": wallet.address,
          "Crypto amount estimate": cryptoAmount ? `${cryptoAmount} ${wallet.coin}` : "n/a",
          "TX hash": txHash || "not provided yet",
          Status: txHash ? "PAID — VERIFY TX" : "AWAITING PAYMENT",
        }),
      });

      const data = await res.json();
      if (data.success === "true" || data.success === true) {
        setDone({ orderId: generatedId, coin: selectedCoin, total });
        clearCart();
      } else {
        alert("Something went wrong. Please email support@titanpeptidelab.com to place your order.");
      }
    } catch {
      alert("Connection error. Please email support@titanpeptidelab.com with your order.");
    } finally {
      setSubmitting(false);
    }
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(wallet.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  if (done) {
    return (
      <>
        <Nav />
        <main className="min-h-screen bg-white">
          <div className="mx-auto max-w-xl px-6 py-24 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1e6f58]">
              <Check className="h-7 w-7 text-white" />
            </div>
            <h1 className="mt-6 font-serif text-[2rem] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
              Order received.
            </h1>
            <p className="mt-3 text-[14px] text-[#44514b]">
              Confirmation sent to your email.{" "}
              <span className="font-mono text-[#1e6f58]">{done.orderId}</span>
            </p>
            <p className="mt-6 text-[13px] leading-relaxed text-[#8a9690]">
              We verify payment on-chain and ship within 24 hours. You&apos;ll get a tracking number once packed.
            </p>
            <div className="mt-10">
              <Link
                href="/products"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#1e6f58] px-6 text-[14px] font-medium text-white transition-colors hover:bg-[#175946]"
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

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white pb-28 lg:pb-16">
        <div className="mx-auto max-w-5xl px-6 py-10 sm:py-14">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-[13px] text-[#8a9690] transition-colors hover:text-[#0f1613]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to catalog
          </Link>

          <div className="mt-6 flex items-end justify-between gap-4">
            <h1 className="font-serif text-[2rem] leading-[1.05] tracking-[-0.02em] text-[#0f1613] sm:text-[2.5rem]">
              Checkout
            </h1>
            <div className="hidden items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a9690] sm:inline-flex">
              <Lock className="h-3.5 w-3.5 text-[#1e6f58]" />
              Secure
            </div>
          </div>

          {/* Mobile: collapsible order summary */}
          <button
            type="button"
            onClick={() => setOrderSummaryOpen((v) => !v)}
            className="mt-6 flex w-full items-center justify-between rounded-xl border border-[#e7ece9] bg-[#fafbfa] px-4 py-3 lg:hidden"
          >
            <span className="text-[13px] font-medium text-[#0f1613]">
              {orderSummaryOpen ? "Hide" : "Show"} order · {items.length} item{items.length !== 1 ? "s" : ""}
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[14px] font-bold text-[#0f1613]">${total.toFixed(2)}</span>
              <ChevronDown
                className={`h-4 w-4 text-[#8a9690] transition-transform ${orderSummaryOpen ? "rotate-180" : ""}`}
              />
            </span>
          </button>
          {orderSummaryOpen && (
            <div className="mt-3 rounded-xl border border-[#e7ece9] bg-[#fafbfa] p-5 lg:hidden">
              <OrderLines items={items} />
              <Totals
                subtotal={subtotal}
                shipping={shipping}
                total={total}
                countryName={COUNTRIES.find((c) => c.code === country)?.name ?? country}
                freeAbove={zone.freeAbove}
              />
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 grid gap-10 lg:grid-cols-[1fr_380px]">
            <div className="space-y-10">
              {/* Step 1 — Payment method */}
              <section>
                <StepHeader n={1} title="Payment method" hint="Pick the coin you'll pay with" />
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {WALLET_OPTIONS.map((w) => {
                    const active = selectedCoin === w.coin;
                    return (
                      <button
                        key={w.coin}
                        type="button"
                        onClick={() => setSelectedCoin(w.coin)}
                        className={`rounded-xl border px-4 py-3 text-left transition-all ${
                          active
                            ? "border-[#1e6f58] bg-[#f3f9f6] shadow-[0_0_0_3px_rgba(30,111,88,0.08)]"
                            : "border-[#e7ece9] bg-white hover:border-[#1e6f58]/40"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[13px] font-bold text-[#0f1613]">{w.label}</span>
                          {active && <Check className="h-3.5 w-3.5 text-[#1e6f58]" />}
                        </div>
                        <p className="mt-0.5 text-[10px] uppercase tracking-wide text-[#8a9690]">
                          {w.network}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* Step 2 — Contact & shipping */}
              <section>
                <StepHeader n={2} title="Shipping" hint="Where should we send it" />
                <div className="mt-4 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      id="name"
                      label="Full name"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={setName}
                      placeholder="Jane Doe"
                    />
                    <Field
                      id="email"
                      label="Email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={setEmail}
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-[1fr_140px]">
                    <Field
                      id="street"
                      label="Street address"
                      required
                      autoComplete="address-line1"
                      value={street}
                      onChange={setStreet}
                      placeholder="123 Research Blvd"
                    />
                    <Field
                      id="apt"
                      label="Apt / Suite"
                      autoComplete="address-line2"
                      value={apt}
                      onChange={setApt}
                      placeholder="Suite 400"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <Field
                      id="city"
                      label="City"
                      required
                      autoComplete="address-level2"
                      value={city}
                      onChange={setCity}
                      placeholder="Austin"
                    />
                    <Field
                      id="region"
                      label="State / Region"
                      autoComplete="address-level1"
                      value={region}
                      onChange={setRegion}
                      placeholder="TX"
                    />
                    <Field
                      id="postal"
                      label="Postal code"
                      required
                      autoComplete="postal-code"
                      value={postal}
                      onChange={setPostal}
                      placeholder="78701"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-[12px] font-medium text-[#44514b]">
                      Country
                    </label>
                    <select
                      id="country"
                      value={country}
                      autoComplete="country"
                      onChange={(e) => setCountry(e.target.value)}
                      className="mt-1.5 h-11 w-full rounded-lg border border-[#e5e5e5] bg-white px-4 text-[14px] text-[#0f1613] transition-colors focus:border-[#1e6f58] focus:outline-none"
                    >
                      {COUNTRIES.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </section>

              {/* Step 3 — Send payment */}
              <section>
                <StepHeader n={3} title="Send payment" hint={`${wallet.label} · ${wallet.network}`} />
                <div className="mt-4 rounded-2xl border border-[#e7ece9] bg-[#fafbfa] p-5 sm:p-6">
                  <div className="grid gap-5 sm:grid-cols-[160px_1fr] sm:items-start">
                    <div className="mx-auto flex h-40 w-40 shrink-0 items-center justify-center rounded-xl border border-[#e7ece9] bg-white p-2 sm:mx-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        key={wallet.address}
                        src={qrSrc}
                        alt={`${wallet.label} wallet QR`}
                        width={320}
                        height={320}
                        className="h-full w-full"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                        Send
                      </p>
                      <p className="mt-1 font-serif text-[1.75rem] leading-none text-[#0f1613]">
                        {cryptoAmount ? (
                          <>
                            {cryptoAmount}{" "}
                            <span className="text-[1.25rem] text-[#44514b]">{wallet.coin.replace("-ERC", "").replace("-SOL", "")}</span>
                          </>
                        ) : (
                          <>${total.toFixed(2)}</>
                        )}
                      </p>
                      <p className="mt-1 text-[12px] text-[#8a9690]">
                        ≈ ${total.toFixed(2)} USD {cryptoAmount ? "· live rate" : ""}
                      </p>
                      <div className="mt-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                          To address
                        </p>
                        <button
                          type="button"
                          onClick={copyAddress}
                          className="mt-1.5 flex w-full items-center gap-2 rounded-lg border border-[#e7ece9] bg-white px-3 py-2.5 text-left transition-colors hover:border-[#1e6f58]/40"
                        >
                          <span className="flex-1 truncate font-mono text-[11px] text-[#44514b]">
                            {wallet.address}
                          </span>
                          {copied ? (
                            <span className="flex shrink-0 items-center gap-1 text-[11px] font-medium text-[#1e6f58]">
                              <Check className="h-3.5 w-3.5" /> Copied
                            </span>
                          ) : (
                            <span className="flex shrink-0 items-center gap-1 text-[11px] font-medium text-[#8a9690]">
                              <Copy className="h-3.5 w-3.5" /> Copy
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 border-t border-[#e7ece9] pt-5">
                    <label htmlFor="tx" className="block text-[12px] font-medium text-[#44514b]">
                      Transaction hash <span className="text-[#8a9690]">(optional — speeds up verification)</span>
                    </label>
                    <input
                      id="tx"
                      type="text"
                      value={txHash}
                      onChange={(e) => setTxHash(e.target.value)}
                      className="mt-1.5 h-11 w-full rounded-lg border border-[#e5e5e5] bg-white px-4 font-mono text-[12px] text-[#0f1613] transition-colors focus:border-[#1e6f58] focus:outline-none"
                      placeholder="Paste after sending — or leave blank and we'll email you"
                    />
                  </div>
                </div>
              </section>

              {/* Trust row */}
              <div className="grid gap-3 text-[12px] text-[#44514b] sm:grid-cols-3">
                <TrustRow icon={FileText} text="Lot-matched COA with every order" />
                <TrustRow icon={ShieldCheck} text="On-chain payment verification" />
                <TrustRow icon={Truck} text="Cold-chain ships within 24h" />
              </div>

              {/* Desktop CTA */}
              <button
                type="submit"
                disabled={!canSubmit || submitting}
                className="hidden h-14 w-full items-center justify-center gap-2.5 rounded-xl bg-[#1e6f58] text-[15px] font-semibold text-white transition-colors hover:bg-[#175946] disabled:cursor-not-allowed disabled:opacity-50 lg:flex"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Placing order…
                  </>
                ) : (
                  <>
                    <Lock className="h-4 w-4" />
                    Place order · ${total.toFixed(2)}
                  </>
                )}
              </button>
            </div>

            {/* Desktop order summary */}
            <aside className="hidden lg:block">
              <div className="sticky top-6 rounded-2xl border border-[#e7ece9] bg-[#fafbfa] p-6">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                  Order summary
                </h2>
                <div className="mt-5">
                  <OrderLines items={items} />
                </div>
                <div className="mt-5 border-t border-[#e7ece9] pt-4">
                  <Totals
                    subtotal={subtotal}
                    shipping={shipping}
                    total={total}
                    countryName={COUNTRIES.find((c) => c.code === country)?.name ?? country}
                    freeAbove={zone.freeAbove}
                  />
                </div>
              </div>
            </aside>

            {/* Mobile sticky CTA */}
            <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#e7ece9] bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
              <button
                type="submit"
                disabled={!canSubmit || submitting}
                className="flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#1e6f58] text-[15px] font-semibold text-white transition-colors hover:bg-[#175946] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Placing…
                  </>
                ) : (
                  <>
                    <Lock className="h-4 w-4" />
                    Place order · ${total.toFixed(2)}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

function StepHeader({ n, title, hint }: { n: number; title: string; hint: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1e6f58] text-[11px] font-bold text-white">
        {n}
      </span>
      <div>
        <h2 className="text-[16px] font-semibold text-[#0f1613]">{title}</h2>
        <p className="text-[12px] text-[#8a9690]">{hint}</p>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  required,
  type = "text",
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[12px] font-medium text-[#44514b]">
        {label}
        {required && <span className="ml-0.5 text-[#c87]">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1.5 h-11 w-full rounded-lg border border-[#e5e5e5] bg-white px-4 text-[14px] text-[#0f1613] transition-colors focus:border-[#1e6f58] focus:outline-none"
      />
    </div>
  );
}

function OrderLines({ items }: { items: ReturnType<typeof useCart>["items"] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.product.id} className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-[14px] font-medium text-[#0f1613]">{item.product.name}</p>
            <p className="text-[12px] text-[#8a9690]">
              {item.product.size} × {item.quantity}
            </p>
          </div>
          <p className="shrink-0 text-[14px] font-medium text-[#0f1613]">
            ${(item.product.price * item.quantity).toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
}

function Totals({
  subtotal,
  shipping,
  total,
  countryName,
  freeAbove,
}: {
  subtotal: number;
  shipping: number;
  total: number;
  countryName: string;
  freeAbove: number;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-[13px]">
        <span className="text-[#8a9690]">Subtotal</span>
        <span className="text-[#0f1613]">${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-[13px]">
        <span className="text-[#8a9690]">Shipping · {countryName}</span>
        <span className="text-[#0f1613]">
          {shipping === 0 ? (
            <span className="font-medium text-[#1e6f58]">Free</span>
          ) : (
            `$${shipping.toFixed(2)}`
          )}
        </span>
      </div>
      {shipping > 0 && (
        <p className="text-[11px] text-[#1e6f58]">Free shipping over ${freeAbove}</p>
      )}
      <div className="flex justify-between border-t border-[#e7ece9] pt-3 text-[15px]">
        <span className="font-semibold text-[#0f1613]">Total</span>
        <span className="font-bold text-[#0f1613]">${total.toFixed(2)}</span>
      </div>
    </div>
  );
}

function TrustRow({ icon: Icon, text }: { icon: typeof FileText; text: string }) {
  return (
    <div className="flex items-start gap-2.5 rounded-xl border border-[#e7ece9] bg-[#fafbfa] px-4 py-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#1e6f58]" />
      <span>{text}</span>
    </div>
  );
}
