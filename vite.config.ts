import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

// ThreeUI's landing pages load their document from a root-absolute URL
// ("/landing-pages/kage.html"). GitHub Pages serves this project under
// /home/, so at build time the URL is prefixed with the configured base.
function threeuiLandingPageBase(): Plugin {
  let base = "/";
  return {
    name: "threeui-landing-page-base",
    apply: "build",
    configResolved(config) {
      base = config.base;
    },
    transform(code, id) {
      if (!id.includes("@designcodeio/threeui") || !id.endsWith("LandingPages.js")) return;
      return { code: code.replaceAll('"/landing-pages/', JSON.stringify(base + "landing-pages/").slice(0, -1)), map: null };
    },
  };
}

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/home/" : "/",
  plugins: [react(), threeuiLandingPageBase()],
}));
