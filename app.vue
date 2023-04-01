<template>    
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>    
    <div id="teleported"></div>
</template>

<script setup>
const generalConfigStore = useGeneralConfigStore()
const locale = useI18n()
generalConfigStore.i18n = locale.locale
</script>