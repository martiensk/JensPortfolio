<template>
    <v-app>
        <v-toolbar app height="120px" flat color="transparent" :fixed="true">
            <v-card elevation="0" flat color="transparent" :class="[isHome ? 'white--text' : '', 'menu-text']" :to="'/'">
                <v-toolbar-title class="display-1 text-uppercase font-weight-bold">
                    Jennie Kropff
                </v-toolbar-title>
                <v-subheader :class="['body-2', 'text-uppercase', 'd-block', 'pa-0', isHome ? 'white--text' : '', 'menu-text']">
                    Photography
                </v-subheader>
            </v-card>
            <v-spacer/>
            <v-menu offset-y :nudge-bottom="5" :min-width="160" :nudge-left="25" :open-on-hover="true">
                <v-btn slot="activator" class="pr-0 ma-1 menu-link" :right="true" :ripple="false" :small="true" flat :dark="isHome">
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
            <v-btn class="pr-0 ma-1 menu-link" :right="true" :ripple="false" :small="true" flat :dark="isHome" to="/about">About</v-btn>
            <!--v-btn class="pr-0 ma-1 menu-link" :right="true" :ripple="false" :small="true" flat :dark="isHome">Blog</v-btn-->
        </v-toolbar>
        <v-content :class="!isAbout ? 'ma-0 pa-0' : ''">
            <router-view :photos="photos" :photo-set="projectPhotos" :blurb="blurb" :project="selectedProject" @navigate="navigate"/>
        </v-content>
        <v-footer class="justify-center" absolute dark app>
            © {{ year }} Jennie Kropff Photography. All rights reserved.
        </v-footer>
    </v-app>
</template>
<script>
/* global photos, blurbs */
import { VApp, VToolbar, VToolbarTitle, VContent, VFooter, VSubheader, VCard, VSpacer, VBtn, VMenu, VList, VListTile, VListTileTitle } from 'vuetify/lib';

export default {
    name: 'Main',
    components: {
        VApp,
        VToolbar,
        VToolbarTitle,
        VContent,
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
            blurb: '',
            selectedProject: '',
            year: new Date().getFullYear()
        };
    },
    computed: {

        /**
         * Determines if the route is currently at the home page.
         * @returns {void}
         */
        isHome() {
            return this.$route.path === '/';
        },

        /**
         * Determines if the route is currently at the about page.
         * @returns {void}
         */
        isAbout() {
            return this.$route.path === '/about';
        }
    },
    created() {
        this.photos = photos;
        typeof this.$route.params.key !== 'undefined' && this.loadProjectData(this.$route.params.key);
    },
    methods: {

        /**
         * Navigates to a project page.
         * @param {string} key The project to navigate to.
         * @returns {void}
         */
        navigate(key) {
            this.loadProjectData(key);
            this.$router.push({ name: 'project', params: { key } });
        },

        /**
         * Loads data related to a specific project.
         * @param {string} key The project to load.
         * @returns {void}
         */
        loadProjectData(key) {
            this.projectPhotos = photos[key];
            this.blurb = blurbs[key];
            this.selectedProject = key;
        }
    }
};
</script>

<style lang="scss">
.menu-text {
    letter-spacing: 4px;
}

.white--text.menu-text {
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
</style>
