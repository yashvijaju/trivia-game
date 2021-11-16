import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from "react-router-dom";


import Login from './frontend/Login'
import Signup from './frontend/Signup'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <p>home</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
