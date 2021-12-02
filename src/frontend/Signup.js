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

export default function Signup(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");

  const [passwordMatch, setPasswordMatch] = useState(false);
  const [duplicateUserName, setDuplicateUsername] = useState(false);

  const history = useHistory();
  

  function CreateAccount() {
      User.getUserById(username).then(res => {
        if (res.data) {
          setDuplicateUsername(true);
          setUsername("");
        } else {
          User.createUser(username, password).then(res_ => {
            props.setIsLoggedInGLobal(true);
            props.setUsernameGlobal(username);
            history.push("/");
          });
        }
      })
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{height: '100vh', position: 'fixed', backgroundColor: bgGreen}}>
      <Grid item xs={4} container direction="column" alignItems="center" sx={{backgroundColor: 'white', padding: '1rem 3rem 2rem', borderRadius: '20px', boxShadow: "2px 2px 2px grey", border: '1px solid grey'}}>
        <img src={logo} className="logo"/>
        <Typography variant="h5" align="center">
          <b>Welcome to TRI-via!</b>
        </Typography>
        <Typography variant="subtitle2" align="center">
          Please create your account below <br/>
          Or <Link to="login">log in</Link> if you already have an account
        </Typography>
        <Divider/>
        <br/><br/>
        <TextField fullWidth placeholder="username" onChange={(e)=>{setUsername(e.target.value); setDuplicateUsername(false)}} value={username} variant="standard" InputProps={{
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
        <TextField fullWidth placeholder="confirm password" type={showPassword ? 'text' : 'password'} onChange={(e)=>{
            setConfirmPassword(e.target.value); 
            if (password !== e.target.value) setPasswordMatch(false);
            else setPasswordMatch(true);
        }} variant="standard" value={confirmPassword} InputProps={{
          startAdornment: (
            <InputAdornment position="start" onClick={()=>setShowPassword(!showPassword)} sx={{cursor: 'pointer'}}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </InputAdornment>
          ),
        }}/>
        <br/>
        {confirmPassword && !passwordMatch && <Typography color="error" align="left">Error: passwords do not match.</Typography>}
        {duplicateUserName && <Typography color="error" align="left">Error: the username {username} is already taken. Please try again with a different username.</Typography>}
        <br/>
        {username && password && password==confirmPassword && 
          <Button color="inherit" variant="contained" fullWidth sx={{backgroundColor: bgGreen}}>
            <Typography variant="subtitle1" onClick={CreateAccount}>Create Account</Typography>
          </Button>
        }
        <Divider/>
      </Grid>
    </Grid>
  );
}