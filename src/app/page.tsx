import GradientWrapper from "lib/components/GradientWrapper";
import CTA from "lib/components/About";
import Features from "lib/components/Features";
import Hero from "lib/components/Hero";
import LogoGrid from "lib/components/LogoGrid";
import Testimonials from "lib/components/Testimonials";
import FooterCTA from "lib/components/FooterCTA";
import Services from "lib/components/Services";
import ServicesWrapper from "lib/components/ServicesWrapper";
import About from "lib/components/About";
import Contact from "lib/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <GradientWrapper>
        <Features />
      </GradientWrapper>
      <ServicesWrapper>
        <Services/>
      </ServicesWrapper>
      <About/>
      <Contact/>
      {/* <FooterCTA /> */}
    </>
  );
}
