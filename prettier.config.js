/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  singleQuote: true,
  endOfLine: 'lf',
  tabWidth: 2,
  jsxBracketSameLine: true,
  trailingComma: 'es5',
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js',
  printWidth: 120,
  proseWrap: 'always',
  singleQuote: true,
}
