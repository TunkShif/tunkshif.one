module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "Noto Sans CJK SC", "ui-sans-serif", "system-ui"],
      mono: [
        "Fira Code",
        "Roboto Mono",
        "Droid Sans Mono",
        "ui-monospace",
        "SFMono-Regular"
      ]
    },
    extend: {
      colors: {
        azure: "#319fe3",
        smoke: "#f0f3f5"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
}
