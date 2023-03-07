/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Divider, Link, Stack, Checkbox } from '@mui/material';
import star from '../../assets/LoginPageImages/star.png';
// import { login, reset } from '../../features/slices/authSlice';

import {
  Container,
  Image,
  HeaderSection,
  SigninStyle,
  Text,
  GoogleButton,
  Form,
  Input,
  RegisterButton,
  SigninButton,
} from './Login.styles';

function LoginModal() {
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userInfo;

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (isError) {
  //     console.log(message);
  //   }
  //   if (isSuccess || user) {
  //     navigate('/');
  //   }
  //   dispatch(reset());
  // }, [user, isLoading, isError, isSuccess, message, navigate, dispatch]);

  // if (isLoading) {
  //   return `Loading...`;
  // }

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

  // form onsubmit
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    // dispatch(login(userData));
    setShowLoginModal(true);
  };

  return (
    <>
      {/* <button type="button" onClick={() => setShowModal(true)}>
        sign in
      </button> */}
      <div>
        {showLoginModal && (
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
              <GoogleButton>
                <Text sx={{ color: 'white' }}>Sign in with Google</Text>
              </GoogleButton>
              <div>
                <Divider sx={{ my: 1 }}>
                  <Text>Or,Sign in with your email</Text>
                </Divider>
              </div>
              <Form onSubmit={handleLoginSubmit}>
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
              </Form>
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

              <SigninButton type="submit" color="#916DF9" onClick={handleButtonSubmit}>
                Login
              </SigninButton>
              <section>
                Don&apos;t have an account?{' '}
                <RegisterButton onClick={() => navigate('/create-account')}>
                  Sign up now
                </RegisterButton>
              </section>
            </Box>
          </Container>
        )}
      </div>
    </>
  );
}
// LoginModal.propTypes = {
//   showModal: PropTypes.bool,
//   setShowModal: PropTypes.func,
// };

export default LoginModal;
