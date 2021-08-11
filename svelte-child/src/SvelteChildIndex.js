import SvelteApp from './components/SvelteChildApp.svelte';
import {wrapAndRegisterWebComp} from './createWebComp';

wrapAndRegisterWebComp('svelte-child', SvelteApp);