import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>CheckOut</h1>
          </Route>

          <Route path="/login">
            <h1>Login Page</h1>
          </Route>

          {/* This is the default route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
