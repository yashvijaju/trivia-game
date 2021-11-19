
import React, { useEffect, useState } from "react";
import {Button, TextField, Typography, Grid} from '@mui/material';
import { blue } from "@mui/material/colors";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckIcon from '@mui/icons-material/Check';
import useSound from 'use-sound';
import undertale from '../resources/undertale.m4a';

const bg ='#e1bee7';
const question_number = 1;
const sign = "+"; 
const filler = ' ';

function GameAddition() {
  const [firstNumber, setFirstNumber] = useState(8821);
  const [secondNumber, setSecondNumber] = useState(1078);

  const [answer, setAnswer] = useState("");
  const [sec, setSec] = React.useState(30);
  const [play] = useSound(undertale);
  
  useEffect(() => {
    if(sec === 0)
    {
      //setSec(0);
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
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{height: '100vh', backgroundColor: bg}}>
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
            <b>{firstNumber} {sign} {secondNumber} = ?</b>
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

        {/* <TextField 
              style = {{
              width: 300
              }} 
              inputProps={{min: 0, style: { textAlign: 'center' }}}
              placeholder="Answer" 
              onChange={(e)=>setAnswer(e.target.value)}></TextField> */}
          <Grid item xs={6}>
            <Button style={{
              //margin: '0px 5px 0px 0px',
              width: '28em',
              borderRadius: 7,
              backgroundColor: "#26c6da", 
              padding: "9px 18px",
              fontSize: "18px",
              color: 'black'
              }} 
              variant="contained"><b>Option 1</b></Button>
          </Grid>

          <Grid item xs={6}>
            <Button style={{
              //margin: '0px 5px 0px 0px',
              width: '28em',
              borderRadius: 7,
              backgroundColor: "#f48fb1", /*styling "check" button*/
              padding: "9px 18px",
              fontSize: "18px",
              color: 'black'
              }} 
              variant="contained"><b>Option 2</b></Button>
          </Grid>
          
          <Grid item xs={6}>
            <Button style={{
              //margin: '5px 0px 0px 0px',
              width: '28em',
              borderRadius: 7,
              backgroundColor: "#ffb74d", /*styling "check" button*/
              padding: "9px 18px",
              fontSize: "18px",
              color: 'black'
              }} 
              variant="contained"><b>Option 3</b></Button>
          </Grid>

          <Grid item xs={6}>
            <Button style={{
              //margin: '5px 0px 0px 5px',
              width: '28em',
              borderRadius: 7,
              backgroundColor: "#81c784", /*styling "check" button*/
              padding: "9px 18px",
              fontSize: "18px",
              color: 'black'
              }} 
              variant="contained"><b>Option 4</b></Button>
            </Grid>
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