import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Typography } from '@mui/material';
import Posted from './Posted';
import Accepted from './Accepted';
import Following from './Following';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '80%', typography: 'body1' /* , bgcolor: 'green' */ }}>
      <Typography variant="h2" sx={{ marginBottom: '20px' }}>
        My Task Dashboard
      </Typography>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" textColor="inherit">
            <Tab label="Posted" value="1" />
            <Tab label="Accepted" value="2" />
            <Tab label="Following" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Posted />
        </TabPanel>
        <TabPanel value="2">
          <Accepted />
        </TabPanel>
        <TabPanel value="3">
          <Following />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
