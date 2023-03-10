import * as React from 'react';
import List from '@mui/material/List';
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
import Input from '@mui/material/Input';

const OfferData = [
  {
    id: '0',
    userName: 'Owen',
    avatar: 'xx',
    email: 'Owen@gmail.com',
    phone: '+61 012345678',
  },
  {
    id: '1',
    userName: 'Alan',
    avatar: 'xx',
    email: 'Alan@gmail.com',
    phone: '+61 012345678',
  },
];

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

function OfferTab() {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', marginTop: '65px', paddingTop: 0 }}>
      {OfferData.map(({ id, userName, avatar, email, phone }) => (
        <ListItem
          key={id}
          alignItems="flex-start"
          sx={{ flexDirection: 'column', position: 'relative' }}
        >
          <AvatarAndNameContainer>
            <ListItemAvatar sx={{ minWidth: '40px' }}>
              <Avatar
                alt={userName}
                src={avatar}
                sx={{ width: '80px', height: '80px', fontSize: '32px' }}
              />
            </ListItemAvatar>
            <ListItemText primary={<span style={{ fontSize: '30px' }}>{userName}</span>} />
          </AvatarAndNameContainer>
          <ContactContainer>
            <Typography
              sx={{ display: 'flex', gap: '7px', alignItems: 'center' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              <EmailIcon sx={{ height: '30px', width: '30px', color: '#D9D9D9' }} />
              {email}
            </Typography>
            <Typography
              sx={{ display: 'flex', gap: '7px', alignItems: 'center' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              <PhoneIcon sx={{ height: '30px', width: '30px', color: '#D9D9D9' }} />
              {phone}
            </Typography>
            {/* <PhoneIcon sx={{ height: '30px', width: '30px' }} />
                {phone} */}
          </ContactContainer>
          <AcceptedButton variant="contained" size="large">
            Accepted
          </AcceptedButton>
          <Box
            sx={{
              width: '100%',
            }}
          >
            <Input
              placeholder="Some contents..."
              fullWidth
              disableUnderline
              multiline
              rows={5}
              sx={{
                marginTop: '30px',
                backgroundColor: '#EEEEEE',
                color: '#000000',
                borderRadius: '20px',
                paddingLeft: '2.5rem',
                paddingTop: '1rem',
              }}
            />
          </Box>
        </ListItem>
      ))}
    </List>
  );
}

export default OfferTab;
