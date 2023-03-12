<template>
    <div class="col-[full] bg-[url(@/assets/imgs/RecommendationsBg.png)] bg-no-repeat bg-[length:100%_auto] grid-container pt-20 lg:pt-[150px]">       
        <h2></h2>
        <div class="flex lg:grid lg:grid-cols-4 overflow-x-scroll  gap-5">
            <Card class="max-lg:w-[260px] shrink-0 h-[350px] col-span-2" :isSale="true"/>
            <Card class="max-lg:w-[260px] shrink-0 h-[350px]"/>
            <Card class="max-lg:w-[260px] shrink-0 h-[350px]"/>                
            <Card class="max-lg:w-[260px] shrink-0 h-[350px]"/>
            <Card class="max-lg:w-[260px] shrink-0 h-[350px] col-span-2"/>
            <Card class="max-lg:w-[260px] shrink-0 h-[350px]"/>
        </div>        
    </div>
    <div class=" max-lg:hidden relative col-[full] grid-container bg-no-repeat bg-cover py-10 mt-[150px] bgForm">
        <img src="@/assets/imgs/img2.png" alt="" class="absolute top-0 left-0 col-[full] -translate-y-1/2">
        <div >
            <div class="max-w-[510px] space-y-5" >
                <h2 class="text-[2.1875rem] text-white leading-[1.2] font-bold ">Не нашли подходящую экскурсию?</h2>
                <p class="text-ftext text-sm leading-normal max-w-[350px]">Отправьте заявку на индивидуальную экскурсию, и мы свяжемся с вами!</p>
                <form class="grid grid-cols-2 gap-5">
                    <Input placeholder="Название экскурсии" class="col-span-2"></Input>
                    <Input placeholder="ФИО"></Input>
                    <Input placeholder="Адрес начала"></Input>
                    <Input placeholder="Телефон"></Input>
                    <Input placeholder="Email"></Input>
                    <Input placeholder="Email"></Input>
                    <Input placeholder="Кол-во человек"></Input>
                    <TextArea placeholder="Кол-во человек" class="col-span-2 h-[90px]"></TextArea>
                    <Button size="L" class="max-w-[150px]">Отправить</Button>
                </form>
            </div>
        </div>
    </div>    
</template>

<style>
    .bgForm{
        background: url(@/assets/imgs/bgForm.png), url(@/assets/imgs/pattern2.png);
        background-repeat: no-repeat;
        background-size:auto 100%, cover;
        background-position: right, left;
    }
</style>


