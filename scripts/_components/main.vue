<template>
  <v-app>
    <v-toolbar app height="120px" flat color="transparent">
        <v-card elevation="0" flat color="transparent">
            <v-toolbar-title class="display-1 text-uppercase font-weight-bold">Jennie Kropff</v-toolbar-title>
            <v-subheader class="body-2 text-uppercase d-block pa-0">Photography</v-subheader>
        </v-card>
        <v-spacer/>
        <v-menu offset-y>
            <v-btn slot="activator" class="pr-0 ma-1 menu-link" :right="true" :ripple="false" :small="true" flat>
                + Projects
            </v-btn>
            <v-list>
                <v-list-tile v-for="(item, index) in items" :key="index" active-class="highlighted">
                <v-list-tile-title>{{ item }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
    </v-menu>
        <v-btn class="pr-0 ma-1 menu-link" :right="true" :ripple="false" :small="true" flat>Link Two</v-btn>
        <v-btn class="pr-0 ma-1 menu-link" :right="true" :ripple="false" :small="true" flat>Link Three</v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
    <v-footer app/>
  </v-app>
</template>
<script>
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
            items: ['Link One', 'Link Two', 'Link Three']
        };
    }
};
</script>

<style lang="scss">
.v-toolbar__content {
    padding: 0 50px;

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
