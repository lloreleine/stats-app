import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Config from './components/Config';
import Success from './components/Success';
import Failed from './components/Failed';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="global-container">
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route path='/dashboard' render={(routerProps) => <Dashboard {...routerProps} />} />
          <Route path='/config' render={() => <Config />} />

          <Route path="/success" render={() => <Success />} />
          <Route path="/failed" render={() => <Failed />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
