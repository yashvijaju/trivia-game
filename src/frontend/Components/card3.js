import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard3() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="280"
        image="https://www.theschoolrun.com/sites/theschoolrun.com/files/article_images/division.png"
        alt="Division"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Division
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Division is a simple operation in which a number is divided. 
        It's easiest to think of it as a number of objects being 
        divided among a certain number of people.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Play Multiplayer</Button>
        <Button size="small">Solo Practice</Button>
      </CardActions>
    </Card>
  );
}