import { FAQ } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { HowItWorks } from "@/components/site/how-it-works";
import { Nav } from "@/components/site/nav";
import { Products } from "@/components/site/products";
import { SocialProof } from "@/components/site/social-proof";
import { TrustStrip } from "@/components/site/trust-strip";
import { WhyTitan } from "@/components/site/why-titan";
import { Grain } from "@/components/site/grain";
import { OrganizationJsonLd, WebsiteJsonLd, FAQJsonLd } from "@/components/site/json-ld";

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <WebsiteJsonLd />
      <FAQJsonLd />
      <Grain />
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Products />
        <HowItWorks />
        <WhyTitan />
        <SocialProof />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
