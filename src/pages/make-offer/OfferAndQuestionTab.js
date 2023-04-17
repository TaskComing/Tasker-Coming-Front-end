import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Typography from '@mui/material/Typography';
import OfferTab from './OfferTab';
import QuestionTab from './QuestionTab';

function OfferAndQuestionTab({ task, user }) {
  const [value, setValue] = React.useState('question');

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
            {user && user.user.id === task.create_user_id.id && (
              <Tab label={<Typography variant="h4">Offers(2)</Typography>} value="offer" />
            )}
            <Tab label={<Typography variant="h4">Questions(2)</Typography>} value="question" />
          </TabList>
        </Box>
        {value === 'offer' && <OfferTab />}
        {value === 'question' && <QuestionTab />}
      </Tabs>
    </Box>
  );
}

OfferAndQuestionTab.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    create_user_id: PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      suburb: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      postcode: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      profileImage: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      create_datetime: PropTypes.string.isRequired,
      update_datetime: PropTypes.string.isRequired,
    }).isRequired,
    budget: PropTypes.number.isRequired,
    suburb: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    create_datetime: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      suburb: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      postcode: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      profileImage: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      create_datetime: PropTypes.string.isRequired,
      update_datetime: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default OfferAndQuestionTab;
