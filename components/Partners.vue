<template>
    <div>  
        <h2 class="lg:text-3xl text-2xl font-bold wrapper  text-fblack mb-[30px]">{{title}}</h2>      
        <swiper class="swiper-partners border-t" :slidesPerView="'auto'" :loop="true" :speed="2000" :modules="[SwiperAutoplay]" :autoplay="{delay:0, disableOnInteraction: false, pauseOnMouseEnter:true, reverseDirection:true }">
            <SwiperSlide v-for="item, index in props.data">               
                <div v-html="item.media_preview" class="[&>img]:contain [&>img]:w-full w-full"></div>  
                <p class="absolute bottom-2.5 text-sm text-[#9F9F9F] text-center">{{ item.lang_info.title }}</p>        
            </SwiperSlide> 
            <SwiperSlide v-for="item, index in props.data">               
                <div v-html="item.media_preview" class="[&>img]:contain [&>img]:w-full w-full"></div>  
                <p class="absolute bottom-2.5 text-sm text-[#9F9F9F] text-center">{{ item.lang_info.title }}</p>        
            </SwiperSlide> 
            <SwiperSlide v-for="item, index in props.data">               
                <div v-html="item.media_preview" class="[&>img]:contain [&>img]:w-full w-full"></div>  
                <p class="absolute bottom-2.5 text-sm text-[#9F9F9F] text-center">{{ item.lang_info.title }}</p>        
            </SwiperSlide> 
            <SwiperSlide v-for="item, index in props.data">               
                <div v-html="item.media_preview" class="[&>img]:contain [&>img]:w-full w-full"></div>  
                <p class="absolute bottom-2.5 text-sm text-[#9F9F9F] text-center">{{ item.lang_info.title }}</p>        
            </SwiperSlide> 
        </swiper>    
        <swiper class="swiper-partners" :slidesPerView="'auto'" :loop="true" :speed="2000" :modules="[SwiperAutoplay]" :autoplay="{delay:0, disableOnInteraction: false, pauseOnMouseEnter:true, reverseDirection:false }">
            <SwiperSlide v-for="item, index in props.data">           
                <div v-html="item.media_preview" class="[&>img]:contain [&>img]:w-full w-full"></div> 
                <p class="absolute bottom-2.5 text-sm text-[#9F9F9F] text-center">{{ item.lang_info.title }}</p>                
            </SwiperSlide> 
            <SwiperSlide v-for="item, index in props.data">               
                <div v-html="item.media_preview" class="[&>img]:contain [&>img]:w-full w-full"></div>  
                <p class="absolute bottom-2.5 text-sm text-[#9F9F9F] text-center">{{ item.lang_info.title }}</p>        
            </SwiperSlide> 
            <SwiperSlide v-for="item, index in props.data">               
                <div v-html="item.media_preview" class="[&>img]:contain [&>img]:w-full w-full"></div>  
                <p class="absolute bottom-2.5 text-sm text-[#9F9F9F] text-center">{{ item.lang_info.title }}</p>        
            </SwiperSlide> 
            <SwiperSlide v-for="item, index in props.data">               
                <div v-html="item.media_preview" class="[&>img]:contain [&>img]:w-full w-full"></div>  
                <p class="absolute bottom-2.5 text-sm text-[#9F9F9F] text-center">{{ item.lang_info.title }}</p>        
            </SwiperSlide> 
        </swiper>    
    </div>
</template>

<script setup>
const props = defineProps({      
    title: { type:String },    
    data:{type:Array}
}) 
</script>


<style type="text/tailwindcss"> 
    .swiper-partners{
        @apply w-full border-b border-fline
    }

    .swiper-partners .swiper-wrapper {
        @apply ease-linear
    }

    .swiper-partners .swiper-slide{
        @apply max-w-[192px] aspect-square relative flex items-center justify-center bg-white border-r border-fline first:border-l px-[49px]
    }
</style>