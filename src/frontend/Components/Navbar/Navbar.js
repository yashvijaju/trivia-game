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
      <Link to="/Auth">Login</Link>
    </li>
    <li>
      <Link to="/Game">Games</Link>
    </li>
    <li>
      <Link to="/Lb">LeaderBoard</Link>
    </li>
		</ul>

  </div>
	

    </header>
  );
  }

  export default Navbar