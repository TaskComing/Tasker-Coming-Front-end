/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Divider, Stack, Checkbox } from '@mui/material';
// import { register, reset } from '../../features/slices/authSlice';
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
  const [showRegisterModal, setShowRegisterModal] = useState(true);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = userInfo;

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
  const handleRegisterChange = (e) => {
    e.preventDefault();

    // if (password !== password2) {
    //   console.log('Passwords do not match');
    // } else {
    //   const userData = {
    //     name,
    //     email,
    //     password,
    //   };

    //   dispatch(register(userData));
    // }
    setShowRegisterModal(true);
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
    <>
      {/* <button type="button" onClick={() => setShowRegisterModal(true)}>
        Register
      </button> */}
      <div>
        {showRegisterModal && (
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
              <Form onSubmit={handleRegisterChange}>
                <p style={{ fontSize: '14px', fontFamily: 'bold' }}>Your name</p>
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
                  name="password2"
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
        )}
      </div>
    </>
  );
}

export default RegisterModel;
