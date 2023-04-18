import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { FormControlLabel } from '@mui/material';

function BasicSelect({ tasks, onChange }) {
  const [TaskStatus, setTaskStatus] = React.useState('all');

  const handleChange = (SelectChangeEvent) => {
    const option = SelectChangeEvent.target.value;
    if (option === 'all') {
      onChange({
        originalTask: tasks.originalTask,
        filteredTask: tasks.originalTask,
        searchedTask: tasks.searchedTask,
        filteredAndSearchedTask: tasks.searchedTask,
      });
      setTaskStatus(option);
      return;
    }
    const filteredTask = tasks.searchedTask.filter((task) => task.status === option);
    onChange({
      originalTask: tasks.originalTask,
      filteredTask,
      searchedTask: tasks.searchedTask,
      filteredAndSearchedTask: filteredTask,
    });
    setTaskStatus(option);
  };

  return (
    <Box sx={{ maxWidth: 120, margin: '10', width: '300%', fontSize: '1.5rem' }}>
      {/* <InputLabel id="select-label" >Sort by</InputLabel> */}
      <FormControl fullWidth>
        <InputLabel id="select-status-label-" placeholder="location " style={{ fontSize: '2rem' }}>
          Task Status
        </InputLabel>
        <Select
          labelId="taskFilter"
          id="taskFilter"
          value={TaskStatus}
          label="TaskStatus"
          onChange={handleChange}
          style={{ fontSize: '1.2rem' }}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="open">Open</MenuItem>
          <MenuItem value="assigned">Processing</MenuItem>
          <MenuItem value="completed">Closed</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

const projectShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  budget: PropTypes.number.isRequired,
  suburb: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  create_datetime: PropTypes.string.isRequired,
  due_time: PropTypes.string.isRequired,
  create_user_id: PropTypes.shape({
    head_img_url: PropTypes.string.isRequired,
  }).isRequired,
});

BasicSelect.propTypes = {
  tasks: PropTypes.shape({
    originalTask: PropTypes.arrayOf(projectShape).isRequired,
    filteredTask: PropTypes.arrayOf(projectShape).isRequired,
    searchedTask: PropTypes.arrayOf(projectShape).isRequired,
    filteredAndSearchedTask: PropTypes.arrayOf(projectShape).isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default BasicSelect;
