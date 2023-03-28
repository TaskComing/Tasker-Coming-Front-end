import { useEffect, useState } from 'react';
import { Typography, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import http from '../../utils/axios';

import NotificationList from './NotificationList';

const StyledTabs = styled(TabList)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },

  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: 'rgba(0, 0, 0, 0.85)',
  '&:hover': {
    color: '#40a9ff',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#1890ff',
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

const StyledDiv = styled('div')(() => ({
  marginTop: '20px',
  border: '1px solid #eee',
  width: '80%',
  borderRadius: '40px',
  backgroundColor: 'white',
  fontFamily: 'Poppins',

  '& .MuiTypography-root': {
    fontFamily: 'Poppins',
  },
  '& .MuiAvatar-root': {
    width: '51px',
    height: '51px',
  },
  '& .MuiBox-root': {
    width: '100%',
    display: 'grid',
    alignContent: 'center',
    gridTemplateColumns: '1fr 3fr 1fr',
    wordBreak: 'break-word',
    '& div': {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '20px',
    },
    '& div:last-child': {
      color: 'grey',
    },
  },
}));

export default function Notification() {
  const [tabValue, setTabValue] = useState('task');
  const [notifications, setNotifications] = useState([]);

  const getNotification = async () => {
    const response = await http(`/v1/notifications`, {
      method: 'GET',
      data: {
        userId: '6411040776987b7e139eeeb4',
      },
    });
    setNotifications(response.data);
  };
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    getNotification();
  }, []);

  return (
    <Box sx={{ width: '80%', typography: 'body1' }}>
      <Typography
        variant="h2"
        sx={{
          marginBottom: '20px',
          fontFamily: 'Poppins',
          '& .MuiTabList-indicator': { bgcolor: 'red' },
        }}
      >
        Notifications
      </Typography>
      <TabContext value={tabValue}>
        <Box sx={{ '& .MuiButtonBase-root': { fontFamily: 'DM Sans' } }}>
          <StyledTabs onChange={handleChange} textColor="inherit">
            <StyledTab label="Tasks" value="task" />
            <StyledTab label="Offers" value="offer" />
            <StyledTab label="Comments" value="comment" />
          </StyledTabs>
        </Box>
        <StyledDiv>
          <TabPanel value="task">
            <NotificationList
              data={notifications.filter((notification) => notification.type === 'task')}
            />
          </TabPanel>
          <TabPanel value="offer">
            <NotificationList
              data={notifications.filter((notification) => notification.type === 'offer')}
            />
          </TabPanel>
          <TabPanel value="comment">
            <NotificationList
              data={notifications.filter((notification) => notification.type === 'comment')}
            />
          </TabPanel>
        </StyledDiv>
      </TabContext>
    </Box>
  );
}
