import * as React from 'react';
// import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardHeader, IconButton } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';

function DisplayCurrentComment(props) {
  const { item } = props;
  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
      }}
    >
      <CardHeader
        avatar={<Avatar alt="John" src="/img/homepage2/Avatar1.jpg" />}
        action={<IconButton aria-label="settings" />}
        title="John"
        titleTypographyProps={{
          fontSize: 18,
        }}
      />
      <CardContent>
        <Typography variant="body1">{item}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Box sx={{ m: '20' }}>
            <ReplyIcon />
          </Box>
          <Typography variant="body2">reply</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default DisplayCurrentComment;
