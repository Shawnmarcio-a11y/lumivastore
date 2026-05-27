import { Link } from "@tanstack/react-router";
import { useScrolled } from "@/hooks/use-reveal";

export function Header() {
  useScrolled(8);
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500
        [html[data-scrolled='true']_&]:bg-white/75
        [html[data-scrolled='true']_&]:backdrop-blur-xl
        [html[data-scrolled='true']_&]:border-b
        [html[data-scrolled='true']_&]:border-black/5"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="group flex items-center gap-2">
          <span className="headline text-2xl tracking-tight text-[var(--ink)]">
            LUMIVÁ
            <sup className="ml-0.5 text-[10px] align-super text-[var(--brand-deep)]">™</sup>
          </span>
        </Link>
        <Link
          to="/pedido"
          className="glow-cta inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold tracking-tight"
        >
          Comprar Agora
        </Link>
      </div>
    </header>
  );
}
