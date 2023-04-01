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

function Task() {
  return (
    <Card variant="outlined" sx={{ width: '850px', padding: '10px', display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
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
            Task Title
          </Typography>
          <Chip variant="" startDecorator={<LocationOnIcon />} sx={{ color: 'grey' }}>
            Location
          </Chip>
          <Chip variant="" startDecorator={<CalendarMonthIcon />} sx={{ color: 'grey' }}>
            Date
          </Chip>
          <Chip variant="" startDecorator={<AccessAlarmIcon />} sx={{ color: 'grey' }}>
            Time
          </Chip>
        </CardContent>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
            $10
          </Typography>
          <Box sx={{ bgcolor: 'lightgreen', padding: '5px 15px', borderRadius: '20px' }}>Open</Box>
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
  );
}

export default Task;
