<template>
    <v-container ma-0 pa-0 fluid class="flexi-container">
        <div class="slider">
            <v-card v-for="(photo, key) in photoSet" :key="key" class="slider-item">
                <img :src="`/${project}/${photo}`">
            </v-card>
        </div>
        <v-card>
            <v-card-text>{{ blurb }}</v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import { VContainer, VCard, VCardText } from 'vuetify/lib';

export default {
    name: 'Project',
    components: { VContainer, VCard, VCardText },
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
    }
};
</script>

<style lang="scss" scoped>
.flexi-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.slider {
    display: flex;
    padding: 100px 0;
}

.slider-item {
    margin: 10px;
}

img {
    height: 500px;
}
</style>
