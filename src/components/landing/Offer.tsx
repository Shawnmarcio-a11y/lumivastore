import { Link } from "@tanstack/react-router";
import { Check, Clock } from "lucide-react";
import product from "@/assets/product.png";

export function Offer() {
  return (
    <section
      id="oferta"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: "var(--brand-deep)" }}
    >
      <div className="absolute inset-0 -z-0 opacity-40">
        <div className="absolute left-1/4 top-10 size-[500px] rounded-full bg-[var(--brand)]/20 blur-3xl drift-slow" />
        <div className="absolute right-0 bottom-0 size-[400px] rounded-full bg-[var(--brand)]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="reveal relative flex justify-center">
          <img
            src={product}
            alt="LUMIVÁ Whitening Powder"
            loading="lazy"
            width={520}
            height={520}
            className="float-anim w-[70%] max-w-[460px] drop-shadow-[0_40px_60px_rgba(0,0,0,0.5)]"
          />
        </div>

        <div className="reveal text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--brand)]">
            <Clock className="size-3.5" /> Oferta limitada
          </span>
          <h2 className="headline mt-5 text-4xl sm:text-5xl lg:text-6xl">
            Oferta Especial <br /> de Hoje
          </h2>

          <div className="mt-8 flex items-end gap-4">
            <span className="text-xl text-white/40 line-through">1499 MT</span>
            <span className="headline text-6xl text-[var(--brand)]">
              997 <span className="text-2xl">MT</span>
            </span>
          </div>

          <ul className="mt-8 space-y-3 text-[15px] text-white/90">
            {[
              "1x LUMIVÁ™ Whitening Powder",
              "Entrega incluída",
              "Pagamento na entrega",
              "Suporte WhatsApp",
            ].map((b) => (
              <li key={b} className="flex items-center gap-3">
                <span className="grid size-6 place-items-center rounded-full bg-[var(--brand)] text-[var(--brand-deep)]">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <Link
            to="/pedido"
            className="glow-cta pulse mt-10 inline-flex w-full items-center justify-center rounded-full px-8 py-5 text-base font-bold uppercase tracking-wider sm:w-auto sm:text-lg"
          >
            Sim! Quero o Meu Novo Sorriso
          </Link>
        </div>
      </div>
    </section>
  );
}
