import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Table } from '../../pages/Table';

import { HelloPage } from '../../pages/HelloPage';

const Routes: React.SFC = () => (
    <main>
        <BrowserRouter>
            <Switch>
                <Route exact={true} path='/' component={ Table } />
                <Route exact={true} path='/Hello' component={ HelloPage } />
            </Switch>
        </BrowserRouter>
    </main>
);

export default Routes;