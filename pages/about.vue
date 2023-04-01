<template>
    <main class="grid-container overflow-hidden">
        <div class="flex max-lg:flex-col gap-[30px] justify-between mt-[30px] lg:mt-[70px]">
            <div class="flex flex-col justify-between flex-1">
                <h1 class="text-[1.75rem] lg:text-4xl leading-[1.2] font-bold text-fblack mb-[30px]">{{about_info.content.title}}</h1>
                <img src="@/assets/imgs/img5.png" class="lg:max-w-[387px] object-cover max-h-[378px] w-full rounded-[5px]" alt="">
            </div>
            <div class="flex-[1.45] space-y-5">
                <p class="lg:text-xl font-medium lg:leading-[1.4] leading-[1.4] text-fblack">{{about_info.content.text_1}}</p>
                <p class="text-sm  leading-[1.4] text-ftext3">{{about_info.content.text_2}}</p>
            </div>
        </div>
        <Team class="pt-20 lg:pt-[150px]" :teams_info="about_info.teams.data" :title="about_info.content.title_team"/>
    </main>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()

const locale = useI18n()
      
const { data:about_info } = await useFetch(`${runtimeConfig.public.apiBase}/api/search/page`,{
    headers:{Locale:locale.value},
    query:{key:'about'}
})
</script>
