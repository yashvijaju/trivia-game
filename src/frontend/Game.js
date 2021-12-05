
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Button, TextField, Typography, Grid} from '@mui/material';
import { blue } from "@mui/material/colors";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckIcon from '@mui/icons-material/Check';
import useSound from 'use-sound';
import undertale from '../resources/undertale.m4a';
import metalCrusher from '../resources/metalCrusher.m4a';
import ghostFight from '../resources/ghostFight.m4a';
import hotel from '../resources/hotel.m4a';
import GameService from './Api/Game.js'

const bg ='#e1bee7';
const question_number = 1;
const filler = ' ';

function Game() {
  const { math_mode, player_mode } = useParams();
  const math_sign = math_mode==="addition" ? "+"
    : math_mode==="subtraction" ? "-"
    : math_mode==="multiplication" ? "*"
    : "/"
    
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
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
  const [ansCorrect, setAnsCorrect] = useState("white");

  const [sec, setSec] = React.useState(30);
  const [score, setScore] = React.useState(0);
  const [play] = useSound(math_mode === "addition" ? undertale : math_mode === "subtraction" ? ghostFight 
  : math_mode === "multiplication" ? hotel : metalCrusher)
  
  const [timerId, setTimerId] = useState();
  
  useEffect(() => {
    if (sec === 0) {
      CheckAnswer(eval(firstNumber+math_sign+secondNumber)+1);
    } else if (sec === 30) {
      clearTimeout(timerId);
      setTimerId(setTimeout(() => setSec(sec - 1), 1000))
    } else if (sec > 0) {
      setTimerId(setTimeout(() => setSec(sec - 1), 1000))
    }
  }, [sec])

  useEffect(()=>play(),[play])
  useEffect(()=>GetNextQuestion(),[])

  function GetNextQuestion() {
    setAnsCorrect("white");
    setSec(30);
    GameService.getNum().then(res => {
      setFirstNumber(res.data);
      GameService.getNum().then(res_ => {
        setSecondNumber(res_.data);
        shuffleArray(res.data, res_.data);
      })
    })
  }

  function shuffleArray(firstNum, secondNum) {
    
    let curr_options = [eval(firstNum+math_sign+secondNum), 
      eval((firstNum+5)+math_sign+secondNum),
      eval(firstNum+math_sign+(secondNum+10)),
      eval((firstNum-5)+math_sign+secondNum)
    ];
    for (let i = curr_options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = curr_options[i];
      curr_options[i] = curr_options[j];
      curr_options[j] = temp;
    }
    setOptions(curr_options);
  }

  function CheckAnswer(ans) {
    if (ans === eval(firstNumber+math_sign+secondNumber)) {
      setAnsCorrect("green");
      setScore((score) => score + 1);
    } else {
      setAnsCorrect("red");
    }
    setTimeout(() => GetNextQuestion(), 500);
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{height: '100vh', position: 'fixed', backgroundColor: bg}}>
      <Grid item xs={8} container direction="column" sx={{ backgroundColor: ansCorrect, padding: '1rem 3rem 2rem', borderRadius: '20px', boxShadow: "2px 2px 2px grey", border: '1px solid grey'}}>
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
              variant="contained"
              onClick={()=>CheckAnswer(options[index])}
            ><b>{options[index]}</b></Button>
          </Grid>
        )}

        </Grid>
      </Grid>
    </Grid>

  );
}

 
export default Game;