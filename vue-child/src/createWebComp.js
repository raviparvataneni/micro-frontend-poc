const createWebComp = (vueApp) => class extends HTMLElement {
    connected = false;

    connectedCallback() {
        this.connected = true
        this.render();
    }

    attributeChangedCallback() {
        if (this.connected) {
            this.render();
        }
    }

    disconnectedCallback() {
        this.connected = false
        vueApp.unmount();
    }

    render() {
        vueApp.mount(this);
    }
};

export const wrapAndRegisterWebComp = (name, VueComp) => {
    const WebComp = createWebComp(VueComp);
    customElements.define(name, WebComp);
};