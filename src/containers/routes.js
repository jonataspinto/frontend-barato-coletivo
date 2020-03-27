import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Payment from './Payment';
import Offer from './Offer';
import Home from './Home';
import { Layout } from '../components';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/offer/:id" component={Offer} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}
