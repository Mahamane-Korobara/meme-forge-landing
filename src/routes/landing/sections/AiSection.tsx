import { Check, Wand2 } from "lucide-react";

export default function AiSection() {
  return (
    <section className="px-4 py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2" data-reveal>
        <div>
          <span className="chip">
            <Wand2 className="h-3.5 w-3.5" />
            IA assistée
          </span>
          <h2 className="mt-5 text-[34px] leading-[1.05] tracking-tight md:text-[52px]">
            <span className="font-display-italic">Décrivez l'idée.</span>{" "}
            <span className="font-display font-medium">Recevez cinq mèmes prêts.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
            Le moteur IA lit votre intention, choisit un visuel cohérent parmi la
            bibliothèque et place le texte au bon endroit. Vous gardez la main sur
            chaque élément — police, position, contour, calque — comme sur n'importe
            quel autre projet.
          </p>
          <ul className="mt-7 space-y-3 text-sm">
            {[
              "5 variations par génération, jamais identiques",
              "Sélection automatique du template visuel adapté",
              "Positionnement du titre et du sous-titre optimisé",
              "Mode hors-ligne avec modèles de secours intégrés",
            ].map((it) => (
              <li key={it} className="flex items-start gap-3 text-foreground/85">
                <Check className="mt-0.5 h-4 w-4 text-marker" />
                {it}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-rule bg-card p-5 shadow-[0_24px_60px_-30px_rgba(15,18,35,0.25)]">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Wand2 className="h-3.5 w-3.5" />
              Prompt
            </div>
            <p className="mt-2 font-display text-xl leading-snug">
              "Quand je relance la prod un vendredi à 17h59"
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                { t: "ROLLBACK", s: "weekend ruiné" },
                { t: "ALL GREEN", s: "à 18h00 pile" },
                { t: "POV : DEV", s: "vendredi soir" },
                { t: "JE TENTE", s: "le push" },
                { t: "MONITORING", s: "qui clignote" },
              ].map((m, i) => (
                <div
                  key={i}
                  className="aspect-square overflow-hidden rounded-lg border border-rule bg-[oklch(0.22_0.02_270)] p-2 text-center"
                >
                  <div className="flex h-full flex-col justify-between">
                    <span className="font-display text-sm text-white">{m.t}</span>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-white/70">
                      {m.s}
                    </span>
                  </div>
                </div>
              ))}
              <div className="grid aspect-square place-items-center rounded-lg border border-dashed border-rule text-xs text-muted-foreground">
                + relancer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
