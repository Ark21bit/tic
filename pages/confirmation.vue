<template>
    <main class="grid-container contain-paint">     
        <div class="mt-10 lg:mt-[50px]">
            <h1 class="text-[1.5625rem] leading-[1.2] lg:text-4xl text-fblack font-bold sm:text-center mb-[30px]">Подтвердите бронирование</h1>
            <p class="text-lg lg:text-2xl text-[#32373D] font-bold sm:text-center mb-[15px]">Уважаемый(ая) <span class="text-fred">Иван Иванов</span></p>
            <p class="text-sm sm:text-center text-ftext3 leading-[1.4] mb-[15px] lg:mb-5">Благодарим за бронирование в Туристско-информационном центре</p>
        </div> 
        <div class="flex flex-col gap-[30px] max-w-[794px] mx-auto w-full">
            <div>
                <div class="flex max-sm:flex-col gap-[15px] justify-between py-[15px] lg:py-2.5 border-b border-fline text-fblack text-sm leading-[1.4]">
                    <span>Название экскурсии</span>
                    <span class="font-medium text-right">Остров-град Свияжск, Иннополис и Храм всех религий (с посещением)</span>
                </div>
                <div class="flex max-sm:flex-col gap-[15px] justify-between py-[15px] lg:py-2.5 border-b border-fline text-fblack text-sm leading-[1.4]">
                    <span>Дата экскурсии</span>
                    <span class="font-medium text-right">16.03.2023</span>
                </div>
                <div class="flex max-sm:flex-col gap-[15px] justify-between py-[15px] lg:py-2.5 border-b border-fline text-fblack text-sm leading-[1.4]">
                    <span>Время начала</span>
                    <span class="font-medium text-right">19:00</span>
                </div>
                <div class="flex max-sm:flex-col gap-[15px] justify-between py-[15px] lg:py-2.5 border-b border-fline text-fblack text-sm leading-[1.4]">
                    <span>Место начала экскурсии</span>
                    <span class="font-medium text-right">Московская, 2 (ТД ЦУМ)</span>
                </div>
                <div class="flex max-sm:flex-col gap-[15px] justify-between py-[15px] lg:py-2.5 border-b border-fline text-fblack text-sm leading-[1.4]">
                    <span>Телефон туриста</span>
                    <span class="font-medium text-right">+7 (938) 333-41-41</span>
                </div>
                <div class="flex max-sm:flex-col gap-[15px] justify-between py-[15px] lg:py-2.5 border-b border-fline text-fblack text-sm leading-[1.4]">
                    <span>Промокод</span>
                    <span class="font-medium text-right">-</span>
                </div>
                <div class="flex max-sm:flex-col gap-[15px] justify-between py-[15px] lg:py-2.5 border-b border-fline text-fblack text-sm leading-[1.4]">
                    <span>Вид оплаты</span>
                    <span class="font-medium text-right">Наличными/картой перед экскурсией</span>
                </div>
            </div>
            <div>
                <p class="text-base lg:text-lg font-bold mb-[15px] lg:mb-2.5">Услуги</p>
                <div class="flex max-sm:flex-col gap-[15px] justify-between py-[15px] lg:py-2.5 border-b border-fline text-fblack text-sm leading-[1.4]">
                    <span>Взрослые ( 1 )</span>
                    <span class="font-medium text-right">1999 руб</span>
                </div>                               
                <div class="flex max-sm:flex-col gap-[15px] justify-between py-[15px] lg:py-2.5 border-b border-fline text-fblack text-sm leading-[1.4]">
                    <span>Пенсионеры ( 1 )</span>
                    <span class="font-medium text-right">1999 руб</span>
                </div>                               
                <div class="flex max-sm:flex-col gap-[15px] justify-between py-[15px] lg:py-2.5 border-b border-fline text-fblack text-sm leading-[1.4]">
                    <span>Аренда оборудования (для лучшей слышимости гида) ( 1 )</span>
                    <span class="font-medium text-right">100 руб</span>
                </div>                               
            </div>
            <div>
                <p class="text-base lg:text-lg font-bold mb-[15px]">Примечание</p>                                            
                <p class="text-ftext3 text-sm leading-[1.4]">Lorem ipsum</p>         
            </div>
            <div class="flex justify-between">
                <p class="text-base lg:text-lg font-bold text-[#32373D]">Итого к оплате</p> 
                <p class="text-base lg:text-lg font-bold text-fred">5699 руб</p>    
            </div>
            <div class="gap-3 flex max-sm:flex-col">
                <Button size="L">Подтверждаю заказ</Button>
                <Button size="L" decoration="outline">Отменить</Button>
            </div>
        </div>
    </main>
</template>

<script setup>

</script>

