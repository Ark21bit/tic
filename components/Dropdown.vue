<template>
<div class="group/dropdown dropdown-item" :class="activeClass" ref="dropdownItem">
    <div class="dropdown-header  ">
        <button type="button" @click="isDropdownItemShow = !isDropdownItemShow" class="flex items-center justify-between w-full text-fblack group-[.active]/dropdown:text-fred">
            
            <slot name="dropdown-header-content">
                
            </slot>  
            <slot name="dropdown-header-icon">
                <IconsDropdownArrow class="text-fred group-[.active]/dropdown:rotate-180"></IconsDropdownArrow>
            </slot>  
        </button>
    </div>
    <div class="dropdown-body flex-col group-[.active]/dropdown:flex hidden">
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

</script>

