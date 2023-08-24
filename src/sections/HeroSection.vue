<script setup></script>

<template>
    <!-- Hero Section Start -->
    <div id="hero" class="container mx-auto pb-24 px-5 overflow-x-hidden lg:overflow-x-visible">
        <section class="grid grid-cols-none lg:grid-cols-2 ml-10 pb-16 pt-8 items-center">
            <div class="lg:w-5/6 order-2 lg:order-none">
                <h1 class="text-4xl xl:text-5xl font-bold font-theme-heading text-center lg:text-left">Build Your Own PC</h1>
                <p class="lg:text-xl mt-10 font-theme-content text-theme-grayish-blue text-center lg:text-left">
                    Kami adalah Startup Digital yang bergerak di bidang Affiliate Marketing, di mana kami menghubungkan market komputer dengan calon pelanggan. 
                    Dengan RakitPC, perakitan komputer menjadi lebih mudah, praktis, dan dapat dilakukan oleh siapa saja.

                </p>
                <div class="flex justify-center lg:justify-start mt-10">
                    <LinkButton link="https://play.google.com/store/apps/details?id=com.rakitpc.rakitpc" btn-type="primary">Download di Playstore</LinkButton>
                    
                </div>
            </div>
            <div class="relative lg:item lg:justify-end lg:order-none mb-20 lg:mt-0 lg:mb-0 lg:-mr-10">
                <img class="z-10 lg:place-content-end lg:items-end w-30" src="/images/hero-section.webp" />
                <div class="-z-10 bg-theme-primary h-52 w-full sm:h-80 sm:w-full rounded-l-full absolute -right-28 md:-right-48 -bottom-8"></div>
            </div>
        </section>
    </div>
    <!-- Hero Section End -->
</template>
