import React from 'react';
import classes from './Pager.css';
import {Route, Switch, useHistory, useLocation, useRouteMatch} from 'react-router';
import Page from './Page';
import {Link, NavLink} from 'react-router-dom';

const Pager = () => {
    const location = useLocation();
    const history = useHistory();

    const btnClasses1 = location.pathname === '/page/1' ? classes.active : '';
    const btnClasses2 = location.pathname === '/page/2' ? classes.active : '';
    const btnClasses3 = location.pathname === '/page/3' ? classes.active : '';

    return (
        <div className={ classes.Pager }>
            <div className={ classes.buttons }>
                <Link to="/page/1">
                    <button
                        className={ btnClasses1 }
                    >
                        Page 1
                    </button>
                </Link>
                <Link to="/page/2">
                    <button
                        className={ btnClasses2 }
                    >
                        Page 2
                    </button>
                </Link>
                <Link to="/page/3">
                    <button
                        className={ btnClasses3 }
                    >
                        Page 3
                    </button>
                </Link>
            </div>
            <div>
                <Switch>
                    <Route path="/page/:number" component={ Page } />
                </Switch>
            </div>
        </div>
    );
};

export default Pager;