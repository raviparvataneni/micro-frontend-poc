import React from 'react';
import classes from './BottomSection.css';
import ReactChildWrapper from '../wrapper/ReactChildWrapper';

const BottomSection = (props) => {
    return (
        <div className={ classes.BottomSection }>
            {
                props.showReactChild &&
                <ReactChildWrapper />
            }
            <svelte-child />
            <vue-child />
        </div>
    );
};

export default BottomSection;