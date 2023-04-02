<template>
    <Header></Header>    
    <NuxtPage/>    
    <Footer/>    
    <div class="fixed [padding-right:inherit] inher bottom-2.5 right-2.5 flex flex-col items-center z-30 justify-center text-white gap-[5px]">
        <NuxtLink to="/" class="flex hover:scale-125 transition-transform duration-500 ease-linear items-center justify-center aspect-square w-11 rounded-full bg-[#2AABEE]">        
            <IconsTg/>
        </NuxtLink>
        <NuxtLink to="/" class="flex hover:scale-125 transition-transform duration-500 ease-linear items-center justify-center aspect-square w-11 rounded-full bg-[#60D669]">
           <IconsWhatsapp/>
        </NuxtLink>
        <NuxtLink to="/" class="flex hover:scale-125 transition-transform duration-500 ease-linear items-center text-center text-xs font-medium box-content bg-clip-content lg:border-[rgba(33,200,193,0.23)] lg:border-[9px] uppercase justify-center aspect-square w-11 lg:w-24 rounded-full lg:mt-[5px] bg-fred lg:bg-fgreen">
            <span class="max-lg:hidden">{{generalConfigStore.value.static_info.global_words.all_excursion}}</span> <img src="@/assets/imgs/icons/phone.svg" alt="" class="lg:hidden">           
        </NuxtLink>
    </div>
</template>

<script setup>    
    const generalConfigStore = useGeneralConfigStore()
</script>
