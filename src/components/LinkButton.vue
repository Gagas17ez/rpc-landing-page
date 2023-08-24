<script setup>
const props = defineProps({
    btnType: String,
    link: String,
    class: {
        type: String,
        default: "text-sm sm:text-md md:text-base"
    }
});
</script>

<template>
    <a v-if="btnType === 'secondary'" :href="link"  :class="class" class="font-theme-heading font-medium bg-theme-secondary px-6 py-2 text-white rounded shadow-md hover:bg-white border-2 border-transparent hover:border-theme-primary hover:text-theme-primary cursor-pointer transition duration-200 mr-5">
        
        <slot></slot>
    </a>
    <a v-if="btnType === 'primary'" :href="link"  :class="class" class="font-theme-heading rounded-full font-medium bg-theme-primary-dark px-6 py-4 text-white rounded shadow-md hover:bg-white border-2 border-transparent hover:border-theme-primary hover:text-theme-primary cursor-pointer transition duration-200 mr-5">
        <div class="flex justify-between">
            <svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-whatsapp text-white mr-2 hover:text-theme-secondary transition duration-200 cursor-pointer" viewBox="0 0 512 512"><path d="M48,59.49v393a4.33,4.33,0,0,0,7.37,3.07L260,256,55.37,56.42A4.33,4.33,0,0,0,48,59.49Z" fill="white"></path><path d="M345.8,174,89.22,32.64l-.16-.09c-4.42-2.4-8.62,3.58-5,7.06L285.19,231.93Z" fill="white"></path><path d="M84.08,472.39c-3.64,3.48.56,9.46,5,7.06l.16-.09L345.8,338l-60.61-57.95Z" fill="white"></path><path d="M449.38,231l-71.65-39.46L310.36,256l67.37,64.43L449.38,281C468.87,270.23,468.87,241.77,449.38,231Z" fill="white"></path></svg>
            <slot></slot>
        </div>
        
    </a>
</template>
