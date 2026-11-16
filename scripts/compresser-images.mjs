// Compresse les photos du site APRÈS la construction (dossier dist/ uniquement).
// Les fichiers d'origine dans public/ ne sont jamais modifiés.
// Lancé automatiquement par « npm run build » (donc à chaque mise en ligne).
//
// 1. Réduit chaque photo à 1600 px de large maximum et la recompresse.
// 2. Crée des versions WebP plus légères (480 px, 960 px et pleine taille)
//    pour les photos de projets et la photo de profil : le navigateur choisit
//    automatiquement la plus petite suffisante pour l'écran du visiteur.

import { readdir, stat, writeFile } from "node:fs/promises";
import { join, extname, sep } from "node:path";
import sharp from "sharp";

const DOSSIER = "dist";
const LARGEUR_MAX = 1600;      // px — identique à src/lib/images.ts
const LARGEURS = [480, 960];   // px — identique à src/lib/images.ts
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);

async function* fichiers(dossier) {
  for (const nom of await readdir(dossier)) {
    const chemin = join(dossier, nom);
    const infos = await stat(chemin);
    if (infos.isDirectory()) yield* fichiers(chemin);
    else yield chemin;
  }
}

/** Mêmes images que estOptimisable() dans src/lib/images.ts */
const estOptimisable = (chemin) =>
  (chemin.startsWith(join(DOSSIER, "projects") + sep) && !chemin.includes("-poster.")) ||
  chemin === join(DOSSIER, "me.jpg");

let total = 0, gagne = 0, webp = 0;

for await (const chemin of fichiers(DOSSIER)) {
  const ext = extname(chemin).toLowerCase();
  if (!EXTENSIONS.has(ext)) continue;
  // Les icônes et l'image d'aperçu sont déjà optimisées
  if (/(favicon|apple-touch-icon|og-image)/.test(chemin)) continue;

  try {
    // ── 1. Compression de l'image d'origine ──
    const avant = (await stat(chemin)).size;
    let image = sharp(chemin).rotate().resize({ width: LARGEUR_MAX, withoutEnlargement: true });
    image = ext === ".png"
      ? image.png({ compressionLevel: 9, palette: true })
      : image.jpeg({ quality: 82, mozjpeg: true });
    const sortie = await image.toBuffer();
    if (sortie.length < avant) {
      await writeFile(chemin, sortie);
      gagne += avant - sortie.length;
    }
    total++;

    // ── 2. Versions WebP ──
    if (estOptimisable(chemin)) {
      const largeur = (await sharp(chemin).rotate().metadata()).width ?? 0;
      const base = chemin.slice(0, -ext.length);
      for (const w of LARGEURS.filter((l) => l < largeur)) {
        await sharp(chemin).rotate().resize({ width: w }).webp({ quality: 78 }).toFile(`${base}-${w}.webp`);
        webp++;
      }
      await sharp(chemin).rotate().webp({ quality: 80 }).toFile(`${base}.webp`);
      webp++;
    }
  } catch (e) {
    console.warn(`Image ignorée (${chemin}) : ${e.message}`);
  }
}

console.log(
  `Images traitées : ${total} · gain : ${(gagne / 1024 / 1024).toFixed(1)} Mo · versions WebP créées : ${webp}`
);
