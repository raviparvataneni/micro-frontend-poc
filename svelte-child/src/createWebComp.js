
const createWebComp = (SvelteComp) => class extends HTMLElement {
    connected = false
    app = undefined

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
        if (this.app) {
            this.app.$destroy();
        }
    }

    render() {
        this.app = new SvelteComp({
            target: this
        });
    }
}

export const wrapAndRegisterWebComp = (name, SvelteComp) => {
    const WebComp = createWebComp(SvelteComp);
    customElements.define(name, WebComp);
};