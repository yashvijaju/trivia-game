
   
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
        height="200"
        image= "https://img.favpng.com/20/21/0/addition-plus-and-minus-signs-clip-art-png-favpng-ytTYGc5k8QRDC8QRJCetpN7vt.jpg"
        alt="Additon"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Addition
        </Typography>
      </CardContent>
    </Card>
  );
}
