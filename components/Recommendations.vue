<template>
    <swiper :slidesPerView="'auto'" :navigation="{nextEl:'.next', prevEl:'.prev' }" :modules="[SwiperNavigation]" class="swiper-recommendations h-[330px] lg:h-[397px]" :spaceBetween="20">
        <SwiperSlide v-for="n in 10" :key="n" class="max-w-[260px]  lg:max-w-[285px]">
            <Card class="w-full h-full"/>
        </SwiperSlide>
        <Button size="arrowM" class="prev rotate-180 absolute top-1/2 left-0 -translate-y-1/2 z-10 -translate-x-1/2 max-lg:hidden" color="white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.39551 17.5833L14.4163 10.5833C14.4997 10.5 14.5586 10.4097 14.593 10.3125C14.628 10.2152 14.6455 10.1111 14.6455 9.99996C14.6455 9.88885 14.628 9.78468 14.593 9.68746C14.5586 9.59024 14.4997 9.49996 14.4163 9.41663L7.39551 2.39579C7.20106 2.20135 6.95801 2.10413 6.66634 2.10413C6.37467 2.10413 6.12467 2.20829 5.91634 2.41663C5.70801 2.62496 5.60384 2.86801 5.60384 3.14579C5.60384 3.42357 5.70801 3.66663 5.91634 3.87496L12.0413 9.99996L5.91634 16.125C5.7219 16.3194 5.62467 16.5588 5.62467 16.8433C5.62467 17.1283 5.72884 17.375 5.93717 17.5833C6.14551 17.7916 6.38856 17.8958 6.66634 17.8958C6.94412 17.8958 7.18717 17.7916 7.39551 17.5833Z" fill="currentColor"/>
            </svg>
        </Button>        
        <Button size="arrowM" class="next absolute top-1/2 right-0 -translate-y-1/2 z-10 translate-x-1/2 max-lg:hidden" color="white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.39551 17.5833L14.4163 10.5833C14.4997 10.5 14.5586 10.4097 14.593 10.3125C14.628 10.2152 14.6455 10.1111 14.6455 9.99996C14.6455 9.88885 14.628 9.78468 14.593 9.68746C14.5586 9.59024 14.4997 9.49996 14.4163 9.41663L7.39551 2.39579C7.20106 2.20135 6.95801 2.10413 6.66634 2.10413C6.37467 2.10413 6.12467 2.20829 5.91634 2.41663C5.70801 2.62496 5.60384 2.86801 5.60384 3.14579C5.60384 3.42357 5.70801 3.66663 5.91634 3.87496L12.0413 9.99996L5.91634 16.125C5.7219 16.3194 5.62467 16.5588 5.62467 16.8433C5.62467 17.1283 5.72884 17.375 5.93717 17.5833C6.14551 17.7916 6.38856 17.8958 6.66634 17.8958C6.94412 17.8958 7.18717 17.7916 7.39551 17.5833Z" fill="currentColor"/>
            </svg>
        </Button>        
    </swiper>
</template>

<script setup>

</script>

<style type="text/tailwindcss">
    .swiper-recommendations{
        @apply overflow-visible 
    }     
</style>

