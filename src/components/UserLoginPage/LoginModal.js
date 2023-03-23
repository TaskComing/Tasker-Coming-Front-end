/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Divider, Link, Stack, Checkbox } from '@mui/material';
import theme from '../../Theme/Theme';
import { login } from '../../features/slices/authSlice';
import Spinner from '../Spinner/Spinner';
import star from '../../assets/LoginPageImages/star.png';
import {
  Container,
  Image,
  HeaderSection,
  SigninStyle,
  GoogleButton,
  Text,
  Form,
  Input,
  RegisterButton,
  SigninButton,
} from './Login.styles';

function LoginModal() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const { email, password } = userInfo;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate('/profile');
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  const responseGoogle = async (response) => {
    try {
      const res = await axios.post('http://localhost:8080/v1/auth/google', {
        tokenId: response.tokenId,
      });
      console.log('Google login response:', res);
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };

  const onChange = (e) => {
    setUserInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = (values) => {
    const errors = {};
    const regex = '^(?=\\S*[a-zA-Z])(?=\\S*[0-9#!"$%&\'()*+,-./:;<=>?@\\[\\]^_`{|}~]).{8,}$';

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!values.email.match(regex)) {
      errors.email = 'This is not a valid email format!';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be more that 8 characters';
    } else if (values.password.length > 15) {
      errors.password = 'Password cannot exceed more than 10 characters';
    }
    return errors;
  };

  // form onsubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validateResult = validate(userInfo);
    if (Object.keys(validateResult).length === 0) {
      setFormErrors(validateResult);
    }
    const userDate = {
      email,
      password,
    };
    dispatch(login(userDate));
  };

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
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
            maxWidth: '600px',
          }}
        >
          <HeaderSection>
            <Image src={star} alt="img-star" />
            <SigninStyle>Sign in</SigninStyle>
          </HeaderSection>
          <GoogleLogin
            onSuccess={responseMessage}
            onError={errorMessage}
            buttonText="Login with Google"
            style={{ width: '60%' }}
          />
          <div>
            <Divider sx={{ my: 1 }}>
              <Text>Or,Sign in with your email</Text>
            </Divider>
          </div>
          <Form onSubmit={handleSubmit}>
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
            <p style={{ fontSize: '10px', color: 'red' }}>{formErrors.email}</p>
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
            <p style={{ fontSize: '10px', color: 'red' }}>{formErrors.password}</p>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ my: 2, marginRight: '50px' }}
            >
              <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Checkbox name="remember" label="Remember me" style={{ marginRight: '0px' }} />
                <p>Keep me sign in</p>
              </span>
              <Link variant="subtitle1" underline="hover" color={`${theme.palette.font.darkGrey}`}>
                Forgot password?
              </Link>
            </Stack>
            <SigninButton type="submit" color="#916DF9">
              Login
            </SigninButton>
            <section
              style={{ display: 'flex', justifyContent: 'space-between', marginRight: '60px' }}
            >
              Don&apos;t have an account?{' '}
              <RegisterButton onClick={() => navigate('/create-account')}>
                Register Now
              </RegisterButton>
            </section>
          </Form>
        </Box>
      </Container>
    </div>
  );
}

export default LoginModal;
