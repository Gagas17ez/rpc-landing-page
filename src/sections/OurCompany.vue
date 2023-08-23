<script setup>
import downloads from "../data/serviceicon";
</script>

<template>
    <!-- OurCompany Section Start -->
    <div id="services" class="container mx-auto px-5 md:w-4/5">
        <section class="py-16 pt-18">
            <div class="w-4/5 md:w-3/5 mx-auto">
                <h2 class="text-3xl md:text-4xl font-theme-heading font-medium text-center">Layanan Kami</h2>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div v-for="(download, index) in downloads" :key="download.id" :class="[index === 0 ? '' : '', index === 1 ? '' : '', index === 2 ? '' : '']" class="shadow-lg rounded-lg">
                    <div class="flex justify-center mt-12">
                        <img class="w-50 h-60" :src="download.icon" alt="Browser Logo" />
                    </div>
                    <h3 class="text-2xl font-theme-heading font-medium text-center mt-6">{{ download.title }}</h3>
                    <p class="text-md font-theme-content text-theme-grayish-blue text-center mt-3 mx-3">{{ download.subTitle }}</p>
                    <div class="my-7">
                        <img class="w-full" src="/images/bg-dots.svg" alt="Dot Backaground" />
                    </div>
                    <!-- <div class="flex justify-center mb-8">
                        <LinkButton btn-type="primary" :link="download.link" class="text-sm">Add & Install Extension</LinkButton>
                    </div> -->
                </div>
            </div>
        </section>
    </div>
    <!-- Download Section End -->
</template>
