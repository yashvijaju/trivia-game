import React, { Component }  from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from "./frontend/Components/Navbar/Navbar"


import Login from './frontend/Login'
import Signup from './frontend/Signup'
import GameAddition from './frontend/GameAddition'
import Leaderboard from './frontend/Leaderboard'
import Home from './frontend/Home'

function App() {
  return (
  <>
    <Navbar/>
    <Router>
      <Switch>
        {/* auth */}
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
        {/* games */}
        <Route path="/gameAddition">
          <GameAddition/>
        </Route>
        {/* leaderboard */}
        <Route path="/leaderboard">
          <Leaderboard/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  </>
  );
}

export default App;
