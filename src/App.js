import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect} from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Config from './components/Config';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="global-container">
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route path='/dashboard' render={() => <Dashboard />} />
          <Route path='/config' render={() => <Config />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
