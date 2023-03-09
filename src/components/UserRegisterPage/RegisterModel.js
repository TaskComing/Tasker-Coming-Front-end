/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Divider, Stack, Checkbox } from '@mui/material';
import { register, reset } from '../../features/slices/authSlice';
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
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { name, email, password, confirmPassword } = userInfo;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (isSuccess || user) {
      navigate('/');
    }
    dispatch(reset());
  }, [user, isLoading, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) {
    return `Loading...`;
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log('Passwords do not match');
    } else {
      const userData = {
        name,
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

  // button submit
  const handleButtonSubmit = async (e) => {
    e.preventDefault();
    navigate('/dashboard', { replace: true });
  };

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
            <label htmlFor="name" style={{ fontSize: '14px', fontFamily: 'bold' }} />
            Your name
            <Input
              type="name"
              className="form-control"
              id="outlined-basic"
              name="name"
              value={userInfo.name}
              placeholder="Enter name"
              onChange={onChange}
              required
            />
            <p style={{ fontSize: '14px', fontFamily: 'bold' }}>Email address</p>
            <Input
              type="email"
              className="form-control"
              id="outlined-basic"
              name="email"
              value={userInfo.email}
              placeholder="Enter email"
              onChange={onChange}
              required
            />
            <p style={{ fontSize: '14px', fontFamily: 'bold' }}>Password</p>
            <Input
              type="password"
              className="form-control"
              id="outlined-basic"
              name="password"
              value={userInfo.password}
              placeholder="Enter password"
              onChange={onChange}
              required
            />
            <p style={{ fontSize: '14px', fontFamily: 'bold' }}>Confirm Password</p>
            <Input
              type="password2"
              className="form-control"
              id="outlined-basic"
              name="confirmPassword"
              value={userInfo.password2}
              placeholder="Confirm password"
              onChange={onChange}
              required
            />
          </Form>
          <Stack direction="row" alignItems="center" justifyContent="start" sx={{ my: 2 }}>
            <Checkbox name="remember" label="Remember me" style={{ marginRight: '0px' }} />
            <p>Agree to terms & conditions</p>
          </Stack>

          <SignUpButton type="submit" color="#916DF9" onClick={handleButtonSubmit}>
            Sign up
          </SignUpButton>
          <section>
            Already have an account?{' '}
            <LoginButton onClick={() => navigate('/login')}>Sign in now</LoginButton>
          </section>
        </Box>
      </Container>
    </div>
  );
}

export default RegisterModel;
