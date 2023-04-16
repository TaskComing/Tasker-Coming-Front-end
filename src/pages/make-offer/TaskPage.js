import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
  const { user } = useSelector((state) => state.auth);
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
        <div> </div>
      ) : (
        <>
          <TaskTitle task={task} />
          <div className="task-information">
            <TaskDetails task={task} />
            <TaskBody task={task} />
            {user && user.user.id !== task.create_user_id.id && task.status === 'open' && (
              <OfferForm task={task} />
            )}
            <OfferandQuestionTab task={task} user={user} />
          </div>
        </>
      )}
    </div>
  );
}

export default TaskPage;
