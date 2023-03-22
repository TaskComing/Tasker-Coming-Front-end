/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Divider, Link, Stack, Checkbox } from '@mui/material';
import { login } from '../../features/slices/authSlice';
import Spinner from '../Spinner/Spinner';
import star from '../../assets/LoginPageImages/star.png';
import {
  Container,
  Image,
  HeaderSection,
  SigninStyle,
  Text,
  // GoogleButton,
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
  const { email, password } = userInfo;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate('/dashboard');
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

  // form onsubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    const userDate = {
      email,
      password,
    };
    dispatch(login(userDate));
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
            borderRadius: '20px',
          }}
        >
          <HeaderSection>
            <Image src={star} alt="img-star" />
            <SigninStyle>Sign in</SigninStyle>
          </HeaderSection>
          <GoogleLogin
            clientId={process.env.GOOGLE_CLIENT_ID}
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
          />
          <div>
            <Divider sx={{ my: 1 }}>
              <Text>Or,Sign in with your email</Text>
            </Divider>
          </div>
          <Form onSubmit={handleSubmit}>
            <p style={{ fontSize: '14px', fontFamily: 'bold' }}>Email address</p>
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
            <p style={{ fontSize: '14px', fontFamily: 'bold' }}>Password</p>
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
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ my: 2 }}
            >
              <Checkbox name="remember" label="Remember me" style={{ marginRight: '0px' }} />
              <p>Keep me sign in</p>
              <Link variant="subtitle2" underline="hover">
                Forgot password?
              </Link>
            </Stack>

            <SigninButton type="submit" color="#916DF9">
              Login
            </SigninButton>
            <section>
              Don&apos;t have an account?{' '}
              <RegisterButton onClick={() => navigate('/create-account')}>
                Sign up now
              </RegisterButton>
            </section>
          </Form>
        </Box>
      </Container>
    </div>
  );
}

// import PropTypes from 'prop-types';

// function LoginModal({showModal,setShowModal}) {
//  return ()
// }

// LoginModal.propTypes = {
//   showModal: PropTypes.bool,
//   setShowModal: PropTypes.func,
// };

export default LoginModal;
