import styled from 'styled-components';
import theme from '../../Theme/Theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderSection = styled.section`
  display: flex;
  align-items: flex-start;
`;

export const RegisterStyle = styled.text`
  margin: 0 auto;
  font-size: 30px;
  font-weight: bold;
`;

export const Text = styled.text`
  font-size: '10px';
  color: ${theme.palette.font.title};
`;

export const GoogleButton = styled.button`
  background-color: #916df9;
  height: 55px;
  width: 100%;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 560px;
`;

export const Input = styled.input`
  max-width: 560px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid ${theme.palette.primary.lightGray};
`;

export const SignUpButton = styled.button`
  background-color: ${theme.palette.button.purpleBtn};
  height: 55px;
  max-width: 560px;
  border-radius: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;
export const LoginButton = styled.span`
  background-color: ${theme.palette.button.whiteBtn};
  border: none;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  color: ${theme.palette.font.blue};
  &:hover {
    color: ${theme.palette.font.black};
    text-decoration: underline;
  }
`;
