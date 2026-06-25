import { ArrowRight } from "lucide-react";

export default function CtaBand() {
  const editorUrl = import.meta.env.VITE_EDITOR_URL ?? "https://meme-forge-editeur.sahelstack.tech/";
  return (
    <section id="cta" className="px-4 pb-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-rule bg-ink px-8 py-20 text-center text-primary-foreground" data-reveal>
        <h2 className="mx-auto max-w-3xl text-[36px] leading-[1.05] tracking-tight md:text-[56px]">
          <span className="font-display-italic block opacity-80">
            La prochaine bonne blague
          </span>
          <span className="font-display block font-medium">
            mérite un éditeur à sa hauteur.
          </span>
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={editorUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-medium text-foreground transition-transform hover:-translate-y-px"
          >
            Lancer MemeForge
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#fonctionnalites"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground"
          >
            Revoir les fonctionnalités
          </a>
        </div>
        <p className="mt-4 text-xs text-primary-foreground/60">
          Gratuit · Aucun compte · Fonctionne hors-ligne après le premier chargement
        </p>
      </div>
    </section>
  );
}
