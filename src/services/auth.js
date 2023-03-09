import http from '../utils/axios';

export const postLogin = () =>
  http(`/v1/auth/login`, {
    method: 'POST',
    data: {
      email: 'asd@asd.com',
      password: 'asdasd',
    },
  });

export const postRegister = () =>
  http(`/v1/auth/register`, {
    method: 'POST',
    data: {
      name: 'asd',
      email: 'asd@asd.com',
      password: 'asdasd',
    },
  });
