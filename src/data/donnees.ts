// Accès aux données selon la langue (fr = src/data, en = src/data/en)
import type { Lang } from "../i18n/ui";
import { projects as projetsFr, type Project } from "./projects";
import { projects as projetsEn } from "./en/projects";
import { site as siteFr } from "./site";
import { site as siteEn } from "./en/site";
import * as tlFr from "./timeline";
import * as tlEn from "./en/timeline";

const cle = (p: Project) => `${p.debut}|${p.fin ?? p.debut}`;

export const projetsDe = (lang: Lang): Project[] => (lang === "en" ? projetsEn : projetsFr);
/** Du plus ancien au plus récent */
export const chronologiques = (lang: Lang) => [...projetsDe(lang)].sort((a, b) => cle(a).localeCompare(cle(b)));
/** Du plus récent au plus ancien */
export const recents = (lang: Lang) => chronologiques(lang).reverse();
export const projetDe = (lang: Lang, slug: string) => projetsDe(lang).find((p) => p.slug === slug);
export const siteDe = (lang: Lang) => (lang === "en" ? siteEn : siteFr) as typeof siteFr;
export const timelineDe = (lang: Lang) => (lang === "en" ? tlEn : tlFr);
