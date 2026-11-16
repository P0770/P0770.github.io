export type ProjectMedia = {
  src: string;
  alt: string;
  caption?: string;
  /** "video" pour un fichier .mp4/.webm ; image par défaut */
  type?: "image" | "video";
  /** Vidéo verticale (téléphone, drone) : affichée dans son vrai format au lieu du 16:9 */
  portrait?: boolean;
  /** Format largeur/hauteur d'une vidéo verticale, ex. "9/16" (iPhone) ou "3/4" — "9/16" par défaut */
  ratio?: string;
  /** Image affichée en entier dans la galerie, sans recadrage (rendus CAO, photos verticales, captures) */
  entier?: boolean;
};

/** Figure insérée dans le texte d'une section (graphique, schéma, diagramme) */
export type ProjectFigure = {
  src: string;
  alt: string;
  caption?: string;
};

/** Tableau simple inséré dans une section */
export type ProjectTable = {
  entetes: string[];
  lignes: string[][];
  /** Note sous le tableau */
  note?: string;
};

export type ProjectSection = {
  heading: string;
  paragraphs?: string[];
  /** Figure affichée après les paragraphes, avant la liste */
  figure?: ProjectFigure;
  /** true = figure placée tout à la fin de la section (après la liste et les paragraphes « apres ») */
  figureEnFin?: boolean;
  bullets?: string[];
  /** Tableau affiché à la fin de la section */
  tableau?: ProjectTable;
  /** Paragraphes affichés après la figure, la liste et le tableau */
  apres?: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Accroche courte : affichée sur la carte et sous le titre de la page */
  subtitle: string;

  // ── Chronologie ──
  /** Début au format "AAAA-MM" (sert au tri et au placement dans la chronologie) */
  debut: string;
  /** Fin au format "AAAA-MM" (laisser vide si le projet est en cours) */
  fin?: string;
  /** Projet toujours en cours : badge + trait pointillé jusqu'à « Aujourd'hui » */
  enCours?: boolean;
  /** Projet mis en avant sur la page d'accueil (idéalement 2 ou 3 projets au total) */
  vedette?: boolean;
  /** Texte affiché pour la période, ex. "Mars – juin 2024" */
  periode: string;

  // ── En-tête de la page détail ──
  cadre: string;
  equipe?: string;
  role?: string;
  budget?: string;
  statut: string;

  tags: string[];
  highlights?: string[];
  links?: ProjectLink[];
  /** Slugs d'autres projets à afficher en « Projets liés » */
  related?: string[];
  cover?: ProjectMedia;
  gallery?: ProjectMedia[];
  sections: ProjectSection[];
};

// L'ordre dans ce tableau n'a pas d'importance :
// la chronologie trie automatiquement par date de début (champ `debut`).
export const projects: Project[] = [
  // ─────────────────────────────────────────
  //  BUS I²C — CPNV (déc. 2023)
  // ─────────────────────────────────────────
  {
    slug: "scanner-i2c",
    title: "Exploration du bus I²C",
    subtitle:
      "Banc de test puis PCB sous KiCad pour comprendre le bus I²C et les périphériques qu'on peut y raccorder.",
    debut: "2023-12",
    fin: "2023-12",
    periode: "Déc. 2023",
    cadre: "Année préparatoire ingénieur · CPNV — projet de synthèse du cours de programmation",
    equipe: "Binôme",
    statut: "Terminé",
    tags: ["I²C", "Arduino", "C++", "KiCad", "Oscilloscope"],
    highlights: [
      "Étude du signal I²C à l'oscilloscope : lignes SDA / SCL, trames et adresses",
      "Tests de plusieurs périphériques : écran, capteur de température, mémoire EEPROM, circuits d'extension de sorties",
      "Passage du prototype sur plaque d'essai à une PCB conçue sous KiCad",
    ],
    cover: {
      src: "/projects/scanner-i2c/produit-fini.jpg",
      alt: "Dispositif I²C final sur PCB",
      caption: "Le produit fini sur PCB",
    },
    gallery: [
      {
        src: "/projects/scanner-i2c/plaque-essai.jpg",
        alt: "Dispositif I²C sur plaque d'essai",
        caption: "Le dispositif sur plaque d'essai (banc de test)",
      },
    ],
    sections: [
      {
        heading: "Contexte et objectif",
        paragraphs: [
          "Chaque binôme recevait un thème pour conclure le cours de programmation ; le nôtre était le bus I²C. L'objectif : comprendre en profondeur son fonctionnement — le protocole, l'adressage et les composants qu'on peut y raccorder.",
        ],
      },
      {
        heading: "Ce que j'ai fait",
        bullets: [
          "Étude du signal I²C à l'oscilloscope : lignes SDA et SCL, trames, adresses",
          "Mise au point du dispositif sur plaque d'essai (banc de test)",
          "Tests de plusieurs périphériques I²C : un écran, un capteur de température, une mémoire EEPROM et des circuits d'extension pour piloter des sorties",
          "Conception et production de la PCB sous KiCad, avec l'apprentissage de toute la chaîne de fabrication",
        ],
      },
      {
        heading: "Technique",
        paragraphs: [
          "Arduino · C++ · KiCad · oscilloscope · écran, capteur de température, EEPROM, extensions d'E/S",
        ],
      },
      {
        heading: "Résultat",
        paragraphs: [
          "Un dispositif fini sur PCB, avec affichage, sur lequel on peut brancher d'autres éléments sur la chaîne I²C.",
        ],
      },
      {
        heading: "Ce que j'en retiens",
        paragraphs: [
          "Passer du code au signal réel observé à l'oscilloscope, puis d'un prototype sur plaque d'essai à une PCB produite. Ça m'a donné une vision complète d'un système électronique, de la conception à la fabrication.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  PARCOURS DE BILLE — CPNV (janv. – mars 2024)
  // ─────────────────────────────────────────
  {
    slug: "parcours-bille",
    title: "Parcours de bille automatisé",
    subtitle:
      "Module automatisé sous automate Siemens, intégré à un grand circuit de bille commun à toute la classe.",
    debut: "2024-01",
    fin: "2024-03",
    periode: "Janv. – mars 2024",
    cadre: "Année préparatoire ingénieur · CPNV — projet court d'introduction à l'automatisation",
    equipe: "Binôme",
    statut: "Terminé",
    tags: ["Automate Siemens", "Ladder", "TIA Portal", "Impression 3D"],
    highlights: [
      "Déplacement latéral et montée de la bille imposés, en 20 à 25 secondes",
      "Mécanisme de transfert à deux pinces décrivant une trajectoire en forme de 8",
      "Module intégré au circuit commun de toute la classe",
    ],
    cover: {
      src: "/projects/parcours-bille/module.jpg",
      alt: "Module du parcours de bille automatisé",
      caption: "Le module du parcours de bille",
    },
    gallery: [
      {
        type: "video",
        src: "/projects/parcours-bille/demo.mp4",
        alt: "Vidéo du parcours de bille en fonctionnement",
        caption: "Le module en fonctionnement",
      },
      {
        src: "/projects/parcours-bille/ma-partie.jpg",
        alt: "Ma partie du parcours de bille : deux bras à pignons qui font monter la bille",
        caption: "Ma partie du parcours",
      },
    ],
    sections: [
      {
        heading: "Contexte et objectif",
        paragraphs: [
          "Chaque binôme devait construire un cadre dans lequel une bille se déplace de façon entièrement automatique. Le cahier des charges imposait un déplacement latéral et une montée en hauteur, le tout en 20 à 25 secondes.",
          "À la fin, les modules de toute la classe étaient empilés et reliés pour former un seul circuit continu : la bille traverse les dispositifs de chacun.",
        ],
      },
      {
        heading: "Ce que j'ai fait",
        bullets: [
          "Conception et réalisation du mécanisme de transfert latéral, à deux roues entraînées par un même moteur. Sur chaque roue, le bas de la tige de la pince est fixé à la roue, et le milieu de la tige coulisse dans un guide placé au-dessus du centre de la roue. Quand la roue tourne, l'extrémité de la pince décrit une trajectoire en forme de 8 : elle saisit la bille, la soulève, la dépose dans la pince voisine et revient à sa position initiale. La seconde pince fait le même mouvement en sens inverse et dépose la bille à la sortie du module.",
          "Conception des pièces en CAO et impression 3D",
          "Participation à l'intégration : actionneurs, capteurs et programmation de l'automate",
        ],
      },
      {
        heading: "Technique",
        paragraphs: [
          "Automate Siemens S7-1200 · TIA Portal · Ladder · moteur · capteurs · CAO · impression 3D",
        ],
      },
      {
        heading: "Résultat",
        paragraphs: [
          "Un module fonctionnel qui respecte le temps de cycle imposé, intégré avec succès au circuit commun de la classe.",
        ],
      },
      {
        heading: "Ce que j'en retiens",
        paragraphs: [
          "Ma première approche de l'automatisation industrielle : programmer en Ladder, synchroniser les capteurs et les actionneurs, et concevoir un module qui doit s'interfacer avec ceux des autres.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  IMPRESSION 3D — perso (depuis mars 2024)
  // ─────────────────────────────────────────
  {
    slug: "impression-3d",
    title: "Impression 3D",
    subtitle:
      "De la CAO à la pièce finie : prototypage, pièces de mes projets et réparations du quotidien.",
    debut: "2024-03",
    enCours: true,
    periode: "Depuis mars 2024",
    cadre: "Projet personnel",
    statut: "En cours",
    tags: ["Bambu Lab P1S", "Inventor", "Prototypage", "Réparation"],
    related: ["etiqueteuse", "concours-robots", "lampe-braun", "drone-fpv", "incubateur-cellules"],
    cover: {
      src: "/projects/impression-3d/support.jpg",
      alt: "Pièce blanche imprimée en 3D tenue en main",
      caption: "Une pièce sur mesure, modélisée puis imprimée",
    },
    gallery: [
      { src: "/projects/impression-3d/boitier.jpg", alt: "Boîtier imprimé en 3D avec sa carte électronique", caption: "Un boîtier imprimé pour accueillir une carte électronique" },
      { src: "/projects/impression-3d/pieces-plateau.jpg", alt: "Pièces imprimées en 3D sur le plateau", caption: "Une série de pièces tout juste sorties du plateau" },
      { src: "/projects/impression-3d/pieces-reparation.jpg", alt: "Trois pièces imprimées en 3D", caption: "Plusieurs essais d'une même pièce" },
    ],
    sections: [
      {
        heading: "Le projet",
        paragraphs: [
          "J'ai acquis une Bambu Lab P1S dès sa sortie ; elle est vite devenue l'outil central de presque tous mes projets. Elle me sert à trois choses : prototyper mes idées, fabriquer les pièces de mes autres projets (étiqueteuse, robot du concours, lampe, drones, incubateur — voir les projets liés ci-dessous), et réparer le quotidien en remodélisant des pièces cassées, comme des branches de lunettes ou des pièces de table.",
          "J'y ai appris le procédé en profondeur : réglages d'impression et choix des matériaux selon l'usage (PLA, PETG, TPU). Modélisation sous Inventor, tranchage avec Bambu Studio et OrcaSlicer.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  ÉTIQUETEUSE — CPNV (mars – juin 2024)
  // ─────────────────────────────────────────
  {
    slug: "etiqueteuse",
    title: "Étiqueteuse automatique de pots de miel",
    subtitle:
      "Machine d'étiquetage de pots de miel normés, pilotée par automate Siemens, avec hauteur d'étiquetage auto-adaptée.",
    debut: "2024-03",
    fin: "2024-06",
    periode: "Mars – juin 2024",
    cadre: "Année préparatoire ingénieur · CPNV — projet final de l'année",
    equipe: "Binôme",
    role: "Programmation et électronique (la CAO et la mécanique étaient assurées par mon binôme)",
    budget: "Environ 10 000 CHF",
    statut: "Terminé",
    tags: ["Automate Siemens", "Ladder", "TIA Portal", "Pneumatique", "Câblage"],
    highlights: [
      "Machine complète : détection du pot, convoyage, réglage de hauteur, étiquetage, évacuation",
      "Programmation intégrale en Ladder sous TIA Portal",
      "Électronique et câblage de l'armoire : capteurs, moteurs, électrovannes des vérins pneumatiques",
      "Projet au budget d'environ 10 000 CHF",
    ],
    cover: {
      src: "/projects/etiqueteuse/machine.jpg",
      alt: "Étiqueteuse automatique de pots de miel",
      caption: "La machine terminée",
    },
    gallery: [
      {
        type: "video",
        src: "/projects/etiqueteuse/presentation.mp4",
        alt: "Vidéo de présentation de l'étiqueteuse",
        caption: "Vidéo de présentation du projet",
        portrait: true,
        ratio: "9/16",
      },
      {
        src: "/projects/etiqueteuse/cablage.jpg",
        alt: "Câblage à l'arrière de la machine",
        caption: "Le câblage à l'arrière de la machine",
      },
    ],
    sections: [
      {
        heading: "Contexte et objectif",
        paragraphs: [
          "C'était le grand projet de fin d'année préparatoire. Il fallait concevoir et réaliser une machine complète qui détecte des pots de miel de formats normés, les achemine et leur pose une étiquette à la bonne hauteur.",
        ],
      },
      {
        heading: "Fonctionnement de la machine",
        paragraphs: ["La machine est organisée en deux sous-systèmes :"],
        bullets: [
          "Le convoyage — déplacement des pots sur des courroies motorisées",
          "L'étiquetage — une tête d'étiquetage montée sur un système d'élévation, qui ajuste sa hauteur selon le pot détecté",
        ],
      },
      {
        heading: "Ce que j'ai fait",
        bullets: [
          "Programmation complète de la machine en Ladder sous TIA Portal : détection du pot, convoyage, réglage de la hauteur de la tête d'étiquetage, étiquetage, évacuation",
          "Conception et réalisation de la partie électronique : raccordement des capteurs, des moteurs et des électrovannes des vérins pneumatiques à l'automate",
          "Câblage de l'armoire",
          "Intégration avec la partie mécanique conçue par mon binôme (courroies, système d'élévation, pièces imprimées en 3D)",
        ],
      },
      {
        heading: "Technique",
        paragraphs: [
          "Automate Siemens S7-1200 · TIA Portal · Ladder · vérins pneumatiques · capteurs · moteurs · courroies · Inventor · impression 3D",
        ],
      },
      {
        heading: "Résultat",
        paragraphs: [
          "Une machine fonctionnelle de bout en bout : elle détecte le pot, adapte la hauteur, étiquette, puis transfère le pot.",
        ],
      },
      {
        heading: "Ce que j'en retiens",
        paragraphs: [
          "Mener la partie commande d'une vraie machine automatisée, de la logique Ladder au câblage, en coordination étroite avec la mécanique, sur un projet au budget d'environ 10 000 CHF.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  DRONES FPV — perso (depuis janv. 2025)
  // ─────────────────────────────────────────
  {
    slug: "drone-fpv",
    title: "Drones FPV",
    subtitle:
      "Pilotage FPV en vidéo numérique DJI : deux drones achetés et configurés, un micro-drone assemblé moi-même.",
    debut: "2025-01",
    enCours: true,
    periode: "Depuis janv. 2025",
    cadre: "Projet personnel",
    statut: "En cours",
    tags: ["FPV", "Betaflight", "DJI O4", "ExpressLRS", "Impression 3D", "Brasure"],
    related: ["impression-3d"],
    cover: { src: "/projects/drone-fpv/cover.jpg", alt: "Le Matrix HD, micro-drone FPV assemblé moi-même", caption: "Le Matrix HD, assemblé moi-même" },
    gallery: [
      {
        type: "video",
        src: "/projects/drone-fpv/vol.mp4",
        alt: "Vidéo d'un petit vol en FPV au-dessus d'une rivière",
        caption: "Un petit vol en FPV, avec le Flywoo Firefly 18",
        portrait: true,
        ratio: "3/4",
      },
    ],
    sections: [
      {
        heading: "Le projet",
        paragraphs: [
          "Je pilote, répare et construis mes propres drones FPV, pour comprendre leur conception et réaliser des vidéos aériennes.",
          "J'ai quatre drones : deux achetés prêts à voler (un 4\" longue distance et un 2,5\" polyvalent, mon préféré), et deux montés par moi, dont un 2,5\" entièrement DIY avec châssis imprimé en 3D et électronique brasée à la main.",
          "Au fil du temps, j'ai beaucoup réparé et débogué sous Betaflight, remplacé cartes et caméras, et imprimé des pièces d'optimisation. Je vole en immersion avec un casque DJI, pour du contenu promotionnel et des vidéos cinématiques.",
        ],
      },
      {
        heading: "Mon équipement",
        tableau: {
          entetes: ["Drone", "Origine", "Contrôleur de vol", "Vidéo", "Particularités"],
          lignes: [
            ["Flywoo Explorer LR4", "Acheté, configuré par moi", "Flywoo F722 Pro V2 (STM32F722, double gyroscope)", "DJI O4 Pro", "Longue distance, moins de 250 g, GPS"],
            ["Flywoo Firefly 18", "Acheté", "—", "Numérique DJI", "Celui de la vidéo ci-dessus"],
            ["Matrix HD", "Assemblé moi-même", "BETAFPV G473 (STM32G473, base Meteor75 Pro)", "DJI O4 Lite", "Micro-drone, pièces imprimées en 3D"],
          ],
        },
        apres: [
          "Au sol : casque DJI Goggles 3, radio en ExpressLRS, et des batteries LiPo 1S, 3S et 4S selon le drone.",
        ],
      },
      {
        heading: "Configuration Betaflight",
        paragraphs: [
          "Les deux drones dont j'ai la configuration tournent sous Betaflight 4.5.1. Les points principaux :",
        ],
        bullets: [
          "Moteurs en DShot300 bidirectionnel : le contrôleur de vol connaît la vitesse réelle de chaque moteur, ce qui active le filtre RPM (3 harmoniques) pour retirer précisément le bruit des moteurs du gyroscope",
          "Radio ExpressLRS (protocole CRSF) sur un port série dédié",
          "Informations de vol (tension, temps, qualité de liaison, GPS) affichées en HD dans le casque DJI via MSP DisplayPort",
          "Réglage des PID avec les curseurs simplifiés de Betaflight, plus nerveux sur le LR4 qui est plus lourd",
          "Vitesses de rotation adaptées à l'usage : douces avec expo sur le Matrix HD pour filmer, linéaires sur le LR4",
          "Interrupteurs : armement, modes de vol (Angle, Horizon, Acro), retournement après un crash, buzzer de recherche",
        ],
      },
      {
        heading: "Sécurité : le retour automatique du LR4",
        paragraphs: [
          "Pour le vol longue distance, le LR4 est équipé d'un GPS et configuré en GPS Rescue. Si la liaison radio est perdue, le failsafe force le canal qui déclenche ce mode : le drone monte à 50 m, revient vers son point de départ à environ 20 m/s, commence sa descente à 200 m de ce point et se pose. Un interrupteur permet aussi de couper l'alimentation 10 V de l'émetteur vidéo.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  CONCOURS ROBOTS — HEPIA MT1 (mars – juin 2025)
  // ─────────────────────────────────────────
  {
    slug: "concours-robots",
    vedette: true,
    title: "Concours de robots",
    subtitle:
      "Deux robots coopérants en Bluetooth : un porteur à pont dépliable et un explorateur, pour franchir un précipice et remplir une citerne.",
    debut: "2025-03",
    fin: "2025-06",
    periode: "Mars – juin 2025",
    cadre: "1re année HEPIA (MT1) — concours de robots",
    equipe: "Équipe de 5 (groupe RVEZ)",
    role: "Responsable électronique et code",
    statut: "Terminé — prix d'esthétisme",
    budget: "183,47 CHF sur 200 CHF autorisés",
    links: [
      { label: "Code et fichiers du projet (GitHub)", href: "https://github.com/P0770/concours-robots-hepia" },
    ],
    tags: ["Arduino", "Bluetooth", "C++", "Robotique", "PID"],
    highlights: [
      "Prix d'esthétisme remporté et épreuve réussie",
      "Deux robots indépendants en communication Bluetooth maître / esclave",
      "Pont dépliable et pompe péristaltique pour accomplir la mission",
      "Trajectoire du grand robot corrigée par PID, avec le gyroscope du petit robot transporté à son bord",
      "Mission entièrement autonome après l'appui sur START, avec arrêt d'urgence et coupure en cas de perte du Bluetooth",
    ],
    cover: {
      src: "/projects/concours-robots/robot-1.jpg",
      alt: "Les robots du concours",
      caption: "Les deux robots",
    },
    gallery: [
      {
        type: "video",
        src: "/projects/concours-robots/concours-extrait.mp4",
        alt: "Vidéo du concours : déploiement du pont et traversée du petit robot",
        caption: "Le concours : le pont se déplie et le petit robot traverse (extrait de 80 s)",
      },
      { src: "/projects/concours-robots/robot-2.jpg", alt: "Robot explorateur (camion de pompiers) et robot porteur (caserne)", caption: "Le camion explorateur à côté de la caserne, le robot porteur" },
      { src: "/projects/concours-robots/robot-3.jpg", alt: "Robot porteur en forme de caserne, porte fermée", caption: "La caserne : le robot porteur, porte fermée" },
      { src: "/projects/concours-robots/atelier.jpg", alt: "Les robots en construction à l'atelier", caption: "Les robots en construction à l'atelier" },
      {
        src: "/projects/concours-robots/cao-assemblage.jpg",
        alt: "Rendu CAO des deux robots avec le pont déplié",
        caption: "Assemblage CAO : le grand robot, le pont déplié et le petit robot",
        entier: true,
      },
      {
        src: "/projects/concours-robots/cao-grand-robot.jpg",
        alt: "Rendu CAO du grand robot avec le réservoir surélevé et la pompe",
        caption: "Grand robot : réservoir surélevé et pompe péristaltique",
        entier: true,
      },
      {
        src: "/projects/concours-robots/cao-petit-robot.jpg",
        alt: "Rendu CAO du petit robot avec sa bobine de tuyau",
        caption: "Petit robot : la bobine qui déroule le tuyau",
        entier: true,
      },
      {
        src: "/projects/concours-robots/prototype-ouvert.jpg",
        alt: "Prototype du grand robot ouvert, câblage visible et pont replié",
        caption: "Le prototype du grand robot pendant le montage",
        entier: true,
      },
      {
        type: "video",
        src: "/projects/concours-robots/test-pont.mp4",
        alt: "Vidéo de test du déploiement du pont",
        caption: "Test complet du déploiement du pont (19 mai 2025)",
      },
      {
        type: "video",
        src: "/projects/concours-robots/pompe-demo.mp4",
        alt: "Vidéo de démonstration de la pompe péristaltique",
        caption: "Démonstration de la pompe péristaltique",
        portrait: true,
        ratio: "9/16",
      },
    ],
    sections: [
      {
        heading: "Contexte et objectif",
        paragraphs: [
          "Le concours du Projet découverte de 1re année : apporter environ 0,8 L d'eau dans une citerne située de l'autre côté d'un précipice. Le parcours se compose d'une table de 3 m, d'un vide de 50 cm, puis d'une seconde table de 3 m. Une fois la citerne remplie, le robot doit reculer de 50 cm et s'arrêter. Tout se fait de manière autonome après le départ, avec un budget de 200 CHF.",
          "Notre réponse reposait sur deux robots indépendants qui coopèrent et communiquent en Bluetooth.",
        ],
      },
      {
        heading: "La stratégie à deux robots",
        bullets: [
          "Un gros robot porteur transporte le petit robot explorateur jusqu'au précipice",
          "Arrivé au bord, le porteur déplie un pont ; le petit robot roule dessus pour atteindre la seconde partie de l'épreuve",
          "Un tuyau relie les deux robots : il se déroule du petit vers le gros, qui tient le récipient",
          "Le petit robot rejoint la zone de réception ; le gros robot, grâce à une pompe péristaltique, vide le bac à l'avant du petit robot dans le bac de la seconde zone",
        ],
      },
      {
        heading: "Ce que j'ai fait",
        bullets: [
          "Conception de toute l'électronique des deux robots",
          "Programmation complète en C++ (Arduino)",
          "Communication Bluetooth maître / esclave : le gros robot commande le petit pour synchroniser les phases de la mission",
          "Intégration des interrupteurs de fin de course pour la détection du bord (arrêt à l'extrémité de la table), des moteurs, du servomoteur et de la pompe péristaltique",
          "Régulation PID de la trajectoire du grand robot à partir du gyroscope MPU6050 du petit robot",
        ],
      },
      {
        heading: "Technique",
        bullets: [
          "Contrôle — Arduino Mega sur le grand robot (maître), Arduino Uno sur le petit robot (esclave)",
          "Communication — 2 modules Bluetooth HC-05 à 9600 bauds ; la broche STATE du module maître signale une perte de liaison",
          "Propulsion — moteurs Modelcraft RB350100 à réducteur 1:100, pilotés par des ponts en H L298N",
          "Capteurs — gyroscope MPU6050 (I²C) sur le petit robot ; interrupteurs de fin de course pour détecter le bord des tables",
          "Pont — deux plateaux en bois de 300 mm renforcés par des cornières aluminium, déployés par un treuil motorisé",
          "Eau — pompe péristaltique GROTHEN G3000 alimentée en 24 V, tuyau déroulé par une bobine imprimée en 3D",
          "Dépose du tube — servomoteur actionné au départ, pour plonger le tube dans le réservoir sans intervention humaine",
          "Interface — boutons START et STOP (arrêt d'urgence)",
        ],
        figure: {
          src: "/projects/concours-robots/cablage.svg",
          alt: "Schéma de câblage des deux robots avec les broches Arduino utilisées",
          caption: "Schéma de principe reconstitué d'après les broches du code final (le schéma électrique d'origine n'a pas été conservé)",
        },
        figureEnFin: true,
      },
      {
        heading: "Communication et régulation",
        paragraphs: [
          "Le grand robot doit rouler droit sur 3 m jusqu'au bord, alors que ses deux moteurs ne tournent jamais exactement à la même vitesse. Le seul gyroscope disponible, un MPU6050, est monté sur le petit robot… qui voyage justement à bord du grand robot pendant cette phase. Le petit robot envoie donc sa vitesse de rotation par Bluetooth toutes les 50 ms ; le grand robot l'intègre dans le temps pour reconstruire son propre cap, puis corrige ses deux moteurs par un régulateur PID (Kp = 6, Ki = 0,05, Kd = 0,6) : vitesse gauche = vitesse cible − correction, vitesse droite = vitesse cible + correction.",
          "Toute la mission est découpée en états. Le maître pilote la séquence et attend un accusé de réception de l'esclave avant de passer à l'étape suivante :",
        ],
        figure: {
          src: "/projects/concours-robots/sequence-mission.svg",
          alt: "Diagramme de séquence des échanges Bluetooth entre le robot maître et le robot esclave, état par état",
          caption: "Déroulement de la mission et messages échangés, d'après le code final des deux robots",
        },
        tableau: {
          entetes: ["Message", "Envoyé par", "Effet"],
          lignes: [
            ["ETAT1", "Maître", "L'esclave commence à envoyer sa vitesse de rotation"],
            ["G:<valeur>", "Esclave", "Vitesse de rotation (°/s) pour le PID du maître"],
            ["STOP_ANGLE", "Maître", "Bord atteint : fin de l'envoi"],
            ["ETAT3", "Maître", "L'esclave traverse le pont et roule jusqu'au bord"],
            ["ETAT5", "Maître", "L'esclave recule pendant 3 s"],
            ["FIN_ETAT", "Esclave", "Accusé de réception : le maître passe à l'état suivant"],
          ],
        },
      },
      {
        heading: "Dimensionnement et essais",
        paragraphs: [
          "Pompe — La pompe péristaltique GROTHEN G3000 a été testée sur 3 m de tuyau avec un réservoir de 750 mL :",
        ],
        tableau: {
          entetes: ["Tension", "Temps de vidage", "Débit moyen"],
          lignes: [
            ["12 V", "60 s", "750 / 60 = 12,5 mL/s"],
            ["24 V", "30 s", "750 / 30 = 25 mL/s"],
          ],
          note: "Pertes mesurées : environ 30 mL, soit 30 / 750 = 4 % du volume, sous la tolérance de 10 %. D'où l'ajout d'une batterie 24 V dédiée à la pompe, et un réservoir placé en hauteur pour que la gravité aide à vider le tuyau. Le jour du concours, la pompe tournait environ 30 s.",
        },
        apres: [
          "Pont — Il devait franchir un vide de 500 mm, porter un robot de 4 kg au maximum et tenir replié dans 400 × 400 × 100 mm. Solution retenue : un pont-levis à deux plateaux de 300 mm articulés par des charnières, descendu par un fil enroulé sur un treuil ; des élastiques déplient le second plateau une fois que le bras de levier devient suffisant.",
          "Moteurs de roues — Couple en régime continu C = 6 kgf·cm = 6 × 9,81 N × 0,01 m ≈ 0,589 N·m. Avec deux moteurs et des roues de rayon R = 0,06 m, la force motrice vaut F = n·C / R = 2 × 0,589 / 0,06 ≈ 19,6 N. La résistance au roulement d'un robot de 10 kg vaut F_r = μr·m·g = 0,03 × 10 × 9,81 ≈ 2,94 N. Force nette : 19,6 − 2,94 ≈ 16,7 N, soit une accélération a = 16,7 / 10 ≈ 1,67 m/s². À 52 tr/min en charge, la vitesse vaut v = 52 / 60 × 2π × 0,06 ≈ 0,33 m/s : les 3 m de table se parcourent en environ 9 s. (Ce calcul corrige celui du rapport de revue 2, qui mélangeait kgf et newtons et trouvait 3 N ; la conclusion — moteurs largement suffisants — reste la même.)",
        ],
      },
      {
        heading: "Résultat",
        paragraphs: ["Nous avons remporté le prix d'esthétisme et réussi l'épreuve."],
      },
      {
        heading: "Difficultés rencontrées",
        bullets: [
          "Pont — lors de la démonstration de la revue 2, une attache du fil a cassé et le pont est descendu trop vite. Le fil a ensuite été fixé directement dans un trou du profilé aluminium, et la vitesse du treuil réduite pour un déploiement progressif",
          "Préparation — le câble du treuil devait être réenroulé à la main entre deux essais, dans une zone peu accessible",
          "Électronique — un problème de shield a empêché les premiers essais des moteurs avec le code",
          "Coopération — faire dialoguer deux systèmes autonomes en temps réel, avec accusés de réception et gestion de la perte de liaison",
        ],
        figure: {
          src: "/projects/concours-robots/pont-deploiement.jpg",
          alt: "Trois étapes du déploiement du pont : replié, en cours de descente, déplié",
          caption: "Déploiement du pont en trois temps, lors d'un test",
        },
        figureEnFin: true,
      },
      {
        heading: "Ce que j'en retiens",
        paragraphs: [
          "Faire coopérer deux systèmes embarqués autonomes qui dialoguent en temps réel : c'est là que résidait la vraie difficulté, bien plus que dans chaque robot pris séparément.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  SERVEUR RASPBERRY PI — perso (depuis l'été 2025)
  // ─────────────────────────────────────────
  {
    slug: "serveur-raspberry",
    title: "Serveur auto-hébergé",
    subtitle:
      "Raspberry Pi 5 qui héberge un cloud familial et une médiathèque, accessibles sur mon propre domaine.",
    debut: "2025-07",
    enCours: true,
    periode: "Depuis l'été 2025",
    cadre: "Projet personnel",
    statut: "En cours",
    tags: ["Raspberry Pi", "Docker", "Cloudflare Tunnel", "Auto-hébergement", "Nextcloud", "Jellyfin", "Linux"],
    links: [
      { label: "Guide d'installation et configuration (GitHub)", href: "https://github.com/P0770/picloud" },
    ],
    cover: { src: "/projects/serveur-raspberry/montage.jpg", alt: "Serveur Raspberry Pi 5" },
    sections: [
      {
        heading: "Le projet",
        paragraphs: [
          "Tout est parti d'un bloqueur de publicités monté sur un premier Raspberry Pi : ce projet m'a lancé dans l'auto-hébergement. J'ai ensuite voulu héberger mes propres services, chez moi, sur mon matériel.",
          "Le serveur tourne sur un Raspberry Pi 5 avec SSD, dans un boîtier qui assure l'alimentation et la gestion de l'ensemble. Il héberge un stockage cloud familial et une médiathèque vidéo, à la manière d'un Netflix personnel. Les services tournent dans des conteneurs Docker et sont exposés sur mon propre domaine via un Cloudflare Tunnel, sans ouvrir de port sur ma box.",
        ],
      },
      {
        heading: "Matériel",
        tableau: {
          entetes: ["Élément", "Détail"],
          lignes: [
            ["Ordinateur", "Raspberry Pi 5, 4 Go de RAM"],
            ["Stockage", "SSD NVMe de 1 To en ext4 (916 Go utilisables), monté automatiquement au démarrage"],
            ["Système", "Raspberry Pi OS Lite 64 bits, sans interface graphique"],
            ["Administration", "SSH depuis le réseau local, conteneurs gérés avec Portainer"],
          ],
        },
      },
      {
        heading: "Services",
        tableau: {
          entetes: ["Service", "Rôle"],
          lignes: [
            ["Nextcloud", "Cloud familial : un compte par membre de la famille, synchronisation des fichiers et un dossier partagé"],
            ["Jellyfin", "Médiathèque vidéo, avec des bibliothèques séparées"],
            ["Portainer", "Interface d'administration des conteneurs Docker"],
            ["cloudflared", "Client du tunnel Cloudflare, qui relie le serveur à internet sans ouvrir de port"],
          ],
        },
        apres: [
          "Nextcloud et Jellyfin partagent un même dossier sur le SSD : une vidéo déposée par la famille dans Nextcloud apparaît automatiquement dans Jellyfin.",
        ],
      },
      {
        heading: "Architecture",
        paragraphs: [
          "Le point clé est le tunnel Cloudflare : c'est le Raspberry Pi qui ouvre une connexion chiffrée sortante vers Cloudflare, puis Cloudflare fait passer les visiteurs par ce tunnel. Ma box n'a donc aucun port ouvert, et mon adresse IP n'est jamais exposée. Chaque service a son propre sous-domaine, servi en HTTPS par Cloudflare.",
        ],
        figure: {
          src: "/projects/serveur-raspberry/architecture.svg",
          alt: "Schéma de l'architecture : utilisateurs, Cloudflare, tunnel chiffré vers le conteneur cloudflared, puis Nextcloud et Jellyfin sur le SSD",
          caption: "Architecture du serveur (noms de domaine remplacés par des valeurs génériques)",
        },
        apres: [
          "Quand le Raspberry Pi est éteint, le domaine affiche une erreur 502 : Cloudflare répond toujours, mais ne trouve plus le serveur à l'autre bout du tunnel.",
        ],
      },
      {
        heading: "Problèmes résolus",
        tableau: {
          entetes: ["Problème", "Cause", "Solution"],
          lignes: [
            ["Connexion SSH refusée après une réinstallation", "La clé d'identification du Pi change à chaque réinstallation", "Suppression de l'ancienne clé connue (ssh-keygen -R)"],
            ["Données Nextcloud sur la carte SD", "Volume Docker créé par défaut", "Conteneur recréé avec ses données sur le SSD"],
            ["SSD absent après un redémarrage", "Disque non déclaré dans /etc/fstab", "Ajout du SSD à fstab pour un montage automatique"],
            ["Portainer inaccessible par le tunnel", "Le tunnel visait le port HTTPS de Portainer", "Route vers le port HTTP interne, le HTTPS étant assuré par Cloudflare"],
            ["Nextcloud refusait le nom de domaine", "Domaine absent de la liste trusted_domains", "Ajout du domaine avec l'outil occ de Nextcloud"],
            ["Dossier partagé illisible dans Nextcloud", "Mauvais propriétaire des fichiers", "Attribution du dossier à l'utilisateur du serveur web (www-data)"],
            ["Partage de fichiers « non autorisé »", "API de partage désactivée", "Activation dans l'administration de Nextcloud"],
          ],
        },
      },
      {
        heading: "Prochaines étapes",
        bullets: [
          "Sauvegardes automatiques vers mon NAS : aujourd'hui, toutes les données reposent sur un seul SSD",
          "Authentification Cloudflare Access devant les interfaces d'administration",
          "Héberger Overleaf Community Edition pour partager des projets LaTeX",
          "Passer des commandes docker run à un fichier docker-compose versionné (déjà préparé dans le dépôt GitHub)",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  LAMPE BRAUN — perso (déc. 2025)
  // ─────────────────────────────────────────
  {
    slug: "lampe-braun",
    title: "Lampe de chevet inspirée de Braun",
    subtitle:
      "Réinterprétation du ventilateur Braun HL70 en lampe de chevet, un gros travail de modélisation CAO.",
    debut: "2025-12",
    fin: "2025-12",
    periode: "Déc. 2025",
    cadre: "Projet personnel",
    statut: "Terminé",
    tags: ["CAO", "Inventor", "Impression 3D", "Électronique", "Réemploi"],
    links: [
      { label: "Fichiers CAO et STL (GitHub)", href: "https://github.com/P0770/lampe-chevet" },
    ],
    related: ["impression-3d"],
    cover: { src: "/projects/lampe-braun/lampe.jpg", alt: "Lampe de chevet inspirée du Braun HL70" },
    gallery: [
      {
        type: "video",
        src: "/projects/lampe-braun/demo.mp4",
        alt: "Vidéo de la lampe allumée",
        caption: "La lampe allumée",
      },
      { src: "/projects/lampe-braun/detail.jpg", alt: "Lampe de chevet éteinte", caption: "La lampe éteinte" },
    ],
    sections: [
      {
        heading: "Le projet",
        paragraphs: [
          "Une lampe de chevet qui reprend la forme du célèbre ventilateur Braun HL70, à l'identique, mais déclinée dans mes propres couleurs. Le cœur du projet était la modélisation en CAO : reproduire fidèlement les lignes de cet objet culte, ce qui m'a énormément fait progresser en conception 3D.",
          "La lampe est ensuite imprimée en 3D, avec une électronique simple autour d'une bande LED récupérée sur une ancienne lampe et réemployée pour l'occasion.",
        ],
      },
      {
        heading: "Conception CAO",
        paragraphs: [
          "La lampe est modélisée sous Inventor : sept pièces réunies dans un assemblage, conçues pour s'emboîter et accueillir l'électronique telle quelle.",
        ],
        figure: {
          src: "/projects/lampe-braun/pieces-cao.jpg",
          alt: "Rendus des six pièces principales de la lampe : pied, support de la LED, coque extérieure, boîtier central, plaque et disque de fermeture",
          caption: "Les pièces principales, rendues à partir des fichiers STL (couleurs proches de l'impression réelle)",
        },
        tableau: {
          entetes: ["Pièce", "Rôle", "Dimensions (mm)"],
          lignes: [
            ["Pied", "Support de la lampe posée à l'horizontale", "140 × 83 × 68"],
            ["Support de la LED", "Porte la bande LED", "120 × 77 × 73"],
            ["Coque extérieure", "Enveloppe courbe qui reprend la silhouette du HL70", "130 × 111 × 92"],
            ["Boîtier central", "Loge la batterie et la carte électronique", "70 × 70 × 70"],
            ["Plaque et disque de fermeture", "Ferment les extrémités", "77 × 73 × 6 et Ø 70 × 6"],
            ["Support de carte", "Maintient la carte électronique en place", "—"],
            ["Bouton", "Prolonge le bouton d'origine jusqu'à l'extérieur", "4,6 × 4 × 4,6"],
          ],
        },
      },
      {
        heading: "Électronique réemployée",
        paragraphs: [
          "Plutôt que de concevoir une électronique, j'ai démonté une lampe frontale rechargeable du commerce (200 lumens, éclairage à 270°) pour en récupérer l'électronique complète : bande LED, batterie, carte de charge et bouton. La lampe a ensuite été dessinée autour de ces composants, sans les modifier.",
          "C'est l'inverse de la démarche habituelle : les dimensions de la carte, de la batterie et de la bande LED imposaient la géométrie intérieure. Un support maintient la carte, une petite pièce prolonge le bouton d'origine jusqu'à l'extérieur, et le port de charge reste accessible : la lampe se recharge comme la frontale d'origine, batterie comprise.",
        ],
      },
      {
        heading: "Impression",
        bullets: [
          "Imprimante Bambu Lab P1S avec le module multicouleur AMS",
          "PLA pour les pièces de structure et de couleur",
          "PETG transparent pour laisser passer la lumière",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  JEU AMC — HEPIA MT2 (mars – mai 2026)
  // ─────────────────────────────────────────
  {
    slug: "jeu-amc",
    title: "« Qui de nous ? » — Jeu de soirée en réseau local",
    subtitle:
      "Jeu de soirée multijoueur en Python/Kivy, sur PC et Android : un joueur héberge la partie, les autres la rejoignent sur le même Wi-Fi.",
    debut: "2026-03",
    fin: "2026-05",
    periode: "Mars – mai 2026",
    cadre: "2e année HEPIA (MT2) — cours AMC (Application Mobile et Capteur)",
    equipe: "Binôme",
    role: "Interface, déploiement Android, tests sur tablette",
    statut: "Terminé",
    tags: ["Python", "Kivy", "Android", "Buildozer", "TCP", "Accéléromètre", "Git"],
    links: [
      { label: "Code du jeu (GitHub)", href: "https://github.com/P0770/qui-de-nous" },
      {
        label: "Dépôt Git HEPIA",
        href: "https://gitedu.hesge.ch/amc/amc26/amc26_jeu_bento_pozzo",
      },
    ],
    highlights: [
      "Jeu de soirée multijoueur en réseau local : chaque joueur se connecte depuis son appareil",
      "Un joueur héberge la partie, les autres la rejoignent avec son adresse IP sur le même Wi-Fi",
      "Communication client/serveur en TCP (sockets Python) sur le réseau local",
      "Lancement de la partie en secouant l'appareil hôte, détecté par l'accéléromètre",
      "Interface graphique développée avec le framework Kivy, application Android compilée avec Buildozer",
    ],
    cover: { src: "/projects/jeu-amc/cover.jpg", alt: "Logo du jeu : point d'interrogation lumineux et lettres QDN" },
    gallery: [
      {
        src: "/projects/jeu-amc/interface.jpg",
        alt: "Écran d'accueil du jeu sur PC et sur tablette Android",
        caption: "L'écran d'accueil : un joueur crée la partie, l'autre la rejoint avec l'adresse IP de l'hôte",
      },
      { src: "/projects/jeu-amc/ecran-menu.jpg", alt: "Menu du jeu sur PC et sur tablette", caption: "Menu : pseudo, créer ou rejoindre une partie", entier: true },
      { src: "/projects/jeu-amc/ecran-salon.jpg", alt: "Salon d'attente avec la liste des joueurs", caption: "Salon d'attente : l'hôte secoue l'appareil pour lancer la partie", entier: true },
      { src: "/projects/jeu-amc/ecran-question.jpg", alt: "Écran de rédaction de la question", caption: "Le joueur désigné complète « Qui de nous… » et choisit sa cible secrète", entier: true },
      { src: "/projects/jeu-amc/ecran-vote.jpg", alt: "Écran de vote", caption: "Les autres joueurs votent", entier: true },
      { src: "/projects/jeu-amc/ecran-resultats.jpg", alt: "Résultats de la manche", caption: "Résultats de la manche et scores", entier: true },
      { src: "/projects/jeu-amc/ecran-victoire.jpg", alt: "Écran de fin de partie", caption: "Fin de partie et classement", entier: true },
    ],
    sections: [
      {
        heading: "Contexte",
        paragraphs: [
          "Ce projet a été réalisé en binôme dans le cadre du cours AMC (Application Mobile et Capteur), en 2e année à HEPIA. La contrainte principale était de développer une application réseau fonctionnelle avec une interface graphique.",
        ],
      },
      {
        heading: "Règles du jeu",
        paragraphs: [
          "À chaque manche, un joueur désigné complète la phrase « Qui de nous… » (par exemple « …est le plus susceptible ? ») et choisit secrètement la personne qu'il vise. Les autres joueurs votent pour la personne qu'ils pensent être la bonne réponse : chaque bonne réponse rapporte 1 point. Après 5 manches, le joueur qui a le plus de points gagne.",
        ],
      },
      {
        heading: "Architecture réseau",
        paragraphs: [
          "Le jeu fonctionne en architecture client/serveur sur réseau local. Un nœud fait tourner le serveur (gestion de l'état du jeu, synchronisation) et les autres joueurs s'y connectent en tant que clients via TCP, en rejoignant la partie de l'hôte.",
        ],
        figure: {
          src: "/projects/jeu-amc/architecture.svg",
          alt: "Schéma : parcours des six écrans du jeu, puis l'hôte et ses threads reliés aux joueurs par TCP, avec la liste des messages échangés",
          caption: "Parcours des écrans et communication réseau (TCP, port 55555, messages JSON précédés de leur taille)",
        },
      },
      {
        heading: "Interface et accéléromètre",
        paragraphs: [
          "L'interface a été développée avec Kivy, framework Python pour les interfaces tactiles. L'accéléromètre sert à lancer la partie : dans le salon d'attente, l'hôte secoue son appareil. Le capteur est lu toutes les 50 ms, et une secousse est détectée quand |Δx| + |Δy| + |Δz| dépasse 14,5.",
        ],
      },
      {
        heading: "Ma partie : l'interface et le déploiement Android",
        bullets: [
          "Design de l'interface : thème sombre, couleurs, boutons et mises en page des six écrans",
          "Compilation de l'application Android (APK) avec Buildozer, sur une machine virtuelle pilotée en SSH",
          "Résolution d'un bug Android : « [Errno 1] Operation not permitted » à la connexion, car la détection automatique des permissions ne repérait pas l'usage des sockets ; la permission INTERNET a été ajoutée explicitement",
          "Tests et débogage sur tablette Android et sur PC, captures d'écran et présentation finale",
        ],
        apres: [
          "Mon binôme s'est chargé de l'architecture réseau, de la logique de jeu et de la détection de secousse.",
        ],
      },
      {
        heading: "Difficultés",
        bullets: [
          "Le Wi-Fi de HEPIA isole les appareils les uns des autres (isolation AP) : impossible de se connecter entre joueurs, d'où l'utilisation d'un partage de connexion",
          "La police de Kivy n'affiche pas les emojis",
          "Une mise en page fixe, mal adaptée aux différentes tailles d'écran",
          "Les joueurs virtuels (bots) n'ont pas pu être rendus fonctionnels",
        ],
      },
      {
        heading: "Pistes d'amélioration",
        bullets: [
          "Reconnexion automatique après une déconnexion",
          "Bouton de démarrage de secours sur les appareils sans accéléromètre",
          "Minuteur pour le vote",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  INCUBATEUR — HEPIA MT2 (mars – juin 2026)
  // ─────────────────────────────────────────
  {
    slug: "incubateur-cellules",
    vedette: true,
    title: "Incubateur transportable de cellules",
    subtitle:
      "Boîtier autonome transportant des cellules vivantes entre Lausanne et Genève, à 37 °C, humidité et pH régulés.",
    debut: "2026-03",
    fin: "2026-06",
    periode: "Mars – juin 2026",
    cadre: "2e année HEPIA (MT2) — Projet Thématique, spécialisation biomédicale",
    statut: "Terminé — prototype fonctionnel validé",
    links: [
      { label: "Code et fichiers du projet (GitHub)", href: "https://github.com/P0770/incubateur-transportable-pb0326" },
    ],
    tags: ["ESP32", "C++", "Régulation", "Machine à états", "Creo", "Impression 3D", "Biomédical"],
    highlights: [
      "Objectif : maintenir 37 °C ±0,5 °C, HR ≈ 100 % et pH 7,2–7,4 pendant 1 h de transport",
      "Système « pick and place » : boîtier préparé à part puis déposé, connexions établies par connecteurs aimantés",
      "Architecture ESP32 + SHT35 (T/HR) + SCD40/Nafion (CO₂) + résistance chauffante + électrovanne CO₂",
      "Firmware en C++ structuré autour d'une machine à états finis à 6 phases (INIT → CHECK → BUFFER → MARCHE → PAUSE → ERREUR)",
      "Toutes les pièces mécaniques conçues sous Creo et fabriquées par impression 3D",
    ],
    cover: {
      src: "/projects/incubateur-cellules/prototype.jpg",
      alt: "Prototype de l'incubateur ouvert dans sa valise",
      caption: "Le prototype dans sa valise",
    },
    gallery: [
      {
        type: "video",
        src: "/projects/incubateur-cellules/demo.mp4",
        alt: "Vidéo du prototype de l'incubateur",
        caption: "Le boîtier biologique amovible et sa valise",
        portrait: true,
        ratio: "9/16",
      },
      {
        src: "/projects/incubateur-cellules/cao-valise.jpg",
        alt: "Rendu CAO de la valise ouverte avec l'aménagement intérieur",
        caption: "Assemblage CAO complet dans la valise",
        entier: true,
      },
      {
        src: "/projects/incubateur-cellules/cao-support.jpg",
        alt: "Rendu CAO du support de la boîte de culture sur la grille de fond",
        caption: "Support de la boîte de culture, cales et porte-connecteurs aimantés",
        entier: true,
      },
      {
        src: "/projects/incubateur-cellules/montage.jpg",
        alt: "Valise ouverte pendant le montage : grille, supports imprimés et câblage",
        caption: "Du modèle au prototype : le montage dans la valise",
        entier: true,
      },
      {
        src: "/projects/incubateur-cellules/ecran-en-marche.jpg",
        alt: "Écran du prototype en mode MARCHE affichant température, humidité et CO₂",
        caption: "L'écran en mode MARCHE : T = 37,1 °C pour une consigne de 37,0 °C",
        entier: true,
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
        heading: "Démarche de choix",
        paragraphs: [
          "Pour chaque sous-système, plusieurs solutions ont été décrites puis comparées par une matrice de décision pondérée (notes sur 5, multipliées par le poids de chaque critère). Le tableau résume la solution retenue et la meilleure alternative écartée.",
        ],
        tableau: {
          entetes: ["Sous-système", "Solution retenue", "Score", "Alternative suivante"],
          lignes: [
            ["Chauffage", "Résistance chauffante", "80", "Module Peltier (65)"],
            ["Contrôle du pH", "Injection de CO₂ par électrovanne", "88", "Tampon HEPES (44)"],
            ["Humidification", "Éponge cellulose passive", "102", "Membrane microporeuse (74)"],
            ["Capteur T / HR", "SHT35", "77", "DS18B20 (57)"],
            ["Capteur CO₂", "SCD40 + membrane Nafion", "84", "SCD40 seul (67)"],
            ["Microcontrôleur", "ESP32", "100", "Raspberry Pi (74)"],
            ["Alimentation", "LiPo 3S 5000 mAh + BMS", "79", "LiPo 3S 2200 mAh (72)"],
          ],
          note: "Les scores maximaux diffèrent d'une matrice à l'autre (nombre et poids des critères différents) : ils se comparent à l'intérieur d'une ligne, pas entre les lignes.",
        },
      },
      {
        heading: "Architecture retenue",
        paragraphs: [
          "L'ensemble s'organise autour d'un boîtier biologique amovible intégré dans la valise. Chaque sous-système a été choisi par matrice de décision pondérée :",
        ],
        bullets: [
          "Chauffage — résistance bobinée RS PRO 8,2 Ω (50 W nominaux ; sous 12 V elle dissipe P = U²/R = 144/8,2 ≈ 17,6 W), pilotée par MOSFET IRLZ44N",
          "Humidification — éponge cellulose passive (ratio eau disponible / eau nécessaire ≈ 2 500)",
          "pH / CO₂ — injection de CO₂ par électrovanne : réservoir CO₂ → détendeur → électrovanne SMC V114 (normalement fermée) → zone biologique",
          "Mesures — SHT35 (T+HR, ±0,1 °C) dans zone biologique ; SCD40 + membrane Nafion (CO₂, ±50 ppm) hors zone humide",
          "Interface — écran ST7789 EYESPI 2,0\" avec barres de progression, LEDs RGB d'alerte, buzzer",
          "Alimentation — 2 × LiPo 3S 5000 mAh + BMS, DC-DC 12 V (résistance + EV) et régulateur 5 V (ESP32 + capteurs). Autonomie estimée ≥ 2 h.",
        ],
        apres: [
          "Les trois charges de puissance (résistance, électrovanne, ventilateur) sont commandées de la même façon : un MOSFET IRLZ44N côté masse, une résistance de grille de 100 Ω et une diode de roue libre 1N4007 qui protège le transistor lors de la coupure d'une charge inductive.",
        ],
        figure: {
          src: "/projects/incubateur-cellules/schema-actionneurs.png",
          alt: "Schéma électronique des actionneurs : résistance de chauffe, électrovanne et ventilateur pilotés par MOSFET",
          caption: "Feuille « Actionneurs » du schéma électronique (EasyEDA) — cliquer pour agrandir",
        },
        figureEnFin: true,
      },
      {
        heading: "Ma plus grande fierté : le système « pick and place »",
        paragraphs: [
          "On peut préparer le boîtier biologique dans un environnement contrôlé, puis simplement venir le déposer sur sa base. Des connecteurs aimantés établissent alors automatiquement toutes les liaisons : l'alimentation, les capteurs et le système de chauffe intérieur se connectent d'un seul geste, sans manipulation délicate.",
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
        figure: {
          src: "/projects/incubateur-cellules/machine-etats.svg",
          alt: "Diagramme de la machine à états : INIT, CHECK, BUFFER, MARCHE, PAUSE et ERREUR avec leurs transitions",
          caption: "Machine à états du firmware v4.0.1 — un seul bouton GO pilote toutes les transitions",
        },
        bullets: [
          "INIT — initialisation des variables, splash écran 3 s",
          "CHECK — scan I²C toutes les 2 s, vérification SHT35 et SCD40",
          "BUFFER — affichage live T/HR/CO₂, attente fermeture de l'enceinte et appui GO",
          "MARCHE — régulation active : résistance chauffante en tout-ou-rien, injection de CO₂ par électrovanne, chronomètre",
          "PAUSE — résistance coupée, ventilateur maintenu, retour MARCHE ou BUFFER",
          "ERREUR — tous actionneurs coupés, LED rouge + buzzer clignotants, message à l'écran",
        ],
      },
      {
        heading: "Résultats et validation",
        paragraphs: [
          "Le prototype a été testé avec la boîte de culture vide. Température, humidité et CO₂ se maintiennent dans les seuils visés lors de la mise en marche. La gestion des erreurs fonctionne correctement : les actionneurs se coupent et l'alerte s'active dès qu'un seuil critique est franchi.",
          "Prototype fonctionnel : l'affichage, la régulation et les sécurités se comportent comme prévu lors des essais. La tenue de la température sur une heure complète n'a pas encore été mesurée et enregistrée.",
        ],
        figure: {
          src: "/projects/incubateur-cellules/simulation-temperature-humidite.png",
          alt: "Graphique de simulation : montée en température jusqu'à 37 °C puis oscillation autour de la consigne, et humidité qui monte vers 94 %",
          caption: "Simulation numérique (pas une mesure) : modèle thermique à 3 nœuds avec la loi de commande réelle du firmware. Montée à 36,5 °C en ≈ 17 min, puis oscillation entre 36,8 et 37,5 °C ; humidité au-dessus du seuil de 85 % après ≈ 24 min, puis ≈ 94 %.",
        },
        apres: [
          "La simulation reprend la loi de commande du firmware (résistance de 17,6 W en tout-ou-rien, seuil 37,1 °C, lecture toutes les 2 s) et une ambiance de 21 °C. Elle montre deux points à surveiller : de légers dépassements au-delà de 37,5 °C, qui justifient le passage à une régulation PID, et une humidité mesurée inférieure à 100 % tant que l'air est plus chaud que l'eau de l'éponge.",
          "Prochaine étape : enregistrer une heure complète de mesures réelles (le firmware affiche déjà T et HR toutes les 2 s sur le port série) pour comparer le modèle à la réalité.",
        ],
      },
      {
        heading: "Difficultés rencontrées",
        bullets: [
          "Boîtier — difficulté d'alignement du boîtier biologique sur les connecteurs, d'où l'embase de réglage qui laisse un jeu de positionnement",
          "Hermétisation — besoin de rendre le contenant hermétique",
          "Composants — problème de commande",
          "Le plus exigeant : faire tenir l'ensemble du projet dans la valise, protéger le capteur de CO₂ de l'humidité et passer du modèle 3D propre au montage réel",
        ],
      },
      {
        heading: "Ce que j'en retiens",
        paragraphs: [
          "Un vrai projet système en conditions biomédicales exigeantes : marier la régulation précise, l'électronique embarquée, la mécanique et la contrainte du vivant, avec un prototype qui tient réellement les paramètres.",
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
  // ─────────────────────────────────────────
  //  COMPTEUR DE BOUTEILLES — perso (juil. 2026)
  // ─────────────────────────────────────────
  {
    slug: "compteur-bouteilles",
    vedette: true,
    title: "Compteur de bouteilles pour un vigneron",
    subtitle:
      "Compteur autonome sur ESP32 qui détecte chaque bouteille remplie et bouchonnée par infrarouge et affiche le total en direct.",
    debut: "2026-07",
    fin: "2026-07",
    periode: "Juil. 2026",
    cadre: "Projet personnel, réalisé pour le domaine viticole de mon frère",
    equipe: "Seul",
    statut: "Terminé",
    tags: ["ESP32", "C++", "Capteur IR", "OLED", "Embarqué", "CAO", "Impression 3D"],
    links: [
      { label: "Code et fichiers CAO (GitHub)", href: "https://github.com/P0770/bottlecounter" },
    ],
    highlights: [
      "Comptage des bouteilles remplies et bouchonnées, directement sur la partie rotative de la machine",
      "Détection sans contact par capteur infrarouge réflectif",
      "Total affiché en direct sur un écran OLED SSD1306",
      "Firmware en C++ sur ESP32, alimenté simplement en USB-C",
      "Boutons Marche/Arrêt et Remise à zéro, LED d'état, total conservé en mémoire flash",
      "Boîtier conçu sur Inventor et imprimé en 3D, fixé sur une pince universelle du commerce",
    ],
    related: ["incubateur-cellules", "scanner-i2c"],
    cover: {
      src: "/projects/compteur-bouteilles/couverture.jpg",
      alt: "Compteur de bouteilles installé sur la partie rotative de la machine d'embouteillage",
      caption: "Le compteur installé sur la machine, capteur infrarouge face aux bouteilles",
    },
    gallery: [
      {
        src: "/projects/compteur-bouteilles/comptage.mp4",
        alt: "Vidéo du compteur en train de compter les bouteilles",
        caption: "Le compteur en action pendant la mise en bouteille",
        type: "video",
        portrait: true,
        ratio: "9/16",
      },
    ],
    sections: [
      {
        heading: "Le besoin",
        paragraphs: [
          "Mon frère est vigneron. Pendant la mise en bouteille, il voulait connaître le nombre de bouteilles remplies et bouchonnées, sans devoir les compter à la main.",
        ],
      },
      {
        heading: "Fonctionnement",
        paragraphs: [
          "Sur la machine, les bouteilles passent d'abord dans un système rotatif, puis sont déposées sur un tapis. Le comptage se fait sur la partie rotative : à chaque bouteille qui passe devant lui, le capteur infrarouge réflectif la détecte, l'ESP32 incrémente le compteur et l'écran affiche le nouveau total.",
        ],
      },
      {
        heading: "Matériel",
        bullets: [
          "ESP32, programmé en C++",
          "Capteur infrarouge réflectif, pour détecter les bouteilles sans contact",
          "Écran OLED SSD1306, pour afficher le total",
          "Alimentation par le port USB-C de l'ESP32",
        ],
      },
      {
        heading: "Interface et câblage",
        paragraphs: [
          "L'ESP32 pilote un écran, un capteur, deux boutons et deux LED. Les boutons sont reliés à la masse et utilisent les résistances de tirage internes de l'ESP32 : un appui fait passer l'entrée à l'état bas.",
        ],
        tableau: {
          entetes: ["Élément", "Broche ESP32", "Rôle"],
          lignes: [
            ["Écran OLED SSD1306", "GPIO 2 (SDA), GPIO 15 (SCL)", "Affichage du total, bus I²C, adresse 0x3C"],
            ["Capteur IR réflectif", "GPIO 13", "Sortie à l'état bas quand une bouteille passe"],
            ["Bouton Marche/Arrêt", "GPIO 22", "Lance ou suspend le comptage"],
            ["Bouton Remise à zéro", "GPIO 23", "Remet le total à 0"],
            ["LED verte", "GPIO 19", "Comptage actif"],
            ["LED rouge", "GPIO 21", "Bouteille devant le capteur"],
          ],
        },
        figure: {
          src: "/projects/compteur-bouteilles/cablage.svg",
          alt: "Schéma de câblage de l'ESP32 avec l'écran OLED, le capteur infrarouge, les deux boutons et les deux LED",
          caption: "Câblage de la version finale, d'après les broches du code",
        },
      },
      {
        heading: "Logique de comptage",
        paragraphs: [
          "Le programme ne compte pas la présence d'une bouteille mais son arrivée : un passage est compté sur le front descendant du signal du capteur, quand il passe de l'état haut à l'état bas. Une bouteille immobile devant le capteur n'est donc comptée qu'une seule fois.",
          "Après chaque comptage, les fronts suivants sont ignorés pendant 150 ms. Ce délai anti-rebond évite de compter deux fois une bouteille dont le bord ou l'étiquette fait varier le signal. Il fixe aussi la cadence maximale : 1 / 0,150 s ≈ 6,7 bouteilles par seconde, soit environ 6,7 × 60 ≈ 400 bouteilles par minute, bien au-delà du rythme de la machine.",
          "Le total est enregistré dans la mémoire flash de l'ESP32 toutes les 10 bouteilles, à l'arrêt et à la remise à zéro : après une coupure de courant pendant la mise en bouteille, le compteur repart du dernier total enregistré, avec au plus 9 bouteilles à recompter.",
        ],
      },
      {
        heading: "Boîtier",
        paragraphs: [
          "J'ai conçu le boîtier sur Inventor pour qu'il s'adapte à une pince universelle achetée dans le commerce. Il se compose de deux pièces imprimées en 3D : le boîtier, qui reçoit l'électronique, l'écran et le capteur, et une plaque vissée sur la pince. Le compteur se pose ainsi sur la machine sans la modifier.",
        ],
        figure: {
          src: "/projects/compteur-bouteilles/boitier.jpg",
          alt: "Rendu 3D des deux pièces du boîtier : le boîtier de 66 × 123 × 26 mm et la plaque de fixation de 71 × 8 × 68 mm",
          caption: "Les deux pièces imprimées : le boîtier (66 × 123 × 26 mm) et la plaque de fixation sur la pince (71 × 8 × 68 mm)",
        },
      },
      {
        heading: "Évolution du code",
        paragraphs: [
          "Le projet a d'abord été écrit en MicroPython, en quatre versions successives. La première pose la base : une machine à états qui ignore les détections trop courtes, et la sauvegarde du total. Les suivantes ajoutent l'écran OLED, puis les LED, puis l'écran d'accueil et l'affichage en grands chiffres. La version finale a été réécrite en C++ avec l'environnement Arduino. Toutes les versions sont dans le dépôt GitHub.",
        ],
      },
    ],
  },

];

// ── Tri chronologique ──
// Par date de début ; à début égal, celui qui finit le premier passe en premier.
const cle = (p: Project) => `${p.debut}|${p.fin ?? p.debut}`;

/** Du plus ancien au plus récent */
export const projetsChronologiques: Project[] = [...projects].sort((a, b) =>
  cle(a).localeCompare(cle(b))
);

/** Du plus récent au plus ancien */
export const projetsRecents: Project[] = [...projetsChronologiques].reverse();

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
