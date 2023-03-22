<template>  
    <label class="grid gap-x-5 gap-y-[5px] text-fblack group" :class="[{ 'error':errorTitle }, labelDirectionClass, labelClass]">      
        <slot/>                
      
      <input v-bind="$attrs" v-model="value" class="rounded-[5px] px-[15px] py-3 placeholder:text-[#90A4B8] text-sm group-[.error]:bg-[#EDF1F4] group-[.error]:border-[#E12525] group-[.error]:border-[1.5px] text-fblack" :class="inputClass">  
      <slot name="error">
        <span v-if="errorTitle" :class="errorClass" class="text-fred">{{ errorTitle }}</span>
      </slot>
    </label>      
  </template>

<script>
export default {
  inheritAttrs: false
}
</script>

<script setup>
const props = defineProps({      
        direction: { type:String, default:'vertical' },
        errorTitle : { type:String },
        modelValue: { default:null },
        decoration:{ type:String, default:'default'},
        labelClass: { type:String, default:null },
    }) 
    
  /* классы для label */
const labelDirectionClass = computed(()=>{
  if (props.direction == 'vertical') return 'text-xs' 
  if (props.direction == 'horizontal') return 'text-sm grid-cols-[auto_auto] items-center' 
})

  /* классы для текста ошибки */
const errorClass = computed(()=>{
  if (props.direction == 'vertical') return '' 
  if (props.direction == 'horizontal') return 'col-start-2' 
})

  /* классы для декорации кнопки */
const buttonDecorationClasses = {  
    default: 'focus:border-transparent border border-transparent focus:ring-transparent',    
    border: 'border border-[#d7d7d7] bg-transparent focus:border-[#d7d7d7] focus:ring-transparent' 
}

/* сбор всех классов для input */
const inputClass = computed(()=>{
  return buttonDecorationClasses[props.decoration]
})

/* двухстороннее связывание v-model */

const emit = defineEmits(['update:modelValue']) 

const value = computed({    
get() {
  return props.modelValue
},
set(value) {
  emit('update:modelValue', value)
}
})


</script>

