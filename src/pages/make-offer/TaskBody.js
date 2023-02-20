import * as React from 'react';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Dialog from '@mui/material/Dialog';
// import TextField from '@mui/material/TextField';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function TaskBody({ task }) {
  return (
    <div>
      <div>
        <div>
          <PersonIcon />
        </div>
        <div>
          <span>Posted By</span>
          <span>{task.name}</span>
        </div>
      </div>
      <div>
        <div>
          <LocationOnIcon />
        </div>
        <div>
          <span>Location</span>
          <span>{task.address}</span>
        </div>
      </div>

      <div>
        <div>
          <CalendarMonthIcon />
        </div>
        <div>
          <span>Date</span>
          <span>{task.date}</span>
        </div>
      </div>
    </div>
  );
}
