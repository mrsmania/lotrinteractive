import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { characterImages } from "./plugins/character-images.ts";

// Deployed as a GitHub Pages project site at /lotrinteractive/.
// Every asset URL has to carry that prefix, so `base` is set here and
// read back at runtime through import.meta.env.BASE_URL.
export default defineConfig({
  base: "/lotrinteractive/",
  plugins: [react(), characterImages()],
});
