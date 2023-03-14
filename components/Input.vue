<template>    
    <input type="text" class="rounded-[5px] px-[15px] py-3.5 placeholder:text-[#90A4B8] text-sm leading-[1.2] text-fblack" :class="buttonDecorationClasses[props.decoration]">  
</template>

<script setup>
const props = defineProps(
    {            
        decoration: { type: String, default: "default" },
    }
)

const buttonDecorationClasses = {  
    default: 'focus:border-transparent border-transparent focus:ring-transparent',    
    border: 'border border-[#d7d7d7] focus:border-[#d7d7d7]  focus:ring-transparent' 
}


</script>

