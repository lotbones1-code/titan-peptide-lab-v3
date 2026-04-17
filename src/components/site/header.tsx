"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Beaker, ShoppingCart } from "lucide-react";
import { BRAND } from "@/lib/products";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 shadow-lg shadow-emerald-500/20 transition-transform group-hover:scale-110">
            <Beaker className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-semibold tracking-tight">
            {BRAND.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#nasal-sprays"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Nasal Sprays
          </Link>
          <Link
            href="#all-products"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            All Peptides
          </Link>
          <Link
            href="#quality"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Quality
          </Link>
          <Link
            href="#faq"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            FAQ
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className="bg-white text-black hover:bg-zinc-100"
          >
            <Link href="#nasal-sprays">
              <ShoppingCart className="mr-1.5 h-3.5 w-3.5" />
              Shop
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
