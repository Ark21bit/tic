<template>
    <main class="grid-container">
        <div class="pt-[30px] lg:pt-[73px] pb-[100px]">
            <div class="flex max-lg:flex-col justify-between gap-6 lg:items-center mb-10 lg:mb-[50px]">
                <h1 class="text-4xl font-bold  text-fblack">Сборные экскурсии</h1>                                 
                <FormsDatepicker decoration="border" text-input v-model="date" class="max-w-[162px]" :id="'1'" :direction="'horizontal'" :labelTitle="generalConfigStore.value.static_info.global_words.select_date"></FormsDatepicker>                
            </div>
            <div class="grid lg:grid-cols-[265px_calc(100%-305px)] gap-y-5 gap-x-10">
                <div class="relative">
                    <SideBar class="w-full sticky top-[50px]" />
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <CardCatalog />
                    <CardCatalog :is-sale="true"/>
                    <CardCatalog />
                    <CardCatalog />
                    <CardCatalog />
                    <CardCatalog />
                </div>
            </div>
        </div>
        <div class="border-t border-t-fline max-lg:hidden">
            <div class="flex gap-5 border-b border-b-fline py-[30px]">
                <div class="flex-1 gap-2 flex flex-col justify-between">
                    <p class="text-lg font-medium  text-fblack">
                        Экскурсии по Казани с экскурсоводом:<br>
                        <span class="text-fred">цены и бронирование билетов</span>
                    </p>
                    <img src="@/assets/imgs/img.png" class="h-48 w-full max-w-[387px] rounded-[5px]" alt="">
                </div>
                <div class="flex-1">
                    <p class="text-ftext3 text-sm leading-[1.4]">Лучший способ узнать о главных достопримечательностях любого города - прогулка с местным жителем. А если этот местный житель еще и является дипломированным экскурсоводом, который сдал строгий экзамен на знание достопримечательностей и истории Казани, эта прогулка станет еще более памятной.
                        <br><br>
                        Заказывая групповую или индивидуальную обзорную экскурсию по Казани, вы гарантированно получаете порцию положительных эмоций. Наши экскурсоводы одинаково интересно расскажут и покажут вам дневную и вечернюю Казань, проведут по Казанскому Кремлю, откроют вам тайны Острова-града Свияжска и поведают любопытные факты об исторических достопримечательностях, которыми изобилует столица Татарстана.
                        <br><br>
                        В рамках экскурсии с посещением Казанского Кремля вы сможете посетить мечеть Кул-Шариф и православный Благовещенский собор, увидеть падающую башню Сююмбике и шикарный вид на Волгу. Ежедневно нам приходят десятки положительных отзывов туристов о наших турах, экскурсиях и исторических музеях, которые мы показываем гостям нашего города.
                    </p>
                </div>
            </div>
            <div class="flex gap-5 border-b border-b-fline py-[30px]">
                <div class="flex-1 gap-2 flex flex-col justify-between">
                    <p class="text-lg font-medium  text-fblack"> 
                        Экскурсии в Казани 2022: <br>
                        <span class="text-fred">цены от 330 рублей</span>
                    </p>                    
                </div>
                <div class="flex-1">
                    <p class="text-ftext3 text-sm leading-[1.4]">
                        На карточках экскурсии выше вы найдете цены и подробное описание предстоящей экскурсии. Чтобы ознакомиться с деталями поездки, нажмите кнопку "Подробнее", и вам будет доступен тайминг поездки, тип (автобусная/пешеходная) и цены с учетом льгот и скидок.
                    </p>
                </div>
            </div>
            <div class="flex gap-5 border-b border-b-fline py-[30px]">
                <div class="flex-1 gap-2 flex flex-col justify-between">
                    <p class="text-lg font-medium  text-fblack max-w-[409px]">
                        Лучший план на выходные - 
                        <span class="text-fred">поехать на экскурсии по Казани!</span>
                    </p>
                    <img src="@/assets/imgs/img3.png" class="h-48 w-full max-w-[387px] rounded-[5px]" alt="">
                </div>
                <div class="flex-1">
                    <p class="text-ftext3 text-sm leading-[1.4]">
                        Если вы приехали погостить в столицу Татарстана, но не знаете, чем заняться на предстоящих выходных, советуем поехать на экскурсии по Казани, либо посетить музеи Республики. В обоих случаях никто не расскажет вам историю взятия Казани, ее прошлого и будущего лучше наших опытных экскурсоводов. Если вы приехали в город в рамках нашего автобусного тура, можете быть уверены, что получите от поездки максимум положительных эмоций.
                        <br><br>
                        К вашим услугам различные экскурсионные программы, которые понравятся людям любого возраста: от подросткового до пенсионного. Кстати, для пенсионеров на большинство экскурсий мы делаем скидку в размере 10% от стоимости стандартного билета. Экскурсионные туры ещё никогда не были так выгодны!
                        Ещё один вариант досуга - прогуляться по набережной озера Кабан, осмотреть ближайшие к нему памятники архитектуры и посетить интерактивный музей. А завершить пешеходную прогулку рекомендуем дегустацией блюд татарской кухни: эчпочмака, элеша, кыстыбыя, губадии и других лакомств.
                        <br><br>
                        Татарстан готовит увлекательное путешествие для каждого, кто приезжает сюда с туристическими целями. В Казани каждый найдет интересные формы досуга: речные прогулки, паломнические поездки к иконе казанской Божьей матери, осмотр современных зданий и архитектурных комплексов, старинных улиц и купеческих усадеб. Поверьте, наш город гораздо красивее, чем его видят туристы, гуляющие по улице Баумана! Закажите экскурсию и убедитесь в этом сами!
                    </p>
                </div>
            </div>
            <div class="flex gap-5 border-b border-b-fline py-[30px]">
                <div class="flex-1 gap-2 flex flex-col justify-between">
                    <p class="text-lg font-medium  text-fblack">Летние экскурсии 
                        <span class="text-fred">(Казань)</span>
                    </p>                   
                </div>
                <div class="flex-1">
                    <p class="text-ftext3 text-sm leading-[1.4]">
                        Летом мы с удовольствием предлагаем гостям нашего города <NuxtLink to="/" class="link">обзорные экскурсии по Казани</NuxtLink> на комфортабельных автобусах, оснащённых кондиционерами. Таким образом, жаркое казанское лето - не помеха для проведения увлекательных экскурсий по городу, пригородам и достопримечательностям гостеприимной Республики Татарстан.
                        <br><br>
                        В летнее время наша компания также проводит <NuxtLink to="/"  class="link">пешеходные экскурсии по Казани.</NuxtLink> Они менее продолжительные по времени, нежели <NuxtLink to="/"  class="link">автобусные экскурсии,</NuxtLink> но не менее увлекательные и интересные гостям города.
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { useGeneralConfigStore} from '@/stores/generalConfigStore'

const generalConfigStore = useGeneralConfigStore()

let date = ref()
</script>
