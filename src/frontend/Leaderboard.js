import React from "react";
import MediaCard from "./Components/Trial"
import MediaCard1 from "./Components/sub"
import MediaCard2 from "./Components/multi"
import MediaCard3 from "./Components/div"
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


function Leaderboard() {
  return (
    <>      
      <Grid>
        </Grid>
        <br />
        <br />
        <>
          <Grid container spacing={2}>
          
            <Grid item xs ={6} sm={3}>
              <MediaCard />
            </Grid>
            
              <Grid item xs ={6} sm={3}>
              <MediaCard1 />
              

            </Grid>

            <Grid item xs ={6} sm={3}>
              <MediaCard2 />
            </Grid>

            <Grid item xs ={6} sm={3}>
              <MediaCard3 />
            </Grid>


          
          </Grid>

          
        </>

        <Grid container spacing={2}>
          
          <Grid item xs ={6} sm={1.5}>
          <List>
          <ListItem>
          <ListItemText primary = "Player name" />
          </ListItem>   
          <ListItem>
            <ListItemText primary = "1. Player 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "2. Player 2" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "3. Player 3" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "4. Player 4" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "5. Player 5" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "6. Player 6" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "7. Player 7" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "8. Player 8" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "9. Player 9" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "10. Player 10" />
          </ListItem>
            </List>
            </Grid>

            <Grid item xs ={6} sm={1.5}>
          <List>
          <ListItem>
          <ListItemText primary = "Score" />
          </ListItem>   
          <ListItem>
            <ListItemText primary = "1000" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "950" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "900" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "850" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "800" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "750" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "700" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "650" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "600" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "550" />
          </ListItem>
            </List>
            </Grid>

            <Grid item xs ={6} sm={1.5}>
          <List>
          <ListItem>
          <ListItemText primary = "Player name" />
          </ListItem>   
          <ListItem>
            <ListItemText primary = "1. Player 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "2. Player 2" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "3. Player 3" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "4. Player 4" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "5. Player 5" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "6. Player 6" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "7. Player 7" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "8. Player 8" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "9. Player 9" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "10. Player 10" />
          </ListItem>
            </List>
            </Grid>

            <Grid item xs ={6} sm={1.5}>
          <List>
          <ListItem>
          <ListItemText primary = "Score" />
          </ListItem>   
          <ListItem>
            <ListItemText primary = "1000" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "950" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "900" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "850" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "800" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "750" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "700" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "650" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "600" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "550" />
          </ListItem>
            </List>
            </Grid>


            <Grid item xs ={6} sm={1.5}>
          <List>
          <ListItem>
          <ListItemText primary = "Player name" />
          </ListItem>   
          <ListItem>
            <ListItemText primary = "1. Player 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "2. Player 2" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "3. Player 3" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "4. Player 4" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "5. Player 5" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "6. Player 6" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "7. Player 7" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "8. Player 8" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "9. Player 9" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "10. Player 10" />
          </ListItem>
            </List>
            </Grid>

            <Grid item xs ={6} sm={1.5}>
          <List>
          <ListItem>
          <ListItemText primary = "Score" />
          </ListItem>   
          <ListItem>
            <ListItemText primary = "1000" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "950" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "900" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "850" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "800" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "750" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "700" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "650" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "600" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "550" />
          </ListItem>
            </List>
            </Grid>
          
            <Grid item xs ={6} sm={1.5}>
          <List>
          <ListItem>
          <ListItemText primary = "Player name" />
          </ListItem>   
          <ListItem>
            <ListItemText primary = "1. Player 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "2. Player 2" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "3. Player 3" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "4. Player 4" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "5. Player 5" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "6. Player 6" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "7. Player 7" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "8. Player 8" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "9. Player 9" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "10. Player 10" />
          </ListItem>
            </List>
            </Grid>

            <Grid item xs ={6} sm={1.5}>
          <List>
          <ListItem>
          <ListItemText primary = "Score" />
          </ListItem>   
          <ListItem>
            <ListItemText primary = "1000" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "950" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "900" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "850" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "800" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "750" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "700" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "650" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "600" />
          </ListItem>
          <ListItem>
            <ListItemText primary = "550" />
          </ListItem>
            </List>
            </Grid>
            
  
          </Grid>


      </>
    
    );
  }

  
  export default Leaderboard;