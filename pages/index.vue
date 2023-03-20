<template>
    <main class="grid-container">       
        <swiper-carousel/>
        <div class="col-[full] bg-[url(@/assets/imgs/RecommendationsBg.png)] bg-no-repeat bg-[length:100%_auto] grid-container pt-20 lg:pt-[150px]">       
            <h2 class="lg:text-3xl text-2xl font-bold  text-fblack mb-[30px]">Наши рекомендации</h2>            
            <RecommendationsIndex/>  
        </div>
        <div class=" max-lg:hidden relative col-[full] grid-container bg-no-repeat bg-cover py-10 mt-[150px] bgForm">
            <img src="@/assets/imgs/img2.png" alt="" class="max-[1380px]:hidden absolute top-0 left-0 col-[full] -translate-y-1/2">
            <div >
                <div class="max-w-[510px] space-y-5" >
                    <h2 class="text-[2.1875rem] text-white  font-bold ">Не нашли подходящую экскурсию?</h2>
                    <p class="text-ftext text-sm leading-normal max-w-[350px]">Отправьте заявку на индивидуальную экскурсию, и мы свяжемся с вами!</p>
                    
                    <form class="grid grid-cols-2 gap-5 items-start">
                        <FormsInput type="text" placeholder="Название экскурсии" labelClass="col-span-2"></FormsInput>
                        <FormsInput type="text" placeholder="ФИО"></FormsInput>
                        <FormsInput type="text" placeholder="Адрес начала"></FormsInput>
                        <FormsInput type="tel" placeholder="Телефон"></FormsInput>
                        <FormsInput type="email" placeholder="Email"></FormsInput>
                        <FormsDatepicker v-model="date"></FormsDatepicker>
                        <FormsInput type="text" placeholder="Кол-во человек"></FormsInput>
                        <FormsTextArea placeholder="Пожелания" labelClass="col-span-2" class="col-span-2 h-[90px]"></FormsTextArea>
                        <Button size="L" class="max-w-[150px]">Отправить</Button>                        
                    </form>
                </div>
            </div>
        </div>         
        <Partners class="col-[full] mt-[150px] max-lg:hidden"/>       
        
    </main>           
</template>

<style>
    .bgForm{
        background: url(@/assets/imgs/bgForm.png), url(@/assets/imgs/pattern2.png);
        background-repeat: no-repeat;
        background-size:auto 100%, cover;
        background-position: right, left;
    }
</style>

<script setup>
let date = ref()
</script>


