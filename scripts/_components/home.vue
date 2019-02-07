<template>
    <div>
        <v-parallax v-for="(photo, key, index) in photos" :key="index" class="parallax" :src="`/${key}/cover.jpg`" :height="height">
            <v-card class="pa-10">
                {{ key }}
            </v-card>
        </v-parallax>
    </div>
</template>

<script>
import { VParallax, VCard } from 'vuetify/lib';

export default {
    name: 'Home',
    components: { VParallax, VCard },
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
    }
};
</script>

<style lang="scss" scoped>
.parallax {
    height: 500px; /* stylelint-disable-line */
    width: 100%;
}

.v-card {
    position: absolute;
}
</style>
