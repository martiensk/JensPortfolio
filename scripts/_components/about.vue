<template>
    <v-container fluid fill-height>
        <v-layout fill-height column>
            <v-layout justify-center>
                <v-flex xs6>
                    <v-card class="mr-2 mb-auto" color="transparent" flat>
                        <v-card-title class="display-1 font-weight-bold">
                            About
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout justify-center align-center fill-height>
                <v-flex xs3>
                    <v-card class="mr-2 mb-auto" color="transparent" flat>
                        <v-card-text>
                            <p>
                                I am a new photographer to the scene looking to hone my skill in photography.
                            </p>
                            <p>
                                I am always learning and finding new and exciting techniques to improve and keep the experience nice and fresh.
                            </p>
                            <p>
                                I would love the opportunity to work with you and your company. I have the utmost respect for chefs and bakers alike, they work tirelessly to bring us the most mouth watering food and I would like to highlight this unique ability and show it off to the world.
                            </p>
                            <p>
                                Depending on your needs, I work on and off site. I bring your style to life in my photos.
                            </p>
                            <p>
                                I look forward to being able to help you show the world your moreish food and drinks.
                            </p>
                            <p>
                                <strong>
                                    Photographer
                                </strong>
                            </p>
                            <p>
                                <i>
                                    Jen. K
                                </i>
                            </p>
                            <p>
                                <i>
                                    <a href="mailto:jenzi.kropff@gmail.com">
                                        jenzi.kropff@gmail.com
                                    </a>
                                </i>
                            </p>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs3>
                    <v-card class="d-flex ml-2" color="red lighten-3" height="400px" width="400px">
                        <v-img :src="'/images/about.jpg'"/>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-layout>
    </v-container>
</template>

<script>
import { VContainer, VLayout, VFlex, VCard, VCardText, VCardTitle, VImg } from 'vuetify/lib';
import '../../images/about.jpg';

export default {
    name: 'About',
    components: {
        VContainer,
        VLayout,
        VFlex,
        VCard,
        VCardText,
        VCardTitle,
        VImg
    }
};
</script>
<style lang="scss" scoped>
a {
    color: #000;
    text-decoration: none;
}
</style>
