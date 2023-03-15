<template>   
    <swiper :slidesPerView="'auto'" class="swiper-excursion-categories" :spaceBetween="8">
        <SwiperSlide>
            <NuxtLink to="/" class="flex text-sm shrink-0 text-fblack transition-colors duration-500 ease-linear hover:text-white  px-4 py-[9px] bg-[#F4F4F4] hover:bg-fgreen rounded-full">Автобусные туры по Казани</NuxtLink>
        </SwiperSlide>              
        <SwiperSlide>
            <NuxtLink to="/" class="flex text-sm shrink-0 text-fblack transition-colors duration-500 ease-linear hover:text-white  px-4 py-[9px] bg-[#F4F4F4] hover:bg-fgreen rounded-full">Экскурсия в храм всех религий</NuxtLink>
        </SwiperSlide>              
        <SwiperSlide>
            <NuxtLink to="/" class="flex text-sm shrink-0 text-fblack transition-colors duration-500 ease-linear hover:text-white  px-4 py-[9px] bg-[#F4F4F4] hover:bg-fgreen rounded-full">Гастрономические</NuxtLink>
        </SwiperSlide>              
        <SwiperSlide>
            <NuxtLink to="/" class="flex text-sm shrink-0 text-fblack transition-colors duration-500 ease-linear hover:text-white  px-4 py-[9px] bg-[#F4F4F4] hover:bg-fgreen rounded-full">Необычные экскурсии</NuxtLink>
        </SwiperSlide>              
        <SwiperSlide>
            <NuxtLink to="/" class="flex text-sm shrink-0 text-fblack transition-colors duration-500 ease-linear hover:text-white  px-4 py-[9px] bg-[#F4F4F4] hover:bg-fgreen rounded-full">Обзорные экскурсии по Казани</NuxtLink>
        </SwiperSlide>              
        <SwiperSlide>
            <NuxtLink to="/" class="flex text-sm shrink-0 text-fblack transition-colors duration-500 ease-linear hover:text-white  px-4 py-[9px] bg-[#F4F4F4] hover:bg-fgreen rounded-full">Однодневыне экскурсии </NuxtLink>
        </SwiperSlide>              
        <SwiperSlide>
            <NuxtLink to="/" class="flex text-sm shrink-0 text-fblack transition-colors duration-500 ease-linear hover:text-white  px-4 py-[9px] bg-[#F4F4F4] hover:bg-fgreen rounded-full">Однодневыне экскурсии </NuxtLink>
        </SwiperSlide>              
        <SwiperSlide>
            <NuxtLink to="/" class="flex text-sm shrink-0 text-fblack transition-colors duration-500 ease-linear hover:text-white  px-4 py-[9px] bg-[#F4F4F4] hover:bg-fgreen rounded-full">Однодневыне экскурсии </NuxtLink>
        </SwiperSlide>              
    </swiper>
</template>

<script setup>

</script>

<style type="text/tailwindcss">
    .swiper-excursion-categories{
        @apply py-[30px] border-b border-b-fline mb-10 max-lg:hidden overflow-visible
    }

    .swiper-excursion-categories .swiper-slide{
        @apply w-fit
    }
</style>