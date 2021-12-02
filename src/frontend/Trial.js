
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from "@material-ui/core/List";

export default function MediaCard() {
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="1000"
        image="https://image.shutterstock.com/z/stock-photo-glowing-neon-pink-purple-plus-sign-math-symbol-in-a-d-illustration-with-a-bright-metallic-1106375183.jpg"
        alt="Additon"
        




        

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Addition
        </Typography>
        <FixedSizeList
    height={50}
    width={50}
    itemSize={46}
    itemCount={10}
    overscanCount={5}
  >
    {renderRow}
  </FixedSizeList>
      </CardContent>

    </Card>

  </>

    

  );
}
