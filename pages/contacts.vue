<template>
    <main class="grid-container">        
        <div class="py-[30px] border-b border-b-fline">
            <h1 class="text-[1.75rem] leading-[1.2] lg:text-4xl font-bold text-fblack">Контакты</h1>
        </div>
        <div class="flex max-lg:flex-col py-[30px] justify-between gap-[30px]">
            <div class="flex gap-10 sm:gap-7 sm:max-lg:flex-row flex-col">
                <div class="text-fblack sm:max-lg:flex-1">
                    <p class="text-lg font-bold mb-[15px]">{{generalConfigStore.value.static_info.global_words.address}}</p>
                    <p class="text-sm leading-[1.4] max-w-[284px]">{{generalConfigStore.value.static_info.contact.addresses.main}}</p>
                </div>
                <div class="text-fblack sm:max-lg:flex-1 lg:mt-auto">
                    <p class="text-lg font-bold mb-[15px]">{{generalConfigStore.value.static_info.global_words.mail_index_address}}</p>
                    <p class="text-sm leading-[1.4]">{{generalConfigStore.value.static_info.contact.addresses.index_mail}}</p>
                </div>
            </div>
            <div class="flex gap-[30px] sm:gap-7 sm:max-lg:flex-row flex-col">
                <div class="text-fblack sm:max-lg:flex-1">
                    <p class="text-lg font-bold mb-[15px]">{{generalConfigStore.value.static_info.global_words.telephone}}</p>
                    <div class="flex max-lg:flex-wrap lg:flex-col gap-[15px] lg:gap-1.5">
                        <NuxtLink :to="`tel:${telephon.replace(/\s/g,'')}`" class="text-fred text-sm leading-[1.4] max-lg:w-[40%] font-medium" v-for="telephon in generalConfigStore.value.static_info.contact.telephones">{{telephon}}</NuxtLink>
                    </div>
                </div>
                <div class="text-fblack sm:max-lg:flex-1 lg:mt-auto">
                    <p class="text-lg font-bold mb-[15px]">{{generalConfigStore.value.static_info.global_words.email}}</p>                   
                    <a href="tel:88002222161" class="text-fred text-sm leading-[1.4] font-medium ">ek@kazantrip.ru</a>    
                </div>
            </div>            
            <div class="text-fblack">
                <p class="text-lg font-bold mb-[15px]">Реквизиты</p>
                <p class="text-sm leading-[1.4]">{{generalConfigStore.value.static_info.contact.company_details}}</p>
            </div>     
            <div class="flex gap-3">
                <NuxtLink :to="generalConfigStore.value.static_info.contact.socials.telegram" class="shrink-0 text-fblack"><IconsTg/></NuxtLink>
                <NuxtLink :to="generalConfigStore.value.static_info.contact.socials.whatsApp" class="shrink-0 text-fblack"><IconsWhatsapp/></NuxtLink>
                <NuxtLink :to="generalConfigStore.value.static_info.contact.socials.vk" class="shrink-0 text-fblack"><IconsVk/></NuxtLink>
            </div>            
        </div>
        <div class="col-[full] h-[350px] lg:h-[500px] -mb-20 lg:-mb-[150px] mt-20 lg:mt-[70px]">
            <GMapMap :disableDefaultUI="true" :center="center" :zoom="10"/>
        </div>     
        
    </main>
</template>

<script setup>
    import { useGeneralConfigStore} from '@/stores/generalConfigStore'

    const generalConfigStore = useGeneralConfigStore()

    let center = ref({lat: 55.093048, lng: 50.842120})
</script>

