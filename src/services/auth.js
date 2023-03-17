import http from '../utils/axios';

const register = (userData) =>
  http(`/v1/auth/register`, {
    method: 'POST',
    data: userData,
  });

// const registerGoogle = (accessToken) => {
//   http(`/v1/auth/register`, {
//     method: 'POST',
//     googleAccessToken: accessToken,
//   });
// };

const login = (userData) =>
  http(`/v1/auth/login`, {
    method: 'POST',
    data: userData,
  });

// const loginGoogle = (accessToken) => {
//   http(`/v1/auth/register`, {
//     method: 'POST',
//     googleAccessToken: accessToken,
//   });
// };

const authService = {
  register,
  login,
  // registerGoogle,
  // loginGoogle,
};

export default authService;
