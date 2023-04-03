import http from '../utils/axios';

export const getAllComments = () =>
  http(`/v1/comments`, {
    method: 'get',
  });

export const postComment = (text) =>
  http(`/v1/comments`, {
    method: 'post',
    data: { text },
  });
