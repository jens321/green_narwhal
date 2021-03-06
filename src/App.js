import React, { Component } from 'react'
import Home from './components/Home/home'
import Dashboard from './components/Dashboard/dashboard'
import JoinParty from './components/JoinParty/joinParty'
import { Route, Switch } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/join_party" component={JoinParty} />
      </Switch>
    );
  }
}

export default App
