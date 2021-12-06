import React, { useState } from 'react';
import User from './Api/User'

import { Grid, Typography, Divider, TextField, InputAdornment, Button } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { Link, useHistory } from "react-router-dom";

import logo from '../resources/logo.png'
import './Login.css'

const bgGreen='#84c454';

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");

  const [usernameInvalid, setUsernameInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);  

  const history = useHistory();

  function LogIn() {
    User.getUser(username).then(res => {
      if (res.data) {
        User.logUserIn(username, password).then(res_ => {
          if (!res_.data) {
            setPasswordInvalid(true);
          } else {
            props.setIsLoggedInGLobal(true);
            props.setUsernameGlobal(username);
            history.push("/");
          }
        })
      } else {
        setUsernameInvalid(true);
      }
    })
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{height: '100vh', position: 'fixed', backgroundColor: bgGreen}}>
      <Grid item xs={4} container direction="column" alignItems="center" sx={{backgroundColor: 'white', padding: '1rem 3rem 2rem', borderRadius: '20px', boxShadow: "2px 2px 2px grey", border: '1px solid grey'}}>
        <img src={logo} className="logo"/>
        <Typography variant="h5" align="center">
          <b>Welcome Back to TRI-via!</b>
        </Typography>
        <Typography variant="subtitle2" align="center">
          Please enter your username and password below <br/>
          Or <Link to="signup">create an account</Link> if not registered yet
        </Typography>
        <Divider/>
        <br/><br/>
        <TextField fullWidth placeholder="username" onChange={(e)=>{setUsername(e.target.value); setUsernameInvalid(false)}} value={username} variant="standard" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}/>
        <br/>
        <TextField fullWidth placeholder="password" type={showPassword ? 'text' : 'password'} onChange={(e)=>{setPassword(e.target.value); setPasswordInvalid(false)}} variant="standard" value={password} InputProps={{
          startAdornment: (
            <InputAdornment position="start" onClick={()=>setShowPassword(!showPassword)} sx={{cursor: 'pointer'}}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </InputAdornment>
          ),
        }}/>
        <br/>
        {passwordInvalid && <Typography color="error" align="left">Error: Wrong password. Please try again.</Typography>}
        {usernameInvalid && <Typography color="error" align="left">Error: the username {username} is invalid. Please try again or <Link to="signup">create an account</Link> now.</Typography>}
        <br/>
        {!passwordInvalid && !usernameInvalid && username && password && 
          <Button color="inherit" variant="contained" fullWidth sx={{backgroundColor: bgGreen}}>
            <Typography variant="subtitle1" onClick={LogIn}>Sign In</Typography>
          </Button>
        }
        <Divider/>
      </Grid>
    </Grid>
  );
}