import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

 import Landing from '../Landing';
 import Login from '../Login';
 import Products from '../Products';

function Routes() {
  return (
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/sign_in' component={Login}/>
        <Route path='/products' component={Products}/>
      </Switch>
  );
}

export default Routes;
