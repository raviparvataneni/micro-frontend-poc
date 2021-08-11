import React, {useEffect, useState} from 'react';
import classes from './ParentApp.css';
import ReactChildWrapper from "./wrapper/ReactChildWrapper";
import {setName, storeSubscribe} from '../store';
import TopSection from './sections/TopSection';
import BottomSection from './sections/BottomSection';
import('svelteChild/SvelteChildWC');
import('vueChild/VueChildWC');

const ParentApp = () => {
    const [state, setState] = useState({
        name: '',
        showReactChild: false
    });

    useEffect(() => {
        const unsubscribe = storeSubscribe((state) => {
            setState((prevState) => ({
                ...prevState,
                name: state.name
            }));
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const toggleReactChild = () => setState((prevState) => ({
        ...prevState,
        showReactChild: !prevState.showReactChild
    }));

    return (
        <div className={ classes.ParentApp }>
            <TopSection
                name={ state.name }
                setName={ setName }
                toggleReactChild={ toggleReactChild }
            />
            <BottomSection
                showReactChild={ state.showReactChild }
            />
        </div>
    );
}

export default ParentApp;