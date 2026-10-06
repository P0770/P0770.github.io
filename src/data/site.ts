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

  education: [
    {
      school: "HEPIA — HES-SO Genève",
      degree: "Bachelor en ingénierie microtechnique, spécialisation biomédicale",
      period: "2024 – aujourd'hui",
      note: "",
    },
    {
      school: "CPNV — Yverdon",
      degree: "Année préparatoire ingénieur, passerelle mécanique / microtechnique",
      period: "2023 – 2024",
      note: "Projet avec budget de 10 000 CHF",
    },
    {
      school: "Université de Liège",
      degree: "Bachelor en biologie — Biodiversité, Génétique et Moléculaire",
      period: "2018 – 2022",
      note: "Études interrompues",
    },
    {
      school: "La Source — Lausanne",
      degree: "Année préparatoire infirmier, passerelle ostéopathie",
      period: "2017 – 2018",
      note: "",
    },
  ],

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
