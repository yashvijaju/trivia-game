import React, { useState, useEffect }  from 'react';
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
  }, [isLoggedIn])

  return (
  <>
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username}/>
    <Router>
      <Switch>
        {/* auth */}
        <Route path="/login">
          {isLoggedIn ? <Home/> : <Login setIsLoggedInGLobal={setIsLoggedIn} setUsernameGlobal={setUsername}/>}
        </Route>
        <Route path="/signup">
          {isLoggedIn ? <Home/> : <Signup setIsLoggedInGLobal={setIsLoggedIn} setUsernameGlobal={setUsername}/>}
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
