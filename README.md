# Portfolio — Mattéo Pozzo di Borgo

Site portfolio généré avec [Astro](https://astro.build), déployé sur GitHub Pages.

## Démarrer en local

```bash
npm install
npm run dev
```

## Modifier le contenu

| Quoi | Où |
|------|-----|
| Infos personnelles (nom, bio, expériences, compétences) | `src/data/site.ts` |
| Projets (titre, texte, photos) | `src/data/projects.ts` |
| Photo de profil | `public/me.jpg` (carré, 800 × 800 px conseillé) |
| Projets affichés sur l'accueil | `vedette: true` dans `src/data/projects.ts` |
| Photos d'un projet | `public/projects/<nom-du-projet>/` |

### Ajouter un projet

1. Copier un bloc existant dans `src/data/projects.ts`
2. Changer le `slug` (URL du projet), le titre, l'année, les tags
3. Ajouter les photos dans `public/projects/<slug>/`
4. Référencer les photos dans `cover` et `gallery`

### Photo de profil

Placer votre photo dans `public/` sous le nom `me.jpg`, recadrée en carré
(800 × 800 px : l'image est affichée jusqu'à 380 px, donc 760 px sur un écran Retina).

### Vidéos

Pour chaque vidéo `nom.mp4`, déposer à côté une image d'aperçu `nom-poster.jpg`.
La vidéo n'est alors téléchargée qu'au clic sur Lecture (page plus rapide).
Sans aperçu, la vidéo fonctionne quand même (préchargement partiel).

### Images

Rien à faire : à chaque mise en ligne, le site crée automatiquement des versions
WebP légères (480 px, 960 px, pleine taille) des photos de `public/projects/` et de `me.jpg`.

### Chercher les textes à compléter

Rechercher `À compléter` dans `src/data/projects.ts` pour trouver
tous les passages à remplacer par vos propres informations.

## Déploiement sur GitHub Pages

1. Créer un dépôt nommé `P0770.github.io` sur GitHub
2. Pousser ce dossier sur la branche `main`
3. `Settings → Pages → Source : GitHub Actions`
4. Le site se reconstruit automatiquement à chaque commit
5. Garder `package-lock.json` dans le dépôt : il fixe les versions exactes des dépendances (`npm ci`)
