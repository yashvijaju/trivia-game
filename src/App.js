import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from "react-router-dom";


import Login from './frontend/Login'
import Signup from './frontend/Signup'
import GameAddition from './frontend/GameAddition';
import Leaderboard from './frontend/Leaderboard'

function App() {
  return (
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
          <p>home</p>
        </Route>
      </Switch>

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/gameAddition">Addition Game</Link>
            </li>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;
