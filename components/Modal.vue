<template>
    <transition name="fade">
        <div class="fixed z-30 top-0 left-0 w-full h-screen overflow-y-auto scrollbar-w-0" v-bind="$attrs">
            <div @click.self="$emit('close')" class="flex items-center justify-center lg:py-[105px] py-16 w-full h-fit min-h-screen scroll-y-auto bg-[rgba(0,0,0,.5)] z-40">
                <div :class="[props.modalMaxSizeClass, props.modalImgBgClass]" class="relative bg-white w-[calc(100%-var(--widthContentMargin)*2)] z-50 p-5 lg:p-[30px] rounded-[10px]">
                    <slot/>        
                    <button @click="$emit('close')" class="absolute top top-5 lg:top-[30px] right-5 lg:right-[30px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M20.0879 18.9745C20.2346 19.1226 20.3169 19.3227 20.3169 19.5311C20.3169 19.7396 20.2346 19.9396 20.0879 20.0878C19.9386 20.2322 19.739 20.3129 19.5312 20.3129C19.3235 20.3129 19.1239 20.2322 18.9746 20.0878L12.5 13.6034L6.02539 20.0878C5.87606 20.2322 5.67647 20.3129 5.46875 20.3129C5.26103 20.3129 5.06144 20.2322 4.91211 20.0878C4.76541 19.9396 4.68311 19.7396 4.68311 19.5311C4.68311 19.3227 4.76541 19.1226 4.91211 18.9745L11.3965 12.4999L4.91211 6.02527C4.78753 5.87348 4.72386 5.68077 4.7335 5.48464C4.74313 5.2885 4.82537 5.10296 4.96423 4.96411C5.10308 4.82525 5.28862 4.74301 5.48476 4.73337C5.68089 4.72374 5.8736 4.78741 6.02539 4.91199L12.5 11.3964L18.9746 4.91199C19.1264 4.78741 19.3191 4.72374 19.5152 4.73337C19.7114 4.74301 19.8969 4.82525 20.0358 4.96411C20.1746 5.10296 20.2569 5.2885 20.2665 5.48464C20.2761 5.68077 20.2125 5.87348 20.0879 6.02527L13.6035 12.4999L20.0879 18.9745Z" fill="#333333"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
    inheritAttrs: false
  }
</script>

<script setup>
const props = defineProps({            
    modalMaxSizeClass:{type:String, default:'max-w-[902px]'},
    modalImgBgClass:{type:String}
}) 
    
</script>

<style type="text/tailwindcss">
    .fade-enter-active,
    .fade-leave-active {
    @apply transition-opacity duration-500 ease-out
    }

    .fade-enter-from,
    .fade-leave-to {
    @apply opacity-0
    }
</style>


