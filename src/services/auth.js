import axios from 'axios';
// import http from '../utils/axios';

// export const postLogin = () =>
//   http(`/v1/auth/login`, {
//     method: 'POST',
//     data: {
//       email: 'asd@asd.com',
//       password: 'asdasd',
//     },
//   });

// export const postRegister = () =>
//   http(`/v1/auth/register`, {
//     method: 'POST',
//     data: {
//       name: 'asd',
//       email: 'asd@asd.com',
//       password: 'asdasd',
//     },
//   });

const API_URL = `/v1/auth`;

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// logout
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
