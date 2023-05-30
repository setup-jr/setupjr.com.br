import GradientWrapper from "lib/components/GradientWrapper";
import CTA from "lib/components/CTA";
import Features from "lib/components/Features";
import Hero from "lib/components/Hero";
import LogoGrid from "lib/components/LogoGrid";
import Testimonials from "lib/components/Testimonials";
import FooterCTA from "lib/components/FooterCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoGrid />
      <GradientWrapper>
        <Features />
        <CTA />
      </GradientWrapper>
      <GradientWrapper>
        <Testimonials />
      </GradientWrapper>
      <FooterCTA />
    </>
  );
}
