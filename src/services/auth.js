import http from '../utils/axios';

const register = (userData) =>
  http(`/v1/auth/register`, {
    method: 'POST',
    data: userData,
  });

const login = (userData) =>
  http(`/v1/auth/login`, {
    method: 'POST',
    data: userData,
  });

const authService = {
  register,
  login,
};

export default authService;
