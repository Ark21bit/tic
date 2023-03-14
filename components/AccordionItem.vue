<template>
<div class="group accordion-item" :class="activeClass" ref="accordionItem">
    <div class="accordion-header  ">
        <button type="button" @click="isAcordeonItemShow = !isAcordeonItemShow" class="flex items-center justify-between w-full text-fblack group-[.active]:text-fred">
            
            <slot name="accordion-header-content">
                
            </slot>  
            <slot name="accordion-header-icon">
                <AccordionArrow class="text-fred group-[.active]:rotate-180"></AccordionArrow>
            </slot>  
        </button>
    </div>
    <div class="accordion-body flex-col group-[.active]:flex hidden">
        <slot/>
    </div>     
</div>

</template>

<script setup>
    import AccordionArrow from "./icons/AccordionArrow.vue"; 

    let isAcordeonItemShow = ref( false )

    const props = defineProps(
    {
        activeClass: { type: String, default:"active" }        
    })
    
    const activeClass = computed(() => {
        if (isAcordeonItemShow.value) {
            return props.activeClass
        }
        return ''
    })

</script>

