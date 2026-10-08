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
  /** Accroche courte : affichée sur la carte et sous le titre de la page */
  subtitle: string;

  // ── Chronologie ──
  /** Début au format "AAAA-MM" (sert au tri et au placement dans la chronologie) */
  debut: string;
  /** Fin au format "AAAA-MM" (laisser vide si le projet est en cours) */
  fin?: string;
  /** Projet toujours en cours : badge + trait pointillé jusqu'à « Aujourd'hui » */
  enCours?: boolean;
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
      src: "/projects/impression-3d/imprimante.jpg",
      alt: "Imprimante 3D Bambu Lab P1S",
      caption: "Ma Bambu Lab P1S",
    },
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
      "Pilotage, réparation et construction de drones FPV, du 2\" DIY au 4\" longue distance.",
    debut: "2025-01",
    enCours: true,
    periode: "Depuis janv. 2025",
    cadre: "Projet personnel",
    statut: "En cours",
    tags: ["FPV", "Betaflight", "Brasure", "Impression 3D"],
    related: ["impression-3d"],
    cover: { src: "/projects/drone-fpv/cover.jpg", alt: "Drone FPV" },
    gallery: [
      {
        type: "video",
        src: "/projects/drone-fpv/vol.mp4",
        alt: "Vidéo d'un petit vol en FPV au-dessus d'une rivière",
        caption: "Un petit vol en FPV",
        portrait: true,
        ratio: "3/4",
      },
      { src: "/projects/drone-fpv/diy-2-5.jpg", alt: "Drone 2,5 pouces DIY", caption: "Le 2,5\" entièrement DIY" },
      { src: "/projects/drone-fpv/flotte.jpg", alt: "Ma flotte de drones", caption: "Ma flotte" },
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
    ],
  },

  // ─────────────────────────────────────────
  //  CONCOURS ROBOTS — HEPIA MT1 (mars – juin 2025)
  // ─────────────────────────────────────────
  {
    slug: "concours-robots",
    title: "Concours de robots",
    subtitle:
      "Deux robots coopérants en Bluetooth : un porteur à pont dépliable et un explorateur, pour franchir un précipice et vider un bac.",
    debut: "2025-03",
    fin: "2025-06",
    periode: "Mars – juin 2025",
    cadre: "1re année HEPIA (MT1) — concours de robots",
    equipe: "Équipe de 5",
    role: "Responsable électronique et code",
    statut: "Terminé — prix d'esthétisme",
    tags: ["Arduino", "Bluetooth", "C++", "Robotique", "Infrarouge"],
    highlights: [
      "Prix d'esthétisme remporté et épreuve réussie",
      "Deux robots indépendants en communication Bluetooth maître / esclave",
      "Pont dépliable et pompe péristaltique pour accomplir la mission",
    ],
    cover: {
      src: "/projects/concours-robots/robot-1.jpg",
      alt: "Les robots du concours",
      caption: "Les deux robots",
    },
    gallery: [
      {
        type: "video",
        src: "/projects/concours-robots/concours.mp4",
        alt: "Vidéo du concours de robots",
        caption: "L'épreuve",
      },
      { src: "/projects/concours-robots/robot-2.jpg", alt: "Robot porteur", caption: "À compléter" },
      { src: "/projects/concours-robots/robot-3.jpg", alt: "Robot explorateur", caption: "À compléter" },
    ],
    sections: [
      {
        heading: "Contexte et objectif",
        paragraphs: [
          "La mission : traverser une planche, franchir un précipice, retraverser, puis vider un bac d'eau rempli au préalable. Notre réponse reposait sur deux robots indépendants qui coopèrent et communiquent en Bluetooth.",
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
          "Intégration des capteurs infrarouges pour la détection du bord du précipice (arrêt à l'extrémité), des moteurs et de la pompe péristaltique",
        ],
      },
      {
        heading: "Technique",
        paragraphs: [
          "2 × Arduino Mega · modules Bluetooth · capteurs infrarouges · moteurs · pompe péristaltique · pont dépliable · impression 3D",
        ],
      },
      {
        heading: "Résultat",
        paragraphs: ["Nous avons remporté le prix d'esthétisme et réussi l'épreuve."],
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
    tags: ["Raspberry Pi", "Docker", "Cloudflare Tunnel", "Auto-hébergement"],
    cover: { src: "/projects/serveur-raspberry/montage.jpg", alt: "Serveur Raspberry Pi 5" },
    sections: [
      {
        heading: "Le projet",
        paragraphs: [
          "Tout est parti d'un bloqueur de publicités monté sur un premier Raspberry Pi : ce projet m'a lancé dans l'auto-hébergement. J'ai ensuite voulu héberger mes propres services, chez moi, sur mon matériel.",
          "Le serveur tourne sur un Raspberry Pi 5 avec SSD, dans un boîtier qui assure l'alimentation et la gestion de l'ensemble. Il héberge un stockage cloud familial et une médiathèque vidéo, à la manière d'un Netflix personnel. Les services tournent dans des conteneurs Docker et sont exposés sur mon propre domaine via un Cloudflare Tunnel, sans ouvrir de port sur ma box.",
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
    tags: ["CAO", "Impression 3D", "Électronique", "Réemploi"],
    related: ["impression-3d"],
    cover: { src: "/projects/lampe-braun/lampe.jpg", alt: "Lampe de chevet inspirée du Braun HL70" },
    gallery: [
      { src: "/projects/lampe-braun/detail.jpg", alt: "Détail de la lampe", caption: "À compléter" },
    ],
    sections: [
      {
        heading: "Le projet",
        paragraphs: [
          "Une lampe de chevet qui reprend la forme du célèbre ventilateur Braun HL70, à l'identique, mais déclinée dans mes propres couleurs. Le cœur du projet était la modélisation en CAO : reproduire fidèlement les lignes de cet objet culte, ce qui m'a énormément fait progresser en conception 3D.",
          "La lampe est ensuite imprimée en 3D, avec une électronique simple autour d'une bande LED récupérée sur une ancienne lampe et réemployée pour l'occasion.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  JEU AMC — HEPIA MT2 (mars – mai 2026)
  // ─────────────────────────────────────────
  {
    slug: "jeu-amc",
    title: "« C de Soirée » — Jeu en réseau local",
    subtitle:
      "Jeu de soirée multijoueur en Python/Kivy : création de salons pour jouer ensemble sur le même Wi-Fi.",
    debut: "2026-03",
    fin: "2026-05",
    periode: "Mars – mai 2026",
    cadre: "2e année HEPIA (MT2) — cours AMC (Application Mobile et Capteur)",
    equipe: "Binôme",
    statut: "Terminé",
    tags: ["Python", "Kivy", "TCP", "Réseau", "Accéléromètre", "Git"],
    links: [
      {
        label: "Dépôt Git HEPIA",
        href: "https://gitedu.hesge.ch/amc/amc26/amc26_jeu_bento_pozzo",
      },
    ],
    highlights: [
      "Jeu de soirée multijoueur en réseau local : chaque joueur se connecte depuis son appareil",
      "Création de salons pour jouer ensemble sur le même Wi-Fi",
      "Communication client/serveur en TCP (sockets Python) sur le réseau local",
      "Saisie des réponses par mouvements détectés via l'accéléromètre du téléphone",
      "Interface graphique développée avec le framework Kivy",
    ],
    cover: { src: "/projects/jeu-amc/cover.jpg", alt: "Interface du jeu C de Soirée" },
    sections: [
      {
        heading: "Contexte",
        paragraphs: [
          "Ce projet a été réalisé en binôme dans le cadre du cours AMC (Application Mobile et Capteur), en 2e année à HEPIA. La contrainte principale était de développer une application réseau fonctionnelle avec une interface graphique.",
        ],
      },
      {
        heading: "Architecture réseau",
        paragraphs: [
          "Le jeu fonctionne en architecture client/serveur sur réseau local. Un nœud fait tourner le serveur (gestion de l'état du jeu, synchronisation) et les autres joueurs s'y connectent en tant que clients via TCP, en rejoignant des salons de jeu.",
        ],
      },
      {
        heading: "Interface et accéléromètre",
        paragraphs: [
          "L'interface a été développée avec Kivy, framework Python pour les interfaces tactiles. Les réponses se donnent par des mouvements du téléphone, détectés grâce à son accéléromètre.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  INCUBATEUR — HEPIA MT2 (mars – juin 2026)
  // ─────────────────────────────────────────
  {
    slug: "incubateur-cellules",
    title: "Incubateur transportable de cellules",
    subtitle:
      "Boîtier autonome transportant des cellules vivantes entre Lausanne et Genève, à 37 °C, humidité et pH régulés.",
    debut: "2026-03",
    fin: "2026-06",
    periode: "Mars – juin 2026",
    cadre: "2e année HEPIA (MT2) — Projet Thématique, spécialisation biomédicale",
    statut: "Terminé — prototype fonctionnel validé",
    tags: ["ESP32", "C++", "Régulation", "Machine à états", "Creo", "Impression 3D", "Biomédical"],
    highlights: [
      "Milieu biologique maintenu : 37 °C ±0,5 °C, HR ≈ 100 %, pH 7,2–7,4 pendant 1 h de transport",
      "Système « pick and place » : boîtier préparé à part puis déposé, connexions établies par connecteurs aimantés",
      "Architecture ESP32 + SHT35 (T/HR) + SCD40/Nafion (CO₂) + résistance chauffante + électrovanne CO₂",
      "Firmware en C++ structuré autour d'une machine à états finis à 6 phases (INIT → CHECK → BUFFER → MARCHE → PAUSE → ERREUR)",
      "Toutes les pièces mécaniques conçues sous Creo et fabriquées par impression 3D",
    ],
    cover: {
      src: "/projects/incubateur-cellules/assemblage.jpg",
      alt: "Incubateur cellules — assemblage des pièces dans la valise",
      caption: "Assemblage des pièces dans la valise — modèle Creo",
    },
    gallery: [
      {
        src: "/projects/incubateur-cellules/pick-and-place.jpg",
        alt: "Boîtier biologique et connecteurs aimantés",
        caption: "Le boîtier « pick and place » et ses connecteurs aimantés",
      },
      {
        src: "/projects/incubateur-cellules/ecran-marche.jpg",
        alt: "Écran EN MARCHE",
        caption: "Interface ST7789 — état MARCHE avec barres de progression T, HR, CO₂",
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
          "Prototype fonctionnel, cahier des charges respecté.",
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
    title: "Compteur de bouteilles pour un vigneron",
    subtitle:
      "Compteur autonome sur ESP32 qui détecte chaque bouteille remplie et bouchonnée par infrarouge et affiche le total en direct.",
    debut: "2026-07",
    fin: "2026-07",
    periode: "Juil. 2026",
    cadre: "Projet personnel, réalisé pour le domaine viticole de mon frère",
    equipe: "Seul",
    statut: "Terminé",
    tags: ["ESP32", "C++", "Capteur IR", "OLED", "Embarqué"],
    highlights: [
      "Comptage des bouteilles remplies et bouchonnées, directement sur la partie rotative de la machine",
      "Détection sans contact par capteur infrarouge réflectif",
      "Total affiché en direct sur un écran OLED SSD1306",
      "Firmware en C++ sur ESP32, alimenté simplement en USB-C",
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
