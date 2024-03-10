import react from "@astrojs/react"
import keystatic from "@keystatic/astro"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  integrations: [react(), keystatic()],
  output: "hybrid"
})
