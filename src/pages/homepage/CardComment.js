import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader, IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import StarIcon from '@mui/icons-material/Star';

const card1 = (
  <>
    <CardHeader
      avatar={<Avatar alt="John" src="/img/homepage2/Avatar1.jpg" />}
      action={<IconButton aria-label="settings" />}
      title="John"
      subheader="Co-founder"
    />
    <CardContent>
      <Typography variant="body1" width={527} height={200}>
        I used the end-of-lease cleaning service and the job had been done beautifully! I am really
        happy with the outcomes and also their customer support. Most likely I will use their
        service again in the future.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <StarIcon sx={{ color: red[500] }} />
        <StarIcon sx={{ color: red[500] }} />
        <StarIcon sx={{ color: red[500] }} />
        <StarIcon sx={{ color: red[500] }} />
        <StarIcon sx={{ color: red[500] }} />
      </IconButton>
    </CardActions>
  </>
);
const card2 = (
  <>
    <CardHeader
      avatar={<Avatar alt="Jack" src="/img/homepage2/Avatar2.jpg" />}
      action={<IconButton aria-label="settings" />}
      title="Jack"
      subheader="founder"
    />
    <CardContent>
      <Typography variant="body2" width={527} height={200}>
        Roberto and his team are very professional, responsive and prompt with all communications.
        They are a reliable cleaning service that removed stress for our end of lease. Great work.
        Highly recommend!
        <br />
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <StarIcon sx={{ color: red[500] }} />
        <StarIcon sx={{ color: red[500] }} />
        <StarIcon sx={{ color: red[500] }} />
        <StarIcon sx={{ color: red[500] }} />
        <StarIcon sx={{ color: red[500] }} />
      </IconButton>
    </CardActions>
  </>
);

export default function CardComment() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Box marginLeft={3}>
          <Box marginBottom={10}>
            <img src="/img/homepage2/icon1.jpg" alt="icon" width={170} />
          </Box>
          <Box>
            <img src="/img/homepage2/Ellipse1.png" alt="icon" width={170} />
          </Box>
        </Box>
        <Box marginLeft={10}>
          <Card variant="outlined" sx={{ minWidth: 600 }}>
            {card1}
          </Card>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Box marginRight={12} marginTop={5}>
          <Card variant="outlined" sx={{ minWidth: 600 }}>
            {card2}
          </Card>
        </Box>
        <Box>
          <Box marginTop={6}>
            <img src="/img/homepage2/Ellipse2.png" alt="icon" width={170} />
          </Box>
          <Box marginTop={10}>
            <img src="/img/homepage2/icon2.png" alt="icon" width={170} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
