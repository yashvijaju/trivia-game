import { useState } from 'react';

import { Grid, Typography, Divider, TextField, InputAdornment, IconButton, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import logo from '../resources/logo.png'
import './Login.css'

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  function LogIn() {
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={4} container direction="column" alignItems="center">
        <img src={logo} className="logo"/>
        <Typography variant="h4" justify="center">
          Hello Again!
        </Typography>
        <Divider/>
        <TextField fullWidth label="Username" onChange={(e)=>setUsername(e.target.value)} value={username}/>
        <TextField fullWidth label="Password" type={showPassword ? 'text' : 'password'} onChange={(e)=>setPassword(e.target.value)} value={password} endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={()=>setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }/>
        <Button color="inherit" disabled={!username || !password}>
          <Typography variant="subtitle1" onClick={LogIn}>Sign In</Typography>
        </Button>
        <Divider/>
      </Grid>
    </Grid>
  );
}