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
            <Icon className="cardIcon">{item.icon}</Icon>
            <Typography variant="h6" component="h2">
              {item.title}
            </Typography>
            <Typography variant="body2" component="p">
              {item.description}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default Card;
