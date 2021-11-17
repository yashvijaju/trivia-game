import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Link,
  Route,
} from "react-router-dom";

 import Auth from './frontend/Auth'
import Leaderboard from './frontend/Leaderboard'

function App() {
  return (
    <Router>
      <div>
        
        {/* 
        
          React Router Dom Guide: https://v5.reactrouter.com/web/guides/quick-start

        */}
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/">
            <Leaderboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
