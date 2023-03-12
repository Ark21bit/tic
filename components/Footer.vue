<template>
    <footer class="bg-[#022B40] relative mt-20 lg:mt-[150px]">
        <img src="@/assets/imgs/imgFooter.png" alt="" class="max-lg:hidden absolute right-0 top-0 -translate-y-1/2">
        <div class="wrapper flex items-center py-4  gap-12 justify-between">
            <Logo class="text-white w-[135px] lg:w-[169px]" />
            <nav class="lg:flex hidden items-center gap-[35px] text-sm text-white ml-auto max-lg:hidden">
                <NuxtLink to="#">Экскурсии</NuxtLink>
                <NuxtLink to="#">Туры</NuxtLink>
                <NuxtLink to="#">Дополнительно</NuxtLink>
                <NuxtLink to="#">О нас</NuxtLink>
                <NuxtLink to="#">Контакты</NuxtLink>
                <NuxtLink to="#">Блог</NuxtLink>
            </nav>
            <div class="flex text-[rgba(255,255,255,0.4)] text-sm">
                <NuxtLink to="#" class="flex text-white after:w-[1px] after:h-full after:bg-[rgba(28,25,25,0.4)] after:mx-2.5">РУ</NuxtLink>            
                <NuxtLink to="#" class="flex">EN</NuxtLink>
            </div>
        </div>
        <div class="py-5 lg:py-[30px] border text-white border-y-[#123A4F] border-transparent sm:max-lg:border-b-transparent sm:max-lg:border-t-[#123A4F]">
            <div class="lg:wrapper lg:gap-20 lg:flex grid-container leading-[1.2]">
                <div class="flex max-lg:col-[full] flex-col gap-5 lg:flex-[1.55]">
                    <div class="lg:gap-[15px] gap-5 flex flex-wrap max-lg:pb-5 max-lg:border-b max-lg:border-b-[#123A4F] max-sm:px-[15px] max-lg:px-5">
                        <p class="mb-[5px] font-medium w-full">Адрес</p>
                        <div class="flex flex-col gap-[15px] sm:flex-1 lg:gap-[5px] text-sm w-full sm:w-auto lg:w-full">
                            <p class="font-medium">Главный офис</p>
                            <p>420111 г. Казань, ул. Баумана, д. 49</p>
                        </div>
                        <div class="flex flex-col gap-[15px] sm:flex-1 lg:gap-[5px] text-sm w-full sm:w-auto lg:w-full">
                            <p class="font-medium">Почтовый адрес:</p>
                            <p>420111, г. Казань, а/я 4</p>
                        </div>
                    </div>
                    <div class="lg:hidden gap-[15px] text-sm  flex flex-wrap pb-5 border-b border-b-[#123A4F] max-sm:px-[15px] max-lg:px-5">
                        <p class="lg:mb-2.5 text-base font-medium max-lg:w-full">Часы работы</p>
                        <p>Ежедневно 10:00-19:00</p>   
                    </div>
                    <div class="mt-auto max-lg:flex-col flex gap-5 justify-between">
                        <div class="flex flex-wrap lg:flex-col font-medium gap-x-10 gap-[15px] lg:gap-2.5 text-sm max-lg:pb-5 max-lg:border-b max-lg:border-b-[#123A4F] max-sm:px-[15px] max-lg:px-5">
                            <p class="lg:mb-2.5 text-base max-lg:w-full">Телефон</p>
                            <a href="tel:+784323167 98" class="w-max">+7 843 231 67 98</a>
                            <a href="tel:+793700932 34" class="w-max">+7 937 009 32 34</a>
                            <a href="tel:+793700932 34" class="w-max">+7 937 009 32 34</a>
                        </div>
                        <div class="flex flex-wrap sm:max-lg:flex-row flex-col sm:max-lg:items-end font-medium max-lg:justify-between lg:gap-x-10 gap-2.5 text-sm max-lg:pb-5 max-sm:px-[15px] max-lg:px-5">
                            <p class="lg:mb-2.5 text-base max-lg:w-full">Почта</p>
                            <a href="tel:+78432316798" class="w-max">+7 843 231 67 98</a>
                            <div class="flex gap-3 mt-auto">
                                <a href="#" class="shrink-0"><img src="@/assets/imgs/icons/whatsapp.svg" alt=""></a>
                                <a href="#" class="shrink-0"><img src="@/assets/imgs/icons/tg.svg" alt=""></a>
                                <a href="#" class="shrink-0"><img src="@/assets/imgs/icons/vk.svg" alt=""></a>
                            </div>
                        </div>                        
                    </div>
                    
                </div>                         
                <div class="max-lg:hidden flex flex-col gap-5 flex-1">
                    <div class="flex flex-wrap lg:flex-col font-medium lg:gap-x-10 gap-[15px] lg:gap-2.5 text-sm max-lg:pb-5 max-lg:border-b max-lg:border-b-[#123A4F] max-sm:px-[15px] max-lg:px-5">
                        <p class="lg:mb-2.5 text-base max-lg:w-full">Часы работы</p>
                        <p>Ежедневно 10:00-19:00</p>                    
                    </div>
                    <div class="flex mt-auto gap-5">
                        <img class="shrink-0" src="@/assets/imgs/icons/visa.svg" alt="">
                        <img class="shrink-0" src="@/assets/imgs/icons/mastercard.svg" alt="">
                        <img class="shrink-0" src="@/assets/imgs/icons/mir.svg" alt="">
                    </div>
                </div> 
                <div class="max-lg:hidden flex flex-col gap-5 flex-1">
                    <div class="flex flex-col gap-[15px] text-sm">
                        <p class="lg:mb-[5px] font-medium text-base">Под нужнды СЕО</p>
                        <a href="#">Экскурсия 1</a>                 
                        <a href="#">Экскурсия 2</a>                 
                        <a href="#">Экскурсия 3</a>                 
                        <a href="#">Экскурсия 4</a>                 
                        <a href="#">Экскурсия 5</a>                 
                        <a href="#">Экскурсия 6</a>                 
                        <a href="#">Экскурсия 7</a>                 
                        <a href="#">Экскурсия 8</a>                 
                    </div>                    
                </div> 
                <div class="max-lg:hidden flex flex-col gap-5 flex-1">
                    <div class="flex flex-col gap-[15px] text-sm">
                        <p class="lg:mb-[5px] font-medium text-base">Под нужнды СЕО</p>
                        <a href="#">Экскурсия 1</a>                 
                        <a href="#">Экскурсия 2</a>                 
                        <a href="#">Экскурсия 3</a>                 
                        <a href="#">Экскурсия 4</a>                 
                        <a href="#">Экскурсия 5</a>                 
                        <a href="#">Экскурсия 6</a>                 
                        <a href="#">Экскурсия 7</a>                 
                        <a href="#">Экскурсия 8</a>              
                    </div>                    
                </div> 
            </div>  
        </div>
        <div class="wrapper flex text-white justify-between sm:pt-0 lg:py-[30px] py-5">
            <p class="text-xs lg:text-sm leading-[1.2]">@Copyright 2021-2023 Все права защищены</p>
            <a href="" class="text-xs lg:text-sm leading-[1.2] max-lg:hidden ml-[100px] mr-auto">Порядок предоставления экскурсионных услуг</a>
            <a href="" class="text-xs lg:text-sm leading-[1.2]">Политика конфиденциальности</a>
        </div>
    </footer>
</template>

<script setup>
    import Logo from "./icons/Logo.vue"; 
</script>

