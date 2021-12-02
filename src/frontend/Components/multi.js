
import * as React from 'react';
import Card from '@mui/material/Card';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="https://cdn.pixabay.com/photo/2013/07/12/14/11/cross-147923_1280.png"
        alt="Multiplication"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
		Multiplication
        </Typography>

      </CardContent>
    </Card>
  );
}
