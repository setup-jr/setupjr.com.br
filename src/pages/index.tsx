import About from "../components/About";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Footer from "../components/Footer";
import GradientWrapper from "../components/GradientWrapper";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import ServicesWrapper from "../components/ServicesWrapper";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <GradientWrapper>
        <Features />
      </GradientWrapper>
      <ServicesWrapper>
        <Services />
      </ServicesWrapper>
      <About />
      <Contact />
      <Footer />
    </>
  );
}
