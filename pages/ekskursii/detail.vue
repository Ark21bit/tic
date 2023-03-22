<template>
    <main class="grid-container contain-paint">
        
        <SwiperOne class="col-[full]">
            <SwiperSlide v-for="n in 10" :key="n">
                <img src="@/assets/imgs/img4.png" alt="" class="w-full h-full object-cover">
                <div class="absolute left-1/2 -translate-x-1/2 wrapper flex flex-col gap-2.5 items-center bottom-5 lg:bottom-[30px] text-white">
                     <p class="text-lg lg:text-xl font-medium ">Остров-град Свияжск</p>
                     <p class="text-sm leading-[1.4]">Какое-нибудь описание</p>
                </div>
            </SwiperSlide>
            
        </SwiperOne>       
        <div class="col-[full] grid-container border-b border-b-fline mb-10 max-lg:hidden">
            <ExcursionCategories/>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-[265px_calc(100%-305px)] gap-y-5 gap-x-10 max-lg:mt-[30px] pb-5 lg:pb-[60px]">
            <div class="relative">
                <SideBar class="w-full sticky top-[50px]" />               
            </div>
            <div class="flex flex-col gap-[60px]">
                <div class="text-sm text-fblack -mb-5 max-lg:hidden">
                    <span class="last:text-finactive after:content-['/'] last:after:content-['']">Экскурсии по Татарстану</span>                    
                    <span class="last:text-finactive after:content-['/'] last:after:content-['']">Остров-град Свияжск</span>
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
                            <p class="text-ftext3 text-xs leading-[1.4] mb-1.5">Стоимость</p>
                            <p class="text-fblack font-medium lg:text-xl ">2499 ₽</p>
                        </div>
                        <div class="p-[15px] rounded-[10px] shadow-[0_4px_23px_0_rgba(0,0,0,.07)]">
                            <img src="@/assets/imgs/icons/time.svg" alt="" class="mb-6">
                            <p class="text-ftext3 text-xs leading-[1.4] mb-1.5">Длительность</p>
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
                            <p class="text-fblack font-medium lg:text-xl ">Пешеходная</p>
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
                        <li class="before:w-2 before:h-2 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5">Транспортные услуги</li>
                        <li class="before:w-2 before:h-2 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5">Услуги экскурсовода</li>
                        <li class="before:w-2 before:h-2 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5">Входной билет на территорию Болгарского музея-заповедник</li>
                        <li class="before:w-2 before:h-2 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5">Входной билет в Памятный знак</li>
                        <li class="before:w-2 before:h-2 before:rounded-full before:bg-fred flex items-start before:mt-[.5em] before:shrink-0 gap-2.5">Входной билет в музей «Дом Лекаря»</li>
                    </ul>
                    <Button size="L" class="" @click="openModal">Заказать экскурсию</Button>
                    <ClientOnly>
                        <Teleport to="#teleported">
                            <Modal @close="closeModal" v-show="isShowModal">
                                <h2 class="text-[1.5625rem] lg:text-3xl font-bold text-fblack max-lg:mt-[37px]">Вечерняя Казань</h2>
                                <form class="flex flex-col lg:gap-10 gap-[30px] mt-[30px] lg:mt-[50px] text-fblack">
                                    <div>
                                        <p class="mb-5 font-medium leading-[1.2] text-[1.0625rem]">Выбор даты и времени</p>
                                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                            <FormsDatepicker decoration="border">Дата</FormsDatepicker>
                                            <FormsSelect decoration="border" :options="[13,14,15]">Время</FormsSelect>
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap items-baseline">
                                        <p class="leading-[1.2] text-[1.0625rem] mb-5 lg:mb-[25px]">Выберите категорию (осталось 18 билетов!)</p>
                                        <div class="flex gap-[30px] max-sm:w-full font-medium items-center max-lg:mt-5 lg:ml-auto max-lg:order-1">
                                            <p class="text-sm font-medium max-lg:basis-[213px]">Выбрано <span class="text-fred">8 билетов</span></p>
                                            <p class="text-sm font-medium text-fred shrink-0 ml-auto">30 434 ₽</p> 
                                        </div>
                                        <table class="table-primary w-full">
                                            <thead class="table-primary-thead">
                                                <tr class="group/table">
                                                    <th class="table-primary-th">Тип билета</th>
                                                    <th class="table-primary-th">Цена</th>
                                                    <th class="table-primary-th text-right">Количество</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="group/table">
                                                    <td data-label="Тип билета" class="table-primary-td">Взрослые</td>
                                                    <td data-label="Цена" class="table-primary-td">3999 ₽</td>
                                                    <td data-label="Количество" class="table-primary-td"><FormsCounter class="float-right"/></td>
                                                </tr>
                                                <tr class="group/table">
                                                    <td data-label="Тип билета" class="table-primary-td">Детский</td>
                                                    <td data-label="Цена" class="table-primary-td">3999 ₽</td>
                                                    <td data-label="Количество" class="table-primary-td"><FormsCounter class="float-right"/></td>
                                                </tr>
                                                <tr class="group/table">
                                                    <td data-label="Тип билета" class="table-primary-td">Пенсионеры</td>
                                                    <td data-label="Цена" class="table-primary-td">3999 ₽</td>
                                                    <td data-label="Количество" class="table-primary-td"><FormsCounter class="float-right"/></td>
                                                </tr>
                                                <tr class="group/table">
                                                    <td data-label="Тип билета" class="table-primary-td">Студенты</td>
                                                    <td data-label="Цена" class="table-primary-td">3999 ₽</td>
                                                    <td data-label="Количество" class="table-primary-td"><FormsCounter class="float-right"/></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>                                    
                                        <p class="mb-5 font-medium leading-[1.2] text-[1.0625rem]">Промокод</p>                                        
                                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                            <FormsInput decoration="border" type="text"></FormsInput>                                        
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap items-baseline">
                                        <p class="leading-[1.2] text-[1.0625rem] mb-5 lg:mb-[25px]">Дополнительные услуги</p>
                                        <div class="flex gap-[30px] max-sm:w-full font-medium items-center max-lg:mt-5 lg:ml-auto max-lg:order-1">
                                            <p class="text-sm font-medium max-lg:basis-[213px]">Выбрано <span class="text-fred">4 доп. услуги</span></p>
                                            <p class="text-sm font-medium text-fred shrink-0 ml-auto">200 ₽</p> 
                                        </div>
                                        <table class="table-primary">
                                            <thead class="table-primary-thead">
                                                <tr class="group/table">
                                                    <th class="table-primary-th">Тип билета</th>
                                                    <th class="table-primary-th">Цена</th>
                                                    <th class="table-primary-th text-right">Количество</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="group/table">
                                                    <td data-label="Тип билета" class="table-primary-td">Аренда оборудования (для лучшей слышимости гида)</td>
                                                    <td data-label="Цена" class="table-primary-td">100 ₽</td>
                                                    <td data-label="Количество" class="table-primary-td"><FormsCounter class="float-right"/></td>
                                                </tr>
                                                <tr class="group/table">
                                                    <td data-label="Тип билета" class="table-primary-td">Дождевик</td>
                                                    <td data-label="Цена" class="table-primary-td">100 ₽</td>
                                                    <td data-label="Количество" class="table-primary-td"><FormsCounter class="float-right"/></td>
                                                </tr>                                           
                                            </tbody>                                        
                                        </table>
                                    </div>
                                    <div>                                    
                                        <p class="mb-5 font-medium leading-[1.2] text-[1.0625rem]">Комментарий к заказу</p>                                        
                                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                            <FormsInput decoration="border" type="text" labelClass="col-[full]"></FormsInput>                                        
                                        </div>
                                    </div>
                                    <div>                                    
                                        <p class="mb-5 font-medium leading-[1.2] text-[1.0625rem]">Персональные данные (на чье имя заключается договор)</p>                                        
                                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-y-[25px]">
                                            <FormsInput decoration="border" type="text">ФИО</FormsInput>
                                            <FormsSelect decoration="border" :options="['пункт 1','пункт 2']">Место начала экскурсии</FormsSelect>                                        
                                            <FormsInput decoration="border" type="tel">Номер телефона*</FormsInput>   
                                            <FormsSelect decoration="border" :options="['Наличными','Картой']">Вид оплаты*</FormsSelect>                                      
                                            <FormsInput decoration="border" type="email">Email*</FormsInput>        
                                            <FormsCheckbox class="col-[full]">Подтверждаю свое согласие с Порядком предоставления экскурсионных услуг</FormsCheckbox>                               
                                            <FormsCheckbox class="col-[full]">Даю согласие на обработку и хранение своих персональных данных в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».</FormsCheckbox>                               
                                        </div>
                                    </div>
                                    <Button size="L" class="lg:w-fit">Забронировать экскурсию</Button>
                                </form>
                            </Modal>
                        </Teleport>
                    </ClientOnly>
                </div>
                <div class="lg:border-y border-y-fline lg:py-[30px] max-lg:hidden flex flex-col gap-[30px]">
                    <div >
                        <h3 class="text-xl font-medium text-fblack mb-5">Экскурсии в Булгар из Казани</h3>
                        <p class="text-sm leading-[1.4] text-ftext3">
                            Узнать одну из древних жемчужин Республики Татарстан можно на экскурсии в Булгар с выездом из Казани. Булгар (также Болгар) - это древний город, расположенный в Спасском районе Татарстана, в котором сохранилось множество древних построек и любопытных современных зданий. Экскурсии в Булгар популярны, прежде всего, потому, что это место, где впервые на территории России был принят ислам. Помимо этого Булгары славятся великолепными зданиями, пожалуй, самое известное из которых - Белая Мечеть - это здрание очень напоминает туристам индийский Тадж-Махал по архитектуре и окружению.
                            <br><br>
                            Экскурсия в Болгар: цена, программа
                            <br><br>
                            Классическая экскурсия в Болгар включает в себя посещение древнего городища (столицы Волжской Булгарии), включенного в список объектов культурного наследия ЮНЕСКО. В рамках экскурсии в Болгар туристы увидят великую русскую реку Каму в одном из самых широких ее мест, знаковые памятники архитектуры 13-14 веков нашей эры, мавзолеи 15 века, современное здание - Белую мечеть, и самый необычный памятник - здание, олицетворяющее место принятия ислама на территории современной России.
                        </p>
                    </div>
                    <div > 
                        <h3 class="text-xl font-medium text-fblack mb-5">Древний город Болгар: экскурсия с выездом из Казани</h3>
                        <p class="text-sm leading-[1.4] text-ftext3">
                            Кроме упомянутых объектов, справедливо включенных ЮНЕСКО в список материального культурного наследия человечества, Болгар способен удивить туристов любопытным объектом, включенным в список рекордов Гиннеса. Речь о самом большом в мире печатном коране. Он хранится в здании памятного знака, а его вес насчитывает более 500 кг. Священная книга украшена драгоценными и полудрагоценными камнями и золотом, а чтобы перелистнуть ее страницы требуется помощь нескольких человек.
                            <br><br>
                            Ещё один любопытный пункт экскурсии в город Болгар - посещение музея лекаря, в котором экскурсанты познакомятся с технологиями средневекового врачевания. Немногие знают, что государство Волжская Булгария до прихода татаро-монголов уже была очень развитым государством с четкой системой государственного управления, развитой медициной и собственными традициями строительства. Дошедшие до наших дней здания Болгара поражают экскурсантов продуманностью и масштабом.
                        </p>
                    </div>
                    <NuxtLink to="/" class="link font-medium text-sm max-lg:hidden">Читать полностью</NuxtLink>
                </div>             
                <Reviews/> 
            </div>            
        </div>
        <div class="col-[full] grid-container pt-10 lg:pt-[60px] lg:border-t border-t-fline">
            <h2 class="text-2xl lg:text-3xl font-bold  text-fblack mb-[30px]">Рекомендации</h2>                    
            <Recommendations /> 
        </div>            
    </main>
</template>

<script setup>
let isShowModal = ref(false)

const closeModal = ()=>{
    isShowModal.value = false;
    setTimeout(() => {        
        document.querySelector('body').style.overflowY = ""
    }, 500);
}

const openModal = ()=>{
    document.querySelector('body').style.overflowY = "hidden"
    isShowModal.value = true;
}
</script>
