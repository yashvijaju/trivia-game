
import React, { useEffect, useState } from "react";
import {Button, TextField, Typography} from '@mui/material';
import { render } from "@testing-library/react";

function GameAddition() {
  const [seconds, setSeconds] = React.useState(30);
  useEffect(() => {
    if(seconds < 0)
    {
      setSeconds(0);
    }
    else if (seconds > 0)
    {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
  })
  return (
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
    </div>
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