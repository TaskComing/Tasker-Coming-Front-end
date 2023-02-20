import React from 'react';

function TaskDetails({ task }) {
  return (
    <div>
      <div>${task.price}</div>
      <div>
        <span>Details</span>
        <span>{task.detail}</span>
      </div>
    </div>
  );
}

export default TaskDetails;
