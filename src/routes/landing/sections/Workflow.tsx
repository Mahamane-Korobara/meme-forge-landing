export default function Workflow() {
  const steps = [
    {
      n: "01",
      t: "Partez d'un modèle ou d'une image",
      b: "120 modèles intégrés, 100+ templates Imgflip ou vos propres fichiers — déposés directement dans le canvas.",
    },
    {
      n: "02",
      t: "Composez librement",
      b: "Texte typographique, formes, stickers, vidéo : chaque élément reste indépendant, déplaçable et stylisable.",
    },
    {
      n: "03",
      t: "Exportez en un format prêt",
      b: "8 formats préréglés, export PNG transparent ou WebM, partage natif via la boîte de dialogue du système.",
    },
  ];

  return (
    <section className="px-4 py-28">
      <div className="mx-auto max-w-6xl" data-reveal>
        <h2 className="max-w-3xl text-[34px] leading-[1.05] tracking-tight md:text-[52px]">
          <span className="font-display-italic">Trois étapes,</span>{" "}
          <span className="font-display font-medium">aucun détour.</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-rule bg-rule md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="bg-background p-8">
              <div className="flex items-baseline gap-3">
                <span className="font-display-italic text-3xl">{s.n}</span>
                <span className="h-px flex-1 bg-rule" />
              </div>
              <h3 className="mt-5 font-display text-2xl leading-tight">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
