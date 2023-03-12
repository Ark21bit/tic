<template>
    <header class="wrapper py-4 flex gap-10 justify-between items-center">
        <NuxtLink to="/"><Logo class="text-fred w-[135px] lg:w-[169px]"/></NuxtLink>
        <nav class="lg:flex hidden items-center gap-[35px] text-sm text-fblack">
            <NuxtLink to="#">Экскурсии</NuxtLink>
            <NuxtLink to="#">Туры</NuxtLink>
            <NuxtLink to="#">Дополнительно</NuxtLink>
            <NuxtLink to="#">О нас</NuxtLink>
            <NuxtLink to="#">Контакты</NuxtLink>
        </nav>
        <div class="lg:flex hidden text-finactive text-sm font-medium">
            <NuxtLink to="#" class="flex text-fred after:w-[1px] after:h-full after:bg-[rgba(28,25,25,0.4)] after:mx-2.5">РУ</NuxtLink>            
            <NuxtLink to="#" class="flex">EN</NuxtLink>
        </div>
        <div class="flex gap-4 max-sm:hidden">
            <div class="flex flex-col text-fblack" > 
                <a href="tel:+78432676116">+7 843 267-61-16</a>
                <a href="tel:+79270331133">+7 927 033 11 33</a>
            </div>
            <Button size="L">Заказать звонок</Button>
        </div>
        <button class="flex flex-col justify-between w-[26px] h-3.5">
            <span class="w-full h-0.5 bg-fblack rounded-[1px]"/>
            <span class="w-full h-0.5 bg-fblack rounded-[1px]"/>
            <span class="w-full h-0.5 bg-fblack rounded-[1px]"/>
        </button>
    </header>
</template>

<script setup>
import Logo from "./icons/Logo.vue"; 
</script>
