import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {  Link } from "react-router-dom";
<<<<<<< HEAD
const Navbar= () =>{
  return (
		<header class="header">
		<div class="left">
			<a>Tri-Via Games</a>
		</div>
  <div class="mid">
		<ul class="navbar">
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
      <Link to="/gameAddition">Games</Link>
    </li>
    <li>
      <Link to="/leaderboard">LeaderBoard</Link>
    </li>
		</ul>
=======
>>>>>>> 655c1df6f876b42ab051e884921f31d82cc6e42f



import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" >
        <Toolbar>
          <Button color="inherit" href="/">Home</Button>
          <Button color = "inherit" href="/Game">Game</Button>
          <Button color="inherit" href="/Lb">Leaderboard</Button>
          <Button color="inherit" href="/Auth">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

  );
}