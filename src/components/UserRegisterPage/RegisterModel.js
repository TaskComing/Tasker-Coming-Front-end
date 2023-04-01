/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Divider, Checkbox } from '@mui/material';
import { register, reset } from '../../features/slices/authSlice';
import Spinner from '../Spinner/Spinner';
import {
  Container,
  MainHeading,
  Text,
  Button,
  Section,
  TextWrapper,
} from '../../Theme/globalStyles';
import { HeaderSection, GoogleButton, Form, Input } from './Register.styles';

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
      navigate('/login');
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

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
            borderRadius: '2rem',
          }}
        >
          <HeaderSection>
            <MainHeading>Let&apos;s join us</MainHeading>
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
            <Text>First Name:</Text>
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
            <Text>Last Name:</Text>
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
            <Text>Email address</Text>
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
            <Text>Password</Text>
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
            <Text>Confirm Password</Text>
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
            <TextWrapper>
              <Checkbox name="remember" label="Remember me" />
              <Text>Agree to terms & conditions</Text>
            </TextWrapper>

            <Button type="submit" style={{ fontSize: '1.8rem' }}>
              Sign up
            </Button>
            <Section style={{ justifyContent: 'space-between', marginRight: '60px' }}>
              Already have an account?{' '}
              <Button onClick={() => navigate('/login')}>Sign in now</Button>
            </Section>
          </Form>
        </Box>
      </Container>
    </div>
  );
}

export default RegisterModel;
