import { Link } from "@tanstack/react-router";
import product from "@/assets/product.png";
import { Check } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="particles absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div className="reveal max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)]/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--brand-deep)]">
            <span className="size-1.5 rounded-full bg-[var(--brand)]" /> Novo • Fórmula Natural
          </span>
          <h1 className="headline mt-6 text-5xl text-[var(--ink)] sm:text-6xl lg:text-7xl">
            Volte a Sorrir <br /> Sem Vergonha.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-600">
            O whitening powder natural que está a ajudar centenas de pessoas a recuperar a aparência
            branca dos dentes — sem tratamentos caros.
          </p>

          <ul className="mt-8 grid gap-2.5 text-[15px] text-neutral-700 sm:grid-cols-2">
            {[
              "Fórmula Natural",
              "Ajuda a remover manchas",
              "Fácil de usar",
              "Resultado visual rápido",
            ].map((b) => (
              <li key={b} className="flex items-center gap-2.5">
                <span className="grid size-5 place-items-center rounded-full bg-[var(--brand)]/20 text-[var(--brand-deep)]">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex items-end gap-4">
            <span className="text-lg text-neutral-400 line-through">1499 MT</span>
            <span className="headline text-5xl text-[var(--brand-deep)]">
              997 <span className="text-2xl">MT</span>
            </span>
          </div>

          <Link
            to="/pedido"
            className="glow-cta pulse mt-8 inline-flex w-full items-center justify-center rounded-full px-8 py-5 text-base font-bold uppercase tracking-wider sm:w-auto sm:text-lg"
          >
            Quero Deixar os Meus Dentes Brancos
          </Link>
          <p className="mt-3 text-xs text-neutral-500">
            Pagamento na entrega · Entrega em todo Moçambique
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand)]/25 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand)]/10 blur-3xl drift-slow" />
          </div>
          <img
            src={product}
            alt="LUMIVÁ Natural Teeth Whitening Powder — frasco premium"
            width={620}
            height={620}
            className="float-anim w-[78%] max-w-[560px] drop-shadow-[0_40px_60px_rgba(15,61,46,0.25)]"
          />
        </div>
      </div>
    </section>
  );
}
