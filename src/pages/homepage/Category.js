import { IconButton, Paper, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import CategoryData from './CategoryData';

function Category() {
  return (
    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
      {CategoryData.map((item) => (
        <Grid item xs={4} paddingY={3}>
          <Paper
            elevation={3}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '40px',
              borderRadius: '20px',
              ':hover': {
                backgroundColor: '#263959',
                cursor: 'pointer',
                color: 'font.white',
              },
            }}
          >
            <IconButton aria-label="cleaning" size="large" sx={{ color: 'font.orange' }}>
              {item.icon}
            </IconButton>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '10px',
                textAlign: 'center',
              }}
            >
              <Typography
                variant="subtitle"
                component="p"
                /* color="font.title" */
              >
                {item.title}
              </Typography>
              <Typography
                variant="description"
                component="p"
                marginY={1} /* color="font.darkGrey" */
              >
                {item.num}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default Category;
