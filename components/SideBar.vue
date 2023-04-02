<template>
    <div class="flex flex-col border border-fline group/side rounded-[10px] bg-white text-fblack" :class="{'menu-active':isSideBarShow}">
        <div class="flex justify-between p-5 items-center uppercase">
            {{ generalConfigStore.value.static_info.global_words.menu }}  
            <button @click="isSideBarShow = !isSideBarShow" class="lg:hidden flex flex-col justify-between w-[26px] group-[.menu-active]/side:h-5 h-3.5 transition-[height] ease-linear duration-100">
                <span class="w-full h-0.5 bg-fred rounded-[1px] group-[.menu-active]/side:-rotate-45 origin-[100%] transition-transform ease-linear duration-500"/>
                <span class="w-[11px] h-0.5 ml-auto bg-fred rounded-[1px] group-[.menu-active]/side:opacity-0 transition-opacity ease-linear duration-500"/>
                <span class="w-full h-0.5 bg-fred rounded-[1px] group-[.menu-active]/side:rotate-45 origin-[100%] transition-transform ease-linear duration-500"/>
            </button></div>
        <div class="flex-col group-[.menu-active]/side:flex lg:flex hidden border-t border-t-fline">
            <div class="flex flex-col gap-5 py-5 ">                
                <SideBarItem v-for="item in SideBarItems" class="px-5" :link="item"/>                
            </div>            
        </div>
    </div>
</template>

<script setup>
    const generalConfigStore = useGeneralConfigStore()

    let isSideBarShow = ref( false )

    const SideBarItems = computed(()=>{
        return generalConfigStore.value.structure.filter(a=>{
            return a.parent_id ==0
        })
    })    
 
</script>

