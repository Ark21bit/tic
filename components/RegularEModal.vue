<template>
    <h2 class="text-[1.5625rem] lg:text-3xl font-bold text-fblack max-lg:mt-[37px]">Вечерняя Казань</h2>
    <form class="flex flex-col lg:gap-10 gap-[30px] mt-[30px] lg:mt-[50px] text-fblack" @submit.prevent="storeOrder">
        <div>
            <p class="mb-5 font-medium leading-[1.2] text-[1.0625rem]">{{generalConfigStore.value.static_info.global_words.select_datetime}}</p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <FormsDatepicker decoration="border" :allowedDates="availableSelectDate" v-model="SelectTimeatableDate">{{generalConfigStore.value.static_info.global_words.date}}</FormsDatepicker>
                <FormsSelect decoration="border" v-model="selectTimeatableTime" :optionsTitle="timeatableTime.title" :optionsValue="timeatableTime.value">Время</FormsSelect>                                            
            </div>
        </div>
        <div class="flex flex-wrap items-baseline" v-auto-animate>
            <p class="leading-[1.2] text-[1.0625rem] lg:grow mb-5 lg:mb-[25px]">Выберите категорию <span v-if="priceTimeatables.length > 0">(осталось {{ countPeople - selectСountPeople }} билетов!)</span></p>
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
                <FormsInput decoration="border" @input="checkCoupon" type="text" v-model="forms.promo"></FormsInput>{{ coupon }}                         
            </div>
        </div>
        <div class="flex flex-wrap items-baseline">
            <p class="leading-[1.2] text-[1.0625rem] mb-5 lg:mb-[25px]">{{generalConfigStore.value.static_info.global_words.additional_service}}</p>
            <div class="flex gap-[30px] max-sm:w-full font-medium items-center max-lg:mt-5 lg:ml-auto max-lg:order-1">
                <p class="text-sm font-medium max-lg:basis-[213px]">Выбрано <span class="text-fred">{{  additionalCount}} доп. услуги</span></p>
                <p class="text-sm font-medium text-fred shrink-0 ml-auto">{{ additionlSumPrice }} ₽</p> 
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
                    <tr class="group/table" v-for="(additional_product, index) in product.data.info_additional_products.data">
                        <td :data-label="generalConfigStore.value.static_info.global_words.type_ticket" class="table-primary-td"><NuxtLink :to="localePath(`/${additional_product.addition_info.slug}`)">{{additional_product.addition_info.lang_info.title}}</NuxtLink></td>
                        <td :data-label="generalConfigStore.value.static_info.global_words.price" class="table-primary-td">{{additional_product.price}} ₽</td>
                        <td :data-label="generalConfigStore.value.static_info.global_words.count" class="table-primary-td"><FormsCounter v-model="forms.additional[index].count" class="float-right"/></td>
                    </tr>                                                                                     
                </tbody>                                        
            </table>
            {{ forms.additional }}
        </div>
        <div>                                    
            <p class="mb-5 font-medium leading-[1.2] text-[1.0625rem]">{{generalConfigStore.value.static_info.global_words.comment_for_order}}</p>                                        
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <FormsInput v-model="forms.comment_client" decoration="border" type="text" labelClass="col-[full]"></FormsInput>                                        
            </div>
        </div>
        <div>                                    
            <p class="mb-5 font-medium leading-[1.2] text-[1.0625rem]">{{generalConfigStore.value.static_info.global_words.person_data_contract}}</p>                                        
            <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-y-[25px]" >
                <FormsInput decoration="border" :errors="getErrorsMessage(v$.client_fio.$errors)" type="text" v-model="forms.client_fio">{{generalConfigStore.value.static_info.global_words.fio}}</FormsInput>
                <FormsSelect decoration="border" v-model="forms.place_start_id" :options-value="product.data.start_place_types" :options-title="getTitlePlacesStart(product.data.start_place_types)">{{generalConfigStore.value.static_info.global_words.starting_point}}</FormsSelect>                                        
                <FormsInput decoration="border" :errors="getErrorsMessage(v$.client_telephone.$errors)" v-mask="['+7(###)###-##-##']" v-model="forms.client_telephone" type="tel">Номер телефона*</FormsInput>   
                <FormsSelect decoration="border" v-model="forms.payment_type_id"  :options-value="product.data.payment_types" :options-title="getTitlePaymentTypes(product.data.payment_types)">{{generalConfigStore.value.static_info.global_words.type_payment}}</FormsSelect>                                      
                <FormsInput decoration="border" :errors="getErrorsMessage(v$.client_email.$errors)" v-model="forms.client_email" type="email">{{generalConfigStore.value.static_info.global_words.email_text}}</FormsInput>        
                <FormsCheckbox :errors="getErrorsMessage(v$.confirm1.$errors)" v-model="forms.confirm1" class="col-[full]">{{generalConfigStore.value.static_info.global_words.order_confirm_procedure_provision_excursion_services}}</FormsCheckbox>                               
                <FormsCheckbox :errors="getErrorsMessage(v$.confirm2.$errors)" v-model="forms.confirm2" class="col-[full]">{{generalConfigStore.value.static_info.global_words.order_fz_confirm_text}}</FormsCheckbox>
            </div>
        </div>
        <Button size="L" class="lg:w-fit">Забронировать экскурсию</Button>
    </form>
</template>
<script>
export default {
    directives: {mask}
}
</script>

<script setup>
import {mask} from 'vue-the-mask'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email, sameAs, helpers  } from '@vuelidate/validators'

const generalConfigStore = useGeneralConfigStore()
const runtimeConfig = useRuntimeConfig()
const locale = useI18n()

const props = defineProps({
    product:{type:Object, default:{}}
})

const product = computed(()=>{
    props.product.data.info_additional_products.data.forEach((element, index)  => {
        forms.value.additional[index].id = element.addition_info.id
        forms.value.additional[index].price = element.price
    });   
    
    return props.product
})

/* доп усулуги */

const additionalCount = computed(()=>{
    let S = 0
    forms.value.additional.forEach(item => {
        S+= item.count
    }) 
    return S
})

const additionlSumPrice = computed(()=>{
    let S = 0
    forms.value.additional.forEach(item => {
        S+= item.price*item.count
    }) 
    return S
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

/* отправка данных на сервер */

let forms = ref({promo:null, client_fio:null, client_email:null, client_telephone:null, comment_client:null, sale_coupon_id:null, payment_type_id:null, additional:[{count:0, id:null, price:null }], type_price_id:null, place_start_id:null, confirm1:false, confirm2:false })

const storeOrder = async()=>{  
    if ((countPeople.value - selectСountPeople.value)<0) {
        return
    }

    const result = await v$.value.$validate()
    if (!result) {
        return
    }

    let tickets = [];
    priceTimeatables.value.forEach(item => {
        tickets.push({type_id:item.type_ticket_id, count:item.count})
    })    

    let additional = [];
    forms.value.additional.forEach(item => {
        additional.push({id:item.id, count:item.count})
    }) 

    const { data, error } = await useFetch(`${runtimeConfig.public.apiBase}/api/orders/store`,{
        body:{
            client_email:forms.value.client_email,
            client_fio:forms.value.client_fio,
            client_telephone:forms.value.client_telephone,
            comment_client:forms.value.comment_client,
            sale_coupon_id:forms.value.sale_coupon_id,
            payment_type_id:forms.value.payment_type_id,
            product_id:props.product.data.id,
            place_start_id:forms.value.place_start_id,
            timetable_id:selectTimeatableTime.value,
            tickets:tickets,     
        },
        method:'Post',
    })

    if (error.value) {
        console.log(error)
    }

    console.log(data)
}

const getErrorsMessage =(errors)=>{
    return errors.map(a=>{
       return a.$message
    })
}

/* валидация формы */

const rules = {    
    client_fio:{required:helpers.withMessage('обязательное поле', required), minLength:minLength(3)},
    client_email:{required:helpers.withMessage('обязательное поле', required), email}, 
    client_telephone:{required:helpers.withMessage('обязательное поле', required)},     
    confirm1:{sameAs:sameAs(true)},     
    confirm2:{sameAs:sameAs(true)},     
}

const v$ = useVuelidate(rules, forms,{ $lazy: true })

/* Проверка промокода */

let coupon = ref(null)

const checkCoupon = async()=>{
    coupon.value = null
    forms.value.sale_coupon_id = null
    if(forms.value.promo){
        const { data, error } = await useFetch(`${runtimeConfig.public.apiBase}/api/orders/check-coupon`,{
            query:{coupon:forms.value.promo}
        }) 
        if (error.value) {
            return coupon.value = error.value.data.message        
        }
        forms.value.sale_coupon_id = data.value.data.id  
        coupon.value = data.value.data.sale_percent  
    }
    return
}

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

const getTitleTypeTicket = ( typeTicket )=>{    
    for(const item of generalConfigStore.value.orders.ticket_types){
        if(item.id == typeTicket) return item.title
    }       
}
</script>
