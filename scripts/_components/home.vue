<template>
    <div>
        <v-parallax class="parallax" v-for="(photo, key, index) in photos" :key="index" :src="`/${key}/cover.jpg`" :height="'100%'">
            {{key}}
        </v-parallax>
    </div>
</template>

<script>
import { VParallax } from 'vuetify/lib';

export default {
    name: 'Home',
    components: { VParallax },
    props: ['photos']
};
</script>

<style lang="scss">
.parallax {
    height: 500px; /* stylelint-disable-line */
    width: 100%;
}
</style>
