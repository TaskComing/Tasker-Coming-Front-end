import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from './Card';
import Category from './Category';

const homepageStyles = {
  h1: {
    color: 'font.white',
    position: 'absolute',
    top: '10%',
    left: '8%',
    width: 500,
  },
  h2: {
    marginBottom: 5,
    color: 'font.title',
  },
  subtitle1: {
    width: 500,
    margin: 'auto',
    color: 'font.darkGrey',
  },
  section3: {
    marginBottom: 10,
    color: 'font.title',
    textAlign: 'center',
    margin: 'auto',
    marginTop: '6%',
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
      </Container>
    </div>
  );
}

export default Home;
