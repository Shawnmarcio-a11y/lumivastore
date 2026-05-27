import painImg from "@/assets/pain.jpg";

export function EmotionalPain() {
  return (
    <section className="relative bg-[#FAF8F4] py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div className="reveal order-2 lg:order-1">
          <img
            src={painImg}
            alt="Pessoa escondendo o sorriso por insegurança"
            loading="lazy"
            width={1080}
            height={1440}
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-[0_40px_80px_-30px_rgba(0,0,0,0.25)]"
          />
        </div>
        <div className="reveal order-1 max-w-xl lg:order-2">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--brand-deep)]/70">
            O problema
          </span>
          <h2 className="headline mt-4 text-4xl text-[var(--ink)] sm:text-5xl">
            Você evita sorrir <br /> em fotos?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            Café, chá, refrigerantes e o tempo fazem os dentes perderem a aparência branca — e isso
            afeta diretamente a confiança ao sorrir.
          </p>
          <p className="mt-4 text-base text-neutral-500">
            Não tem que continuar assim. Existe uma forma simples, natural e acessível.
          </p>
        </div>
      </div>
    </section>
  );
}
