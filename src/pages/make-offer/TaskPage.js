import React from 'react';
import TaskTitle from './TaskTitle';
import taskData from './taskData';
import TaskBody from './TaskBody';
import TaskDetails from './TaskDetails';

const task = taskData[0];

function TaskPage() {
  return (
    <>
      <TaskTitle task={task} />
      <TaskBody task={task} />
      <TaskDetails task={task} />
    </>
  );
}

export default TaskPage;
