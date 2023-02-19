import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from './Card';
import Category from './Category';

/* Customize the variants  */
const theme = createTheme({
  typography: {
    h1: {
      color: '#fff',
      fontWeight: 900,
      fontSize: 64,
      position: 'absolute',
      top: '10%',
      left: '8%',
      width: 500,
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 900,
      marginBottom: 10,
      color: '#263959',
    },
    subtitle1: {
      fontWeight: 500,
      width: 500,
      margin: 'auto',
      lineHeight: 1.2,
      color: '#263959',
    },
  },
});

function Home() {
  return (
    <div className="Homepage">
      <Container className="bgColor">
        <ThemeProvider theme={theme}>
          {/** section 1 */}
          <Box className="section1">
            <Typography variant="h1" component="h2">
              90% Clients Hire Freelancer with Better Reviews
            </Typography>
            <Button variant="contained" color="success" className="btn">
              Become a Tasker
            </Button>
          </Box>

          {/** section 2 */}
          <Box className="textCenter">
            <Typography variant="h2" component="h2">
              Everyday life made easier
            </Typography>
            <Typography variant="subtitle1" component="p">
              When life gets busy, you don’t have to tackle it alone. Get time back for what you
              love without breaking the bank.
            </Typography>
          </Box>

          <Grid container spacing={5} marginTop={10}>
            <Grid xs={6} item>
              <img className="bg1" src="/img/bg1.png" alt="icon" />
            </Grid>

            <Grid xs={6} item container spacing={3}>
              <Card />
            </Grid>
          </Grid>

          {/** section 3 */}

          <Grid container rowSpacing={5} columnSpacing={2} marginTop={5} marginBottom={10}>
            <Grid xs={12} item>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  textAlign: 'center',
                  margin: 'auto',
                  marginTop: '6%',
                }}
              >
                Explore by Category
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                sx={{
                  textAlign: 'center',
                  margin: 'auto',
                  marginTop: '4%',
                }}
              >
                Find the right Tasker for your job. From home cleaning to handyman services and
                more, Task Huntly has you covered.
              </Typography>
            </Grid>

            <Grid container margin={5}>
              <Category />
            </Grid>
          </Grid>
        </ThemeProvider>
      </Container>
    </div>
  );
}

export default Home;
