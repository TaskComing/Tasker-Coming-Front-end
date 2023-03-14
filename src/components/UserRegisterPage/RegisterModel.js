/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
// import { useGoogleLogin } from '@react-oauth/google';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Divider, Stack, Checkbox } from '@mui/material';
import { register, reset } from '../../features/slices/authSlice';
import Spinner from '../Spinner/Spinner';
import {
  Container,
  HeaderSection,
  RegisterStyle,
  Text,
  GoogleButton,
  Form,
  Input,
  LoginButton,
  SignUpButton,
} from './Register.styles';

function RegisterModel() {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { firstName, lastName, email, password, confirmPassword } = userInfo;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate('/');
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  // google
  // const handleGoogleRegister = (token) => {
  //   const accessToken = token.access_token;
  //   dispatch(registerGoogle(accessToken));
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  const onChange = (e) => {
    setUserInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  // const signup = useGoogleLogin({ onSuccess: handleGoogleRegister });
  return (
    <div>
      <Container>
        <Box
          component="span"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            p: 2,
            border: '1px solid black',
            borderRadius: '20px',
          }}
        >
          <HeaderSection>
            <RegisterStyle>Let&apos;s join us</RegisterStyle>
          </HeaderSection>
          <GoogleButton>
            <Text sx={{ color: 'white' }}>Sign up with Google</Text>
          </GoogleButton>
          <div>
            <Divider sx={{ my: 1 }}>
              <Text>Or,Sign up with your email</Text>
            </Divider>
          </div>
          <Form onSubmit={handleSubmit}>
            <label htmlFor="firstName" style={{ fontSize: '14px', fontFamily: 'bold' }}>
              First Name:
            </label>
            <Input
              type="text"
              className="form-control"
              id="outlined-basic"
              name="firstName"
              value={firstName}
              placeholder="Enter your  firstName"
              onChange={onChange}
              required
            />
            <label htmlFor="lastName" style={{ fontSize: '14px', fontFamily: 'bold' }}>
              Last Name:
            </label>
            <Input
              type="text"
              className="form-control"
              id="outlined-basic"
              name="lastName"
              value={lastName}
              placeholder="Enter your lastName"
              onChange={onChange}
              required
            />
            <label htmlFor="email" style={{ fontSize: '14px', fontFamily: 'bold' }}>
              Email address
            </label>
            <Input
              type="email"
              className="form-control"
              id="outlined-basic"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={onChange}
              required
            />
            <label htmlFor="password" style={{ fontSize: '14px', fontFamily: 'bold' }}>
              Password
            </label>
            <Input
              type="password"
              className="form-control"
              id="outlined-basic"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
              required
            />
            <label htmlFor="confirmPassword" style={{ fontSize: '14px', fontFamily: 'bold' }}>
              Confirm Password
            </label>
            <Input
              type="password"
              className="form-control"
              id="outlined-basic"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm password"
              onChange={onChange}
              required
            />
            <Stack direction="row" alignItems="center" justifyContent="start" sx={{ my: 2 }}>
              <Checkbox name="remember" label="Remember me" style={{ marginRight: '0px' }} />
              <p>Agree to terms & conditions</p>
            </Stack>

            <SignUpButton type="submit" color="#916DF9">
              Sign up
            </SignUpButton>
            <section>
              Already have an account?{' '}
              <LoginButton onClick={() => navigate('/login')}>Sign in now</LoginButton>
            </section>
          </Form>
        </Box>
      </Container>
    </div>
  );
}

export default RegisterModel;
