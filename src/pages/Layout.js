/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/slices/authSlice';
import LoginModal from '../components/UserLoginPage/LoginModal';
import Logo from '../assets/images/logo1.png';

const headerStyles = {
  appBar: {
    position: 'static',
    padding: '0px',
    margin: '0px',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '60px',
    padding: '0px',
  },
  listItem: {
    width: '180px',
    height: '60px',
    ':hover': {
      backgroundColor: 'button.greenBtn',
      cursor: 'pointer',
    },
  },
};

function Layout() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };
  return (
    <>
      <AppBar sx={headerStyles.appBar}>
        <Toolbar>
          {/** Logo icon */}
          <img src={Logo} alt="logo1" border="0" width="25px" />

          {/** Website title */}
          <Typography
            variant="logo"
            component="div"
            sx={{ flexGrow: 1, color: 'font.green', marginLeft: '10px' }}
          >
            Tasker Coming
          </Typography>

          {/** navigation */}
          <List sx={headerStyles.list}>
            {user ? (
              <>
                <ListItem sx={headerStyles.listItem}>
                  <Link to="/" className="link">
                    <Typography variant="subtitle">Home</Typography>
                  </Link>
                </ListItem>
                <ListItem sx={headerStyles.listItem}>
                  <Link to="/post-task" className="link">
                    <Typography variant="subtitle">Post a task</Typography>
                  </Link>
                </ListItem>
                <ListItem sx={headerStyles.listItem}>
                  <Link to="/browse-task" className="link">
                    <Typography variant="subtitle">Browse tasks</Typography>
                  </Link>
                </ListItem>
                <ListItem sx={headerStyles.listItem}>
                  <Link to="/about-team" className="link">
                    <Typography variant="subtitle">About teams</Typography>
                  </Link>
                </ListItem>
                <ListItem sx={headerStyles.listItem}>
                  <Link to="/" className="link" onClick={onLogout}>
                    <Typography variant="subtitle">logout</Typography>
                    {/* <LoginModal isLogin={!isLogin} setIsLogin={setIsLogin} /> */}
                  </Link>
                </ListItem>
              </>
            ) : (
              <>
                <ListItem sx={headerStyles.listItem}>
                  <Link to="/" className="link">
                    <Typography variant="subtitle">Home</Typography>
                  </Link>
                </ListItem>
                <ListItem sx={headerStyles.listItem}>
                  <Link to="/post-task" className="link">
                    <Typography variant="subtitle">Post a task</Typography>
                  </Link>
                </ListItem>
                <ListItem sx={headerStyles.listItem}>
                  <Link to="/browse-task" className="link">
                    <Typography variant="subtitle">Browse tasks</Typography>
                  </Link>
                </ListItem>
                <ListItem sx={headerStyles.listItem}>
                  <Link to="/about-team" className="link">
                    <Typography variant="subtitle">About teams</Typography>
                  </Link>
                </ListItem>
                <ListItem sx={headerStyles.listItem}>
                  <Link to="/login" className="link">
                    <Typography variant="subtitle">Login</Typography>
                  </Link>
                </ListItem>
                <ListItem sx={headerStyles.listItem}>
                  <Link to="/create-account" className="link">
                    <Typography variant="subtitle">Create Account</Typography>
                  </Link>
                </ListItem>
              </>
            )}
          </List>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}

export default Layout;
