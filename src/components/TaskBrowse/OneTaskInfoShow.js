import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import formatTime from '../../utils/formatTime';

function OneTaskInfoShow({
  task: {
    title,
    final_price: finalPrice,
    suburb,
    state,
    address,
    create_datetime: createTime,
    due_time: dueTime,
    id,
    create_user_id: { head_img_url: avatarUrl },
    images,
  },
}) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia component="img" alt="TaskDetailCard" height="140" width="" image={images[0]} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" color="font.green">
          $ {finalPrice}
        </Typography>

        <Typography variant="body2" color="font.darkGrey">
          <LocationOnIcon /> {suburb && state ? `${suburb}, ${state}` : address}
        </Typography>

        <Typography variant="body2" color="font.darkGrey">
          <DateRangeIcon />{' '}
          {formatTime(createTime, {
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            month: 'short',
            day: 'numeric',
          })}
        </Typography>

        <Typography variant="body2" color="font.darkGrey">
          <AccessTimeIcon />{' '}
          {formatTime(dueTime, {
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            month: 'short',
            day: 'numeric',
          })}
        </Typography>
      </CardContent>
      <Stack direction="row" spacing={2}>
        <Avatar alt="Avatar" src={avatarUrl} />
      </Stack>
      <CardActions>
        <Button size="small">Share</Button>
        <Link to={`/task-details/${id}`} style={{ textDecoration: 'none' }}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

OneTaskInfoShow.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    final_price: PropTypes.number.isRequired,
    suburb: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    create_datetime: PropTypes.string.isRequired,
    due_time: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default OneTaskInfoShow;
