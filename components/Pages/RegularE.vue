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
                                <h2 class="text-[1.5625rem] lg:text-3xl font-bold text-fblack max-lg:mt-[37px]">Вечерняя Казань</h2>
                                <form class="flex flex-col lg:gap-10 gap-[30px] mt-[30px] lg:mt-[50px] text-fblack">
                                    <div>
                                        <p class="mb-5 font-medium leading-[1.2] text-[1.0625rem]">{{generalConfigStore.value.static_info.global_words.select_datetime}}</p>
                                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                            <FormsDatepicker decoration="border" :allowedDates="availableSelectDate" v-model="SelectTimeatableDate">{{generalConfigStore.value.static_info.global_words.date}}</FormsDatepicker>
                                            <FormsSelect decoration="border" v-model="selectTimeatableTime" :optionsTitle="timeatableTime.title" :optionsValue="timeatableTime.value">Время</FormsSelect>                                            
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap items-baseline">
                                        <p class="leading-[1.2] text-[1.0625rem] mb-5 lg:mb-[25px]">Выберите категорию <span v-if="priceTimeatables.length > 0">(осталось {{ countPeople - selectСountPeople }} билетов!)</span></p>
                                        <div class="flex gap-[30px] max-sm:w-full font-medium items-center max-lg:mt-5 lg:ml-auto max-lg:order-1">
                                            <p class="text-sm font-medium max-lg:basis-[213px]">Выбрано <span class="text-fred">{{ selectСountPeople }} билетов</span></p>
                                            <p class="text-sm font-medium text-fred shrink-0 ml-auto">{{sumPriceTicket.toLocaleString()}} ₽ </p>
                                        </div>
                                        <table class="table-primary w-full" v-if="priceTimeatables.length > 0">
                                            <thead class="table-primary-thead">
                                                <tr class="group/table">
                                                    <th class="table-primary-th">{{generalConfigStore.value.static_info.global_words.type_ticket}}</th>
                                                    <th class="table-primary-th">{{generalConfigStore.value.static_info.global_words.price}}</th>
                                                    <th class="table-primary-th text-right">{{generalConfigStore.value.static_info.global_words.count}}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="group/table" v-for="priceTimetable in priceTimeatables">
                                                    <td :data-label="generalConfigStore.value.static_info.global_words.type_ticket" class="table-primary-td">{{getTitleTypeTicket(priceTimetable.type_ticket_id)}}</td>
                                                    <td :data-label="generalConfigStore.value.static_info.global_words.price" class="table-primary-td">{{priceTimetable.price}} ₽</td>
                                                    <td :data-label="generalConfigStore.value.static_info.global_words.count" class="table-primary-td"><FormsCounter v-model="priceTimetable.count" class="float-right"/></td>
                                                </tr>                                                
                                            </tbody>
                                        </table>                                      
                                    </div>
                                    <div>                                    
                                        <p class="mb-5 font-medium leading-[1.2] text-[1.0625rem]">{{generalConfigStore.value.static_info.global_words.sale_coupon}}</p>                                        
                                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                            <FormsInput decoration="border" type="text"></FormsInput>                                        
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap items-baseline">
                                        <p class="leading-[1.2] text-[1.0625rem] mb-5 lg:mb-[25px]">{{generalConfigStore.value.static_info.global_words.additional_service}}</p>
                                        <div class="flex gap-[30px] max-sm:w-full font-medium items-center max-lg:mt-5 lg:ml-auto max-lg:order-1">
                                            <p class="text-sm font-medium max-lg:basis-[213px]">Выбрано <span class="text-fred">4 доп. услуги</span></p>
                                            <p class="text-sm font-medium text-fred shrink-0 ml-auto">200 ₽</p> 
                                        </div>
                                        <table class="table-primary">
                                            <thead class="table-primary-thead">
                                                <tr class="group/table">
                                                    <th class="table-primary-th">{{generalConfigStore.value.static_info.global_words.type_ticket}}</th>
                                                    <th class="table-primary-th">{{generalConfigStore.value.static_info.global_words.price}}</th>
                                                    <th class="table-primary-th text-right">{{generalConfigStore.value.static_info.global_words.count}}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="group/table" v-for="additional_product in product.data.info_additional_products.data">
                                                    <td :data-label="generalConfigStore.value.static_info.global_words.type_ticket" class="table-primary-td"><NuxtLink :to="localePath(`/${additional_product.addition_info.slug}`)">{{additional_product.addition_info.lang_info.title}}</NuxtLink></td>
                                                    <td :data-label="generalConfigStore.value.static_info.global_words.price" class="table-primary-td">{{additional_product.price}} ₽</td>
                                                    <td :data-label="generalConfigStore.value.static_info.global_words.count" class="table-primary-td"><FormsCounter class="float-right"/></td>
                                                </tr>                                                                                     
                                            </tbody>                                        
                                        </table>
                                    </div>
                                    <div>                                    
                                        <p class="mb-5 font-medium leading-[1.2] text-[1.0625rem]">{{generalConfigStore.value.static_info.global_words.comment_for_order}}</p>                                        
                                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                            <FormsInput decoration="border" type="text" labelClass="col-[full]"></FormsInput>                                        
                                        </div>
                                    </div>
                                    <div>                                    
                                        <p class="mb-5 font-medium leading-[1.2] text-[1.0625rem]">{{generalConfigStore.value.static_info.global_words.person_data_contract}}</p>                                        
                                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-y-[25px]">
                                            <FormsInput decoration="border" type="text">{{generalConfigStore.value.static_info.global_words.fio}}</FormsInput>
                                            <FormsSelect decoration="border" :options-value="product.data.start_place_types" :options-title="getTitlePlacesStart(product.data.start_place_types)">{{generalConfigStore.value.static_info.global_words.starting_point}}</FormsSelect>                                        
                                            <FormsInput decoration="border" type="tel">Номер телефона*</FormsInput>   
                                            <FormsSelect decoration="border" :options-value="product.data.payment_types" v-model="test" :options-title="getTitlePaymentTypes(product.data.payment_types)">{{generalConfigStore.value.static_info.global_words.type_payment}}</FormsSelect>                                      
                                            <FormsInput decoration="border" type="email">{{generalConfigStore.value.static_info.global_words.email_text}}</FormsInput>        
                                            <FormsCheckbox class="col-[full]">{{generalConfigStore.value.static_info.global_words.order_confirm_procedure_provision_excursion_services}}</FormsCheckbox>                               
                                            <FormsCheckbox class="col-[full]">{{generalConfigStore.value.static_info.global_words.order_fz_confirm_text}}</FormsCheckbox>
                                        </div>
                                    </div>
                                    <Button size="L" class="lg:w-fit">Забронировать экскурсию</Button>
                                </form>
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

<script setup>


const generalConfigStore = useGeneralConfigStore()

const runtimeConfig = useRuntimeConfig()
const locale = useI18n()

let test = ref()

const props = defineProps({            
    product: { type:Object },
})

const product = computed(()=>{
    return props.product
})

/* блок timetable */

let priceTimeatables = ref([])
let SelectTimeatableDate = ref(null)
let selectTimeatableTime = ref(null)

let availableSelectDate = computed(()=>{
    const uniqueDate = new Set()
    for (const timetable of product.value.data.info_timetables.data){        
        uniqueDate.add(timetable.start_event_at)
    }
    return [...uniqueDate]
})

const countPeople = computed(()=>{
  const index = timeatableTime.value.value.findIndex(item=>item == selectTimeatableTime.value) 
  if(index != -1){
    return timeatableTime.value.countPeople[index]
  }
  return null
})

const selectСountPeople = computed(()=>{
    if (priceTimeatables.value.length > 0) {
        let S = 0        
        priceTimeatables.value.forEach(item=>{
            S+=item.count
        }) 
        return S       
    }
    return 0
})

const sumPriceTicket = computed(()=>{
    if (priceTimeatables.value.length > 0) {
        let S = 0        
        priceTimeatables.value.forEach(item=>{
            S+=item.count *item.price
        }) 
        return S       
    }
    return 0
})

const timeatableTime = computed(()=>{
    let object = {title:[], value:[], countPeople:[]}
   
    for (const timetable of product.value.data.info_timetables.data){
        if (new Intl.DateTimeFormat('ru-RU').format(SelectTimeatableDate.value) == timetable.start_event_at_format_day) {           
            object.title.push(timetable.start_event_at_format_time)
            object.value.push(timetable.id)
            object.countPeople.push(timetable.max_count_people)            
        }        
    }
    if (object.value.length > 0) {        
        selectTimeatableTime.value = object.value[0]
    }else{
        selectTimeatableTime.value = null
    }
    
    return object
})

watch(selectTimeatableTime, async ()=>{
    const { data, error } = await useFetch(`${runtimeConfig.public.apiBase}/api/products/${selectTimeatableTime.value}/price-timetable`,{
        headers:{Locale:locale.value},   
    })    
    priceTimeatables.value = []
    if (!error.value) {
        data.value.data.forEach(item => {
            priceTimeatables.value.push({type_ticket_id:item.type_ticket_id, price:item.price, count:0})
        })
    }    
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

/* функции для получения названий по id */

const getTitlePlacesStart = (placesStart)=>{
    if (Array.isArray(placesStart)) {
        return placesStart.map(a=>{
            for(const item of generalConfigStore.value.orders.places_start){
                if(item.id == a) return item.title
            }       
        })
    }    
    for(const item of generalConfigStore.value.orders.places_start){
        if(item.id == placesStart) return [...item.title]
    }       
    
}

const getTitlePaymentTypes = (paymentTypes)=>{
    if (Array.isArray(paymentTypes)) {
        return paymentTypes.map(a=>{
            for(const item of generalConfigStore.value.orders.payment_types){
                if(item.id == a) return item.title
            }       
        })
    }
    for(const item of generalConfigStore.value.orders.payment_types){
        if(item.id == paymentTypes) return [...item.title]
    }  
}

const getTitleCategoriesProduct = ( productCategories )=>{    
    for(const item of generalConfigStore.value.products.categories){
        if(item.id == productCategories) return item.title
    }       
}

const getTitleTypeTicket = ( typeTicket )=>{    
    for(const item of generalConfigStore.value.orders.ticket_types){
        if(item.id == typeTicket) return item.title
    }       
}

</script>
