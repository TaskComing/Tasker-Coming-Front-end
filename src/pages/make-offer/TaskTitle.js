import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

export default function TaskTitle({ task }) {
  const { title, process, status } = task;

  const [following, setFollowing] = useState(false);
  const handleFollowingClick = () => {
    setFollowing(!following);
  };

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Task Title : {title}
      </Typography>
      {/* ternary operator */}
      <Button
        onClick={handleFollowingClick}
        variant="outlined"
        startIcon={following ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      >
        {following ? 'following' : 'follow'}
      </Button>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
        {process.map((step, index) => (
          <>
            <span className={step === status ? 'current-status' : 'normal-status'}>{step}</span>
            {index + 1 !== process.length && <Divider orientation="vertical" flexItem />}
          </>
        ))}
      </Box>
    </div>
  );
}
