import { Link } from "@tanstack/react-router";

export function StickyMobileCTA() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-4 pb-4 sm:hidden">
      <Link
        to="/pedido"
        className="glow-cta pointer-events-auto flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-bold uppercase tracking-wider"
      >
        Quero o Meu Novo Sorriso
      </Link>
    </div>
  );
}
