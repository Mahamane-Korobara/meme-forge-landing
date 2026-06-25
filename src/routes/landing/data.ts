export const SOFTWARE_JSONLD: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MemeForge",
  alternateName: "MemeForge — Éditeur de mèmes",
  applicationCategory: "DesignApplication",
  applicationSubCategory: "MemeEditor",
  operatingSystem: "Web",
  inLanguage: "fr-FR",
  url: "/",
  description:
    "MemeForge : éditeur de mèmes, stickers et vidéos courtes en ligne. IA, templates, export PNG/WebM, expérience 100% navigateur, sans installation ni compte.",
  browserRequirements: "Requires JavaScript. Requires HTML5.",
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
  featureList: [
    "Édition de texte typographique (Impact, Bebas, Anton, Inter…)",
    "Bibliothèque de 120 modèles intégrés et 100+ templates Imgflip",
    "Génération de mèmes assistée par IA Gemini 2.5 Flash",
    "Trimming et export vidéo WebM (VP9, jusqu'à 15 s)",
    "Suppression automatique du fond d'image",
    "8 formats préréglés (Instagram, TikTok, YouTube, Story…)",
    "Export PNG transparent et partage natif iOS / Android",
    "Calques, undo / redo illimité, duplication en un clic",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "128",
    bestRating: "5",
    worstRating: "1",
  },
};

export const FAQ_ITEMS = [
  {
    q: "MemeForge fonctionne-t-il sans inscription ?",
    a: "Oui. Tout l'éditeur, l'IA et l'export fonctionnent dans le navigateur. Aucune création de compte, aucun envoi de fichier vers un serveur.",
  },
  {
    q: "Mes fichiers sont-ils envoyés en ligne ?",
    a: "Non. Les images, vidéos et stickers que vous importez restent dans votre navigateur (IndexedDB). Seuls les prompts IA passent par l'API Gemini.",
  },
  {
    q: "Quels formats d'export sont disponibles ?",
    a: "PNG (fond transparent ou couleur) pour les images, WebM en VP9 (5 Mbps) pour les vidéos. Huit formats préréglés couvrent Instagram, TikTok, YouTube, Facebook et plus.",
  },
  {
    q: "Puis-je créer mes propres stickers ?",
    a: "Oui. Importez une image, supprimez le fond, ajoutez une animation (bounce, shake, zoom, rotation, fade, slide) et exportez en WebP ou GIF.",
  },
  {
    q: "L'IA est-elle obligatoire ?",
    a: "Pas du tout. L'IA est un raccourci pour démarrer rapidement. Tout l'éditeur fonctionne entièrement à la main si vous préférez composer vous-même.",
  },
];

export const FAQ_JSONLD: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "fr-FR",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};
