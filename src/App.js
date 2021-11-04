import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Link,
  Route,
} from "react-router-dom";

import Auth from './frontend/Auth'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        {/* 
        
          React Router Dom Guide: https://v5.reactrouter.com/web/guides/quick-start

        */}
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/">
            <p>Trivia Game</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
