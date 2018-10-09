import React from 'react';
import { BrowserRouter, Switch, Route, withRouter} from 'react-router-dom';

import App from '../App';
import Business from './Business';

const Router = () => (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={withRouter(App)}/>
        <Route path="/business/:id" component={withRouter(Business)} />
      </Switch>
    </BrowserRouter>

);

export default Router;
