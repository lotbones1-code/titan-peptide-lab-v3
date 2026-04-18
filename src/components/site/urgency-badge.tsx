"use client";

import { useState, useEffect, useCallback } from "react";
import { Flame, Clock, TrendingUp, ShieldCheck } from "lucide-react";

/* ─── Time-aware stock & social proof ─── */

function dayHash(productId: string): number {
  const d = new Date();
  const daySeed = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
  let hash = daySeed;
  for (let i = 0; i < productId.length; i++) {
    hash = ((hash << 5) - hash + productId.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function getStockLevel(productId: string): number {
  const base = dayHash(productId);
  const hour = new Date().getHours();
  // Stock depletes through the day (higher stock in morning, lower at night)
  const depletion = Math.floor(hour / 3);
  const stock = 6 + (base % 14) - depletion;
  return Math.max(2, Math.min(19, stock));
}

function getRecentBuyers(productId: string): number {
  const base = dayHash(productId);
  const hour = new Date().getHours();
  // More purchases during business hours
  const peakBonus = hour >= 9 && hour <= 21 ? 4 + (hour % 5) : 0;
  return 5 + (base % 12) + peakBonus;
}

export function UrgencyBadge({ productId }: { productId: string }) {
  const [stock, setStock] = useState(0);
  const [buyers, setBuyers] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setStock(getStockLevel(productId));
    setBuyers(getRecentBuyers(productId));
    setMounted(true);

    // Refresh every 8 minutes so numbers subtly shift
    const iv = setInterval(() => {
      setStock(getStockLevel(productId));
      setBuyers(getRecentBuyers(productId));
    }, 480_000);
    return () => clearInterval(iv);
  }, [productId]);

  if (!mounted) return null;

  const isLowStock = stock <= 8;

  return (
    <div className="flex flex-wrap gap-2.5">
      {isLowStock && (
        <div className="flex items-center gap-1.5 rounded-full bg-[#fef3c7] px-3 py-1.5">
          <Flame className="h-3.5 w-3.5 text-[#d97706]" />
          <span className="text-[12px] font-medium text-[#92400e]">
            {stock} left in stock
          </span>
        </div>
      )}
      <div className="flex items-center gap-1.5 rounded-full bg-[#f0f5f2] px-3 py-1.5">
        <TrendingUp className="h-3.5 w-3.5 text-[#1e6f58]" />
        <span className="text-[12px] font-medium text-[#1e6f58]">
          {buyers} ordered this week
        </span>
      </div>
    </div>
  );
}

/* ─── Recent purchase toast ─── */

const LOCATIONS = [
  "Austin, TX", "Miami, FL", "Denver, CO", "Portland, OR", "Chicago, IL",
  "Seattle, WA", "San Diego, CA", "Boston, MA", "Nashville, TN", "Phoenix, AZ",
  "Raleigh, NC", "Salt Lake City, UT", "Tampa, FL", "Charlotte, NC", "Minneapolis, MN",
  "Las Vegas, NV", "Columbus, OH", "San Antonio, TX", "Jacksonville, FL", "Indianapolis, IN",
  "Richmond, VA", "Scottsdale, AZ", "Boulder, CO", "Ann Arbor, MI", "Savannah, GA",
  "Boise, ID", "Asheville, NC", "Madison, WI", "Tulsa, OK", "Omaha, NE",
];

const ORDER_PRODUCTS = [
  "BPC-157 Nasal Spray",
  "Selank + Semax Stack",
  "Semax Nasal Spray",
  "PT-141 Nasal Spray",
  "DSIP Nasal Spray",
  "Oxytocin Nasal Spray",
  "Selank Nasal Spray",
  "BPC-157 Nasal Spray",
  "Retatrutide",
  "CJC-1295 + Ipamorelin",
  "TB-500 Vial",
  "BPC-157 Nasal Spray",
  "Selank + Semax Stack",
];

const FIRST_NAMES = [
  "James", "Sarah", "Michael", "Emily", "David", "Jessica", "Robert", "Ashley",
  "Daniel", "Amanda", "Chris", "Lauren", "Matt", "Nicole", "Ryan", "Rachel",
  "Andrew", "Megan", "Brian", "Stephanie", "Kevin", "Jennifer", "Alex", "Heather",
  "Tyler", "Samantha", "Brandon", "Brittany", "Justin", "Amber",
];

function pickRandom<T>(arr: T[], seed: number): T {
  return arr[Math.abs(seed) % arr.length];
}

function generateTimeAgo(): string {
  const mins = 1 + Math.floor(Math.random() * 47);
  if (mins < 60) return `${mins} min ago`;
  const hrs = Math.floor(mins / 60);
  return `${hrs}h ago`;
}

function generatePurchase(seed: number) {
  const name = pickRandom(FIRST_NAMES, seed);
  const initial = pickRandom("ABCDEFGHJKLMNPRSTW".split(""), seed * 7 + 3);
  const location = pickRandom(LOCATIONS, seed * 13 + 5);
  const product = pickRandom(ORDER_PRODUCTS, seed * 3 + 11);
  const time = generateTimeAgo();

  return {
    buyer: `${name} ${initial}.`,
    location,
    product,
    time,
  };
}

export function RecentPurchaseToast() {
  const [visible, setVisible] = useState(false);
  const [purchase, setPurchase] = useState({ buyer: "", location: "", product: "", time: "" });
  const [exiting, setExiting] = useState(false);

  const showNext = useCallback(() => {
    const seed = Date.now() + Math.floor(Math.random() * 10000);
    setPurchase(generatePurchase(seed));
    setExiting(false);
    setVisible(true);

    // Hide after 6 seconds with exit animation
    setTimeout(() => {
      setExiting(true);
      setTimeout(() => setVisible(false), 300);
    }, 6000);
  }, []);

  useEffect(() => {
    // First show after 25-40 seconds (feels more natural)
    const initialDelay = 25000 + Math.random() * 15000;
    const initial = setTimeout(showNext, initialDelay);

    // Then every 40-70 seconds (irregular intervals feel real)
    const interval = setInterval(showNext, 40000 + Math.random() * 30000);

    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, [showNext]);

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-24 left-6 z-40 transition-all duration-300 ${
        exiting
          ? "translate-x-[-120%] opacity-0"
          : "translate-x-0 opacity-100 animate-in slide-in-from-left-4 fade-in"
      }`}
    >
      <div className="flex items-center gap-3 rounded-2xl border border-[#e8e8e8] bg-white px-4 py-3 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.12)]">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0f5f2]">
          <ShieldCheck className="h-4.5 w-4.5 text-[#1e6f58]" />
        </div>
        <div className="min-w-0">
          <p className="text-[13px] font-medium text-[#1a1a1a]">
            {purchase.buyer} in {purchase.location}
          </p>
          <p className="text-[12px] text-[#777]">
            Ordered {purchase.product}
            <span className="mx-1.5 text-[#ccc]">·</span>
            <span className="text-[#999]">{purchase.time}</span>
          </p>
        </div>
        <div className="ml-1 flex items-center gap-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22c55e]" />
          </span>
        </div>
      </div>
    </div>
  );
}
