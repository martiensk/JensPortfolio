<template>
    <v-container ma-0 pa-0 fluid class="flexi-container" fill-height>
        <swiper :options="swiperOptions" class="slider" ref="slider">
            <swiper-slide v-for="(photo, key) in photoSet" :key="key" class="slider-item">
                <img :src="`/${project}/${photo}`">
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination"/>
            <div slot="button-prev" class="swiper-button-prev"/>
            <div slot="button-next" class="swiper-button-next"/>
        </swiper>
        <v-card elevation="0" flat>
            <v-card-text>{{ blurb }}</v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import { VContainer, VCard, VCardText } from 'vuetify/lib';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
    name: 'Project',
    components: { VContainer, VCard, VCardText, swiper, swiperSlide },
    props: {
        project: {
            type: String,
            required: true
        },
        photoSet: {
            type: Array,
            required: true
        },
        blurb: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            swiperOptions: {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                },
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        };
    }
};
</script>

<style lang="scss" scoped>
.flexi-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.slider {
    display: flex;
    padding: 100px 0;
    width: 100%;
}

.slider-item {
    margin: 0;
    width: auto;
}

img {
    height: 500px;
}
</style>
