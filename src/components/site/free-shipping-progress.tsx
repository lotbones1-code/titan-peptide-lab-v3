import { Truck, Check } from "lucide-react";
import { SHIPPING_ZONES } from "@/lib/countries";

// US-domestic free-shipping threshold is the anchor shown across the site
// (announcement bar, PDP, checkout). The cart drawer doesn't know the buyer's
// destination yet — country is chosen at checkout — so we frame the meter
// around the US threshold and label it as such. Buyers outside the US still
// see the exact zone threshold at the next step.
const FREE_ABOVE = SHIPPING_ZONES.DOMESTIC.freeAbove; // 150
const US_RATE = SHIPPING_ZONES.DOMESTIC.rate; // 12

function formatUsd(value: number) {
  return Number.isInteger(value) ? `$${value}` : `$${value.toFixed(2)}`;
}

/**
 * Free-shipping progress meter. Shows how close the cart is to the US
 * free-shipping threshold and what's left to add. Reached state confirms the
 * unlock. No fake urgency, no fabricated scarcity — just the real threshold
 * already enforced at checkout.
 */
export function FreeShippingProgress({ subtotal }: { subtotal: number }) {
  const reached = subtotal >= FREE_ABOVE;
  const remaining = Math.max(0, FREE_ABOVE - subtotal);
  const pct = Math.min(100, Math.round((subtotal / FREE_ABOVE) * 100));

  return (
    <div className="rounded-xl border border-[#dfe6e2] bg-[#f3f9f6] px-4 py-3">
      <div className="flex items-center gap-2">
        {reached ? (
          <Check className="h-4 w-4 shrink-0 text-[#1e6f58]" />
        ) : (
          <Truck className="h-4 w-4 shrink-0 text-[#1e6f58]" />
        )}
        <p className="text-[12px] leading-5 text-[#0f1613]">
          {reached ? (
            <span className="font-semibold text-[#1e6f58]">
              You&apos;ve unlocked free US shipping.
            </span>
          ) : (
            <>
              Add{" "}
              <span className="font-semibold text-[#1e6f58]">
                {formatUsd(remaining)}
              </span>{" "}
              more to unlock free US shipping
              <span className="text-[#8a9690]">
                {" "}
                (otherwise {formatUsd(US_RATE)} US)
              </span>
              .
            </>
          )}
        </p>
      </div>
      <div
        className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-[#dbeae2]"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progress toward free US shipping"
      >
        <div
          className="h-full rounded-full bg-[#1e6f58] transition-[width] duration-300"
          style={{ width: `${reached ? 100 : Math.max(6, pct)}%` }}
        />
      </div>
    </div>
  );
}
