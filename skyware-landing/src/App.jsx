import FloatingWhatsAppButton from "./components/layout/FloatingWhatsAppButton";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import BenefitsSection from "./components/sections/BenefitsSection";
import FAQSection from "./components/sections/FAQSection";
import FinalCTA from "./components/sections/FinalCTA";
import Hero from "./components/sections/Hero";
import PlansSection from "./components/sections/PlansSection";
import ProblemSolution from "./components/sections/ProblemSolution";
import ProcessSection from "./components/sections/ProcessSection";
import ServicesSection from "./components/sections/ServicesSection";
import SocialProofSection from "./components/sections/SocialProofSection";
import TrustAndAISection from "./components/sections/TrustAndAISection";

export default function SkywareLandingPage() {
  return (
    <>
      <Header />
      <main id="contenido" className="min-h-screen bg-white font-sans text-slate-950">
        <Hero />
        <ProblemSolution />
        <ServicesSection />
        <BenefitsSection />
        <ProcessSection />
        <PlansSection />
        <TrustAndAISection />
        <SocialProofSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
