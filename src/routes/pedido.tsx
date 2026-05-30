import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import product from "@/assets/product.png";
import { Check, ArrowLeft } from "lucide-react";
import logo from "@/assets/lumiva-logo.png";

const SITE_URL = "https://clean-gleam-creator.lovable.app";

export const Route = createFileRoute("/pedido")({
  head: () => ({
    meta: [
      { title: "Finalizar Pedido — LUMIVÁ™" },
      {
        name: "description",
        content:
          "Preenche os teus dados para receber o LUMIVÁ™ Whitening Powder em casa. Pagamento na entrega em Moçambique.",
      },
      { property: "og:title", content: "Finalizar Pedido — LUMIVÁ™" },
      {
        property: "og:description",
        content: "Recebe o teu LUMIVÁ™ em casa. Pagamento na entrega em todo Moçambique.",
      },
      { property: "og:url", content: `${SITE_URL}/pedido` },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/pedido` }],
  }),
  component: PedidoPage,
});

const provincias = [
  "Maputo Cidade",
  "Maputo Província",
  "Gaza",
  "Inhambane",
  "Sofala",
  "Manica",
  "Tete",
  "Zambézia",
  "Nampula",
  "Cabo Delgado",
  "Niassa",
];

const schema = z.object({
  nome: z.string().trim().min(2, "Nome muito curto").max(100),
  telefone: z
    .string()
    .trim()
    .min(8, "Telefone inválido")
    .max(20)
    .regex(/^[0-9+\s-]+$/, "Apenas números"),
  endereco: z.string().trim().min(4, "Endereço obrigatório").max(200),
  referencia: z.string().trim().max(200).optional().or(z.literal("")),
  provincia: z.string().min(1, "Selecione uma província"),
  quantidade: z.coerce.number().int().min(1).max(20),
});

type Form = z.infer<typeof schema>;

function PedidoPage() {
  const [form, setForm] = useState<Form>({
    nome: "",
    telefone: "",
    endereco: "",
    referencia: "",
    provincia: "",
    quantidade: 1,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const unit = 997;
  const total = unit * (Number(form.quantidade) || 1);

  function update<K extends keyof Form>(k: K, v: Form[K]) {
    setForm((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      const errs: Partial<Record<keyof Form, string>> = {};
      res.error.issues.forEach((i) => {
        const k = i.path[0] as keyof Form;
        errs[k] = i.message;
      });
      setErrors(errs);
      return;
    }

    const ownerMsg = [
      "*NOVO PEDIDO LUMIVÁ™*",
      "",
      `*Nome:* ${form.nome}`,
      `*Telefone:* ${form.telefone}`,
      `*Endereço:* ${form.endereco}`,
      `*Referência:* ${form.referencia || "—"}`,
      `*Província:* ${form.provincia}`,
      `*Quantidade:* ${form.quantidade}×`,
      `*Total:* ${total.toLocaleString("pt-PT")} MT`,
      "",
      "Pagamento na entrega.",
    ].join("\n");

    const clientMsg = [
      `🎉 *Parabéns pelo novo sorriso, ${form.nome.split(" ")[0]}!*`,
      "",
      "O teu pedido LUMIVÁ™ foi recebido com sucesso. Em breve a nossa equipa entra em contacto para confirmar a entrega.",
      "",
      "*Resumo do teu pedido:*",
      `• Nome: ${form.nome}`,
      `• Telefone: ${form.telefone}`,
      `• Endereço: ${form.endereco}`,
      `• Referência: ${form.referencia || "—"}`,
      `• Província: ${form.provincia}`,
      `• Quantidade: ${form.quantidade}×`,
      `• Total: ${total.toLocaleString("pt-PT")} MT`,
      "",
      "Pagamento na entrega.",
      "",
      "Obrigado por confiares na LUMIVÁ™ ✨",
    ].join("\n");

    // Normalizar telefone do cliente (adicionar 258 se necessário)
    const raw = form.telefone.replace(/[^0-9]/g, "");
    const clientPhone = raw.startsWith("258") ? raw : `258${raw.replace(/^0+/, "")}`;

    // Abrir WhatsApp com mensagem de parabéns para o cliente
    window.open(
      `https://wa.me/${clientPhone}?text=${encodeURIComponent(clientMsg)}`,
      "_blank",
      "noopener,noreferrer",
    );

    // Notificar também o dono do negócio (com pequeno atraso para evitar bloqueio de popup)
    setTimeout(() => {
      window.open(
        `https://wa.me/258835055731?text=${encodeURIComponent(ownerMsg)}`,
        "_blank",
        "noopener,noreferrer",
      );
    }, 400);

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-white">
        <div className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-5 py-16 text-center">
          <div className="grid size-20 place-items-center rounded-full bg-[var(--brand)]/20 text-[var(--brand-deep)]">
            <Check className="size-10" strokeWidth={2.5} />
          </div>
          <h1 className="headline mt-6 text-4xl text-[var(--ink)] sm:text-5xl">Pedido recebido!</h1>
          <p className="mt-4 text-neutral-600">
            Obrigado, <strong>{form.nome.split(" ")[0]}</strong>. A nossa equipa vai entrar em contacto
            pelo número <strong>{form.telefone}</strong> para confirmar a entrega.
          </p>
          <div className="mt-8 w-full rounded-2xl border border-black/5 bg-[#FAF8F4] p-6 text-left text-sm">
            <p className="text-neutral-500">Resumo</p>
            <p className="mt-1 text-[var(--ink)]">
              {form.quantidade}× LUMIVÁ™ · {form.provincia}
            </p>
            <p className="mt-1 headline text-2xl text-[var(--brand-deep)]">
              Total: {total.toLocaleString("pt-PT")} MT
            </p>
            <p className="mt-1 text-xs text-neutral-500">Pagamento na entrega.</p>
          </div>
          <Link to="/" className="mt-8 text-sm text-neutral-500 underline-offset-4 hover:underline">
            Voltar à página inicial
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF8F4]">
      <header className="sticky top-0 z-30 border-b border-black/5 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-[var(--ink)]">
            <ArrowLeft className="size-4" /> Voltar
          </Link>
          <span className="headline inline-flex items-center gap-1.5 text-xl text-[var(--ink)]">
            LUMIVÁ
            <img src={logo} alt="" aria-hidden="true" className="h-5 w-auto" />
            <sup className="text-[9px] text-[var(--brand-deep)]">™</sup>
          </span>
        </div>
      </header>

      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h1 className="headline text-4xl text-[var(--ink)] sm:text-5xl">Finalizar pedido</h1>
          <p className="mt-3 text-neutral-600">
            Preenche os teus dados. Pagamento presencial — só pagas depois de receber.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-5">
            <Field label="Nome completo" error={errors.nome}>
              <input
                value={form.nome}
                onChange={(e) => update("nome", e.target.value)}
                placeholder="O teu nome"
                className={inputCls}
                autoComplete="name"
              />
            </Field>
            <Field label="Número de telefone" error={errors.telefone}>
              <input
                value={form.telefone}
                onChange={(e) => update("telefone", e.target.value)}
                placeholder="Ex.: 84 123 4567"
                inputMode="tel"
                className={inputCls}
                autoComplete="tel"
              />
            </Field>
            <Field label="Endereço" error={errors.endereco}>
              <input
                value={form.endereco}
                onChange={(e) => update("endereco", e.target.value)}
                placeholder="Rua, bairro, número"
                className={inputCls}
              />
            </Field>
            <Field label="Pontos de referência" error={errors.referencia}>
              <input
                value={form.referencia}
                onChange={(e) => update("referencia", e.target.value)}
                placeholder="Ex.: próximo da farmácia"
                className={inputCls}
              />
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Província" error={errors.provincia}>
                <select
                  value={form.provincia}
                  onChange={(e) => update("provincia", e.target.value)}
                  className={inputCls}
                >
                  <option value="">Seleciona…</option>
                  {provincias.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Quantidade" error={errors.quantidade}>
                <input
                  type="number"
                  min={1}
                  max={20}
                  value={form.quantidade}
                  onChange={(e) => update("quantidade", Number(e.target.value) as Form["quantidade"])}
                  className={inputCls}
                />
              </Field>
            </div>

            <button
              type="submit"
              className="glow-cta mt-2 inline-flex w-full items-center justify-center rounded-full px-8 py-5 text-base font-bold uppercase tracking-wider"
            >
              Finalizar Pedido
            </button>
            <p className="text-center text-xs text-neutral-500">
              Pagamento na entrega · Entrega em todo Moçambique
            </p>
          </form>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="overflow-hidden rounded-3xl border border-black/5 bg-white p-6 shadow-[0_30px_60px_-30px_rgba(15,61,46,0.25)]">
            <div className="flex items-center gap-4">
              <img src={product} alt="Frasco de LUMIVÁ Whitening Powder natural" width={160} height={160} className="size-20 object-contain" />
              <div>
                <p className="text-sm font-semibold text-[var(--ink)]">LUMIVÁ™ Whitening Powder</p>
                <p className="text-xs text-neutral-500">Fórmula natural · 60g</p>
              </div>
            </div>
            <div className="mt-5 space-y-2 border-t border-black/5 pt-5 text-sm">
              <Row label="Preço unitário" value={`${unit.toLocaleString("pt-PT")} MT`} />
              <Row label="Quantidade" value={`${form.quantidade}×`} />
              <Row label="Entrega" value="Incluída" />
            </div>
            <div className="mt-5 flex items-end justify-between border-t border-black/5 pt-5">
              <span className="text-sm text-neutral-500">Total</span>
              <span className="headline text-3xl text-[var(--brand-deep)]">
                {total.toLocaleString("pt-PT")} <span className="text-base">MT</span>
              </span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

const inputCls =
  "w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-[15px] text-[var(--ink)] outline-none transition-all placeholder:text-neutral-400 focus:border-[var(--brand)] focus:ring-4 focus:ring-[var(--brand)]/20";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-[var(--ink)]">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-neutral-600">
      <span>{label}</span>
      <span className="text-[var(--ink)]">{value}</span>
    </div>
  );
}
