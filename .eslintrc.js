module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:tailwindcss/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier', 'tailwindcss'],
  rules: {
    'prettier/prettier': 1,
    'vue/multi-word-component-names': 0,
  },
}
