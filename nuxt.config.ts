// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({  
    css: ['~/assets/css/fonts.css', '~/assets/css/main.css'],
    modules: ['nuxt-swiper','@pinia/nuxt'],
    swiper: {      
      modules: ['navigation', 'pagination', 'autoplay', 'thumbs', 'effect-fade', ]
    },    
    pinia: {
      autoImports: [
        'defineStore', 
        ['defineStore', 'definePiniaStore'], 
      ],
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
    runtimeConfig: {
      public: {        
        apiBase:'https://core.kazantravel.ru',
      }
    },  
    imports: {
      dirs: ['stores'],
    },     
})