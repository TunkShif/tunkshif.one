/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter", "Noto Sans", "Droid Sans", "ui-sans-serif", "system-ui"],
      mono: ["Fira Code", "Source Code Pro", "ui-monospace", "SFMono-Regular"],
      display: ["Outfit"]
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "blockquote p:first-of-type::before": {
              content: ""
            },
            "blockquote p:last-of-type::after": {
              content: ""
            },
            "code::before": {
              content: ""
            },
            "code::after": {
              content: ""
            },
            "code:not([class])": {
              padding: "0 0.125rem"
            }
          }
        }
      }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-radix")()]
}
