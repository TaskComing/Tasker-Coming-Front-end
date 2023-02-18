import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function CardLink() {
  return (
    <Card sx={{ maxWidth: 345, margin: 2.7, padding: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="263"
          image="/img/homepage2/pageCard2.jpg"
          alt="post a task"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Post a task
          </Typography>
          <Typography variant="body2" color="text.secondary">
            content
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Link
        </Button>
      </CardActions>
    </Card>
  );
}
