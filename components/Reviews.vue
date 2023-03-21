<template>    
    <div>
        <h2 class="text-2xl font-bold  text-fblack sm:mb-5 my-[30px]">Отзывы</h2>  
        <swiper :slidesPerView="1" class="swiper-reviews scrollbar-h-0 w-screen" :pagination="{clickable: true, el: '.swiper-reviews-pagination'}" :loop="true" :modules="[SwiperPagination]" :spaceBetween="20" :breakpoints="{'640': {  slidesPerView: 'auto',  spaceBetween: 20,}}">
            <SwiperSlide class="sm:max-w-[387px]"  v-for="n in 10" :key="n">
                <Review class="w-full"/>
            </SwiperSlide>       
            <div class="swiper-reviews-pagination"/>        
        </swiper>
        <Button size="L" class="mt-[30px] max-sm:mx-auto" @click="openModal">Добавить отзыв</Button>
        <Teleport to="#teleported">
            <Modal @close="closeModal" modalMaxSizeClass="max-w-[714px]" v-show="isShowModal">
                <h2 class="text-[1.5625rem] lg:text-3xl font-bold text-fblack max-lg:mt-[37px]">Оставить отзыв</h2>                
                <form class="flex flex-col gap-5 mt-5 text-fblack">
                    <p class="flex gap-[15px] max-sm:mb-2.5 text-[#32373D] font-bold">Ваша оценка <Rating/></p>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-y-[25px]">
                        <FormsInput decoration="border" type="text">ФИО</FormsInput>                                                                             
                        <FormsInput decoration="border" type="email">Email*</FormsInput> 
                        <FormsSelect decoration="border">Экскурсия</FormsSelect>                                                                      
                        <FormsDatepicker decoration="border" >Дата</FormsDatepicker>                                                                      
                        <FormsTextArea decoration="border" class="h-[85px]" labelClass="col-[full]">Отзыв</FormsTextArea>       
                    </div>
                    <Button size="L" class="lg:w-fit min-w-[150px] max-sm:mt-5">Отправить</Button>                    
                </form>
            </Modal>
        </Teleport>
    </div>
</template>

<script setup>
let isShowModal = ref(false)

const closeModal = ()=>{
    isShowModal.value = false;
}

const openModal = ()=>{
    isShowModal.value = true;
}
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

