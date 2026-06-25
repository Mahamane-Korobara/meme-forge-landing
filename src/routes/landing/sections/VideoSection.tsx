import { Play, Scissors, Clapperboard } from "lucide-react";

export default function VideoSection() {
  return (
    <section id="video" className="border-t border-rule bg-paper px-4 py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_1.05fr]" data-reveal>
        <div className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-2xl border border-rule bg-card">
            <div className="relative aspect-video bg-[oklch(0.16_0.02_270)]">
              <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-2.5 py-1 text-[11px] font-medium text-ink">
                00:08 / 00:15
              </span>
              <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ink px-2.5 py-1 text-[11px] font-medium text-primary-foreground">
                <span className="h-1.5 w-1.5 animate-blink rounded-full bg-marker" />
                Export 62 %
              </span>
              <div className="absolute inset-x-0 top-[42%] text-center">
                <span className="font-display text-3xl text-white sm:text-4xl">
                  TUTO EN 15 SECONDES
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-6 text-center">
                <span className="rounded-md bg-marker px-2 py-1 font-display text-lg uppercase tracking-wide text-white">
                  Partie 1
                </span>
              </div>
              <button
                aria-label="Lire l'aperçu"
                className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper text-ink shadow-lg"
              >
                <Play className="h-5 w-5" />
              </button>
            </div>
            <div className="border-t border-rule p-4">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider text-muted-foreground">
                <Scissors className="h-3.5 w-3.5" />
                Trimming
              </div>
              <div className="mt-3 relative h-10 rounded-md bg-[oklch(0.94_0.005_250)]">
                <div className="absolute inset-y-0 left-[18%] right-[22%] rounded-md bg-ink/90" />
                <div className="absolute inset-y-0 left-[18%] w-1.5 rounded-l-md bg-marker" />
                <div className="absolute inset-y-0 right-[22%] w-1.5 rounded-r-md bg-marker" />
              </div>
              <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
                <span>0s</span>
                <span>5s</span>
                <span>10s</span>
                <span>15s</span>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="chip">
            <Clapperboard className="h-3.5 w-3.5" />
            Vidéo
          </span>
          <h2 className="mt-5 text-[34px] leading-[1.05] tracking-tight md:text-[52px]">
            <span className="font-display-italic">La vidéo, traitée comme</span>{" "}
            <span className="font-display font-medium">un calque parmi les autres.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
            Importez un MP4, WebM ou MOV, choisissez la zone à conserver,
            superposez textes, stickers ou formes. L'export WebM en VP9
            préserve la résolution source, et la barre de progression vous
            indique l'avancée seconde par seconde.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
            {[
              { k: "15 s", v: "Durée max contrôlée" },
              { k: "5 Mbps", v: "Qualité d'export" },
              { k: "WebM", v: "Codec VP9 / fallback" },
              { k: "0–100 %", v: "Progression en direct" },
            ].map((s) => (
              <div key={s.k} className="rounded-xl border border-rule bg-background p-4">
                <div className="font-display text-2xl">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
