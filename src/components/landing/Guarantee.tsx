import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="reveal mx-auto max-w-2xl px-5 text-center sm:px-8">
        <div className="mx-auto grid size-20 place-items-center rounded-3xl bg-[var(--brand)]/15 text-[var(--brand-deep)]">
          <ShieldCheck className="size-10" strokeWidth={1.6} />
        </div>
        <h2 className="headline mt-6 text-4xl text-[var(--ink)] sm:text-5xl">Risco Zero</h2>
        <p className="mt-4 text-lg text-neutral-600">
          Pagamento presencial. Só pagas depois de receber.
        </p>
      </div>
    </section>
  );
}
