import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Typography from '@mui/material/Typography';
import OfferTab from './OfferTab';
import QuestionTab from './QuestionTab';

function OfferAndQuestionTab({ task, user, setTask }) {
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
              <Tab
                label={<Typography variant="h4">Offers({task.offers.length})</Typography>}
                value="offer"
              />
            )}
            <Tab label={<Typography variant="h4">Questions(2)</Typography>} value="question" />
          </TabList>
        </Box>
        {value === 'offer' && <OfferTab task={task} user={user} setTask={setTask} />}
        {value === 'question' && <QuestionTab />}
      </Tabs>
    </Box>
  );
}

OfferAndQuestionTab.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    create_user_id: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
    offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
  user: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  setTask: PropTypes.func.isRequired,
};

export default OfferAndQuestionTab;
