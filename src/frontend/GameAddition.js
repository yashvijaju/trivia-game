
import React, { useEffect, useState } from "react";
import {Button, TextField, Typography, Grid} from '@mui/material';
import { blue } from "@mui/material/colors";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckIcon from '@mui/icons-material/Check';
import useSound from 'use-sound';
import undertale from '../resources/undertale.m4a';
import { StarTwoTone } from "@mui/icons-material";
import Game from './Api/Game'

const bg ='#e1bee7';
const question_number = 1;
const sign = "+"; 
const filler = ' ';

function GameAddition() {
  const [firstNumber, setFirstNumber] = useState(Game.getNum);
  const [secondNumber, setSecondNumber] = useState(Game.getNum);

  const [answer1, setAnswer1] = useState(1);
  const [answer2, setAnswer2] = useState(2);
  const [answer3, setAnswer3] = useState(3);
  const [answer4, setAnswer4] = useState(4);

  const [falseAnswer1, setFalseAnswer1] = useState(0);
  const [falseAnswer2, setFalseAnswer2] = useState(0);
  const [falseAnswer3, setFalseAnswer3] = useState(0);
  const [falseAnswer4, setFalseAnswer4] = useState(0);

  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [correctAnswerChoice, setCorrectAnswerChoice] = useState(0);
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
    setCorrectAnswerChoice(Math.ceil(Math.random() * 4));
    setFirstNumber(Game.getNum);
    setSecondNumber(Game.getNum);
    setCorrectAnswer(firstNumber + secondNumber);
    do
    {
      setFalseAnswer1(Math.ceil(Math.random() * 21) + correctAnswer-10)
    } while(falseAnswer1 === correctAnswer)

    do
    {
      setFalseAnswer2(Math.ceil(Math.random() * 21) + correctAnswer-10)
    } while(falseAnswer2 === correctAnswer || falseAnswer2 === falseAnswer1)

    do
    {
      setFalseAnswer3(Math.ceil(Math.random() * 21) + correctAnswer-10)
    } while(falseAnswer3 === correctAnswer || falseAnswer3 === falseAnswer2 || falseAnswer3 === falseAnswer1)

    do
    {
      setFalseAnswer4(Math.ceil(Math.random() * 21) + correctAnswer-10)
    } while(falseAnswer4 === correctAnswer || falseAnswer4 === falseAnswer3 || falseAnswer4 === falseAnswer2 || falseAnswer4 === falseAnswer1)

    if(correctAnswerChoice === 1)
    {
      setAnswer1(correctAnswer);
    }
    else
    {
      setAnswer1(falseAnswer1);
    }

    if(correctAnswerChoice === 2)
    {
      setAnswer2(correctAnswer);
    }
    else
    {
      setAnswer2(falseAnswer2);
    }

    if(correctAnswerChoice === 3)
    {
      setAnswer3(correctAnswer);
    }
    else
    {
      setAnswer3(falseAnswer3);
    }

    if(correctAnswerChoice === 4)
    {
      setAnswer4(correctAnswer);
    }
    else
    {
      setAnswer4(falseAnswer4);
    }
  }

  function CheckAnswer()
  {
    if(answer === correctAnswer)
    {
      setSecondNumber((score) => score + 1);
    }
    //GetNextScreen();
  }

  function Test()
  {
    setAnswer1(Game.getNum);
    setAnswer2(Game.getNum);

  }


  /*function beginGame()
  {
    GetNextScreen();
    //setSec(120);

  }
  beginGame();*/
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
              width: '100%',
              borderRadius: 7,
              backgroundColor: "#26c6da", 
              padding: "9px 18px",
              fontSize: "18px",
              color: 'black'
              }}
              
              onClick = {()=> {
                setAnswer(answer1);
                CheckAnswer();
                //Test();
              }}
              variant="contained"><b>{answer1}</b></Button>
          </Grid>

          <Grid item xs={6}>
            <Button style={{
              //margin: '0px 5px 0px 0px',
              width: '100%',
              borderRadius: 7,
              backgroundColor: "#f48fb1", /*styling "check" button*/
              padding: "9px 18px",
              fontSize: "18px",
              color: 'black'
              }} 
              onClick = {()=> {
                setAnswer(answer2);
                CheckAnswer();
              }}
              variant="contained"><b>{answer2}</b></Button>
          </Grid>
          
          <Grid item xs={6}>
            <Button style={{
              //margin: '5px 0px 0px 0px',
              width: '100%',
              borderRadius: 7,
              backgroundColor: "#ffb74d", /*styling "check" button*/
              padding: "9px 18px",
              fontSize: "18px",
              color: 'black'
              }}
              onClick = {()=> {
                setAnswer(answer3);
                CheckAnswer();
              }}
              variant="contained"><b>{answer3}</b></Button>
          </Grid>

          <Grid item xs={6}>
            <Button style={{
              //margin: '5px 0px 0px 5px',
              width: '100%',
              borderRadius: 7,
              backgroundColor: "#81c784", /*styling "check" button*/
              padding: "9px 18px",
              fontSize: "18px",
              color: 'black'
              }} 
              onClick = {()=> {
                setAnswer(answer4);
                CheckAnswer();
              }}
              variant="contained"><b>{answer4}</b></Button>
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