import { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';
// import Input from '@mui/joy/Input';
// import { Button } from '@mui/material/Button';
// import { Input } from '@mui/material';
import { Input, FormControl, Button } from '@mui/material';

function InputFormProps({ tasks, onChange }) {
  const [keyword, setKeyword] = useState('');
  const submitHandler = (event) => {
    event.preventDefault();
    const searchedTask = tasks.filteredTask.filter((task) => {
      try {
        return (
          task.title.toLowerCase().includes(keyword.toLowerCase()) ||
          task.detail.toLowerCase().includes(keyword.toLowerCase())
        );
      } catch (error) {
        return false;
      }
    });
    onChange({
      originalTask: tasks.originalTask,
      filteredTask: tasks.filteredTask,
      searchedTask,
      filteredAndSearchedTask: searchedTask,
    });
    // setKeyword('');
  };

  const changeHandler = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <Box
      sx={{
        py: 2,
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <FormControl sx={{ display: 'flex', flexDirection: 'row' }}>
        <Input
          placeholder="                 .....    Search   Task    ......   "
          required
          value={keyword}
          onChange={changeHandler}
          sx={{
            mb: 1,
            border: 'white 3px solid',
            borderRadius: '10px',
            color: 'white',
            width: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50px',
            fontSize: '16px',
          }}
        />
        <Button type="submit" sx={{ color: 'white' }} onClick={submitHandler}>
          Search
        </Button>
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

InputFormProps.propTypes = {
  tasks: PropTypes.shape({
    originalTask: PropTypes.arrayOf(projectShape).isRequired,
    filteredTask: PropTypes.arrayOf(projectShape).isRequired,
    searchedTask: PropTypes.arrayOf(projectShape).isRequired,
    filteredAndSearchedTask: PropTypes.arrayOf(projectShape).isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputFormProps;
