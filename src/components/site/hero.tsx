import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MolecularViewer } from "./molecular-viewer";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#060908]">
      <div
        aria-hidden
        className="absolute right-[-12rem] top-[-14rem] h-[34rem] w-[34rem] rounded-full bg-[#0F9F7A]/16 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 h-64 w-full bg-[radial-gradient(circle_at_18%_100%,rgba(15,159,122,0.14),transparent_34%)]"
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-16 sm:px-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(420px,1.12fr)] lg:px-8 lg:pb-24 lg:pt-24">
        <Reveal className="relative z-10 flex flex-col justify-center">
          <p className="font-mono text-xs uppercase text-[#77E1C3]">
            Nasal spray peptides / batch proof / cold-chain dispatch
          </p>

          <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-none text-[#F3F7F6] sm:text-6xl md:text-7xl lg:text-8xl">
            Nasal{" "}
            <span className="font-serif font-normal italic text-[#CFF7EA]">
              peptides
            </span>
            <br />
            with proof in the box.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#B8C5C1]">
            Lowest-friction research formats for BPC-157, Selank, Semax, and
            PT-141. Every order ships with the certificate matched to the batch
            on the bottle.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-12 rounded-lg bg-[#F3F7F6] px-5 text-[#06110E] hover:bg-white"
            >
              <Link href="#products">
                Shop Nasal Sprays
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-lg border-white/12 bg-white/[0.03] px-5 text-[#E8ECF0] hover:border-[#0F9F7A]/60 hover:bg-[#0F9F7A]/10"
            >
              <Link href="/research/bpc-157-nasal-spray">Read Research</Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="relative z-10 lg:-mr-8">
          <MolecularViewer />
        </Reveal>
      </div>
    </section>
  );
}
