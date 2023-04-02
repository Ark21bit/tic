<template>    
    <div>
        <h2 class="text-2xl font-bold  text-fblack sm:mb-5 my-[30px]">{{ generalConfigStore.value.static_info.global_words.reviews }}</h2>  
        <swiper :slidesPerView="1" class="swiper-reviews scrollbar-h-0 w-screen" :pagination="{clickable: true, el: '.swiper-reviews-pagination'}" :loop="true" :modules="[SwiperPagination]" :spaceBetween="20" :breakpoints="{'640': {  slidesPerView: 'auto',  spaceBetween: 20,}}">
            <SwiperSlide class="sm:max-w-[387px]"  v-for="n in 10" :key="n">
                <Review class="w-full"/>
            </SwiperSlide>       
            <div class="swiper-reviews-pagination"/>        
        </swiper>
        <Button size="L" class="mt-[30px] max-sm:mx-auto" @click="openModal">{{generalConfigStore.value.static_info.global_words.add_review}}</Button>
        <ClientOnly>            
            <Teleport to="#teleported">
                <Modal @close="closeModal" modalMaxSizeClass="max-w-[714px]" v-show="isShowModal">
                    <h2 class="text-[1.5625rem] lg:text-3xl font-bold text-fblack max-lg:mt-[37px]">{{generalConfigStore.value.static_info.global_words.send_review}}</h2>                
                    <form @submit.prevent="storeReview" class="flex flex-col gap-5 mt-5 text-fblack">
                        <p class="flex gap-[15px] max-sm:mb-2.5 text-[#32373D] font-bold">{{generalConfigStore.value.static_info.global_words.you_mark}} <Rating v-model="forms.rating" :is-interactive="true"/></p>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-y-[25px]">
                            <FormsInput :errors="getErrorsMessage(v$.name.$errors)" v-model="forms.name" decoration="border" type="text">{{generalConfigStore.value.static_info.global_words.fio}}</FormsInput>                                                                             
                            <FormsInput :errors="getErrorsMessage(v$.email.$errors)" v-model="forms.email" decoration="border" type="email">{{generalConfigStore.value.static_info.global_words.email_text}}</FormsInput> 
                            <FormsSelect decoration="border">{{generalConfigStore.value.static_info.global_words.excursion}}</FormsSelect>                                                                      
                            <FormsDatepicker decoration="border" >{{generalConfigStore.value.static_info.global_words.date}}</FormsDatepicker>                                                                      
                            <FormsTextArea :errors="getErrorsMessage(v$.message.$errors)" v-model="forms.message" decoration="border" class="h-[85px]" labelClass="col-[full]">Отзыв</FormsTextArea>       
                        </div>
                        <Button size="L" class="lg:w-fit min-w-[150px] max-sm:mt-5">{{generalConfigStore.value.static_info.global_words.send}}</Button>                    
                    </form>
                </Modal>
            </Teleport>
        </ClientOnly>
    </div>
</template>

<script setup>  
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers  } from '@vuelidate/validators'

const generalConfigStore = useGeneralConfigStore()

let forms = ref({ rating:null, product_id:null, name:null, email:null, message:null })

const storeReview = async()=>{
    const result = await v$.value.$validate()
    if (!result) {
        return
    }
    const { data, error } = await useFetch(`${runtimeConfig.public.apiBase}/api/reviews/store`,{
        body:{
            product_id:forms.value.client_email,
            rating:forms.value.client_fio,
            name:forms.value.client_telephone,
            email:forms.value.comment_client,
            message:forms.value.sale_coupon_id,           
        },
        method:'Post',
    })
}

const rules = {    
    /* product_id:{required:helpers.withMessage('обязательное поле', required)}, */
    rating:{required:helpers.withMessage('обязательное поле', required)}, 
    name:{required:helpers.withMessage('обязательное поле', required)},     
    email:{required:helpers.withMessage('обязательное поле', required), email},     
    message:{required:helpers.withMessage('обязательное поле', required)},     
}

const v$ = useVuelidate(rules, forms,{ $lazy: true })

const getErrorsMessage =(errors)=>{
    return errors.map(a=>{
       return a.$message
    })
}

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
</script>

<style type="text/tailwindcss">

    .swiper-reviews-pagination{
        @apply sm:hidden flex justify-center mt-5 
    }

    .swiper-reviews-pagination .swiper-pagination-bullet{
        @apply bg-finactive opacity-100 w-2.5 h-2.5
    }

    .swiper-reviews-pagination .swiper-pagination-bullet-active{
        @apply bg-fred
    }

    .swiper-reviews{
        @apply max-sm:w-full overflow-visible lg:overflow-x-scroll lg:-m-5 lg:p-5
    }
</style>

