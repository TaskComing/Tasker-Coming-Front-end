import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel';
import './TaskTitle.css';
// import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import formatTime from '../../utils/formatTime';

function TaskDetails({ task }) {
  return (
    <div className="task-details">
      <div className="task-carousel">
        <Carousel animation="slide" navButtonsAlwaysVisible autoPlay="false">
          {task.images.map((image) => (
            <img key={image} src={image} alt="houseclean" />
          ))}
        </Carousel>
      </div>
      <div className="tasker-info">
        <div className="person-info">
          <div>
            <PersonIcon color="disabled" fontSize="large" />
          </div>
          <div>
            <p style={{ fontWeight: 500, fontSize: '24px' }}>Posted By</p>
            <p>{`${task.create_user_id.firstName} ${task.create_user_id.lastName}`}</p>
          </div>
        </div>
        <div className="person-info">
          <div>
            <LocationOnIcon color="disabled" fontSize="large" />
          </div>
          <div>
            <p style={{ fontWeight: 500, fontSize: '24px' }}>Location</p>
            <a
              href={`https://www.google.com/maps/search/${task.address}`}
              style={{ textDecoration: 'none' }}
              target="_blank"
              rel="noreferrer"
            >
              <p>{task.address}</p>
            </a>
          </div>
        </div>

        <div className="person-info">
          <div>
            <CalendarMonthIcon color="disabled" fontSize="large" />
          </div>
          <div>
            <p style={{ fontWeight: 500, fontSize: '24px' }}>Due Date</p>
            <p>
              {formatTime(task.due_time, {
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

TaskDetails.propTypes = {
  task: PropTypes.shape({
    address: PropTypes.string,
    create_user_id: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired,
    due_time: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default TaskDetails;
