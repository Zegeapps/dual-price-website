import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import Hero from "@/components/HeroSection";
import InstallationSteps from "@/components/InstallationSteps";
import Pricing from "@/components/PricingSection";

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="features">
        <FeaturesSection />
      </section>

      <InstallationSteps />

      <section id="pricing">
        <Pricing />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
