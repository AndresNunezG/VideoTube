import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Browser from '../pages/Browser'
import ErrorMessage from './ErrorMessage';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/browse" component={Browser}/>
                <Route component={ErrorMessage} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;