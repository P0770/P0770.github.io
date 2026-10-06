export type ProjectMedia = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  tags: string[];
  role?: string;
  highlights: string[];
  links?: ProjectLink[];
  cover?: ProjectMedia;
  gallery?: ProjectMedia[];
  sections: ProjectSection[];
};

// Ordre : du plus ancien au plus récent
// La page d'accueil affiche les 2 derniers (les plus récents)
export const projects: Project[] = [
  // ─────────────────────────────────────────
  //  1. DRONE FPV
  // ─────────────────────────────────────────
  {
    slug: "drone-fpv",
    title: "Drone FPV — Pilotage, Réparation et Conception DIY",
    subtitle:
      "Du pilotage à la construction : entretien et réparation de drones FPV, et conception de châssis entièrement DIY par impression 3D pour comprendre leur fonctionnement de A à Z.",
    year: "En cours",
    tags: ["FPV", "Électronique", "Soudure", "Impression 3D", "DIY"],
    role: "Projet personnel",
    highlights: [
      "Pilotage de drones FPV — maintenance et réglages en conditions réelles",
      "Réparations électroniques : rebrasage de connecteurs, remplacement d'ESC et de moteurs",
      "Conception et impression 3D de châssis DIY pour maîtriser l'architecture d'un drone de A à Z",
    ],
    cover: { src: "/projects/drone-fpv/cover.jpg", alt: "Drone FPV" },
    gallery: [
      { src: "/projects/drone-fpv/reparation.jpg", alt: "Réparation électronique", caption: "À compléter — photo de réparation" },
      { src: "/projects/drone-fpv/chassis-3d.jpg", alt: "Châssis imprimé", caption: "À compléter — châssis DIY" },
    ],
    sections: [
      {
        heading: "Contexte",
        paragraphs: [
          "À compléter — décrire comment vous avez commencé le FPV, quel matériel vous utilisez, vos objectifs.",
        ],
      },
      {
        heading: "Réparation et configuration",
        paragraphs: [
          "Les drones FPV subissent des chocs réguliers. J'effectue moi-même les réparations électroniques : rebrasage de connecteurs, remplacement d'ESC (Electronic Speed Controller) et de moteurs, configuration du contrôleur de vol.",
          "À compléter — logiciels de configuration, types de réglages effectués.",
        ],
      },
      {
        heading: "Conception d'un drone DIY",
        paragraphs: [
          "Pour comprendre l'architecture d'un drone de A à Z, j'ai conçu et imprimé en 3D mes propres châssis. Ce projet réunit CAO, électronique et code.",
          "À compléter — outils CAO utilisés, matériaux d'impression, composants électroniques choisis.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  2. IMPRESSION 3D
  // ─────────────────────────────────────────
  {
    slug: "impression-3d",
    title: "Impression 3D — Réparer et Remplacer",
    subtitle:
      "Conception et impression de pièces sur mesure pour réparer ou remplacer des éléments du quotidien — du besoin à la pièce finie.",
    year: "En cours",
    tags: ["Impression 3D", "CAO", "Inventor", "Fusion 360", "Prototypage"],
    role: "Projet personnel",
    highlights: [
      "De nombreuses pièces conçues sur mesure pour réparer ou remplacer des objets du quotidien",
      "Maîtrise complète du flux : besoin → modélisation CAO → impression → test",
      "Utilisation de PLA, PETG et autres matériaux selon les contraintes mécaniques",
    ],
    cover: { src: "/projects/impression-3d/cover.jpg", alt: "Pièces imprimées en 3D" },
    gallery: [
      { src: "/projects/impression-3d/piece1.jpg", alt: "Pièce 1", caption: "À compléter — ajouter vos pièces avec une courte légende" },
      { src: "/projects/impression-3d/piece2.jpg", alt: "Pièce 2", caption: "À compléter" },
    ],
    sections: [
      {
        heading: "Démarche",
        paragraphs: [
          "Plutôt que de racheter un objet cassé ou de chercher une pièce introuvable, j'ai pris l'habitude de la concevoir et de l'imprimer moi-même. Ce réflexe m'a permis de développer une vraie maîtrise de la CAO et des paramètres d'impression.",
        ],
      },
      {
        heading: "Quelques réalisations",
        paragraphs: [
          "À compléter — décrire 3 à 5 pièces représentatives : ce qu'elles remplacent, la contrainte à résoudre, le matériau choisi.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  3. SERVEUR RASPBERRY PI
  // ─────────────────────────────────────────
  {
    slug: "serveur-raspberry",
    title: "Serveur Auto-hébergé et Projets Réseau",
    subtitle:
      "Serveur personnel monté sur Raspberry Pi avec plusieurs services accessibles sur mon propre nom de domaine, et projets de blocage de publicités réseau.",
    year: "En cours",
    tags: ["Raspberry Pi", "Auto-hébergement", "Réseau", "Linux", "DNS"],
    role: "Projet personnel",
    highlights: [
      "Serveur monté chez moi sur Raspberry Pi, accessible via un nom de domaine personnel",
      "Plusieurs services hébergés — À compléter (ex. Nextcloud, Gitea, Home Assistant…)",
      "Projets réseau annexes : blocage de publicités côté DNS (Pi-hole ou similaire)",
    ],
    cover: { src: "/projects/serveur-raspberry/cover.jpg", alt: "Raspberry Pi serveur" },
    gallery: [
      { src: "/projects/serveur-raspberry/config.jpg", alt: "Configuration", caption: "À compléter — screenshot ou photo du montage" },
    ],
    sections: [
      {
        heading: "Contexte",
        paragraphs: [
          "À compléter — pourquoi monter son propre serveur, quels besoins il remplit.",
        ],
      },
      {
        heading: "Services hébergés",
        paragraphs: [
          "À compléter — liste des services en production, ports exposés, certificats SSL, reverse proxy…",
        ],
      },
      {
        heading: "Blocage de publicités",
        paragraphs: [
          "À compléter — outil utilisé (Pi-hole, AdGuard Home…), résultats obtenus, statistiques.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  4. ÉTIQUETEUSE — CPNV
  // ─────────────────────────────────────────
  {
    slug: "etiqueteuse",
    title: "Étiqueteuse Automatisée — Automate Siemens",
    subtitle:
      "Machine d'étiquetage automatisée pilotée par un automate programmable Siemens, programmée en Ladder sous TIA Portal — projet de l'année préparatoire ingénieur au CPNV.",
    year: "2024",
    tags: ["Automate Siemens", "Ladder", "TIA Portal", "Automatisme", "Mécanique"],
    role: "À compléter — préciser si projet individuel ou en équipe",
    highlights: [
      "Machine d'étiquetage automatisée, pilotée par automate Siemens",
      "Programmation en Ladder sous TIA Portal",
      "À compléter — ajouter 1 à 2 points clés spécifiques à votre réalisation",
    ],
    cover: { src: "/projects/etiqueteuse/cover.jpg", alt: "Machine étiqueteuse" },
    gallery: [
      { src: "/projects/etiqueteuse/machine.jpg", alt: "Machine en fonctionnement", caption: "À compléter" },
      { src: "/projects/etiqueteuse/programme.jpg", alt: "Programme Ladder", caption: "À compléter — screenshot TIA Portal" },
    ],
    sections: [
      {
        heading: "Contexte",
        paragraphs: [
          "Dans le cadre de l'année préparatoire ingénieur au CPNV, un projet de machine automatisée a été réalisé. L'objectif était de concevoir et programmer une étiqueteuse capable d'apposer automatiquement des étiquettes sur des produits.",
          "À compléter — décrire ce que la machine étiquète, les contraintes du projet, la taille de l'équipe.",
        ],
      },
      {
        heading: "Fonctionnement de la machine",
        paragraphs: [
          "À compléter — décrire le cycle de la machine, les capteurs et actionneurs utilisés (convoyeurs, vérins, capteurs de position…).",
        ],
      },
      {
        heading: "Programmation de l'automate",
        paragraphs: [
          "L'automate Siemens a été programmé en langage Ladder (LD) sous TIA Portal. À compléter — décrire la logique de séquencement, les blocs fonctionnels, la gestion des défauts.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  5. SCANNER I2C — CPNV
  // ─────────────────────────────────────────
  {
    slug: "scanner-i2c",
    title: "Scanner et Analyseur de Bus I²C",
    subtitle:
      "Programme de détection et d'analyse des appareils connectés sur un bus I²C — projet de l'année préparatoire ingénieur au CPNV.",
    year: "2024",
    tags: ["I²C", "Embarqué", "C++", "Arduino", "Analyse de bus"],
    role: "À compléter — projet individuel ou en équipe",
    highlights: [
      "Scan du bus I²C pour détecter automatiquement les adresses présentes",
      "Analyse et identification des appareils connectés",
      "À compléter — préciser la carte utilisée et les fonctionnalités supplémentaires",
    ],
    cover: { src: "/projects/scanner-i2c/cover.jpg", alt: "Montage scanner I2C" },
    gallery: [
      { src: "/projects/scanner-i2c/montage.jpg", alt: "Montage électronique", caption: "À compléter" },
      { src: "/projects/scanner-i2c/code.jpg", alt: "Code ou résultat", caption: "À compléter — capture du terminal ou du moniteur série" },
    ],
    sections: [
      {
        heading: "Principe du bus I²C",
        paragraphs: [
          "Le bus I²C (Inter-Integrated Circuit) permet de connecter plusieurs composants électroniques (capteurs, écrans, mémoires…) sur seulement deux fils (SDA et SCL). Chaque composant a une adresse unique sur 7 bits.",
        ],
      },
      {
        heading: "Implémentation",
        paragraphs: [
          "À compléter — décrire la carte utilisée (Arduino, ESP32…), le langage, comment le scan est effectué, les résultats affichés.",
        ],
      },
      {
        heading: "Analyse des appareils",
        paragraphs: [
          "À compléter — décrire quelles informations sont extraites des appareils détectés, comment ils sont identifiés.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  6. CONCOURS ROBOTS — 1re HEPIA
  // ─────────────────────────────────────────
  {
    slug: "concours-robots",
    title: "Concours de Robots — Navigation et Bluetooth",
    subtitle:
      "Deux robots indépendants coordonnés par communication Bluetooth pour accomplir une mission de navigation sur parcours imposé — 1re année à HEPIA, responsable de la partie code.",
    year: "2025",
    tags: ["Robotique", "Bluetooth", "C++", "Systèmes embarqués", "Concours"],
    role: "Responsable code (partie logicielle)",
    highlights: [
      "Mission : traverser une planche au-dessus d'un précipice, puis retraverser pour vider un bac d'eau préalablement rempli",
      "Deux robots indépendants se coordonnant via Bluetooth pour accomplir la mission",
      "Responsable de l'ensemble de la partie code — de la communication à la gestion de trajectoire",
    ],
    cover: { src: "/projects/concours-robots/cover.jpg", alt: "Robots du concours" },
    gallery: [
      { src: "/projects/concours-robots/robot1.jpg", alt: "Robot 1", caption: "À compléter — photo du premier robot" },
      { src: "/projects/concours-robots/robot2.jpg", alt: "Robot 2", caption: "À compléter — photo du second robot" },
      { src: "/projects/concours-robots/parcours.jpg", alt: "Parcours", caption: "À compléter — photo du parcours en conditions de concours" },
    ],
    sections: [
      {
        heading: "Contexte et règles",
        paragraphs: [
          "Lors du concours de robots de 1re année à HEPIA, chaque équipe devait concevoir un système capable d'accomplir une mission précise sur un parcours imposé : traverser une planche au-dessus d'un précipice, remplir un bac d'eau, puis retraverser et le vider.",
          "À compléter — taille de l'équipe, contraintes imposées (dimensions, autonomie, capteurs autorisés).",
        ],
      },
      {
        heading: "Architecture à deux robots",
        paragraphs: [
          "Pour accomplir la mission, j'ai choisi une architecture à deux robots indépendants : chacun a une responsabilité distincte dans la mission et ils se coordonnent via une liaison Bluetooth.",
          "À compléter — décrire le rôle de chaque robot et les messages échangés via Bluetooth.",
        ],
      },
      {
        heading: "Programmation",
        paragraphs: [
          "À compléter — langage utilisé, carte de contrôle (Arduino, ESP32…), bibliothèques Bluetooth, capteurs et actionneurs de chaque robot, algorithme de navigation.",
        ],
      },
      {
        heading: "Résultat",
        paragraphs: [
          "À compléter — résultat au concours, difficultés rencontrées, ce que vous referez différemment.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  7. JEU AMC — 2e HEPIA
  // ─────────────────────────────────────────
  {
    slug: "jeu-amc",
    title: "« C de Soirée » — Jeu en Réseau Local",
    subtitle:
      "Jeu de soirée multijoueur développé en Python/Kivy pour le cours AMC — communication TCP en réseau local, saisie via accéléromètre, réalisé en binôme.",
    year: "2026",
    tags: ["Python", "Kivy", "TCP", "Réseau", "Accéléromètre", "Git"],
    role: "Co-développeur (avec Mathis Bento)",
    links: [
      {
        label: "Dépôt Git HEPIA",
        href: "https://gitedu.hesge.ch/amc/amc26/amc26_jeu_bento_pozzo",
      },
    ],
    highlights: [
      "Jeu de soirée multijoueur en réseau local : chaque joueur se connecte depuis son appareil",
      "Communication client/serveur en TCP (sockets Python) sur le réseau local",
      "Saisie des réponses par mouvements détectés via l'accéléromètre du téléphone",
      "Interface graphique développée avec le framework Kivy",
    ],
    cover: { src: "/projects/jeu-amc/cover.jpg", alt: "Interface du jeu C de Soirée" },
    gallery: [
      { src: "/projects/jeu-amc/ecran-serveur.jpg", alt: "Écran serveur", caption: "À compléter — capture de l'interface serveur" },
      { src: "/projects/jeu-amc/ecran-client.jpg", alt: "Écran client", caption: "À compléter — capture de l'interface client" },
    ],
    sections: [
      {
        heading: "Contexte",
        paragraphs: [
          "Ce projet a été réalisé dans le cadre du cours AMC (Architecture de Machines et Codes) en 2e année à HEPIA, avec Mathis Bento. La contrainte principale était de développer une application réseau fonctionnelle avec une interface graphique.",
        ],
      },
      {
        heading: "Architecture réseau",
        paragraphs: [
          "Le jeu fonctionne en architecture client/serveur sur réseau local. Un nœud fait tourner le serveur (gestion de l'état du jeu, synchronisation) et les autres joueurs s'y connectent en tant que clients via TCP.",
          "À compléter — protocole de messages défini, gestion des déconnexions, nombre de joueurs supportés.",
        ],
      },
      {
        heading: "Interface et accéléromètre",
        paragraphs: [
          "L'interface a été développée avec Kivy, framework Python pour les interfaces tactiles. À compléter — décrire comment l'accéléromètre est utilisé pour valider les réponses.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  8. INCUBATEUR — 2e HEPIA (projet le plus récent)
  // ─────────────────────────────────────────
  {
    slug: "incubateur-cellules",
    title: "Incubateur Transportable Cellules",
    subtitle:
      "Dispositif d'incubation portable pour transporter des cellules vivantes entre Lausanne et Genève en 1 h de train, en maintenant température, humidité et pH dans les limites biologiques — Projet Thématique HEPIA 2026.",
    year: "2026",
    tags: ["ESP32", "C++", "I²C", "EasyEDA", "Creo", "Impression 3D", "Biomédicale"],
    role: "Conception électronique, firmware ESP32, CAO mécanique (avec Lyla Founas)",
    highlights: [
      "Milieu biologique maintenu : 37 °C ±0,5 °C, HR ≈ 100 %, pH 7,2–7,4 pendant 1 h de transport",
      "Architecture ESP32 + SHT35 (T/HR) + SCD40/Nafion (CO₂) + résistance chauffante + électrovanne CO₂",
      "Firmware en C++ structuré autour d'une machine à états finis à 6 phases (INIT → CHECK → BUFFER → MARCHE → PAUSE → ERREUR)",
      "Toutes les pièces mécaniques conçues sous Creo et fabriquées par impression 3D",
      "Prototype fonctionnel validé — budget 232 CHF — cahier des charges respecté",
    ],
    cover: {
      src: "/projects/incubateur-cellules/assemblage.jpg",
      alt: "Incubateur cellules — assemblage des pièces dans la valise",
      caption: "Assemblage des pièces dans la valise — modèle Creo",
    },
    gallery: [
      {
        src: "/projects/incubateur-cellules/architecture.jpg",
        alt: "Architecture électronique",
        caption: "Architecture globale : LiPo 3S / BMS / ESP32 / capteurs / actionneurs",
      },
      {
        src: "/projects/incubateur-cellules/support-3d.jpg",
        alt: "Support boîte de culture (Creo)",
        caption: "Support assemblé — parties inférieure et supérieure clipsées, boîte de culture posée",
      },
      {
        src: "/projects/incubateur-cellules/machine-etats.jpg",
        alt: "Diagramme machine à états",
        caption: "Machine à états finis 6 phases — firmware ESP32 v4.0",
      },
      {
        src: "/projects/incubateur-cellules/ecran-marche.jpg",
        alt: "Écran EN MARCHE",
        caption: "Interface ST7789 — état MARCHE avec barres de progression T, HR, CO₂",
      },
      {
        src: "/projects/incubateur-cellules/schema-elec.jpg",
        alt: "Schéma électronique ESP32",
        caption: "Schéma ESP32 (EasyEDA) — GPIO, capteurs I²C, actionneurs via MOSFET",
      },
      {
        src: "/projects/incubateur-cellules/pieces-mecaniques.jpg",
        alt: "Pièces mécaniques imprimées",
        caption: "Pièces conçues : grille de fond, support culture, cales, plaque CO₂, porte-connecteur",
      },
    ],
    sections: [
      {
        heading: "Problématique",
        paragraphs: [
          "Comment transporter des cellules vivantes pendant une heure de train entre Lausanne et Genève, sans qu'elles ne meurent en chemin ? Les cellules mammifères exigent 37 °C (les enzymes se dégradent au moindre écart), une humidité proche de la saturation (≈ 100 % HR, sinon le milieu s'évapore et devient cytotoxique) et un pH entre 7,2 et 7,4, régulé par injection de CO₂.",
          "Les solutions commerciales (Cellbox Go, Phoenix…) sont conçues pour des trajets de 12 à 72 h. Elles sont surdimensionnées et inaccessibles financièrement pour un trajet d'une heure. D'où le développement d'un prototype sur mesure.",
        ],
      },
      {
        heading: "Cahier des charges",
        bullets: [
          "Autonomie ≥ 1 h sans prise secteur",
          "Poids < 10 kg, format valise cabine (45 × 36 × 20 cm)",
          "Température zone biologique : 37,0 °C ± 0,5 °C",
          "Humidité relative : ≈ 100 %",
          "pH milieu (via CO₂) : 7,2 – 7,4",
          "Préparation sans formation technique : < 5 min",
        ],
      },
      {
        heading: "Architecture retenue",
        paragraphs: [
          "L'ensemble s'organise autour d'un boîtier biologique amovible intégré dans la valise. Chaque sous-système a été choisi par matrice de décision pondérée :",
        ],
        bullets: [
          "Chauffage — résistance bobinée RS PRO 50 W/8,2 Ω, pilotée par MOSFET IRLZ44N",
          "Humidification — éponge cellulose passive (ratio eau disponible / eau nécessaire ≈ 2 500)",
          "pH / CO₂ — injection par électrovanne SMC V114 (NC), détendeur vélo, réservoir CO₂ ≈ 100 g",
          "Mesures — SHT35 (T+HR, ±0,1 °C) dans zone biologique ; SCD40 + membrane Nafion (CO₂, ±50 ppm) hors zone humide",
          "Interface — écran ST7789 EYESPI 2,0\" avec barres de progression, LEDs RGB d'alerte, buzzer",
          "Alimentation — 2 × LiPo 3S 5000 mAh + BMS, DC-DC 12 V (résistance + EV) et régulateur 5 V (ESP32 + capteurs). Autonomie estimée ≥ 2 h.",
        ],
      },
      {
        heading: "Conception mécanique",
        paragraphs: [
          "Toutes les pièces ont été modélisées sous Creo et fabriquées par impression 3D. La grille de fond perforée permet un ancrage modulable de tous les supports. Le support de boîte de culture se compose de deux parties clipsables : la partie inférieure loge les éponges et le capteur SHT35 ; la partie supérieure intègre le ventilateur et le logement CO₂ avec membrane Nafion. Des cales inclinées et des plaques latérales immobilisent le tupperware contre les vibrations du train.",
        ],
      },
      {
        heading: "Firmware — Machine à états finis",
        paragraphs: [
          "Le firmware v4.0 (C++, ESP32-DevKitC) structure le comportement autour d'une machine à états finis à 6 phases :",
        ],
        bullets: [
          "INIT — initialisation des variables, splash écran 3 s",
          "CHECK — scan I²C toutes les 2 s, vérification SHT35 et SCD40",
          "BUFFER — affichage live T/HR/CO₂, attente fermeture de l'enceinte et appui GO",
          "MARCHE — régulation active : résistance chauffante, injection CO₂ toutes les 5 s, chronomètre",
          "PAUSE — résistance coupée, ventilateur maintenu, retour MARCHE ou BUFFER",
          "ERREUR — tous actionneurs coupés, LED rouge + buzzer clignotants, message à l'écran",
        ],
      },
      {
        heading: "Résultats et validation",
        paragraphs: [
          "Le prototype a été testé avec la boîte de culture vide. Température, humidité et CO₂ se maintiennent dans les seuils visés lors de la mise en marche. La gestion des erreurs fonctionne correctement : les actionneurs se coupent et l'alerte s'active dès qu'un seuil critique est franchi.",
          "Budget total (hors options) : 232,15 CHF. Prototype fonctionnel, cahier des charges respecté.",
        ],
      },
      {
        heading: "Perspectives",
        bullets: [
          "Suivi Wi-Fi à distance — T, HR, CO₂ en temps réel sur téléphone pendant le trajet (Wi-Fi natif ESP32)",
          "Régulation PID de la température pour limiter les oscillations autour de 37 °C",
          "Enregistrement des paramètres sur toute la durée du trajet pour valider la viabilité cellulaire",
          "Module Peltier pour aussi refroidir — adaptation à d'autres types de cellules",
          "Injection de vapeur pour un meilleur contrôle de l'humidité",
        ],
      },
    ],
  },
];
