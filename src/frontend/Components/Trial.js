
   
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
        height="100"
        image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinclipart.com%2Fpindetail%2FibiiRh_sign-clipart-addition-blue-plus-sign-png-transparent%2F&psig=AOvVaw1Ln_KQCOpSviS6X40758Kd&ust=1638477887105000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCDz_a7w_QCFQAAAAAdAAAAABAD"
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
