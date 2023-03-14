<template>
    <main class="grid-container contain-paint">
        <div class="flex gap-2 py-[30px] overflow-hidden border-b border-b-fline mb-10 max-lg:hidden">
            <NuxtLink to="/" class="text-sm shrink-0 text-fblack transition-colors duration-500 ease-linear hover:text-white leading-[1.2] px-4 py-[9px] bg-[#F4F4F4] hover:bg-fgreen rounded-full">Автобусные туры по Казани</NuxtLink>
            <NuxtLink to="/" class="text-sm shrink-0 text-fblack transition-colors duration-500 ease-linear hover:text-white leading-[1.2] px-4 py-[9px] bg-[#F4F4F4] hover:bg-fgreen rounded-full">Экскурсия в храм всех религий</NuxtLink>
            <NuxtLink to="/" class="text-sm shrink-0 text-fblack transition-colors duration-500 ease-linear hover:text-white leading-[1.2] px-4 py-[9px] bg-[#F4F4F4] hover:bg-fgreen rounded-full">Гастрономические</NuxtLink>
            <NuxtLink to="/" class="text-sm shrink-0 text-fblack transition-colors duration-500 ease-linear hover:text-white leading-[1.2] px-4 py-[9px] bg-[#F4F4F4] hover:bg-fgreen rounded-full">Необычные экскурсии</NuxtLink>
            <NuxtLink to="/" class="text-sm shrink-0 text-fblack transition-colors duration-500 ease-linear hover:text-white leading-[1.2] px-4 py-[9px] bg-[#F4F4F4] hover:bg-fgreen rounded-full">Обзорные экскурсии по Казани</NuxtLink>
            <NuxtLink to="/" class="text-sm shrink-0 text-fblack transition-colors duration-500 ease-linear hover:text-white leading-[1.2] px-4 py-[9px] bg-[#F4F4F4] hover:bg-fgreen rounded-full">Однодневыне экскурсии </NuxtLink>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-[265px_calc(100%-305px)] gap-y-5 gap-x-10 max-lg:mt-[30px] pb-5 lg:pb-[60px]">
            <div class="relative">
                <SideBar class="w-full sticky top-0" />               
            </div>
            <div class="flex flex-col gap-[60px]">
                <div class="text-sm text-fblack -mb-5 max-lg:hidden">
                    <span class="last:text-finactive after:content-['/'] last:after:content-['']">Экскурсии по Татарстану</span>                    
                    <span class="last:text-finactive after:content-['/'] last:after:content-['']">Остров-град Свияжск</span>
                </div>
                <div>                    
                     <h1 class="text-[25px] lg:text-4xl text-fblack leading-[1.2] font-bold mb-5">Вечерняя Казань</h1>
                     <p class="text-ftext3 text-sm leading-[1.4] mb-[30px]">Увидеть Казань в свете вечерних огней — обязательный пункт путешествия в наш город. В ходе экскурсии вы проедете по центру города с рассказом экскурсовода об истории улиц и памятников и сделаете несколько фотоостановок у самых ярко подсвеченных достопримечательностей. У Центра семьи «Казан» вы узнаете, почему наш город так назван и что за таинственные существа охраняют центральный ЗАГС города, у Дворца земледельцев восхититесь роскошью, торжественностью и величием современного памятника архитектуры, рядом с Театром кукол погрузитесь в атмосферу детской сказки и волшебства. Панорама ночного Казанского Кремля с красавицей мечетью Кул-Шариф и древним Благовещенским собором пополнит вашу серию фотографий тысячелетней Казани. ВНИМАНИЕ! В период новогодних каникул заезд к чаше по возможности (возможно перекрытие дорог в связи с установкой у чаши центральной городской елки)</p>
                     <Button size="L">Заказать экскурсию</Button>
                </div>
                <div>
                    <h2 class="text-2xl font-bold leading-[1.2] text-fblack mb-[25px]"></h2>
                    <div class="grid grid-flow-dense grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 gap-5">
                        <div class="p-[15px] rounded-[10px] shadow-[0_4px_23px_0_rgba(0,0,0,.07)]">
                            <img src="@/assets/imgs/icons/calendar.svg" alt="" class="mb-6">
                            <p class="text-ftext3 text-xs leading-[1.4] mb-2.5">Ближайшая дата</p>
                            <p class="text-fblack font-medium lg:text-xl leading-[1.2]">25 февраля</p>
                        </div>
                        <div class="p-[15px] rounded-[10px] shadow-[0_4px_23px_0_rgba(0,0,0,.07)]">
                            <img src="@/assets/imgs/icons/price.svg" alt="" class="mb-6">
                            <p class="text-ftext3 text-xs leading-[1.4] mb-2.5">Стоимость</p>
                            <p class="text-fblack font-medium lg:text-xl leading-[1.2]">2499 ₽</p>
                        </div>
                        <div class="p-[15px] rounded-[10px] shadow-[0_4px_23px_0_rgba(0,0,0,.07)]">
                            <img src="@/assets/imgs/icons/time.svg" alt="" class="mb-6">
                            <p class="text-ftext3 text-xs leading-[1.4] mb-2.5">Длительность</p>
                            <p class="text-fblack font-medium lg:text-xl leading-[1.2]">10 ч. 00 мин</p>
                        </div>
                        <div class="p-[15px] sm:max-lg:row-start-1 sm:max-lg:row-span-2 sm:max-lg:col-start-3 col-span-2 rounded-[10px] shadow-[0_4px_23px_0_rgba(0,0,0,.07)]">
                            <img src="@/assets/imgs/icons/map.svg" alt="" class="mb-6">
                            <div class="flex max-lg:flex-col gap-6 justify-between">
                                <div>
                                    <p class="text-ftext3 text-xs leading-[1.4] mb-2.5">Отправление</p>
                                    <p class="text-fblack font-medium leading-[1.2]">ул. Петербургская</p>
                                </div>
                                <div >
                                    <p class="text-ftext3 text-xs leading-[1.4] mb-2.5">Отправление</p>
                                    <p class="text-fblack font-medium leading-[1.2]">ул. Пушкина. 4</p>
                                </div>
                                <div >
                                    <p class="text-ftext3 text-xs leading-[1.4] mb-2.5">Отправление</p>
                                    <p class="text-fblack font-medium leading-[1.2]">ул. Московская,2</p>
                                </div>
                            </div>  
                        </div>
                        <div class="p-[15px] rounded-[10px] shadow-[0_4px_23px_0_rgba(0,0,0,.07)]">
                            <img src="@/assets/imgs/icons/trail.svg" alt="" class="mb-6">
                            <p class="text-ftext3 text-xs leading-[1.4] mb-2.5">Вид экскурсии</p>
                            <p class="text-fblack font-medium lg:text-xl leading-[1.2]">Пешеходная</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 class="text-2xl font-bold leading-[1.2] text-fblack mb-5 lg:mb-[15px]"></h2>
                    <p class="text-ftext2 text-sm leading-[1.2] mb-[30px] sm:mb-5">Дети до 7 лет обслуживаются бесплатно</p>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-5">
                        <div class="p-[15px] border border-fline rounded-[10px]">
                            <p class="text-ftext3 text-sm leading-[1.2] mb-[30px]">Взрослый</p>
                            <p class="text-fred font-bold text-xl leading-[1.2]">899 ₽</p>
                        </div>
                        <div class="p-[15px] border border-fline rounded-[10px]">
                            <p class="text-ftext3 text-sm leading-[1.2] mb-[30px]">Детский</p>
                            <p class="text-fred font-bold text-xl leading-[1.2]">800 ₽</p>
                        </div>
                        <div class="p-[15px] border border-fline rounded-[10px]">
                            <p class="text-ftext3 text-sm leading-[1.2] mb-[30px]">Пенсионеры</p>
                            <p class="text-fred font-bold text-xl leading-[1.2]">800 ₽</p>
                        </div>
                        <div class="p-[15px] border border-fline rounded-[10px]">
                            <p class="text-ftext3 text-sm leading-[1.2] mb-[30px]">Студенты</p>
                            <p class="text-fred font-bold text-xl leading-[1.2]">800 ₽</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 class="text-2xl font-bold leading-[1.2] text-fblack mb-5 lg:mb-[30px]">В стоимость входит</h2>
                    <ul class="grid sm:grid-cols-2 gap-5 text-fblack font-medium mb-[30px]">
                        <li class="before:w-2 before:h-2 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5">Транспортные услуги</li>
                        <li class="before:w-2 before:h-2 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5">Услуги экскурсовода</li>
                        <li class="before:w-2 before:h-2 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5">Входной билет на территорию Болгарского музея-заповедник</li>
                        <li class="before:w-2 before:h-2 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5">Входной билет в Памятный знак</li>
                        <li class="before:w-2 before:h-2 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5">Входной билет в музей «Дом Лекаря»</li>
                    </ul>
                    <Button size="L" class="">Заказать экскурсию</Button>
                </div>
                <div class="py-[30px] border-y border-y-fline max-lg:hidden">
                    <h3 class="text-xl font-medium leading-[1.2] text-fblack mb-5 lg:mb-5">В стоимость входит</h3>
                    <p class="text-sm text-ftext3 leading-[1.4] mb-[30px]">Не стоит забывать, что один и тот же город в разное время суток раскрывается по-разному. Если вы уже успели осмотреть столицу Татарстана днем, то вечерние экскурсии по Казани - то, что обязательно необходимо посетить, чтобы ваше представление о городе было полным. Экскурсия по ночной Казани от Экскурсионного центра создана чтобы показать туристам самые величественные здания нашего города, которые хорошо подсвечиваются в вечернее время. Более того - наш автобус сделает три остановки около самых знаковых построек: Театра кукол "Экият", Дворца земледельцев и Чаши. Это одни из самых красивых зданий Казани вечером, возле которых фотографируются все путешественники, приезжающие в наш город.</p>
                    <h3 class="text-xl font-medium leading-[1.2] text-fblack mb-5 lg:mb-5">Экскурсии по Казани - ночная Казань в свете фонарей</h3>
                    <p class="text-sm text-ftext3 leading-[1.4] mb-[30px]">Прогулки по историческому центру одинаково хороши как днём, так и вечером. Более того, летними ночами на город спускается приятная прохлада, и экскурсии по Казани ("Ночная Казань" в частности) становятся ещё более приятными для туристов. Отсутствие плотного автомобильного движения дает возможность вдоволь полюбоваться красотами ночной Казани из окна комфортабельного автобуса и сделать красивые снимки.
                        <br><br>
                        В рамках экскурсии "вечерняя Казань" вы увидите не только историческую часть города, но и правобережье Казанки - ультрасовременную половину города с модными зданиями из стекла и бетона. На ночной экскурсии кроме старого города вы увидите жемчужину Казани - Загс "Чаша", красивые спортивные сооружения и самые современные улицы города, вытянувшиеся вдоль реки Казанка. 
                    </p>
                    <NuxtLink to="/" class="font-medium text-sm leading-[1.2] underline text-fred">Читать полностью</NuxtLink>
                </div>
                <div >
                    <h2 class="text-2xl font-bold leading-[1.2] text-fblack mb-[30px]">Отзывы</h2>                    
                    <Reviews class="scrollbar-h-0 w-screen"/>                    
                    <Button size="L" class="mt-[30px] max-sm:mx-auto">Добавить отзыв</Button>
                </div>
            </div>            
        </div>
        <div class="pt-10 lg:pt-[60px] lg:border-t border-t-fline">
            <h2 class="text-2xl lg:text-3xl font-bold leading-[1.2] text-fblack sm:mb-5 mb-[30px]">Рекомендации</h2>                    
            <Recommendations /> 
        </div>
    </main>
</template>

<script setup>
    
</script>
