<template>
    <main class="grid-container">        
        <div class="py-[30px] border-b border-b-fline">
            <h1 class="text-[1.75rem] leading-[1.2] lg:text-4xl font-bold text-fblack">Контакты</h1>
        </div>
        <div class="flex max-lg:flex-col py-[30px] justify-between gap-[30px]">
            <div class="flex gap-10 sm:gap-7 sm:max-lg:flex-row flex-col">
                <div class="text-fblack sm:max-lg:flex-1">
                    <p class="text-lg font-bold mb-[15px]">Адрес</p>
                    <p class="text-sm leading-[1.4] max-w-[284px]">Экскурсионный центр г. Казани (ИП ЗАКИРОВ РУШАН ЗАГИРОВИЧ)Казань, Пушкина, 4 1 этаж гостиницы «Татарстан»</p>
                </div>
                <div class="text-fblack sm:max-lg:flex-1 lg:mt-auto">
                    <p class="text-lg font-bold mb-[15px]">Для почтовых отправлений</p>
                    <p class="text-sm leading-[1.4]">420111 а/я 327</p>
                </div>
            </div>
            <div class="flex gap-[30px] sm:gap-7 sm:max-lg:flex-row flex-col">
                <div class="text-fblack sm:max-lg:flex-1">
                    <p class="text-lg font-bold mb-[15px]">Телефоны</p>
                    <div class="flex max-lg:flex-wrap lg:flex-col gap-[15px] lg:gap-1.5">
                        <a href="tel:88002222161" class="text-fred text-sm leading-[1.4] max-lg:w-[40%] font-medium ">8 800 2222 161</a>
                        <a href="tel:+7843231698" class="text-fred text-sm leading-[1.4] max-lg:w-[40%] font-medium ">+7 843 231 67 98</a>
                        <a href="tel:+7937009334" class="text-fred text-sm leading-[1.4] max-lg:w-[40%] font-medium">+7 937 009 32 34</a>
                    </div>
                </div>
                <div class="text-fblack sm:max-lg:flex-1 lg:mt-auto">
                    <p class="text-lg font-bold mb-[15px]">Почта</p>                   
                    <a href="tel:88002222161" class="text-fred text-sm leading-[1.4] font-medium ">ek@kazantrip.ru</a>    
                </div>
            </div>            
            <div class="text-fblack">
                <p class="text-lg font-bold mb-[15px]">Реквизиты</p>
                <p class="text-sm leading-[1.4]">
                ИНН: 165718122372<br>
                ОГРИНП: 316169000083723<br>
                ОТДЕЛЕНИЕ "БАНК ТАТАРСТАН" N8610 ПАО СБЕРБАНК<br>
                р/сч: 40802810162000090224<br>
                кор/сч: 30101810600000000603<br>
                БИК: 049205603<br>
                Адрес: 420137. г. Казань, ул. Адоратского, д. 34</p>
            </div>     
            <div class="flex gap-3">
                <a href="#" class="shrink-0 text-fblack"><IconsTg/></a>
                <a href="#" class="shrink-0 text-fblack"><IconsWhatsapp/></a>
                <a href="#" class="shrink-0 text-fblack"><IconsVk/></a>
            </div>            
        </div>   
        <div class="col-[full] h-[350px] lg:h-[500px] -mb-20 lg:-mb-[150px] mt-20 lg:mt-[70px]">
            <GMapMap :disableDefaultUI="true" :center="center" :zoom="10"/>
        </div>     
    </main>
</template>

<script setup>
    let center = ref({lat: 55.093048, lng: 50.842120})
</script>

