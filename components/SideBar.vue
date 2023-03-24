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
                <Dropdown class="px-5 border-b-fline" active-class="active border-b">
                    <template #dropdown-header-content>
                        Экскурсии
                    </template>
                    <template #dropdown-header-icon>
                        <IconsDropdownArrow class="p-1.5 w-6 h-6 rounded-full bg-[#F4F4F4] group-[.active]/dropdown:rotate-180 transition-transform duration-500 ease-linear"/>
                    </template>
                    <ul class="flex py-5 flex-col text-fblack gap-[15px]">
                        <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5"><NuxtLink to="/">Казань</NuxtLink></li>
                        <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5"><NuxtLink to="/">Татарстан</NuxtLink></li>
                        <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5"><NuxtLink to="/">Обзорные</NuxtLink></li>
                        <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5"><NuxtLink to="/">Автобусные</NuxtLink></li>                        
                    </ul>
                </Dropdown>
                <Dropdown class="px-5 border-b-fline" active-class="active border-b">
                    <template #dropdown-header-content>
                        Туры
                    </template>
                    <template #dropdown-header-icon>
                        <IconsDropdownArrow class="p-1.5 w-6 h-6 rounded-full bg-[#F4F4F4] group-[.active]/dropdown:rotate-180 transition-transform duration-500 ease-linear"/>
                    </template>
                    <ul class="flex py-5 flex-col text-fblack gap-[15px]">
                        <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5"><NuxtLink to="/">Групповые</NuxtLink></li>
                        <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5"><NuxtLink to="/">Сборные туры</NuxtLink></li>
                        <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5"><NuxtLink to="/">Казань</NuxtLink></li>
                        <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5"><NuxtLink to="/">Татарстан</NuxtLink></li>
                        <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5"><NuxtLink to="/">Йошкар-Ола</NuxtLink></li>
                    </ul>
                </Dropdown>
                <Dropdown class="px-5 border-b-fline" active-class="active border-b">
                    <template #dropdown-header-content>
                        Услуги
                    </template>
                    <template #dropdown-header-icon>
                        <IconsDropdownArrow class="p-1.5 w-6 h-6 rounded-full bg-[#F4F4F4] group-[.active]/dropdown:rotate-180 transition-transform duration-500 ease-linear"/>
                    </template>
                    <ul class="flex py-5 flex-col text-fblack  gap-[15px]">
                        <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5"><NuxtLink to="/">Интерактивные программы</NuxtLink></li>
                        <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5"><NuxtLink to="/">Встреча</NuxtLink></li>
                        <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5"><NuxtLink to="/">Трансфер</NuxtLink></li>
                        <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5"><NuxtLink to="/">Питание</NuxtLink></li>
                        <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5"><NuxtLink to="/">Музеи</NuxtLink></li>
                    </ul>
                </Dropdown>   
                <NuxtLink to="/" class="px-5">Индивидуальные экскурсии</NuxtLink>
                <NuxtLink to="/" class="px-5">Контакты</NuxtLink>                             
            </div>            
        </div>
    </div>
</template>

<script setup>    
    import { useGeneralConfigStore} from '@/stores/generalConfigStore'

    const generalConfigStore = useGeneralConfigStore()

    let isSideBarShow = ref( false )
</script>

