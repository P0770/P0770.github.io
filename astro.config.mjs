import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://p0770.github.io",
  // Génère automatiquement /sitemap-index.xml à chaque mise en ligne (référencement Google)
  integrations: [sitemap()],
});
