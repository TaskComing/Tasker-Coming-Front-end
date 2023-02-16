import { Outlet, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { CatchingPokemon } from '@mui/icons-material';

const headerStyles = {
  appBar: {
    backgroundColor: '#263959',
    position: 'static',
    padding: '0px',
    margin: '0px',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItem: {
    width: '150px',
    textAlign: 'center',
    margin: '0px',
    ':hover': {
      backgroundColor: '#3EE8B5',
      cursor: 'pointer',
      color: '#fff',
    },
  },
};

function Layout() {
  return (
    <>
      <AppBar sx={headerStyles.appBar}>
        <Toolbar>
          {/** Logo icon */}
          <IconButton size="large" edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }}>
            <CatchingPokemon />
          </IconButton>

          {/** Website title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task Huntly
          </Typography>

          {/** navigation */}
          <List sx={headerStyles.list}>
            <ListItem sx={headerStyles.listItem}>
              <Link to="/" className="link">
                Home
              </Link>
            </ListItem>
            <ListItem sx={headerStyles.listItem}>
              <Link to="/post-task" className="link">
                Post a task
              </Link>
            </ListItem>
            <ListItem sx={headerStyles.listItem}>
              <Link to="/browse-task" className="link">
                Browse tasks
              </Link>
            </ListItem>
            <ListItem sx={headerStyles.listItem}>
              <Link to="/about-team" className="link">
                About teams
              </Link>
            </ListItem>
            <ListItem sx={headerStyles.listItem}>
              <Link to="/login" className="link">
                Login
              </Link>
            </ListItem>
            <ListItem sx={headerStyles.listItem}>
              <Link to="/create-account" className="link">
                Create Account
              </Link>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}

export default Layout;
