import CTA from "../components/LandingPge/CTA";
import FeatureChefs from "../components/LandingPge/FeatureChefs";
import Footer from "../components/LandingPge/Footer";
import Header from "../components/LandingPge/Header";
import Hero from "../components/LandingPge/Hero";
import HowItWorks from "../components/LandingPge/HowItWorks";
import Service from "../components/LandingPge/Service";
import Trust from "../components/LandingPge/Trust";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Service />
      <FeatureChefs />
      <HowItWorks />
      <Trust />
      <CTA />
      <Footer />
    </div>
  );
}
