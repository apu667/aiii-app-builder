import { Navbar } from "@/components/landingPage/Navbar";
import { Hero } from "@/components/landingPage/Hero";
import { Features } from "@/components/landingPage/Features";
import { HowItWorks } from "@/components/landingPage/HowItWorks";
import { Metrics } from "@/components/landingPage/Metrics";
import { Pricing } from "@/components/landingPage/Pricing";
import { FAQ } from "@/components/landingPage/FAQ";
import { CTA } from "@/components/landingPage/CTA";
import { Footer } from "@/components/landingPage/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Metrics />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
