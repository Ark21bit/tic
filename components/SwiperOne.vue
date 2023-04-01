<template>
    <swiper :slidesPerView="1"  :navigation="{nextEl:'.next', prevEl:'.prev' }" :modules="[SwiperNavigation]" class="swiper-one w-full h-[391px] lg:h-[600px]" :loop="true">
        
        <SwiperSlide v-for="(item, key) in props.data" :key="key">
            <!-- <img src="@/assets/imgs/img4.png" alt="" class=""> -->
            <div v-html="item.html" class="[&>img]:w-full [&>img]:h-full [&>img]:z-[-1] [&>img]:relative [&>img]:object-cover w-full h-full [background:linear-gradient(357.9deg,rgba(0,0,0,.6)_3.51%,rgba(0,0,0,0)_43.65%)]"></div>
            <div class="absolute left-1/2 -translate-x-1/2 wrapper flex flex-col gap-2.5 items-center bottom-5 lg:bottom-[30px] text-white">
                 <p class="text-lg lg:text-xl font-medium ">{{item.title}}</p>
                 <p class="text-sm leading-[1.4]">{{item.description}}</p>
            </div>
        </SwiperSlide>    
        
        <div class="absolute wrapper flex justify-between top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <Button size="arrowM" class="prev rotate-180 max-lg:p-2.5" color="white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="max-lg:w-[15px] max-lg:h-[15px]">
                    <path d="M7.39551 17.5833L14.4163 10.5833C14.4997 10.5 14.5586 10.4097 14.593 10.3125C14.628 10.2152 14.6455 10.1111 14.6455 9.99996C14.6455 9.88885 14.628 9.78468 14.593 9.68746C14.5586 9.59024 14.4997 9.49996 14.4163 9.41663L7.39551 2.39579C7.20106 2.20135 6.95801 2.10413 6.66634 2.10413C6.37467 2.10413 6.12467 2.20829 5.91634 2.41663C5.70801 2.62496 5.60384 2.86801 5.60384 3.14579C5.60384 3.42357 5.70801 3.66663 5.91634 3.87496L12.0413 9.99996L5.91634 16.125C5.7219 16.3194 5.62467 16.5588 5.62467 16.8433C5.62467 17.1283 5.72884 17.375 5.93717 17.5833C6.14551 17.7916 6.38856 17.8958 6.66634 17.8958C6.94412 17.8958 7.18717 17.7916 7.39551 17.5833Z" fill="currentColor"/>
                </svg>
            </Button>
            <Button size="arrowM" class="next max-lg:p-2.5" color="white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="max-lg:w-[15px] max-lg:h-[15px]">
                    <path d="M7.39551 17.5833L14.4163 10.5833C14.4997 10.5 14.5586 10.4097 14.593 10.3125C14.628 10.2152 14.6455 10.1111 14.6455 9.99996C14.6455 9.88885 14.628 9.78468 14.593 9.68746C14.5586 9.59024 14.4997 9.49996 14.4163 9.41663L7.39551 2.39579C7.20106 2.20135 6.95801 2.10413 6.66634 2.10413C6.37467 2.10413 6.12467 2.20829 5.91634 2.41663C5.70801 2.62496 5.60384 2.86801 5.60384 3.14579C5.60384 3.42357 5.70801 3.66663 5.91634 3.87496L12.0413 9.99996L5.91634 16.125C5.7219 16.3194 5.62467 16.5588 5.62467 16.8433C5.62467 17.1283 5.72884 17.375 5.93717 17.5833C6.14551 17.7916 6.38856 17.8958 6.66634 17.8958C6.94412 17.8958 7.18717 17.7916 7.39551 17.5833Z" fill="currentColor"/>
                </svg>
            </Button>
        </div>        
    </swiper>
</template>

<script setup>

    const props = defineProps({
        data:{type: Array}
    })

</script>
