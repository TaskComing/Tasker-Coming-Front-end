import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import TaskFilter from './TaskFilter';
import OneTaskInfoShow from './OneTaskInfoShow';
import SearchTasks from './SearchTasks';
import bg from '../../assets/TaskBrowse/TaskDetailBackground.png';
import http from '../../utils/axios';

function BrowseTaskItems() {
  const [tasks, setTasks] = useState({
    originalTask: [],
    filteredTask: [],
    searchedTask: [],
    filteredAndSearchedTask: [],
  });
  const getTask = async () => {
    const response = await http(`/v1/tasks/`, {
      method: 'GET',
    });
    const responseArray = response.data;
    const tasksArray = responseArray.map((task) => {
      const { _id: id, ...rest } = task;
      return { id, ...rest };
    });
    setTasks({
      originalTask: tasksArray,
      filteredTask: tasksArray,
      searchedTask: tasksArray,
      filteredAndSearchedTask: tasksArray,
    });
  };

  useEffect(() => {
    getTask();
  }, []);

  const handleOptionChange = (task) => {
    setTasks(task);
  };

  const handleSearch = (task) => {
    setTasks(task);
  };

  return (
    <Box margin={5}>
      <Box
        className="top"
        sx={{
          position: 'relative',
          background: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '400px',
          backgroundHeight: '400px',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SearchTasks tasks={tasks} onChange={handleSearch} />
      </Box>
      <Box sx={{ flexGrow: 1 }} marginBottom={5}>
        <Box container="true" spacing={8} display="flex" marginLeft={5} marginTop={5}>
          <Grid item xs={4} marginBottom={5} marginLeft={2}>
            <InputLabel id="sortBy">Sort by</InputLabel>
          </Grid>
          <Grid item xs={4} marginBottom={2} marginLeft={10}>
            <TaskFilter tasks={tasks} onChange={handleOptionChange} />
          </Grid>
        </Box>
      </Box>
      {/* sx={{ display: 'flex' }} margin={10} */}
      <Box container="true" spacing={5} marginBottom={5}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={8} marginBottom={3} marginLeft={-3}>
            {tasks.filteredAndSearchedTask &&
              tasks.filteredAndSearchedTask.map(
                (task) =>
                  task.id &&
                  task.create_user_id &&
                  task.images &&
                  task.images.length > 0 && (
                    <Grid item xs={4} key={task.id}>
                      <OneTaskInfoShow task={task} />
                    </Grid>
                  )
              )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
export default BrowseTaskItems;
