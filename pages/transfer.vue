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
        <div class="grid grid-cols-1 lg:grid-cols-[265px_calc(100%-305px)] gap-y-5 gap-x-10 max-lg:mt-[30px]">
            <div class="relative">
                <SideBar class="w-full sticky top-[50px]" />               
            </div>
            <div class="flex flex-col gap-[30px]">
                <div class="text-sm text-fblack mb-2.5 max-lg:hidden">
                    <span class="last:text-finactive after:content-['/'] last:after:content-['']">Экскурсии по Татарстану</span>                    
                    <span class="last:text-finactive after:content-['/'] last:after:content-['']">Остров-град Свияжск</span>
                </div>
                <div class="flex flex-col gap-[30px] lg:gap-5 lg:pb-[60px] ">                    
                     <h1 class="text-[1.5625rem] leading-1.2 lg:text-4xl text-fblack font-bold">Остров-град Свияжск</h1>
                     <div>
                        <div class="inline-flex items-center gap-[15px] px-[15px] py-2.5 shadow-[0_4px_23px_0_rgba(0,0,0,.07)] rounded-[10px] text-fblack text-xl font-medium"><img src="@/assets/imgs/icons/price.svg" alt=""> от 2499 ₽</div>
                     </div>
                     <p class="text-sm leading-[1.4] text-ftext3">Загородная автобусная экскурсия, на которой мы познакомимся с Древним городом Болгар, объектом всемирного наследия ЮНЕСКО.Болгар расположен в 190 км от Казани. Это древняя столица Волжской Булгарии, в которой в 922 г. был принят ислам. Ехать до Болгара будем около трех часов, которые пролетят незаметно: живописные пейзажами и путевой рассказ экскурсовода не дадут заскучать. В Болгаре мы увидим и древнее болгарское городище, где сохранились памятники архитектуры XIII-XIV вв., комплекс мавзолеев XIV в., и современную красавицу-мечеть Белую мечеть, и «Памятный знак в честь принятия ислама» — здание, воздвигнутое на месте принятия ислама. Мы зайдем в этот музей и увидим самый дорогой и большой в мире печатный Коран (500 кг), внесенный в книгу рекордов Гиннеса. А еще познакомимся с болгарской средневековой медициной, посетив Музей «Дом лекаря».</p>
                     <Button size="L" class="lg:mt-2.5 w-full max-w-[150px]">{{ generalConfigStore.value.static_info.global_words.order }}</Button>
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
                    <NuxtLink to="/" class="link font-medium text-sm max-lg:hidden">{{generalConfigStore.value.static_info.global_words.show_more}}</NuxtLink>
                </div>            
            </div>            
        </div>
        <div class="pt-[60px]">
            <h2 class="text-2xl lg:text-3xl font-bold  text-fblack mb-[30px]">{{generalConfigStore.value.static_info.global_words.recommendations}}</h2>                    
            <Recommendations /> 
        </div>
    </main>
</template>

<script setup>
    import { useGeneralConfigStore} from '@/stores/generalConfigStore'
    
    const generalConfigStore = useGeneralConfigStore()
</script>
