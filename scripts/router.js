/**
 * Vue router config.
 * @namespace Router
 * @author Martiens Kropff
 */

import Parallax from './_components/parallax.vue';
import Carousel from './_components/carousel.vue';
import Project from './_components/project.vue';

export default [
    {
        path: '/',
        name: 'home',
        component: Carousel,
        props: true
    },
    {
        path: '/project/:key',
        name: 'project',
        component: Project,
        props: true
    },
    {
        path: '/parallax',
        name: 'parallax',
        component: Parallax,
        props: true
    }
];
