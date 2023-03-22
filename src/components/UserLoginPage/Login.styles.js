// mui
import { styled } from '@mui/material/styles';
/**
 * styled-components
 */
import Cstyled from 'styled-components';
import Theme from '../../Theme/Theme';

export const Layout = Cstyled.div`
  display: flex;
  align-items: center;
`;

export const Container = Cstyled.div``;

export const HeaderSection = Cstyled.section`
  display: flex;
  align-items: flex-start;
`;

export const Image = Cstyled.img`
  display: flex;
  width: 40px;
  height: 40px;
`;

export const SigninStyle = Cstyled.text`
  margin: 0 auto;
  font-size: 30px;
  font-weight: bold;
`;

export const Text = Cstyled.text`
  font-size: '10px';
  color: #183b56;
  font-family: 'Times New Roman', Times, serif;
`;

export const GoogleButton = Cstyled.button`
  background-color: #916df9;
  height: 55px;
  width: 360px;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Form = Cstyled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const Input = Cstyled.input`
  width: 360px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #c3cad9;
`;

export const SigninButton = Cstyled.button`
  background-color: #916df9;
  height: 55px;
  width: 360px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: ${Theme.palette.button.purpleBtn};
  color: ${Theme.palette.font.green};
`;

// export const RegisterButton = Cstyled.span`
//   border: none;
//   cursor: pointer;
//   text-decoration: underline;
//   font-size: 16px;
//   color: ${Theme.palette.font.green};
// `;

export const RegisterButton = styled('span')(({ theme }) => ({
  backgroundColor: theme.palette.button.purpleBtn,
  color: theme.palette.font.orange,
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'underline',
  fontSize: '16px',
}));
