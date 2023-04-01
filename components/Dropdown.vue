<template>
<div class="group/dropdown dropdown-item" :class="activeClass" ref="dropdownItem">
    <div class="dropdown-header  ">
        <button type="button" @click="isDropdownItemShow = !isDropdownItemShow" class="flex items-center justify-between w-full text-fblack group-[.active]/dropdown:text-fred">
            
            <slot name="dropdown-header-content">
                
            </slot>  
            <slot name="dropdown-header-icon">
                <IconsDropdownArrow class="text-fred group-[.active]/dropdown:rotate-180 transition-transform duration-500 ease-linear"></IconsDropdownArrow>
            </slot>  
        </button>
    </div>
    <div ref="dropdownBody" class="dropdown-body flex-col group-[.active]/dropdown:h-auto h-0 overflow-hidden transition-[height] duration-500 ease-linear">
        <slot/>
    </div>     
</div>

</template>

<script setup>   

    let isDropdownItemShow = ref( false )

    const props = defineProps(
    {
        activeClass: { type: String, default:"active" }        
    })
    
    const activeClass = computed(() => {
        if (isDropdownItemShow.value) {
            return props.activeClass
        }
        return ''
    })

    /* анимация высоты */

    let dropdownBody = ref(null)       

    watch(isDropdownItemShow, (newValue, oldValue) => {
        
        if (newValue) {                                  
            return dropdownBody.value.style.height = dropdownBody.value.scrollHeight + 'px'
        }
         dropdownBody.value.style.height = 0
               
    })

</script>


