"use client";

import { useCart } from "@/lib/cart-context";
import Link from "next/link";
import { X, Plus, Minus, ShoppingBag, Trash2, MessageCircle } from "lucide-react";

export function CartDrawer() {
  const { items, removeItem, updateQuantity, clearCart, itemCount, subtotal, isOpen, setIsOpen } = useCart();

  const handleCheckout = () => {
    // Build a message describing the cart contents for the chatbot
    const itemList = items
      .map((item) => `${item.product.name} x${item.quantity}`)
      .join(", ");
    const msg = `I want to order: ${itemList}`;

    // Close cart, open chatbot with the order message
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent("titan-chat-order", { detail: { message: msg } }));
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[70] bg-black/30 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      <div className="fixed right-0 top-0 z-[71] flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e5e5e5] px-6 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-[#1e6f58]" />
            <h2 className="text-lg font-semibold text-[#0f1613]">
              Cart ({itemCount})
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-2 text-[#999] transition-colors hover:bg-[#f5f5f5] hover:text-[#333]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <ShoppingBag className="h-12 w-12 text-[#ddd]" />
              <p className="mt-4 text-sm text-[#999]">Your cart is empty</p>
              <Link
                href="/products"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-flex h-10 items-center rounded-full bg-[#1e6f58] px-5 text-sm font-medium text-white transition-colors hover:bg-[#175946]"
              >
                Browse products
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 rounded-xl border border-[#f0f0f0] bg-[#fafafa] p-4"
                >
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/products/${item.product.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-medium text-[#0f1613] hover:text-[#1e6f58] transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <p className="mt-0.5 text-xs text-[#999]">{item.product.size}</p>
                    <p className="mt-1 text-sm font-semibold text-[#1e6f58]">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="rounded-full p-1 text-[#ccc] transition-colors hover:text-red-400"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                    <div className="flex items-center rounded-full border border-[#e5e5e5] bg-white">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="h-7 w-7 flex items-center justify-center text-[#999] hover:text-[#333] transition-colors rounded-l-full"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-7 text-center text-xs font-medium text-[#0f1613]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="h-7 w-7 flex items-center justify-center text-[#999] hover:text-[#333] transition-colors rounded-r-full"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#e5e5e5] px-6 py-4 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#999]">Subtotal</span>
              <span className="text-lg font-semibold text-[#0f1613]">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-[#bbb]">
              Shipping calculated at checkout. Free over $150 (US).
            </p>
            <button
              onClick={handleCheckout}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#1e6f58] text-sm font-semibold text-white transition-colors hover:bg-[#175946]"
            >
              <MessageCircle className="h-4 w-4" />
              Checkout — ${subtotal.toFixed(2)}
            </button>
            <button
              onClick={clearCart}
              className="w-full text-center text-xs text-[#bbb] hover:text-[#999] transition-colors"
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export function CartButton() {
  const { itemCount, setIsOpen } = useCart();

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgb(15_22_19/10%)] bg-white text-[#666] transition-colors hover:border-[#1e6f58] hover:text-[#1e6f58]"
      aria-label={`Cart (${itemCount} items)`}
    >
      <ShoppingBag className="h-4 w-4" />
      {itemCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#1e6f58] text-[10px] font-bold text-white">
          {itemCount > 9 ? "9+" : itemCount}
        </span>
      )}
    </button>
  );
}
