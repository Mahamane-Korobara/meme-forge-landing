import { Clapperboard, Image as ImageIcon, Layers, Shapes, Type, Wand2 } from "lucide-react";

const items = [
  {
    icon: Type,
    title: "Édition texte typographique",
    body: "Impact, Bebas, Anton et 5 autres familles. Contour, ombrage, padding, interlettrage, alignement, rotation libre — pour des titres qui tiennent vraiment la composition.",
  },
  {
    icon: ImageIcon,
    title: "Images et fonds maîtrisés",
    body: "Importez en lot, détourez automatiquement le fond, utilisez une image comme arrière-plan : le format du canvas s'ajuste tout seul pour ne rien rogner.",
  },
  {
    icon: Clapperboard,
    title: "Vidéo native sur le canvas",
    body: "Importez un MP4, sélectionnez la zone à conserver (15 s max), superposez textes et formes, exportez en WebM avec une vraie barre de progression.",
  },
  {
    icon: Shapes,
    title: "Formes et bulles dédiées",
    body: "24 formes géométriques et bulles de dialogue prêtes à styliser. Remplissage, contour, profondeur — chaque élément reste indépendant et éditable.",
  },
  {
    icon: Wand2,
    title: "IA qui choisit l'image",
    body: "Décrivez l'idée, Gemini propose 5 variations : titre, sous-titre, modèle visuel adapté et positionnement optimisé. Fallback hors-ligne inclus.",
  },
  {
    icon: Layers,
    title: "Calques, undo et duplication",
    body: "Z-order complet, dupliquer en un clic, historique infini. Vous travaillez vite sans craindre de casser la composition précédente.",
  },
];

export default function FeatureGrid() {
  return (
    <section id="fonctionnalites" className="border-t border-rule px-4 py-24">
      <div className="mx-auto max-w-6xl" data-reveal>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="chip">Fonctionnalités</span>
            <h2 className="mt-5 max-w-2xl text-[34px] leading-[1.05] tracking-tight md:text-[52px]">
              <span className="font-display-italic">Tout ce que vous attendez,</span>{" "}
              <span className="font-display font-medium">vraiment au bon endroit.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Chaque module a été pensé pour s'enchaîner naturellement, du premier clic
            jusqu'à l'export final.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="card-hover group flex flex-col gap-4 bg-background p-7 hover:bg-paper"
            >
              <span className="card-icon grid h-10 w-10 place-items-center rounded-lg border border-rule bg-paper">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-2xl leading-tight">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
