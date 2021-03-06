import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import multiplication from '../../resources/multiplication.png';

export default function MediaCard2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="280"
        //image="https://www.theschoolrun.com/sites/theschoolrun.com/files/article_images/multiplication.png"
        img src={multiplication}
        alt="Multiplication"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Multiplication
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Essentially, to multiply numbers is to add groups of a 
        number. Multiplying means repeated addition of a number.
        When you multiply two numbers you get the product.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="/game/multiplication/multiplayer">Play Multiplayer</Button>
        <Button size="small" href="/game/multiplication/singleplayer">Solo Practice</Button>
      </CardActions>
    </Card>
  );
}