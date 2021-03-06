module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        azure: "#319fe3",
        smoke: "#f0f3f5"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
}
