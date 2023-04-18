import http from '../utils/axios';

export const getAllComments = () =>
  http(`/v1/comments`, {
    method: 'get',
  });

export const postComment = (text, createUserId) =>
  http(`/v1/comments`, {
    method: 'post',
    data: { text, create_user_id: createUserId },
  });

export const addCommentToUser = (userId, commentId) =>
  http(`/v1/comments/${commentId}/users/${userId}`, {
    method: 'post',
  });

export const addReplyToComment = (text, parentCommentId) =>
  http(`/v1/comments/${parentCommentId}`, {
    method: 'post',
    data: { text, parent_comment_id: parentCommentId },
  });
