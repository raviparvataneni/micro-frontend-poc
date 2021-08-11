import { createRouter, createWebHistory } from 'vue-router';
import Page from '../components/Page.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/page/:number',
            name: 'Page',
            component: Page
        }
    ]
});