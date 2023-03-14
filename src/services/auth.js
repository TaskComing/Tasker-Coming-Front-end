import http from '../utils/axios';

const register = (userData) =>
  http(`/v1/auth/register`, {
    method: 'POST',
    data: userData,
  });

const registerGoogle = (accessToken) => {
  http(`/v1/auth/register`, {
    method: 'POST',
    googleAccessToken: accessToken,
  });
};

const login = (userData) =>
  http(`/v1/auth/login`, {
    method: 'POST',
    data: userData,
  });

const loginGoogle = (accessToken) => {
  http(`/v1/auth/register`, {
    method: 'POST',
    googleAccessToken: accessToken,
  });
};

// logout
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  registerGoogle,
  login,
  loginGoogle,
  logout,
};

export default authService;
