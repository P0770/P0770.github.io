// ── Formation ──
export type CreditLigne = {
  nom: string;
  ects: number;
  /** Cours du module (HEPIA : les crédits sont attribués par module) */
  cours?: string[];
};
export type CreditGroupe = { titre: string; lignes: CreditLigne[] };
export type Education = {
  school: string;
  degree: string;
  period: string;
  note: string;
  /** Chemin du logo dans public/ (laisser le fichier absent → initiales) */
  logo?: string;
  /** Initiales affichées si le logo manque */
  initiales: string;
  /** Crédits validés : le total se calcule tout seul */
  credits?: { total: number; groupes: CreditGroupe[] };
};

const education: Education[] = [
  {
    school: "HEPIA — HES-SO Genève",
    degree: "Bachelor en ingénierie microtechnique, spécialisation biomédicale",
    period: "2024 – aujourd'hui",
    note: "",
    logo: "/logos/hepia.png",
    initiales: "HE",
    credits: {
      total: 180,
      groupes: [
        {
          titre: "Semestres 1 et 2 · MT1",
          lignes: [
            {
              nom: "Mathématiques et informatique",
              ects: 15,
              cours: [
                "Mathématiques pour l'ingénieur A1", "Mathématiques pour l'ingénieur A2",
                "Mathématiques pour l'ingénieur B1", "Mathématiques pour l'ingénieur B2",
                "Programmation 1", "Programmation 2", "Systèmes logiques",
                "Traitement statistique des données",
              ],
            },
            {
              nom: "Conception mécanique",
              ects: 17,
              cours: [
                "Matériaux 1", "Matériaux 2", "Mécanique physique 1", "Mécanique physique 2",
                "Dessin technique", "Conception assistée par ordinateur", "Techniques de fabrication",
                "Construction 1", "Construction 2",
              ],
            },
            {
              nom: "Conception électrique",
              ects: 17,
              cours: [
                "Électronique 1", "Électronique 2", "Électrotechnique 1", "Capteurs et actuateurs",
                "Électrostatique et électromagnétisme 1", "Énergie 1",
              ],
            },
            {
              nom: "Projet et méthodes",
              ects: 11,
              cours: [
                "Projet", "Anglais 1", "Anglais 2", "Communication et outils de communication",
                "Atelier développement durable",
              ],
            },
          ],
        },
        {
          titre: "Semestres 3 et 4 · MT2",
          lignes: [
            { nom: "Sciences de l'ingénieur 3", ects: 7, cours: ["Mathématiques 3", "Physique 3"] },
            { nom: "Sciences de l'ingénieur 4", ects: 5, cours: ["Mathématiques 4", "Physique 4"] },
            {
              nom: "Systèmes électroniques 1",
              ects: 11,
              cours: [
                "Électronique 3", "Moteurs et actuateurs",
                "Architecture et programmation des microcontrôleurs 1", "Signaux et systèmes continus",
              ],
            },
            {
              nom: "Systèmes électroniques 2",
              ects: 7,
              cours: ["Électronique 4", "Systèmes asservis 1", "Traitement du signal"],
            },
            {
              nom: "Systèmes microtechniques 1",
              ects: 11,
              cours: [
                "Conception microtechnique 1", "Matériaux 3", "Chimie 1",
                "Conception assistée par ordinateur 2", "Éléments de construction",
              ],
            },
            {
              nom: "Systèmes microtechniques 2",
              ects: 7,
              cours: ["Conception microtechnique 2", "Matériaux 4", "Chimie 2"],
            },
            {
              nom: "Projet et logiciels métiers",
              ects: 6,
              cours: ["Projet thématique", "Modélisation et simulation", "Instrumentation 1"],
            },
            {
              nom: "Option bio-ingénierie",
              ects: 6,
              cours: [
                "Applications mobiles avec capteurs", "Optoélectronique",
                "Radioprotection opérationnelle", "Bio-ingénierie 1",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    school: "CPNV — Yverdon",
    degree: "Année préparatoire ingénieur, passerelle mécanique / microtechnique",
    period: "2023 – 2024",
    note: "Projet avec budget de 10 000 CHF",
    logo: "/logos/cpnv.png",
    initiales: "CP",
  },
  {
    school: "Université de Liège",
    degree: "Bachelor en biologie — Biodiversité, Génétique et Moléculaire",
    period: "2018 – 2022",
    note: "Études interrompues",
    logo: "/logos/uliege.png",
    initiales: "UL",
    credits: {
      total: 180,
      groupes: [
        { titre: "2018 – 2019", lignes: [{ nom: "Anglais : introduction", ects: 2 }] },
        {
          titre: "2019 – 2020",
          lignes: [
            { nom: "Biologie", ects: 8 },
            { nom: "Biologie animale", ects: 9 },
            { nom: "Biologie végétale", ects: 7 },
            { nom: "Mathématique", ects: 8 },
            { nom: "Physique", ects: 8 },
            { nom: "Chimie organique", ects: 9 },
          ],
        },
        {
          titre: "2020 – 2021",
          lignes: [
            { nom: "Introduction à l'embryologie animale", ects: 3 },
            { nom: "Géologie et paléontologie", ects: 5 },
            { nom: "Anglais 1", ects: 3 },
            { nom: "Introduction à la microbiologie", ects: 2 },
          ],
        },
        { titre: "2021 – 2022", lignes: [{ nom: "Biodiversité et écologie", ects: 10 }] },
      ],
    },
  },
  {
    school: "La Source — Lausanne",
    degree: "Année préparatoire infirmier, passerelle ostéopathie",
    period: "2017 – 2018",
    note: "",
    logo: "/logos/lasource.png",
    initiales: "LS",
  },
];

/** Somme des crédits d'un groupe */
export const ectsGroupe = (g: CreditGroupe) => g.lignes.reduce((n, l) => n + l.ects, 0);
/** Somme des crédits validés d'une formation */
export const ectsValides = (e: Education) =>
  (e.credits?.groupes ?? []).reduce((n, g) => n + ectsGroupe(g), 0);

export const site = {
  name: "Mattéo Pozzo di Borgo",
  headline: "Ingénierie microtechnique — Entre électronique, systèmes embarqués et fabrication.",
  location: "Lausanne, Suisse",

  email: "matteopozzodiborgo@gmail.com",

  links: {
    github: "https://github.com/P0770",
    linkedin: "https://www.linkedin.com/in/matt%C3%A9o-pozzo-di-borgo-869396271",
  },

  seo: {
    url: "https://P0770.github.io",
    description:
      "Portfolio de Mattéo Pozzo di Borgo — étudiant en 3 ème année d'ingénierie microtechnique (spécialisation biomédicale) à HEPIA. Électronique embarquée, impression 3D, systèmes embarqués, CAO.",
  },

  about: {
    intro:
      "Étudiant en 3e année de Bachelor en ingénierie microtechnique à HEPIA (HES-SO Genève), spécialisation biomédicale. Mon parcours mêle biologie, ingénierie et fabrication — du banc de labo au prototype fonctionnel.",
    bullets: [
      "Je construis autant que je code : du schéma électronique à la pièce imprimée en 3D, je préfère avoir un prototype entre les mains.",
      "Curieux de tout ce qui touche à l'embarqué, au réseau et à la conception mécanique.",
      "Je cherche des problèmes concrets pour lesquels une solution sur mesure a plus de sens qu'un produit du commerce.",
    ],
  },

  experience: [
    {
      company: "Tibits",
      location: "Lausanne, Suisse",
      role: "Collaborateur — barista, service, caisse, commis",
      period: "2024 — aujourd'hui",
      bullets: [
        "Service en salle et préparation culinaire dans un restaurant végétarien à fort volume.",
      ],
    },
    {
      company: "LGI Luxury Good Logistics",
      location: "San Antonio, Suisse",
      role: "Gestionnaire de stock",
      period: "2019",
      bullets: [
        "Suivi logistique, optimisation des stocks et contrôle qualité.",
      ],
    },
    {
      company: "Cercle étudiant — Université de Liège",
      location: "Liège, Belgique",
      role: "Responsable",
      period: "2022",
      bullets: [
        "Organisation d'événements rassemblant jusqu'à 1 800 personnes : coordination, logistique et gestion d'équipe.",
      ],
    },
    {
      company: "Emplois étudiants",
      location: "Belgique / Suisse",
      role: "Divers",
      period: "2018 – 2023",
      bullets: [
        "Employé de cuisine (La Halle, Munich), livreur sur scooter, employé de boucherie (Intermarché, Liège), commis polyvalent (Sushishop).",
      ],
    },
  ],

  education,

  skills: {
    "Mécanique & fabrication": [
      "Inventor", "Fusion 360", "Creo", "impression 3D", "découpe laser",
    ],
    "Électronique & embarqué": [
      "ESP32", "Arduino", "Raspberry Pi", "KiCad", "EasyEDA",
      "capteurs I²C / SPI", "soudure",
    ],
    "Code": ["C / C++", "Python", "Ladder (automates Siemens)"],
    "Outils": ["Git / GitHub", "Slicer 3D", "Adobe Illustrator", "Office"],
  },

  interests:
    "Impression 3D · Électronique embarquée · Escalade · Volley-ball · Mycologie · Ski de randonnée · Jeux vidéo",

  languages: [
    "Français (natif)",
    "Anglais (bilingue)",
    "Italien (très bon)",
    "Allemand (moyen)",
  ],
} as const;

export type Site = typeof site;
