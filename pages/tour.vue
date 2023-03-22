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
        <div class="col-[full] grid-container sm:border-b sm:border-b-fline mb-10 max-lg:hidden">
            <ExcursionCategories/>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-[265px_calc(100%-305px)] gap-y-5 gap-x-10 max-lg:mt-[30px] pb-5 lg:pb-[60px]">
            <div class="relative">
                <SideBar class="w-full sticky top-[50px]" />               
            </div>
            <div class="flex flex-col gap-[30px]">
                <div class="text-sm text-fblack mb-2.5 max-lg:hidden">
                    <span class="last:text-finactive after:content-['/'] last:after:content-['']">Экскурсии по Татарстану</span>                    
                    <span class="last:text-finactive after:content-['/'] last:after:content-['']">Остров-град Свияжск</span>
                </div>
                <div class="flex flex-col items-start gap-[30px] lg:pb-[30px]">                    
                     <h1 class="text-[1.5625rem] sm:text-[1.75rem] leading-[1.2] lg:text-4xl text-fblack  font-bold -mb-2.5">Остров-град Свияжск</h1>
                     <Tabs class="w-full">
                        <template #buttonHeader>
                            <Button size="L" @click="openModal" class="lg:ml-auto max-lg:mt-[30px] self-start lg:self-center">Заказать экскурсию</Button>
                        </template>
                        <Tab title="Программа тура" name="Программа тура" class="flex flex-col gap-[25px] mt-[30px]">
                            <div>
                                <p class="text-fblack font-medium mb-[15px]">Первый день</p>
                                <table class="table-primary">
                                    <tbody>                                    
                                        <tr class="group/table">
                                            <td class="table-secondary-td text-sm font-medium text-fblack align-top"><div class="flex justify-between w-full lg:w-max"><span class="py-2 px-2.5 bg-[#F4F4F4] whitespace-nowrap block rounded-full  mr-[30px]">14:00-15:00</span> <img src="@/assets/imgs/icons/food.svg" alt=""></div></td>
                                            <td class="table-secondary-td lg:mt-1.5 text-sm font-medium leading-[1.4] align-top text-fblack"><span class="block w-[178px] max-w-[178px]">Какой нибудь длинный заголовок</span></td>
                                            <td class="table-secondary-td lg:mt-1.5 text-sm leading-[1.4] align-top text-ftext3">Давно хотела посетить Казань! И вот мы наконец выбрались с семьей) очень благодарны за экскурсию, все прошло великолепно)</td>
                                        </tr>                                   
                                        <tr class="group/table">
                                            <td class="table-secondary-td text-sm font-medium text-fblack align-top"><div class="flex justify-between w-full lg:w-max"><span class="py-2 px-2.5 bg-[#F4F4F4] whitespace-nowrap block rounded-full  mr-[30px]">14:00-15:00</span> <img src="@/assets/imgs/icons/food.svg" alt=""></div></td>
                                            <td class="table-secondary-td lg:mt-1.5 text-sm font-medium leading-[1.4] align-top text-fblack"><span class="block w-[178px] max-w-[178px]">Экскурсии</span></td>
                                            <td class="table-secondary-td lg:mt-1.5 text-sm leading-[1.4] align-top text-ftext3" :class="{'max-lg:p-0':true}"></td>
                                        </tr>                                   
                                    </tbody>    
                                </table>
                            </div>
                            <div>
                                <p class="text-fblack font-medium mb-[15px]">Второй день</p>
                                <table class="table-primary">
                                    <tbody>                                    
                                        <tr class="group/table">
                                            <td class="table-secondary-td text-sm font-medium text-fblack align-top"><div class="flex justify-between w-full lg:w-max"><span class="py-2 px-2.5 bg-[#F4F4F4] whitespace-nowrap block rounded-full  mr-[30px]">14:00-15:00</span> <img src="@/assets/imgs/icons/food.svg" alt=""></div></td>
                                            <td class="table-secondary-td lg:mt-1.5 text-sm font-medium leading-[1.4] align-top text-fblack"><span class="block w-[178px] max-w-[178px]">Какой нибудь длинный заголовок</span></td>
                                            <td class="table-secondary-td lg:mt-1.5 text-sm leading-[1.4] align-top text-ftext3">Давно хотела посетить Казань! И вот мы наконец выбрались с семьей) очень благодарны за экскурсию, все прошло великолепно)</td>
                                        </tr>                                   
                                        <tr class="group/table">
                                            <td class="table-secondary-td text-sm font-medium text-fblack align-top"><div class="flex justify-between w-full lg:w-max"><span class="py-2 px-2.5 bg-[#F4F4F4] whitespace-nowrap block rounded-full  mr-[30px]">14:00-15:00</span> <img src="@/assets/imgs/icons/food.svg" alt=""></div></td>
                                            <td class="table-secondary-td lg:mt-1.5 text-sm font-medium leading-[1.4] align-top text-fblack"><span class="block w-[178px] max-w-[178px]">Проживание</span></td>
                                            <td class="table-secondary-td lg:mt-1.5 text-sm leading-[1.4] align-top text-ftext3" :class="{'max-lg:p-0':true}"></td>
                                        </tr>                                   
                                        <tr class="group/table">
                                            <td class="table-secondary-td text-sm font-medium text-fblack align-top"><div class="flex justify-between w-full lg:w-max"><span class="py-2 px-2.5 bg-[#F4F4F4] whitespace-nowrap block rounded-full  mr-[30px]">14:00-15:00</span> <img src="@/assets/imgs/icons/food.svg" alt=""></div></td>
                                            <td class="table-secondary-td lg:mt-1.5 text-sm font-medium leading-[1.4] align-top text-fblack"><span class="block w-[178px] max-w-[178px]">Трансфер</span></td>
                                            <td class="table-secondary-td lg:mt-1.5 text-sm leading-[1.4] align-top text-ftext3" :class="{'max-lg:p-0':true}"></td>
                                        </tr>                                   
                                        <tr class="group/table">
                                            <td class="table-secondary-td text-sm font-medium text-fblack align-top"><div class="flex justify-between w-full lg:w-max"><span class="py-2 px-2.5 bg-[#F4F4F4] whitespace-nowrap block rounded-full  mr-[30px]">14:00-15:00</span> <img src="@/assets/imgs/icons/food.svg" alt=""></div></td>
                                            <td class="table-secondary-td lg:mt-1.5 text-sm font-medium leading-[1.4] align-top text-fblack"><span class="block w-[178px] max-w-[178px]">Радиооборудование</span></td>
                                            <td class="table-secondary-td lg:mt-1.5 text-sm leading-[1.4] align-top text-ftext3" :class="{'max-lg:p-0':true}"></td>
                                        </tr>                                   
                                        <tr class="group/table">
                                            <td class="table-secondary-td text-sm font-medium text-fblack align-top"><div class="flex justify-between w-full lg:w-max"><span class="py-2 px-2.5 bg-[#F4F4F4] whitespace-nowrap block rounded-full  mr-[30px]">14:00-15:00</span> <img src="@/assets/imgs/icons/food.svg" alt=""></div></td>
                                            <td class="table-secondary-td lg:mt-1.5 text-sm font-medium leading-[1.4] align-top text-fblack"><span class="block w-[178px] max-w-[178px]">Билеты</span></td>
                                            <td class="table-secondary-td lg:mt-1.5 text-sm leading-[1.4] align-top text-ftext3" :class="{'max-lg:p-0':true}"></td>
                                        </tr>                                   
                                        <tr class="group/table">
                                            <td class="table-secondary-td text-sm font-medium text-fblack align-top"><div class="flex justify-between w-full lg:w-max"><span class="py-2 px-2.5 bg-[#F4F4F4] whitespace-nowrap block rounded-full  mr-[30px]">14:00-15:00</span> <img src="@/assets/imgs/icons/food.svg" alt=""></div></td>
                                            <td class="table-secondary-td lg:mt-1.5 text-sm font-medium leading-[1.4] align-top text-fblack"><span class="block w-[178px] max-w-[178px]">Услуги гида</span></td>
                                            <td class="table-secondary-td lg:mt-1.5 text-sm leading-[1.4] align-top text-ftext3" :class="{'max-lg:p-0':true}"></td>
                                        </tr>                                   
                                        <tr class="group/table">
                                            <td class="table-secondary-td text-sm font-medium text-fblack align-top"><div class="flex justify-between w-full lg:w-max"><span class="py-2 px-2.5 bg-[#F4F4F4] whitespace-nowrap block rounded-full  mr-[30px]">14:00-15:00</span> <img src="@/assets/imgs/icons/food.svg" alt=""></div></td>
                                            <td class="table-secondary-td lg:mt-1.5 text-sm font-medium leading-[1.4] align-top text-fblack"><span class="block w-[178px] max-w-[178px]">Панорамы (фотолокации)</span></td>
                                            <td class="table-secondary-td lg:mt-1.5 text-sm leading-[1.4] align-top text-ftext3" :class="{'max-lg:p-0':true}"></td>
                                        </tr>                                   
                                        <tr class="group/table">
                                            <td class="table-secondary-td text-sm font-medium text-fblack align-top"><div class="flex justify-between w-full lg:w-max"><span class="py-2 px-2.5 bg-[#F4F4F4] whitespace-nowrap block rounded-full  mr-[30px]">14:00-15:00</span> <img src="@/assets/imgs/icons/food.svg" alt=""></div></td>
                                            <td class="table-secondary-td lg:mt-1.5 text-sm font-medium leading-[1.4] align-top text-fblack"><span class="block w-[178px] max-w-[178px]">Время</span></td>
                                            <td class="table-secondary-td lg:mt-1.5 text-sm leading-[1.4] align-top text-ftext3" :class="{'max-lg:p-0':true}"></td>
                                        </tr>                                   
                                    </tbody>    
                                </table>
                            </div>
                        </Tab>
                        <Tab title="Стоимость" name="Стоимость" class="flex flex-col gap-[30px] mt-[30px]">                            
                            <p class="text-ftext3 text-sm leading-[1.4]">Загородная автобусная экскурсия, на которой мы познакомимся с Древним городом Болгар, объектом всемирного наследия ЮНЕСКО.Болгар расположен в 190 км от Казани. Это древняя столица Волжской Булгарии, в которой в 922 г. был принят ислам. Ехать до Болгара будем около трех часов, которые пролетят незаметно: живописные пейзажами и путевой рассказ экскурсовода не дадут заскучать. В Болгаре мы увидим и древнее болгарское городище, где сохранились памятники архитектуры XIII-XIV вв., комплекс мавзолеев XIV в., и современную красавицу-мечеть Белую мечеть, и «Памятный знак в честь принятия ислама» — здание, воздвигнутое на месте принятия ислама. Мы зайдем в этот музей и увидим самый дорогой и большой в мире печатный Коран (500 кг), внесенный в книгу рекордов Гиннеса. А еще познакомимся с болгарской средневековой медициной, посетив Музей «Дом лекаря».</p>
                            <table class="table-primary" >
                                <thead class="table-primary-thead">
                                    <tr>
                                        <th class="table-primary-th">Отель</th>
                                        <th class="table-primary-th">1-ное размещение</th>
                                        <th class="table-primary-th">2-ное размещение</th>
                                        <th class="table-primary-th">Дополнительное место</th>
                                    </tr>                                    
                                </thead>
                                <tbody>
                                    <tr class="group/table">
                                        <td class="table-primary-td" data-label="Отель"><NuxtLink to="/" class="link">Название отеля</NuxtLink></td>
                                        <td class="table-primary-td" data-label="1-ное размещение">3999 ₽</td>
                                        <td class="table-primary-td" data-label="2-ное размещение">3999 ₽</td>
                                        <td class="table-primary-td" data-label="Дополнительное место">3999 ₽</td>
                                    </tr>
                                    <tr class="group/table">
                                        <td class="table-primary-td" data-label="Отель"><NuxtLink to="/" class="link">Название отеля</NuxtLink></td>
                                        <td class="table-primary-td" data-label="1-ное размещение">3999 ₽</td>
                                        <td class="table-primary-td" data-label="2-ное размещение">3999 ₽</td>
                                        <td class="table-primary-td" data-label="Дополнительное место">3999 ₽</td>
                                    </tr>
                                    <tr class="group/table">
                                        <td class="table-primary-td" data-label="Отель"><NuxtLink to="/" class="link">Название отеля</NuxtLink></td>
                                        <td class="table-primary-td" data-label="1-ное размещение">3999 ₽</td>
                                        <td class="table-primary-td" data-label="2-ное размещение">3999 ₽</td>
                                        <td class="table-primary-td" data-label="Дополнительное место">3999 ₽</td>
                                    </tr>
                                    <tr class="group/table">
                                        <td class="table-primary-td" data-label="Отель"><NuxtLink to="/" class="link">Название отеля</NuxtLink></td>
                                        <td class="table-primary-td" data-label="1-ное размещение">3999 ₽</td>
                                        <td class="table-primary-td" data-label="2-ное размещение">3999 ₽</td>
                                        <td class="table-primary-td" data-label="Дополнительное место">3999 ₽</td>
                                    </tr>                                    
                                </tbody>
                            </table>
                            <p class="text-ftext3 text-sm leading-[1.4]">Загородная автобусная экскурсия, на которой мы познакомимся с Древним городом Болгар, объектом всемирного наследия ЮНЕСКО.Болгар расположен в 190 км от Казани. Это древняя столица Волжской Булгарии, в которой в 922 г. был принят ислам. </p>
                            
                        </Tab>
                        <Tab title="Дополнительные услуги" name="Дополнительные услуги" class="mt-[30px] lg:mt-10">
                            <div class="flex-col flex border-b border-fline py-5 first:border-t gap-5 lg:gap-[15px]">
                                <p class="text-base font-medium text-black">Аренда оборудования (для лучшей слышимости гида)</p>
                                <p class="lg:mb-[5px] text-sm leading-[1.4] text-ftext3">Загородная автобусная экскурсия, на которой мы познакомимся с Древним городом Болгар, объектом всемирного наследия ЮНЕСКО.Болгар расположен в 190 км от Казани. Это древняя столица Волжской Булгарии, в которой в 922 г. был принят ислам. Ехать до Болгара будем около трех часов</p>
                                <p class="text-fred text-lg font-medium leading-[1.4]">100 ₽</p>
                            </div>
                            <div class="flex-col flex border-b border-fline py-5 first:border-t gap-5 lg:gap-[15px]">
                                <p class=" text-base font-medium text-black">Аренда оборудования (для лучшей слышимости гида)</p>
                                <p class="lg:mb-[5px] text-sm leading-[1.4] text-ftext3">Загородная автобусная экскурсия, на которой мы познакомимся с Древним городом Болгар, объектом всемирного наследия ЮНЕСКО.Болгар расположен в 190 км от Казани. Это древняя столица Волжской Булгарии, в которой в 922 г. был принят ислам. Ехать до Болгара будем около трех часов</p>
                                <p class="text-fred text-lg font-medium leading-[1.4]">100 ₽</p>
                            </div>
                        </Tab>
                     </Tabs>                                                             
                     <Button size="L" @click="openModal">Заказать экскурсию</Button>                     
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
            <Recommendations class="wrapper col-[full]" /> 
        </div>
    </main>
    <ClientOnly>
        <Teleport to="#teleported">
            <Modal @close="closeModal" v-show="isShowModal">
                <h2 class="text-[1.5625rem] lg:text-3xl font-bold text-fblack max-lg:mt-[37px]">Остров-град Свияжск</h2>
                <form class="flex flex-col lg:gap-10 gap-[30px] mt-[30px] lg:mt-[50px] text-fblack">
                    <div>
                        <p class="mb-5 font-medium leading-[1.2] text-[1.0625rem]">Выбор даты</p>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <FormsDatepicker decoration="border"></FormsDatepicker>                                        
                        </div>
                    </div>
                    <div>
                        <p class="mb-5 font-medium leading-[1.2] text-[1.0625rem]">Выбор отеля</p>                                   
                        <FormsSelect decoration="border" :options="['отель1','отель2','отель3']"></FormsSelect> 
                    </div>
                    <div>
                        <p class="mb-5 font-medium leading-[1.2] text-[1.0625rem]">Количество людей</p>  
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">                                 
                            <FormsSelect decoration="border" :options="[1,3,6]"></FormsSelect> 
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
                                    <td data-label="Цена" class="table-primary-td">{{test}}</td>
                                    <td data-label="Количество" class="table-primary-td"><FormsCounter v-model="test" class="float-right"/></td>
                                </tr>
                                <tr class="group/table">
                                    <td data-label="Тип билета" class="table-primary-td">Детский</td>
                                    <td data-label="Цена" class="table-primary-td">3999 ₽</td>
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
                            <FormsInput decoration="border" type="tel">Номер телефона*</FormsInput>                                                                      
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
</template>

<script setup>
let test = ref()

let isShowModal = ref(false)

const closeModal = ()=>{
    isShowModal.value = false;         
    document.querySelector('body').style.overflowY = ""    
}

const openModal = ()=>{
    document.querySelector('body').style.overflowY = "hidden"
    isShowModal.value = true;
}
</script>
