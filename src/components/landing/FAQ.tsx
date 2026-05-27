import { useState } from "react";
import { Plus } from "lucide-react";

const items = [
  { q: "Como recebo?", a: "Entregamos em qualquer província de Moçambique." },
  { q: "Como pago?", a: "Pagamento presencial, no momento da entrega." },
  { q: "Quanto tempo demora?", a: "Dependendo da localização, entregamos rapidamente." },
  { q: "É difícil usar?", a: "Não. Basta usar junto da escovação normal." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-[#FAF8F4] py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="reveal text-center">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--brand-deep)]/70">
            Perguntas frequentes
          </span>
          <h2 className="headline mt-4 text-4xl text-[var(--ink)] sm:text-5xl">
            Tudo o que queres saber.
          </h2>
        </div>

        <div className="reveal mt-12 divide-y divide-black/10 overflow-hidden rounded-3xl border border-black/5 bg-white">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <button
                key={it.q}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full px-6 py-5 text-left transition-colors hover:bg-[var(--brand)]/5"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-base font-semibold text-[var(--ink)] sm:text-lg">{it.q}</span>
                  <Plus
                    className={`size-5 shrink-0 text-[var(--brand-deep)] transition-transform duration-500 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </div>
                <div
                  className="grid transition-all duration-500"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pt-3 text-[15px] leading-relaxed text-neutral-600">{it.a}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
