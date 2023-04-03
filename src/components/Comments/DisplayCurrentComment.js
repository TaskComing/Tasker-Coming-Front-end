import * as React from 'react';
// import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardHeader, IconButton } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';

function DisplayCurrentComment(props) {
  const {
    comment: { text, create_user_id: createUserId },
  } = props;

  const handleReply = async () => {};

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
        fullWidth
        avatar={<Avatar alt="John" src="/img/homepage2/Avatar1.jpg" />}
        action={<IconButton aria-label="settings" />}
        title={createUserId?.firstName || 'Unknown'}
        titleTypographyProps={{
          fontSize: 18,
        }}
      />
      <CardContent>
        <Typography sx={{ fontSize: '18px', p: '0px 10px 15px 10px' }}>{text}</Typography>
        <Box
          sx={{
            display: 'flex',
            width: 'fit-content',
            padding: '0 8px',
            justifyContent: 'flex-start',
            '&:hover': {
              backgroundColor: '#DCDCDC',
            },
          }}
          onClick={handleReply}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ReplyIcon sx={{ fontSize: '18px' }} />
          </Box>
          <Typography sx={{ fontSize: '18px' }}>reply</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default DisplayCurrentComment;
