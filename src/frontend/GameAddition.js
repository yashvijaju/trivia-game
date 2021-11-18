
import React, { useState } from "react";
import {Button, TextField, Typography, Grid} from '@mui/material';
import { blue } from "@mui/material/colors";

const bg ='#00FFFF';
const question_number = 1;
const first_number = 8821;
const sign = "+";
const second_number = 1078;
const filler = ' ';

function GameAddition() {
  const [answer, setAnswer] = useState("");
  
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{height: '100vh', backgroundColor: bg}}>
      <Grid item xs={8} container direction="column" sx={{ backgroundColor: 'white', padding: '1rem 3rem 2rem', borderRadius: '20px', boxShadow: "2px 2px 2px grey", border: '1px solid grey'}}>
        <Typography align="left">
            <b>Question {question_number}</b>
        </Typography>
        <Typography align="center" variant="h3">
            <b>{first_number} {sign} {second_number} = ?</b>
        </Typography>
        <Typography align="center" variant="h3">
            <b>.</b>
        </Typography>
        <Typography align="center" variant="h3">
            <b>.</b>
        </Typography>
        <Typography align="center" variant="h3">
            <b>.</b>
        </Typography>
        <Grid item xs={6} container direction="row">
          <TextField placeholder="Answer" onChange={(e)=>setAnswer(e.target.value)}></TextField>
          
          <Button id="checkButton" variant="contained">Check</Button>
        </Grid>
        <Typography align="left" variant="h5">
            <b>Timer: </b>
        </Typography>
        <Typography align="left" variant="h5">
            <b>Score: </b>
        </Typography>
      </Grid>
    </Grid>

    /*
    <div className="GameAddition">
      <div>{"Timer: "}</div>
      <div>{"Score: "}</div>
      <div>{"Question: "}</div>
      <div>
        <TextField id="submisionField" label="Submission Box" variant="standard" />
        </div>
      <div>
        <Button id="checkButton" variant="contained">Check Answer</Button>
        </div>
      <div>
        <Button id="startButton" variant="contained">Start Game</Button>
        </div>
    </div>*/
  );
}
  /*
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);
  const [score, setScore] = useState(0);

  const generateQuestion = () => {
    setNum1(Math.ceil(Math.random() * 10));
    setNum2(Math.ceil(Math.random() * 10));
  };

  const startCommands = () => {
    generateQuestion();
    setScore((score) => score - score);
}

  const submit = (e) => {
    e.preventDefault();
    const formValid = +sum >= 0;
    if (!formValid) {
      return;
    }
    if (+num1 + +num2 === +sum) {
      setScore((score) => score + 1);
    }
    generateQuestion();
  };
  
  return (
    <div className="GameAddition">
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <button type="button" onClick={startCommands}>
        start game
      </button>
      </div>
      <form onSubmit={submit}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
          <label>
            {num1} + {num2}
          </label>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <input value={sum} onChange={(e) => setSum(e.target.value)} />
          <button type="submit">submit</button>
        </div>
      </form>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <p>score: {score}</p >
      </div>  
    </div>
  );
  */



  export default GameAddition;