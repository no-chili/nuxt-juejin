module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'plugin:prettier/recommended', 'prettier', 'plugin:tailwindcss/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier', 'tailwindcss'],
  rules: {
    'prettier/prettier': 1,
    'vue/multi-word-component-names': 0,
  },
}
