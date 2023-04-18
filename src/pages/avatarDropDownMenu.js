import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Typography from '@mui/material/Typography';
import { logout, reset } from '../features/slices/authSlice';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { firstName, lastName, email, head_img_url: avatar } = user.user;
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  // const [profileSiderValue, setProfileSiderValue] = React.useState(0);
  // const handleChange = (event, newValue) => {
  //   setProfileSiderValue(newValue);
  // };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar alt="avatar" src={avatar} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 0.8,
            '&': {
              borderRadius: '0px',
              border: '1px solid #979797',
            },
            '& .MuiMenuItem-root': {
              width: 220,
              mt: 0.5,
            },
            '& .MuiDivider-root': {
              margin: 1,
            },
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 20,
              width: 15,
              height: 15,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
            '& p': {
              color: '#B8B8B8',
              ml: 2,
              paddingBottom: 1,
            },
            '& chevronRightIcon': {
              display: 'block',
              position: 'absolute',
              right: 1,
            },
            '& a': {
              textDecoration: 'none',
              color: 'black',
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          onClick={handleClose}
          style={{ fontSize: '2rem' }}
        >{`${firstName} ${lastName}`}</MenuItem>
        <p style={{ fontSize: '1.5rem' }}>{email}</p>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Link to="/profile" state={{ siderValue: 0 }}>
            <Typography variant="subtitle">My Task Dashboard</Typography>
          </Link>
          <ChevronRightIcon className="chevronRightIcon" />
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Link to="/profile" state={{ siderValue: 1 }}>
            <Typography variant="subtitle">Notifications</Typography>
          </Link>
          <ChevronRightIcon className="chevronRightIcon" />
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Link to="/profile" state={{ siderValue: 2 }}>
            <Typography variant="subtitle">Settings</Typography>
          </Link>
          <ChevronRightIcon className="chevronRightIcon" />
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Link to="/" onClick={onLogout}>
            <Typography variant="subtitle">Logout</Typography>
          </Link>
          <ChevronRightIcon className="chevronRightIcon" />
        </MenuItem>
      </Menu>
    </>
  );
}
