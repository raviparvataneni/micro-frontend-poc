import {useHistory} from 'react-router';
import {useEffect} from 'react';

export default () => {
    const history = useHistory();
    useEffect(() => {
        let dispatching = false;
        let currentPathname = '';

        const historyUnsubscribe = history.listen((location) => {
            if (currentPathname !== location.pathname) {
                const event = new CustomEvent('microFrontendGlobalRouter', {
                    detail: {
                        pathname: location.pathname
                    }
                });
                dispatching = true;
                window.dispatchEvent(event);
            }
            currentPathname = location.pathname;
        });

        const globalRouterListener = (event) => {
            if (!dispatching) {
                currentPathname = event.detail.pathname;
                history.push(event.detail.pathname);
            } else {
                dispatching = false;
            }
        };

        window.addEventListener('microFrontendGlobalRouter', globalRouterListener, true);

        return () => {
            historyUnsubscribe();
            window.removeEventListener('microFrontendGlobalRouter', globalRouterListener, true);
        };
    }, []);
};