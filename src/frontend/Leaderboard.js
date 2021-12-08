import React, { useState, useEffect } from "react";
import MediaCard from "./Components/Trial"
import MediaCard1 from "./Components/sub"
import MediaCard2 from "./Components/multi"
import MediaCard3 from "./Components/div"
import Grid from '@mui/material/Grid';
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import LeaderboardService from './Api/Leaderboard'


function Leaderboard() {
  const [additionLeaderboard, setAdditionLeaderboard] = useState([
    {"playerUsername": "ucantbeatme", "playerScore": 15},
    {"playerUsername": "hellothere", "playerScore": 15},
    {"playerUsername": "seeyalater", "playerScore": 14},
    {"playerUsername": "okwaterbottle", "playerScore": 13},
    {"playerUsername": "lampisbright", "playerScore": 10},
    {"playerUsername": "whereismycharger", "playerScore": 6},
    {"playerUsername": "zoom", "playerScore": 5},
    {"playerUsername": "googlemeets", "playerScore": 5},
    {"playerUsername": "helloworld", "playerScore": 5},
    {"playerUsername": "sup", "playerScore": 5},

  ])

  const [subtractionLeaderboard, setSubtractionLeaderboard] = useState([
    {"playerUsername": "ucantbeatme", "playerScore": 15},
    {"playerUsername": "hellothere", "playerScore": 15},
    {"playerUsername": "seeyalater", "playerScore": 14},
    {"playerUsername": "okwaterbottle", "playerScore": 13},
    {"playerUsername": "lampisbright", "playerScore": 10},
    {"playerUsername": "whereismycharger", "playerScore": 6},
    {"playerUsername": "zoom", "playerScore": 5},
    {"playerUsername": "googlemeets", "playerScore": 5},
    {"playerUsername": "helloworld", "playerScore": 5},
    {"playerUsername": "sup", "playerScore": 5},
  ])

  const [multiplicationLeaderboard, setMultiplicationLeaderboard] = useState([
    {"playerUsername": "ucantbeatme", "playerScore": 15},
    {"playerUsername": "hellothere", "playerScore": 15},
    {"playerUsername": "seeyalater", "playerScore": 14},
    {"playerUsername": "okwaterbottle", "playerScore": 13},
    {"playerUsername": "lampisbright", "playerScore": 10},
    {"playerUsername": "whereismycharger", "playerScore": 6},
    {"playerUsername": "zoom", "playerScore": 5},
    {"playerUsername": "googlemeets", "playerScore": 5},
    {"playerUsername": "helloworld", "playerScore": 5},
    {"playerUsername": "sup", "playerScore": 5},
  ])

  const [divisionLeaderboard, setDivisionLeaderboard] = useState([
    {"playerUsername": "ucantbeatme", "playerScore": 15},
    {"playerUsername": "hellothere", "playerScore": 15},
    {"playerUsername": "seeyalater", "playerScore": 14},
    {"playerUsername": "okwaterbottle", "playerScore": 13},
    {"playerUsername": "lampisbright", "playerScore": 10},
    {"playerUsername": "whereismycharger", "playerScore": 6},
    {"playerUsername": "zoom", "playerScore": 5},
    {"playerUsername": "googlemeets", "playerScore": 5},
    {"playerUsername": "helloworld", "playerScore": 5},
    {"playerUsername": "sup", "playerScore": 5},
  ])

  useEffect(()=> {
    LeaderboardService.getTop10ScoresAddition().then(res => {
      setAdditionLeaderboard(res.data);
    })
    LeaderboardService.getTop10ScoresSubtraction().then(res => {
      setSubtractionLeaderboard(res.data);
    })
    LeaderboardService.getTop10ScoresMultiplication().then(res => {
      setMultiplicationLeaderboard(res.data);
    })
    LeaderboardService.getTop10ScoresDivision().then(res => {
      setDivisionLeaderboard(res.data);
    })

  }, [])
  
  return (
    <Grid container spacing={2} sx={{marginTop: '0px'}}>
      <Grid item xs={6} sm={3}>
        <MediaCard />
        <List>
          <ListItem
            secondaryAction={
              <p>Player Score</p>
            }
          >
            <ListItemText
              primary="Player Name"
            />
          </ListItem>
          {additionLeaderboard.map((key, index) => 
            <ListItem
              secondaryAction={
                <p>{key.playerScore}</p>
              }
            >
              <ListItemText
                primary={key.playerUsername}
              />
            </ListItem>
          )}
        </List>
      </Grid>
      
      <Grid item xs ={6} sm={3}>
        <MediaCard1 />
        <List>
          <ListItem
            secondaryAction={
              <p>Player Score</p>
            }
          >
            <ListItemText
              primary="Player Name"
            />
          </ListItem>
          {subtractionLeaderboard.map((key, index) => 
            <ListItem
              secondaryAction={
                <p>{key.playerScore}</p>
              }
            >
              <ListItemText
                primary={key.playerUsername}
              />
            </ListItem>
          )}
        </List>
      </Grid>

      <Grid item xs ={6} sm={3}>
        <MediaCard2 />
        <List>
          <ListItem
            secondaryAction={
              <p>Player Score</p>
            }
          >
            <ListItemText
              primary="Player Name"
            />
          </ListItem>
          {multiplicationLeaderboard.map((key, index) => 
            <ListItem
              secondaryAction={
                <p>{key.playerScore}</p>
              }
            >
              <ListItemText
                primary={key.playerUsername}
              />
            </ListItem>
          )}
        </List>
      </Grid>

      <Grid item xs ={6} sm={3}>
        <MediaCard3 />
        <List>
          <ListItem
            secondaryAction={
              <p>Player Score</p>
            }
          >
            <ListItemText
              primary="Player Name"
            />
          </ListItem>
          {divisionLeaderboard.map((key, index) => 
            <ListItem
              secondaryAction={
                <p>{key.playerScore}</p>
              }
            >
              <ListItemText
                primary={key.playerUsername}
              />
            </ListItem>
          )}
        </List>
      </Grid>
    </Grid>
    );
  }

  
  export default Leaderboard;