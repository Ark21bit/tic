<template>
    <main class="grid-container contain-paint">
        
        <SwiperOne class="col-[full]" :data="product.data.media_gallery.data"/>              
        <ExcursionCategories class="col-[full] grid-container border-b border-b-fline mb-10 max-lg:hidden"/>
        <div class="grid grid-cols-1 lg:grid-cols-[265px_calc(100%-305px)] gap-y-5 gap-x-10 max-lg:mt-[30px] pb-5 lg:pb-[60px]">
            <div class="relative">
                <SideBar class="w-full sticky top-[50px]" />               
            </div>
            <div class="flex flex-col gap-[60px]">
                <div class="text-sm text-fblack -mb-5 max-lg:hidden">
                    <NuxtLink class="last:text-finactive after:content-['/'] last:after:content-['']" v-for="item in product.data.info_breadcrumbs.data" :to="localePath(`/${item.url}`)">{{ item.lang_info.title }}</NuxtLink>
                </div>
                <div>                    
                     <h1 class="text-[1.5625rem] leading-1.2 lg:text-4xl text-fblack  font-bold mb-5">Вечерняя Казань</h1>
                     <p class="text-ftext3 text-sm leading-[1.4] mb-[30px]">Увидеть Казань в свете вечерних огней — обязательный пункт путешествия в наш город. В ходе экскурсии вы проедете по центру города с рассказом экскурсовода об истории улиц и памятников и сделаете несколько фотоостановок у самых ярко подсвеченных достопримечательностей. У Центра семьи «Казан» вы узнаете, почему наш город так назван и что за таинственные существа охраняют центральный ЗАГС города, у Дворца земледельцев восхититесь роскошью, торжественностью и величием современного памятника архитектуры, рядом с Театром кукол погрузитесь в атмосферу детской сказки и волшебства. Панорама ночного Казанского Кремля с красавицей мечетью Кул-Шариф и древним Благовещенским собором пополнит вашу серию фотографий тысячелетней Казани. ВНИМАНИЕ! В период новогодних каникул заезд к чаше по возможности (возможно перекрытие дорог в связи с установкой у чаши центральной городской елки)</p>
                     <Button @click="openModal" size="L">Заказать экскурсию</Button>
                </div>
                <div>
                    <h2 class="text-2xl font-bold  text-fblack mb-[25px]">Общее описание</h2>
                    <div class="grid grid-flow-dense grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 gap-5">
                        <div class="p-[15px] rounded-[10px] shadow-[0_4px_23px_0_rgba(0,0,0,.07)]">
                            <img src="@/assets/imgs/icons/calendar.svg" alt="" class="mb-6">
                            <p class="text-ftext3 text-xs leading-[1.4] mb-1.5">Ближайшая дата</p>
                            <p class="text-fblack font-medium lg:text-xl ">25 февраля</p>
                        </div>
                        <div class="p-[15px] rounded-[10px] shadow-[0_4px_23px_0_rgba(0,0,0,.07)]">
                            <img src="@/assets/imgs/icons/price.svg" alt="" class="mb-6">
                            <p class="text-ftext3 text-xs leading-[1.4] mb-1.5">{{generalConfigStore.value.static_info.global_words.price_list}}</p>
                            <p class="text-fblack font-medium lg:text-xl ">{{ product.data.price_see }} ₽</p>
                        </div>
                        <div class="p-[15px] rounded-[10px] shadow-[0_4px_23px_0_rgba(0,0,0,.07)]">
                            <img src="@/assets/imgs/icons/time.svg" alt="" class="mb-6">
                            <p class="text-ftext3 text-xs leading-[1.4] mb-1.5">{{ generalConfigStore.value.static_info.global_words.duration }}</p>
                            <p class="text-fblack font-medium lg:text-xl ">10 ч. 00 мин</p>
                        </div>
                        <div class="p-[15px] sm:max-lg:row-start-1 sm:max-lg:row-span-2 sm:max-lg:col-start-3 col-span-2 rounded-[10px] shadow-[0_4px_23px_0_rgba(0,0,0,.07)]">
                            <img src="@/assets/imgs/icons/map.svg" alt="" class="mb-6">
                            <div class="flex max-lg:flex-col gap-6 justify-between">
                                <div>
                                    <p class="text-ftext3 text-xs leading-[1.4] mb-1.5">Отправление</p>
                                    <p class="text-fblack font-medium ">ул. Петербургская</p>
                                </div>
                                <div >
                                    <p class="text-ftext3 text-xs leading-[1.4] mb-1.5">Отправление</p>
                                    <p class="text-fblack font-medium ">ул. Пушкина. 4</p>
                                </div>
                                <div >
                                    <p class="text-ftext3 text-xs leading-[1.4] mb-1.5">Отправление</p>
                                    <p class="text-fblack font-medium ">ул. Московская,2</p>
                                </div>
                            </div>  
                        </div>
                        <div class="p-[15px] rounded-[10px] shadow-[0_4px_23px_0_rgba(0,0,0,.07)]">
                            <img src="@/assets/imgs/icons/trail.svg" alt="" class="mb-6">
                            <p class="text-ftext3 text-xs leading-[1.4] mb-1.5">Вид экскурсии</p>
                            <p class="text-fblack font-medium lg:text-xl ">{{getTitleCategoriesProduct(product.data.category_id)}}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 class="text-2xl font-bold  text-fblack mb-5 lg:mb-[15px]">Все цены</h2>
                    <p class="text-ftext2 text-sm  mb-[30px] sm:mb-5">Дети до 7 лет обслуживаются бесплатно</p>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-5">
                        <div class="p-[15px] border border-fline rounded-[10px]">
                            <p class="text-ftext3 text-sm  mb-[30px]">Взрослый</p>
                            <p class="text-fred font-bold text-xl ">899 ₽</p>
                        </div>
                        <div class="p-[15px] border border-fline rounded-[10px]">
                            <p class="text-ftext3 text-sm  mb-[30px]">Детский</p>
                            <p class="text-fred font-bold text-xl ">800 ₽</p>
                        </div>
                        <div class="p-[15px] border border-fline rounded-[10px]">
                            <p class="text-ftext3 text-sm  mb-[30px]">Пенсионеры</p>
                            <p class="text-fred font-bold text-xl ">800 ₽</p>
                        </div>
                        <div class="p-[15px] border border-fline rounded-[10px]">
                            <p class="text-ftext3 text-sm  mb-[30px]">Студенты</p>
                            <p class="text-fred font-bold text-xl ">800 ₽</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 class="text-2xl font-bold  text-fblack mb-[30px]">В стоимость входит</h2>
                    <ul class="grid sm:grid-cols-2 gap-5  text-fblack font-medium mb-[30px]">
                        <li v-for="item in product.data.lang_info.half_text" class="before:w-2 before:h-2 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5">{{ item }}</li>
                    </ul>
                    <Button size="L" class="" @click="openModal">Заказать экскурсию</Button>
                    <ClientOnly>
                        <Teleport to="#teleported">
                            <Modal @close="closeModal" v-show="isShowModal">
                                <RegularEModal :product="product"/>
                            </Modal>
                        </Teleport>
                    </ClientOnly>
                </div>
                <div class="lg:border-y border-y-fline lg:py-[30px] max-lg:hidden flex flex-col gap-[30px]">
                    <div>
                        <h3 class="text-xl font-medium text-fblack mb-5">{{ product.data.lang_info.title }}</h3>
                        <p class="text-sm leading-[1.4] text-ftext3">{{ product.data.lang_info.mini_description }}</p>                      
                    </div>
                    <div> 
                        <h3 class="text-xl font-medium text-fblack mb-5">{{ product.data.lang_info.description }}</h3>
                        <p class="text-sm leading-[1.4] text-ftext3">{{ product.data.lang_info.text }}</p>                       
                    </div>
                    <NuxtLink :to="localePath(`/`)" class="link font-medium text-sm max-lg:hidden">{{generalConfigStore.value.static_info.global_words.show_more}}</NuxtLink>
                </div>             
                <Reviews/> 
            </div>            
        </div>
        <div class="col-[full] grid-container pt-10 lg:pt-[60px] lg:border-t border-t-fline">
            <h2 class="text-2xl lg:text-3xl font-bold  text-fblack mb-[30px]">{{generalConfigStore.value.static_info.global_words.recommendations}}</h2>                    
            <Recommendations :data="product.data.info_recommendations.data"/> 
        </div>  
    </main>
</template>

<script>

</script>

<script setup>
const generalConfigStore = useGeneralConfigStore()

const props = defineProps({            
    product: { type:Object },
})

const product = computed(()=>{
    /* props.product.data.info_additional_products.data.forEach((element, index)  => {
        forms.value.additional[index].id = element.addition_info.id
        forms.value.additional[index].price = element.price
    });    */
    
    return props.product
})

/* модальные окна */
let isShowModal = ref(false)

const closeModal = ()=>{
    isShowModal.value = false;
    setTimeout(() => {        
        document.querySelector('body').style.overflowY = ""
        document.querySelector('#__nuxt').style.paddingRight = ""
    }, 400);
}

const openModal = ()=>{
    document.querySelector('body').style.overflowY = "hidden"
    document.querySelector('#__nuxt').style.paddingRight = "17px"
    isShowModal.value = true;
}

onUnmounted(()=>{
    document.querySelector('body').style.overflowY = ""
    document.querySelector('#__nuxt').style.paddingRight = ""
})

const getTitleCategoriesProduct = ( productCategories )=>{    
    for(const item of generalConfigStore.value.products.categories){
        if(item.id == productCategories) return item.title
    }       
}
</script>
