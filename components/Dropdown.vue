<template>
<div class="dropdown-item" :class="activeClass" ref="dropdownItem">
    <div class="dropdown-header  ">
        <button type="button" @click="isDropdownItemShow = !isDropdownItemShow" class="flex items-center text-left justify-between w-full text-fblack" :class="{'text-fred':isDropdownItemShow}">
            
            <slot name="dropdown-header-content">
                
            </slot>  
            <slot name="dropdown-header-icon" :isDropdownItemShow="isDropdownItemShow">
                <IconsDropdownArrow class="text-fred transition-transform duration-500 ease-linear" :class="{'rotate-180':isDropdownItemShow}"></IconsDropdownArrow>
            </slot>  
        </button>
    </div>
    <div ref="dropdownBody" class="dropdown-body flex-col h-0 overflow-hidden transition-[height] duration-500 ease-linear" :class="{'h-auto':isDropdownItemShow}">
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

   /*  let dropdownBody = ref(null)       

    watch(isDropdownItemShow, (newValue, oldValue) => {
        
        if (newValue) {                                  
            return dropdownBody.value.style.height = dropdownBody.value.scrollHeight + 'px'
        }
         dropdownBody.value.style.height = 0
               
    }) */

</script>


