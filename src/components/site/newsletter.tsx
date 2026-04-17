import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal } from "./reveal";

export function Newsletter() {
  return (
    <section className="border-b border-white/10 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-lg border border-[#0F9F7A]/25 bg-[#0F9F7A]/10 p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-[1fr_1.1fr] md:items-end">
              <div>
                <p className="text-sm font-medium uppercase text-[#0F9F7A]">
                  First order
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-[#E8ECF0] md:text-4xl">
                  Get 10% off your first order
                </h3>
                <p className="mt-3 text-sm text-[#AEB7C2]">
                  FIRST10 applied automatically at checkout.
                </p>
                <p className="mt-2 text-sm text-[#8B95A3]">
                  Laboratory research purposes only. Not for human consumption.
                </p>
              </div>

              <form className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  required
                  placeholder="research@lab.com"
                  aria-label="Email address"
                  className="h-11 rounded-lg border-white/12 bg-[#070B10]/70 px-4 text-[#E8ECF0] placeholder:text-[#687282]"
                />
                <Button
                  type="submit"
                  className="h-11 rounded-lg bg-[#E8ECF0] px-5 text-[#070B10] hover:bg-white"
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
