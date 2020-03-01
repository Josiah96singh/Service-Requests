import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ServiceRequests from './pages/ServiceRequests'

function App() {
  return (
    <>
      <Router>
      <Switch>
        <Route exact path='/' render={() => <ServiceRequests />}/>
        <Route exact path='/servicerequests' render={() => <ServiceRequests/>} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
