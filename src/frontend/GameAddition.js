
import React, { useEffect, useState } from "react";
import {Button, TextField, Typography, Grid} from '@mui/material';
import { blue } from "@mui/material/colors";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckIcon from '@mui/icons-material/Check';

const bg ='#e1bee7';
const question_number = 1;
const first_number = 8821;
const sign = "+";
const second_number = 1078;
const filler = ' ';

function GameAddition() {
  const [answer, setAnswer] = useState("");
  const [sec, setSec] = React.useState(30);
  
  useEffect(() => {
    if(sec < 0)
    {
      setSec(0);
    }
    else if(sec > 0)
    {
      setTimeout(() => setSec(sec - 1), 1000);
    }
  })

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
            <b>Score<CheckIcon sx={{ fontSize: 20 }}/>: </b>
        </Typography>
        <Typography align="center" variant="h3">
        <br/>
            <b>{first_number} {sign} {second_number} = ?</b>
        </Typography>
        <Typography align="center" variant="h3">
        </Typography>
        <Typography align="center" variant="h3">
        <br/>
        </Typography>
        <Typography align="center" variant="h3">
        <br/>
        </Typography>
        <Grid item xs={6} container direction="row">
        <TextField 
              style = {{
              width: 300
              }} 
              inputProps={{min: 0, style: { textAlign: 'center' }}} /*centers the "Answer" in textfield*/
              placeholder="Answer" 
              onChange={(e)=>setAnswer(e.target.value)}></TextField>
          
          
          <Button style={{
            borderRadius: 7,
            backgroundColor: "#26c6da",
            padding: "9px 18px",
            fontSize: "18px"
            }} 
            variant="contained">Check</Button>
        </Grid>
      </Grid>
    </Grid>

    /*
    <div className="GameAddition">
      <div>Timer: {seconds}</div>
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