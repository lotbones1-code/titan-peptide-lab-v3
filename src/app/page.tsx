import { FAQ } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { HowItWorks } from "@/components/site/how-it-works";
import { Nav } from "@/components/site/nav";
import { Newsletter } from "@/components/site/newsletter";
import { PaymentMethods } from "@/components/site/payment-methods";
import { Products } from "@/components/site/products";
import { QualitySection } from "@/components/site/quality-section";
import { TrustStrip } from "@/components/site/trust-strip";
import { SocialProof } from "@/components/site/social-proof";
import { WhyTitan } from "@/components/site/why-titan";
import { ProductListJsonLd } from "@/components/site/json-ld";

/* DESIGN SPEC
Mood: sovereign clinical luxury.
Palette: ink #0f1613, titan green #1e6f58, paper #f6f3ee, white #ffffff, muted text #66736d.
Typography: Instrument Serif for display, Inter for body.
Layout: editorial two-column hero, dark trust moments, large asymmetric sections with tight max-width rhythm.
Key interaction: subtle lift, glow, and border refinement on hover.
Image plan: compound-name-led posters only, no fake bottles or rendered product shots.
*/
export default function HomePage() {
  return (
    <>
      <ProductListJsonLd />
      <Nav />
      <main className="bg-[#f8f6f2] text-[#0f1613]">
        <Hero />
        <TrustStrip />
        <WhyTitan />
        <Products />
        <QualitySection />
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
