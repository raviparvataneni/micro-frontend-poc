import React, {useEffect, useState} from 'react';
import classes from './ChildApp.css';
import Pager from './Pager';
import useGlobalRouter from '../useGlobalRouter';

const ChildApp = () => {
    useGlobalRouter();
    const [state, setState] = useState({
        name: window.valtioStore.getState().name
    })

    useEffect(() => {
        const unsubscribe = window.valtioStore.storeSubscribe((state) => {
            setState((prevState) => ({
                ...prevState,
                name: state.name
            }));
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div className={ classes.ChildApp }>
            <h1>React Child</h1>
            <p>
                <strong>Name: </strong>
                <span>{ state.name }</span>
            </p>
            <Pager />
        </div>
    );
};

export default ChildApp;