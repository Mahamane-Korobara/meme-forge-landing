import { Logo } from "./Nav";

export default function Footer() {
  return (
    <footer className="border-t border-rule px-4 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <Logo />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} MemeForge. Conçu pour les créateurs pressés.
        </p>
        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <a href="#fonctionnalites" className="hover:text-foreground">
            Fonctionnalités
          </a>
          <a href="#faq" className="hover:text-foreground">
            FAQ
          </a>
          <a href="#cta" className="hover:text-foreground">
            Ouvrir l'éditeur
          </a>
        </div>
      </div>
    </footer>
  );
}
