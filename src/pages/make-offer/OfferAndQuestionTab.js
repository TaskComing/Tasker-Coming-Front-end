import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Typography from '@mui/material/Typography';
import OfferTab from './OfferTab';
import QuestionTab from './QuestionTab';

export default function OfferAndQuestionTab() {
  const [value, setValue] = React.useState('offer');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', marginTop: '67px' }}>
      <Tabs value={value}>
        <Box
          sx={{
            '& .MuiTab-root': {
              fontWeight: '700',
              justifyContent: 'flex-start',
              textTransform: 'none',
              borderBottom: '5px solid #AA9B8D5C',
            },
            '& .Mui-selected': {
              fontWeight: '700',
              color: '#4C535F',
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#F9AD13',
              height: '5px',
            },
          }}
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            styles={{ color: '#4C535F' }}
          >
            <Tab label={<Typography variant="h4">Offers(2)</Typography>} value="offer" />
            <Tab label={<Typography variant="h4">Questions(2)</Typography>} value="question" />
          </TabList>
        </Box>
        {value === 'offer' && <OfferTab />}
        {value === 'question' && <QuestionTab />}
      </Tabs>
    </Box>
  );
}
