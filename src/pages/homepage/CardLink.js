import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';

export default function CardLink() {
  return (
    <Box display="flex">
      <Card sx={{ maxWidth: 345, margin: 2.7, padding: 1 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="263"
            image="/img/homepage2/pageCard1.jpg"
            alt="post a task"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Post a task
            </Typography>
            <Typography variant="body2" color="text.secondary" fontSize={10}>
              Posting a task and getting quotes is completely free on tasker. Simply click Post a
              Task from your browser or app and follow the prompts to add details.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Link
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, margin: 2.7, padding: 1 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="263"
            image="/img/homepage2/pageCard2.jpg"
            alt="post a task"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Set your budget
            </Typography>
            <Typography variant="body2" color="text.secondary" fontSize={10}>
              Setting a fair price for the amount of time and effort required for the task is
              crucial. Tasker does not endorse low pricing of tasks and a task may be moderated if
              found to be.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Link
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, margin: 2.7, padding: 1 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="263"
            image="/img/homepage2/pageCard3.jpg"
            alt="post a task"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Receive quotes
            </Typography>
            <Typography variant="body2" color="text.secondary" fontSize={10}>
              When you accept an offer, you will be able to communicate with the Tasker via private
              message to arrange further details - at this point, you can also choose to exchange
              contact details.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Link
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
