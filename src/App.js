import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect} from "react-router-dom";
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={() => <Home/>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
