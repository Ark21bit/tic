<template>  
    <main class="grid-container contain-paint">
        
        <SwiperOne class="col-[full]" v-if="hotel.media_gallery.status" :data="hotel.media_gallery.data"/>
        <ExcursionCategories class="col-[full] grid-container border-b border-b-fline mb-10 max-lg:hidden"/>
        
        <div class="grid grid-cols-1 lg:grid-cols-[265px_calc(100%-305px)] gap-y-5 gap-x-10 max-lg:mt-[30px]">
            <div class="relative">
                <SideBar class="w-full sticky top-[50px]" />               
            </div>
            <div class="flex flex-col gap-[30px]">
                <div class="text-sm text-fblack mb-2.5 max-lg:hidden">
                    <span class="last:text-finactive after:content-['/'] last:after:content-['']">Экскурсии по Татарстану</span>                    
                    <span class="last:text-finactive after:content-['/'] last:after:content-['']">Остров-град Свияжск</span>
                </div>
                <div class="flex max-sm:flex-col gap-[15px] lg:gap-5 sm:items-center">                    
                     <h1 class="text-[1.5625rem] leading-1.2 lg:text-4xl text-fblack font-bold">{{ hotel.lang_info.title }}</h1>
                     <Rating :rating="hotel.stars"  />
                </div>
                <div class="flex gap-2 lg:gap-3 flex-wrap">
                    <div class="flex gap-[15px] items-center font-medium text-sm lg:text-base text-fblack py-2.5 px-[15px] border border-fline rounded-[10px]">
                        <img src="@/assets/imgs/icons/wi-fi.svg" class="w-6 lg:w-[27px]" alt="">
                        Шведский стол 
                    </div>
                    <div class="flex gap-[15px] items-center font-medium text-sm lg:text-base text-fblack py-2.5 px-[15px] border border-fline rounded-[10px]">
                        <img src="@/assets/imgs/icons/wi-fi.svg" class="w-6 lg:w-[27px]" alt="">
                        Континентальный завтрак 
                    </div>
                    <div class="flex gap-[15px] items-center font-medium text-sm lg:text-base text-fblack py-2.5 px-[15px] border border-fline rounded-[10px]">
                        <img src="@/assets/imgs/icons/wi-fi.svg" class="w-6 lg:w-[27px]" alt="">
                        Паркинг 
                    </div>
                    <div class="flex gap-[15px] items-center font-medium text-sm lg:text-base text-fblack py-2.5 px-[15px] border border-fline rounded-[10px]">
                        <img src="@/assets/imgs/icons/wi-fi.svg" class="w-6 lg:w-[27px]" alt="">
                        Панорманый вид 
                    </div>
                    <div class="flex gap-[15px] items-center font-medium text-sm lg:text-base text-fblack py-2.5 px-[15px] border border-fline rounded-[10px]">
                        <img src="@/assets/imgs/icons/wi-fi.svg" class="w-6 lg:w-[27px]" alt="">
                        WI FI 
                    </div>
                    <div class="flex gap-[15px] items-center font-medium text-sm lg:text-base text-fblack py-2.5 px-[15px] border border-fline rounded-[10px]">
                        <img src="@/assets/imgs/icons/wi-fi.svg" class="w-6 lg:w-[27px]" alt="">
                        Кондиционер 
                    </div>                    
                </div>                
                <div>
                    <p class="text-sm leading-[1.4] text-ftext3 mb-[30px] lg:mb-5">{{ hotel.lang_info.description }}</p>
                    <div class="flex gap-1 items-start sm:items-center">
                        <img src="@/assets/imgs/icons/map2.svg" alt="">
                        <NuxtLink to="/" class="link text-sm leading-[1.4]">{{ hotel.lang_info.fiz_address }}</NuxtLink>
                    </div>
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
                    <div> 
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
            <Recommendations :data="hotel.info_recommendations.data"/> 
        </div>
    </main>
</template>

<script setup>
    import { useGeneralConfigStore} from '@/stores/generalConfigStore'

    const generalConfigStore = useGeneralConfigStore()
    

    const { locale } = useI18n()
 

    const props = defineProps({            
        hotel: { type:Object },
    })

    const hotel = computed(()=>{
        return props.hotel
    })
</script>
