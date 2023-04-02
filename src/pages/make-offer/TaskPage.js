import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TaskTitle from './TaskTitle';
import TaskBody from './TaskBody';
import TaskDetails from './TaskDetails';
import OfferForm from './OfferForm';
import OfferandQuestionTab from './OfferAndQuestionTab';
import http from '../../utils/axios';

function TaskPage() {
  const [task, setTask] = useState({});
  const [loading, setLoading] = useState(true);
  const { taskId } = useParams();
  const getTask = async () => {
    const response = await http(`/v1/tasks/${taskId}`, {
      method: 'GET',
    });
    setTask(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getTask();
  }, []);
  return (
    <div>
      {}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <TaskTitle task={task} />
          <div className="task-information">
            <TaskDetails task={task} />
            <TaskBody task={task} />
            <OfferForm />
            <OfferandQuestionTab />
          </div>
        </>
      )}
      {/* {Object.keys(task).length > 0 && (
        <>
          <TaskTitle task={task} />
          <div className="task-information">
            <TaskDetails task={task} />
            <TaskBody task={task} />
            <OfferForm />
            <OfferandQuestionTab />
          </div>
        </>
      )} */}
    </div>
  );
}

export default TaskPage;
