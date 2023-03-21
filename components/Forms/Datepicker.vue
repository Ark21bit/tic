<template>  
  <div class="grid gap-x-5 gap-y-[5px] group" :class="[{ 'error': errorTitle }, boxClass, boxDirectionClass, inputClass]">
    
      <slot>
        <label class="text-ftext2 " v-if="labelTitle" :for="`dp-input-${props.id}`" >
          {{ labelTitle }}
        </label>
      </slot>                    
    <VueDatePicker v-bind="$attrs" :uid="props.id" month-name-format="long" v-model="value" :clearable="false" :close-on-auto-apply="false" :auto-apply="true" format="dd.MM.yyyy" locale="ru" position="right" :no-today="true" :enable-time-picker="false">
      <template #input-icon>
            <IconsDatepicker class="transition ease-linear duration-200"/>
      </template>      
      <template #calendar-icon>
        <IconsDatepicker class="transition ease-linear duration-200"/>
      </template>
      <template #calendar-header="{ day }">
        <div class="text-xs font-medium font-Onest">
          {{ day[0] }}
        </div>
      </template>
      <template #arrow-right>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
          <path d="M9 6.5L14 11.5L9 16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </template>
      <template #arrow-left>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
          <path d="M14 6.5L9 11.5L14 16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </template>     
    </VueDatePicker>
    <slot name="error">
      <span v-if="errorTitle" :class="errorClass" class="text-fred">{{ errorTitle }}</span>
    </slot>
  </div>
    
</template>

<script>
export default {
  inheritAttrs: false
}
</script>

<script setup>
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'  

  const props = defineProps({
    modelValue: { type:Date, default:null },
    direction: { type:String, default:'vertical' },
    errorTitle : { type:String },
    labelTitle : { type:String },
    id: { type:String, default:'id' },
    decoration:{ type:String, default:'default'},
    boxClass:{ type:String, default:'default'},
  })

  const emit = defineEmits(['update:modelValue']) 

  const value = computed({    
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
  })

  const boxDirectionClass = computed(()=>{
    if (props.direction == 'vertical') return 'text-xs' 
    if (props.direction == 'horizontal') return 'text-sm grid-cols-[auto_auto] items-center' 
  })

  const errorClass = computed(()=>{
    if (props.direction == 'vertical') return '' 
    if (props.direction == 'horizontal') return 'col-start-2' 
  })

  const inputClass = computed(()=>{
    if (props.decoration == 'default') return 'default' 
    if (props.decoration == 'border') return 'decoration-border' 
  })



</script>

<style type="text/tailwindcss">
  
  .dp__input {            
      @apply text-sm font-Inter font-medium px-[15px] py-3  
      group-[.default]:focus:border-transparent group-[.default]:border-transparent 
      group-[.decoration-border]:border group-[.decoration-border]:border-[#d7d7d7] group-[.decoration-border]:bg-transparent group-[.decoration-border]:focus:border-[#d7d7d7] 
      group-[.error]:border-[1.5px] group-[.error]:border-[#E12525] group-[.error]:focus:border-[#E12525] group-[.error]:bg-[#EDF1F4]
    }

  .dp__theme_light  {
    @apply [--dp-background-color:white]
    [--dp-text-color:#333333]
    [--dp-hover-color:#E7363D]
    [--dp-hover-text-color:#ffffff]
    [--dp-hover-icon-color:#D74343]
    [--dp-primary-color:#D74343]
    [--dp-primary-text-color:#ffffff]
    [--dp-secondary-color:#CFCFCF]
    [--dp-border-color:#D7D7D7]
    [--dp-menu-border-color:transparent]
    [--dp-border-color-hover:#D7D7D7]
    [--dp-disabled-color:#737373]
    [--dp-scroll-bar-background:transparent]
    [--dp-scroll-bar-color:#D74343]
    [--dp-success-color:#00701a]
    [--dp-success-color-disabled:#428f59]
    [--dp-icon-color:#1C1D21]
    [--dp-danger-color:#e53935]
    [--dp-highlight-color:rgba(0,92,178,0.2)]
  }

    .dp__main{
     @apply group-[.error]:[--dp-border-color:#E12525] group-[.error]:[--dp-text-color:#90A5BA] group-[.error]:[--dp-border-color-hover:#E12525] text-sm font-Inter leading-[1.4] text-fblack
    }

    .dp__input_focus ~ .dp__input_icon{
      @apply text-fred
    }
   
    .dp__menu{
      @apply font-Onest text-sm
    }

    .dp__month_year_row{
      @apply mb-3.5
    }

    .dp__button{
      @apply hover:text-white
    } 

    .dp__month_year_select{
      @apply first:justify-end first:mr-1 last:justify-start hover:bg-transparent hover:text-fred capitalize
    }          

    .dp__calendar_header{
      @apply space-x-2 mb-2.5
    }

    .dp__calendar_header_item{
      @apply flex items-center justify-center w-[25px] h-[25px] p-0
    }

    .dp__cell_inner{
      @apply w-[25px] h-[25px] p-0
    }

    .dp__calendar{
      @apply space-y-2.5
    }

    .dp__calendar_row{
      @apply space-x-2 m-0
    }
    
    .dp__calendar_wrap{
      @apply font-Onest
    }

    .dp__instance_calendar{
      @apply shadow-[0_6px_25px_0_rgba(34,115,141,.1)] rounded-[10px] p-4
    }

    .dp__inner_nav{
      @apply hover:bg-transparent 
    }

    .dp__calendar_header_separator{
      @apply h-0
    }   

    .dp__input_icon{
      @apply text-fgreen group-focus:text-fred group-[.error]:text-fred right-3 left-auto
    }
</style>


