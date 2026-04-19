import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal } from "./reveal";

export function Newsletter() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-[2rem] border border-[rgb(15_22_19/8%)] bg-[#fafbfa] p-6 shadow-[0_1px_2px_rgb(15_22_19/4%),_0_24px_60px_-40px_rgb(15_22_19/15%)] md:p-8">
            <div className="grid gap-6 md:grid-cols-[1fr_1.1fr] md:items-end">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#1e6f58]">
                  Subscribers only
                </p>
                <h3 className="mt-3 max-w-lg font-serif text-[clamp(2.2rem,4vw,3.5rem)] leading-[0.97] tracking-[-0.04em] text-[#0f1613]">
                  Get 10% off your first order.
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5c6762]">
                  Subscribe to receive your exclusive discount code, compound releases, and protocol updates.
                </p>
                <p className="mt-2 text-sm text-[#6b7a73]">
                  Laboratory research purposes only. Not for human consumption.
                </p>
              </div>

              <form className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  required
                  placeholder="research@lab.com"
                  aria-label="Email address"
                  className="h-12 rounded-full border-[rgb(15_22_19/12%)] bg-white px-5 text-[#0f1613] placeholder:text-[#9aa6a0]"
                />
                <Button
                  type="submit"
                  className="h-12 rounded-full bg-[#1e6f58] px-6 text-white hover:bg-[#175946]"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
