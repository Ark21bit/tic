<template>
    <swiper :slidesPerView="'auto'" :breakpoints="{'1024': {  slidesPerView: 6,  spaceBetween: 0, slidesPerGroup:6 }}" class="w-full swiper-recommendations-index" :spaceBetween="20">
        <SwiperSlide class="lg:[width:100%!important] col-span-2">
            <Card class="w-full h-full" :isSale="true"/>
        </SwiperSlide>                
        <SwiperSlide class="lg:[width:100%!important]">
            <Card class="w-full h-full" />
        </SwiperSlide>                
        <SwiperSlide class="lg:[width:100%!important]">
            <Card class="w-full h-full" />                
        </SwiperSlide>                
        <SwiperSlide class="lg:[width:100%!important]">
            <Card class="w-full h-full" />
        </SwiperSlide>                
        <SwiperSlide class="lg:[width:100%!important] col-span-2">
            <Card class="w-full h-full" />
        </SwiperSlide>                
        <SwiperSlide class="lg:[width:100%!important]">
            <Card class="w-full h-full" />
        </SwiperSlide>                
    </swiper>
</template>

<script setup>

</script>

<style type="text/tailwindcss">
    .swiper-recommendations-index .swiper-wrapper{
        @apply lg:grid lg:grid-cols-4 lg:gap-5 
    }

    .swiper-recommendations-index .swiper-slide{
        @apply max-lg:w-[260px] shrink-0 h-[330px] lg:h-[350px]
    }
</style>

