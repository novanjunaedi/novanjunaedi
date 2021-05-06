import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../pages/Homepage/Homepage';
import Portfoliopage from '../pages/Portfoliopage/Portfoliopage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/portfolios" component={Portfoliopage} />
  </Switch>
);

export default Routes;
