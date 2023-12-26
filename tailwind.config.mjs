import { getIconCollections, iconsPlugin } from "@egoist/tailwindcss-icons"
import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
        mono: ["DM Mono", ...defaultTheme.fontFamily.mono]
      },
      textColor: {
        primary: "var(--text-color-primary)",
        secondary: "var(--text-color-secondary)"
      },
      backgroundColor: {
        primary: "var(--surface-color-primary)",
        secondary: "var(--surface-color-secondary)",
        border: {
          primary: "var(--border-color-primary)"
        }
      },
      borderColor: {
        primary: "var(--border-color-primary)"
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-code": theme("colors.gray.700"),
            blockquote: {
              fontWeight: 400,
              fontStyle: "normal"
            },
            "blockquote p:first-of-type::before": {
              content: ""
            },
            "blockquote p:last-of-type::after": {
              content: ""
            },
            code: {
              paddingLeft: theme("spacing.1"),
              paddingRight: theme("spacing.1"),
              fontWeight: 400,
              borderRadius: theme("borderRadius.sm"),
              backgroundColor: theme("colors.gray.200")
            },
            "code::before": {
              content: ""
            },
            "code::after": {
              content: ""
            },
            pre: {
              backgroundColor: "rgb(30,41,59)",
              borderRadius: theme("borderRadius.md"),
              boxShadow: theme("boxShadow.lg")
            },
            "pre > code": {
              backgroundColor: "inherit !important"
            },
            h1: {
              fontSize: theme("fontSize.3xl")
            },
            h2: {
              marginTop: 0
            },
            h3: {
              marginTop: 0
            },
            img: {
              borderRadius: theme("borderRadius.md"),
              border: "solid 1px rgb(225 225 225 / 10%)"
            }
          }
        },
        invert: {
          css: {
            "--tw-prose-code": "rgb(171,178,191)",
            pre: {
              border: "solid 1px rgb(225 225 225 / 10%)"
            },
            code: {
              backgroundColor: "rgb(30,41,59)"
            }
          }
        }
      })
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    iconsPlugin({
      collections: getIconCollections(["lucide", "nonicons", "simple-icons"])
    })
  ]
}
