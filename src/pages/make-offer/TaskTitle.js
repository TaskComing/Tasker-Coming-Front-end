import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import './TaskTitle.css';
import top from '../../assets/images/top.jpg';

const process = ['open', 'assigned', 'completed'];

function TaskTitle({ task }) {
  const { title, status } = task;
  const [following, setFollowing] = useState(false);
  const handleFollowingClick = () => {
    setFollowing(!following);
  };
  const currentStepIndex = process.indexOf(status);

  return (
    <Box
      style={{
        backgroundImage: `url(${top})`,
        backgroundSize: 'cover',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
      }}
    >
      <Box
        style={{
          // backgroundImage: `url(${top})`,
          // backgroundSize: 'cover',
          // height: '200px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <div className="left-container">Left</div>
        <Typography style={{ textAlign: 'center', color: '#f5f5f5' }} variant="h3" gutterBottom>
          Task Title : {title}
        </Typography>

        <Button
          className={following ? 'following-button' : 'unfollowing-button'}
          color="secondary"
          onClick={handleFollowingClick}
          variant="outlined"
          startIcon={following ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        >
          {following ? 'following' : 'follow'}
        </Button>
      </Box>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {/* 1. currentStepIndex >= index - add background color
        实际的状态 0 1 2
        process bar上的每一个item 0 1 2
        2.  */}
        <div className="process-bar">
          {process.map((step, index) => {
            let processClassName = '';
            if (index === 0) processClassName += 'start-process ';
            if (currentStepIndex === index) processClassName += 'end-process ';
            if (currentStepIndex >= index) processClassName += 'highlight-process ';

            // const classN = 'class1 class2class3'
            return (
              <span key={step} className={processClassName}>
                {step}
              </span>
            );
          })}
        </div>
      </Box>
    </Box>
  );
}

TaskTitle.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskTitle;
