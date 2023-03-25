<template>
   <div>
      <h2 class="text-2xl lg:text-3xl font-bold leading-1.2 text-fblack mb-[30px] [&>span]:text-fred" v-html="props.title"></h2>
      <swiper :slidesPerView="'auto'" class="swiper-team w-full" :space-between="20">
          <SwiperSlide v-for="(item, key) in props.teams_info" :key="key">             
             <div v-html="item.media_avatar" class="[&>img]:object-cover [&>img]:w-full [&>img]:h-full [&>img]:rounded-[5px] h-[292px] lg:w-[285px] w-[270px] lg:h-[308px] mb-[15px]"></div>
             <p class="lg:text-xl text-lg font-medium mb-[5px] text-fblack">{{item.fio}}</p>
             <p class="text-sm text-fmainText">{{item.post}}</p>
          </SwiperSlide>
      </swiper>
   </div>
</template>

<script setup>
const props = defineProps({            
    title: { type: String },
    teams_info: { type: Array }
}) 
</script>

<style type="text/tailwindcss">
    .swiper-team{
        @apply overflow-visible
    }

    .swiper-team .swiper-slide{
        @apply w-fit
    }
</style>

