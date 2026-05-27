import transformation from "@/assets/transformation.jpg";

export function Transformation() {
  return (
    <section className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <div className="reveal mx-auto max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--brand-deep)]/70">
            Transformação
          </span>
          <h2 className="headline mt-4 text-4xl text-[var(--ink)] sm:text-5xl lg:text-6xl">
            A aparência do teu sorriso <br /> pode mudar em poucos dias.
          </h2>
          <p className="mt-6 text-lg text-neutral-600">
            LUMIVÁ™ ajuda a remover manchas superficiais e devolver aparência mais limpa aos dentes.
          </p>
        </div>

        <div className="reveal mt-16 overflow-hidden rounded-[2rem] shadow-[0_60px_120px_-40px_rgba(15,61,46,0.45)]">
          <img
            src={transformation}
            alt="Sorriso confiante após uso do LUMIVÁ"
            loading="lazy"
            width={1600}
            height={1067}
            className="aspect-[3/2] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
