<template>
    <main class="grid-container contain-paint">
        
        <SwiperOne class="col-[full]" :data="product.media_gallery.data"/>     
        <ExcursionCategories class="col-[full] grid-container border-b border-b-fline mb-10 max-lg:hidden"/>
        <div class="grid grid-cols-1 lg:grid-cols-[265px_calc(100%-305px)] gap-y-5 gap-x-10 max-lg:mt-[30px]">
            <div class="relative">
                <SideBar class="w-full sticky top-[50px]" />               
            </div>
            <div class="flex flex-col gap-[30px]">
                <div class="text-sm text-fblack mb-2.5 max-lg:hidden">
                    <NuxtLink class="last:text-finactive after:content-['/'] last:after:content-['']" v-for="item in product.info_breadcrumbs.data" :to="localePath(`/${item.url}`)">{{ item.lang_info.title }}</NuxtLink>
                </div>
                <div class="flex flex-col gap-[30px] lg:gap-5 lg:pb-[60px] ">                    
                     <h1 class="text-[1.5625rem] leading-1.2 lg:text-4xl text-fblack font-bold">Остров-град Свияжск</h1>
                     <div>
                        <div class="inline-flex items-center gap-[15px] px-[15px] py-2.5 shadow-[0_4px_23px_0_rgba(0,0,0,.07)] rounded-[10px] text-fblack text-xl font-medium"><img src="@/assets/imgs/icons/price.svg" alt=""> от {{ product.price_see }} ₽</div>
                     </div>
                     <p class="text-sm leading-[1.4] text-ftext3">Загородная автобусная экскурсия, на которой мы познакомимся с Древним городом Болгар, объектом всемирного наследия ЮНЕСКО.Болгар расположен в 190 км от Казани. Это древняя столица Волжской Булгарии, в которой в 922 г. был принят ислам. Ехать до Болгара будем около трех часов, которые пролетят незаметно: живописные пейзажами и путевой рассказ экскурсовода не дадут заскучать. В Болгаре мы увидим и древнее болгарское городище, где сохранились памятники архитектуры XIII-XIV вв., комплекс мавзолеев XIV в., и современную красавицу-мечеть Белую мечеть, и «Памятный знак в честь принятия ислама» — здание, воздвигнутое на месте принятия ислама. Мы зайдем в этот музей и увидим самый дорогой и большой в мире печатный Коран (500 кг), внесенный в книгу рекордов Гиннеса. А еще познакомимся с болгарской средневековой медициной, посетив Музей «Дом лекаря».</p>
                     <Button size="L" class="lg:mt-2.5 w-full max-w-[150px]">{{ generalConfigStore.value.static_info.global_words.order }}</Button>
                </div>    
                <div class="lg:border-y border-y-fline lg:py-[30px] max-lg:hidden flex flex-col gap-[30px]">
                    <div >
                        <h3 class="text-xl font-medium text-fblack mb-5">{{ product.lang_info.title }}</h3>
                        <p class="text-sm leading-[1.4] text-ftext3">{{ product.lang_info.description }}</p>
                    </div>
                    <div > 
                        <h3 class="text-xl font-medium text-fblack mb-5">заголовок</h3>
                        <p class="text-sm leading-[1.4] text-ftext3">{{ product.lang_info.text }}</p>
                    </div>
                    <NuxtLink :to="localePath(`/`)" class="link font-medium text-sm max-lg:hidden">{{generalConfigStore.value.static_info.global_words.show_more}}</NuxtLink>
                </div>            
            </div>            
        </div>
        <div class="pt-[60px]">
            <h2 class="text-2xl lg:text-3xl font-bold  text-fblack mb-[30px]">{{generalConfigStore.value.static_info.global_words.recommendations}}</h2>                    
            <Recommendations :data="product.info_recommendations.data"/> 
        </div>
    </main>
</template>

<script setup>
    const generalConfigStore = useGeneralConfigStore()

    const props = defineProps({            
        product: { type:Object },
    })

    const product = computed(()=>{
        return props.product
    })
</script>
