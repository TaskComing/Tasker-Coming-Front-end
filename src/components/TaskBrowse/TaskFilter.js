import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { FormControlLabel } from '@mui/material';

function BasicSelect() {
  const [TaskStatus, setTaskStatus] = React.useState('');

  const handleChange = (SelectChangeEvent) => {
    setTaskStatus(SelectChangeEvent.target.value);
  };

  return (
    <Box sx={{ maxWidth: 120, margin: '10', width: '300%' }}>
      {/* <InputLabel id="select-label" >Sort by</InputLabel> */}
      <FormControl fullWidth>
        <InputLabel id="select-status-label-" placeholder="location ">
          Selector
        </InputLabel>
        <Select
          labelId="taskFilter"
          id="taskFilter"
          value={TaskStatus}
          label="TaskStatus"
          onChange={handleChange}
        >
          <MenuItem value={1}>Open</MenuItem>
          <MenuItem value={2}>Processing</MenuItem>
          <MenuItem value={3}>Closed</MenuItem>
          <MenuItem value={3}>Finished</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default BasicSelect;
