import { IconButton, Paper, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import CategoryData from './CategoryData';

function Category() {
  return (
    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
      {CategoryData.map((item, i) => (
        <Grid item xs={4} paddingY={3} key={i}>
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
                color: '#fff',
              },
            }}
          >
            <IconButton aria-label="cleaning" size="large">
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
              <Typography variant="h6" component="p">
                {item.title}
              </Typography>
              <Typography variant="subtitle2" component="p" marginY={1}>
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
