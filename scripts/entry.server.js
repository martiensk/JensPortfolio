import Vue from 'vue';
import Home from './_components/home';
/*import Vuetify, { VApp } from 'vuetify/lib';
import { Ripple } from 'vuetify/lib/directives';

Vue.use(Vuetify, {
    components: {
        VApp
    },
    directives: {
        Ripple
    }
});*/

export default (context) => {
    const app = new Vue({
        render: (h) => {
            return h(Home);
        }
    });
    return app;
};
