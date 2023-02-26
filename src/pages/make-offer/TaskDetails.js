import React from 'react';
import Carousel from 'react-material-ui-carousel';
import './TaskTitle.css';
// import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import houseClean from '../../assets/images/houseclean.jpeg';

function TaskDetails({ task }) {
  return (
    <div className="task-details">
      <div className="task-carousel">
        <Carousel animation="slide" navButtonsAlwaysVisible autoPlay="false">
          <img
            // src="https://soymotor.com/sites/default/files/imagenes/noticia/audi-s3-sedan-frontal-2-soymotor.jpg"
            src={houseClean}
            alt="houseclean"
          />
          <img src={houseClean} alt="houseclean" />
          {/* <img src="../../assets/images/top.jpg" alt="houseclean" /> */}
        </Carousel>
      </div>
      <div className="tasker-info">
        <div className="person-info">
          <div>
            <PersonIcon color="disabled" fontSize="large" />
          </div>
          <div>
            <p style={{ fontWeight: 500, fontSize: '24px' }}>Posted By</p>
            <p>{task.name}</p>
          </div>
        </div>
        <div className="person-info">
          <div>
            <LocationOnIcon color="disabled" fontSize="large" />
          </div>
          <div>
            <p style={{ fontWeight: 500, fontSize: '24px' }}>Location</p>
            <p>{task.address}</p>
          </div>
        </div>

        <div className="person-info">
          <div>
            <CalendarMonthIcon color="disabled" fontSize="large" />
          </div>
          <div>
            <p style={{ fontWeight: 500, fontSize: '24px' }}>Date</p>
            <p>{task.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
