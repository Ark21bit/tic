<template>
    <div class="relative flex gap-4 flex-col justify-end items-start bg-[url(@/assets/imgs/cards/img1.png)] bg-cover rounded-[10px] p-5">
        <div v-if="props.isSale" class="absolute rounded-tl-[10px] rounded-br-[10px] top-0 left-0 text-white bg-fred py-2 px-6 font-semibold uppercase">sale</div>
        <p class="text-lg text-white font-medium">Дервний город Болгар</p>
        <p class="px-2.5 py-[5px] rounded-[5px] bg-[rgba(231,54,61,0.8)] text-white text-xs font-bold">От 1000 руб.  / чел</p>
        <NuxtLink to="/" class="text-[.9375rem] leading-tight py-3 px-5 bg-fgreen text-white rounded-[5px]">Подробнее</NuxtLink>
    </div>
</template>

<script setup>

const props = defineProps(
    {
        isSale: { type: Boolean, default:false }, 
    }
)

</script>

