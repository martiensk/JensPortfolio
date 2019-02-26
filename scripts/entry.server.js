import Vue from 'vue';
import Loader from './_components/loader';

export default (context) => {
    const app = new Vue({
        render: (h) => {
            return h(Loader);
        }
    });
    return app;
};
