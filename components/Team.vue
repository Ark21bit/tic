<template>
    <swiper :slidesPerView="'auto'" class="swiper-team w-full" :space-between="20">
        <SwiperSlide class="">
           <img src="@/assets/imgs/team/img1.png" alt="" class="object-cover h-[292px] lg:w-[285px] w-[270px] lg:h-[308px] mb-[15px] rounded-[5px]">
           <p class="lg:text-xl text-lg font-medium mb-[5px] text-fblack">Ксения Алифанова</p>
           <p class="text-sm text-fmainText">Генеральный директор</p>
        </SwiperSlide>  
        <SwiperSlide class="">
           <img src="@/assets/imgs/team/img2.png" alt="" class="object-cover h-[292px] lg:w-[285px] w-[270px] lg:h-[308px] mb-[15px] rounded-[5px]">
           <p class="lg:text-xl text-lg font-medium mb-[5px] text-fblack">Владимир Петраков</p>
           <p class="text-sm text-fmainText">Генеральный директор</p>
        </SwiperSlide>  
        <SwiperSlide class="">
           <img src="@/assets/imgs/team/img3.png" alt="" class="object-cover h-[292px] lg:w-[285px] w-[270px] lg:h-[308px] mb-[15px] rounded-[5px]">
           <p class="lg:text-xl text-lg font-medium mb-[5px] text-fblack">Ксения Алифанова</p>
           <p class="text-sm text-fmainText">Генеральный директор</p>
        </SwiperSlide>  
        <SwiperSlide class="">
           <img src="@/assets/imgs/team/img4.png" alt="" class="object-cover h-[292px] lg:w-[285px] w-[270px] lg:h-[308px] mb-[15px] rounded-[5px]">
           <p class="lg:text-xl text-lg font-medium mb-[5px] text-fblack">Анна Коробова</p>
           <p class="text-sm text-fmainText">Генеральный директор</p>
        </SwiperSlide>  
        <SwiperSlide class="">
           <img src="@/assets/imgs/team/img1.png" alt="" class="object-cover h-[292px] lg:w-[285px] w-[270px] lg:h-[308px] mb-[15px] rounded-[5px]">
           <p class="lg:text-xl text-lg font-medium mb-[5px] text-fblack">Ксения Алифанова</p>
           <p class="text-sm text-fmainText">Генеральный директор</p>
        </SwiperSlide>  
        <SwiperSlide class="">
           <img src="@/assets/imgs/team/img1.png" alt="" class="object-cover h-[292px] lg:w-[285px] w-[270px] lg:h-[308px] mb-[15px] rounded-[5px]">
           <p class="lg:text-xl text-lg font-medium mb-[5px] text-fblack">Ксения Алифанова</p>
           <p class="text-sm text-fmainText">Генеральный директор</p>
        </SwiperSlide>  
        <SwiperSlide class="">
           <img src="@/assets/imgs/team/img1.png" alt="" class="object-cover h-[292px] lg:w-[285px] w-[270px] lg:h-[308px] mb-[15px] rounded-[5px]">
           <p class="lg:text-xl text-lg font-medium mb-[5px] text-fblack">Ксения Алифанова</p>
           <p class="text-sm text-fmainText">Генеральный директор</p>
        </SwiperSlide>  
        
    </swiper>
</template>

<style type="text/tailwindcss">
    .swiper-team{
        @apply overflow-visible
    }

    .swiper-team .swiper-slide{
        @apply w-fit
    }
</style>

