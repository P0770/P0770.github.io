// Données de la chronologie (page Projets).
// Les projets viennent de projects.ts ; ce fichier contient le parcours de formation.

export type Jalon = {
  /** Date au format "AAAA-MM" : sert au placement dans la chronologie */
  date: string;
  /** Texte court affiché avant le titre, ex. "Mi-sept." */
  quand: string;
  titre: string;
  detail?: string;
};

/** Ligne affichée tout en haut de la chronologie */
export const avant =
  "La Source, Lausanne (2017 – 2018) · Bachelor en biologie, Université de Liège (2018 – 2022)";

/** Formation suivie pendant chaque année civile (sous le grand chiffre de l'année) */
export const formationParAnnee: Record<string, string> = {
  "2023": "Année préparatoire ingénieur · CPNV",
  "2024": "CPNV → HEPIA · MT1",
  "2025": "HEPIA · MT1 → MT2",
  "2026": "HEPIA · MT2 → MT3 · spécialisation biomédicale",
};

/** Jalons de formation (débuts de semestre, etc.) */
export const jalons: Jalon[] = [
  {
    date: "2023-08",
    quand: "Août",
    titre: "Début de l'année préparatoire ingénieur",
    detail: "CPNV, Yverdon",
  },
  {
    date: "2024-06",
    quand: "Juin",
    titre: "Fin de l'année préparatoire",
    detail: "CPNV",
  },
  {
    date: "2024-09",
    quand: "Mi-sept.",
    titre: "Entrée à HEPIA — MT1",
    detail: "Semestre d'automne (S1)",
  },
  {
    date: "2025-02",
    quand: "Mi-févr.",
    titre: "MT1 — semestre de printemps (S2)",
  },
  {
    date: "2025-09",
    quand: "Mi-sept.",
    titre: "MT2 — semestre d'automne (S3)",
  },
  {
    date: "2026-02",
    quand: "Mi-févr.",
    titre: "MT2 — semestre de printemps (S4)",
    detail: "Début de la spécialisation biomédicale",
  },
  {
    date: "2026-09",
    quand: "Mi-sept.",
    titre: "MT3 — semestre d'automne (S5)",
    detail: "Spécialisation biomédicale",
  },
];
