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
                <NuxtLink to="#" class="flex text-white after:w-[1px] after:h-full after:bg-[rgba(255,255,255,0.4)] after:mx-2.5">РУ</NuxtLink>            
                <NuxtLink to="#" class="flex">EN</NuxtLink>
            </div>
        </div>
        <div class="py-5 lg:py-[30px] border text-white border-y-[#123A4F] border-transparent sm:max-lg:border-b-transparent sm:max-lg:border-t-[#123A4F]">
            <div class="lg:wrapper lg:gap-20 lg:flex grid-container ">
                <div class="flex max-lg:col-[full] flex-col gap-5 lg:flex-[1.55]">
                    <div class="lg:gap-[15px] gap-5 flex flex-wrap max-lg:pb-5 max-lg:border-b max-lg:border-b-[#123A4F] max-sm:px-[15px] max-lg:px-5">
                        <p class="lg:mb-[5px] font-medium w-full">Адрес</p>
                        <div class="flex flex-col gap-[15px] sm:max-lg:flex-1 lg:gap-[5px] text-sm w-full sm:w-auto lg:w-full">
                            <p class="font-medium">Главный офис</p>
                            <p>420111 г. Казань, ул. Баумана, д. 49</p>
                        </div>
                        <div class="flex flex-col gap-[15px] sm:max-lg:flex-1 lg:gap-[5px] text-sm w-full sm:w-auto lg:w-full">
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
                            <a href="tel:+78432676116" class="w-max">+7 843 267 61 16</a>
                            <a href="tel:+79370093234" class="w-max">+7 937 009 32 34</a>
                        </div>
                        <div class="flex flex-wrap sm:max-lg:flex-row flex-col sm:max-lg:items-end font-medium max-lg:justify-between lg:gap-x-10 max-sm:gap-[15px] gap-2.5 text-sm max-sm:pb-0 max-lg:pb-5 max-sm:px-[15px] max-lg:px-5">
                            <p class="lg:mb-2.5 text-base max-lg:w-full">Почта</p>
                            <a href="mailto:office@kazantravel.ru" class="w-max">office@kazantravel.ru</a>
                            <div class="flex gap-3 mt-auto">
                                <a href="#" class="shrink-0 text-white"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_709_1299)"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.7767 4.42997C20.0238 4.32596 20.2943 4.29008 20.5599 4.32608C20.8256 4.36208 21.0768 4.46863 21.2873 4.63465C21.4979 4.80067 21.6601 5.02008 21.757 5.27005C21.854 5.52002 21.8822 5.79141 21.8387 6.05597L19.5707 19.813C19.3507 21.14 17.8947 21.901 16.6777 21.24C15.6597 20.687 14.1477 19.835 12.7877 18.946C12.1077 18.501 10.0247 17.076 10.2807 16.062C10.5007 15.195 14.0007 11.937 16.0007 9.99997C16.7857 9.23897 16.4277 8.79997 15.5007 9.49997C13.1977 11.238 9.50265 13.881 8.28065 14.625C7.20265 15.281 6.64065 15.393 5.96865 15.281C4.74265 15.077 3.60565 14.761 2.67765 14.376C1.42365 13.856 1.48465 12.132 2.67665 11.63L19.7767 4.42997Z" fill="currentColor"/></g><defs><clipPath id="clip0_709_1299"><rect width="24" height="24" fill="currentColor"/></clipPath></defs></svg></a>
                                <a href="#" class="shrink-0 text-white"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00401 22L3.35601 17.032C2.46515 15.5049 1.99711 13.768 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.2328 22.0029 8.49667 21.5352 6.97001 20.645L2.00401 22ZM8.39101 7.308C8.26188 7.31602 8.13569 7.35003 8.02001 7.408C7.91153 7.46943 7.81251 7.54622 7.72601 7.636C7.60601 7.749 7.53801 7.847 7.46501 7.942C7.09542 8.423 6.89662 9.01342 6.90001 9.62C6.90201 10.11 7.03001 10.587 7.23001 11.033C7.63901 11.935 8.31201 12.89 9.20101 13.775C9.41501 13.988 9.62401 14.202 9.84901 14.401C10.9524 15.3725 12.2673 16.073 13.689 16.447L14.258 16.534C14.443 16.544 14.628 16.53 14.814 16.521C15.1053 16.506 15.3896 16.4271 15.647 16.29C15.778 16.2225 15.9058 16.1491 16.03 16.07C16.03 16.07 16.073 16.042 16.155 15.98C16.29 15.88 16.373 15.809 16.485 15.692C16.568 15.606 16.64 15.505 16.695 15.39C16.773 15.227 16.851 14.916 16.883 14.657C16.907 14.459 16.9 14.351 16.897 14.284C16.893 14.177 16.804 14.066 16.707 14.019L16.125 13.758C16.125 13.758 15.255 13.379 14.724 13.137C14.668 13.1126 14.608 13.0987 14.547 13.096C14.4786 13.089 14.4095 13.0967 14.3443 13.1186C14.2791 13.1405 14.2193 13.1761 14.169 13.223V13.221C14.164 13.221 14.097 13.278 13.374 14.154C13.3325 14.2098 13.2754 14.2519 13.2098 14.2751C13.1443 14.2982 13.0733 14.3013 13.006 14.284C12.9409 14.2666 12.877 14.2445 12.815 14.218C12.691 14.166 12.648 14.146 12.563 14.109L12.558 14.107C11.9859 13.8572 11.4562 13.5198 10.988 13.107C10.862 12.997 10.745 12.877 10.625 12.761C10.2316 12.3842 9.88873 11.958 9.60501 11.493L9.54601 11.398C9.50364 11.3342 9.46937 11.2653 9.44401 11.193C9.40601 11.046 9.50501 10.928 9.50501 10.928C9.50501 10.928 9.74801 10.662 9.86101 10.518C9.9551 10.3983 10.0429 10.2738 10.124 10.145C10.242 9.955 10.279 9.76 10.217 9.609C9.93701 8.925 9.64701 8.244 9.34901 7.568C9.29001 7.434 9.11501 7.338 8.95601 7.319C8.90201 7.313 8.84801 7.307 8.79401 7.303C8.65972 7.29633 8.52515 7.29866 8.39101 7.308Z" fill="currentColor"/></svg></a>
                                <a href="#" class="shrink-0 text-white"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.7203 6.1875C22.8872 5.65875 22.7203 5.27437 21.982 5.27437H19.5272C18.908 5.27437 18.622 5.61094 18.4552 5.97094C18.4552 5.97094 17.1923 9.04594 15.4289 11.0395C14.857 11.6161 14.595 11.8083 14.2852 11.8083C14.1183 11.8083 13.9036 11.6161 13.9036 11.0878V6.16266C13.9036 5.53828 13.7133 5.25 13.1887 5.25H9.32812C8.94656 5.25 8.70844 5.53828 8.70844 5.82656C8.70844 6.42703 9.59016 6.57141 9.68531 8.25281V11.9062C9.68531 12.6989 9.54469 12.8438 9.2325 12.8438C8.39859 12.8438 6.37313 9.74484 5.15812 6.21375C4.92188 5.51437 4.68188 5.25 4.06219 5.25H1.58391C0.869063 5.25 0.75 5.58609 0.75 5.94656C0.75 6.59531 1.58391 9.86203 4.63406 14.1858C6.65953 17.1389 9.54281 18.7261 12.1402 18.7261C13.7133 18.7261 13.9036 18.3656 13.9036 17.7652V15.5311C13.9036 14.8106 14.0466 14.6906 14.5472 14.6906C14.9044 14.6906 15.548 14.8823 17.0016 16.2998C18.6694 17.9813 18.9553 18.75 19.8848 18.75H22.3392C23.0541 18.75 23.3878 18.3895 23.197 17.693C22.9828 16.9964 22.1723 15.9877 21.1238 14.7867C20.5519 14.1145 19.6941 13.3697 19.432 13.0092C19.0748 12.5287 19.17 12.3366 19.432 11.9044C19.4081 11.9044 22.4109 7.62844 22.7203 6.18563" fill="currentColor"/></svg></a>
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
        <div class="wrapper flex max-sm:flex-col text-white justify-between sm:pt-0 lg:py-[30px] gap-[15px] py-5">
            <p class="text-xs lg:text-sm  max-lg:hidden">@Copyright 2021-2023 Все права защищены</p>
            <a href="" class="text-xs lg:text-sm ">Порядок предоставления экскурсионных услуг</a>
            <a href="" class="text-xs lg:text-sm ">Правила оплаты</a>
            <a href="" class="text-xs lg:text-sm ">Политика конфиденциальности</a>
        </div>
    </footer>
</template>

<script setup>
    import Logo from "./icons/Logo.vue"; 
</script>

