<template>
    <template v-if="props.isInteractive">
        <div class="flex">
            <svg @click="selectStar(star)" class="cursor-pointer transition ease-linear duration-500" @mouseenter="hoverStarIndex = star" @mouseleave="hoverStarIndex = 0" :class="[star <= rating ? 'text-fred' : 'text-finactive', {'text-fred opacity-50':hoverStarIndex >= star}]" v-for="star in props.scale" :key="star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5.825 22L7.45 14.975L2 10.25L9.2 9.625L12 3L14.8 9.625L22 10.25L16.55 14.975L18.175 22L12 18.275L5.825 22Z" fill="currentColor"/>
            </svg>    
        </div>    
    </template>
    <template v-else>
        <div class="flex">
            <svg :class="[star <= rating ? 'text-fred' : 'text-finactive']" v-for="star in props.scale" :key="star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5.825 22L7.45 14.975L2 10.25L9.2 9.625L12 3L14.8 9.625L22 10.25L16.55 14.975L18.175 22L12 18.275L5.825 22Z" fill="currentColor"/>
            </svg>        
        </div>    
    </template>
</template>
<script setup>
    const props = defineProps(
        {
            rating: { type: Number, default:0 }, 
            scale:{ type: Number, default:5 },
            modelValue:{ type: Number, default:null }, 
            isInteractive: { type: Boolean, default:false },           
        }
    )

    let hoverStarIndex = ref(null)

    const emit = defineEmits(['update:modelValue']) 
    
    let rating = ref(props.rating)

    if (props.isInteractive) {
        rating.value = props.modelValue
    }

    onUpdated(() => {
        if (props.modelValue) rating.value = props.modelValue    
    })  

    const selectStar = (index)=>{        
        rating.value = index
        emit('update:modelValue', rating.value)
    }
</script>

