import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://tunkshif.one",
  integrations: [react(), tailwind(), sitemap(), mdx()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    extendDefaultPlugins: true,
    syntaxHighlight: "prism"
  }
});