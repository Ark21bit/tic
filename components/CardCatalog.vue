<template>
    <div class="relative flex flex-col overflow-hidden rounded-[10px] shadow-[0_4px_23px_0_rgba(0,0,0,.07)] hover:outline-fred outline-transparent outline outline-2 transition-[outline] ease-linear duration-500 ">
        <div v-if="props.isSale" class="absolute rounded-tl-[10px] rounded-br-[10px] top-0 left-0 text-white bg-fred py-2 px-6 font-semibold uppercase">sale</div>
        <div v-html="mediaPreview" class="h-[204px] w-full [&>img]:w-full [&>img]:h-full [&>img]:object-cover"></div>
        <div class="p-5 flex flex-col gap-[15px] border-b border-b-fline">
            <p class="h-[2.4em] lg:h-[3.6em] line-clamp-3 text-base font-medium text-fblack">{{ title }}</p>
            <p class="h-[4.2em] text-[.8125rem] line-clamp-3 text-ftext2 leading-[1.4]">{{description}}</p>
            <div class="space-y-2.5">
                <div class="flex gap-[7px] items-center text-sm">
                    <img src="@/assets/imgs/icons/time.svg" alt="">
                    <p class="text-fmainText">{{ generalConfigStore.value.static_info.global_words.duration }}:</p>
                    <span class="text-fblack font-medium">08:00</span>
                </div>
                <div class="flex gap-[7px] items-center text-sm">
                    <img src="@/assets/imgs/icons/star.svg" alt="">
                    <p class="text-fmainText">{{ generalConfigStore.value.static_info.global_words.reviews }}:</p>
                    <span class="text-fblack font-medium">{{ reviewsCount }}</span>
                </div>                
            </div>            
            <NuxtLink :to="localePath(`/${slug}`)" class="font-medium text-sm link">{{ generalConfigStore.value.static_info.global_words.more }}</NuxtLink>
        </div>
        <div class="p-5 flex flex-col gap-[15px]">
            <div class="flex items-start">
                <p class="font-bold text-[1.375rem] leading-[1.2] text-fblack ">{{ price }} ₽</p>
                <p v-if="props.isSale" class="text-sm ml-2.5 text-fred  font-medium line-through"><span class="text-fmainText">{{priceOld}} ₽</span></p>
            </div>
            <Button color="secondary" size="L" class="w-full hover:bg-fred">{{ generalConfigStore.value.static_info.global_words.order }}</Button>
        </div>
    </div>
</template>

<script setup >
    
    
    const generalConfigStore = useGeneralConfigStore()

    const props = defineProps(
        {
            isSale: { type: Boolean, default:false }, 
            slug:{type: String},
            mediaPreview:{type:String},
            title: {type:String},
            description: {type:String},
            price:{type:Number},
            priceOld:{type:Number},
            reviewsCount:{type:Number}
        }
    )
</script>

