import { Share2 } from "lucide-react";

const formats = [
  { label: "Carré", ratio: "1:1", size: "1080 × 1080", w: "h-32 w-32" },
  { label: "Portrait", ratio: "4:5", size: "1080 × 1350", w: "h-36 w-[7.2rem]" },
  { label: "Story", ratio: "9:16", size: "1080 × 1920", w: "h-40 w-[5.6rem]" },
  { label: "Paysage", ratio: "16:9", size: "1920 × 1080", w: "h-[4.5rem] w-32" },
  { label: "Bannière", ratio: "4:1", size: "1600 × 400", w: "h-8 w-32" },
  { label: "Mème", ratio: "4:3", size: "720 × 540", w: "h-24 w-32" },
];

export default function Formats() {
  return (
    <section id="modeles" className="border-t border-rule bg-paper px-4 py-28">
      <div className="mx-auto max-w-6xl" data-reveal>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-[34px] leading-[1.05] tracking-tight md:text-[52px]">
            <span className="font-display-italic">Un format pour</span>{" "}
            <span className="font-display font-medium">chaque plateforme.</span>
          </h2>
          <p className="max-w-sm text-sm text-muted-foreground">
            Le canvas s'adapte automatiquement : tous les éléments conservent
            leurs proportions, leurs positions et leurs styles.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {formats.map((f) => (
            <div
              key={f.label}
              className="hover-lift flex flex-col items-center gap-3 rounded-2xl border border-rule bg-background p-5"
            >
              <div className="flex h-44 items-center justify-center">
                <div className={`rounded-md border border-ink/80 bg-card ${f.w}`} />
              </div>
              <div className="text-center">
                <div className="font-display text-lg">{f.label}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  {f.ratio} · {f.size}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
          <Share2 className="h-4 w-4" />
          Partage natif iOS / Android · Copie image (Ctrl + V) · Liens Twitter,
          WhatsApp, LinkedIn, e-mail
        </div>
      </div>
    </section>
  );
}
