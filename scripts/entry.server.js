import Vue from 'vue';
import Home from './_components/home';

export default (context) => {
    const app = new Vue({
        render: (h) => {
            return h(Home);
        }
    });
    return app;
};
