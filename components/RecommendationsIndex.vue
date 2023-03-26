<template>
    <div>       
        <h2 class="lg:text-3xl text-2xl font-bold  text-fblack mb-[30px]">{{title}}</h2>  
        <swiper :slidesPerView="'auto'" :breakpoints="{'1024': {  slidesPerView: 6,  spaceBetween: 0, slidesPerGroup:6 }}" class="w-full swiper-recommendations-index" :spaceBetween="20">
            <SwiperSlide v-for="item, index in data" class="lg:[width:100%!important]" :class="{'col-span-2':index==0||index==4}">
                <Card class="w-full h-full" :title="item.lang_info.title" :img="item.media_preview" :slug="item.slug"/>
            </SwiperSlide> 
        </swiper>
    </div>
</template>

<script setup>
const props = defineProps({      
    title: { type:String },
    data: { default:[], type:Array },    
}) 
</script>

<style type="text/tailwindcss">
    .swiper-recommendations-index .swiper-wrapper{
        @apply lg:grid lg:grid-cols-4 lg:gap-5 
    }

    .swiper-recommendations-index .swiper-slide{
        @apply max-lg:w-[260px] shrink-0 h-[330px] lg:h-[350px]
    }
</style>

