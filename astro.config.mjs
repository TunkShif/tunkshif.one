import markdoc from "@astrojs/markdoc"
import prefetch from "@astrojs/prefetch"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"
import keystatic from "@keystatic/astro"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic(), tailwind(), prefetch()],
  output: "hybrid",
  adapter: vercel()
})
