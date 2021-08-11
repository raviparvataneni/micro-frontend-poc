import React from 'react';
import classes from './TopSection.css';

const TopSection = (props) => {
    return (
        <div className={ classes.TopSection }>
            <h1>React Parent</h1>
            <div className={ classes.content }>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    value={ props.name }
                    onChange={ (event) => props.setName(event.target.value) }
                />
                <button onClick={ props.toggleReactChild }>Toggle React Child</button>
            </div>
        </div>
    );
};

export default TopSection;