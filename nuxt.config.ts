// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['~/assets/css/fonts.css', '~/assets/css/main.css'],
    modules: ['nuxt-swiper'],
    swiper: {      
      modules: ['navigation', 'pagination', 'autoplay']
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    build: {
      transpile: ['@fawmi/vue-google-maps','@vuepic/vue-datepicker']
    },
  })
