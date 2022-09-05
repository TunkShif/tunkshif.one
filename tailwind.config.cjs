/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter", "Noto Sans", "Droid Sans", "ui-sans-serif", "system-ui"],
      mono: [
        "Fira Code",
        "Source Code Pro",
        "ui-monospace",
        "SFMono-Regular"
      ],
      display: ["Outfit"]
    },
    extend: {}
  },
  plugins: [require("@tailwindcss/typography")]
}
