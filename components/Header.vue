<template>
    <!-- Шапка -->
    <header class="relative grid-container group shadow-[0_2px_34px_0_rgba(0,0,0,.06)]" :class="{'menu-active':isMobileMenuShow}">
        <div class="py-4 flex gap-10 justify-between items-center">
            <NuxtLink to="/map"><IconsLogo class="text-fred w-[135px] lg:w-[169px]"/></NuxtLink>
            <nav class="lg:flex hidden items-center gap-[35px] text-sm text-fblack">
                <NuxtLink :to="localePath(`${link.slug}`)" v-for="link in generalConfigStore.value.static_info.menu.header">{{ link.title }}</NuxtLink>
            </nav>
            <div class="lg:flex hidden text-finactive text-sm font-medium">
                <NuxtLink :to="switchLocalePath(key)" :class="{'text-fred':locale.locale._value == key}" class="flex after:w-[1px] last:after:hidden after:h-full after:bg-[rgba(28,25,25,0.4)] after:mx-2.5" v-for="item, key in generalConfigStore.value.locales">{{ item.slice(0,2)}}</NuxtLink>            
            </div>
            <div class="flex gap-4 max-sm:hidden max-lg:ml-auto">
                <div class="flex flex-col text-sm justify-evenly font-medium text-fblack" > 
                    <NuxtLink :to="`tel:${generalConfigStore.value.static_info.contact.telephones[0].replace(/\s/g,'')}`" class="w-max">{{generalConfigStore.value.static_info.contact.telephones[0]}}</NuxtLink>
                    <NuxtLink :to="`tel:${generalConfigStore.value.static_info.contact.telephones[1].replace(/\s/g,'')}`" class="w-max">{{generalConfigStore.value.static_info.contact.telephones[1]}}</NuxtLink>                    
                </div>
                <Button size="L" class="lg:p-2.5"><img src="@/assets/imgs/icons/phone.svg" alt="" class="max-lg:hidden"><span class="lg:hidden">{{ generalConfigStore.value.static_info.global_words.request_call }}</span></Button>
            </div>
            <button @click="isMobileMenuShow = !isMobileMenuShow" class="lg:hidden flex flex-col justify-between w-[26px] group-[.menu-active]:h-5 h-3.5 transition-[height] ease-linear duration-100">
                <span class="w-full h-0.5 bg-fblack rounded-[1px] group-[.menu-active]:rotate-45 origin-[0] transition-transform ease-linear duration-500"/>
                <span class="w-full h-0.5 bg-fblack rounded-[1px] group-[.menu-active]:opacity-0 transition-opacity ease-linear duration-500"/>
                <span class="w-full h-0.5 bg-fblack rounded-[1px] group-[.menu-active]:-rotate-45 origin-[0] transition-transform ease-linear duration-500"/>
            </button>
        </div>
        <!-- меню на мобилках -->
        <div class="absolute leading-tight group-[.menu-active]:flex hidden lg:group-[.menu-active]:hidden flex-col col-[full] bg-white z-50 top-full left-0 w-full pt-[25px] pb-[15px] border-t border-t-[#E8E8E8]">            
           
            <template v-for="link in generalConfigStore.value.static_info.menu.header">
                <Dropdown v-if="link.hasOwnProperty('children')" class="p-[15px] border-b border-b-[#E8E8E8]">
                    <template #dropdown-header-content>
                        {{ link.title }}
                    </template>
                    <div class="flex mt-5 flex-col text-fblack gap-5">
                        <NuxtLink :to="localePath(`${item.slug}`)" v-for="item in link.children">{{ item.title }}</NuxtLink>
                    </div>
                </Dropdown>
                <NuxtLink v-else :to="localePath(`${link.slug}`)" class="p-[15px] border-b border-b-[#E8E8E8]">{{ link.title }}</NuxtLink>
            </template>            
            <div class="flex text-finactive mt-10 text-sm font-medium px-[15px]">
                <NuxtLink :to="switchLocalePath(key)" :class="{'text-fred':locale.locale._value == key}" class="flex after:w-[1px] last:after:hidden after:h-full after:bg-[rgba(28,25,25,0.4)] after:mx-2.5" v-for="item, key in generalConfigStore.value.locales">{{ item.slice(0,2)}}</NuxtLink> 
            </div>
            <div class="flex flex-col gap-5 sm:hidden mt-[55px] px-[15px]">
                <div class="flex text-sm gap-x-10 font-medium text-fblack" > 
                    <NuxtLink :to="`tel:${generalConfigStore.value.static_info.contact.telephones[0].replace(/\s/g,'')}`">{{generalConfigStore.value.static_info.contact.telephones[0]}}</NuxtLink>
                    <NuxtLink :to="`tel:${generalConfigStore.value.static_info.contact.telephones[1].replace(/\s/g,'')}`">{{generalConfigStore.value.static_info.contact.telephones[1]}}</NuxtLink> 
                </div>
                <Button size="L">{{generalConfigStore.value.static_info.global_words.request_call}}</Button>
            </div>
        </div>
        <!-- ------------- -->
    </header>
</template>

<script setup>


const generalConfigStore = useGeneralConfigStore()

let isMobileMenuShow = ref( false )

const locale = useI18n()

</script>
