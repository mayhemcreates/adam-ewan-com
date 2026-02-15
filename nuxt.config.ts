// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/image"],
  image: {
    quality: 80,
    format: ["webp", "avif"],
  },
  app: {
    head: {
      meta: [{ name: "viewport", content: "width=device-width, initial-scale=1.0" }],
    },
  },
});
