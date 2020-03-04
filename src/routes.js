import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {
  /* PLOP_ROUTE_IMPORT */
  Payment,
  Offer,
  Home,
} from './containers';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
          /* PLOP_INJECT_ROUTE */
        <Route exact path="/" render={() => (<Redirect to="/home" />)} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/offer/:id" component={Offer} />
      </Switch>
    </BrowserRouter>
  );
}
