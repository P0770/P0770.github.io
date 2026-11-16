// English version of src/data/timeline.ts — keep both files in sync.
import type { Jalon } from "../timeline";

export const avant =
  "La Source, Lausanne (2017 – 2018) · Bachelor's in biology, University of Liège (2018 – 2022)";

export const formationParAnnee: Record<string, string> = {
  "2023": "Engineering preparatory year · CPNV",
  "2024": "CPNV → HEPIA · MT1",
  "2025": "HEPIA · MT1 → MT2",
  "2026": "HEPIA · MT2 → MT3 · biomedical specialisation",
};

export const jalons: Jalon[] = [
  { date: "2023-08", quand: "August", titre: "Start of the engineering preparatory year", detail: "CPNV, Yverdon" },
  { date: "2024-06", quand: "June", titre: "End of the preparatory year", detail: "CPNV" },
  { date: "2024-09", quand: "Mid-Sept.", titre: "Starting at HEPIA — MT1 (1st year)", detail: "Autumn semester (S1)" },
  { date: "2025-02", quand: "Mid-Feb.", titre: "MT1 — spring semester (S2)" },
  { date: "2025-09", quand: "Mid-Sept.", titre: "MT2 (2nd year) — autumn semester (S3)" },
  { date: "2026-02", quand: "Mid-Feb.", titre: "MT2 — spring semester (S4)", detail: "Start of the biomedical specialisation" },
  { date: "2026-09", quand: "Mid-Sept.", titre: "MT3 (3rd year) — autumn semester (S5)", detail: "Biomedical specialisation" },
];
