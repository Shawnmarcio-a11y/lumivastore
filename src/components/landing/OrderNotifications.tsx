import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";

const orders = [
  { name: "Aniceto M.", province: "Maputo" },
  { name: "Carla J.", province: "Matola" },
  { name: "Eduardo S.", province: "Beira" },
  { name: "Fátima A.", province: "Nampula" },
  { name: "Hélio T.", province: "Tete" },
  { name: "Joana R.", province: "Quelimane" },
  { name: "Lúcia P.", province: "Inhambane" },
  { name: "Mário C.", province: "Pemba" },
  { name: "Nércia D.", province: "Xai-Xai" },
  { name: "Osvaldo F.", province: "Chimoio" },
  { name: "Paula N.", province: "Lichinga" },
  { name: "Rui B.", province: "Gaza" },
  { name: "Sandra V.", province: "Maputo" },
  { name: "Tomé L.", province: "Nacala" },
  { name: "Vanessa G.", province: "Manica" },
];

const minutesAgo = [2, 4, 5, 7, 9, 11, 14, 18];

export function OrderNotifications() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(show);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((p) => (p + 1) % orders.length);
        setVisible(true);
      }, 500);
    }, 6000);
    return () => clearInterval(interval);
  }, [visible]);

  const order = orders[idx];
  const mins = minutesAgo[idx % minutesAgo.length];

  return (
    <div
      className={`pointer-events-none fixed bottom-24 left-4 z-40 max-w-[300px] transition-all duration-500 sm:bottom-6 sm:left-6 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      aria-live="polite"
    >
      <div className="pointer-events-auto flex items-center gap-3 rounded-2xl border border-black/5 bg-white/95 p-3 pr-4 shadow-[0_20px_50px_-20px_rgba(15,61,46,0.35)] backdrop-blur-xl">
        <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--brand)]/20 text-[var(--brand-deep)]">
          <ShoppingBag className="size-5" strokeWidth={2.2} />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-[var(--ink)]">
            {order.name} <span className="font-normal text-neutral-500">— {order.province}</span>
          </p>
          <p className="text-xs text-neutral-500">
            Acabou de fazer um pedido · há {mins} min
          </p>
        </div>
      </div>
    </div>
  );
}
