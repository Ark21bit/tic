<template>
    <label class="grid gap-[14px] text-sm grid-cols-[auto_1fr] gap-y-[5px] group items-start cursor-pointer" :class="{ 'error text-fred':errorTitle }">
        <input type="checkbox" v-model="value" class="cursor-pointer group-[.error]:border-fred focus:ring-transparent bg-transparent checked:bg-[url(@/assets/imgs/icons/check.svg)] w-5 h-5 border border-[#D7D7D7] text-fred checked:border-fred transition-colors ease-linear duration-300 rounded-[3px] focus:ring-offset-transparent">
        <slot/>
        <slot name="error">
            <span v-if="errorTitle" class="text-fred col-start-2">{{ errorTitle }}</span>
        </slot>
    </label>
</template>

<script setup>
const props = defineProps({ 
    errorTitle : { type:String },
    modelValue: { default:null },
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

