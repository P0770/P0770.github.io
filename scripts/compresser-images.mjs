// Compresse les photos du site APRÈS la construction (dossier dist/ uniquement).
// Les fichiers d'origine dans public/ ne sont jamais modifiés.
// Lancé automatiquement par « npm run build » (donc à chaque mise en ligne).

import { readdir, stat, writeFile } from "node:fs/promises";
import { join, extname } from "node:path";
import sharp from "sharp";

const DOSSIER = "dist";
const LARGEUR_MAX = 1600; // px
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);

async function* fichiers(dossier) {
  for (const nom of await readdir(dossier)) {
    const chemin = join(dossier, nom);
    const infos = await stat(chemin);
    if (infos.isDirectory()) yield* fichiers(chemin);
    else yield chemin;
  }
}

let total = 0, gagne = 0;

for await (const chemin of fichiers(DOSSIER)) {
  const ext = extname(chemin).toLowerCase();
  if (!EXTENSIONS.has(ext)) continue;
  // Les icônes et l'image d'aperçu sont déjà optimisées
  if (/(favicon|apple-touch-icon|og-image)/.test(chemin)) continue;

  try {
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
  } catch (e) {
    console.warn(`Image ignorée (${chemin}) : ${e.message}`);
  }
}

console.log(`Images traitées : ${total} · gain : ${(gagne / 1024 / 1024).toFixed(1)} Mo`);
