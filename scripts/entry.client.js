import Vue from 'vue';
import VueRouter from 'vue-router';
import Routes from './router';
import Main from './_components/main.vue';
//import '../styles/main.scss';

Vue.use(VueRouter);

const router = new VueRouter({ routes: Routes });

const app = new Vue({
    render: (h) => {
        return h(Main);
    },
    router
});
app.$mount('#app');
// cosmetic change
