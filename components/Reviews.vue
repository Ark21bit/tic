<template>    
    <swiper :slidesPerView="1" :pagination="{clickable: true, el: '.swiper-reviews-pagination'}" :loop="true" :modules="[SwiperPagination]" class="swiper-reviews" :spaceBetween="20" :breakpoints="{'640': {  slidesPerView: 'auto',  spaceBetween: 20,}}">
        <SwiperSlide class="sm:max-w-[387px]"  v-for="n in 10" :key="n">
            <Review class="w-full"/>
        </SwiperSlide>       
        <div class="swiper-reviews-pagination"/>        
    </swiper>
</template>

<script setup>
   
</script>

<style type="text/tailwindcss">

    .swiper-reviews-pagination{
        @apply sm:hidden flex justify-center mt-5 
    }

    .swiper-reviews-pagination .swiper-pagination-bullet{
        @apply bg-finactive opacity-100 w-2.5 h-2.5
    }

    .swiper-reviews-pagination .swiper-pagination-bullet-active{
        @apply bg-fred
    }

    .swiper-reviews{
        @apply max-sm:w-full overflow-visible lg:overflow-x-scroll lg:-m-5 lg:p-5
    }
</style>

