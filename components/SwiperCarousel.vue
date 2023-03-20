<template>
<div class="col-[full] relative py-[30px] lg:pt-[60px] lg:pb-[45px]">  
  <div class="w-full h-full bg-black absolute col-[full] top-0 left-0">
    <swiper class="w-full h-full " :loop="true" :modules="[SwiperThumbs, SwiperEffectFade]" :effect="'fade'" :allowTouchMove="false" @swiper="setThumbsSwiper">
      <!-- <SwiperSlide v-for="n in 10" :key="n" class="relative ">
          <img src="@/assets/imgs/cards/img2.png" alt="" class="w-full h-full object-cover blur scale-[1.05]">          
      </SwiperSlide>       -->
      <SwiperSlide v-for="n in 7" class="relative">
          <img :src="`/img${n}.webp`" alt="" class="w-full h-full object-cover blur scale-[1.05]">          
      </SwiperSlide>      
  </swiper>
  </div>
  <swiper @swiper="setSwiper" :thumbs="{ swiper: thumbsSwiper }" :loop="true" class="wrapper" :modules="[SwiperThumbs, SwiperNavigation, EffectCarousel]" :slidesPerView="'auto'" :effect="'carousel'" :navigation="{ prevEl: '.prev', nextEl:'.next' }" >
      <!-- <SwiperSlide >
        <Card textClass="lg:text-2xl text-base" :isSale="true" textSaleClass="lg:text-base text-sm" class="h-[360px] w-[290px] lg:h-[499px] lg:w-[487px]"/>
      </SwiperSlide> -->
      <SwiperSlide class="cursor-pointer"  v-for="n in 7" @click="slideToIndex(n-1)">
       <!--   <Card textClass="lg:text-2xl text-base" :isSale="true" textSaleClass="lg:text-base text-sm" class="h-[360px] w-[290px] lg:h-[499px] lg:w-[487px]"/>-->
       <img :src="`/img${n}.webp`" alt="" class="h-[360px] w-[290px] lg:h-[499px] lg:w-[487px] object-cover" >
      </SwiperSlide>
      <div class="flex gap-[15px] mt-[25px] lg:mt-[30px] max-sm:mx-auto">
        <Button size="arrowM" class="prev rotate-180 max-lg:p-3.5" color="white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="max-lg:w-[15px] max-lg:h-[15px]">
                    <path d="M7.39551 17.5833L14.4163 10.5833C14.4997 10.5 14.5586 10.4097 14.593 10.3125C14.628 10.2152 14.6455 10.1111 14.6455 9.99996C14.6455 9.88885 14.628 9.78468 14.593 9.68746C14.5586 9.59024 14.4997 9.49996 14.4163 9.41663L7.39551 2.39579C7.20106 2.20135 6.95801 2.10413 6.66634 2.10413C6.37467 2.10413 6.12467 2.20829 5.91634 2.41663C5.70801 2.62496 5.60384 2.86801 5.60384 3.14579C5.60384 3.42357 5.70801 3.66663 5.91634 3.87496L12.0413 9.99996L5.91634 16.125C5.7219 16.3194 5.62467 16.5588 5.62467 16.8433C5.62467 17.1283 5.72884 17.375 5.93717 17.5833C6.14551 17.7916 6.38856 17.8958 6.66634 17.8958C6.94412 17.8958 7.18717 17.7916 7.39551 17.5833Z" fill="currentColor"/>
                </svg>
        </Button>
        <Button size="arrowM" class="next max-lg:p-3.5" color="white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="max-lg:w-[15px] max-lg:h-[15px]">
                <path d="M7.39551 17.5833L14.4163 10.5833C14.4997 10.5 14.5586 10.4097 14.593 10.3125C14.628 10.2152 14.6455 10.1111 14.6455 9.99996C14.6455 9.88885 14.628 9.78468 14.593 9.68746C14.5586 9.59024 14.4997 9.49996 14.4163 9.41663L7.39551 2.39579C7.20106 2.20135 6.95801 2.10413 6.66634 2.10413C6.37467 2.10413 6.12467 2.20829 5.91634 2.41663C5.70801 2.62496 5.60384 2.86801 5.60384 3.14579C5.60384 3.42357 5.70801 3.66663 5.91634 3.87496L12.0413 9.99996L5.91634 16.125C5.7219 16.3194 5.62467 16.5588 5.62467 16.8433C5.62467 17.1283 5.72884 17.375 5.93717 17.5833C6.14551 17.7916 6.38856 17.8958 6.66634 17.8958C6.94412 17.8958 7.18717 17.7916 7.39551 17.5833Z" fill="currentColor"/>
            </svg>
        </Button>            
      </div>
  </swiper> 
</div>  
</template>

<script setup>
import EffectCarousel from "@/assets/effect-carousel.esm";

let thumbsSwiper = ref(null);
let SwiperIndex = ref(null);

const slideToIndex = (index)=>{
  SwiperIndex.value.slideNext()
  SwiperIndex.value.slideToLoop(index) 
}

const setSwiper = (swiper) => {
  SwiperIndex.value = swiper;
}

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
}
</script>

<style>

.swiper-carousel {
  @apply flex flex-col items-start 
}

.swiper-carousel .swiper-slide{
  @apply w-fit
}

.swiper-carousel .swiper-slide> *{
  @apply invisible
}

.swiper-carousel .swiper-slide img{
  @apply visible
}

.swiper-carousel .swiper-slide-active>*{
  @apply visible
}

.swiper-carousel .swiper-slide,
.swiper-carousel swiper-slide {
  @apply relative
}

</style>

