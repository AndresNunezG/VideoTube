import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home'
import ErrorMessage from './ErrorMessage';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/browse" component={Home}/>
                <Route component={ErrorMessage} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;