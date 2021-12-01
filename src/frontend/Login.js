import React, { useState } from 'react';

import { Grid, Typography, Divider, TextField, InputAdornment, Button } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { Link } from "react-router-dom";

import logo from '../resources/logo.png'
import './Login.css'

const bgGreen='#84c454';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");

  function LogIn() {
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
        <TextField fullWidth placeholder="username" onChange={(e)=>setUsername(e.target.value)} value={username} variant="standard" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}/>
        <br/>
        <TextField fullWidth placeholder="password" type={showPassword ? 'text' : 'password'} onChange={(e)=>setPassword(e.target.value)} variant="standard" value={password} InputProps={{
          startAdornment: (
            <InputAdornment position="start" onClick={()=>setShowPassword(!showPassword)} sx={{cursor: 'pointer'}}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </InputAdornment>
          ),
        }}/>
        <br/>
        {username && password && 
          <Button color="inherit" variant="contained" fullWidth sx={{backgroundColor: bgGreen}}>
            <Typography variant="subtitle1" onClick={LogIn}>Sign In</Typography>
          </Button>
        }
        <Divider/>
      </Grid>
    </Grid>
  );
}