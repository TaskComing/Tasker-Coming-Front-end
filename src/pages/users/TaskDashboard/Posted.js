import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/joy/Chip';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Button } from '@mui/material';
import TaskData from './TaskData';

function Posted() {
  return (
    <>
      {TaskData.filter((task) => task.category === 'Posted').map((task) => (
        <Card variant="outlined" sx={{ width: '850px', padding: '10px', display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 200 }}
            image={task.image}
            alt="Live from space album cover"
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '400px',
              overflow: 'hidden',
              marginLeft: '10px',
            }}
          >
            <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column' }}>
              <Typography component="div" variant="h5">
                {task.title}
              </Typography>
              <Chip variant="" startDecorator={<LocationOnIcon />} sx={{ color: 'grey' }}>
                {task.location}
              </Chip>
              <Chip variant="" startDecorator={<CalendarMonthIcon />} sx={{ color: 'grey' }}>
                {task.date}
              </Chip>
              <Chip variant="" startDecorator={<AccessAlarmIcon />} sx={{ color: 'grey' }}>
                {task.time}
              </Chip>
            </CardContent>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '150px',
            }}
          >
            <CardContent
              sx={{
                flex: '1 0 auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}
            >
              <Typography
                component="div"
                variant="h5"
                fontSize={28}
                fontWeight={900}
                sx={{ color: 'orange' }}
              >
                {task.price}
              </Typography>
              <Box
                sx={{
                  bgcolor: 'lightgreen',
                  padding: '5px 15px',
                  textAlign: 'center',
                  borderRadius: '20px',
                }}
              >
                {task.status}
              </Box>
            </CardContent>
          </Box>

          <Button
            sx={{
              marginLeft: '50px',
            }}
          >
            <ArrowCircleRightIcon sx={{ height: 38, width: 38 }} />
          </Button>
        </Card>
      ))}
    </>
  );
}

export default Posted;
