import { styled, createTheme, ThemeProvider } from '@mui/material';
import * as React from 'react';

import ProfileSider from '../components/ProfileSider';

import ProfileSettingBox from '../components/ProfileSettingBox';
import Notification from './notification/Notification';
import TaskDashboard from '../components/TaskDashBoard/TaskDashboard';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#f5f5f5',
      sider: '#E6EFEC',
    },
    secondary: {
      main: '#4C535F',
    },
  },
  typography: {
    h1: {
      color: '#353535',
      fontWeight: 600,
      fontSize: '30px',
      lineHeight: '45px',
    },
    h2: {
      color: '#4C535F',
      fontWeight: 700,
      fontSize: '36px',
      lineHeight: '54px',
    },
  },
});

const MainContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  padding: '102px 53px 138px 63px',
  gap: '57px',
}));

function EditProfile() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={customTheme}>
      <MainContainer>
        <ProfileSider value={value} handleChange={handleChange} />
        {value === 0 && <TaskDashboard />}
        {value === 1 && <Notification />}
        {value === 2 && <ProfileSettingBox />}
      </MainContainer>
    </ThemeProvider>
  );
}

export default EditProfile;
