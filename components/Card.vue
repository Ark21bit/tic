<template>
    <div class="relative flex gap-4 flex-col justify-end items-start rounded-[10px] p-[15px] lg:p-5 overflow-hidden">
        <img src="@/assets/imgs/cards/img1.png" alt="" class="absolute object-cover top-0 left-0 w-full h-full">
        <div v-if="props.isSale" :class="textSaleClass" class="absolute rounded-tl-[10px] rounded-br-[10px] top-0 left-0 text-white bg-fred py-2 px-6 font-semibold uppercase">sale</div>
        <p class="z-10 text-white font-medium" :class="textClass">Дервний город Болгар</p>
        <p class="z-10 px-2.5 py-[5px] rounded-[5px] bg-[rgba(231,54,61,0.8)] text-white text-xs font-medium">От 1000 руб.  / чел</p>
        <Button to="/" tag="router-link" color="secondary" size="L" class="z-10 max-lg:w-full">{{ generalConfigStore.value.static_info.global_words.more }}</Button>       
    </div>
</template>

<script setup>
import { useGeneralConfigStore} from '@/stores/generalConfigStore'

const generalConfigStore = useGeneralConfigStore()

const props = defineProps(
    {
        isSale: { type: Boolean, default:false }, 
        textClass: { type: String, default:'lg:text-lg text-base' }, 
        textSaleClass: { type: String, default:'text-base' },
        imgSrc: { type: String }
    }
)

</script>

