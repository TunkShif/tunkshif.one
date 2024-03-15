/**
 * @type {import('prettier').Options}
 */
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  semi: false,
  useTabs: false,
  singleQuote: false,
  trailingComma: "none",
  plugins: ["prettier-plugin-astro", "@trivago/prettier-plugin-sort-imports"]
}
