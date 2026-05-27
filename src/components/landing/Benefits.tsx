const items = [
  { icon: "🦷", title: "Clareamento Visual", text: "Ajuda a melhorar a aparência dos dentes." },
  { icon: "🌿", title: "Fórmula Natural", text: "Sem sensação agressiva." },
  { icon: "⚡", title: "Fácil de Usar", text: "Use em poucos minutos por dia." },
  { icon: "✨", title: "Mais Confiança", text: "Volte a sorrir sem vergonha." },
];

export function Benefits() {
  return (
    <section className="relative bg-[#FAF8F4] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--brand-deep)]/70">
            Benefícios
          </span>
          <h2 className="headline mt-4 text-4xl text-[var(--ink)] sm:text-5xl">
            Tudo o que precisas, <br /> num só ritual.
          </h2>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-black/5 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(15,61,46,0.35)]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="grid size-12 place-items-center rounded-2xl bg-[var(--brand)]/15 text-2xl transition-transform duration-500 group-hover:scale-110">
                {it.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[var(--ink)]">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{it.text}</p>
              <div className="pointer-events-none absolute -bottom-12 -right-12 size-32 rounded-full bg-[var(--brand)]/0 blur-2xl transition-all duration-500 group-hover:bg-[var(--brand)]/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
