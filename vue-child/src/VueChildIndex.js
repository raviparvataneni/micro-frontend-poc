import { createApp } from 'vue';
import VueChildApp from './components/VueChildApp.vue';
import {wrapAndRegisterWebComp} from './createWebComp';
import router from './router';

const app = createApp(VueChildApp)
    .use(router);

wrapAndRegisterWebComp('vue-child', app);