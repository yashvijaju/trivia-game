import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard1() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="280"
        image="https://www.theschoolrun.com/sites/theschoolrun.com/files/article_images/subtraction.png"
        alt="Subtraction"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Subtraction
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Subtraction is an arithmetic operation that represents the 
        operation of removing objects from a collection. Subtraction
         is signified by the minus sign, −.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="/game/subtraction/multiplayer">Play Multiplayer</Button>
        <Button size="small" href="/game/subtraction/singleplayer">Solo Practice</Button>
      </CardActions>
    </Card>
  );
}