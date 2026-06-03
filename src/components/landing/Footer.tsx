import { Link } from "@tanstack/react-router";
import logo from "@/assets/lumiva-logo.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--ink)] py-20 text-white">
      <div className="reveal mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h3 className="headline text-3xl sm:text-4xl">
          O teu sorriso muda <br /> a forma como o mundo te vê.
        </h3>
        <p className="mt-4 text-white/60">
          Comece hoje a recuperar a confiança no teu sorriso.
        </p>
        <Link
          to="/pedido"
          className="glow-cta mt-8 inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider"
        >
          Comprar Agora
        </Link>
      </div>
      <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:px-10">
        <span className="headline inline-flex items-center gap-1.5 text-base text-white/80">
          LUMIVÁ™
          <img src={logo} alt="" aria-hidden="true" className="h-5 w-auto brightness-0 invert opacity-80" />
        </span>
        <span>© {new Date().getFullYear()} LUMIVÁ. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
