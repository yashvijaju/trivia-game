import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from "react-router-dom";


import Login from './frontend/Login'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <p>home</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
