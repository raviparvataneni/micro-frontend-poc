import {useRoute, useRouter} from 'vue-router';
import {onMounted, onUnmounted, watch} from 'vue';

const useGlobalRouter = () => {
    const route = useRoute();
    const router = useRouter();
    // TODO make sure that rendering doesn't screw up these variables
    let routeUnsubscribe;
    let dispatching = false;
    let currentPathname = '';

    const globalRouterListener = (event) => {
        if (!dispatching) {
            currentPathname = event.detail.pathname;
            router.push(event.detail.pathname);
        } else {
            dispatching = false;
        }
    };

    onMounted(() => {
        routeUnsubscribe = watch(route, (newValue, oldValue) => {
            if (currentPathname !== newValue.path) {
                const event = new CustomEvent('microFrontendGlobalRouter', {
                    detail: {
                        pathname: newValue.path
                    }
                });
                dispatching = true;
                window.dispatchEvent(event);
            }
            currentPathname = newValue.path;
        });
        window.addEventListener('microFrontendGlobalRouter', globalRouterListener, true);
    });

    onUnmounted(() => {
        routeUnsubscribe();
        window.removeEventListener('microFrontendGlobalRouter', globalRouterListener, true);
    });
};

export default useGlobalRouter;