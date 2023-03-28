import React from 'react';
import { Helmet } from 'react-helmet';
import LoginModal from '../components/UserLoginPage/LoginModal';

function Login() {
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <LoginModal />
    </>
  );
}

export default Login;
