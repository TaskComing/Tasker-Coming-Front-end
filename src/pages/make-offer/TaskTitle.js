import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import './TaskTitle.css';
import top from '../../assets/images/top.jpg';
import http from '../../utils/axios';

const process = ['open', 'assigned', 'completed'];

function TaskTitle({ task }) {
  const { user } = useSelector((state) => state.auth);
  const { title, status } = task;
  const [following, setFollowing] = useState(false);

  const updateFollowTask = async () => {
    // eslint-disable-next-line no-underscore-dangle
    const response = await http(`/v1/users/follow/${user.user._id}`, {
      method: 'PUT',
      data: {
        following_task_id: task.id,
      },
    });
    return response.data;
  };

  const handleFollowingClick = () => {
    setFollowing(!following);
    updateFollowTask();
  };

  useEffect(() => {
    if (user) {
      // eslint-disable-next-line no-underscore-dangle
      const isFollowing = user.user.following_task_id.includes(task.id);
      setFollowing(isFollowing);
    }
  }, [user]);

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
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          style={{
            textAlign: 'center',
            color: '#f5f5f5',
            position: 'relative',
          }}
          variant="h3"
          gutterBottom
        >
          {title}
          {user && (
            <Button
              className={following ? 'following-button' : 'unfollowing-button'}
              color="secondary"
              onClick={handleFollowingClick}
              variant="outlined"
              startIcon={following ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            >
              {following ? 'following' : 'follow'}
            </Button>
          )}
        </Typography>
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
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskTitle;
