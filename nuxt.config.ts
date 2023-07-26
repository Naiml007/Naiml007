// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/global.css"],
  build: {},
  app: { pageTransition: { name: "page", mode: "out-in" } },
  tailwindcss: { exposeConfig: true },
});
