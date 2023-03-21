<template>
    <div class="flex items-center gap-[3px]">
        <button type="button"  @click="decrement" class="text-fblack bg-[#F4F4F4] p-[5px] aspect-square rounded-[5px] hover:text-white hover:bg-fred transition-colors ease-linear duration-500"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="1" viewBox="0 0 13 1" fill="none"><rect x="13" y="1" width="13" height="0.999999" rx="0.499999" transform="rotate(-180 13 1)" fill="currentColor"/></svg></button>
        <input type="text" v-model="count" class="flex items-center focus:border-fline focus:ring-transparent justify-center text-fblack h-[23px] border border-fline rounded-[5px] bg-transparent w-[39px] text-sm font-medium p-0 text-center">
        <button type="button" @click="increment" class="text-fblack bg-[#F4F4F4] p-[5px] aspect-square rounded-[5px] hover:text-white hover:bg-fred transition-colors ease-linear duration-500"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="13" y="7" width="13" height="0.999999" rx="0.499999" transform="rotate(-180 13 7)" fill="CurrentColor"/><rect x="6" y="13" width="13" height="1" rx="0.5" transform="rotate(-90 6 13)" fill="CurrentColor"/></svg></button> 
    </div>
</template>

<script setup>   

    const props = defineProps({            
        modelValue: { default:0, type:Number },
    }) 

    const emit = defineEmits(['update:modelValue']) 
    
    let count = ref(props.modelValue)

    watch(count, (oldValue, newValue)=>{
        count.value = Number(String(count.value).replace(/\D/g, ""))       
        if(count.value<0) return count.value = 0
        emit('update:modelValue', count.value)
    })

    onUpdated(() => {
        if (props.modelValue) count.value = props.modelValue        
    })  

    const increment = ()=> {
        count.value++        
    }

    const decrement = ()=> {
        count.value--    
    }
</script>