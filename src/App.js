import React, {useEffect} from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";
import './App.css';

function App() {
  const [{ user }, dispatch] = useStateValue();

  //useEffect <<<<< POWERFULL
  //Piece of code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in...
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out...
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    }); 

    return () => {
      // Any cleanup operations go in here...
      unsubscribe();
    };
  }, []);

  console.log("USER IS >>>", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
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
