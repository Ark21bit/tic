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
                     <h1 class="text-[1.5625rem] sm:text-[1.75rem] leading-[1.2] lg:text-4xl text-fblack  font-bold -mb-2.5">Вечерняя НеоПанорамы</h1>
                     <p class="text-ftext3 text-sm leading-[1.4]">Автобусная экскурсия по ночному городу с остановками в видовых точках Казани. Включает посещение Новогоднего Казанского Кремля, где создан сказочный новогодний городок с ярко украшенной ёлкой. Архитектурные объекты Кремля (мечеть, собор и башня Сююмбике) тоже смотрятся совершенно иначе, нежели днем, а с кремлевского холма открывается впечатляющий вид на реку Казанку и современные районы города, на комплекс Дворца земледельцев и Кремлевскую набережную. Вторая точка обзора празднично украшенного города – колесо обозрения «Вокруг света» (высота 65 м, кабинки закрытые и теплые, а поэтому катание будет абсолютно комфортным). Вы также увидите центр семьи Казан, около которого установлена центральная елка (остановка при условии открытого проезда), впечатляющий ночными огнями сказочный театр кукол "Экият", проедете по известному мосту "Миллениум" Окончание экскурсии - Пушкина, 4 Примечание: Билеты на данную экскурсию детям до с 5 до 6 лет по цене билетов на Колесо Обозрения (320 руб). Детям до 4х лет (включительно), билеты бесплатные.</p>
                     <Button size="L" @click="openModal">Заказать экскурсию</Button>
                     <table class="table-primary" >
                        <thead class="table-primary-thead">
                            <tr>
                                <th class="table-primary-th">Участников в группе</th>
                            <th class="table-primary-th">Стоимость на группу(рус. яз.)</th>
                            </tr>                           
                        </thead>
                        <tbody>
                            <tr class="group/table">
                                <td class="table-primary-td" data-label="Участников в группе">До 3</td>
                                <td class="table-primary-td" data-label="Стоимость на гр.(рус. яз.)" >3999 ₽</td>
                            </tr>
                            <tr class="group/table">
                                <td class="table-primary-td" data-label="Участников в группе" >До 6</td>
                                <td class="table-primary-td" data-label="Стоимость на гр.(рус. яз.)" >3999 ₽</td>
                            </tr>
                            <tr class="group/table">
                                <td class="table-primary-td" data-label="Участников в группе" >От 7 до 18</td>
                                <td class="table-primary-td" data-label="Стоимость на гр.(рус. яз.)" >3999 ₽</td>
                            </tr>
                            <tr class="group/table">
                                <td class="table-primary-td" data-label="Участников в группе" >От 19 до 49</td>
                                <td class="table-primary-td" data-label="Стоимость на гр.(рус. яз.)" >3999 ₽</td>
                            </tr>
                        </tbody>
                     </table>
                     <p class="text-ftext3 text-sm leading-[1.4]">Загородная автобусная экскурсия, на которой мы познакомимся с Древним городом Болгар, объектом всемирного наследия ЮНЕСКО.Болгар расположен в 190 км от Казани. Это древняя столица Волжской Булгарии, в которой в 922 г. был принят ислам. </p>
                     <Button size="L" @click="openModal">Заказать экскурсию</Button>                     
                </div>                
                <div class="lg:border-y border-y-fline lg:py-[30px] max-lg:hidden flex flex-col gap-[30px]">
                    <div >
                        <h3 class="text-xl font-medium text-fblack mb-5">Экскурсия "Ночная Казань с колесом обозрения"</h3>
                        <p class="text-sm leading-[1.4] text-ftext3">Всем гостям и жителям нашего города предлагаем познакомиться с ночной Казанью на нашей экскурсии, предполагающей посещение колеса обозрения. Лучшие панорамные виды улиц нашего города откроются всем экскурсантам: вы увидите самые живописные объекты Казанского Кремля в вечерней подсветке, Дворец Земледельцев и великолепную казанскую набережную. Со второй точки осмотра в теплых и полностью закрытых кабинках колеса обозрения вы увидите современные городские постройки: спортивные комплексы, мост "Миллениум", здание Национальной библиотеки РТ и другие красивейшие здания ночной Казани.</p>
                    </div>
                    <div > 
                        <h3 class="text-xl font-medium text-fblack mb-5">Древний город Болгар: экскурсия с выездом из Казани</h3>
                        <p class="text-sm leading-[1.4] text-ftext3">
                            Кроме упомянутых объектов, справедливо включенных ЮНЕСКО в список материального культурного наследия человечества, Болгар способен удивить туристов любопытным объектом, включенным в список рекордов Гиннеса. Речь о самом большом в мире печатном коране. Он хранится в здании памятного знака, а его вес насчитывает более 500 кг. Священная книга украшена драгоценными и полудрагоценными камнями и золотом, а чтобы перелистнуть ее страницы требуется помощь нескольких человек.
                            <br><br>
                            Ещё один любопытный пункт экскурсии в город Болгар - посещение музея лекаря, в котором экскурсанты познакомятся с технологиями средневекового врачевания. Немногие знают, что государство Волжская Булгария до прихода татаро-монголов уже была очень развитым государством с четкой системой государственного управления, развитой медициной и собственными традициями строительства. Дошедшие до наших дней здания Болгара поражают экскурсантов продуманностью и масштабом.
                        </p>
                    </div>
                    <NuxtLink to="#" class="link font-medium text-sm max-lg:hidden">Читать полностью</NuxtLink>
                </div>            
                <Reviews/>  
            </div>            
        </div>
        <div class="col-[full] grid-container pt-10 lg:pt-[60px] lg:border-t border-t-fline">
            <h2 class="text-2xl lg:text-3xl font-bold  text-fblack mb-[30px]">Рекомендации</h2>                    
            <Recommendations class="wrapper col-[full]" /> 
        </div>
        <ClientOnly>
            <Teleport to="#teleported">
                <Modal @close="closeModal" v-show="isShowModal">
                    <h2 class="text-[1.5625rem] lg:text-3xl font-bold text-fblack max-lg:mt-[37px]">Вечерняя НеоПанорамы</h2>
                    <form class="flex flex-col lg:gap-10 gap-[30px] mt-[30px] lg:mt-[50px] text-fblack">
                        <div>
                            <p class="mb-5 font-medium leading-[1.2] text-[1.0625rem]">Выбор даты и времени</p>
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                <FormsDatepicker decoration="border">Дата</FormsDatepicker>
                                <FormsSelect decoration="border" :options="[13,14,15]">Время</FormsSelect>
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
                                <FormsInput decoration="border" type="email">Email</FormsInput>        
                                <FormsInput decoration="border" type="tel">Номер телефона*</FormsInput>   
                                <FormsSelect decoration="border" :options="[1,2,4]">Количество Человек</FormsSelect>                                      
                                <FormsCheckbox class="col-[full]">Подтверждаю свое согласие с Порядком предоставления экскурсионных услуг</FormsCheckbox>                               
                                <FormsCheckbox class="col-[full]">Даю согласие на обработку и хранение своих персональных данных в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».</FormsCheckbox>                               
                            </div>
                        </div>
                        <Button size="L" class="lg:w-fit">Забронировать экскурсию</Button>
                    </form>
                </Modal>
            </Teleport>
        </ClientOnly>
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
