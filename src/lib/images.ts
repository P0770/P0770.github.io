// Outils pour les images du site (aucune action de ta part n'est nécessaire).
//
// Tu continues à déposer tes photos dans public/ comme avant.
// À la mise en ligne, le script scripts/compresser-images.mjs crée en plus
// des versions WebP plus légères (480 px, 960 px et pleine taille).
// Ce fichier calcule, au moment de la construction du site, quelles versions
// existent et la taille réelle de chaque photo (pour que la page ne « saute »
// pas pendant le chargement).

import { existsSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

/** Largeurs des versions réduites — DOIT rester identique au script de compression */
export const LARGEURS = [480, 960];
/** Largeur maximale après compression — DOIT rester identique au script */
export const LARGEUR_MAX = 1600;

const PUBLIC = join(process.cwd(), "public");
const cache = new Map<string, { width: number; height: number } | null>();

/** Seules ces images reçoivent des versions WebP (le script traite les mêmes) */
export const estOptimisable = (src: string) =>
  /\.(jpe?g|png)$/i.test(src) && (src.startsWith("/projects/") || src.startsWith("/about/") || src === "/me.jpg");

/** Dimensions de l'image telle qu'elle sera publiée (après réduction à 1600 px max) */
export async function dimensions(src: string) {
  if (cache.has(src)) return cache.get(src)!;
  let res: { width: number; height: number } | null = null;
  try {
    const m = await sharp(join(PUBLIC, src)).rotate().metadata();
    // Tenir compte de l'orientation EXIF (photo de téléphone tournée)
    let w = m.width ?? 0, h = m.height ?? 0;
    if ((m.orientation ?? 1) >= 5) [w, h] = [h, w];
    if (w > LARGEUR_MAX) { h = Math.round((h * LARGEUR_MAX) / w); w = LARGEUR_MAX; }
    res = w && h ? { width: w, height: h } : null;
  } catch {
    res = null;
  }
  cache.set(src, res);
  return res;
}

/** Liste « fichier.webp 480w, … » ou null si pas de versions WebP */
export async function srcsetWebp(src: string) {
  if (!import.meta.env.PROD || !estOptimisable(src)) return null; // en local (npm run dev) : image d'origine
  const d = await dimensions(src);
  if (!d) return null;
  const base = src.replace(/\.(jpe?g|png)$/i, "");
  const parts = LARGEURS.filter((w) => w < d.width).map((w) => `${base}-${w}.webp ${w}w`);
  parts.push(`${base}.webp ${d.width}w`);
  return parts.join(", ");
}

/** Image d'aperçu d'une vidéo : « video.mp4 » → « video-poster.jpg » si le fichier existe */
export function posterVideo(src: string) {
  const poster = src.replace(/\.(mp4|webm|mov)$/i, "-poster.jpg");
  return existsSync(join(PUBLIC, poster)) ? poster : undefined;
}
