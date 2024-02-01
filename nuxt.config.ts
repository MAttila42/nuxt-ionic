export default defineNuxtConfig({
  devtools: { enabled: false },
  features: {
    inlineStyles: false,
  },
  ionic: {
    css: {
      utilities: true,
    },
  },
  modules: ['@nuxtjs/ionic', '@unocss/nuxt'],
  ssr: false,
})
