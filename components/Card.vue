<template>
    <div class="relative flex gap-4 flex-col justify-end items-start rounded-[10px] p-[15px] lg:p-5 overflow-hidden">
        <div v-html="props.img" class="absolute [background:linear-gradient(0.45deg,rgba(0,0,0,.5)_19.43%,rgba(255,255,255,0)_99.66%)] top-0 left-0 w-full h-full [&>img]:w-full [&>img]:relative [&>img]:z-[-1] [&>img]:h-full [&>img]:object-cover "></div>        
        <div v-if="props.isSale" :class="textSaleClass" class="absolute rounded-tl-[10px] rounded-br-[10px] top-0 left-0 text-white bg-fred py-2 px-6 font-semibold uppercase">sale</div>
        <p class="z-10 text-white font-medium max-w-[350px]" :class="textClass">{{ props.title }}</p>        
        <Button :to="`/${props.slug}`" tag="router-link" color="secondary" size="L" class="z-10 max-lg:w-full">{{ generalConfigStore.value.static_info.global_words.more }}</Button>       
    </div>
</template>
<!-- <p class="z-10 px-2.5 py-[5px] rounded-[5px] bg-[rgba(231,54,61,0.8)] text-white text-xs font-medium">От 1000 руб.  / чел</p> -->
<script setup>
import { useGeneralConfigStore} from '@/stores/generalConfigStore'

const generalConfigStore = useGeneralConfigStore()

const props = defineProps(
    {
        textClass: { type: String, default:'lg:text-lg text-base' }, 
        textSaleClass: { type: String, default:'text-base' },
        imgSrc: { type: String },        
        img:{type:String, default:"<img src='https://storage.kazantravel.ru/135/Храм-всех-религий-(1).jpg'>"},
        slug:{type:String, default:'/'},
        isSale:{type:Boolean, default:false},
        title: {type:String,default:'Храм всех религий (с посещением)'}
    }
)

</script>

