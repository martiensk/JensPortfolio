import Vue from 'vue';
import Main from './_components/main.vue';
import Vuetify, { VApp } from 'vuetify/lib';
import VueRouter from 'vue-router';
import Routes from './router';
import { Ripple } from 'vuetify/lib/directives';
import '../styles/main.scss';
import 'vuetify/src/stylus/app.styl';

Vue.use(VueRouter);
const router = new VueRouter({ routes: Routes });

Vue.use(Vuetify, {
    components: {
        VApp
    },
    directives: {
        Ripple
    }
});

const app = new Vue({
    render: (h) => {
        return h(Main);
    },
    router
});
app.$mount('#app');
// cosmetic change
