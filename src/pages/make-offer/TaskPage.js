import React from 'react';
import TaskTitle from './TaskTitle';
import taskData from './taskData';
import TaskBody from './TaskBody';
import TaskDetails from './TaskDetails';
import OfferForm from './OfferForm';
import OfferandQuestionTab from './OfferAndQuestionTab';

const task = taskData[0];

function TaskPage() {
  return (
    <div>
      <TaskTitle task={task} />
      <div className="task-information">
        <TaskDetails task={task} />
        <TaskBody task={task} />
        <OfferForm />
        <OfferandQuestionTab />
      </div>
    </div>
  );
}

export default TaskPage;
