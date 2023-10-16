const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
        mono: ["DM Mono", ...defaultTheme.fontFamily.mono]
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
            h1: {
              fontSize: theme("fontSize.3xl")
            },
            h2: {
              marginTop: 0
            },
            h3: {
              marginTop: 0
            }
          }
        },
        invert: {
          css: {
            "--tw-prose-code": "rgb(171,178,191)",
            code: {
              backgroundColor: "rgb(30,41,59)"
            }
          }
        }
      })
    }
  },
  plugins: [require("@tailwindcss/typography")]
}
