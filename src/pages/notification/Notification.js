import { useState } from 'react';
import { Typography, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Offer from './Offers';
import Question from './Questions';

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
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
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
  const [value, setValue] = useState('offer');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
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
      <TabContext value={value}>
        <Box sx={{ '& .MuiButtonBase-root': { fontFamily: 'DM Sans' } }}>
          <StyledTabs onChange={handleChange} textColor="inherit">
            <StyledTab label="Offers" value="offer" />
            <StyledTab label="Questions" value="question" />
          </StyledTabs>
        </Box>
        <StyledDiv>
          <TabPanel value="offer">
            <Offer />
          </TabPanel>
          <TabPanel value="question">
            <Question />
          </TabPanel>
        </StyledDiv>
      </TabContext>
    </Box>
  );
}
