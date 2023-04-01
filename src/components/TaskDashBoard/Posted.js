import React from 'react';
import './TaskDashboardStyle.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import TaskData from './TaskData';

function Posted() {
  return (
    <>
      {TaskData.filter((task) => task.category === 'Posted').map((task, index) => (
        <div key={index} className="box">
          <img src={task.image} alt="task_picture" className="img" />
          <div className="description">
            <h3>{task.title}</h3>
            <p>
              <LocationOnIcon />
              {task.location}
            </p>
            <p>
              <CalendarMonthIcon />
              {task.date}
            </p>
            <p>
              <AccessAlarmIcon />
              {task.time}
            </p>
          </div>
          <div className="status_box">
            <p className="price">{task.price}</p>
            <p className="status">{task.status}</p>
          </div>
          <span className="iconBtn">
            <ChevronRightIcon fontSize="large" />
          </span>
        </div>
      ))}
    </>
  );
}

export default Posted;
