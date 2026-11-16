import type { Project } from "../data/projects";
import { t, type Lang } from "../i18n/ui";

export type TypeProjet = {
  kind: "perso" | "ecole";
  /** Libellé court affiché sur les cartes */
  label: string;
};

/** Projet personnel ou académique, déduit du champ « cadre ». */
export function typeProjet(p: Project, lang: Lang = "fr"): TypeProjet {
  const c = p.cadre.toLowerCase();
  const T = t(lang);
  if (c.includes("personnel") || c.includes("personal")) return { kind: "perso", label: T.typePerso };
  const ecole = c.includes("hepia") ? "HEPIA" : c.includes("cpnv") ? "CPNV" : lang === "en" ? "School" : "École";
  return { kind: "ecole", label: T.typeEcole(ecole) };
}
