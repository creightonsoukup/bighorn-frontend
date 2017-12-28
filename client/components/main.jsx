import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Townhomes from './townhomes';
import Apartments from './apartments';
import Neighborhood from './neighborhood';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/townhomes" component={Townhomes}/>
      <Route path="/apartments" component={Apartments}/>
      <Route path="/neighborhood" component={Neighborhood}/>
    </Switch>
  </main>
)

export default Main