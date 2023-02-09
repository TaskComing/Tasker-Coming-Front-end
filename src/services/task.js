import http from '../utils/axios';

export const postTask = (title, state) =>
  http(`/v1/tasks`, {
    method: 'POST',
    data: {
      _id: 102,
      title,
      state,
      deteled: false,
    },
  });
