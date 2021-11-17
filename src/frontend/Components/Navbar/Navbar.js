import React from 'react';
import "./Navbar.css"
import {  Link } from "react-router-dom";
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

  </div>
	

    </header>
  );
  }

  export default Navbar