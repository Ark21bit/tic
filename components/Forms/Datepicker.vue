<template>  
    <VueDatePicker month-name-format="long" v-model="value" class="text-sm leading-[1.4] text-fblack" :clearable="false" :close-on-auto-apply="false" :auto-apply="true" format="dd.MM.yyyy" locale="ru" position="right" :no-today="true" :enable-time-picker="false">
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
</template>

<script setup>
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'

  const props = defineProps(['modelValue'])
  const emit = defineEmits(['update:modelValue'])

  const value = computed({    
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
  })

  let date = ref()
</script>

<style type="text/tailwindcss">
  .dp__theme_light  {
    --dp-background-color: white;
    --dp-text-color: #333333;
    --dp-hover-color: #E7363D;
    --dp-hover-text-color: #ffffff;
    --dp-hover-icon-color: #D74343;
    --dp-primary-color: #D74343;
    --dp-primary-text-color: #ffffff;
    --dp-secondary-color: #CFCFCF;
    --dp-border-color: #D7D7D7;
    --dp-menu-border-color: transparent;
    --dp-border-color-hover: #D7D7D7;
    --dp-disabled-color: #737373;
    --dp-scroll-bar-background: transparent;
    --dp-scroll-bar-color: #D74343;
    --dp-success-color: #00701a;
    --dp-success-color-disabled: #428f59;
    --dp-icon-color: #1C1D21;
    --dp-danger-color: #e53935;
    --dp-highlight-color: rgba(0, 92, 178, 0.2);
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

    .dp__input {
      @apply bg-transparent text-sm font-Inter font-medium
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

    .dp__input{
      @apply p-3
    } 

    .dp__input_icon{
      @apply text-fgreen group-focus:text-fred right-3 left-auto
    }
</style>


