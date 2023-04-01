import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      default: '#f5f5f5',
      main: '#263959',
      lightBlueBg: '#f4f8fd',
      lightGreenBg: '#E6EFEC',
      lightGray: '#c3cad9',
    },
    button: {
      greenBtn: '#3EE8B5',
      yellowBtn: '#FFDDA9',
      purpleBtn: '#916DF9',
      pinkBtn: '#FD346E',
      greyBtn: '#A4A3A1',
      blueBtn: '#1565D8',
      whiteBtn: '#fff',
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
      blue: '#1565D8',
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 320,
      tablet: 576,
      laptop: 768,
      largeLaptop: 1024,
      desktop: 1440,
      largeDesktop: 1920,
      wideScreen: 2560,
    },
    miniMobile: '0px',
    mobile: '320px',
    tablet: '576px',
    laptop: '768px',
    largeLaptop: '1024px',
    desktop: '1440px',
    largeDesktop: '1920px',
    wideScreen: '2560px',
  },
});

export default theme;
