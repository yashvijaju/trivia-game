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


function Leaderboard() {
  const [additionLeaderboard, setAdditionLeaderboard] = useState([
    {"username": "abc", "score": 5},
    {"username": "abc", "score": 15},
    {"username": "abc", "score": 25},
    {"username": "abc", "score": 35},
    {"username": "abc", "score": 45},
  ])

  const [subtractionLeaderboard, setSubtractionLeaderboard] = useState([
    {"username": "abc", "score": 5},
    {"username": "abc", "score": 15},
    {"username": "abc", "score": 25},
    {"username": "abc", "score": 35},
    {"username": "abc", "score": 45},
  ])

  const [multiplicationLeaderboard, setMultiplicationLeaderboard] = useState([
    {"username": "cba", "score": 5},
    {"username": "abc", "score": 15},
    {"username": "abc", "score": 25},
    {"username": "abc", "score": 35},
    {"username": "abc", "score": 45},
  ])

  const [divisionLeaderboard, setDivisionLeaderboard] = useState([
    {"username": "abc", "score": 5},
    {"username": "abc", "score": 15},
    {"username": "abc", "score": 25},
    {"username": "abc", "score": 35},
    {"username": "abc", "score": 45},
  ])

  useEffect(()=> {
    // TO-DO: get Leaderboard values HERE
  }, [])
  
  return (
    <Grid container spacing={2} sx={{marginTop: '0px'}}>
      <Grid item xs={6} sm={3}>
        <MediaCard />
        <List>
          <ListItem
            secondaryAction={
              <p>Score</p>
            }
          >
            <ListItemText
              primary="Player Name"
            />
          </ListItem>
          {additionLeaderboard.map((key, index) => 
            <ListItem
              secondaryAction={
                <p>{key.score}</p>
              }
            >
              <ListItemText
                primary={key.username}
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
              <p>Score</p>
            }
          >
            <ListItemText
              primary="Player Name"
            />
          </ListItem>
          {subtractionLeaderboard.map((key, index) => 
            <ListItem
              secondaryAction={
                <p>{key.score}</p>
              }
            >
              <ListItemText
                primary={key.username}
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
              <p>Score</p>
            }
          >
            <ListItemText
              primary="Player Name"
            />
          </ListItem>
          {multiplicationLeaderboard.map((key, index) => 
            <ListItem
              secondaryAction={
                <p>{key.score}</p>
              }
            >
              <ListItemText
                primary={key.username}
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
              <p>Score</p>
            }
          >
            <ListItemText
              primary="Player Name"
            />
          </ListItem>
          {divisionLeaderboard.map((key, index) => 
            <ListItem
              secondaryAction={
                <p>{key.score}</p>
              }
            >
              <ListItemText
                primary={key.username}
              />
            </ListItem>
          )}
        </List>
      </Grid>
    </Grid>
    );
  }

  
  export default Leaderboard;