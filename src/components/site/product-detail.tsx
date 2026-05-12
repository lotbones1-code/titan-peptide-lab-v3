"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Check,
  ChevronLeft,
  Copy,
  Wallet as WalletIcon,
  ShieldCheck,
  Truck,
  FileCheck2,
  Package,
  Loader2,
  type LucideIcon,
} from "lucide-react";
import { type Product, WALLETS, DISCOUNT_CODES } from "@/lib/products";
import { CompoundPoster } from "./compound-poster";

type ChainKey = "btc" | "eth" | "usdcErc" | "sol" | "usdcSol";
type ShippingRegionKey =
  | "us"
  | "canada"
  | "latin-america"
  | "europe-uk"
  | "asia-pacific"
  | "middle-east-africa";

const CHAINS: { key: ChainKey; label: string; chain: string; icon: string }[] = [
  { key: "btc", label: "Bitcoin", chain: "Bitcoin", icon: "BTC" },
  { key: "eth", label: "Ethereum", chain: "Ethereum", icon: "ETH" },
  { key: "usdcErc", label: "USDC (ERC-20)", chain: "Ethereum", icon: "USDC" },
  { key: "sol", label: "Solana", chain: "Solana", icon: "SOL" },
  { key: "usdcSol", label: "USDC (SPL)", chain: "Solana", icon: "USDC" },
];

const SHIPPING_REGIONS: {
  key: ShippingRegionKey;
  label: string;
  shipping: number;
  freeThreshold: number;
  note: string;
  customs: string;
  recommendedChains: ChainKey[];
}[] = [
  {
    key: "us",
    label: "United States",
    shipping: 12,
    freeThreshold: 150,
    note: "US domestic shipping with standard cold-conscious packing.",
    customs: "No customs step for US domestic orders.",
    recommendedChains: ["usdcSol", "sol", "btc", "eth"],
  },
  {
    key: "canada",
    label: "Canada",
    shipping: 18,
    freeThreshold: 200,
    note: "Canada orders ship with international labeling and tracking.",
    customs: "Buyer may need to handle taxes or customs on arrival.",
    recommendedChains: ["btc", "eth", "usdcErc", "usdcSol"],
  },
  {
    key: "latin-america",
    label: "Latin America",
    shipping: 24,
    freeThreshold: 250,
    note: "Latin America orders get extra address review before dispatch.",
    customs: "Buyer remains responsible for local import rules and duties.",
    recommendedChains: ["btc", "usdcErc", "eth", "usdcSol"],
  },
  {
    key: "europe-uk",
    label: "Europe / UK",
    shipping: 28,
    freeThreshold: 250,
    note: "Europe and UK orders move through tracked express lanes where available.",
    customs: "VAT, duties, or brokerage can be collected locally by the carrier.",
    recommendedChains: ["btc", "eth", "usdcErc", "usdcSol"],
  },
  {
    key: "asia-pacific",
    label: "Asia-Pacific",
    shipping: 32,
    freeThreshold: 300,
    note: "Asia-Pacific orders receive extra address verification and export review.",
    customs: "Buyer remains responsible for local import restrictions and carrier fees.",
    recommendedChains: ["btc", "eth", "usdcErc", "usdcSol"],
  },
  {
    key: "middle-east-africa",
    label: "Middle East / Africa",
    shipping: 34,
    freeThreshold: 300,
    note: "Long-haul destinations are reviewed manually before release.",
    customs: "Buyer remains responsible for customs, duties, and local regulations.",
    recommendedChains: ["btc", "eth", "usdcErc"],
  },
];

const COUNTRY_CODES = [
  "AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "CV", "KH", "CM", "CA", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "CI", "HR", "CU", "CW", "CY", "CZ", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "SZ", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MK", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "UM", "US", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW", "XK",
] as const;

type CountryCode = (typeof COUNTRY_CODES)[number];

const COUNTRY_NAME_OVERRIDES: Partial<Record<CountryCode, string>> = {
  XK: "Kosovo",
};

const REGION_COUNTRY_CODES: Record<ShippingRegionKey, readonly CountryCode[]> = {
  us: ["US", "AS", "GU", "MP", "PR", "UM", "VI"],
  canada: ["CA"],
  "latin-america": [
    "AI", "AG", "AR", "AW", "BS", "BB", "BZ", "BM", "BO", "BQ", "BR", "KY", "CL", "CO", "CR", "CU", "CW", "DM", "DO", "EC", "SV", "FK", "GF", "GD", "GP", "GT", "GY", "HT", "HN", "JM", "MQ", "MX", "MS", "NI", "PA", "PY", "PE", "BL", "KN", "LC", "MF", "PM", "VC", "SX", "SR", "TT", "TC", "UY", "VE", "VG",
  ],
  "europe-uk": [
    "AX", "AL", "AD", "AT", "BY", "BE", "BA", "BG", "HR", "CY", "CZ", "DK", "EE", "FO", "FI", "FR", "DE", "GI", "GR", "GG", "VA", "HU", "IS", "IE", "IM", "IT", "JE", "XK", "LV", "LI", "LT", "LU", "MT", "MD", "MC", "ME", "NL", "MK", "NO", "PL", "PT", "RO", "RU", "SM", "RS", "SK", "SI", "ES", "SJ", "SE", "CH", "UA", "GB",
  ],
  "asia-pacific": [
    "AF", "AQ", "AU", "BD", "BT", "BN", "KH", "CN", "CX", "CC", "CK", "FJ", "PF", "TF", "HK", "HM", "IN", "ID", "IO", "JP", "KZ", "KI", "KP", "KR", "KG", "LA", "MO", "MY", "MV", "MH", "FM", "MN", "MM", "NR", "NP", "NC", "NZ", "NU", "NF", "PK", "PW", "PG", "PH", "PN", "WS", "SG", "SB", "LK", "TW", "TJ", "TH", "TL", "TK", "TO", "TM", "TV", "UZ", "VU", "VN", "WF",
  ],
  "middle-east-africa": [
    "DZ", "AO", "AM", "AZ", "BH", "BJ", "BW", "BV", "BF", "BI", "CM", "CV", "CF", "TD", "KM", "CG", "CD", "CI", "DJ", "EG", "GQ", "ER", "SZ", "ET", "GA", "GM", "GE", "GH", "GN", "GW", "IL", "IR", "IQ", "JO", "KE", "KW", "LB", "LS", "LR", "LY", "MG", "MW", "ML", "MR", "MU", "YT", "MA", "MZ", "NA", "NE", "NG", "OM", "PS", "QA", "RE", "RW", "SH", "ST", "SA", "SN", "SC", "SL", "SO", "ZA", "GS", "SS", "SD", "SY", "TZ", "TG", "TN", "TR", "UG", "AE", "EH", "YE", "ZM", "ZW",
  ],
};

const COUNTRY_REGION_BY_CODE = new Map<CountryCode, ShippingRegionKey>(
  Object.entries(REGION_COUNTRY_CODES).flatMap(([region, codes]) =>
    codes.map((code) => [code, region as ShippingRegionKey])
  )
);

const REGION_DISPLAY_NAMES = new Intl.DisplayNames(["en"], { type: "region" });

const COUNTRY_OPTIONS = COUNTRY_CODES.map((code) => ({
  code,
  name: COUNTRY_NAME_OVERRIDES[code] ?? REGION_DISPLAY_NAMES.of(code) ?? code,
  region: COUNTRY_REGION_BY_CODE.get(code) ?? "middle-east-africa",
})).sort((a, b) => a.name.localeCompare(b.name));

function findCountry(code: string) {
  return COUNTRY_OPTIONS.find((country) => country.code === code);
}

function generateOrderId(): string {
  const ts = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `TPL-${ts.slice(-4)}${rand}`;
}

type OrderStep = "details" | "payment" | "confirm" | "submitted";

export function ProductDetail({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const [chain, setChain] = useState<ChainKey>("usdcSol");
  const [code, setCode] = useState("");
  const [appliedCode, setAppliedCode] = useState<keyof typeof DISCOUNT_CODES | null>(null);
  const [copied, setCopied] = useState(false);

  // Order form state
  const [step, setStep] = useState<OrderStep>("details");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [shippingRegion, setShippingRegion] = useState<ShippingRegionKey>("us");
  const [address, setAddress] = useState("");
  const [txHash, setTxHash] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("");

  const shippingProfile =
    SHIPPING_REGIONS.find((region) => region.key === shippingRegion) ?? SHIPPING_REGIONS[0];
  const selectedCountry = findCountry(countryCode);
  const countryName = selectedCountry?.name ?? "";
  const subtotal = product.price * qty;
  const discountPct = appliedCode ? DISCOUNT_CODES[appliedCode].percent : 0;
  const discountAmt = subtotal * (discountPct / 100);
  const shipping = subtotal - discountAmt >= shippingProfile.freeThreshold ? 0 : shippingProfile.shipping;
  const total = Math.max(0, subtotal - discountAmt + shipping);

  const applyCode = () => {
    const upper = code.toUpperCase().trim();
    if (upper in DISCOUNT_CODES) setAppliedCode(upper as keyof typeof DISCOUNT_CODES);
    else setAppliedCode(null);
  };

  const copyAddr = () => {
    navigator.clipboard.writeText(WALLETS[chain]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleCountryChange = (nextCountryCode: string) => {
    setCountryCode(nextCountryCode);
    const nextCountry = findCountry(nextCountryCode);
    if (nextCountry) {
      setShippingRegion(nextCountry.region);
    }
  };

  const handleSubmitOrder = () => {
    if (!email.trim() || !name.trim() || !countryCode || !address.trim()) {
      setError("Please fill in all fields, including country/territory.");
      return;
    }
    if (!txHash.trim()) {
      setError("Please enter your transaction hash so we can verify payment.");
      return;
    }
    setError("");
    setSubmitting(true);

    const newOrderId = generateOrderId();
    const paymentLabel = CHAINS.find((c) => c.key === chain)?.label ?? chain;
    const subject = encodeURIComponent(`Titan order request ${newOrderId}`);
    const body = encodeURIComponent(
      [
        `Order ID: ${newOrderId}`,
        `Product: ${product.name}`,
        `Product ID: ${product.id}`,
        `Quantity: ${qty}`,
        `Total: ${total.toFixed(2)}`,
        `Payment rail: ${paymentLabel}`,
        `Wallet sent to: ${WALLETS[chain]}`,
        `Transaction hash: ${txHash.trim()}`,
        `Customer name: ${name.trim()}`,
        `Customer email: ${email.trim()}`,
        `Country: ${countryName}`,
        `Auto shipping profile: ${shippingProfile.label}`,
        `Shipping address: ${address.trim()}`,
        `Discount code: ${appliedCode || "None"}`,
      ].join("\n")
    );

    if (typeof window !== "undefined") {
      window.location.href = `mailto:support@titanpeptidelab.com?subject=${subject}&body=${body}`;
    }

    setOrderId(newOrderId);
    setStep("submitted");
    setSubmitting(false);
  };

  return (
    <section className="relative bg-white py-16 text-[#0f1613]">
      <div className="mx-auto max-w-7xl px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-[#5c6762] hover:text-[#0f1613] transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to all products
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <div className="relative">
            <CompoundPoster product={product} variant="detail" className="aspect-square" />
            <div className="mt-4 grid grid-cols-3 gap-3">
              <TrustChip icon={ShieldCheck} label="HPLC ≥99%" />
              <TrustChip icon={FileCheck2} label="Batch COA" />
              <TrustChip icon={Truck} label="Fast dispatch" />
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              {product.bestseller && (
                <Badge className="border border-[#1e6f58]/20 bg-[#f0f5f2] text-[#1e6f58]">Bestseller</Badge>
              )}
              {product.newArrival && (
                <Badge className="border border-[rgb(15_22_19/10%)] bg-[#fafafa] text-[#0f1613]">New arrival</Badge>
              )}
              <Badge className="border border-[rgb(15_22_19/10%)] bg-white text-[#5c6762] capitalize">
                {product.category.replace("-", " ")}
              </Badge>
            </div>

            <h1 className="mt-4 text-balance font-serif text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.95] tracking-[-0.05em] text-[#0f1613]">
              {product.name}
            </h1>
            <p className="mt-2 text-sm text-[#6b7a73]">{product.size}</p>

            <p className="mt-6 text-lg leading-8 text-[#2a3530]">{product.tagline}</p>
            <p className="mt-3 text-sm leading-7 text-[#5c6762]">{product.description}</p>

            {product.category === "nasal-spray" ? (
              <div className="mt-6 rounded-[1.2rem] border border-[#dce7e0] bg-[#f7faf8] px-4 py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#1e6f58]">
                  Nasal delivery
                </p>
                <p className="mt-2 text-sm leading-7 text-[#2a3530]">
                  Intranasal administration bypasses first-pass metabolism for
                  rapid systemic uptake. No reconstitution, no needles — just
                  metered-dose precision in a travel-ready format.
                </p>
              </div>
            ) : null}

            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-[#2a3530]">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1e6f58]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-baseline gap-3">
              <span className="text-4xl font-semibold tracking-tight text-[#0f1613]">
                ${product.price.toFixed(2)}
              </span>
              {product.compareAtPrice && (
                <span className="text-lg text-[#9aa6a0] line-through">
                  ${product.compareAtPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* ── Order submitted confirmation ── */}
            {step === "submitted" ? (
              <div className="mt-8 rounded-[1.6rem] border border-[#1e6f58]/20 bg-[#f0f5f2] p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1e6f58]">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-5 font-serif text-[1.6rem] leading-tight text-[#0f1613]">
                  Order draft ready
                </h3>
                <p className="mt-1 font-mono text-sm text-[#1e6f58]">{orderId}</p>
                <p className="mt-4 text-sm leading-7 text-[#5c6762]">
                  Your order request was prepared for <strong className="text-[#0f1613]">support@titanpeptidelab.com</strong>.
                  If your mail app did not open, send your order ID and payment hash through the contact page and we will match it manually.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-center sm:grid-cols-3">
                  <div className="rounded-xl bg-white px-3 py-3">
                    <Package className="mx-auto h-5 w-5 text-[#1e6f58]" />
                    <p className="mt-1.5 text-[11px] text-[#888]">Draft prepared</p>
                  </div>
                  <div className="rounded-xl bg-white px-3 py-3">
                    <ShieldCheck className="mx-auto h-5 w-5 text-[#1e6f58]" />
                    <p className="mt-1.5 text-[11px] text-[#888]">Payment ready to verify</p>
                  </div>
                  <div className="rounded-xl bg-white px-3 py-3">
                    <WalletIcon className="mx-auto h-5 w-5 text-[#1e6f58]" />
                    <p className="mt-1.5 text-[11px] text-[#888]">Reference saved</p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* ── Quantity + Discount ── */}
                <div className="mt-6 flex items-center gap-3">
                  <Label className="text-sm text-[#6b7a73]">Quantity</Label>
                  <div className="flex items-center rounded-full border border-[rgb(15_22_19/12%)] bg-white">
                    <button
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      className="h-10 w-10 text-[#5c6762] hover:bg-[#f7faf8] hover:text-[#0f1613] rounded-l-full transition-colors"
                    >
                      −
                    </button>
                    <span className="w-10 text-center text-sm font-medium text-[#0f1613]">{qty}</span>
                    <button
                      onClick={() => setQty(qty + 1)}
                      className="h-10 w-10 text-[#5c6762] hover:bg-[#f7faf8] hover:text-[#0f1613] rounded-r-full transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="mt-6">
                  <Label className="text-sm text-[#6b7a73]">Discount code</Label>
                  <div className="mt-1.5 flex gap-2">
                    <Input
                      placeholder="FIRST10"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="border-[rgb(15_22_19/12%)] bg-white"
                    />
                    <Button onClick={applyCode} variant="outline" className="border-[rgb(15_22_19/12%)] bg-white hover:bg-[#f7faf8]">
                      Apply
                    </Button>
                  </div>
                  {appliedCode && (
                    <p className="mt-2 text-xs text-[#1e6f58]">
                      ✓ {DISCOUNT_CODES[appliedCode].label} applied
                    </p>
                  )}
                </div>

                {/* ── Price summary ── */}
                <div className="mt-8 rounded-[1.4rem] border border-[rgb(15_22_19/8%)] bg-white p-5 text-sm shadow-[0_1px_2px_rgb(15_22_19/4%)]">
                  <Row label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
                  {appliedCode && (
                    <Row label={`Discount (${appliedCode})`} value={`−$${discountAmt.toFixed(2)}`} positive />
                  )}
                  <Row label="Shipping" value={shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`} />
                  <div className="my-3 h-px bg-[rgb(15_22_19/8%)]" />
                  <div className="flex items-center justify-between">
                    <span className="text-base font-medium text-[#0f1613]">Total</span>
                    <span className="text-2xl font-semibold tracking-tight text-[#0f1613]">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* ── Checkout panel ── */}
                <div className="mt-8 rounded-[1.6rem] border border-[rgb(15_22_19/8%)] bg-[#fafbfa] p-6 shadow-[0_1px_2px_rgb(15_22_19/4%),_0_24px_60px_-40px_rgb(15_22_19/15%)]">
                  {/* Step indicator */}
                  <div className="mb-5 flex items-center gap-2">
                    {(["details", "payment", "confirm"] as const).map((s, i) => (
                      <div key={s} className="flex items-center gap-2">
                        <div
                          className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium transition-colors ${
                            step === s
                              ? "bg-[#1e6f58] text-white"
                              : ["details", "payment", "confirm"].indexOf(step) > i
                                ? "bg-[#1e6f58]/15 text-[#1e6f58]"
                                : "bg-[#eee] text-[#999]"
                          }`}
                        >
                          {["details", "payment", "confirm"].indexOf(step) > i ? (
                            <Check className="h-3.5 w-3.5" />
                          ) : (
                            i + 1
                          )}
                        </div>
                        {i < 2 && <div className="h-px w-8 bg-[#e5e5e5]" />}
                      </div>
                    ))}
                    <span className="ml-2 text-xs text-[#999]">
                      {step === "details" && "Your info"}
                      {step === "payment" && "Send payment"}
                      {step === "confirm" && "Confirm"}
                    </span>
                  </div>

                  {/* Step 1: Customer details */}
                  {step === "details" && (
                    <div className="space-y-4">
                      <h3 className="font-serif text-[1.4rem] leading-tight text-[#0f1613]">
                        Shipping details
                      </h3>
                      <p className="text-sm leading-7 text-[#5c6762]">
                        Built for buyers worldwide. Pick your country once; shipping, customs language, and payment guidance update automatically.
                      </p>
                      <div>
                        <Label className="text-xs text-[#6b7a73]">Full name</Label>
                        <Input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Alex Johnson"
                          className="mt-1 border-[rgb(15_22_19/10%)] bg-white"
                        />
                      </div>
                      <div>
                        <Label className="text-xs text-[#6b7a73]">Email</Label>
                        <Input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="alex@lab.org"
                          className="mt-1 border-[rgb(15_22_19/10%)] bg-white"
                        />
                      </div>
                      <div>
                        <Label className="text-xs text-[#6b7a73]">Country / territory</Label>
                        <select
                          value={countryCode}
                          onChange={(e) => handleCountryChange(e.target.value)}
                          className="mt-1 h-10 w-full rounded-lg border border-[rgb(15_22_19/10%)] bg-white px-3 text-sm text-[#0f1613] outline-none transition-colors focus:border-[#1e6f58]"
                        >
                          <option value="" disabled>
                            Select country / territory
                          </option>
                          {COUNTRY_OPTIONS.map((country) => (
                            <option key={country.code} value={country.code}>
                              {country.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <p className="text-xs leading-6 text-[#6b7a73]">
                        All ISO country/territory destinations are available for order-request intake. Restricted or sanctioned destinations are reviewed manually and may be declined; buyers remain responsible for local import rules.
                      </p>
                      <div className="rounded-[1rem] border border-[rgb(15_22_19/8%)] bg-[#faf9f7] px-4 py-3">
                        <p className="text-sm font-medium text-[#0f1613]">{shippingProfile.note}</p>
                        <p className="mt-1 text-xs leading-6 text-[#6b7a73]">
                          {shipping === 0
                            ? `You unlocked free shipping for ${shippingProfile.label}.`
                            : `Shipping for ${shippingProfile.label} is $${shipping.toFixed(2)}, free from $${shippingProfile.freeThreshold.toFixed(2)}.`}
                        </p>
                        <p className="mt-1 text-xs leading-6 text-[#6b7a73]">{shippingProfile.customs}</p>
                      </div>
                      <div>
                        <div className="mb-1.5 flex items-end justify-between gap-3">
                          <Label className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5f6d67]">
                            Shipping address
                          </Label>
                          <span className="text-[11px] text-[#8a948f]">Used for manual release review</span>
                        </div>
                        <div className="overflow-hidden rounded-xl border border-[rgb(15_22_19/12%)] bg-white shadow-[0_10px_24px_rgba(15,22,19,0.05)] transition-shadow focus-within:border-[#1e6f58] focus-within:shadow-[0_0_0_3px_rgba(30,111,88,0.10)]">
                          <textarea
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder={"Street address\nApt / suite / unit\nCity, state/province, postal code"}
                            rows={4}
                            className="block w-full resize-none border-0 bg-[linear-gradient(180deg,#fffdf9_0%,#ffffff_100%)] px-3.5 py-3 text-sm leading-6 text-[#0f1613] outline-none placeholder:text-[#a9b2ad]"
                          />
                          <div className="flex items-center justify-between gap-3 border-t border-[rgb(15_22_19/7%)] bg-[#faf9f4] px-3.5 py-2">
                            <p className="text-[11px] leading-4 text-[#6b7a73]">
                              Include unit and postal code. International destinations are checked before dispatch.
                            </p>
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#1e6f58]" />
                          </div>
                        </div>
                      </div>
                      <Button
                        onClick={() => {
                          if (!name.trim() || !email.trim() || !countryCode || !address.trim()) {
                            setError("Please fill in all fields, including country/territory.");
                            return;
                          }
                          setError("");
                          setStep("payment");
                        }}
                        className="h-12 w-full rounded-full bg-[#1e6f58] text-white font-semibold hover:bg-[#175946]"
                      >
                        Continue to payment
                      </Button>
                      {error && <p className="text-center text-xs text-red-500">{error}</p>}
                    </div>
                  )}

                  {/* Step 2: Payment */}
                  {step === "payment" && (
                    <div className="space-y-4">
                      <h3 className="font-serif text-[1.4rem] leading-tight text-[#0f1613]">
                        Send ${total.toFixed(2)} via crypto
                      </h3>
                      <p className="text-sm text-[#5c6762]">
                        Crypto checkout stays global here. Pick the supported rail that is easiest in your region, send the exact amount, then paste your transaction hash.
                      </p>

                      <div className="rounded-[1rem] border border-[rgb(15_22_19/8%)] bg-[#faf9f7] px-4 py-3 text-sm text-[#5c6762]">
                        <p className="font-medium text-[#0f1613]">Best-fit rails for {shippingProfile.label}</p>
                        <p className="mt-1 leading-6">
                          {shippingProfile.recommendedChains
                            .map((key) => CHAINS.find((chainOption) => chainOption.key === key)?.label)
                            .filter(Boolean)
                            .join(" · ")}
                        </p>
                        <p className="mt-1 text-xs leading-6 text-[#6b7a73]">{shippingProfile.customs}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {CHAINS.map((c) => (
                          <button
                            key={c.key}
                            onClick={() => setChain(c.key)}
                            className={`rounded-xl border px-3 py-3 text-center text-xs font-medium transition-all ${
                              chain === c.key
                                ? "border-[#1e6f58]/30 bg-[#f0f5f2] text-[#1e6f58] shadow-[0_0_0_1px_#1e6f58/10]"
                                : "border-[rgb(15_22_19/10%)] bg-white text-[#5c6762] hover:border-[#1e6f58]/20 hover:text-[#0f1613]"
                            }`}
                          >
                            <span className="block text-[10px] text-[#aaa] mb-0.5">{c.chain}</span>
                            {c.label}
                          </button>
                        ))}
                      </div>

                      <div className="rounded-xl border border-[rgb(15_22_19/10%)] bg-white p-4">
                        <div className="flex items-center justify-between text-xs text-[#6b7a73]">
                          <span className="flex items-center gap-1.5">
                            <WalletIcon className="h-3.5 w-3.5" />
                            Send only to this {CHAINS.find((c) => c.key === chain)?.chain} address
                          </span>
                          <button onClick={copyAddr} className="flex items-center gap-1 text-[#1e6f58] hover:text-[#175946] transition-colors">
                            {copied ? <><Check className="h-3 w-3" /> Copied</> : <><Copy className="h-3 w-3" /> Copy</>}
                          </button>
                        </div>
                        <p className="mt-2 break-all font-mono text-xs text-[#0f1613] select-all">{WALLETS[chain]}</p>
                        <p className="mt-2 text-center font-semibold text-[#0f1613]">
                          Amount: ${total.toFixed(2)}
                        </p>
                        <p className="mt-2 text-center text-xs leading-6 text-[#6b7a73]">
                          Shipping to {countryName || shippingProfile.label} · {shipping === 0 ? "free shipping unlocked" : `$${shipping.toFixed(2)} shipping included`}
                        </p>
                      </div>

                      <div>
                        <Label className="text-xs text-[#6b7a73]">Transaction hash</Label>
                        <Input
                          value={txHash}
                          onChange={(e) => setTxHash(e.target.value)}
                          placeholder="Paste your tx hash after sending"
                          className="mt-1 border-[rgb(15_22_19/10%)] bg-white font-mono text-xs"
                        />
                      </div>

                      <div className="flex gap-2">
                        <Button
                          onClick={() => setStep("details")}
                          variant="outline"
                          className="h-12 flex-1 rounded-full border-[rgb(15_22_19/10%)] bg-white hover:bg-[#f7faf8]"
                        >
                          Back
                        </Button>
                        <Button
                          onClick={() => {
                            if (!txHash.trim()) {
                              setError("Please enter your transaction hash.");
                              return;
                            }
                            setError("");
                            setStep("confirm");
                          }}
                          className="h-12 flex-[2] rounded-full bg-[#1e6f58] text-white font-semibold hover:bg-[#175946]"
                        >
                          Review order
                        </Button>
                      </div>
                      {error && <p className="text-center text-xs text-red-500">{error}</p>}
                    </div>
                  )}

                  {/* Step 3: Confirm */}
                  {step === "confirm" && (
                    <div className="space-y-4">
                      <h3 className="font-serif text-[1.4rem] leading-tight text-[#0f1613]">
                        Review your order
                      </h3>
                      <div className="space-y-3 rounded-xl border border-[rgb(15_22_19/8%)] bg-white p-4 text-sm">
                        <ConfirmRow label="Product" value={`${product.name} × ${qty}`} />
                        <ConfirmRow label="Total" value={`$${total.toFixed(2)}`} />
                        <ConfirmRow label="Payment" value={CHAINS.find((c) => c.key === chain)?.label || ""} />
                        <ConfirmRow label="Country" value={countryName} />
                        <ConfirmRow label="Tx hash" value={txHash.slice(0, 16) + "..."} mono />
                        <div className="h-px bg-[rgb(15_22_19/6%)]" />
                        <ConfirmRow label="Ship to" value={name} />
                        <ConfirmRow label="Email" value={email} />
                        <p className="text-xs text-[#999] whitespace-pre-line">{address}</p>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          onClick={() => setStep("payment")}
                          variant="outline"
                          className="h-12 flex-1 rounded-full border-[rgb(15_22_19/10%)] bg-white hover:bg-[#f7faf8]"
                        >
                          Back
                        </Button>
                        <Button
                          onClick={handleSubmitOrder}
                          disabled={submitting}
                          className="h-12 flex-[2] rounded-full bg-[#1e6f58] text-white font-semibold hover:bg-[#175946] disabled:opacity-60"
                        >
                          {submitting ? (
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Preparing order...</>
                          ) : (
                            "Prepare order email"
                          )}
                        </Button>
                      </div>
                      {error && <p className="text-center text-xs text-red-500">{error}</p>}
                    </div>
                  )}

                  <p className="mt-4 text-center text-[11px] text-[#b0b0b0]">
                    Worldwide order requests supported · Ships after payment confirmation · Tracking included
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, positive }: { label: string; value: string; positive?: boolean }) {
  return (
    <div className="flex items-center justify-between py-1.5 text-sm">
      <span className="text-[#69766f]">{label}</span>
      <span className={positive ? "text-[#1e6f58]" : "text-[#13211c]"}>{value}</span>
    </div>
  );
}

function ConfirmRow({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="text-xs text-[#999] shrink-0">{label}</span>
      <span className={`text-sm text-[#0f1613] text-right ${mono ? "font-mono text-xs" : ""}`}>{value}</span>
    </div>
  );
}

function TrustChip({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-[1rem] border border-[#d7dfd6] bg-white/75 px-3 py-2.5">
      <Icon className="h-4 w-4 text-[#1e6f58]" />
      <span className="text-xs font-medium text-[#43524b]">{label}</span>
    </div>
  );
}
