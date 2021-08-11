import React from 'react';
import ReactDOM from 'react-dom';

const createWebComp = (ReactComp) => class extends HTMLElement {
    connected = false

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
        ReactDOM.unmountComponentAtNode(this);
    }

    render() {
        ReactDOM.render(<ReactComp />, this);
    }
};

export const wrapAndRegisterWebComp = (name, ReactComp) => {
    const WebComp = createWebComp(ReactComp);
    customElements.define(name, WebComp);
};