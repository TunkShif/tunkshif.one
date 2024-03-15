import cloudflare from "@astrojs/cloudflare"
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import keystatic from "@keystatic/astro"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), keystatic()],
  output: "hybrid",
  prefetch: true,
  markdown: {
    shikiConfig: {
      themes: {
        light: "catppuccin-macchiato",
        dark: "catppuccin-mocha"
      }
    }
  },
  adapter: cloudflare({
    imageService: "compile"
  })
})

