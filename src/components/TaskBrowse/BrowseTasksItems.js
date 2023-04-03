import * as React from 'react';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import TaskFilter from './TaskFilter';
import OneTaskInfoShow from './OneTaskInfoShow';
import SearchTasks from './SearchTasks';
import bg from '../../assets/TaskBrowse/TaskDetailBackground.png';

function BrowseTaskItems() {
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
        <SearchTasks />
      </Box>
      <Box sx={{ flexGrow: 1 }} marginBottom={5}>
        <Box container spacing={8} display="flex" marginLeft={5} marginTop={5}>
          <Grid item xs={4} marginBottom={5} marginLeft={2}>
            <InputLabel id="sortBy">Sort by</InputLabel>
          </Grid>
          <Grid item xs={4} marginBottom={2} marginLeft={10}>
            <TaskFilter />
          </Grid>
          <Grid item xs={4} marginBottom={2} marginLeft={10}>
            <TaskFilter />
          </Grid>
        </Box>
      </Box>
      {/* sx={{ display: 'flex' }} margin={10} */}
      <Box container spacing={5} marginBottom={5}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={8} marginBottom={3} marginLeft={-3}>
            <Grid item xs={4}>
              <OneTaskInfoShow />
            </Grid>
            <Grid item xs={4}>
              <OneTaskInfoShow />
            </Grid>
            <Grid item xs={4}>
              <OneTaskInfoShow />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={8} marginBottom={3} marginLeft={-3}>
            <Grid item xs={4}>
              <OneTaskInfoShow />
            </Grid>
            <Grid item xs={4}>
              <OneTaskInfoShow />
            </Grid>
            <Grid item xs={4}>
              <OneTaskInfoShow />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={8} marginBottom={3} marginLeft={-3}>
            <Grid item xs={4}>
              <OneTaskInfoShow />
            </Grid>
            <Grid item xs={4}>
              <OneTaskInfoShow />
            </Grid>
            <Grid item xs={4}>
              <OneTaskInfoShow />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
export default BrowseTaskItems;
