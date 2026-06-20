import { CoaTrustStrip } from "@/components/site/coa-trust-strip";
import { FAQ } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { HowItWorks } from "@/components/site/how-it-works";
import { LeadMagnetCapture } from "@/components/site/lead-magnet-capture";
import { Nav } from "@/components/site/nav";
import { Newsletter } from "@/components/site/newsletter";
import { PaymentMethods } from "@/components/site/payment-methods";
import { Products } from "@/components/site/products";
import { QualitySection } from "@/components/site/quality-section";
import { SocialProof } from "@/components/site/social-proof";
import { ProductListJsonLd } from "@/components/site/json-ld";
import { SearchVisibilitySection } from "@/components/site/search-visibility-section";
import { WhereToBuyHub } from "@/components/site/where-to-buy-hub";

export default function HomePage() {
  return (
    <>
      <ProductListJsonLd />
      <Nav />
      <main className="text-[#0f1110]">
        <Hero />
        <CoaTrustStrip />
        <SearchVisibilitySection />
        <Products />
        <WhereToBuyHub />
        <QualitySection />
        <section className="bg-white px-5 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <LeadMagnetCapture source="homepage-midpage-coa-checklist" />
          </div>
        </section>
        <HowItWorks />
        <SocialProof />
        <PaymentMethods />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
