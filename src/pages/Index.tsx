import { useEffect } from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { EmotionalPain } from "@/components/landing/EmotionalPain";
import { Transformation } from "@/components/landing/Transformation";
import { Benefits } from "@/components/landing/Benefits";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Testimonials } from "@/components/landing/Testimonials";
import { BeliefBreaker } from "@/components/landing/BeliefBreaker";
import { Offer } from "@/components/landing/Offer";
import { Guarantee } from "@/components/landing/Guarantee";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { StickyMobileCTA } from "@/components/landing/StickyMobileCTA";
import { OrderNotifications } from "@/components/landing/OrderNotifications";
import { useReveal } from "@/hooks/use-reveal";

export default function IndexPage() {
  useReveal();
  useEffect(() => {
    document.title = "LUMIVÁ™ — Whitening Powder Natural Moçambique";
  }, []);

  return (
    <main className="bg-white text-[var(--ink)]">
      <Header />
      <Hero />
      <EmotionalPain />
      <Transformation />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <BeliefBreaker />
      <Offer />
      <Guarantee />
      <FAQ />
      <Footer />
      <StickyMobileCTA />
      <OrderNotifications />
    </main>
  );
}
