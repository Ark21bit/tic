import { useRuntimeConfig } from '../node_modules/nuxt/dist/app'

export const useGeneralConfigStore = defineStore('generalConfigStore', {
  state: () => ({ 
    value: {}, 
    i18n:null
  }),
  actions: {
    async getGeneralConfig() {
      const runtimeConfig = useRuntimeConfig()
      const { data } = await useFetch(`${runtimeConfig.public.apiBase}/api/general/config`,{
        headers:{Locale:this.i18n}
      })     
      this.value = {...data.value}
    },
  },
})