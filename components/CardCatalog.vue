<template>
    <div class="relative flex flex-col overflow-hidden rounded-[10px] shadow-[0_4px_23px_0_rgba(0,0,0,.07)] hover:outline-fred outline-transparent outline outline-2 transition-[outline] ease-linear duration-500 ">
        <div v-if="props.isSale" class="absolute rounded-tl-[10px] rounded-br-[10px] top-0 left-0 text-white bg-fred py-2 px-6 font-semibold uppercase">sale</div>
        <div><img src="@/assets/imgs/catalogCards/img1.png" alt="" class="h-[204px] w-full object-cover"></div>
        <div class="p-5 flex flex-col gap-[15px] border-b border-b-fline">
            <p class="h-[2.4em] lg:h-[3.6em] font-medium text-fblack">Экскурсия в Свияжск на теплоходе </p>
            <p class="h-[4.2em] text-[.8125rem] line-clamp-3 text-ftext2 leading-[1.4]">Загородная автобусная экскурсия на остров-град Свияжск. Дорога до острова занимает примерно 1,5 много текста</p>
            <div class="space-y-2.5">
                <div class="flex gap-[7px] items-center text-sm">
                    <img src="@/assets/imgs/icons/time.svg" alt="">
                    <p class="text-fmainText">Длительность:</p>
                    <span class="text-fblack font-medium">08:00</span>
                </div>
                <div class="flex gap-[7px] items-center text-sm">
                    <img src="@/assets/imgs/icons/star.svg" alt="">
                    <p class="text-fmainText">Отзывы:</p>
                    <span class="text-fblack font-medium">10</span>
                </div>                
            </div>            
            <NuxtLink to="/" class="font-medium text-sm link">Подробнее</NuxtLink>
        </div>
        <div class="p-5 flex flex-col gap-[15px]">
            <div class="flex items-start">
                <p class="font-bold text-[1.375rem] leading-[1.2] text-fblack ">1999 ₽</p>
                <p v-if="props.isSale" class="text-sm ml-2.5 text-fred  font-medium line-through"><span class="text-fmainText">2899 ₽</span></p>
            </div>
            <Button color="secondary" size="L" class="w-full hover:bg-fred">Заказать</Button>
        </div>
    </div>
</template>

<script setup >
    const props = defineProps(
        {
            isSale: { type: Boolean, default:false }, 
        }
    )
</script>

