/* eslint-disable no-underscore-dangle */
import List from '@mui/material/List';
import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import http from '../../utils/axios';

const ContactContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '33px',
  marginLeft: '89px',
}));

const AvatarAndNameContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '9px',
}));

const AcceptedButton = styled(Button)(() => ({
  position: 'absolute',
  top: '10%',
  right: '5%',
  fontSize: '1.1rem',
  lineHeight: '2rem',
  backgroundColor: '#3EE8B5',
  color: '#000',
  fontWeight: '400',
  borderRadius: '15px',
  // padding: '18px 11px',
  '&:hover': {
    backgroundColor: '#3EE8B5',
  },
}));

const RejectedButton = styled(Button)(() => ({
  position: 'absolute',
  top: '10%',
  right: '5%',
  fontSize: '1.1rem',
  lineHeight: '2rem',
  backgroundColor: 'darkgray',
  color: '#000',
  fontWeight: '400',
  borderRadius: '15px',
  // padding: '18px 11px',
  '&:hover': {
    backgroundColor: 'grey',
  },
}));

function OfferTab({ task, setTask }) {
  const onAcceptBtnClick = async (event) => {
    const response = await http(`/v1/offers/accept/${event.target.name}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        offerIds: task.offers.map((offer) => offer._id),
        taskId: task.id,
      }),
    });
    setTask(response.data);
  };
  const onCompleteBtnClick = async (event) => {
    const response = await http(`/v1/offers/accept/${event.target.name}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        offerIds: task.offers.map((offer) => offer._id),
        taskId: task.id,
      }),
    });
    setTask(response.data);
  };

  const offerStatus = (offer) => {
    switch (offer.status) {
      case 'accepted':
        return (
          <>
            <RejectedButton
              variant="contained"
              size="large"
              name={offer._id}
              onClick={onAcceptBtnClick}
            >
              Accepted
            </RejectedButton>
            <AcceptedButton
              variant="contained"
              size="large"
              name={offer._id}
              onClick={onCompleteBtnClick}
              sx={{ mt: '50px' }}
            >
              Complete
            </AcceptedButton>
          </>
        );
      case 'rejected':
        return (
          <RejectedButton
            variant="contained"
            size="large"
            name={offer._id}
            onClick={onAcceptBtnClick}
          >
            Rejected
          </RejectedButton>
        );
      default:
        return (
          <AcceptedButton
            variant="contained"
            size="large"
            name={offer._id}
            onClick={onAcceptBtnClick}
          >
            Accept
          </AcceptedButton>
        );
    }
  };

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', marginTop: '65px', paddingTop: 0 }}>
      {task.offers.map((offer) => (
        <ListItem
          key={offer._id}
          alignItems="flex-start"
          sx={{ flexDirection: 'column', position: 'relative' }}
        >
          <AvatarAndNameContainer>
            <ListItemAvatar sx={{ minWidth: '40px' }}>
              <Avatar
                alt={offer.name}
                src={offer.create_user_id.head_img_url}
                sx={{ width: '80px', height: '80px', fontSize: '32px' }}
              />
            </ListItemAvatar>
            <ListItemText primary={<span style={{ fontSize: '30px' }}>{offer.name}</span>} />
          </AvatarAndNameContainer>
          <ContactContainer>
            <Typography
              sx={{ display: 'flex', gap: '7px', alignItems: 'center' }}
              component="span"
              variant="body2"
              color="text.primary"
              style={{ fontSize: '1.5rem' }}
            >
              <EmailIcon sx={{ height: '30px', width: '30px', color: '#D9D9D9' }} />
              {offer.email}
            </Typography>
            <Typography
              sx={{ display: 'flex', gap: '7px', alignItems: 'center' }}
              component="span"
              variant="body2"
              color="text.primary"
              style={{ fontSize: '1.5rem' }}
            >
              <PhoneIcon sx={{ height: '30px', width: '30px', color: '#D9D9D9' }} />
              {offer.number}
            </Typography>
            {/* <PhoneIcon sx={{ height: '30px', width: '30px' }} />
                {phone} */}
          </ContactContainer>
          {offerStatus(offer)}
          <Box
            sx={{
              width: '100%',
              height: '100px',
              backgroundColor: '#F5F5F5',
              borderRadius: '15px',
              padding: '20px 30px',
            }}
          >
            <Typography
              sx={{ display: 'flex', gap: '7px', alignItems: 'center', fontSize: '15px' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {offer.description}
            </Typography>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}

OfferTab.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    budget: PropTypes.number.isRequired,
    suburb: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    offers: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        create_user_id: PropTypes.shape({
          _id: PropTypes.string.isRequired,
          firstName: PropTypes.string.isRequired,
          lastName: PropTypes.string.isRequired,
          email: PropTypes.string.isRequired,
          phone: PropTypes.string.isRequired,
        }).isRequired,
        update_datetime: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    create_datetime: PropTypes.string.isRequired,
  }).isRequired,
  setTask: PropTypes.func.isRequired,
};

export default OfferTab;
