

export default defineNuxtRouteMiddleware( async (to, from) => {
    
    const generalConfigStore = useGeneralConfigStore()   

    if (process.server){
        await generalConfigStore.getGeneralConfig()
    }
    for(const redirect of generalConfigStore.value.redirect_page){        
        if ( to.path === `/${redirect.old_slug}`) { 
            return navigateTo(`/${redirect.new_slug}`, { redirectCode: redirect.type });
        } 
    }      
});