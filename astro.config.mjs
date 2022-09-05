import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"

import react from "@astrojs/react"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"

// https://astro.build/config
export default defineConfig({
  site: "https://tunkshif.one",
  integrations: [react(), tailwind()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    extendDefaultPlugins: true,
    syntaxHighlight: "prism"
  }
})
