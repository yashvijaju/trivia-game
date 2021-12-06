import MediaCard from "./Components/card"
import MediaCard1 from "./Components/card1"
import MediaCard2 from "./Components/card2"
import MediaCard3 from "./Components/card3"
import BasicCard from "./Components/cardheader"
import React from "react";
import Grid from '@mui/material/Grid';


function Home() {
    return (
      <>        
        <Grid container>
          <Grid item xs ={12}>
            <BasicCard/>
          </Grid>
        </Grid>
        <br />
        <br />
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
    
    );
  }
  
  export default Home;