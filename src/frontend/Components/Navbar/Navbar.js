import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {  Link } from "react-router-dom";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" >
        <Toolbar>
          <Button color="inherit" href="/">Home</Button>
          
          <Button color="inherit" href="/leaderboard">Leaderboard</Button>
          <Button color="inherit" href="/login">Log In</Button>
          <Button color="inherit" href="/signup">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>

  );
}