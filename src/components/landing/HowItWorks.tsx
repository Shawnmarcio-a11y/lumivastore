const steps = [
  { n: "01", t: "Molhe a escova", d: "Comece com a escova ligeiramente húmida." },
  { n: "02", t: "Aplique o pó", d: "Coloque uma pequena quantidade de LUMIVÁ™." },
  { n: "03", t: "Escove gentilmente", d: "Movimentos suaves por 1–2 minutos." },
  { n: "04", t: "Enxágue e sorria", d: "Bocheche bem e sinta a frescura." },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--brand-deep)]/70">
            Como funciona
          </span>
          <h2 className="headline mt-4 text-4xl text-[var(--ink)] sm:text-5xl">
            Quatro passos. <br /> Um sorriso renovado.
          </h2>
        </div>

        <div className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal relative min-w-[78%] snap-center rounded-3xl border border-black/5 bg-[#FAF8F4] p-8 lg:min-w-0"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="headline text-6xl text-[var(--brand)]">{s.n}</span>
              <h3 className="mt-3 text-xl font-semibold text-[var(--ink)]">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.d}</p>
              {i < steps.length - 1 && (
                <span className="absolute right-6 top-10 hidden text-[var(--brand)]/40 lg:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
