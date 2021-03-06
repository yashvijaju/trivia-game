
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
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
import UserService from './Api/User.js'
import LeaderboardService from './Api/Leaderboard'

const bg ='#e1bee7';

function Game(props) {
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

  const [gameID, setGameID] = useState(0);
  const [playerNumber, setPlayerNumber] = useState(0);
  

  const [ansCorrect, setAnsCorrect] = useState("white");
  
  const [sec, setSec] = useState(120);
  const [score, setScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [play] = useSound(math_mode === "addition" ? undertale : math_mode === "subtraction" ? ghostFight 
  : math_mode === "multiplication" ? hotel : metalCrusher)
  const history = useHistory();

  useEffect(() => {
    if (player_mode === "multiplayer" && (localStorage.getItem("username") === null)) {
      let input_box = window.confirm("You need to log-in to play against an opponent.");
      if (input_box == true) {
        history.push("/login");
      } else {
        history.push("/");
      }
    }
  }, [])

  useEffect(() => {
    // code for 30-second timer per question
    // if (sec === 0) {
    //   CheckAnswer(eval(firstNumber+math_sign+secondNumber)+1);
    // } else if (sec === 30) {
    //   clearTimeout(timerId);
    //   setTimerId(setTimeout(() => setSec(sec - 1), 1000))
    // } else if (sec > 0) {
    //   setTimerId(setTimeout(() => setSec(sec - 1), 1000))
    // }
    if (gameActive && sec <= 0) GameOver();
    else if (gameActive) setTimeout(() => {
      setSec(sec - 1);
      if (player_mode === "multiplayer") {
        if (playerNumber==1) GameService.getPlayerTwoScore(gameID).then(res => setOpponentScore(res.data));
        else GameService.getPlayerOneScore(gameID).then(res => setOpponentScore(res.data));
      }
    }, 1000);
  }, [sec])

  useEffect(() => {
    if (!gameActive && player_mode==="multiplayer") {
      multiplayer();
    }
  }, [gameActive])

  useEffect(()=>play(),[play])
  useEffect(()=>GetNextQuestion(),[])

  function GetNextQuestion() {
    setAnsCorrect("white");
    // setSec(30);
    GameService.getNum().then(res => {
      setFirstNumber(res.data);
      GameService.getNum().then(res_ => {
        setSecondNumber(res_.data);
        shuffleArray(res.data, res_.data);
      })
    })
  }

  function waitForSecondPlayer(gameID_) {
    GameService.isPlayerTwoFound(gameID_).then(response => {
      if (response.data) {
        setGameActive(true);
        setTimeout(() => setSec(sec - 1), 1000)
      }
      else waitForSecondPlayer(gameID_);
    })
  }

  function multiplayer()
  {
    GameService.findLobby(localStorage.getItem("username")).then(res => {
      if(!res.data) {
        GameService.createLobby(localStorage.getItem("username")).then(res_ => {
          setPlayerNumber(1);
          waitForSecondPlayer(res_.data);
          setGameID(res_.data);
          });
      }
      else{
        setPlayerNumber(2);
        setGameID(res.data);
        setGameActive(true);
        setTimeout(() => setSec(sec - 1), 1000);
      }
    })
  }

  function shuffleArray(firstNum, secondNum) {
    let rand_1 = 0;
    let rand_2 = 0;
    let rand_3 = 0;
    while (rand_1 == 0) rand_1 = Math.floor(Math.random()*21) - 10;
    while (rand_2 == 0 || rand_1 == rand_2) rand_2 = Math.floor(Math.random()*21) - 10;
    while (rand_3 == 0) rand_3 = Math.floor(Math.random()*21) - 10;

    let curr_options = [eval(firstNum+math_sign+secondNum), 
      eval((firstNum+rand_1)+math_sign+secondNum),
      eval(firstNum+math_sign+(secondNum+rand_2)),
      eval((firstNum-rand_3)+math_sign+secondNum)
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
      if (player_mode === "multiplayer") {
        if (playerNumber === 1) GameService.incrementPlayerOneScore(gameID);
        else GameService.incrementPlayerTwoScore(gameID);
      }
    } else {
      setAnsCorrect("red");
      setScore((score) => score - 1);
      if (player_mode === "multiplayer") {
        if (playerNumber === 1) GameService.decrementPlayerOneScore(gameID);
        else GameService.decrementPlayerTwoScore(gameID);
      }
      
    }
    setTimeout(() => GetNextQuestion(), 500);
  }

  function GameOver() {
    setGameActive(false);
    if (score > opponentScore && score > 0 && player_mode==="multiplayer") {
      UserService.updateHighScore(localStorage.getItem("username"), math_mode, score);
      LeaderboardService.updateAdditionHighScore(localStorage.getItem("username"), score);
    }
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{height: '100vh', position: 'fixed', backgroundColor: bg}}>
      {
        gameActive && sec>0 ?
        <Grid item xs={8} container direction="column" sx={{ backgroundColor: ansCorrect, padding: '1rem 3rem 2rem', borderRadius: '20px', boxShadow: "2px 2px 2px grey", border: '1px solid grey'}}>
          <Grid item xs={12} container direction="row" justifyContent="space-between">
            <Typography>
              <b><AccessTimeIcon sx={{ fontSize: 15 }}/> Timer: {sec}</b>
            </Typography>
            <Typography>
              <b><CheckIcon sx={{ fontSize: 15 }}/> Score: {score}</b>
              {player_mode==="multiplayer" && <b><CheckIcon sx={{ fontSize: 15 }}/><br/> Opponent Score: {opponentScore}</b>}
            </Typography>
          </Grid>
          <Typography align="center" variant="h3">
            <br/>
            <b>{firstNumber} {math_sign} {secondNumber} = ?</b>
          </Typography>
          <br/><br/><br/>
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
        : sec <=0 ?
        <Grid item xs={8} container direction="column" sx={{ backgroundColor: ansCorrect, padding: '1rem 3rem 2rem', borderRadius: '20px', boxShadow: "2px 2px 2px grey", border: '1px solid grey'}}>
          <Typography align="center" variant="h5">
            <br/>
            <b>Game Over! {player_mode==="multiplayer" && (score > opponentScore ? "You won" : score < opponentScore ? "You lost" : "Tie") }</b>
            <br/>
            <b>Your Score: {score}</b>
            {player_mode==="multiplayer" && <b><br/> Opponent Score: {opponentScore}</b>}
          </Typography>
          <br/><br/><br/>
          <Grid item xs={6} container direction="row" spacing={1}>
            <Grid item xs={6}>
              <Button style={{
                width: '100%',
                borderRadius: 7,
                backgroundColor: colors[0], 
                padding: "9px 18px",
                fontSize: "18px",
                color: 'black'
                }} 
                variant="contained"
                href="/"
              ><b>Go Home</b></Button>
            </Grid>
            <Grid item xs={6}>
              <Button style={{
                width: '100%',
                borderRadius: 7,
                backgroundColor: colors[1], 
                padding: "9px 18px",
                fontSize: "18px",
                color: 'black'
                }} 
                variant="contained"
                onClick={()=>history.push("/leaderboard")}
              ><b>Check Leaderboard</b></Button>
            </Grid>
          </Grid>
        </Grid>
        : player_mode==="multiplayer" ?
        <Grid item xs={8} container direction="column" sx={{ backgroundColor: ansCorrect, padding: '1rem 3rem 2rem', borderRadius: '20px', boxShadow: "2px 2px 2px grey", border: '1px solid grey'}}>
          <Typography align="center" variant="h5">
            <br/>
            <b>Waiting for opponent...</b>
          </Typography>
          <br/>
          <Typography align="center">
            Answer the questions before your opponent, and before the time runs out!
            <br/>
            {!props.isLoggedIn && "Please log in to save your highscores to the leaderboard!"}
          </Typography>
          <br/><br/>
          <Grid item xs={6} container direction="row" spacing={1}>
            <Grid item xs={6}>
              <Button style={{
                width: '100%',
                borderRadius: 7,
                backgroundColor: colors[0], 
                padding: "9px 18px",
                fontSize: "18px",
                color: 'black'
                }} 
                variant="contained"
                href="/"
              ><b>Go Home</b></Button>
            </Grid>
            <Grid item xs={6}>
              <Button style={{
                width: '100%',
                borderRadius: 7,
                backgroundColor: colors[1], 
                padding: "9px 18px",
                fontSize: "18px",
                color: 'black'
                }} 
                variant="contained"
                href={`/game/${math_mode}/singleplayer`}
              ><b>Practice Solo</b></Button>
            </Grid>
          </Grid>
        </Grid>
        :
        <Grid item xs={8} container direction="column" sx={{ backgroundColor: ansCorrect, padding: '1rem 3rem 2rem', borderRadius: '20px', boxShadow: "2px 2px 2px grey", border: '1px solid grey'}}>
          <Typography align="center" variant="h5">
            <br/>
            <b>Practice Mode</b>
          </Typography>
          <br/>
          <Typography align="center">
            Answer as many questions as you can before the time runs out! <br/>
            (These scores will not be added to the leaderboard!)
          </Typography>
          <br/><br/>
          <Grid item xs={6} container direction="row" spacing={1}>
            <Grid item xs={6}>
              <Button style={{
                width: '100%',
                borderRadius: 7,
                backgroundColor: colors[0], 
                padding: "9px 18px",
                fontSize: "18px",
                color: 'black'
                }} 
                variant="contained"
                href="/"
              ><b>Go Home</b></Button>
            </Grid>
            <Grid item xs={6}>
              <Button style={{
                width: '100%',
                borderRadius: 7,
                backgroundColor: colors[1], 
                padding: "9px 18px",
                fontSize: "18px",
                color: 'black'
                }} 
                variant="contained"
                onClick={()=>{setGameActive(true); setTimeout(() => setSec(sec - 1), 1000)}}
              ><b>Start</b></Button>
            </Grid>
          </Grid>
        </Grid>
      }
    </Grid>

  );
}

 
export default Game;