import React from 'react';
import classes from './Page.css';
import {useRouteMatch} from 'react-router';

const Page = () => {
    const { params: { number } } = useRouteMatch();
    return (
        <div className={ classes.Page }>
            <h3>Page { number }</h3>
        </div>
    )
};

export default Page;