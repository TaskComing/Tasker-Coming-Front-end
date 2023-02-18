import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#263959',
      lightBlueBg: '#f4f8fd',
      lightGreenBg: '#E6EFEC',
    },
    button: {
      greenBtn: '#3EE8B5',
      yellowBtn: '#FFDDA9',
      purpleBtn: '#916DF9',
      pinkBtn: '#FD346E',
      greyBtn: '#A4A3A1',
      blueBtn: '#1565D8',
    },
    font: {
      green: '#3EE8B5',
      white: '#fff',
      black: '#000',
      title: '#183B56',
      orange: '#F9AD13',
      darkGrey: '#5A7184',
      grey: '#999999',
      pink: '#FD346E',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    h1: {
      fontSize: '64px',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '48px',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '36px',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: '28px',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    logo: {
      fontSize: '28px',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    subtitle: {
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    description: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.2,
    },
  },
});

export default Theme;
