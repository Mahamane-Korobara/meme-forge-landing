export default function Marquee() {
  const items = [
    "120 modèles intégrés",
    "100+ templates Imgflip",
    "IA Gemini 2.5 Flash",
    "Export PNG & WebM",
    "Annuler illimité",
    "Trimming vidéo 15 s",
    "8 formats prêts",
    "Bibliothèque locale",
    "Web Share natif",
    "Suppression de fond",
  ];

  return (
    <section className="mt-20 border-y border-rule bg-paper py-5">
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap pl-12 text-sm text-muted-foreground">
          {[...items, ...items].map((it, i) => (
            <span key={i} className="inline-flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-ink-soft" />
              {it}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
