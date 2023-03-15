<template>
    <div class="flex">
        <svg class="text-fred" v-for="valid_star_index in valid_star_number" :key="valid_star_index" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5.825 22L7.45 14.975L2 10.25L9.2 9.625L12 3L14.8 9.625L22 10.25L16.55 14.975L18.175 22L12 18.275L5.825 22Z" fill="currentColor"/>
        </svg>
        <svg class="text-finactive" v-for="invalid_star_index in invalid_star_number" :key="invalid_star_index" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5.825 22L7.45 14.975L2 10.25L9.2 9.625L12 3L14.8 9.625L22 10.25L16.55 14.975L18.175 22L12 18.275L5.825 22Z" fill="currentColor"/>
        </svg>
    </div>    
</template>

<script setup>
    const props = defineProps(
        {
            rating: { type: Number, default:3 }, 
            scale:{ type: Number, default:5 }
        }
    )

    const valid_star_number = computed(() => {
        return Math.floor(props.rating)
    })
    const invalid_star_number = computed(() => {
        return props.scale - valid_star_number.value
    })
</script>

