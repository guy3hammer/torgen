import Particles from "@/components/magicui/particles";
import HeroSection from "@/components/landing/hero-section";
import Hero2Section from "@/components/landing/hero2-section";
import Hero3Section from "@/components/landing/hero3-section";
import Hero4Section from "@/components/landing/hero4-section";
import PricingSection from "@/components/landing/pricing-section";
import ClientSection from "@/components/landing/client-section";
import CallToActionSection from "@/components/landing/cta-section";
import { SphereMask } from "@/components/magicui/sphere-mask";

export default async function Page() {
  return (
    <>
      <HeroSection />
      <Hero2Section />
      <Hero3Section />
      <Hero4Section />
      <ClientSection />
      <SphereMask />
      <PricingSection />      
      <CallToActionSection />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color={"#ffffff"}
      />
    </>
  );
}
