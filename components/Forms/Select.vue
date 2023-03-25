<template>  
    <label class="grid gap-x-5 gap-y-[5px] text-fblack group" :class="[{ 'error':errorTitle }, labelDirectionClass, labelClass]">      
        <slot/>                
      
        <div v-bind="$attrs" @click="isOptionsShow = !isOptionsShow"  :class="[{'active':isOptionsShow}, selectClass]" class="relative group cursor-pointer rounded-[5px] px-[15px] py-3 placeholder:text-[#90A4B8] text-sm group-[.error]:bg-[#EDF1F4] group-[.error]:border-[#E12525] group-[.error]:border-[1.5px] text-fblack">
            <span class="min-h-[1.2em] block">{{  selectedOption }}</span>
            <div v-show="isOptionsShow" class="rounded-[5px] z-10 bg-white w-full overflow-hidden shadow-[0_4px_23px_0_rgba(0,0,0,.07)] absolute top-[calc(100%+5px)] left-0 ">
                <div class="w-full px-[14px] cursor-pointer hover:bg-fred hover:text-white py-2.5" v-for="option, index in props.options" :class="{'bg-fred text-white':selectedOption == option , 'bg-white':selectedOption != option}" @click="selectOption(option, optionsValue[index])">{{option}}</div>
            </div>
            <div class="absolute top-1/2 -translate-y-1/2 right-[15px] transition-transform duration-500 ease-linear text-fred group-[.active]:rotate-180">
                <IconsDropdownArrow/>
            </div>
        </div>  
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
    decoration: { type: String, default: "default" },
    direction: { type:String, default:'vertical' },
    errorTitle : { type:String },
    modelValue: { default:null },
    labelClass: { type:String, default:null },
    options:{type:Array, default:null},
    optionsValue:{type:Array, default:null}
}) 

let isOptionsShow = ref(false)

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
    default: 'focus:border-transparent border bg-white border-transparent focus:ring-transparent',    
    border: 'border border-[#d7d7d7] bg-transparent focus:border-[#d7d7d7] focus:ring-transparent' 
}

/* сбор всех классов для select */
const selectClass = computed(()=>{
  return buttonDecorationClasses[props.decoration]
})

/* двухстороннее cвязывание v-model */

const emit = defineEmits(['update:modelValue']) 

let selectedOption = ref(null)

onUpdated(() => {
  if (props.modelValue) return selectedOption.value = props.modelValue  
})  

const selectOption = (option, value)=> {    
    selectedOption.value = option
    emit('update:modelValue', value)
}


</script>


