import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import TaskDetail1 from '../../assets/TaskBrowse/TaskDetail1.png';
import Avatar1 from '../../assets/TaskBrowse/Avatar.jpg';

function OneTaskInfoShow() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia component="img" alt="TaskDetailCard" height="140" width="" image={TaskDetail1} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          House clean
        </Typography>
        <Typography gutterBottom variant="h6" component="div" color="font.green">
          $ 150
        </Typography>

        <Typography variant="body2" color="font.darkGrey">
          <LocationOnIcon /> Ascot QLD
        </Typography>

        <Typography variant="body2" color="font.darkGrey">
          <DateRangeIcon /> Wed,8 Mar
        </Typography>

        <Typography variant="body2" color="font.darkGrey">
          <AccessTimeIcon /> Morning ,Midday
        </Typography>
      </CardContent>
      <Stack direction="row" spacing={2}>
        <Avatar alt="Avatar" src={Avatar1} />
      </Stack>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default OneTaskInfoShow;
