import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import MediaCard from "./Components/card"
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./styling.css"

// function Leaderboard() {
//     return (
    
	// <div class = "parent">
// 	<div class = "mid">  <a> Leaderboard </a> 	</div>
// 					<div class = "tables">
// 					<ul class = "hello">
// 		   				 <li> Addition </li>
// 		    
// 		    			 <li> Subtraction</li>
// 		   				  <li> Multiplication </li>
// 		   				  <li> Division </li>
// 		   				  </ul>
// 		    
// 					</div>
// 	</div>
// 					


{/* <meta name="viewport" content="width=device-width, initial-scale=1" />

	<div class = "parent">
	<div class = "mid">  <a> Leaderboard </a> 	</div>
	
	<div class = "addition">  <a> Addition </a> 	</div>
	<div class = "subtraction">  <a> Subtraction </a> 	</div>
	<div class = "multiplication">  <a> Multiplication </a> 	</div>
	<div class = "division">  <a> Division </a> 	</div>
					
	</div>
					
		
    );
  }
  
export default Leaderboard; */
//}
function Leaderboard() {
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