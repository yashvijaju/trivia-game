
import * as React from 'react';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import subtraction from '../../resources/subtraction.png';

export default function MediaCard1() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="280"
        //image="https://pngimg.com/uploads/minus/minus_PNG11.png"
        img src = {subtraction}
        alt="Subtraction"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Subtraction
        </Typography>
      </CardContent>
    </Card>
  );
}
