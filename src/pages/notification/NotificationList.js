import {
  List,
  ListItemAvatar,
  ListItem,
  Avatar,
  ListItemText,
  Box,
  Typography,
} from '@mui/material';
// import { fontSize } from '@mui/system';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatTime from '../../utils/formatTime';

function NotificationList({ data }) {
  return (
    <List>
      {data.map((item) => (
        <ListItem key={item.id}>
          <ListItemAvatar>
            <Avatar alt="" src={item.userInfo.head_img_url} />
          </ListItemAvatar>
          <Box>
            <ListItemText>
              <Typography
                sx={{ fontSize: '12px' }}
              >{`${item.userInfo.firstName} ${item.userInfo.lastName}`}</Typography>
            </ListItemText>
            <Link to={item.click_url} style={{ textDecoration: 'none' }}>
              <ListItemText>
                <Typography sx={{ fontSize: '16px' }}>{item.text}</Typography>
              </ListItemText>
            </Link>
            <ListItemText>
              <Typography sx={{ fontSize: '1.2rem' }}>{formatTime(item.updatedAt)}</Typography>
            </ListItemText>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}

NotificationList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NotificationList;
