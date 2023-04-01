<template>
<div class="dropdown-item" :class="activeClass" ref="dropdownItem" v-auto-animate="{duration:500}">
    <div class="dropdown-header  ">
        <button type="button" @click="isDropdownItemShow = !isDropdownItemShow" class="flex items-center text-left justify-between w-full text-fblack" :class="{'text-fred':isDropdownItemShow}">
            
            <slot name="dropdown-header-content">
                
            </slot>  
            <slot name="dropdown-header-icon" :isDropdownItemShow="isDropdownItemShow">
                <IconsDropdownArrow class="text-fred transition-transform duration-500 ease-linear" :class="{'rotate-180':isDropdownItemShow}"></IconsDropdownArrow>
            </slot>  
        </button>
    </div>
    <div ref="dropdownBody" class="dropdown-body flex-col" v-if="isDropdownItemShow" >
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


