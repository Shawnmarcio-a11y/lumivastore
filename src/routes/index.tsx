import { createFileRoute } from "@tanstack/react-router";
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
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LUMIVÁ™ — Whitening Powder Natural para um sorriso mais branco" },
      {
        name: "description",
        content:
          "LUMIVÁ™ é o whitening powder natural que ajuda a remover manchas e devolver brilho ao teu sorriso. Pagamento na entrega em Moçambique.",
      },
      { property: "og:title", content: "LUMIVÁ™ — Volte a Sorrir Sem Vergonha" },
      {
        property: "og:description",
        content: "Whitening powder natural. Pagamento na entrega em todo Moçambique.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
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
    </main>
  );
}
