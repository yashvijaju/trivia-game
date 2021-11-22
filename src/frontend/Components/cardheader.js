import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }} color="inherit">
      <CardContent>
        <Typography variant="h5" color="text.primary" gutterBottom align="center">
          Trivia Games
        </Typography>
        <Typography variant="h9" component="div" align="center">
          Making math fun
        </Typography>
      </CardContent>
    </Card>
  );
}