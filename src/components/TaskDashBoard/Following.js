import React from 'react';
import './TaskDashboardStyle.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TaskData from './TaskData';

function Posted() {
  return (
    <>
      {TaskData.filter((task) => task.category === 'Following').map((task, index) => (
        <div key={index} className="box">
          <img src={task.image} alt="task_picture" className="img" />
          <div className="description">
            <h3>{task.title}</h3>
            <p>{task.location}</p>
            <p>{task.date}</p>
            <p>{task.time}</p>
          </div>
          <div className="status_box">
            <p className="price">{task.price}</p>
            <p className="status">{task.status}</p>
          </div>
          <span className="icon">
            <ChevronRightIcon fontSize="large" />
          </span>
        </div>
      ))}
    </>
  );
}

export default Posted;
