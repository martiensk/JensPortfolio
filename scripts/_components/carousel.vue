<template>
    <v-container ma-0 pa-0 fluid>
        <v-carousel hide-delimiters :height="height">
            <v-carousel-item v-for="(photo, key, index) in photos" :key="index" :src="`/${key}/cover.jpg`">
                <v-card class="pa-10 font-weight-light" light @click="navigate(key)">
                    projects / <span>{{ key }}</span>
                </v-card>
            </v-carousel-item>
        </v-carousel>
    </v-container>
</template>

<script>
import { VContainer, VCarousel, VCarouselItem, VCard } from 'vuetify/lib';

export default {
    name: 'Home',
    components: { VContainer, VCarousel, VCarouselItem, VCard },
    props: {
        photos: {
            type: Object,
            default: () => { return {}; }
        }
    },
    data() {
        return {
            height: 300
        };
    },
    created() {
        this.height = window.innerHeight;
    },
    methods: {

        /**
         * Emits a 'navigate' event.
         * @param {string} key The url path to navigate to.
         * @returns {void}
         */
        navigate(key) {
            this.$emit('navigate', key);
        }
    }
};
</script>

<style lang="scss">
.v-carousel {
    height: 100% !important; /* stylelint-disable-line */

    .v-card {
        border-radius: 0;
        bottom: 10%;
        color: #9e9e9e;
        cursor: pointer;
        font-size: 14px;
        left: 2%;
        letter-spacing: 2px;
        padding: 8px 16px;
        position: absolute;
        text-transform: uppercase;

        span {
            color: #616161;
        }
    }
}
</style>
