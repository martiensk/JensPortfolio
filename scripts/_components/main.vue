<template>
    <v-app>
        <v-toolbar app height="120px" flat color="transparent" :fixed="true">
            <v-card elevation="0" flat color="transparent" class="white--text menu-text" :to="'/'">
                <v-toolbar-title class="display-1 text-uppercase font-weight-bold">
                    Jennie Kropff
                </v-toolbar-title>
                <v-subheader class="body-2 text-uppercase d-block pa-0 white--text menu-text">
                    Photography
                </v-subheader>
            </v-card>
            <v-spacer/>
            <v-menu offset-y :nudge-bottom="5" :min-width="160" :nudge-left="25" :open-on-hover="true">
                <v-btn slot="activator" class="pr-0 ma-1 menu-link" :right="true" :ripple="false" :small="true" flat dark>
                    + Projects
                </v-btn>
                <v-list class="pa-0">
                    <div class="arrow-top"/>
                    <v-list-tile v-for="(photo, key, index) in photos" :key="index" class="text-capitalize" @click="navigate(key)">
                        <v-list-tile-title>
                            {{ key }}
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <v-btn class="pr-0 ma-1 menu-link" :right="true" :ripple="false" :small="true" flat dark>About</v-btn>
            <v-btn class="pr-0 ma-1 menu-link" :right="true" :ripple="false" :small="true" flat dark>Blog</v-btn>
        </v-toolbar>
        <v-content class="ma-0 pa-0">
            <v-container ma-0 pa-0 fluid>
                <router-view :photos="photos" :photo-set="projectPhotos" @navigate="navigate"/>
            </v-container>
        </v-content>
        <v-footer class="justify-center" absolute dark app>
            © {{ year }} Jennie Kropff Photography. All rights reserved.
        </v-footer>
    </v-app>
</template>
<script>
/* global photos */
import { VApp, VToolbar, VToolbarTitle, VContent, VContainer, VFooter, VSubheader, VCard, VSpacer, VBtn, VMenu, VList, VListTile, VListTileTitle } from 'vuetify/lib';

export default {
    name: 'Main',
    components: {
        VApp,
        VToolbar,
        VToolbarTitle,
        VContent,
        VContainer,
        VFooter,
        VSubheader,
        VCard,
        VSpacer,
        VBtn,
        VMenu,
        VList,
        VListTile,
        VListTileTitle
    },
    data() {
        return {
            photos: {},
            projectPhotos: null,
            year: new Date().getFullYear()
        };
    },
    mounted() {
        this.photos = photos;
    },
    methods: {

        /**
         * Navigates to a project page.
         * @param {string} key The project to navigate to.
         * @returns {void}
         */
        navigate(key) {
            this.projectPhotos = photos[key];
            this.$router.push({name: 'project', params: { key }});
        }
    }
};
</script>

<style lang="scss">
.menu-text {
    letter-spacing: 4px;
    text-shadow: 1px 1px 2px #000;
}

.hover {
    background-color: #e0e0e0;
}

.v-content__wrap {
    width: 100%;
}

.v-menu__content {
    contain: inherit;
    overflow: visible;

    .v-list {
        position: relative;
    }

    .arrow-top {
        border-color: transparent transparent #fff;
        border-style: solid;
        border-width: 0 10px 10px;
        height: 0;
        left: calc(50% - 12px);
        position: absolute;
        top: -9px;
        width: 0;
    }
}

.v-toolbar__content {
    padding: 0 50px;

    .display-1 {
        letter-spacing: 4px !important; /* stylelint-disable-line */
    }

    .v-subheader {
        height: auto;
    }

    .v-btn {

        &:hover {
            text-decoration: underline;
        }

        &::before {
            background-color: transparent;
        }
    }
}

.container {
    min-height: 100%;
}
</style>
