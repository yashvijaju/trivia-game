import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from "react-router-dom";

import { AppBar, Toolbar, Typography, Button } from '@mui/material'

import logo from './resources/logo.png'

import Login from './frontend/Login'

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            <img src={logo} style={{width: '40px', height: 'auto'}}/>
            Trivia-Game
          </Typography>
          <Link to="/">
            <Button color="inherit">
              <Typography variant="subtitle1">Home</Typography>
            </Button>
          </Link>
          <Link to="/leaderboard">
            <Button color="inherit">
              <Typography variant="subtitle1">Leaderboard</Typography>
            </Button>
          </Link>
          <Link to="/login">
            <Button color="inherit">
              <Typography variant="subtitle1">Log In</Typography>
            </Button>
          </Link>
          <Link to="/signup">
            <Button color="inherit">
              <Typography variant="subtitle1">Sign Up</Typography>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

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
