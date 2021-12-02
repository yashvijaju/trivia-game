import React from "react";
import Navbar from "./Components/Navbar/Navbar";
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
import "./styling.css"


function Leaderboard() {
  return (
    <>
      <>
        <Navbar />
      </>
      
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
      

      </>
    
    );
  }

  
  export default Leaderboard;