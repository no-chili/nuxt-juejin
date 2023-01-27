import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  imports: {
    autoImport: true,
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/styles/global.css'],
  serverHandlers: [{ route: 'api', middleware: true, handler: '~/server/index.ts' }],
})
