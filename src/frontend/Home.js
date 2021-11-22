import Navbar from "./Components/Navbar/Navbar";
import MediaCard from "./Components/card"
import MediaCard1 from "./Components/card1"
import MediaCard2 from "./Components/card2"
import MediaCard3 from "./Components/card3"
import BasicCard from "./Components/cardheader"
import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function Home() {
    return (
      <>
        <>
          <Navbar />
        </>
        
        <Grid>
        <Grid item xs ={12}>
              <BasicCard/>
        </Grid>
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
  
  export default Home;