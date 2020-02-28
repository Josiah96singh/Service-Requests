import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import ServiceCenter from './pages/serviceCenter'
import ServiceRequests from './pages/serviceRequests'
import About from './pages/about'

function App() {
  return (
    <>
      <Router>
      <Switch>
        <Route exact path='/' render={() => <ServiceCenter />}/>
        <Route exact path='/servicecenter' render={() => <ServiceCenter />} />
        <Route exact path='/servicerequests' render={() => <ServiceRequests/>} />
        <Route exact path='/about' render={() => <About/>} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
