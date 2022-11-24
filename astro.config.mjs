import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import solidJs from "@astrojs/solid-js"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"

// https://astro.build/config
export default defineConfig({
  site: "https://tunkshif.one",
  integrations: [tailwind(), sitemap(), mdx(), solidJs()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    extendDefaultPlugins: true,
    syntaxHighlight: "prism"
  },
  vite: {
    ssr: {
      noExternal: ["solid-headless", "solid-use"]
    }
  }
})
