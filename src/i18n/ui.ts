// Textes de l'interface, en français et en anglais.
// Les contenus (projets, parcours, à propos) sont dans src/data (fr) et src/data/en (en).

export type Lang = "fr" | "en";

export const ui = {
  fr: {
    skip: "Aller au contenu",
    navAccueil: "Accueil",
    navProjets: "Projets",
    navApropos: "À propos",
    navContact: "Contact",
    navAria: "Navigation principale",
    themeAria: "Changer de thème",
    menuAria: "Ouvrir le menu",
    langueAutre: "EN",
    langueAutreAria: "Read this page in English",
    email: "Email",

    // Accueil
    role: "Ingénierie microtechnique, spécialisation biomédicale",
    intro1: "Étudiant en 3e année d'ingénierie microtechnique à HEPIA (HES-SO Genève), spécialisation biomédicale.",
    intro2: "J'aime concevoir des objets complets : l'électronique, le code embarqué et les pièces imprimées en 3D, jusqu'à ce que ça fonctionne vraiment.",
    voirProjets: "Voir les projets",
    telechargerCv: "Télécharger mon CV",
    portraitAlt: "Mattéo Pozzo di Borgo dans un atelier d'électronique",
    portraitTexte: "Basé à Lausanne, je parle français, anglais, italien et allemand.",
    moiTitre: "Qui je suis",
    moiTexte: "Je m'appelle Mattéo, j'habite à Lausanne et je suis en 3e année de microtechnique à HEPIA. J'ai commencé par la biologie à Liège, avant de comprendre que ce qui me plaisait vraiment, c'était de construire.",
    moiLien: "En savoir plus sur moi",
    presentation: [
      "Je m'appelle Mattéo, j'habite à Lausanne et je suis en 3e année de Bachelor en microtechnique à HEPIA, spécialisation biomédicale.",
      "Mon parcours n'est pas tout droit : j'ai commencé par la biologie à l'Université de Liège, avant de comprendre que ce qui me plaisait vraiment, c'était de construire. Après une année préparatoire au CPNV, je suis entré à HEPIA. Cette double culture biologie et ingénierie me pousse vers les dispositifs biomédicaux, comme l'incubateur transportable de cellules.",
      "En dehors des cours, je construis des choses : des drones FPV, des pièces imprimées en 3D, un serveur à la maison, un compteur de bouteilles pour le domaine de mon frère. Le reste du temps, je fais de l'escalade, du volley ou du ski de randonnée, ou je cherche des champignons.",
    ],
    glacierAlt: "Mattéo souriant devant un glacier, à côté d'une cabane de montagne",
    glacierLegende: "Là-haut, la batterie du téléphone tient plus longtemps que celle de mes drones.",
    horsTitre: "En dehors de l'atelier",
    photos: [
      { src: "/about/labo.jpg", alt: "Mattéo sous une hotte de laboratoire, une pipette à la main", legende: "Sous la hotte : un peu de biologie entre deux circuits." },
      { src: "/about/liege.jpg", alt: "Mattéo qui sourit derrière un verre de Jupiler", legende: "Mes années à Liège m'ont laissé la biologie… et un faible pour la Jupiler." },
      { src: "/about/chocolatier.jpg", alt: "Mattéo en tenue de chocolatier Lindt derrière un stand de dégustation", legende: "Animateur Lindt d'un jour : la toque était fournie." },
      { src: "/about/ski.jpg", alt: "Mattéo en tenue de ski sous la neige, masque sur les yeux", legende: "Visibilité nulle, moral intact." },
    ],
    domainesAria: "Domaines",
    projetsPhares: "Projets phares",
    touteChronologie: "Toute la chronologie",
    decouvrir: "Découvrir le projet",
    dessinAria: "Plan du châssis de mon tinywhoop avec ses cotes : 50 mm entre deux moteurs voisins, 70,7 mm en diagonale, 104 mm hors tout",
    dessinLegendeAvant: "Châssis de mon",
    dessinLien: "tinywhoop",
    dessinLegendeApres: ", conçu entièrement sur Inventor et imprimé en PLA. Cotes en millimètres, tirées du fichier STL.",
    cote1: "50,0", cote2: "70,7", cote3: "104,2",

    // Projets
    projetsTitre: "Projets",
    projetsLead: "Mon parcours en projets, d'aujourd'hui à mes débuts — personnels et académiques, de l'idée au prototype fonctionnel.",
    projetsDescription: "Tous les projets de Mattéo Pozzo di Borgo, dans l'ordre chronologique — électronique, systèmes embarqués, impression 3D, automatisme.",
    legendeEcole: "Projet d'école (HEPIA, CPNV)",
    legendePerso: "Projet perso",
    colonneEcole: "Projets d'école",
    colonnePerso: "Projets perso",
    tlAria: "Chronologie des projets",
    aujourdhui: "Aujourd'hui",
    toujoursEnCours: "Toujours en cours :",
    avant: "Avant",
    voirProjetAria: "Voir le projet :",
    enCours: "En cours",
    typePerso: "Projet perso",
    typeEcole: (ecole: string) => `Projet ${ecole}`,

    // Page projet
    retourChronologie: "Chronologie des projets",
    periode: "Période", cadre: "Cadre", equipe: "Équipe", roleProjet: "Rôle", budget: "Budget", statut: "Statut",
    pointsCles: "Points clés",
    galerie: "Galerie",
    surCettePage: "Sur cette page",
    sommaireAria: "Sommaire du projet",
    projetsLies: "Projets liés",
    autresProjets: "Autres projets",
    plusRecent: "Plus récent",
    plusAncien: "Plus ancien",
    agrandir: "Agrandir :",
    vueAgrandie: "Vue agrandie",
    fermer: "Fermer",
    imagePrec: "Image précédente",
    imageSuiv: "Image suivante",
    ouvrirDepot: "Ouvrir le dépôt",
    ouvrir: "Ouvrir",

    // À propos
    aproposTitre: "À propos",
    commentJeTravaille: "Comment je travaille",
    infos: "Infos",
    lieu: "Lieu",
    langues: "Langues",
    centresInteret: "Centres d'intérêt",
    experiences: "Expériences",
    formation: "Formation",
    competences: "Compétences",
    retrouvezMoi: "Retrouvez-moi",
    ectsValides: "ECTS validés",
    voirDetail: "Voir le détail",
    deuxPoints: " :",

    // Contact
    contactLead: "N'hésitez pas à me contacter par email ou via LinkedIn.",
    contactDescription: "Contacter",
    cvLabel: "CV",
    cvValeur: "Télécharger (PDF)",
    baseA: "Basé à",
    etudesGeneve: "études à Genève",

    // 404
    introuvable: "Page introuvable",
    introuvableTexte: "Cette page n'existe pas, ou elle a changé d'adresse.",
    retourAccueil: "Retour à l'accueil",
  },

  en: {
    skip: "Skip to content",
    navAccueil: "Home",
    navProjets: "Projects",
    navApropos: "About",
    navContact: "Contact",
    navAria: "Main navigation",
    themeAria: "Switch theme",
    menuAria: "Open the menu",
    langueAutre: "FR",
    langueAutreAria: "Lire cette page en français",
    email: "Email",

    role: "Microengineering, biomedical specialisation",
    intro1: "Third-year microengineering student at HEPIA (HES-SO Geneva), specialising in biomedical engineering.",
    intro2: "I like designing complete objects: the electronics, the embedded code and the 3D-printed parts, until they really work.",
    voirProjets: "See the projects",
    telechargerCv: "Download my CV",
    portraitAlt: "Mattéo Pozzo di Borgo in an electronics workshop",
    portraitTexte: "Based in Lausanne, I speak French, English, Italian and German.",
    moiTitre: "Who I am",
    moiTexte: "I'm Mattéo, I live in Lausanne and I'm in my third year of microengineering at HEPIA. I started out in biology in Liège, before realising that what I really enjoyed was building things.",
    moiLien: "More about me",
    presentation: [
      "I'm Mattéo, I live in Lausanne and I'm a third-year Bachelor's student in microengineering at HEPIA, specialising in biomedical engineering.",
      "My path hasn't been a straight line: I started with biology at the University of Liège, before realising that what I really enjoyed was building things. After a preparatory year at CPNV, I joined HEPIA. This mix of biology and engineering draws me towards biomedical devices, like the portable cell incubator.",
      "Outside my studies, I build things: FPV drones, 3D-printed parts, a home server, a bottle counter for my brother's wine estate. The rest of the time I go climbing, play volleyball or go ski touring, or I'm out looking for mushrooms.",
    ],
    glacierAlt: "Mattéo smiling in front of a glacier, next to a mountain hut",
    glacierLegende: "Up there, my phone battery lasts longer than my drones' do.",
    horsTitre: "Away from the workbench",
    photos: [
      { src: "/about/labo.jpg", alt: "Mattéo at a lab safety cabinet, pipette in hand", legende: "Under the hood: a bit of biology between two circuits." },
      { src: "/about/liege.jpg", alt: "Mattéo smiling behind a glass of Jupiler", legende: "My years in Liège left me with biology… and a soft spot for Jupiler." },
      { src: "/about/chocolatier.jpg", alt: "Mattéo dressed as a Lindt chocolatier behind a tasting stand", legende: "Lindt promoter for a day: the chef's hat came with the job." },
      { src: "/about/ski.jpg", alt: "Mattéo in ski gear in the snow, goggles on", legende: "Zero visibility, spirits intact." },
    ],
    domainesAria: "Areas",
    projetsPhares: "Featured projects",
    touteChronologie: "Full timeline",
    decouvrir: "Discover the project",
    dessinAria: "Drawing of my tinywhoop's frame with its dimensions: 50 mm between two adjacent motors, 70.7 mm diagonally, 104 mm overall",
    dessinLegendeAvant: "Frame of my",
    dessinLien: "tinywhoop",
    dessinLegendeApres: ", designed from scratch in Inventor and printed in PLA. Dimensions in millimetres, taken from the STL file.",
    cote1: "50.0", cote2: "70.7", cote3: "104.2",

    projetsTitre: "Projects",
    projetsLead: "My path through projects, from today back to the start — personal and academic, from the first idea to a working prototype.",
    projetsDescription: "All of Mattéo Pozzo di Borgo's projects in chronological order — electronics, embedded systems, 3D printing, automation.",
    legendeEcole: "School project (HEPIA, CPNV)",
    legendePerso: "Personal project",
    colonneEcole: "School projects",
    colonnePerso: "Personal projects",
    tlAria: "Project timeline",
    aujourdhui: "Today",
    toujoursEnCours: "Still ongoing:",
    avant: "Before",
    voirProjetAria: "See the project:",
    enCours: "Ongoing",
    typePerso: "Personal project",
    typeEcole: (ecole: string) => `${ecole} project`,

    retourChronologie: "Project timeline",
    periode: "Period", cadre: "Context", equipe: "Team", roleProjet: "Role", budget: "Budget", statut: "Status",
    pointsCles: "Key points",
    galerie: "Gallery",
    surCettePage: "On this page",
    sommaireAria: "Project contents",
    projetsLies: "Related projects",
    autresProjets: "Other projects",
    plusRecent: "More recent",
    plusAncien: "Older",
    agrandir: "Enlarge:",
    vueAgrandie: "Enlarged view",
    fermer: "Close",
    imagePrec: "Previous image",
    imageSuiv: "Next image",
    ouvrirDepot: "Open the repository",
    ouvrir: "Open",

    aproposTitre: "About",
    commentJeTravaille: "How I work",
    infos: "Details",
    lieu: "Location",
    langues: "Languages",
    centresInteret: "Interests",
    experiences: "Experience",
    formation: "Education",
    competences: "Skills",
    retrouvezMoi: "Find me online",
    ectsValides: "ECTS credits earned",
    voirDetail: "See the details",
    deuxPoints: ":",

    contactLead: "Feel free to get in touch by email or on LinkedIn.",
    contactDescription: "Contact",
    cvLabel: "CV",
    cvValeur: "Download (PDF)",
    baseA: "Based in",
    etudesGeneve: "studying in Geneva",

    introuvable: "Page not found",
    introuvableTexte: "This page doesn't exist, or it has moved.",
    retourAccueil: "Back to the home page",
  },
} as const;

export type Textes = (typeof ui)["fr"];
export const t = (lang: Lang) => ui[lang] as unknown as Textes;

/** Langue d'une adresse : /en/... = anglais */
export const langDe = (pathname: string): Lang => (pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr");

/** Adresse d'une page dans une langue, à partir de son chemin français (ex. "/projects") */
export const lien = (lang: Lang, chemin: string) => {
  if (lang === "fr") return chemin;
  return chemin === "/" ? "/en/" : `/en${chemin}`;
};

/** Même page dans l'autre langue */
export const autreLangue = (pathname: string): string => {
  if (langDe(pathname) === "en") {
    const fr = pathname.replace(/^\/en/, "");
    return fr === "" ? "/" : fr;
  }
  return pathname === "/" ? "/en/" : `/en${pathname}`;
};
