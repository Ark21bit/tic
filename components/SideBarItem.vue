<template>
    <Dropdown class="border-b-fline grow" active-class="border-b" v-if="children.length > 0"  >
        <template #dropdown-header-content>
            {{link.title}}
        </template>
        <template  #dropdown-header-icon="{ isDropdownItemShow }">
            <IconsDropdownArrow class="p-1.5 w-6 h-6 rounded-full bg-[#F4F4F4] transition-transform duration-500 ease-linear" :class="{'rotate-180':isDropdownItemShow}"/>
        </template>
        <ul class="flex py-5 flex-col text-fblack gap-[15px]">           
            <li v-for="(item) in children" :key="item.id" class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5">
                <SideBarItem :link="item" />
            </li> 
        </ul>
    </Dropdown>
    
    <NuxtLink v-else :to="localePath(`/${link.slug}`)">{{link.title}}</NuxtLink>   
</template>



<script setup>    
const generalConfigStore = useGeneralConfigStore()

const props = defineProps({            
    link: { type:Object, default:{} },
})

const children = computed(()=>{
    return generalConfigStore.value.structure.filter(a=>{
        return a.parent_id == props.link.id
    })
}) 
</script>

