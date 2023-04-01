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
                <SideBarItem v-for="(item, key) in SideBarItems" class="px-5" :key="key" :link="item"/>                
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

    /* let data = ref([
        {
            "id": 1,
            "slug": "ekskursii",
            "parent_id": 0,
            "title": "Экскурсии",
            "children": [
            {
                "id": 2,
                "slug": "ekskursii/kazan",
                "parent_id": 1,
                "title": "Экскурсии по Казани"
            },
            {
                "id": 19,
                "slug": "ekskursii/podborki",
                "parent_id": 1,
                "title": "Подборки экскурсий"
            },
            {
                "id": 13,
                "slug": "ekskursii/tatarstan",
                "parent_id": 1,
                "title": "Экскурсии по Татарстану"
            },
            {
                "id": 9,
                "slug": "ekskursii/kazan/ehkskursii-s-centrom-semi-kazan",
                "parent_id": 2,
                "title": "Экскурсии на Чашу"
            },
            {
                "id": 12,
                "slug": "ekskursii/kazan/ehkskursii-s-kremlyom",
                "parent_id": 2,
                "title": "Экскурсии с Кремлём"
            },
            {
                "id": 11,
                "slug": "ekskursii/kazan/ehkskursii-s-kfu",
                "parent_id": 2,
                "title": "Экскурсии с КФУ"
            },
            {
                "id": 10,
                "slug": "ekskursii/kazan/ehkskursii-s-dvorcom-zemledelcev",
                "parent_id": 2,
                "title": "Экскурсии с Дворцом земледельцев"
            },
            {
                "id": 8,
                "slug": "ekskursii/kazan/ehkskursii-v-hram-vsekh-religij",
                "parent_id": 2,
                "title": "Экскурсии в ХВР"
            },
            {
                "id": 7,
                "slug": "ekskursii/kazan/ehkskursii-po-staro-tatarskoj-slobode",
                "parent_id": 2,
                "title": "Экскурсии по СТС"
            },
            {
                "id": 6,
                "slug": "ekskursii/kazan/ehkskursii-po-kremlevskoj",
                "parent_id": 2,
                "title": "Экскурсии по Кремлёвской"
            },
            {
                "id": 5,
                "slug": "ekskursii/kazan/ehkskursii-po-chernomu-ozeru",
                "parent_id": 2,
                "title": "Экскурсии по Чёрному озеру"
            },
            {
                "id": 4,
                "slug": "ekskursii/kazan/ehkskursii-po-baumana",
                "parent_id": 2,
                "title": "Экскурсии по Баумана"
            },
            {
                "id": 3,
                "slug": "ekskursii/kazan/obzornye-ehkskursii-po-kazani",
                "parent_id": 2,
                "title": "Обзорные экскурсии по Казани"
            },
            {
                "id": 15,
                "slug": "ekskursii/tatarstan/bolgar",
                "parent_id": 13,
                "title": "Экскурсии в Болгар"
            },
            {
                "id": 18,
                "slug": "ekskursii/tatarstan/raifa",
                "parent_id": 13,
                "title": "Экскурсии в Раифу"
            },
            {
                "id": 17,
                "slug": "ekskursii/tatarstan/chistopol",
                "parent_id": 13,
                "title": "Экскурсии в Чистополь"
            },
            {
                "id": 16,
                "slug": "ekskursii/tatarstan/elabuga",
                "parent_id": 13,
                "title": "Экскурсии в Елабугу"
            },
            {
                "id": 14,
                "slug": "ekskursii/tatarstan/sviyazhsk",
                "parent_id": 13,
                "title": "Экскурсии в Свияжск"
            },]
        },    
        {
            "id": 38,
            "slug": "tury",
            "parent_id": 0,
            "title": "Туры"
        },    
    ]) */

    /* const arrayMenyLink = computed(()=>{
        let array = []
        generalConfigStore.value.structure.forEach(item=>{
            if (item.parent_id == 0) {
               return array.push(item)               
            }
        })
        generalConfigStore.value.structure.forEach(item=>{
            if (item.parent_id == 0) {
               return array.push(item)               
            }
            array.forEach()
        })
        return array
    }) */
 
</script>

