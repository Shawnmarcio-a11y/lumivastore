import a1 from "@/assets/avatar1.jpg";
import a2 from "@/assets/avatar2.jpg";
import a3 from "@/assets/avatar3.jpg";

const items = [
  { img: a1, name: "Edson M.", city: "Maputo", text: "Voltei a sorrir nas fotos sem pensar duas vezes." },
  { img: a2, name: "Lúcia P.", city: "Beira", text: "Gostei da sensação logo depois do primeiro uso." },
  { img: a3, name: "Dona Helena", city: "Nampula", text: "Os meus dentes parecem mais limpos e claros." },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#FAF8F4] via-white to-[#FAF8F4]" />
      <div className="absolute left-1/2 top-1/2 -z-10 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand)]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--brand-deep)]/70">
            Prova social
          </span>
          <h2 className="headline mt-4 text-4xl text-[var(--ink)] sm:text-5xl">
            Histórias reais. <br /> Sorrisos verdadeiros.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <figure
              key={it.name}
              className="reveal glass rounded-3xl p-7"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <img
                  src={it.img}
                  alt={it.name}
                  loading="lazy"
                  width={96}
                  height={96}
                  className="size-14 rounded-full object-cover ring-2 ring-white"
                />
                <div>
                  <figcaption className="text-sm font-semibold text-[var(--ink)]">{it.name}</figcaption>
                  <p className="text-xs text-neutral-500">{it.city}</p>
                </div>
                <div className="ml-auto text-[var(--brand)]">★★★★★</div>
              </div>
              <blockquote className="mt-5 text-[15px] leading-relaxed text-neutral-700">
                “{it.text}”
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
