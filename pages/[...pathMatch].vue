<template>
    <template v-if="data.type == 'product'">
        <PagesRegularE v-if="data.data.type_id == 11" :product="data" /> 
        <PagesIndividualE v-else-if="data.data.type_id == 12" :product="data.data" /> 
        <PagesTour v-else-if="data.data.type_id>20 && data.data.type_id<24" :tour="data.data"/> 
        <PagesAdditionalServices v-else-if="data.data.type_id == 31" :product="data.data" /> 
    </template>    
    <PagesHotel v-else-if="data.type == 'hotel'" :hotel="data.data" />
    <PagesCatalog v-else-if="data.type == 'page'" :catalogItems="data.data.info_products.data"/> 
</template>

<script setup>
    const route = useRoute()
    const runtimeConfig = useRuntimeConfig()
    const locale = useI18n()

    /* получение информации о запршиваемой странице из api */
    const { data, error } = await useFetch(`${runtimeConfig.public.apiBase}/api/search/slugs`,{
        headers:{Locale:locale.value},
        query:{slug:route.params.pathMatch.join("/")}
    })
    if(error.value) throw createError({statusCode:error.value.statusCode, statusMessage:error.value.statusMessage, fatal: true})
</script>

