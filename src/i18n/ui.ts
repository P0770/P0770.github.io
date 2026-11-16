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
    portraitAlt: "Mattéo Pozzo di Borgo à son poste de soudure",
    portraitTexte: "Basé à Lausanne, je parle français, anglais, italien et allemand.",
    domainesAria: "Domaines",
    projetsPhares: "Projets phares",
    touteChronologie: "Toute la chronologie",
    decouvrir: "Découvrir le projet",
    dessinAria: "Plan du châssis du Matrix HD avec ses cotes : 50 mm entre deux moteurs voisins, 70,7 mm en diagonale, 104 mm hors tout",
    dessinLegendeAvant: "Châssis du",
    dessinLegendeApres: ", dessiné sur Inventor et imprimé en PLA. Cotes en millimètres, tirées du fichier STL.",
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
    portraitAlt: "Mattéo Pozzo di Borgo at his soldering station",
    portraitTexte: "Based in Lausanne, I speak French, English, Italian and German.",
    domainesAria: "Areas",
    projetsPhares: "Featured projects",
    touteChronologie: "Full timeline",
    decouvrir: "Discover the project",
    dessinAria: "Drawing of the Matrix HD frame with its dimensions: 50 mm between two adjacent motors, 70.7 mm diagonally, 104 mm overall",
    dessinLegendeAvant: "Frame of the",
    dessinLegendeApres: ", modelled in Inventor and printed in PLA. Dimensions in millimetres, taken from the STL file.",
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
