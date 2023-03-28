import React from 'react';
import { Helmet } from 'react-helmet';
import RegisterModel from '../components/UserRegisterPage/RegisterModel';

function CreateAccount() {
  return (
    <div>
      <Helmet>
        <title>Create account</title>
        <meta name="description" content="Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <RegisterModel />
    </div>
  );
}

export default CreateAccount;
