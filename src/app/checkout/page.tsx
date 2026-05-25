"use client";

import { useCart } from "@/lib/cart-context";
import {
  getAttributionContext,
  trackOrderIntent,
  type AttributionContext,
} from "@/lib/analytics";
import { WALLETS, DISCOUNT_CODES } from "@/lib/products";
import { COUNTRIES, zoneForCountry } from "@/lib/countries";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import QRCode from "qrcode";
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
  HelpCircle,
  Globe,
  Gift,
  Wallet,
} from "lucide-react";

// Solana Pay USDC mint (public, well-known) — used to build SPL-token deep-links
// so Phantom/Solflare/etc. open with the correct token + amount pre-filled.
const USDC_SOL_MINT = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";

function buildPaymentUri(
  coin: Coin,
  address: string,
  amount: string | null,
): string {
  if (!address) return "";
  if (coin === "USDC-SOL") {
    const params = new URLSearchParams();
    if (amount) params.set("amount", amount);
    params.set("spl-token", USDC_SOL_MINT);
    return `solana:${address}?${params.toString()}`;
  }
  if (coin === "SOL") {
    return `solana:${address}${amount ? `?amount=${amount}` : ""}`;
  }
  if (coin === "BTC") {
    return `bitcoin:${address}${amount ? `?amount=${amount}` : ""}`;
  }
  if (coin === "ETH") {
    return `ethereum:${address}`;
  }
  // USDC-ERC: deep-link support is inconsistent across wallets — encode the
  // bare address so the QR still scans into any wallet without misrouting.
  return address;
}

type PaymentMethod = "crypto";

type Coin = "BTC" | "ETH" | "USDC-ERC" | "SOL" | "USDC-SOL";

type WalletOption = {
  coin: Coin;
  label: string;
  network: string;
  address: string;
  priceKey: "bitcoin" | "ethereum" | "solana" | "usd-coin";
  icon: string;
  deepLinkPrefix?: string;
};

const WALLET_OPTIONS: WalletOption[] = [
  { coin: "USDC-SOL", label: "USDC", network: "Solana", address: WALLETS.usdcSol, priceKey: "usd-coin", icon: "💲", deepLinkPrefix: "solana:" },
  { coin: "SOL", label: "Solana", network: "SOL", address: WALLETS.sol, priceKey: "solana", icon: "◎", deepLinkPrefix: "solana:" },
  { coin: "BTC", label: "Bitcoin", network: "BTC", address: WALLETS.btc, priceKey: "bitcoin", icon: "₿", deepLinkPrefix: "bitcoin:" },
  { coin: "ETH", label: "Ethereum", network: "ERC-20", address: WALLETS.eth, priceKey: "ethereum", icon: "⟠" },
  { coin: "USDC-ERC", label: "USDC", network: "ERC-20", address: WALLETS.usdcErc, priceKey: "usd-coin", icon: "💲" },
];

// Orders go through our own /api/order route when running with a Node host.
// On the static GitHub Pages build there is no server, so we fall back to a
// mailto: submission that opens the customer's email client pre-filled with
// the full order. Either way the customer ends up with a reference order ID.
const ORDER_ENDPOINT = "/api/order";
const ORDER_INBOX = "support@titanpeptidelab.com";
// Static-host fallback: Formsubmit forwards form payloads to the order inbox
// without any server. Zero signup; first inbound triggers a one-click activation
// email. Keeps the customer on-site instead of bouncing to mailto.
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/support@titanpeptidelab.com";

function makeOrderId() {
  const ts = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `TPL-${ts.slice(-4)}${rand}`;
}

type PriceMap = Partial<Record<WalletOption["priceKey"], number>>;

export default function CheckoutPage() {
  const { items, subtotal, clearCart, hydrated } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<null | {
    orderId: string;
    coin: Coin;
    total: number;
    paymentLabel: string;
    paymentNetwork: string;
    paymentAddress: string;
    cryptoAmount: string | null;
    receipt: string;
    mailtoHref: string;
  }>(null);
  const [copied, setCopied] = useState<"address" | "amount" | "receipt" | null>(null);
  const [prices, setPrices] = useState<PriceMap>({});
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const [previewQrDataUrl, setPreviewQrDataUrl] = useState<string>("");
  const [orderSummaryOpen, setOrderSummaryOpen] = useState(false);
  const [cryptoHelpOpen, setCryptoHelpOpen] = useState(true);

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("crypto");
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
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState<{ code: string; percent: number } | null>(null);
  const [discountError, setDiscountError] = useState("");

  // Generate QR for the wallet deep-link once the order is finalized. Browser-
  // side base64 PNG; closes the QR promise the checkout copy makes in 5 places.
  useEffect(() => {
    if (!done) {
      setQrDataUrl("");
      return;
    }
    const uri = buildPaymentUri(done.coin, done.paymentAddress, done.cryptoAmount);
    if (!uri) {
      setQrDataUrl("");
      return;
    }
    let cancelled = false;
    QRCode.toDataURL(uri, {
      errorCorrectionLevel: "M",
      margin: 2,
      scale: 6,
      color: { dark: "#0f1613", light: "#ffffff" },
    })
      .then((url) => {
        if (!cancelled) setQrDataUrl(url);
      })
      .catch(() => {
        if (!cancelled) setQrDataUrl("");
      });
    return () => {
      cancelled = true;
    };
  }, [done]);

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
  const discountAmount = appliedDiscount ? subtotal * (appliedDiscount.percent / 100) : 0;
  const total = subtotal - discountAmount + shipping;

  const applyDiscount = () => {
    const upper = discountCode.trim().toUpperCase();
    const match = DISCOUNT_CODES[upper as keyof typeof DISCOUNT_CODES];
    if (match) {
      setAppliedDiscount({ code: upper, percent: match.percent });
      setDiscountError("");
    } else {
      setAppliedDiscount(null);
      setDiscountError("Invalid code");
    }
  };

  const removeDiscount = () => {
    setAppliedDiscount(null);
    setDiscountCode("");
    setDiscountError("");
  };

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

  useEffect(() => {
    const uri = buildPaymentUri(wallet.coin, wallet.address, cryptoAmount);
    if (!uri) {
      setPreviewQrDataUrl("");
      return;
    }
    let cancelled = false;
    QRCode.toDataURL(uri, {
      errorCorrectionLevel: "M",
      margin: 2,
      scale: 5,
      color: { dark: "#0f1613", light: "#ffffff" },
    })
      .then((url) => {
        if (!cancelled) setPreviewQrDataUrl(url);
      })
      .catch(() => {
        if (!cancelled) setPreviewQrDataUrl("");
      });
    return () => {
      cancelled = true;
    };
  }, [cryptoAmount, wallet.address, wallet.coin]);

  const completeOrder = (orderId: string, attribution: AttributionContext = {}) => {
    const fullAddress = [street, apt, city, region, postal, country].filter(Boolean).join(", ");
    const receiptLines = [
      `Order ID: ${orderId}`,
      ``,
      `Customer: ${name}`,
      `Email: ${email}`,
      `Country: ${country}`,
      `Ship to: ${fullAddress}`,
      ``,
      `Items:`,
      ...items.map((i) => `  - ${i.product.name} (${i.product.size}) × ${i.quantity}  $${(i.product.price * i.quantity).toFixed(2)}`),
      ``,
      `Subtotal: $${subtotal.toFixed(2)}`,
      ...(appliedDiscount ? [`Discount: ${appliedDiscount.code} (-${appliedDiscount.percent}%)  -$${discountAmount.toFixed(2)}`] : []),
      `Shipping: ${shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}`,
      `Total: $${total.toFixed(2)}`,
      ``,
      `Payment: ${wallet.label} (${wallet.network})`,
      `${cryptoAmount ? `Send: ${cryptoAmount} ${wallet.coin}` : `Amount: $${total.toFixed(2)} USD`}`,
      `To address: ${wallet.address}`,
      `TX hash: ${txHash || "(will send after transfer)"}`,
      ...(attribution.oc_touch_id ? [`Touch ID: ${attribution.oc_touch_id}`] : []),
      ...(attribution.utm_source ? [`UTM source: ${attribution.utm_source}`] : []),
      ``,
      `— from titanpeptidelab.com checkout`,
    ];
    const receipt = receiptLines.join("\n");
    const subject = `Order ${orderId} — $${total.toFixed(2)} via ${wallet.label}`;
    const mailtoHref = `mailto:${ORDER_INBOX}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(receipt)}`;
    setDone({
      orderId,
      coin: selectedCoin,
      total,
      paymentLabel: wallet.label,
      paymentNetwork: wallet.network,
      paymentAddress: wallet.address,
      cryptoAmount,
      receipt,
      mailtoHref,
    });
    clearCart();
    return mailtoHref;
  };

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

    const fullAddress = [street, apt, city, region, postal, country].filter(Boolean).join(", ");
    const orderId = makeOrderId();
    let attribution: AttributionContext = {};

    // checkout must still work even when tracking/session storage fails.
    try {
      attribution = getAttributionContext();
      trackOrderIntent({
        orderId,
        cartValueUsd: total,
        itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
        unitSkus: items.map((item) => item.product.id),
        source: "checkout_form",
      });
    } catch {
      attribution = {};
    }

    const itemLines = items
      .map((i) => `${i.product.name} (${i.product.size}) x ${i.quantity} = $${(i.product.price * i.quantity).toFixed(2)}`)
      .join("\n");

    const formPayload = {
      _subject: `New order: ${orderId} - $${total.toFixed(2)} via ${wallet.label}`,
      _captcha: "false",
      _template: "table",
      orderId,
      customerName: name,
      customerEmail: email,
      country,
      shippingAddress: fullAddress,
      items: itemLines,
      subtotal: `$${subtotal.toFixed(2)}`,
      discount: appliedDiscount ? `${appliedDiscount.code} (-${appliedDiscount.percent}%) -$${discountAmount.toFixed(2)}` : "none",
      shipping: shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`,
      total: `$${total.toFixed(2)}`,
      paymentCoin: `${wallet.label} (${wallet.network})`,
      paymentAddress: wallet.address,
      cryptoAmount: cryptoAmount ? `${cryptoAmount} ${wallet.coin}` : `$${total.toFixed(2)} USD`,
      txHash: txHash || "(will send after transfer)",
      ocTouchId: attribution.oc_touch_id || "",
      refCode: attribution.ref || "",
      utmSource: attribution.utm_source || "",
      utmMedium: attribution.utm_medium || "",
      utmCampaign: attribution.utm_campaign || "",
      utmContent: attribution.utm_content || "",
      utmTerm: attribution.utm_term || "",
      attributionSessionId: attribution.session_id || "",
    };

    // Ship the confirmation UI immediately so the buyer always has a working
    // path forward (copy receipt / email support) even if every backend rail
    // is down. The intake POSTs below are best-effort, fire-and-forget.
    const mailtoHref = completeOrder(orderId, attribution);
    setSubmitting(false);

    // Static checkout cannot rely on /api/order being available on GitHub
    // Pages. Open the prefilled order email immediately so the support-side
    // order record is not silently lost before the buyer sends crypto.
    window.setTimeout(() => {
      window.location.href = mailtoHref;
    }, 100);

    // Fire-and-forget intake: try Node /api/order (in case a backend is wired
    // later), then Formsubmit. Both may 405/521 on the current static deploy
    // — that's fine, the buyer already has the receipt panel with copy +
    // email-support actions.
    const fireForget = async () => {
      const apiPayload = {
        items: items.map((i) => ({
          productId: i.product.id,
          name: i.product.name,
          quantity: i.quantity,
          price: i.product.price,
        })),
        orderId,
        name,
        email,
        country,
        address: fullAddress,
        shipping,
        total,
        source: attribution.ref || "checkout",
        ocTouchId: attribution.oc_touch_id || undefined,
        refCode: attribution.ref || undefined,
        utmSource: attribution.utm_source || undefined,
        utmMedium: attribution.utm_medium || undefined,
        utmCampaign: attribution.utm_campaign || undefined,
        utmContent: attribution.utm_content || undefined,
        utmTerm: attribution.utm_term || undefined,
        attributionSessionId: attribution.session_id || undefined,
        discountCode: appliedDiscount?.code || undefined,
        discountPercent: appliedDiscount?.percent || undefined,
        discountAmount: discountAmount || undefined,
        paymentMethod,
        paymentCoin: `${wallet.label} (${wallet.network})`,
        paymentAddress: wallet.address,
        cryptoAmount: cryptoAmount ? `${cryptoAmount} ${wallet.coin}` : undefined,
        txHash: txHash || undefined,
      };
      try {
        const ctrl = new AbortController();
        const tid = setTimeout(() => ctrl.abort(), 1500);
        await fetch(ORDER_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(apiPayload),
          signal: ctrl.signal,
        });
        clearTimeout(tid);
      } catch { /* ignore */ }
      try {
        const fctrl = new AbortController();
        const ftid = setTimeout(() => fctrl.abort(), 4000);
        await fetch(FORMSUBMIT_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(formPayload),
          signal: fctrl.signal,
        });
        clearTimeout(ftid);
      } catch { /* ignore */ }
    };
    void fireForget();
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
              Order details ready.
            </h1>
            <p className="mt-3 text-[14px] text-[#44514b]">
              Your order ID:{" "}
              <span className="font-mono text-[#1e6f58]">{done.orderId}</span>
            </p>
            <p className="mt-2 text-[13px] text-[#8a9690]">
              Save this order ID and send the prefilled email before paying — that is what lets us match your on-chain transfer.
            </p>
            <div className="mx-auto mt-6 max-w-sm rounded-2xl border border-[#d9e7e0] bg-[#f3f9f6] p-5 text-left">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1e6f58]">Payment reference</p>
              <p className="mt-2 font-serif text-[1.5rem] leading-none text-[#0f1613]">
                {done.cryptoAmount ? `${done.cryptoAmount} ${done.coin.replace("-ERC", "").replace("-SOL", "")}` : `$${done.total.toFixed(2)} USD`}
              </p>
              <p className="mt-2 text-[12px] text-[#44514b]">
                Send on <span className="font-medium text-[#0f1613]">{done.paymentLabel} · {done.paymentNetwork}</span> only after your order email is sent.
              </p>
              {qrDataUrl ? (
                <div className="mt-4 flex flex-col items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={qrDataUrl}
                    alt={`QR code to send ${done.cryptoAmount ?? ""} on ${done.paymentLabel} (${done.paymentNetwork}) to Titan order ${done.orderId}`}
                    width={192}
                    height={192}
                    className="h-48 w-48 rounded-xl border border-[#d9e7e0] bg-white p-2"
                  />
                  <a
                    href={buildPaymentUri(done.coin, done.paymentAddress, done.cryptoAmount)}
                    className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-[#1e6f58] bg-white px-4 text-[12px] font-medium text-[#1e6f58] transition-colors hover:bg-[#f3f9f6] sm:hidden"
                  >
                    <Wallet className="h-3.5 w-3.5" />
                    Open in wallet app
                  </a>
                  <p className="text-center text-[11px] leading-4 text-[#6b7a73] sm:hidden">
                    Tap to open Phantom, MetaMask, or your wallet with the amount pre-filled.
                  </p>
                </div>
              ) : null}
              <p className="mt-3 break-all rounded-lg border border-[#d9e7e0] bg-white px-3 py-2.5 font-mono text-[11px] leading-5 text-[#44514b]">
                {done.paymentAddress}
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {done.cryptoAmount && (
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(done.cryptoAmount ?? "");
                      setCopied("amount");
                      setTimeout(() => setCopied(null), 1800);
                    }}
                    className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-[#1e6f58] bg-white px-3 text-[12px] font-medium text-[#1e6f58] transition-colors hover:bg-[#f3f9f6]"
                  >
                    {copied === "amount" ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied === "amount" ? "Amount copied" : "Copy amount"}
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(done.paymentAddress);
                    setCopied("address");
                    setTimeout(() => setCopied(null), 1800);
                  }}
                  className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-[#1e6f58] bg-white px-3 text-[12px] font-medium text-[#1e6f58] transition-colors hover:bg-[#f3f9f6]"
                >
                  {copied === "address" ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied === "address" ? "Address copied" : "Copy address"}
                </button>
              </div>
              <p className="mt-2 text-[11px] leading-5 text-[#6b7a73]">
                Network must match the option selected at checkout. Keep your transaction hash with this order ID.
              </p>
            </div>
            <div className="mx-auto mt-8 max-w-sm rounded-2xl border border-[#e7ece9] bg-[#fafbfa] p-5 text-left text-[13px] leading-relaxed text-[#44514b]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">What happens next</p>
              <ol className="mt-3 space-y-2.5">
                <li className="flex gap-2.5"><span className="mt-0.5 text-[#1e6f58]">1.</span><span>Send the prefilled order email to support.</span></li>
                <li className="flex gap-2.5"><span className="mt-0.5 text-[#1e6f58]">2.</span><span>Send the exact crypto amount above on the selected network.</span></li>
                <li className="flex gap-2.5"><span className="mt-0.5 text-[#1e6f58]">3.</span><span>We verify on-chain — usually under 30 minutes — then cold-chain dispatch within 24h.</span></li>
              </ol>
            </div>
            <div className="mx-auto mt-6 max-w-sm rounded-2xl border border-[#e7ece9] bg-white p-5 text-left">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                Send us your order details
              </p>
              <p className="mt-2 text-[12px] leading-5 text-[#44514b]">
                We try to open your email app automatically. If it did not open, tap the button below or copy the receipt — send this before sending crypto.
              </p>
              <div className="mt-3 grid gap-2">
                <a
                  href={done.mailtoHref}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#1e6f58] px-4 text-[13px] font-medium text-white transition-colors hover:bg-[#175946]"
                >
                  Email order to support first
                </a>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(done.receipt);
                    setCopied("receipt");
                    setTimeout(() => setCopied(null), 1800);
                  }}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-[#1e6f58] px-4 text-[13px] font-medium text-[#1e6f58] transition-colors hover:bg-[#f3f9f6]"
                >
                  {copied === "receipt" ? (
                    <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5" /> Receipt copied</span>
                  ) : (
                    <span className="flex items-center gap-1.5"><Copy className="h-3.5 w-3.5" /> Copy full receipt</span>
                  )}
                </button>
              </div>
              <details className="mt-3 text-[11px] text-[#8a9690]">
                <summary className="cursor-pointer select-none hover:text-[#1e6f58]">Show full receipt</summary>
                <pre className="mt-2 max-h-64 overflow-auto whitespace-pre-wrap rounded-lg border border-[#e7ece9] bg-[#fafbfa] p-3 font-mono text-[10px] leading-4 text-[#44514b]">
{done.receipt}
                </pre>
              </details>
            </div>
            <div className="mt-8 flex flex-col items-center gap-3">
              <Link
                href="/products"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#1e6f58] px-6 text-[14px] font-medium text-white transition-colors hover:bg-[#175946]"
              >
                Continue browsing
              </Link>
              <a
                href={`mailto:support@titanpeptidelab.com?subject=Order%20${done.orderId}`}
                className="text-[12px] text-[#8a9690] underline decoration-[#8a9690]/30 underline-offset-4 hover:text-[#1e6f58]"
              >
                Questions about order {done.orderId}? Email support.
              </a>
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
            <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
              <Globe className="h-3.5 w-3.5 text-[#1e6f58]" />
              Ships worldwide
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
                discount={appliedDiscount}
                discountAmount={discountAmount}
              />
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 grid gap-10 lg:grid-cols-[1fr_380px]">
            <div className="space-y-8">
              {/* Shipping — first because it's what people expect */}
              <section>
                <h2 className="flex items-center gap-2 text-[16px] font-semibold text-[#0f1613]">
                  <Truck className="h-4 w-4 text-[#1e6f58]" />
                  Shipping
                </h2>
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
                    />
                    <Field
                      id="region"
                      label="State / Region"
                      autoComplete="address-level1"
                      value={region}
                      onChange={setRegion}
                    />
                    <Field
                      id="postal"
                      label="Postal code"
                      required
                      autoComplete="postal-code"
                      value={postal}
                      onChange={setPostal}
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
                    {shipping > 0 && (
                      <p className="mt-1.5 text-[11px] text-[#1e6f58]">
                        Shipping: ${shipping} · Free over ${zone.freeAbove}
                      </p>
                    )}
                    {shipping === 0 && (
                      <p className="mt-1.5 text-[11px] font-medium text-[#1e6f58]">
                        Free shipping to {COUNTRIES.find((c) => c.code === country)?.name ?? country}
                      </p>
                    )}
                  </div>
                </div>
              </section>

              {/* Discount code */}
              <section>
                <h2 className="flex items-center gap-2 text-[16px] font-semibold text-[#0f1613]">
                  <Gift className="h-4 w-4 text-[#1e6f58]" />
                  Discount code
                </h2>
                <div className="mt-3">
                  {appliedDiscount ? (
                    <div className="flex items-center justify-between rounded-lg border border-[#1e6f58]/30 bg-[#f3f9f6] px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#1e6f58]" />
                        <span className="text-[14px] font-medium text-[#1e6f58]">
                          {appliedDiscount.code} — {appliedDiscount.percent}% off
                        </span>
                        <span className="text-[13px] text-[#8a9690]">
                          (-${discountAmount.toFixed(2)})
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={removeDiscount}
                        className="text-[12px] text-[#8a9690] underline hover:text-[#c87]"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={discountCode}
                        onChange={(e) => { setDiscountCode(e.target.value); setDiscountError(""); }}
                        placeholder="Enter code"
                        className="h-11 flex-1 rounded-lg border border-[#e5e5e5] bg-white px-4 text-[14px] text-[#0f1613] uppercase tracking-wide transition-colors focus:border-[#1e6f58] focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={applyDiscount}
                        disabled={!discountCode.trim()}
                        className="h-11 rounded-lg border border-[#1e6f58] px-5 text-[13px] font-medium text-[#1e6f58] transition-colors hover:bg-[#f3f9f6] disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        Apply
                      </button>
                    </div>
                  )}
                  {discountError && (
                    <p className="mt-1.5 text-[12px] text-[#c87]">{discountError}</p>
                  )}
                </div>
              </section>

              {/* Payment method toggle */}
              <section>
                <h2 className="flex items-center gap-2 text-[16px] font-semibold text-[#0f1613]">
                  <Lock className="h-4 w-4 text-[#1e6f58]" />
                  Payment
                </h2>

                {/* ─── Crypto payment section ─── */}
                {paymentMethod === "crypto" && (
                  <>
                    {/* Coin selector */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {WALLET_OPTIONS.map((w) => {
                        const active = selectedCoin === w.coin;
                        return (
                          <button
                            key={w.coin}
                            type="button"
                            onClick={() => setSelectedCoin(w.coin)}
                            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[13px] font-medium transition-all ${
                              active
                                ? "border-[#1e6f58] bg-[#f3f9f6] text-[#1e6f58] shadow-[0_0_0_3px_rgba(30,111,88,0.08)]"
                                : "border-[#e7ece9] bg-white text-[#44514b] hover:border-[#1e6f58]/40"
                            }`}
                          >
                            <span className="text-[15px]">{w.icon}</span>
                            <span>{w.label}</span>
                            <span className="text-[10px] uppercase text-[#8a9690]">{w.network}</span>
                            {active && <Check className="h-3.5 w-3.5 text-[#1e6f58]" />}
                          </button>
                        );
                      })}
                    </div>

                    {/* Payment card */}
                    <div className="mt-5 rounded-2xl border border-[#d9e7e0] bg-[#f3f9f6] p-5 sm:p-6">
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#d9e7e0] bg-white text-[1.75rem]">
                          {wallet.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1e6f58]">
                            Payment rail selected
                          </p>
                          <h3 className="mt-1 font-serif text-[1.45rem] leading-tight text-[#0f1613]">
                            {wallet.label} · {wallet.network}
                          </h3>
                          <p className="mt-2 text-[13px] leading-6 text-[#44514b]">
                            Wallet address and QR are visible here so you can verify the rail before submitting. Create the order ID before sending so support can match the transfer.
                          </p>
                          <div className="mt-4 grid gap-2 text-[12px] text-[#44514b] sm:grid-cols-3">
                            <div className="rounded-xl border border-[#d9e7e0] bg-white px-3 py-2.5">
                              <p className="text-[10px] uppercase tracking-[0.12em] text-[#8a9690]">Order total</p>
                              <p className="mt-1 font-medium text-[#0f1613]">${total.toFixed(2)} USD</p>
                            </div>
                            <div className="rounded-xl border border-[#d9e7e0] bg-white px-3 py-2.5">
                              <p className="text-[10px] uppercase tracking-[0.12em] text-[#8a9690]">
                                You&apos;ll send
                              </p>
                              <p className="mt-1 font-medium text-[#0f1613]" aria-live="polite">
                                {cryptoAmount ? (
                                  <>≈ {cryptoAmount} <span className="text-[#1e6f58]">{wallet.coin.replace("-ERC", "").replace("-SOL", "")}</span></>
                                ) : (
                                  <span className="text-[#8a9690]">Loading rate…</span>
                                )}
                              </p>
                            </div>
                            <div className="rounded-xl border border-[#d9e7e0] bg-white px-3 py-2.5">
                              <p className="text-[10px] uppercase tracking-[0.12em] text-[#8a9690]">Safety gate</p>
                              <p className="mt-1 font-medium text-[#0f1613]">Email before payment</p>
                            </div>
                          </div>
                          {cryptoAmount ? (
                            <p className="mt-2 text-[11px] leading-5 text-[#6b7a73]">
                              Live {wallet.label} rate · Confirm your wallet has at least this amount on {wallet.network} before submitting. Final amount locks on the next screen.
                            </p>
                          ) : null}
                          <p className="mt-4 rounded-xl border border-[#f0d6a1] bg-[#fff8e8] px-4 py-3 text-[12px] leading-5 text-[#6d4b14]">
                            Do not send crypto from this preview. Submit the form first so your order email and on-chain payment can be matched.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 grid gap-4 rounded-2xl border border-[#d9e7e0] bg-white p-4 sm:grid-cols-[144px_1fr] sm:items-start">
                        <div className="flex justify-center sm:justify-start">
                          {previewQrDataUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={previewQrDataUrl}
                              alt={`${wallet.label} ${wallet.network} payment QR`}
                              width={132}
                              height={132}
                              className="h-[132px] w-[132px] rounded-xl border border-[#d9e7e0] bg-white p-2"
                            />
                          ) : (
                            <div className="flex h-[132px] w-[132px] items-center justify-center rounded-xl border border-[#d9e7e0] bg-[#fafbfa] text-center text-[11px] leading-4 text-[#8a9690]">
                              QR loads after rate check
                            </div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8a9690]">
                            Wallet address
                          </p>
                          <p className="mt-2 break-all rounded-lg border border-[#e7ece9] bg-[#fafbfa] px-3 py-2.5 font-mono text-[11px] leading-5 text-[#0f1613]">
                            {wallet.address}
                          </p>
                          <div className="mt-3 grid gap-2 sm:grid-cols-2">
                            {cryptoAmount && (
                              <button
                                type="button"
                                onClick={() => {
                                  navigator.clipboard.writeText(cryptoAmount);
                                  setCopied("amount");
                                  setTimeout(() => setCopied(null), 1800);
                                }}
                                className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-[#1e6f58] bg-white px-3 text-[12px] font-medium text-[#1e6f58] transition-colors hover:bg-[#f3f9f6]"
                              >
                                {copied === "amount" ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                                {copied === "amount" ? "Amount copied" : "Copy amount"}
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={() => {
                                navigator.clipboard.writeText(wallet.address);
                                setCopied("address");
                                setTimeout(() => setCopied(null), 1800);
                              }}
                              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-[#1e6f58] bg-white px-3 text-[12px] font-medium text-[#1e6f58] transition-colors hover:bg-[#f3f9f6]"
                            >
                              {copied === "address" ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                              {copied === "address" ? "Address copied" : "Copy address"}
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* TX hash */}
                      <div className="mt-5 border-t border-[#d9e7e0] pt-5">
                        <label htmlFor="tx" className="block text-[12px] font-medium text-[#44514b]">
                          Transaction hash <span className="text-[#8a9690]">(optional — paste here only if you already sent after receiving an order ID)</span>
                        </label>
                        <input
                          id="tx"
                          type="text"
                          value={txHash}
                          onChange={(e) => setTxHash(e.target.value)}
                          className="mt-1.5 h-11 w-full rounded-lg border border-[#e5e5e5] bg-white px-4 font-mono text-[12px] text-[#0f1613] transition-colors focus:border-[#1e6f58] focus:outline-none"
                          placeholder="Optional after payment confirmation"
                        />
                      </div>
                    </div>

                    {/* New to crypto? */}
                    <button
                      type="button"
                      onClick={() => setCryptoHelpOpen((v) => !v)}
                      className="mt-3 flex w-full items-center gap-2 rounded-xl border border-[#e7ece9] bg-white px-4 py-3 text-left text-[13px] text-[#44514b] transition-colors hover:bg-[#fafbfa]"
                    >
                      <HelpCircle className="h-4 w-4 shrink-0 text-[#1e6f58]" />
                      <span className="flex-1 font-medium">New to crypto? Here&apos;s how to pay in 3 minutes</span>
                      <ChevronDown className={`h-4 w-4 text-[#8a9690] transition-transform ${cryptoHelpOpen ? "rotate-180" : ""}`} />
                    </button>
                    {cryptoHelpOpen && (
                      <div className="mt-2 rounded-xl border border-[#e7ece9] bg-[#fafbfa] p-5 text-[13px] leading-relaxed text-[#44514b]">
                        <ol className="space-y-3">
                          <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1e6f58] text-[11px] font-bold text-white">1</span>
                            <div>
                              <p className="font-medium text-[#0f1613]">Get a wallet app</p>
                              <p className="mt-0.5 text-[12px] text-[#8a9690]">
                                Download <a href="https://phantom.app" target="_blank" rel="noreferrer" className="text-[#1e6f58] underline">Phantom</a> (easiest, works on phone) or <a href="https://metamask.io" target="_blank" rel="noreferrer" className="text-[#1e6f58] underline">MetaMask</a>. Takes 60 seconds.
                              </p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1e6f58] text-[11px] font-bold text-white">2</span>
                            <div>
                              <p className="font-medium text-[#0f1613]">Buy USDC</p>
                              <p className="mt-0.5 text-[12px] text-[#8a9690]">
                                Inside Phantom, tap &quot;Buy&quot; and purchase USDC with your card. USDC = 1 dollar, no price swings.
                              </p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1e6f58] text-[11px] font-bold text-white">3</span>
                            <div>
                              <p className="font-medium text-[#0f1613]">Scan the QR or copy the address</p>
                              <p className="mt-0.5 text-[12px] text-[#8a9690]">
                                Send the exact amount shown above. On phone, just tap the QR code to open your wallet. That&apos;s it.
                              </p>
                            </div>
                          </li>
                        </ol>
                        <p className="mt-4 flex items-start gap-2 rounded-lg bg-[#f3f9f6] px-3 py-2 text-[11px] text-[#1e6f58]">
                          <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                          We recommend USDC on Solana — fastest, cheapest fees (under $0.01), and 1 USDC always = $1.
                        </p>
                      </div>
                    )}
                  </>
                )}
              </section>

              {/* Trust row */}
              <div className="grid gap-3 text-[12px] text-[#44514b] sm:grid-cols-3">
                <TrustRow icon={FileText} text="Lot release sheet with every order" />
                <TrustRow icon={ShieldCheck} text="On-chain payment verification" />
                <TrustRow icon={Truck} text="Cold-chain ships within 24h" />
              </div>

              {/* Support callout */}
              <p className="text-center text-[12px] text-[#8a9690] sm:text-left">
                Stuck on something? Email{" "}
                <a
                  href="mailto:support@titanpeptidelab.com"
                  className="text-[#1e6f58] underline decoration-[#1e6f58]/30 underline-offset-4 hover:decoration-[#1e6f58]"
                >
                  support@titanpeptidelab.com
                </a>
                {" "}— we reply in 24–48h, usually same day.
              </p>

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
                    Create order ID · ${total.toFixed(2)}
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
                    discount={appliedDiscount}
                    discountAmount={discountAmount}
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
                    Create order ID · ${total.toFixed(2)}
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
  discount,
  discountAmount,
}: {
  subtotal: number;
  shipping: number;
  total: number;
  countryName: string;
  freeAbove: number;
  discount?: { code: string; percent: number } | null;
  discountAmount?: number;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-[13px]">
        <span className="text-[#8a9690]">Subtotal</span>
        <span className="text-[#0f1613]">${subtotal.toFixed(2)}</span>
      </div>
      {discount && discountAmount ? (
        <div className="flex justify-between text-[13px]">
          <span className="text-[#1e6f58]">{discount.code} ({discount.percent}% off)</span>
          <span className="font-medium text-[#1e6f58]">-${discountAmount.toFixed(2)}</span>
        </div>
      ) : null}
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
