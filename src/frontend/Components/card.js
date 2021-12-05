import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="280"
        image="https://www.theschoolrun.com/sites/theschoolrun.com/files/article_images/addition.jpg"
        alt="Additon"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Addition
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Addition is one of the four basic operations of arithmetic, 
        the other three being subtraction, multiplication and division. 
        The addition of two whole numbers results in the total amount or 
        sum of those values combined.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="/game/addition/multiplayer">Play Multiplayer</Button>
        <Button size="small" href="/game/addition/singleplayer">Solo Practice</Button>
      </CardActions>
    </Card>
  );
}