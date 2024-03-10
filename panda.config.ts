import { defineConfig } from "@pandacss/dev"
import { createPreset } from "@park-ui/panda-preset"
import createTypographyPreset from "pandacss-preset-typography"

export default defineConfig({
  preflight: true,
  jsxFramework: "react",
  presets: [
    "@pandacss/preset-base",
    createTypographyPreset(),
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
      semanticTokens: {
        colors: {
          prose: {
            body: {
              value: "{colors.slate.12}"
            },
            heading: {
              value: "{colors.slate.12}"
            },
            lead: {
              value: "{colors.slate.12}"
            },
            link: {
              value: "{colors.indigo.11}"
            },
            bold: {
              value: "{colors.slate.12}"
            },
            counter: {
              value: "{colors.slate.11}"
            },
            bullet: {
              value: "{colors.slate.11}"
            },
            hrBorder: {
              value: "{colors.slate.6}"
            },
            quote: {
              value: "{colors.slate.11}"
            },
            quoteBorder: {
              value: "{colors.slate.6}"
            },
            caption: {
              value: "{colors.slate.11}"
            },
            kbd: {
              value: "{colors.slate.11}"
            },
            kbdShadow: {
              value: "0 0 0"
            },
            code: {
              value: "{colors.slate.11}"
            },
            preCode: {
              value: "{colors.slate.12}"
            },
            preBg: {
              value: "{colors.slate.2}"
            },
            thBorder: {
              value: "{colors.slate.6}"
            },
            tdBorder: {
              value: "{colors.slate.6}"
            }
          }
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
