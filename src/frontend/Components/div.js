
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import division from '../../resources/division.png';

export default function MediaCard3() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="280"
        //image="https://www.pngitem.com/pimgs/m/73-736970_division-sign-clip-art-hd-png-download.png"
        img src = {division}
        alt="Division"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
		Division
        </Typography>
      </CardContent>
    </Card>

  );
}
