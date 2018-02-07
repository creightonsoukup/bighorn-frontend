import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Townhomes from './townhomes';
import Apartments from './apartments';
import Neighborhood from './neighborhood';
import ThreeBedroom from './three-bedroom';
import ErrorPage from './404'

const Main = () => (
  <main>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/townhomes" component={Townhomes}/>
      <Route path="/condos" component={Apartments}/>
      <Route path="/neighborhood" component={Neighborhood}/>
      <Route path='*' component={ErrorPage}/>
    </div>
  </main>
)

export default Main
