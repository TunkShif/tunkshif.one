import { defineConfig } from "@pandacss/dev"
import { createPreset } from "@park-ui/panda-preset"

export default defineConfig({
  preflight: true,
  jsxFramework: "react",
  presets: [
    "@pandacss/preset-base",
    createPreset({
      accentColor: "indigo",
      grayColor: "slate",
      borderRadius: "sm"
    })
  ],
  include: ["./src/**/*.{ts,tsx,js,jsx,astro}"],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        fonts: {
          "fig-tree": { value: "var(--font-fig-tree), sans-serif" },
          "dm-mono": { value: "var(--font-dm-mono), monospace" }
        }
      },
      recipes: {
        icon: {
          jsx: ["Icon", "PresetIcon"]
        }
      }
    }
  },
  outdir: "styled-system"
})
