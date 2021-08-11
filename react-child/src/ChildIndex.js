import React from 'react';
import ChildApp from "./components/ChildApp";
import {wrapAndRegisterWebComp} from "./createWebComp";
import { createBrowserHistory } from 'history';
import {Router} from 'react-router';

const history = createBrowserHistory();

const Wrapper = () => (
    <Router history={ history }>
        <ChildApp />
    </Router>
);

wrapAndRegisterWebComp('react-child', Wrapper);