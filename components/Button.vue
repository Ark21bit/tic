<template>
    <component :is="tag" class="flex items-center justify-center transition-colors duration-500 ease-linear rounded-[5px]" :class="buttonClass">
        <slot/>
    </component>
</template>

<script setup>


const props = defineProps(
    {
        color: { type: String, default:"primary" },
        size: { type: String, default:"M" },
        hover: { type: Boolean, default: true },         
        decoration: { type: String, default: "default" },
        tag:{  type: String, default: "button" }  
    }
)

const buttonColorClasses = {
  default: {
    primary: 'bg-fred text-white',    
    secondary: 'bg-fgreen text-white',    
    white: 'bg-white text-fblack',    
  },
  hover: {
    primary: 'hover:bg-[#C82027]',   
    secondary: '', 
    white: 'hover:bg-fred hover:text-white', 
  },
}

const buttonOutlineColorClasses = {
  default: {
    primary: 'outline outline-1 -outline-offset-1 outline-[#D7D7D7] text-fblack',     
  },
  hover: {
    primary: 'hover:bg-fgreen hover:outline-transparent',    
  },
}

const buttonSizeClasses = {
    L:"text-[.9375rem] leading-[19px] py-3 px-5",
    M:"text-sm px-6 py-2",
    none:"",
    arrowM:"p-4 rounded-full"
}

let buttonClass = computed( ()=>{
    let res = ""

    if(props.decoration == "default"){
        res += " " + buttonColorClasses.default[props.color] 
        if (props.hover == true) {
            res += " " + buttonColorClasses.hover[props.color] 
        }
    }    
    if (props.decoration == "outline") {
        res += " " + buttonOutlineColorClasses.default[props.color] 
        if (props.hover == true) {
            res += " " + buttonOutlineColorClasses.hover[props.color]
        }
    }

    res += " " + buttonSizeClasses[props.size]    
    
    return res
})
</script>
