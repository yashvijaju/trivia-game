import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import logo from '../../resources/logo.png'
import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HomeIcon from '@mui/icons-material/Home';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useHistory } from "react-router-dom";

export default function Navbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" >
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            href="/"
          >
           <img src={logo} style={{width: 'auto', height: '50px'}}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} href="/">
            Trivia Games
          </Typography>
          
          <IconButton
              size="large"
              aria-label="home"
              href="/"
              color="inherit"
            >
            <HomeIcon />
          </IconButton>
          {props.isLoggedIn && 
            <IconButton
              size="large"
              aria-label="leaderboard"
              href="/leaderboard"
              color="inherit"
            >
              <LeaderboardIcon />
            </IconButton>
          }

          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
              {props.isLoggedIn && <Typography sx={{marginLeft: '5px'}}>Hi, {props.username}</Typography>}
              <ArrowDropDownIcon/>
            </IconButton>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {props.isLoggedIn ?
                <>
                  
                  <MenuItem onClick={()=>{
                    props.setIsLoggedIn(false);
                    localStorage.clear();
                    handleClose()
                  }}>Sign Out</MenuItem>
                </>
              :
                <>
                  <MenuItem><Button href="/login">Log In</Button></MenuItem>
                  <MenuItem><Button href="/signup">Sign Up</Button></MenuItem>
                </>
              }
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>

  );
}