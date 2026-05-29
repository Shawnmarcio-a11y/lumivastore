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
import { OrderNotifications } from "@/components/landing/OrderNotifications";
import { useReveal } from "@/hooks/use-reveal";

const SITE_URL = "https://clean-gleam-creator.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LUMIVÁ™ — Whitening Powder Natural Moçambique" },
      {
        name: "description",
        content:
          "LUMIVÁ™ é o whitening powder natural que ajuda a remover manchas e devolver brilho ao teu sorriso. Pagamento na entrega em Moçambique.",
      },
      { property: "og:title", content: "LUMIVÁ™ — Whitening Powder Natural" },
      {
        property: "og:description",
        content: "Whitening powder natural. Pagamento na entrega em todo Moçambique.",
      },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:type", content: "product" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "LUMIVÁ™ Whitening Powder",
          description:
            "Whitening powder natural que ajuda a remover manchas e devolver brilho aos dentes.",
          brand: { "@type": "Brand", name: "LUMIVÁ" },
          image: `${SITE_URL}/og-product.jpg`,
          offers: {
            "@type": "Offer",
            price: "997",
            priceCurrency: "MZN",
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/pedido`,
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { q: "Como recebo?", a: "Entregamos em qualquer província de Moçambique." },
            { q: "Como pago?", a: "Pagamento presencial, no momento da entrega." },
            { q: "Quanto tempo demora?", a: "Dependendo da localização, entregamos rapidamente." },
            { q: "É difícil usar?", a: "Não. Basta usar junto da escovação normal." },
          ].map((it) => ({
            "@type": "Question",
            name: it.q,
            acceptedAnswer: { "@type": "Answer", text: it.a },
          })),
        }),
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
      <OrderNotifications />
    </main>
  );
}
