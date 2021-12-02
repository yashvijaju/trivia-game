import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Navbar(props) {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" >
        <Toolbar>
          <Button color="inherit" href="/">Home</Button>
          
          <Button color="inherit" href="/leaderboard">Leaderboard</Button>
          {props.isLoggedIn ?
            <>
              <Typography>Hi, {props.username}</Typography>
              <Button color="inherit" onClick={()=>props.setIsLoggedIn(false)}>Sign Out</Button>
            </>
            :
            <>
              <Button color="inherit" href="/login">Log In</Button>
              <Button color="inherit" href="/signup">Sign Up</Button>
            </>
          }
        </Toolbar>
      </AppBar>
    </Box>

  );
}