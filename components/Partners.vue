<template>
    <div>
        <swiper class="swiper-partners border-t" :slidesPerView="'auto'" :loop="true" :speed="2000" :modules="[SwiperAutoplay]" :autoplay="{delay:0, disableOnInteraction: false, pauseOnMouseEnter:true, reverseDirection:true }">
            <SwiperSlide v-for="n in 20" :key="n">           
                <img src="@/assets/imgs/partners/img1.png" class="contain w-full" alt="">    
                <p class="absolute bottom-2.5 text-sm text-[#9F9F9F]">Кума</p>        
            </SwiperSlide> 
        </swiper>    
        <swiper class="swiper-partners border-t" :slidesPerView="'auto'" :loop="true" :speed="2000" :modules="[SwiperAutoplay]" :autoplay="{delay:0, disableOnInteraction: false, pauseOnMouseEnter:true, reverseDirection:false }">
            <SwiperSlide v-for="n in 20" :key="n">           
                <img src="@/assets/imgs/partners/img1.png" class="contain w-full" alt="">  
                <p class="absolute bottom-2.5 text-sm text-[#9F9F9F]">Кума</p>                
            </SwiperSlide> 
        </swiper>    
    </div>
</template>

<script setup>

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