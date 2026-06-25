import { ArrowRight, Type, Image as ImageIcon, Film, Shapes, Smile, Wand2 } from "lucide-react";
import EditorMockup from "./EditorMockup";

export default function Hero() {
  return (
    <section id="top" className="relative px-4 pt-16 md:pt-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-[1.05fr_1fr]" data-reveal>
        <div className="animate-rise">
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-marker" />
              Nouveau · MemeForge 1.0
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
            <span className="chip">
              <Wand2 className="h-3.5 w-3.5" />
              IA Gemini intégrée
            </span>
          </div>

          <h1 className="mt-8 text-[44px] leading-[1.02] tracking-tight sm:text-[56px] md:text-[72px]">
            <span className="font-display-italic block">L'éditeur de mèmes</span>
            <span className="font-display-italic block">qu'il vous manquait :</span>
            <span className="font-display mt-1 block font-medium text-ink">
              rapide, précis, sans IA visible.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            MemeForge réunit <strong className="text-foreground">textes, images,
            vidéos, stickers, formes et IA</strong> dans un seul canvas. Composez,
            ajustez et exportez en PNG ou WebM en quelques secondes — directement
            dans votre navigateur, sans installation.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" className="btn-ink btn-ink-hover btn-shine">
              Lancer l'éditeur
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#fonctionnalites"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground"
            >
              Voir les fonctionnalités
            </a>
          </div>

          <p className="mt-4 text-[13px] text-muted-foreground">
            Aucun compte requis · 100 % dans le navigateur · Vos fichiers restent locaux
          </p>

          <div className="mt-10">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Tout ce dont vous avez besoin, au même endroit :
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {[
                { icon: Type, label: "Texte" },
                { icon: ImageIcon, label: "Images" },
                { icon: Film, label: "Vidéo" },
                { icon: Shapes, label: "Formes" },
                { icon: Smile, label: "Stickers" },
                { icon: Wand2, label: "IA" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="chip">
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <EditorMockup />
      </div>
    </section>
  );
}
