/* eslint-disable no-unused-vars */
import http from '../utils/axios';

export const postTask = (
  // taskID,
  taskTitle,
  taskDue,
  taskremote,
  taskAddress,
  taskDetail,
  taskImages,
  taskBudget,
  userID
) =>
  http(`/v1/tasks`, {
    method: 'POST',
    data: {
      // _id: taskID,
      title: taskTitle,
      due_time: taskDue,
      remote: taskremote,
      address: taskAddress,
      detail: taskDetail,
      images: taskImages,
      budget: taskBudget,
      create_user_id: userID,
    },
  });
