<template>   
    <div>
        <swiper :slidesPerView="'auto'" class="flex swiper-excursion-categories" :spaceBetween="8">
            <SwiperSlide v-for="n in 10" key="n">
                <NuxtLink :to="localePath('/')" class="flex text-sm shrink-0 text-fblack transition-colors duration-500 ease-linear hover:text-white  px-4 py-[9px] bg-[#F4F4F4] hover:bg-fgreen rounded-full">Автобусные туры по Казани</NuxtLink>
            </SwiperSlide>              
                       
        </swiper>
    </div>
</template>

<script setup>

</script>

<style type="text/tailwindcss">
    .swiper-excursion-categories{
        @apply my-[30px] overflow-visible flex
    }

    .swiper-excursion-categories .swiper-slide{
        @apply w-fit
    }
</style>