import Paper from '@mui/material/Paper';
import './Home.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Icon } from '@mui/material';
import CardData from './CardData';

function Card() {
  return (
    <Grid container spacing={2}>
      {CardData.map((item) => (
        <Grid item xs={6} paddingY={3}>
          <Paper elevation={3} className="paper">
            <Icon className="cardIcon" sx={{ color: 'font.title' }}>
              {item.icon}
            </Icon>
            <Typography
              variant="subtitle"
              component="h2"
              color="font.title"
              sx={{ marginBottom: '10px' }}
            >
              {item.title}
            </Typography>
            <Typography variant="description" component="p" color="font.darkGrey">
              {item.description}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default Card;
