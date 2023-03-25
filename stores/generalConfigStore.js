import { useRuntimeConfig } from '../node_modules/nuxt/dist/app'

export const useGeneralConfigStore = defineStore('generalConfigStore', {
  state: () => ({ 
    value: {}, 
    
  }),
  actions: {
    async getGeneralConfig() {
      const runtimeConfig = useRuntimeConfig()
      const { data } = await useFetch(`${runtimeConfig.public.apiBase}/api/general/config`)     
      this.value = {...data.value}
    },
  },
})