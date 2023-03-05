import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';
import { red } from '@mui/material/colors';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Card from './Card';
import Category from './Category';
import CardLink from './CardLink';
import CardComment from './CardComment';

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
    h3: {
      fontWeight: 1000,
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
    subtitle2: {
      fontWeight: 1200,
      width: 500,
      margin: 'auto',
      lineHeight: 1.2,
      color: '#093170',
      fontSize: 22,
    },
    section3: {
      marginBottom: 10,
      color: 'font.title',
      textAlign: 'center',
      margin: 'auto',
      marginTop: '6%',
    },
  },
};

function Home() {
  return (
    <div className="Homepage">
      <Container className="bgColor">
        {/** section 1 */}
        <Box className="section1">
          <Typography variant="h1" component="h2" sx={homepageStyles.h1}>
            90% Clients Hire Freelancer with Better Reviews
          </Typography>
          <Button
            variant="contained"
            color="success"
            className="btn"
            sx={{ bgcolor: 'button.purpleBtn', fontSize: '1.2rem' }}
          >
            Become a Tasker
          </Button>
        </Box>

        {/** section 2 */}
        <Box className="textCenter">
          <Typography variant="h2" component="h2" sx={homepageStyles.h2}>
            Everyday life made easier
          </Typography>
          <Typography variant="description" component="p" sx={homepageStyles.subtitle1}>
            When life gets busy, you don’t have to tackle it alone. Get time back for what you love
            without breaking the bank.
          </Typography>
        </Box>

        <Grid container spacing={5} marginTop={10}>
          <Grid xs={6} item>
            <img className="bg1" src="/img/bg1.png" alt="icon" />
          </Grid>

          <Grid xs={6} container spacing={3}>
            <Card />
          </Grid>
        </Grid>

        {/** section 3 */}

        <Grid container rowSpacing={5} columnSpacing={2} marginTop={5} marginBottom={10}>
          <Grid xs={12} item>
            <Typography variant="h2" component="h2" sx={homepageStyles.section3}>
              Explore by Category
            </Typography>
            <Typography
              variant="description"
              component="p"
              sx={{
                textAlign: 'center',
                margin: 'auto',
                marginTop: '4%',
                color: 'font.darkGrey',
              }}
            >
              Find the right Tasker for your job. From home cleaning to handyman services and more,
              Task Huntly has you covered.
            </Typography>
          </Grid>

          <Grid container margin={5}>
            <Category />
          </Grid>
        </Grid>
        
          {/** section 4 */}
          <Box className="textCenter">
            <Typography variant="subtitle2" component="p">
              How it works
            </Typography>
            <Typography variant="h2" component="h2">
              Follow Our Steps To Get Started
            </Typography>
            <Typography variant="subtitle1" component="p">
              By following our step you will easy to get started in Task Huntly
            </Typography>
          </Box>
          {/** section 5 */}
          <Grid container rowSpacing={10} columnSpacing={2} marginTop={5} marginBottom={10}>
            <Box>
              <CardLink />
            </Box>
          </Grid>
          {/** section 6 */}
          <Grid container rowSpacing={10} marginTop={5} marginBottom={10} className="section6">
            <Grid xs={3.9} item marginTop={0} marginLeft={3}>
              <img src="/img/homepage2/pageComment1.jpg" alt="comments" width={320} />
            </Grid>
            <Grid xs={3.9} item marginTop={8}>
              <img src="/img/homepage2/pageComment2.jpg" alt="comments" width={320} />
            </Grid>
            <Grid xs={3.9} item marginTop={12}>
              <img src="/img/homepage2/pageComment3.jpg" alt="comments" width={320} />
            </Grid>
            <Typography variant="h1" component="h3" color={red} marginTop={45}>
              Check Out
            </Typography>
            <Typography variant="h1" component="h3" color={red} marginTop={50} marginLeft={40}>
              Best comments
            </Typography>
            <Box sx={{ width: '100%' }} marginTop={8}>
              <LinearProgress />
            </Box>
          </Grid>
          {/** section 7 */}
          <Box container rowSpacing={10} marginBottom={10} marginTop={0}>
            <CardComment />
          </Box>
          <Box />
          {/** section 8 */}
          <Box>
            <Box display="flex" margin={2} justifyContent="flex-start">
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="subtitle2">Our</Typography>
                <Typography variant="subtitle1">Blog</Typography>
                <Typography variant="subtitle1">Contact</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2">Community</Typography>
                <TwitterIcon />
                <FacebookIcon />
                <GoogleIcon />
                <LinkedInIcon />
              </Box>
              <Box>
                <Typography variant="subtitle2">Business</Typography>
                <Typography variant="subtitle1">Production</Typography>
                <Typography variant="subtitle1">pricing</Typography>
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </Container>
    </div>
  );
}

export default Home;
