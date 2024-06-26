import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  output: "static",
  compressHTML: false,
  integrations: [tailwind()],
  base: "/preview",
})
