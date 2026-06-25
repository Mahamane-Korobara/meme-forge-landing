import { Sparkles } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="grid h-7 w-7 place-items-center rounded-md bg-ink text-white shadow-sm shadow-black/20">
        <span className="font-display text-[15px] leading-none">M</span>
      </span>
      <span className="font-display text-[20px] leading-none tracking-tight text-foreground">
        MemeForge
      </span>
    </span>
  );
}

export default function Nav() {
  const items = ["Fonctionnalités", "Modèles", "Vidéo", "FAQ"];
  return (
    <header className="sticky top-0 z-40 w-full px-4 pt-3 md:pt-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-3 nav-pill px-3 py-2 animate-fade-soft">
        <a href="#top" className="pl-2">
          <Logo />
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {items.map((it) => (
            <li key={it}>
              <a
                href={`#${it.toLowerCase().replace(/[^a-z]/g, "")}`}
                className="nav-link rounded-full px-3 py-2 text-sm text-foreground/80 hover:text-foreground"
              >
                {it}
              </a>
            </li>
          ))}
        </ul>
        <a href="#cta" className="btn-ink btn-ink-hover btn-shine px-3 py-2 text-xs sm:text-sm">
          <Sparkles className="h-4 w-4" />
          Ouvrir l'éditeur
        </a>
      </nav>
    </header>
  );
}
