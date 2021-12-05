
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Button, TextField, Typography, Grid} from '@mui/material';
import { blue } from "@mui/material/colors";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckIcon from '@mui/icons-material/Check';
import useSound from 'use-sound';
import undertale from '../resources/undertale.m4a';

const bg ='#e1bee7';
const question_number = 1;
const filler = ' ';

function Game() {
  const { math_mode, player_mode } = useParams();
  const math_sign = math_mode==="addition" ? "+"
    : math_mode==="subtraction" ? "-"
    : math_mode==="multiplication" ? "*"
    : "/"
    
  const [firstNumber, setFirstNumber] = useState(8821);
  const [secondNumber, setSecondNumber] = useState(1078);
  const [options, setOptions] = useState([
    eval(firstNumber+math_sign+secondNumber), 
    eval((firstNumber+5)+math_sign+secondNumber),
    eval(firstNumber+math_sign+(secondNumber+10)),
    eval((firstNumber-5)+math_sign+secondNumber)
  ]);
  const colors = [
    "#26c6da",
    "#f48fb1",
    "#ffb74d",
    "#81c784"
  ];

  const [sec, setSec] = React.useState(30);
  const [score, setScore] = React.useState(0);
  const [play] = useSound(undertale);
  
  useEffect(() => {
    if(sec === 0)
    {
      GetNextScreen()
    }
    else if(sec > 0)
    {
      setTimeout(() => setSec(sec - 1), 1000);
    }
  })

  useEffect(()=>play(),[play])

/*this function will be used to change the questions. Eventually we will change the parameters to call the backend functions*/
  function GetNextScreen()
  {
    setSec(30);
    setFirstNumber(1234);
    setSecondNumber(5678);
    shuffleArray();
  }

  function shuffleArray() {
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = options[i];
      options[i] = options[j];
      options[j] = temp;
    }
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{height: '100vh', position: 'fixed', backgroundColor: bg}}>
      <Grid item xs={8} container direction="column" sx={{ backgroundColor: 'white', padding: '1rem 3rem 2rem', borderRadius: '20px', boxShadow: "2px 2px 2px grey", border: '1px solid grey'}}>
        <Typography align="left">
          <br/>
            <b>Question {question_number}</b>
        </Typography>
        <Typography align="right" variant="h5">
            <b>Timer<AccessTimeIcon sx={{ fontSize: 20 }}/>: {sec}</b>

        </Typography>
        <Typography align="right" variant="h5">
            <b>Score<CheckIcon sx={{ fontSize: 20 }}/>: {score}</b>
        </Typography>
        <Typography align="center" variant="h3">
        <br/>
            <b>{firstNumber} {math_sign} {secondNumber} = ?</b>
        </Typography>
        <Typography align="center" variant="h3">
        </Typography>
        <Typography align="center" variant="h3">
        <br/>
        </Typography>
        <Typography align="center" variant="h3">
        <br/>
        </Typography>
        <Grid item xs={6} container direction="row" spacing={1}>

        {colors.map((curr_color, index)=>
          <Grid item xs={6}>
            <Button style={{
              width: '100%',
              borderRadius: 7,
              backgroundColor: curr_color, 
              padding: "9px 18px",
              fontSize: "18px",
              color: 'black'
              }} 
              variant="contained"><b>{options[index]}</b></Button>
          </Grid>
        )}

        </Grid>
      </Grid>
    </Grid>

  );
}

 
export default Game;